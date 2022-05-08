<!-- @format -->

<template>
	<div class="container">
		<div
			class="card shadow p-3 mb-5 bg-body rounded"
			style="width: 22rem; overflow: auto; max-height: 300px"
		>
			<div class="card-body">
				<h5 class="card-title">Dectionary <i @click="$emit('close-Dico')" style="float: right; font-size: 2rem;" class="bi bi-x"></i></h5>
				<form @submit.prevent="getDefinition()">
					<div class="mb-3">
						<input
							v-model="word"
							type="text"
							class="form-control"
							id="exampleInputEmail1"
							placeholder="Search..."
							aria-describedby="emailHelp"
						/>
					</div>

					<button type="submit" class="btn btn-primary">
						<i class="bi bi-search"></i>
					</button>
				</form>
				<div class="card-body" v-for="definition in def" :key="definition">
					<p style="text-align: start; overflow: auto" class="">{{ definition }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
const axios = require("axios");
import { ref } from "vue";

export default {
	name: "Dico-widget",
	// data() {
	//     return {
	//         words : [],
	//         id : Number,
	//         word :"",
	//     }
	// },
	// methods : {

	// }
	setup() {
		const def = ref([]);
		const word = ref("");
		async function getDefinition() {
			// console.log(word.value)
			const url = `http://146.59.157.162:3006/dico/${word.value}`;

			const { data } = await axios.get(url);
			// console.log(data)
			data.map(({ meanings }) => {
				meanings.map(({ definitions }) => {
					definitions.forEach(({ definition }) => {
						def.value.push(definition);
					});
				});
			});
		}

		return { word, getDefinition, def };
	},
};
</script>
