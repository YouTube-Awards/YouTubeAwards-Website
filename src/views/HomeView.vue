<script setup>

import { ref, computed } from 'vue'

const event_date = ref(new Date("2024-11-15"))
const time_delta = computed(() => {
    return new Date(event_date - Date.now())
})

</script>

<template>
	Event starts in:<br>
    {{ time_delta.getHours() }}h {{ time_delta.getMinutes() }}min {{ time_delta.getSeconds() }}s
    {{ new Date(event_date - Date.now()) }}
</template>
