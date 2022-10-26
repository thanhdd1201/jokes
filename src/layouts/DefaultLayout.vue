<template>
  <div class="container">
    <div class="list-menu d-flex justify-end">
      <div class="list-menu__menu-item mr-20 my-20">SO FUNKTIONIERT'S</div>
      <div class="list-menu__menu-item mr-20 my-20">SONDERANGEBOTE</div>
      <div class="list-menu__menu-item mr-20 my-20 dropdown">
        MEIN BEREICH
        <div class="dropdown-content">
          <div href="#">Link 1</div>
          <div href="#">Link 2</div>
          <div href="#">Link 3</div>
        </div>
      </div>
    </div>
    <div class="banner">
      <div class="banner__title">The Joke Bible</div>
      <div class="banner__sub-title">Daily Laughs for you and yours</div>
      <div class="banner__input d-flex justify-center">
        <div class="banner__input--search">
          <img
            alt="search icon"
            srcset="@/assets/icon/search-copy.png"
            @click="fetchJokes"
          />
          <input
            type="text"
            class="input"
            placeholder="How can we make you laugh today"
            v-model="searchString"
          />
        </div>
      </div>
    </div>
    <slot></slot>

    <div class="footer mt-24">
      <div class="footer__contact">
        <div class="footer__contact--title">
          GOT JOKES? GET PAID FOR SUBMITTING!
        </div>
        <div class="footer__contact--btn">SUBMIT JOKE</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
//#region import

import useJokesStore from "@/stores/jokes";
import { useSearchStringStore } from "@/stores/searchString";
import { ref, watch } from "vue";

const searchStringStore = useSearchStringStore();
const jokeStore = useJokesStore();
//#endregion

//#region props
//#endregion
//#region variables
const searchString = ref<string>("");

//#endregion

//#region hooks
//#endregion

//#region function
const fetchJokes = async () => {
  const query = searchString.value ?? "all";
  await jokeStore.fetchJokes(query);
};
//#endregion

//#region computed
//#endregion

//#region reactive

watch(searchString, () => {
  searchStringStore.setSearchString(searchString.value);
});
//#endregion
</script>

<style lang="scss" scoped>
.dropdown {
  position: relative;
  display: inline-block;

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    color: $d-gray;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;

    .div {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
      &:hover {
        background-color: #ddd;
      }
    }
  }

  &:hover {
    .dropdown-content {
      display: block;
    }
  }
}

.container {
  .list-menu {
    background-color: #303030;
    &__menu-item {
      font-size: 16px;
      font-weight: 600;
      line-height: 16px;
      color: #f9f9f9;
    }
  }
  .banner {
    background-image: url(@/assets/images/bitmap.png);
    min-height: 360px;
    text-align: center;
    &__title {
      padding-top: 64px;
      font-size: 48px;
      color: #cfb995;
    }
    &__sub-title {
      font-size: 20px;
      color: #ffff;
      margin-top: 8px;
    }
    &__input {
      margin-top: 32px;
      input {
        width: 380px;
        height: 38px;
        background: transparent;
        border-radius: 4px;
        border: 1px solid #ffff;
        padding-left: 12px;
        &::placeholder {
          padding-left: 12px;
        }
        &:focus {
          background-color: #ffff;
        }
      }
      &--search {
        width: 380px;
        color: $white-two;
        position: relative;
        &::placeholder {
          color: $white-two;
        }
        &::-ms-input-placeholder {
          color: $white-two;
        }
        img {
          position: absolute;
          right: 10px;
          top: 8px;
          cursor: pointer;
        }
      }
    }
  }
  .footer {
    background-image: url(@/assets/images/footer.png);
    height: 194px;
    &__contact {
      width: 200px;
      text-align: start;
      margin-left: 200px;
      padding-top: 64px;

      &--title {
        color: #ffff;
        font-size: 16px;
        font-weight: 400;
      }
      &--btn {
        margin-top: 12px;
        color: #cfb995;
      }
    }
  }
}
</style>
