<template>

  <div class="module-image-text">

    <div class="module-image-text__content">
      <div class="module-image-text__text" v-html="html" />
    </div>
    <img class="module-image-text__image" :src="image.fields.file.url" :alt="image.fields?.title || image.fields?.description || image.fields.file.fileName" />

  </div>

</template>

<style lang="scss">

  .module-image-text {

    @include mq($min-width: $tablet) {
      display: flex;
    }

    &__content {
      background-color: $light-grey;
      padding: 80px $side-gap;
      flex: 1;


      @include mq($min-width: $tablet) {
        padding: 120px 40px 120px 0;
        display: flex;
        justify-content: end;
      }
    }

    &__text {
      max-width: ($max-width / 2) - 20px;

      > * {
        margin-bottom: 20px;

        @include mq($min-width: $desktop) {
          margin-bottom: 40px;
        }

        &:last-child {
          margin-bottom: 0;
        }
      }

      p {
        font-size: 16px;
        line-height: 26px;
      }

      a {
        color: $grey;
      }

      h1, h2, h3, h4, h5, h6 {
        font-weight: 600;
      }

      h1 {
        font-size: 40px;
        line-height: 48px;

        @include mq($min-width: $desktop) {
          font-size: 60px;
          line-height: 78px;
        }
      }

      h2 {
        font-size: 36px;
        line-height: 44px;

        @include mq($min-width: $desktop) {
          font-size: 56px;
          line-height: 64px;
        }
      }

      h3 {
        font-size: 32px;
        line-height: 40px;

        @include mq($min-width: $desktop) {
          font-size: 52px;
          line-height: 60px;
        }
      }

      h4, h5, h6 {
        font-size: 28px;
        line-height: 36px;

        @include mq($min-width: $desktop) {
          font-size: 48px;
          line-height: 56px;
        }
      }
    }

    &__image {
      flex: 1;
      width: 100%;
      height: auto;

      @include mq($min-width: $tablet) {
        object-fit: cover;
      }
    }

  }

</style>

<script setup>
  import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

  const props = defineProps(['fields']);
  const { text, image } = props.fields;
  const html = documentToHtmlString(text);

</script>
