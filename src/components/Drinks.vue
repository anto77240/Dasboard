<!-- @format -->

<template>
	<div class="container">
		<div
			class="card shadow p-3 mb-5 bg-body rounded"
			style="width: 22rem; overflow: auto; max-height: 300px"
		>
			<div class="card-body">
				<h5 class="card-title">My Favorite Drink <i @click="$emit('close-Drinks')" style="float: right; font-size: 2rem;" class="bi bi-x"></i></h5>
				<!-- <form @submit.prevent="getDrink()"> -->
				<div class="mb-3">
					<input
						class="form-control"
						v-on:keyup.enter="mydrink(this.drink)"
						type="text"
						id="exampleInputEmail1"
						placeholder="Vodka, whisky, beer..."
						v-model="this.drink"
						required
					/>
				</div>
				<!-- </form> -->
				<p class="title">{{ this.drinks.strDrink }}</p>
				<img :src="this.drinks.strDrinkThumb" />
				<div v-if="isModifyVisible" class="ingredient">
					<p><strong>Ingredient 1: </strong>{{ this.drinks.strIngredient1 }}</p>
					<p><strong>Ingredient 2: </strong>{{ this.drinks.strIngredient2 }}</p>
					<p><strong>Ingredient 3: </strong>{{ this.drinks.strIngredient3 }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// import { useRoute } from "vue-router"

export default {
	name: "NavBar",
	data: () => {
		return {
			isModifyVisible: false,
			drinks: [],
			id: Number,
			drink: "",
		};
	},

	methods: {
		async mydrink(id) {
			// this.id = localStorage.getItem("Drink");
			console.log("fdfs");
			// const route = useRoute();
			// let id = route.params.id;
			let array = await fetch(`http://146.59.157.162:3003/cocktails/${id}`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});
			this.drinks = await array.json();
            this.drinks = this.drinks.drinks[Math.floor(Math.random() * this.drinks.drinks.length)];     
			this.isModifyVisible = !this.isModifyVisible;
		},
	},
};
</script>

<style scoped>
img {
	width: 130px;
	border-radius: 50px;
}

.title {
	font-size: 20px;
	font-family: "Montserrat", sans-serif;
}

.ingredient {
	margin: 0px;
	padding-top: 10px;
}

.card-body {
	padding: 0px;
}

.title {
	font-family: "Rock Salt", cursive;
	font-size: 30px;
}
</style>
