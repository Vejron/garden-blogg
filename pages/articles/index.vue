<template>
  <main class="max-w-5xl w-full mx-auto">
    <h2 class="py-10 text-center font-bold text-4xl">Alla artiklar</h2>
    <ul class="grid grid-cols-1 md:grid-cols-2 gap-6 py-6 mb-6">
      <li
        v-for="article in stories" :key="article._uid"
        class="flex-auto" style="min-width: 33%">
        <article-teaser
          v-if="article.content"
          :article-link="article.full_slug"
          :article-content="article.content"/>
        <p v-else class="px-4 py-2 text-white bg-red-700 text-center rounded">This content loads on save. <strong>Save the entry & reload.</strong></p>
      </li>
    </ul>
  </main>
</template>
 
<script>
export default {
  data () {
    return {
      stories: []
    }
  },
  asyncData (context) {
    return context.app.$storyapi.get('cdn/stories', {
      starts_with: 'articles/',
      version: 'draft'
    }).then((res) => {
      return res.data
    }).catch((res) => {
      if (!res.response) {
        console.error(res)
        context.error({ statusCode: 404, message: 'Failed to receive content form api' })
      } else {
        console.error(res.response.data)
        context.error({ statusCode: res.response.status, message: res.response.data })
      }
    })
  }
}
</script>