<template>
  <v-container>
    <div v-if="article">
      <h1 class="mb-6">{{ article.title }}</h1>
      <ContentRendererMarkdown :value="article.body" />
    </div>
    <div v-else>
      <p>Article not found.</p>
    </div>
  </v-container>
</template>

<script setup>
const route = useRoute()

const modules = import.meta.glob('~/content/articles/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
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

  const [path, raw] = entry
  const { meta, body } = parseArticle(raw)

  return {
    title: meta.title || route.params.slug,
    body,
  }
})
</script>
