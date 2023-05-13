<template>

  <div class="the-footer">

    <div class="the-footer__logo">
      <LargeLogo />
    </div>

    <div class="the-footer__bottom">

      <nav class="the-footer__navigation" v-if="navigation?.data?.value?.childs">
        <nuxt-link v-for="item in navigation.data.value.childs" class="the-footer__link" :to="item.url">{{ item.name }}</nuxt-link>
      </nav>

      <div class="the-footer__copyright">© inro engineering & consulting GmbH {{ year }}</div>

    </div>

  </div>
</template>

<style lang="scss">

  .the-footer {
    padding: 40px;
    text-align: center;
    width: 100%;
    max-width: $max-width;
    margin: 0 auto;

    @include mq($min-width: $desktop) {
      padding-left: 0;
      padding-right: 0;
      padding-top: 80px;
      text-align: left;
    }

    &__bottom {
      @include mq($min-width: $desktop) {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }

    &__logo {
      margin-bottom: 40px;
    }

    &__navigation {
      margin-bottom: 40px;

      @include mq($min-width: $desktop) {
        display: flex;
        margin-bottom: 0;
        gap: 24px;
        order: 2;
      }
    }

    &__copyright {
      font-weight: 400;
      font-size: 16px;

      @include mq($min-width: $desktop) {
        order: 1;
      }
    }

    &__link {
      display: block;
      margin-bottom: 24px;
      text-decoration: none;
      color: $grey;
      font-weight: 400;
      font-size: 16px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

</style>

<script setup>

  const year = new Date().getFullYear();
  const { $fetchNavigation } = useNuxtApp();
  const navigation = await useAsyncData('footer', async () => await $fetchNavigation('footer'));

</script>
