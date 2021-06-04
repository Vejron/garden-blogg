import Vue from 'vue';
import { Block } from '@marvr/storyblok-rich-text-types';
import VueRichTextRenderer from '@marvr/storyblok-rich-text-vue-renderer';
import CustomCodeBlock from '~/components/molecules/CustomCodeBlock.vue';
 
// Simple ...
Vue.use(VueRichTextRenderer, {
  resolvers: {
    blocks: {
      [Block.CODE]: CustomCodeBlock
    }
  }
});