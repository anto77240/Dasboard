<!-- @format -->

<template>
	<div class="container">
		<div class="login">
			<h1>Register</h1>
			<form action="/auth" method="post">
				<label for="username">
					<i class="fas fa-user"></i>
				</label>
				<input
					v-model="username"
					type="text"
					name="username"
					placeholder="Username"
					id="username"
					required
				/>
				<label for="email">
					<i class="bi bi-envelope-fill"></i>
				</label>
				<input v-model="email" type="text" name="email" placeholder="email" id="email" required />
				<label for="password">
					<i class="fas fa-lock"></i>
				</label>
				<input
					v-model="password"
					type="password"
					name="password"
					placeholder="Password"
					id="password"
					required
				/>
				<span>You already  have an account ? <a style="text-decoration: none;" href="/login"> Login here</a></span> 
				<input @click="register" type="submit" value="Register" />
			</form>
		</div>
	</div>
</template>

<script>
const axios = require("axios");
export default {
	name: "Register-View",
	data() {
		return {
			username: "",
			email: "",
			password: "",
		};
	},
	methods: {
		register(event) {
			event.preventDefault();
			axios
				.post("http://146.59.157.162:3006/users", {
					username: this.username,
					email: this.email,
					password: this.password,
				})
				.then((response) => {
					this.updatewidget(this.username);
					console.log(response);
					this.$router.push("/login");
				})
				.catch((error) => {
					console.log(error);
				});
		},
		updatewidget(user_name) {
			console.log(user_name);
			axios
				.post(`http://146.59.157.162:3006/widget`, {
					username: user_name,
				})
				.then((response) => {
					console.log(response);
				});
		},
	},
};
</script>

<style scoped>
.login {
	width: 400px;
	background-color: #ffffff;
	box-shadow: 0 0 9px 0 rgba(0, 0, 0, 0.3);
	margin: 100px auto;
}
.login h1 {
	text-align: center;
	color: #5b6574;
	font-size: 24px;
	padding: 20px 0 20px 0;
	border-bottom: 1px solid #dee0e4;
}
.login form {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding-top: 20px;
}
.login form label {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50px;
	height: 50px;
	background-color: #3274d6;
	color: #ffffff;
}
.login form input[type="password"],
.login form input[type="text"] {
	width: 310px;
	height: 50px;
	border: 1px solid #dee0e4;
	margin-bottom: 20px;
	padding: 0 15px;
}
.login form input[type="submit"] {
	width: 100%;
	padding: 15px;
	margin-top: 20px;
	background-color: #3274d6;
	border: 0;
	cursor: pointer;
	font-weight: bold;
	color: #ffffff;
	transition: background-color 0.2s;
}
.login form input[type="submit"]:hover {
	background-color: #2868c7;
	transition: background-color 0.2s;
}
</style>
