<template>
	<section>
		<section>
			<h1>About</h1>
			<p>YouTube Awards is an event made by the community and isn't affiliated with <a href="https://www.google.com/" target="_blank">Google</a> or <a href="https://www.youtube.com/" target="_blank">YouTube</a>.</p>
			<p>
				Meet us every year during autumn to reward the best channels in a lot of categories, from educational to gaming, passing through the new talents of the year or the community vote.
			</p>
			<p>You can also watch the Shorts Awards for the shorts content creators, during the summer, with Shorts-based categories.</p>
			<p>
				This website is made using Vue.js and is open-source. You can find the source code on GitHub:<br>
				<a :href="site_github.url" target="_blank">{{ site_github.full_name }}</a>
			</p>
			<p>If you have any suggestions or bug reports, please open an issue on GitHub.</p>
		</section>

		<section>
			<h1>{{ site_main_project }}</h1>
			<p>{{ site_name }} is part of {{ site_main_project }}, a project that aims to create a platform for rewarding content creators in every platform.</p>
			<p>{{ site_main_project }} contains {{ site_name }}, Instagram Awards, Shorts Awards (part of {{ site_name }}) and Facebook Awards.</p>
			<p>{{ site_main_project }} is founded by {{ site_founder }} and isn't affiliated with any of the platforms mentioned above.</p>
		</section>
	</section>
</template>
