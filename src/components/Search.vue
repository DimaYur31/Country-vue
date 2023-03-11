<template>
	<label class="container">
		<input 
			:value="search"
			@input="search = $event.target.value"
			type="text"
			placeholder="Search for a country..."
		>
	</label>
</template>

<script>
	export default {
		props:{
			search:{
				type:String
			}	
		},
		
		watch:{
			search(text){
				this.$emit('search', text)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		background-color: var(--colors-ui-base);
		padding: .5rem 1rem;
		display: flex;
		align-items: center;
		border-radius: var(--radii);
		box-shadow: var(--shadow);
		width: 100%;
		margin-bottom: 1rem;

		input{
			margin-left: 0.5rem;
			border: none;
			outline: none;
			background-color: var(--color-bg);
			color: var(--color-text);
		}
	}

	@media(min-width: 767px){
		.container{
			margin-bottom: 0;
			width: 280px;
		}
	}
</style>