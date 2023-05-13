<template>
  <div class="teaser-item">
    <div class="teaser-item__top">
      <h3 v-if="title" class="teaser-item__title">{{ title }}</h3>
      <p v-if="text" class="teaser-item__text">{{ text }}</p>
    </div>
    <IconLink v-if="link || pageLink.fields.slug" class="teaser-item__link" :link="link || pageLink.fields.slug" :title="linkText">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.16669 10H15.8334" stroke="#1F2B38" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10 4.16666L15.8333 9.99999L10 15.8333" stroke="#1F2B38" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </IconLink>
  </div>
</template>

<style lang="scss">

  .teaser-item {
    background-color: $light-grey;
    color: $grey;
    padding: 40px 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;


    &__title {
      font-size: 24px;
      line-height: 34px;
      font-weight: 600;

      &::after {
        content: ' ';
        width: 92px;
        height: 1px;
        background-color: $middle-grey;
        display: block;
        margin-top: 20px;
        margin-bottom: 20px;
      }
    }

    &__text {
      font-size: 16px;
      line-height: 34px;
      margin-bottom: 16px;
    }

    &__link {
      align-self: baseline;
    }
  }

</style>

<script setup>
  const props = defineProps(['title', 'text', 'link', 'pageLink', 'linkText']);
  const { title, text, link, pageLink, linkText } = props;
</script>
