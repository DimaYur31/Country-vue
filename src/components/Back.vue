<template>
	<div class="arrow">
		<span/>back		
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style lang="scss" scoped>
	.arrow{
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 5px;
		text-transform: uppercase;
		width: 80px;
		height: 30px;
		background-color: var(--colors-ui-base);
		color: var(--colors-text);
		font-weight: var(--fw-normal);
		border: 1px solid var(--colors-text);
		cursor: pointer;

		span{
			position: relative;
			display: inline-block;
			width: 12px;
			height: 2px;
			border-radius: 3px;
			background-color: var(--colors-text);
			
			&::before{
				content: '';
				position: absolute;
				left: -2px;
				height: 2px;
				transform: translateY(-100%) rotate(-35deg);
				width: 8px;
				border-radius: 2px;
				
				background-color: var(--colors-text);
			}

			&::after{
				content: '';
				position: absolute;
				left: -2px;
				height: 2px;
				transform: translateY(100%) rotate(35deg);
				width: 8px;
				border-radius: 2px;
				
				background-color: var(--colors-text);
			}
		}
	}
	</style>