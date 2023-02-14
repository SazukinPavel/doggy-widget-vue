<template>
  <div class="doggy-widget">
    <img :src="src" class="doggy-widget__img" alt="doggy" />
    <button class="doggy-widget__btn" @click="updateDoggy" type="button">New doggy!</button>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "@vue/runtime-core";
import type { PropType } from 'vue'

type Config = {
  container: HTMLElement;
  containerId: string;
};

const props = defineProps({
  config: {
    type: Object as PropType<Config>,
    required: true
  }
})

const src = ref<string>('')

const updateDoggy = () => {
  const { width, height } = props.config.container.getBoundingClientRect();
  let newSrc = `https://placedog.net/${width - 10}/${height - 10}`;
  if (!localStorage.getItem('disableRandom')) {
    newSrc += `?random=${Math.random()}`
  }
  src.value = newSrc;
}

onMounted(() => {
  updateDoggy()
})
</script>

<style lang="scss" scoped>
.doggy-widget * {
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  font-size: 20px;
}

.doggy-widget {
  width: 100%;
  height: 100%;
  position: relative;

  border: 5px dashed green;
}

.doggy-widget__btn {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0px 0px 0px 2px #9fb4f2;
  background: linear-gradient(to bottom, #7892c2 5%, #476e9e 100%);
  background-color: #7892c2;
  border-radius: 10px;
  border: 1px solid #4e6096;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  padding: 12px 37px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #283966;

  &:hover {
    background: linear-gradient(to bottom, #476e9e 5%, #7892c2 100%);
    background-color: #476e9e;
  }

  &:active {
    transform: translate(-50%, 1px);

  }
}
</style>