<template>

  <div class="contact-box">
    <div class="contact-box__inside">

      <svg class="contact-box__circle" width="262" height="261" viewBox="0 0 262 261" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M262 261H182.307C179.383 213.724 159.221 169.155 125.631 135.714C92.0408 102.273 47.3487 82.2774 0 79.5051V0C68.4693 2.82567 133.383 31.2119 181.9 79.5431C230.416 127.874 259.001 192.63 262 261V261Z" fill="white" fill-opacity="0.1"/>
      </svg>


      <div class="contact-box__content">
        <div class="contact-box__title">
          Sie haben Fragen zu unseren Leistungen?
        </div>
        <div class="contact-box__text">
          Gerne beraten wir Sie unverbindlich und beantworten Ihnen alle Fragen zu Ihrem Bauvorhaben.
        </div>
      </div>

      <div class="contact-box__data">

        <IconLink class="contact-box__link" :link="`mailto:${email}`" :title="email">

          <template #preIcon>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.33341 3.33333H16.6667C17.5834 3.33333 18.3334 4.08333 18.3334 4.99999V15C18.3334 15.9167 17.5834 16.6667 16.6667 16.6667H3.33341C2.41675 16.6667 1.66675 15.9167 1.66675 15V4.99999C1.66675 4.08333 2.41675 3.33333 3.33341 3.33333Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M18.3334 5L10.0001 10.8333L1.66675 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

          </template>

        </IconLink>

        <IconLink class="contact-box__link" :link="`tel:${phone.trim().replace('/', '').replace(' ', '')}`" :title="phone">
          <template #preIcon>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.3334 14.1V16.6C18.3344 16.8321 18.2868 17.0618 18.1939 17.2745C18.1009 17.4871 17.9645 17.678 17.7935 17.8349C17.6225 17.9918 17.4206 18.1112 17.2007 18.1856C16.9809 18.2599 16.7479 18.2876 16.5168 18.2667C13.9525 17.988 11.4893 17.1118 9.32511 15.7083C7.31163 14.4289 5.60455 12.7218 4.32511 10.7083C2.91676 8.53434 2.04031 6.05916 1.76677 3.48334C1.74595 3.25289 1.77334 3.02064 1.84719 2.80136C1.92105 2.58208 2.03975 2.38058 2.19575 2.20969C2.35174 2.0388 2.54161 1.90226 2.75327 1.80877C2.96492 1.71528 3.19372 1.66689 3.42511 1.66667H5.92511C6.32953 1.66269 6.7216 1.8059 7.02824 2.06961C7.33488 2.33332 7.53517 2.69954 7.59177 3.1C7.69729 3.90006 7.89298 4.68561 8.17511 5.44167C8.28723 5.73994 8.31149 6.0641 8.24503 6.37574C8.17857 6.68737 8.02416 6.97343 7.80011 7.2L6.74177 8.25833C7.92807 10.3446 9.65549 12.072 11.7418 13.2583L12.8001 12.2C13.0267 11.9759 13.3127 11.8215 13.6244 11.7551C13.936 11.6886 14.2602 11.7129 14.5584 11.825C15.3145 12.1071 16.1001 12.3028 16.9001 12.4083C17.3049 12.4654 17.6746 12.6693 17.9389 12.9812C18.2032 13.2932 18.3436 13.6913 18.3334 14.1Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </template>
        </IconLink>

      </div>
    </div>
  </div>

</template>

<style lang="scss">

  .contact-box {
    color: $white;

    &__inside {
      width: 100%;
      max-width: $max-width;
      margin: 0 auto;
      background-color: $grey;
      position: relative;
      padding: 48px 24px;

      @include mq($min-width: $desktop) {
        padding: 80px;
        display: flex;
        align-items: flex-end;
        gap: 140px;
      }
    }

    &__circle {
      position: absolute;
      left: 0;
      bottom: 0;
      pointer-events: none;
    }

    &__content {
      margin-bottom: 20px;

      @include mq($min-width: $desktop) {
        margin-bottom: 0;
      }
    }

    &__title {
      font-size: 24px;
      line-height: 32px;
      font-weight: 600;

      @include mq($min-width: $desktop) {
        font-size: 32px;
        line-height: 44px;
        max-width: 420px;
      }

      &::after {
        content: ' ';
        display: block;
        width: 92px;
        height: 1px;
        background-color: $middle-grey;
        margin-top: 20px;
        margin-bottom: 20px;
      }
    }

    &__text {
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;

      @include mq($min-width: $desktop) {
        max-width: 420px;
      }
    }

    &__link {
      color: $white;
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;
      }
    }

  }

</style>

<script setup>

  import { email, phone } from '@/data';


</script>
