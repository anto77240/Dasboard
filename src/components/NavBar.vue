<!-- @format -->

<template>
	<nav>
		<div class="header">
			<a href="/"> <img class="brand-logo" src="../assets/dashboard.png" /></a>
			<div style="float: right">
				<router-link v-if="this.logged" to="/"
					><button @click="logout()" class="btn btn-outline-dark">
						<i style="font-size: 1rem" class="bi bi-box-arrow-in-right"></i> Logout
					</button></router-link
				>
				<router-link v-if="!this.logged" to="/login"
					><button class="btn btn-outline-dark">
						<i style="font-size: 1rem" class="bi bi-box-arrow-in-right"></i> Login
					</button></router-link
				>
				<router-link v-if="!this.logged"  to="/register"
					><button class="btn btn-outline-dark" style="margin: 5px">
						<i style="font-size: 1rem" class="bi bi-person-plus"></i> Register
					</button></router-link
				>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	name: "NavBar",
	data: () => {
		return {
			search: "",
			logged: false,
		};
	},
	created() {
		if (localStorage.getItem("user")) {
			this.logged = true;
		}
	},
	methods: {
		logout() {
			localStorage.removeItem("user");
			localStorage.removeItem("widget");
			window.location.reload();
		},
	},
};
</script>

<style scoped>
nav {
	background-color: #f4f4f4;
	width: 100%;
	padding: 0px;
}

.header {
	justify-content: space-between;
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	margin-right: 30px;
	margin-left: 30px;
}

.brand-logo {
	width: 50px;
	margin-left: 2rem;
}


.hello {
	display: flex;
	justify-content: space-between;
	margin-right: 30px;
	font-family: "Rock Salt", cursive;
	font-weight: 300px;
}



</style>
