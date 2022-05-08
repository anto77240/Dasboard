<!-- @format -->

<template>
	<div class="container">
		<div
			class="card shadow p-3 mb-5 bg-body rounded"
			style="width: 20rem; overflow: auto; max-height: 300px"
		>
			<div class="card-body">
				<h5 class="card-title">
					<span class="g">G</span><span class="e">o</span><span class="o">o</span
					><span class="g">g</span><span class="l">l</span><span class="e">e</span>
					Translate
					<i @click="$emit('close-Translator')" style="float: right; font-size: 2rem;" class="bi bi-x"></i>
				</h5>
				<form @submit.prevent="translate()">
					<div class="mb-3">
						<div class="left">
							<select class="form-select" aria-label="Default select example" v-model="this.source">
								<option selected>Source</option>
								<option
									v-for="(lang, index) in this.language"
									:key="index"
									v-bind:value="lang.language"
								>
									{{ lang.language }}
								</option>
							</select>

							<textarea
								v-model="this.text"
								rows="3"
								class="form-control"
								placeholder="Enter text"
							/>
						</div>

						<div class="right">
							<select class="form-select" aria-label="Default select example" v-model="this.target">
								<option selected>Target</option>
								<option
									v-for="(lang, index) in this.language"
									:key="index"
									v-bind:value="lang.language"
								>
									{{ lang.language }}
								</option>
							</select>

							<textarea
								v-model="this.newText"
								rows="3"
								class="form-control"
								placeholder="Translation"
							/>
						</div>
					</div>

					<button type="submit" class="btn btn-primary">Translate</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "TranslatorComponent",
	data() {
		return {
			language: [],
			text: "",
			newText: "",
			target: "",
			source: "",
		};
	},
	async created() {
		let array = await fetch("http://146.59.157.162:3002/languages", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		this.language = await array.json();
		this.language = this.language.data.languages;
		//console.log("request", this.language);
	},
	methods: {
		async translate() {
			this.newText = "";
			let array = await fetch(`http://146.59.157.162:3002/translate`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					q: this.text,
					target: this.target,
					source: this.source,
				}),
			});
			this.newText = await array.json();
			this.newText = this.newText[this.newText.length - 1].translatedText;
		},
	},
};
</script>

<style scoped>
.mb-3 {
	display: flex;
	justify-content: space-between;
}

.left,
.right {
	width: 350px;
}

textarea {
	resize: none;
}

.btn {
	font-weight: bold;
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

h5 {
	margin-bottom: 1rem;
}
</style>
