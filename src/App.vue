<template>
	<div>
		<Header 
			:theme="theme"
			@changeTheme="setTheme"	
		/>
		<Main>
			<router-view 
				:countries="countries" 
			/>
		</Main>
	</div>
</template>

<script>
	import Header from "./components/Header.vue";
	import Main from "./components/Main.vue";
	import Card from "./components/Card.vue";
	import {ALL_COUNTRIES} from "./config.js";

	export default {
		components: { Header, Main,  Card },

		data(){
			return {
				theme: false,
				countries: [],
			}
		},
		
		methods:{
			setTheme(bool){
				this.theme = bool
			},

			async fetchData(){
				const res = await fetch(ALL_COUNTRIES).then(res=>res.json())
			
				this.countries = res
			}
		},
		watch:{
			theme(){
				document.body.setAttribute('data-theme', this.theme? 'light':'dark')
			}

		},	
	
		mounted(){
			document.body.setAttribute('data-theme', this.theme? 'light':'dark');
			this.fetchData()			
		},
	}
</script>

<style scoped>
</style>