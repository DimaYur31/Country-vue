<template>
	<div>
		<Back @click="$router.go(-1);"/>

		<CountryInfo 
			v-if="country"
			:country="country"
			@goToPath="refetch"
		/>
	</div>
</template>

<script>
	import CountryInfo from '../components/CountryInfo.vue';
	import Back from '../components/Back.vue';
	import {filterByCode, searchCountry} from '../config.js';

	export default {
		components: { CountryInfo,Back },

		data() {
			return {
				country: null,
			};
   	},
		methods: {
				async fetchCountry() {
					let data = await fetch(searchCountry(this.$route.params.name)).then(data => data.json());
					
					let neibors

					if(data[0].borders){
						let borders = await fetch(filterByCode(data[0].borders)).then(data=>data.json())
						neibors = borders.map(item=>item.name)
					}else{
						neibors = null
					}

					this.country = {
						name: data[0].name,
						nativeName: data[0].nativeName,
						flag: data[0].flag,
						capital: data[0].capital,
						population: data[0].population,
						region: data[0].region,
						subregion: data[0].subregion,
						topLevelDomain: data[0].topLevelDomain,
						currencies: data[0].currencies,
						languages: data[0].languages,
						borders: neibors,
					};
			},

			async refetch(neibor){
				await this.$router.push(`/${neibor}`);
				this.$route
				this.fetchCountry();
			},		
		},

		watch:{
		$route(){
			this.fetchCountry();
		}
	},

   mounted() {		
      this.fetchCountry();
   },
}
</script>

<style lang="scss" scoped>
	
</style>