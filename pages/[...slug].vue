<template>
    <div class="the-page">
    <TheHeader />
    <DynamicPage v-if="data && data.articles" :page="data" />
    <TheFooter />
    </div>
</template>

<script setup>
import useFetchPage from '@/useFetchPage';
const route = useRoute();
const { $fetchPageBySlug } = useNuxtApp();
const slug = !!route?.params?.slug ? '/' + route.params.slug.join('/') : '/';
const data = useAsyncData(slug, () => $fetchPageBySlug(slug));

</script>
