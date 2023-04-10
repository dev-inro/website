<template>

  <div class="module-gallery">
    <img v-for="image in fields.images" :key="image.sys.id" :src="image.fields.file.url" :alt="image.fields.title" class="module-gallery__image" />
  </div>

</template>

<style lang="scss">

  .module-gallery {

    @include mq($min-width: $tablet) {
      display: flex;
      flex-wrap: wrap;
    }

    &__image {
      width: 100%;
      height: auto;

      @include mq($min-width: $tablet) {
        width: 50%;
        height: 480px;
        object-fit: cover;
      }

    }
  }

</style>

<script setup>
  const props = defineProps(['fields']);
</script>
