<!-- @format -->

<template>
	<div class="container">
		<div
			class="card shadow p-3 mb-5 bg-body rounded"
			style="width: 25rem; overflow: auto; max-height: 350px"
		>
			<div class="card-body">
				<h5 class="card-title">The Most Popular Drink every 5 second<i @click="$emit('close-RandomDrink')" style="float: right; font-size: 2rem;" class="bi bi-x"></i></h5>
	
				<p class="title">{{this.drinks.strDrink}} {{this.drinks.idDrink}}</p>
				<img :src="this.drinks.strDrinkThumb" />
		
			</div>
	</div>
    </div>
	
</template>

<script>

export default {
	name: "RandomDrink",
	data: () => {
		return {
			drinks: [],
            timer: '',
		};
	},

   mounted() {
        this.refresh();
        this.timer = setInterval(this.refresh, 5000);
    },


    methods:{
        async refresh(){
        let array = await fetch(`http://146.59.157.162:3003/random/`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
			}); 
		this.drinks = await array.json();
		this.drinks = this.drinks.drinks[0];

        }
    }

    
};

</script>

<style scoped>
img {
	width: 160px;
	border-radius: 30px;
}

.title {
	font-size: 20px;
	font-family: "Montserrat", sans-serif;
    margin: 5px;
}


.card-body {
	padding: 0px;
}

.title {
	font-family: "Rock Salt", cursive;
	font-size: 24px;
}

.card-title{
    color:brown;

}
</style>
