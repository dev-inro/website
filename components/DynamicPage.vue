<template>
    <div class="dynamic-page">
        <TheArticles :articles="page.articles" />
        <ContactBox />
    </div>
</template>

<script setup>
    const props = defineProps(['page']);
</script>
