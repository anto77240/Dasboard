<!-- @format -->

<template>
	<div class="container">
		<div
			class="card shadow p-3 mb-5 bg-body rounded"
			style="width: 25rem; overflow: auto; max-height: 300px"
		>
			<div class="card-body">
				<h5 class="card-title">
					<span class="g">G</span><span class="e">o</span><span class="o">o</span
					><span class="g">g</span><span class="l">l</span><span class="e">e</span>
					Detector
					<i @click="$emit('close-Detector')" style="float: right; font-size: 2rem;" class="bi bi-x"></i>
				</h5>
				<form @submit.prevent="detect()">
					<div class="mb-3">
						<textarea
							v-model="this.text"
							rows="3"
							class="form-control"
							placeholder="Enter the text whose you want language you want to detect"
						/>
					</div>
					<label><b>The language is :</b> {{ this.lang }}</label
					><br />

					<button type="submit" class="btn btn-primary">Detect</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "DetectorComponent",
	data() {
		return {
			text: "",
			lang: "",
		};
	},
	methods: {
		async detect() {
			let array = await fetch(`http://146.59.157.162:3002/detect`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					q: this.text,
				}),
			});
			this.lang = await array.json();
			//console.log(this.lang[this.lang.length - 1][0].language);

			this.lang = this.lang[this.lang.length - 1][0].language;
		},
	},
};
</script>

<style scoped>
.container {
	width: 25rem;
}

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
