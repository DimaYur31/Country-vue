<template>
	<div>
		<Controls 
			:search="search"
			:region="region"
			@search="setText"
			@select="setRegion"
		/>

		<List>
				<Card
					v-for="country in searchByRegion"
					:country="country"
					:key="country.name"
				/>
		</List>
	</div>
</template>

<script>
import Card from '../components/Card.vue';
import Controls from '../components/Controls.vue';
import List from '../components/List.vue';

	export default {
   components: { Controls, List, Card },

	props:{
		countries:{
			type:Array,
			default:()=>[]
		}
	},

	data(){
		return{
			search:'',
			region:'',
		}
	},

	methods:{
		setText(text){
			this.search = text;
		},
		setRegion(value){
			this.region = value;
		}
	},
	computed:{
		searchByRegion(){
			let data = [...this.countries];

			if(this.region !== ''){
				data = data.filter(country=> country.region.toLowerCase().includes(this.region.toLowerCase()))
			}
			
			if(this.search.trim() !== '') {
				data = data.filter(country=> country.name.toLowerCase().includes(this.search.toLowerCase()))
			}

			return data;
		}
	}	
}
</script>

<style lang="scss" scoped>

</style>