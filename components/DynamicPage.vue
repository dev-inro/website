<template>
    <div class="dynamic-page">
        <TheArticles :articles="page.articles" />
        <ContactBox v-if="!page.hide_contactbox" />
    </div>
</template>

<script setup>
    const props = defineProps(['page']);
</script>
