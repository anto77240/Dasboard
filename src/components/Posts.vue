<!-- @format -->

<template>
	<div class="container">
		<div
			class="card shadow p-3 mb-5 bg-body rounded"
			style="width: 20rem; overflow: auto; max-height: 420px"
		>
			<div class="card-body">
				<h5 class="card-title"><strong>Yowl's actuality </strong><i @click="$emit('close-Post')" style="float: right; font-size: 2rem;" class="bi bi-x"></i></h5>
				<p class="title">{{posts.category}}&nbsp; </p>
				<div class="details">
                    
                    <p class="title"> {{posts.post_title}}&nbsp;</p>
                          

                </div>    
                <img  :src="posts.post_image"/>
				<div style=" margin-top: 10px;">
				<a style="text-decoration: none; margin-top: 10px;" href="http://146.59.157.162">See more</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
    name: "PostComponent",
	data: () => {
		return {
			posts: [],

		};
	},

	async mounted() {
			console.log("hello post");
			let array = await fetch(`http://146.59.157.162:3000/api/v1/post`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});
			this.posts = await array.json();
			this.posts = this.posts[this.posts.length -1];
			console.log(this.posts);
	},
};
</script>

<style scoped>
img {
	width: 100%;
	border-radius: 0px;
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
    font-family: 'Montserrat', sans-serif;
	font-size: 20px;
}

.category{
    font-family: "Rock Salt", cursive;
	font-size: 20px;
    text-decoration: underline dotted;
}

.details{
    display: flex;
    flex-direction: row;
    justify-content: center;
}


.card-title{
     
}


</style>
