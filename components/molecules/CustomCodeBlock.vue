<template>
  <!-- No! don't get tempted to indent thist as it will fuck with the layout because of how white-space: pre works -->   
  <client-only><pre><code :class="elementClass"><slot/></code></pre></client-only>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import { CodeAttributes } from "@marvr/storyblok-rich-text-types";

export default defineComponent({
  name: "SbCodeBlock",
  props: {
    attrs: {
      type: Object as () => CodeAttributes,
      required: true,
    },
  },
  setup({ attrs }) {
    const elementClass = ref(attrs.class);

    return {
      elementClass,
    };
  },
});
</script>
