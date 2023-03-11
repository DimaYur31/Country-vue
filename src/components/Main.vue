<template>
	<div class="wrapper">
		<Container>
			<slot></slot>
		</Container>
	</div>
</template>

<script>
import Container from './Container.vue';

	export default {
   	components: { Container }
}
</script>

<style lang="scss" scoped>
	.wrapper{
		padding: 2rem 0;
	}

	@media(min-width: 767px){
		.wrapper{
			padding: 4rem 0;
		}
	}
</style>