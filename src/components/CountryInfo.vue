<template>
	<section class="section">
		
		<img :src="country.flag" :alt="country.name">
		<div>
			<h1>{{ country.name }}</h1>
		
			<div class="lists">
				<ul>
					<li><b>Native Name: </b>{{ country.nativeName}}</li>
					<li><b>Population: </b>{{ country.population}}</li>
					<li><b>Region: </b>{{ country.region}}</li>
					<li><b>Sub Region: </b>{{ country.subregion}}</li>
					<li><b>Capital: </b>{{ country.capital}}</li>
				</ul>

				<ul>
					<li><b>Top Level Domain: </b> 
						<span 
							v-for="item in this.country.topLevelDomain"
							:key="item"
						>
							{{ item }}, 
					</span>
				</li>
				<li><b>Currency: </b>
					<span 
						v-for="item in this.country.currencies"
						:key="item.code"
					>
						{{ item.code}},
					</span>
				</li>
				<li><b>Languages: </b>
					<span 
						v-for="item in this.country.languages"
						:key="item.name"
					>
						{{ item.name }},
					</span>
				</li>
			</ul>
		</div>
	
		<div class="borders">
			<b>Border Countries</b>
			<span v-if="!this.country.borders">There is no border countries</span>
			<div v-else>
				<span 
					v-for="neibor in this.country.borders"
					:key="neibor"
					@click="goToCountry(neibor)"
				>
					{{ neibor }}
				</span>
			</div>
		</div>

	</div>
	</section>
</template>

<script>

	export default {
		props:{
			country:{
				type:Object,
				required:true
			}
		},

		methods:{
			goToCountry(neibor){
				this.$emit('goToPath', neibor)
			}
		},
	}
</script>

<style lang="scss" scoped>
.section{
	margin-top: 3rem;
	width: 100%;
	display: grid;
	grid-template-columns: 100%;
	gap: 2rem;

	img{
		display: block;
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	h1{
		margin: 0;
		font-weight: var(--fw-normal);
	}
	.lists{
		display: flex;
		flex-direction: column;
		gap: 2rem;

		ul{
			list-style: none;
			margin: 0;
			padding: 0;

			li{
				line-height: 1.8;

				b{
					font-weight: var(--fw-bold);
				}
			}
		}
	}
	.borders{
		margin-top: 3rem;
		display: flex;
		gap: 1.5rem;
		flex-direction: column;
		align-items: flex-start;

		div{
			display: flex;
			gap: 1rem;
			flex-wrap: wrap;
		
			b {
				font-weight: var(--fw-bold);
			}

			span{
				padding: 0 1rem;
				background-color: var(--colors-ui-base);
				box-shadow: var(--shadow);
				line-height: 1.5;
				cursor: pointer;
			}
		}
	}
}

	@media (min-width: 767px){
			.section{
				grid-template-columns: minmax(100px,400px) 1fr;
				align-items: center;	
				gap: 5rem;
			}
			.borders{
				flex-direction: row;
				align-items: center;
			}
	}

	@media (min-width:1024px){
		.section{
			grid-template-columns: minmax(400px,600px) 1fr;
			
			.lists{
				flex-direction: row;
				gap: 4rem;
			}
		}
			
	}

</style>