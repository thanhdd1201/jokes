import { $api } from "@/services";
import type { Result } from "@/types/jokes";
import { defineStore } from "pinia";

const useJokesStore = defineStore({
  id: "jokeStore",
  state: () => ({
    listJokes: [] as Result[],
  }),
  getters: {},
  actions: {
    async fetchJokes(value: string) {
      const [err, res] = await $api.jokeService.getAllJokes(value);
      if (!err && res) {
        this.listJokes = res.result;
      }
    },

    async fetchJoke(id: string): Promise<Result | undefined> {
      const [err, res] = await $api.jokeService.getJoke(id);
      if (!err && res) {
        return res;
      }
    },
  },
});
export default useJokesStore;
