<template>
	<article class="card" @click="$router.push(`/${country.name}`)">
		<img :src="image" :alt="name">
		<div>
			<h3>{{ name }}</h3>
			<ul>
				<li 
					v-for="item in this.info"
					:key="item.title"
				>
					<b>{{ item.title }}:</b> {{ item.description }}
				</li>
			</ul>
		</div>
	</article>
</template>

<script>
	export default {
		props:{
			country:{
				type:Object,
				default: null
			}
		},
		data(){
			return {
				image: this.country.flags.png,
				name: this.country.name,
				info:[
					{title:'Population',description:this.country.population.toLocaleString()},
					{title:'Region',description:this.country.region},
					{title:'Capital',description:this.country.capital},
				]
			}
		},
		
	}

</script>

<style lang="scss" scoped>
	.card{
		border-radius: var(--radii);
		background-color: var(--color-ui-base);
		box-shadow: var(--shadow);
		overflow: hidden;
		cursor: pointer;
		
		img{
			display: block;
			width: 100%;
			height: 140px;
			object-fit: cover;
			object-position: center;
			box-shadow: var(--shadow);
		}

		div{
			padding: 1.5rem;

			h3{
				font-size: var(--fs-md);
				font-weight: var(--fm-bold);
			}

			ul{
				list-style: none;
				padding: 1rem 0 0;

				li{
					font-size: var(--fs-sm);
					line-height: 1.5rem;
					font-weight: var(--fw-light);

					b{
						font-weight: var(--fw-bold);
					}
				}
			}
		}
	}

	@media(max-width: 767px){
		.card{
		img{
			height: 250px;
		}
	}
	}
</style>