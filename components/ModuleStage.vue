<template>
    <div class="module-stage">
        <div class="module-stage__inside">
            <svg class="module-stage__icon" width="387" height="385" viewBox="0 0 387 385" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M387 385H269.285C264.967 315.263 235.186 249.519 185.57 200.191C135.953 150.863 69.9387 121.367 0 117.278V0C101.136 4.16814 197.02 46.0405 268.684 117.334C340.347 188.627 382.57 284.148 387 385Z" fill="white" fill-opacity="0.2"/>
            </svg>

            <div class="module-stage__content">
                <h1 v-if="title" class="module-stage__title">{{ title }}</h1>
                <div class="module-stage__text" v-html="html" />
            </div>

            <img v-if="image?.fields?.file?.url" :src="image.fields.file.url" :alt="image.fields?.title || image.fields?.description || image.fields.file.fileName" class="module-stage__image" />
        </div>
    </div>
</template>

<style lang="scss">

  $small-image-height: 280px;
  $large-image-height: 480px;

  .the-articles .the-article:first-child .module-stage:first-child {
    margin-top: -40px;

    @include mq($min-width: $desktop) {
      margin-top: -60px;
    }
  }

  .module-stage {
    color: $white;
    padding-bottom: $small-image-height / 2;

    @include mq($min-width: $desktop) {
      padding-bottom: $large-image-height / 2;
    }

    &__inside {
      background-color: $grey;
      padding: 80px $side-gap ($small-image-height/2)+80px $side-gap;
      position: relative;

      @include mq($min-width: $desktop) {
        padding-bottom: ($large-image-height/2)+120px;
      }
    }

    &__content {
      text-align: center;
      max-width: $max-width;
      margin: 0 auto;
    }

    &__title {
      font-size: 40px;
      line-height: 48px;
      font-weight: 600;
      margin-bottom: 28px;

      @include mq($min-width: $desktop) {
        font-size: 64px;
        line-height: 78px;
      }
    }

    &__text {
      p {
        font-size: 24px;
        line-height: 32px;

        @include mq($min-width: $desktop) {
          font-size: 32px;
          line-height: 44px;
        }
      }
    }

    &__image {
      height: $small-image-height;
      object-fit: cover;
      width: calc(100% - $side-gap * 2);
      max-width: $max-width;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 50%);

      @include mq($min-width: $desktop) {
        height: $large-image-height;
      }
    }

    &__icon {
      position: absolute;
      left: 0;
      bottom: 0;
    }

  }

</style>

<script setup>
    import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

    const props = defineProps(['fields']);
    const { title, text, image } = props.fields;
    const html = documentToHtmlString(text);
</script>
