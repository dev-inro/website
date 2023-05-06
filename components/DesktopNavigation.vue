<template>
  <div class="desktop-navigation">
    <ul class="desktop-navigation__list">
      <li class="desktop-navigation__item" v-for="child of mainNavigation.data._value.childs">
        <div class="desktop-navigation__link">
          <nuxt-link :to="child.url" class="desktop-navigation__link">{{ child.name }}</nuxt-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">

  .desktop-navigation {
    &__list {
      display: flex;
      gap: 24px;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    &__link {
      text-decoration: none;
      color: $grey;
    }
  }

</style>

<script setup>
  const { $fetchNavigation } = useNuxtApp();
  const mainNavigation = await useAsyncData('mainNavigation', async () => await $fetchNavigation('main-nav'));
</script>
