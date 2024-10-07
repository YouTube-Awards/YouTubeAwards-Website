import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.config.globalProperties.site_name = "YouTube Awards"
app.config.globalProperties.site_founder = "Karl LÉOGNANY"
app.config.globalProperties.site_color = "#f00"
app.config.globalProperties.site_main_project = "Social Awards"
app.config.globalProperties.site_github = {
	author: "YouTube-Awards",
	name: "YouTubeAwards-Website",
	url: "https://github.com/",
}
app.config.globalProperties.site_github.full_name = app.config.globalProperties.site_github.author + "/" + app.config.globalProperties.site_github.name
app.config.globalProperties.site_github.url = "https://github.com/" + app.config.globalProperties.site_github.full_name

app.use(router)
app.mount('#app')
