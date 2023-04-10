<template>
    <div class="the-article">
        <div class="the-article__inside">
            <TheModules :modules="article.modules" />
        </div>
    </div>
</template>

<style lang="scss">

  .the-article {
    padding-top: 40px;
    padding-bottom: 40px;

    &:first-child {
      padding-top: 0;
    }

    &:last-child {
      padding-bottom: 0;
    }

    @include mq($min-width: $desktop) {
      padding-top: 60px;
      padding-bottom: 60px;
    }
  }



</style>

<script setup>
    const props = defineProps(['article']);
</script>
