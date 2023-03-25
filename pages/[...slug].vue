<template>
    <p>{{ data.title }}</p>
</template>

<script setup>
const route = useRoute()
const { $fetchPageBySlug } = useNuxtApp()
const slug = !!route?.params?.slug ? '/' + route.params.slug.join('/') : '/';
const { data } = await useAsyncData(slug, async () => await $fetchPageBySlug(slug));
</script>