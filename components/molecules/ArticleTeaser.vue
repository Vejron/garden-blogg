<template>
  <nuxt-link
    :to="articleLink"
    class="article-teaser block py-4 px-6 rounded bg-white">
    <h2 class="pt-2 pb-4 text-2xl font-bold">
      {{ articleContent.title }}
    </h2>
    <rich-text-renderer
      :document="articleContent.intro"
    />
  </nuxt-link>
</template>
 
<script>
export default {
  props: {
    articleContent: {
      type: Object,
      required: true
    },
    articleLink: {
      type: String,
      required: true
    }
  }
}
</script>
 