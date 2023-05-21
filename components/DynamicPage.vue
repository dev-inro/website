<template>
    <div class="dynamic-page">
        <TheArticles :articles="page.articles">
          <TheArticle v-if="!page.hide_contactbox">
            <ContactBox />
          </TheArticle>

        </TheArticles>

    </div>
</template>

<script setup>
    const props = defineProps(['page']);
    const { page } = props;
</script>
