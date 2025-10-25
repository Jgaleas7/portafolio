<template>
  <v-container>
    <v-row>
      <v-col
        v-for="article in articleList"
        :key="article.slug"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card
          class="ma-2"
          outlined
        >
          <NuxtLink
            :to="article._path"
            class="text-decoration-none"
          >
            <v-card-title>{{ article.title }}</v-card-title>
            <v-card-text>{{ article.description }}</v-card-text>
          </NuxtLink>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const modules = import.meta.glob('~/content/articles/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
})

function parseFrontMatter(raw) {
  const match = /^---\n([\s\S]*?)\n---/m.exec(raw)
  if (!match) {
    return {}
  }

  return match[1].split('\n').reduce((acc, line) => {
    const [key, ...rest] = line.split(':')
    if (!key) return acc
    acc[key.trim()] = rest.join(':').trim()
    return acc
  }, {})
}

const articleList = computed(() =>
  Object.entries(modules)
    .map(([path, raw]) => {
      const meta = parseFrontMatter(raw)
      const slug = path.split('/').pop()?.replace(/\.md$/, '') || ''
      return {
        slug,
        title: meta.title || slug,
        description: meta.description || '',
        date: meta.date || '',
        _path: `/articles/${slug}`,
      }
    })
    .sort((a, b) => {
      const dateA = a.date ? new Date(a.date).getTime() : 0
      const dateB = b.date ? new Date(b.date).getTime() : 0
      return dateB - dateA
    })
)

useSeoMeta({
  title: 'Articles',
  description: 'Read the latest writing from Juan Galeas.',
})
</script>
