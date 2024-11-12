<script setup>

import { onMounted, onBeforeUnmount, ref } from 'vue'

const event_date = new Date('2024-11-14T19:00:00Z') // Sample date
const event_date_string = ref(event_date.toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
}))

const update_time_delta = () => {
    let td = new Date(event_date - new Date())
    return td
}

let time_delta = update_time_delta()

const months = ref(time_delta.getMonth())
const days = ref(time_delta.getDate() - 1)
const hours = ref(time_delta.getHours() - 1)
const minutes = ref(time_delta.getMonth())
const seconds = ref(time_delta.getSeconds())

onMounted(() => {
    const interval = setInterval(() => {
        time_delta = update_time_delta()
        months.value = time_delta.getMonth()
        days.value = time_delta.getDate() - 1
        hours.value = time_delta.getHours() - 1
        minutes.value = time_delta.getMinutes()
        seconds.value = time_delta.getSeconds()
    }, 1000)

    onBeforeUnmount(() => {
        clearInterval(interval)
    })
})

</script>

<template>

<section>
    <h1>The event starts in</h1>
    <div class="months"><span>Months</span>{{ months }}</div>
    <div class="days"><span>Days</span>{{ days }}</div>
    <div class="hours"><span>Hours</span>{{ hours }}</div>
    <div class="minutes"><span>Minutes</span>{{ minutes }}</div>
    <div class="seconds"><span>Seconds</span>{{ seconds }}</div>
    <p>On {{ event_date_string }}</p>
</section>

</template>

<style scoped>

section {
    width: calc(100vw - 2 * 1.5rem);
    margin: calc(33vh - var(--header-height)) 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 1rem;
    padding: 0 2rem;
}

section > h1, section > p {
    grid-column: 1 / -1;
    text-align: center;
}

section > div {
    background-color: #222;
    box-shadow: 0 0 12px #0008;
    border-radius: 1rem;
    padding: 1rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    flex-direction: column;
    gap: 0.5rem;
}

section > div > span {
    font-size: 1.25rem;
}

</style>