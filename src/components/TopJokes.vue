<template>
  <div class="top-joke-layout">
    <h3 class="header">The top 10 jokes this week</h3>
    <p v-for="joke in topJokes" :key="joke.id" class="one-line">
      {{ joke.value }}
    </p>
  </div>
</template>

<script setup lang="ts">
//#REGION import
import type { Result } from "@/types/jokes";
import { computed, onMounted, ref } from "vue";
import { useSearchStringStore } from "@/stores/searchString";
import useJokesStore from "@/stores/jokes";
//#END-REGION

//#REGION variables
const searchStringStore = useSearchStringStore();

const listJokes = ref<Result[]>([]);

const defaultTakeJoke = ref<number>(10);

const jokeStore = useJokesStore();

//#END-REGION

//#REGION hooks
onMounted(async () => {
  await fetchJokes();
});
//#END-REGION

//#REGION function
const fetchJokes = async () => {
  const query = searchStringStore.searchString ?? "all";
  await jokeStore.fetchJokes(query);
  listJokes.value = jokeStore.listJokes;
};
//#END-REGION

//#REGION computed
const topJokes = computed(() =>
  listJokes.value.filter((x, index) => index < defaultTakeJoke.value)
);
//#END-REGION
</script>

<style>
.one-line {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>
