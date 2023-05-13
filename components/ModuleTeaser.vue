<template>
  <div class="module-teaser">
    <TeaserItem v-for="teaser in fields.teaser" :key="teaser.sys.id" class="module-teaser__teaser-item" :title="teaser.fields.title" :text="teaser.fields.text" :link="teaser.fields.link" :pageLink="teaser.fields.pageLink" :linkText="teaser.fields.linkText" />
  </div>
</template>

<style lang="scss">

  .module-teaser {
    width: 100%;
    padding-left: $side-gap;
    padding-right: $side-gap;
    max-width: $max-width;
    margin: 0 auto;

    @include mq($min-width: $tablet) {
      display: grid;
      gap: 24px;
      grid-template-columns: repeat(2, 1fr);
    }

    @include mq($min-width: $desktop) {
      padding-left: 0;
      padding-right: 0;
      grid-template-columns: repeat(3, 1fr);
    }

    &__teaser-item {
      margin-bottom: 24px;

      @include mq($min-width: $tablet) {
        margin-bottom: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }

  }

</style>"

<script setup>
  const props = defineProps(['fields']);
</script>
