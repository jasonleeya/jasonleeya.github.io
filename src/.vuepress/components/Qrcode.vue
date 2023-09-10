<script setup lang="ts">
import {defineProps, ref} from 'vue'
import {withBase} from "@vuepress/client";

const props = defineProps<{
  url: string,
  icon: string,
  name: string,
}>()

const isShowImg = ref(false)


</script>

<template>
  <div class="wrapper">
    <div class="vp-social-media" v-html="icon" @click="isShowImg = !isShowImg" :aria-label="name" data-balloon-pos="up"></div>
    <img class="qrcode-img" :src="withBase(url)" alt="" v-if="isShowImg">
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  position: relative;
}

.icon {
  width: 100%;
  height: 100%;
  margin: 4px;
  position: relative;
  cursor: pointer;
  font-weight: 500;
  text-decoration: none;
  overflow-wrap: break-word;
}

.qrcode-img {
  position: absolute;
  top: 36px;
  width: 240px;
  z-index: 999;
  left: -103px;
  user-select: none;
}

@media (max-width: 768px) {
  .qrcode-img {
    position: absolute;
    top: 36px;
    width: 100px;
    z-index: 999;
    left: -30px
  }
}
</style>
