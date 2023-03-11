<script>
import Container from './Container.vue';


	export default {
   	components: { Container },
		
		props:{
			theme: {
				type: Boolean,
				required:true
			}
		},
}
</script>

<template>
	<header>
		<Container>
			<div class="wrapper">

				<h2
					@click="$router.push('/')"
				>Where is the world?</h2>
				<span v-if="theme">
					<img 					 
						src='../assets/dark-moon.svg'
						alt=""
						@click="$emit('changeTheme', false)"
					>
					Light theme
				</span>

				<span v-else>					 
					<img 
						src='../assets/moon.svg'
						alt=""
						@click="$emit('changeTheme', true)"
					>
					Dark theme
				</span>
			</div>

		</Container>
	</header>
</template>


<style lang="scss" scoped>
header{
	box-shadow: var(--shadow);
	background-color: var(--colors-ui-base);

	h2{
		cursor: pointer;
	}
	
	.wrapper{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1.5rem 0;
	}
	
	span{
		display: flex;
		align-items: center;
		gap: 5px;

		img{
			width: 20px;
			height: 20px;	
			cursor: pointer;
		}
	}
}
</style>