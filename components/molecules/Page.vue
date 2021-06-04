<template>
  <main v-editable="blok" class="max-w-5xl w-full mx-auto">
    <component
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
      :is="blok.component" />
  </main>
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