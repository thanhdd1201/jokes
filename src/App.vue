<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed } from "vue";
const $route = useRoute();
const layout = computed(() => $route.meta.layout);
</script>

<template>
  <suspense>
    <div>
      <component :is="layout">
        <router-view :key="$route.path" />
      </component>
    </div>
  </suspense>
</template>

<style>
#app {
  text-align: center;
  background-color: #ecebe9;
}
</style>
