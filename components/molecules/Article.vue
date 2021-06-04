<template>
  <div
    v-editable="blok"
    class="prose lg:prose-xl my-24 mx-auto">
    <h1>{{ blok.title }}</h1>
    <nuxt-img :src="blok.image.filename" sizes="sm:100vw md:80vw lg:600px xl:800px"/>
    <rich-text-renderer
      :document="blok.intro"
    />
    <rich-text-renderer
      :document="blok.content"
    />
  </div>
  
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  setup() {},
});
</script>