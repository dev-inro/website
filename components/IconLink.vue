<template>
  <a v-if="external" class="icon-link" :href="link">
    <slot name="preIcon"></slot>
    <span class="icon-link__title" v-if="title">{{ title }}</span>
    <div class="icon-link__icon"><slot></slot></div>
  </a>

  <nuxt-link v-else class="icon-link" :to="link">
    <slot name="preIcon"></slot>
    <span class="icon-link__title" v-if="title">{{ title }}</span>
    <div class="icon-link__icon"><slot></slot></div>
  </nuxt-link>

</template>

<style lang="scss">

  .icon-link {
    display: flex;
    gap: 20px;
    align-items: center;
    color: $grey;

    &__icon {
      display: flex;
      align-items: center;
    }
  }

</style>

<script setup>
  const props = defineProps(['title', 'link', 'external']);
  const { title, link, external } = props;
</script>
