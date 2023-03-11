<template>
	<div class="controls">
		<Search 
			:search="search" 
			@search="newSearch" 
		/>
		<CustomSelect 
			:options="options"
			:select="select"
			@select="optionSelect"
			@clear="cliar"
		/>
	</div>
</template>

<script>
	import CustomSelect from './CustomSelect.vue';
	import Search from './Search.vue';

	export default {
		components: { Search, CustomSelect },

		props:{
			search:{
				type:String
			},
			region:{
				type:String
			},
		},

		data(){
			return{
				options: [
					{value:'Africa', label:'Africa'},
					{value:'America', label:'America'},
					{value:'Asia',label:'Asia'},
					{value:'Europe',label:'Europe'},
					{value:'Oceania',label:'Oceania'},
				],
				select:'Filter by Region',
			}
		},

		methods:{
			optionSelect(option){
				this.select = option
				this.$emit('select',option)
			},
			cliar(){
				this.select = 'Filter by Region'
				this.$emit('select', '')
			},	
			newSearch(text){
				this.$emit('search',text)
			}
		},	
	}
</script>

<style lang="scss" scoped>
	.controls{
		display: flex;
		flex-direction: column;
		align-items: start;
	}

	@media(min-width: 767px){
		.controls{
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
		}
	}
</style>