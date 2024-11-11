<script setup>

import { ref, watch, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router';

const site_name = ref("YouTube Awards")
const site_color = ref("#ff0033")

const header_link_count = computed(() => {
	return document.querySelectorAll("header a").length
})

const route = useRoute()
const current_page_name = computed(() => {
	return route.name
})

onMounted(() => {
	document.title = `${current_page_name.value} | ${site_name.value}`
})

watch(current_page_name, (new_page_name) => {
	document.title = `${new_page_name} | ${site_name.value}`
})

</script>

<template>
	<header>
		<RouterLink to="/">Home</RouterLink>
		<a href="https://www.youtube.com/@YTubeAwards" target="_blank">YouTube Channel</a>
		<a :href="site_github.url" target="_blank">GitHub</a>
		<RouterLink to="/previous-editions">Previous Editions</RouterLink>
		<RouterLink to="/results">Results</RouterLink>
		<RouterLink to="/about">About</RouterLink>
	</header>

	<main>
		<RouterView />
	</main>

	<footer>
		<p>
			Copyright &copy; 2024-present &#x2212; <!-- "−" --> {{ site_name }}<br>
			{{ site_name }} is an event made by the community and isn't affiliated with <a href="https://www.google.com/" target="_blank">Google</a> or <a href="https://www.youtube.com/" target="_blank">YouTube</a>.
		</p>
	</footer>
</template>

<style>

header {
	background-color: v-bind(site_color);
	grid-template-columns: repeat(v-bind(header_link_count), 1fr);
}

button {
	background: v-bind(site_color);
}

button:hover {
	background: color-mix(in srgb, v-bind(site_color) 90% , black 10%);
}

a {
	color: color-mix(in srgb, v-bind(site_color) 85% , white 15%);
}

</style>
