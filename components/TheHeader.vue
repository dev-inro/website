<template>
  <header class="the-header">
    <div class="the-header__inside">

      <TheLogo class="the-header__logo" />
      <DesktopNavigation class="the-header__desktop-navigation" />
      <TheBurger @toggle="toggleMenu" class="the-header__the-burger" />
      <MobileNavigation class="the-header__mobile-navigation" :class="{ 'the-header__mobile-navigation--active':isOpen }" />
      <IconLink class="the-header__email" :link="`mailto:${email}`" :title="email">
        <template #preIcon>
          <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.33366 3.83325H16.667C17.5837 3.83325 18.3337 4.58325 18.3337 5.49992V15.4999C18.3337 16.4166 17.5837 17.1666 16.667 17.1666H3.33366C2.41699 17.1666 1.66699 16.4166 1.66699 15.4999V5.49992C1.66699 4.58325 2.41699 3.83325 3.33366 3.83325Z" stroke="#1F2B38" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18.3337 5.5L10.0003 11.3333L1.66699 5.5" stroke="#1F2B38" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </template>
      </IconLink>

    </div>
  </header>
</template>

<style lang="scss">
  body {
    padding-top: 96px;
  }

  .the-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background-color: $white;
    border-bottom: 1px solid $middle-grey;

    &__inside {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 25px;
      padding-right: 25px;
      height: 96px;
      max-width: $max-width;
      margin: 0 auto;
      position: relative;

      @include mq($min-width: $desktop) {
        justify-content: inherit;
        padding-left: 0;
        padding-right: 0;
      }
    }

    &__mobile-navigation {
      transform: translateY(100%);

      &--active {
        transform: translateY(0);
      }
    }

    &__email {
      display: none;

      @include mq($min-width: $desktop) {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        display: flex;
      }
    }

    &__desktop-navigation {
      display: none;

      @include mq($min-width: $desktop) {
        display: block;
        margin-left: 40px;
      }
    }

  }

</style>

<script setup>

import { email } from '@/data';
const isOpen = ref(false);

const toggleMenu = (value) => {
  isOpen.value = value;
};
</script>
