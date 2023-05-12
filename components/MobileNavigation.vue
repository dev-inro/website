<template>
  <div class="mobile-navigation">

    <ul class="mobile-navigation__list" v-if="mainNavigation?.data?._value?.childs">
      <li class="mobile-navigation__item" v-for="child of mainNavigation.data._value.childs">
        <div class="mobile-navigation__link">
          <nuxt-link :to="child.url" class="mobile-navigation__link">{{ child.name }}</nuxt-link>
          <svg class="mobile-navigation__link-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 17L17 7" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7 7H17V17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </li>
    </ul>

    <div class="mobile-navigation__contact">
      <div class="mobile-navigation__headline">So erreichen Sie uns</div>
      <IconLink class="mobile-navigation__mail" :link="`mailto:${email}`" :title="email">
        <template #preIcon>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.33329 3.33337H16.6666C17.5833 3.33337 18.3333 4.08337 18.3333 5.00004V15C18.3333 15.9167 17.5833 16.6667 16.6666 16.6667H3.33329C2.41663 16.6667 1.66663 15.9167 1.66663 15V5.00004C1.66663 4.08337 2.41663 3.33337 3.33329 3.33337Z" stroke="#1F2B38" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18.3333 5L9.99996 10.8333L1.66663 5" stroke="#1F2B38" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </template>
      </IconLink>
    </div>

  </div>
</template>

<style lang="scss">

  .mobile-navigation {
    position: fixed;
    top: 96px;
    left: 0;
    height: calc(100vh - 96px);
    background-color: $white;
    z-index: 1000;
    width: 100%;
    padding: 20px 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transform: translateY(100%);
    transition: transform 0.3s ease-in-out;

    &__list {
      list-style: none;

    }

    &__item {
      font-size: 32px;
      line-height: 38px;
      margin-bottom: 60px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    &__link {
      color: $grey;
      text-decoration: none;
      margin-right: 25px;
    }

    &__link-icon {
      transform: translateY(-10px);
    }

    &__headline {
      font-size: 28px;
      line-height: 35px;
      color: $grey;
      margin-bottom: 20px;
    }

    &__mail {
      color: $grey;
    }
  }

</style>

<script setup>
  import { email } from '@/data';
  const { $fetchNavigation } = useNuxtApp();
  const mainNavigation = await useAsyncData('mainNavigation', async () => await $fetchNavigation('main-nav'));
</script>
