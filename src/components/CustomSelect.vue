<template>
	<div class="wrapper">
		<p @click="setOpen">
			{{ select }}
			<span 
				class="clear"
				@click.stop="clear"
			/>
		</p>
		<div v-if="isOpen">
			<span 
				v-for="option in this.options"
				:key="option.value"
				@click="selectOption(option.value)"
			>
				{{ option.label }}
			</span>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			options: {
				type: Array,
				required: true,
				defailt: () => [],
			},
			select: {
				type: String,
				defailt: "",
			},
		},
	
		data() {
			return {
				isOpen: false,
			};
		},

		methods: {
			selectOption(option) {
				this.$emit("select", option);
				this.hideSelect
			},
			hideSelect() {
				this.isOpen = false;
			},
			setOpen(){
				this.isOpen = !this.isOpen
			},
			clear(){
				this.$emit('clear')
				this.hideSelect
			}
		},
	
		mounted() {
			document.addEventListener("click", this.hideSelect.bind(this), true);
		},
		beforeDestroy() {
			document.removeEventListener("click", this.hideSelect)
		},
	};
</script>

<style lang="scss" scoped>
	.wrapper {
		position: relative;
		width: 200px;		

		p {
			display: flex;
			justify-content: space-between;
			padding: 5px 10px;
			box-shadow: var(--shadow);
			background-color: var(--colors-ui-base);
			cursor: pointer;
			.clear{
				position: relative;
				display: flex;
				align-items: center;
				justify-content: center;
				flex: 0 0 10px;
				box-shadow: none;

				&:hover{
					background-color: transparent;
				}
				
				&::before{
					content: '';
					width: 10px;
					height: 1px;
					background-color: green;
					transform: rotate(45deg);
				}
				&::after{
					content: '';
					position: absolute;
					width: 10px;
					height: 1px;
					background-color: green;
					transform: rotate(-45deg);
				}

				&:hover::before,
				&:hover::after{
					background-color:red;
				}
			}
		}

	>div {
		position: absolute;
		width: 190px;
		display: flex;
		flex-direction: column;
		margin: 5px;
		z-index: 22;
		background-color: var(--colors-ui-base);
		
		span {
			box-shadow: var(--shadow);
			border-radius: var(--radii);
			padding: 0.25rem;
			width: 100%;
			cursor: pointer;
			color: var(--color-ui-base);

			&:hover {
				background-color: #122b9e49;
			}
		}
	}
}
</style>