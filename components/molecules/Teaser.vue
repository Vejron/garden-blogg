<template>
  <div v-editable="blok" class="relative h-96 md:mb-16 w-full flex justify-center ">
      <div class="absolute w-64 h-64 md:w-96 md:h-96 box bg-gradient-to-tr from-gray-100 to-green-200 rounded-lg transform rotate-12"></div>
      <div class="shadow-xl w-64 h-64 md:w-96 md:h-96 absolute box bg-gradient-to-tr from-gray-100 to-green-200 rounded-lg transform -rotate-12"></div>
      <div class="absolute flex flex-col items-center">
        <h1 class="mb-4 font-bold text-2xl md:text-5xl text-green-900 mt-20 text-center">{{ blok.headline }}</h1>
        <svg class="w-24 md:w-48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450">
          <path fill="#342323" d="M93 329l-1 14 10 19 124-50-12-20-13-8z"/>
          <path fill="#4e4e4e" d="M93 330l-1 16 119-52-10-12z"/>
          <path fill="#372020" d="M95 169l97 91 40 55-36-34c-32-34-67-76-101-112z"/>
          <path fill="#3a312a" d="M154 222c14-15 161-81 161-81l59 31s-16 10-19 15c-1 2-39 24-47 31l-48 14c-13 9-6 27-34 34l-29-2z"/>
          <path fill="#3a312a" d="M194 264c79-36 161-79 239-125 0 0 15-4 13 3l-28 83-190 96z"/>
          <path fill="#4e4e4e" d="M380 118c20-25 41-56 53-70 9-9 15-12 26-17l9 3v3c-11 4-19 13-26 18l-42 66c-7 3-14 0-20-3z"/>
          <path fill="#776e6b" d="M156 225c4 0 141-69 141-69l66 28 36-20 30-15 4-9S298 74 293 76c-59 37-71 37-192 91 8 26 37 40 55 58z"/>
          <path fill="#979797" d="M297 74c18 6 86 38 150 66-67 36-227 120-252 130l-28-28-73-73c59-29 129-62 203-95zM195 260l238-120c-34-13-97-46-136-58-92 42-137 60-190 89z"/>
          <path fill="#3a312a" d="M396 117c8-9 41-75 72-83v3c-9 3-20 13-25 18-12 13-23 41-39 66zM434 193l23-30c25-31 44-59 76-92 8 2 26-5 34-7l6 4v4c-5 1-19 2-31 10-35 23-41 59-65 88l-3 7z"/>
          <path fill="#4e4e4e" d="M434 188c39-34 52-83 98-116 9-6 15-5 34-9l7 5c-11 2-22 2-31 8-41 23-43 73-93 106l-15 11z"/>
          <path fill="#3a312a" d="M420 195l-2 17-5 18 69-36v-20l-7-7-2 8z"/>
          <path fill="#342323" d="M73 315l-1-7h-2l59-35 40-21 7 5 18 13-53 29-62 33z"/>
          <path fill="#4e4e4e" d="M74 307l-1 10c35-18 47-31 101-60-1-3-4-6-7-9z"/>
          <path fill="#3a312a" d="M394 236l26-13-9 87-9 5-6-3z"/>
          <g>
            <path fill="#4e4e4e" d="M41 380c-59-128 92-160 124-109-67-29-137 3-124 109z"/>
            <path fill="none" d="M104 262l22-4 38 13 14 29-3 48-18 33-23 20-31 17H76l-33-14-12-18s-6-13-6-16l7-33 18-35 28-24 22-12z"/>
          </g>
          <path fill="#342323" d="M28 344c18 87 119 83 146 18 12-30 7-64-9-98l-18-9c-69-25-123 38-119 89zm84-54l-3 2-1-20 5-2c35 5 28 4-1 20zm34-10c7 3 9 3 10 5zm-39-8l-6 3 2 21-4 2-5 1-6-6-5 2-4 11-2 5-6-5-9-3c8-15 25-25 37-28zm52 57c3-7 9-10 10-18l-25 7-18 1 5-5 35-19c2-36-9 32-7 34zm-97-22l-7 7 15-1 13 25-34 14c0-17 2-35 13-44zm24 37l7 8-23 35c-9 0-19-18-21-25v-1zm63 10l-4 10-7-9zm-49 4l4 7 7 2 1 23c-16 9-21 3-37 1l16-28zm18 1l19 24 8-19v1l-23 24c-7 1-4-17-4-30z"/>
          <path fill="#4e4e4e" d="M160 300l21-8 8 11c-9 3-24 14-33 12zM74 307l3 3 27-14-1-5z"/>
        </svg>
      </div>
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