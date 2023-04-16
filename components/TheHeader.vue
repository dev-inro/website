<template>
  <header class="the-header">
    <div class="the-header__inside">

      <TheLogo class="the-header__logo" />
      <TheBurger @toggle="toggleMenu" class="the-header__the-burger" />
      <MobileNavigation class="the-header__mobile-navigation" :class="{ 'the-header__mobile-navigation--active':isOpen }" />

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
    }

    &__mobile-navigation {
      &--active {
        transform: translateY(0);
      }
    }

  }

</style>

<script setup>
const isOpen = ref(false);

const toggleMenu = (value) => {
  console.log(value)
  isOpen.value = value;
};
</script>
