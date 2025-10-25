<template>
  <v-container>
    <div v-if="article">
      <h1 class="mb-6">{{ article.title }}</h1>
      <div
        class="article-body"
        v-html="article.html"
      />
    </div>
    <div v-else>
      <p>Article not found.</p>
    </div>
  </v-container>
</template>

<script setup>
import MarkdownIt from 'markdown-it'

const route = useRoute()

const modules = import.meta.glob('~/content/articles/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
})

const markdown = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
})

function parseArticle(raw) {
  const match = /^---\n([\s\S]*?)\n---\n?([\s\S]*)$/m.exec(raw)
  if (!match) {
    return { meta: {}, body: raw }
  }

  const meta = match[1].split('\n').reduce((acc, line) => {
    const [key, ...rest] = line.split(':')
    if (!key) return acc
    acc[key.trim()] = rest.join(':').trim()
    return acc
  }, {})

  return { meta, body: match[2] }
}

const article = computed(() => {
  const entry = Object.entries(modules).find(([path]) => path.endsWith(`${route.params.slug}.md`))
  if (!entry) {
    return null
  }

  const [, raw] = entry
  const { meta, body } = parseArticle(raw)

  return {
    title: meta.title || route.params.slug,
    description: meta.description || '',
    html: markdown.render(body),
  }
})

if (process.server && !article.value) {
  throw createError({ statusCode: 404, statusMessage: 'Article not found' })
}

useSeoMeta(() => ({
  title: article.value?.title ?? 'Article',
  description: article.value?.description ?? '',
}))
</script>

<style scoped>
.article-body :deep(p) {
  margin-bottom: 1rem;
}

.article-body :deep(h2) {
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.article-body :deep(a) {
  color: var(--v-theme-primary);
  text-decoration: underline;
}
</style>
