<template>
  <div class="detail-layout">
    <div>Back</div>
    <div></div>
    <div>{{ joke?.value || "" }}</div>
    <top-jokes />
  </div>
</template>

<script setup lang="ts">
//#REGION import
import type { Result } from "@/types/jokes";
import { onMounted, ref } from "vue";
import useJokesStore from "@/stores/jokes";
import TopJokes from "../components/TopJokes.vue";

//#END-REGION

//#REGION props
const props = defineProps(["id"]);
//#END-REGION

//#REGION variables
let joke = ref<Result>({});

const jokeStore = useJokesStore();
//#END-REGION

//#REGION hooks
onMounted(() => {
  Promise.all([fetchJoke()]);
});
//#END-REGION

//#REGION function
const fetchJoke = async () => {
  joke = await jokeStore.fetchJoke(props.id);
};
//#END-REGION
</script>

<style>
.detail-layout {
  display: grid;
  grid-template: 200px 1fr/1fr 300px;
  margin: 0 200px 0;
}
</style>
