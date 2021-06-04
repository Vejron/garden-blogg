<template>
  <header class="max-w-5xl mx-auto py-3 flex">
    <div>
      <nuxt-link class="text-indigo-600 hover:underline" to="/"> Home </nuxt-link>
    </div>
    <div class="flex-grow"></div>
    <nav>
      <ul class="flex gap-4">
        <li>
          <nuxt-link class="text-indigo-600 hover:underline" to="/articles">Artiklar</nuxt-link>
        </li>
        <li>
          <nuxt-link class="text-indigo-600 hover:underline" to="/">Kontakt</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {},
});
</script>
