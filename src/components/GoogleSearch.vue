<!-- @format -->

<template>
	<div class="container">
		<div
			class="card shadow p-3 mb-5 bg-body rounded"
			style="width: 23rem; overflow: auto; max-height: 400px"
		>
			<div class="card-body">
				<h5 class="card-title">
					<span class="g">G</span><span class="e">o</span><span class="o">o</span>
					<span class="g">g</span><span class="l">l</span><span class="e">e</span> Search
					<i @click="$emit('close-Search')" style="float: right; font-size: 2rem;" class="bi bi-x"></i>
				</h5>
				<input
					type="text"
					class="form-control"
					id="floatingInputGrid"
					placeholder="Search..."
					v-model="this.query"
					required
				/>
			</div>
			<div class="col-md">
				<div class="form-floating">
					<button @click="searchRes(this.query)" type="submit" class="btn btn-primary">
						Search
					</button>
				</div>
				<div class="card-body" v-for="result in results" :key="result">
					<p style="text-align: start; overflow: auto" class="">
						{{ result.title }} <br />
						{{ result.link }} <br />
						{{ result.snippet }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
/* const axios = require('axios'); */
export default {
	data() {
		return {
			name: "GoogleSearch",
			query: "",
			results: [],
		};
	},
	methods: {
		async searchRes(query) {
			let array = await fetch(`http://146.59.157.162:3004/search/${query}`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});
			console.log("ok");
			console.log("this.results", this.results);
			console.log("array", array);
			this.results = await array.json();
		},
	},
};
</script>

<style scoped>
.container {
	max-height: 400px;
}
.g {
	color: blue;
}

.e {
	color: red;
}
.o {
	color: orange;
}
.l {
	color: green;
}
</style>
