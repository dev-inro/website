<template>
  <div class="module-text" v-html="html" />
</template>

<style lang="scss">

  .module-text {
    color: $grey;
    padding-left: $side-gap;
    padding-right: $side-gap;
    width: 100%;
    max-width: $max-width;
    margin: 0 auto;

    @include mq($min-width: $desktop) {
      padding-left: 0;
      padding-right: 0;
    }

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
      font-size: 20px;
      line-height: 28px;

      @include mq($min-width: $desktop) {
        font-size: 24px;
        line-height: 32px;
      }
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

</style>

<script setup>
  import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

  const props = defineProps(['fields']);
  const html = documentToHtmlString(props.fields.text);
</script>
