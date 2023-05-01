<template>
    <div class="the-page">
        <TheHeader />
        <DynamicPage v-if="data && data.articles" :page="data" />
        <TheFooter />
    </div>
</template>

<script setup>
const route = useRoute()
const { $fetchPageBySlug, $fetchNavigation } = useNuxtApp();
const slug = !!route?.params?.slug ? '/' + route.params.slug.join('/') : '/';
const { data } = await useAsyncData(slug, async () => await $fetchPageBySlug(slug));

</script>
