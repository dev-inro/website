<template>

  <a class="icon-link" :href="link">
    <slot name="preIcon"></slot>
    <span class="icon-link__title" v-if="title">{{ title }}</span>
    <div class="icon-link__icon"><slot></slot></div>
  </a>

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
  const props = defineProps(['title', 'link']);
  const { title, link } = props;
</script>
