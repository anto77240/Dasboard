<!-- @format -->

<template>
	<div class="container-fluid">
		<div class="row flex-nowrap">
			<div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
				<div
					class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100"
				>
					<a
						href="/"
						class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
					>
						<span class="fs-5 d-none d-sm-inline">Dashboard</span>
					</a>
					<ul class="nav nav-pills flex-column mb-sm-auto mb-0" id="menu">
						<li>
							<a href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
								<i style="color: white" class="fs-4 bi-grid"></i>
								<span style="color: white" class="ms-1 d-none d-sm-inline">Widgets</span>
							</a>
							<ul
								class="collapse nav flex-column ms-1 align-items-start"
								id="submenu3"
								data-bs-parent="#menu"
							>
								<li>
									<a href="#" class="nav-link px-0">
										<span @click="showTic" class="d-none d-sm-inline">
											<i class="bi bi-controller"></i> TicTacToe</span
										>
									</a>
								</li>
								<li>
									<a href="#" class="nav-link px-0">
										<span @click="showTranslator" class="d-none d-sm-inline"
											><i class="bi bi-translate"></i> Translator</span
										>
									</a>
								</li>
								<li>
									<a href="#" class="nav-link px-0">
										<span @click="showPost" class="d-none d-sm-inline"
											><i class="bi bi-sticky"></i>News</span
										>
									</a>
								</li>
								<li>
									<a href="#" class="nav-link px-0">
										<span @click="showSearch" class="d-none d-sm-inline"
											><i class="bi bi-search"></i> Search</span
										>
									</a>
								</li>
								<li>
									<a href="#" class="nav-link px-0">
										<span @click="showTodo" class="d-none d-sm-inline"
											><i class="bi bi-sticky"></i>Post-it</span
										>
									</a>
								</li>
								<li>
									<a href="#" class="nav-link px-0">
										<span @click="showDico" class="d-none d-sm-inline">
											<i class="bi bi-book"></i> Dictionary</span
										>
									</a>
								</li>
								<li>
									<a href="#" class="nav-link px-0">
										<span @click="showDetector" class="d-none d-sm-inline"
											><i class="bi bi-binoculars"></i> Detector</span
										>
									</a>
								</li>
								<li>
									<a href="#" class="nav-link px-0">
										<span @click="showRandomDrink" class="d-none d-sm-inline"
											><i class="bi bi-cup-straw"></i>The best Cocktails</span
										>
									</a>
								</li>
								<li>
									<a href="#" class="nav-link px-0">
										<span @click="showDrinks" class="d-none d-sm-inline">
											<i class="bi bi-cup-straw"></i>My favorite Drink</span
										>
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
			<div class="col p-0">
				<NavBar />
				<div class="col p-0">
					<div class="row">
						<h5
							style="margin-top: 400px"
							v-if="
								!toggleDico &&
								!toggleTic &&
								!toggleTranslator &&
								!toggleDrinks &&
								!toggleSearch &&
								!toggleDetector &&
								!togglePost &&
								!toggleRandomDrink &&
								!toggleToDo &&
								widget.tic === 0 &&
								widget.translator === 0 &&
								widget.post === 0 &&
								widget.search === 0 &&
								widget.dico === 0 &&
								widget.drinks === 0 &&
								widget.detector === 0 &&
								widget.random === 0 &&
								widget.postit === 0
							"
						>
							Choose your widgets...
						</h5>

						<div
							v-if="toggleTic || widget.tic === 1"
							v-draggable="{ grid: [25, 25] }"
							class="col-sm-4 d-flex justify-content-center"
						>
							<TicTacToe @close-Tic="closeTic" />
						</div>
						<div v-if="toggleTranslator || widget.translator === 1" class="col-sm-4">
							<Translator @close-Translator="closeTranslator" v-draggable="{ grid: [25, 25] }" />
						</div>
						<div
							v-if="togglePost || widget.post === 1"
							v-draggable="{ grid: [25, 25] }"
							class="col-sm-4"
						>
							<Posts @close-Post="closePost" />
						</div>
					</div>
				</div>
				<div class="row">
					<div v-if="toggleSearch1 || widget.search === 1" class="col-sm-4">
						<GoogleSearch @close-Search="closeSearch" v-draggable="{ grid: [25, 25] }" />
					</div>

					<div v-if="toggleToDo || widget.postit === 1" class="col-sm-4">
						<ToDo @close-Todo="closeTodo" v-draggable="{ grid: [25, 25] }" />
					</div>
					<div v-if="toggleDico || widget.dico === 1" class="col-sm-4">
						<Dico @close-Dico="closeDico" v-draggable="{ grid: [25, 25] }" />
					</div>
				</div>
				<div class="row">
					<div v-if="toggleDetector || widget.detector === 1" class="col-sm-4">
						<Detector @close-Detector="closeDetector" v-draggable="{ grid: [25, 25] }" />
					</div>

					<div v-if="toggleRandomDrink || widget.random === 1" class="col-sm-4">
						<RandomDrink @close-RandomDrink="closeRandomDrink" v-draggable="{ grid: [25, 25] }" />
					</div>
					<div v-if="toggleDrinks || widget.drinks === 1" class="col-sm-4">
						<Drinks @close-Drinks="closeDrinks" v-draggable="{ grid: [25, 25] }" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
const axios = require("axios");

import NavBar from "../components/NavBar.vue";
import Dico from "../components/Dico.vue";
import GoogleSearch from "../components/GoogleSearch.vue";
import Translator from "../components/Translator.vue";
import Drinks from "../components/Drinks.vue";
import ToDo from "../components/ToDo.vue";
import Detector from "../components/Detect.vue";
import Posts from "../components/Posts.vue";
import TicTacToe from "../components/TicTacToe.vue";
import RandomDrink from "../components/RandomDrink.vue";

export default {
	name: "HomeView",
	components: {
		NavBar,
		Dico,
		Translator,
		Drinks,
		GoogleSearch,
		ToDo,
		Detector,
		Posts,
		TicTacToe,
		RandomDrink,
	},
	data() {
		return {
			toggleDico: false,
			toggleTic: false,
			toggleTranslator: false,
			toggleDrinks: false,
			toggleSearch: false,
			toggleDetector: false,
			togglePost: false,
			toggleRandomDrink: false,
			toggleToDo: false,
			username: "",
			widget: [],
		};
	},
	mounted() {
		this.getMyWidget();
	},

	methods: {
		getMyWidget() {
			let username = localStorage.getItem("user");
			axios.get(`http://146.59.157.162:3006/widget/${username}`).then((response) => {
				console.log("get mes widget", response.data[0]);
				this.widget = response.data[0];
				console.log("this widget", this.widget);
			});
		},
		sendWidgetOn(widget) {
			console.log("widget", widget);
			this.username = localStorage.getItem("user");

			axios
				.put(`http://146.59.157.162:3006/widget`, {
					username: this.username,
					widget_name: widget,
					widget_value: 1,
				})
				.then((response) => {
					console.log(response);
				});
		},
		sendWidgetOf(widget) {
			this.username = localStorage.getItem("user");

			axios
				.put(`http://146.59.157.162:3006/widget`, {
					username: this.username,
					widget_name: widget,
					widget_value: 0,
				})
				.then((response) => {
					console.log(response);
				});
		},
		showDico() {
			this.toggleDico = !this.toggleDico;
			this.sendWidgetOn("dico");
			this.getMyWidget();
		},

		showTic() {
			this.toggleTic = !this.toggleTic;
			this.sendWidgetOn("tic");
			this.getMyWidget();
		},
		showDrinks() {
			this.toggleDrinks = !this.toggleDrinks;
			this.sendWidgetOn("drinks");
			this.getMyWidget();
		},
		showSearch() {
			this.toggleSearch = !this.toggleSearch;
			this.sendWidgetOn("search");
			this.getMyWidget();
		},
		showPost() {
			this.togglePost = !this.togglePost;
			this.sendWidgetOn("post");
			this.getMyWidget();
		},
		showTranslator() {
			this.toggleTranslator = !this.toggleTranslator;
			this.sendWidgetOn("translator");
			this.getMyWidget();
		},
		showRandomDrink() {
			this.toggleRandomDrink = !this.toggleRandomDrink;
			this.sendWidgetOn("random");
			this.getMyWidget();
		},
		showDetector() {
			this.toggleDetector = !this.toggleDetector;
			this.sendWidgetOn("detector");
			this.getMyWidget();
		},
		showTodo() {
			this.toggleToDo = !this.toggleToDo;
			this.sendWidgetOn("postit");
			this.getMyWidget();
		},
		closeDico() {
			this.toggleDico = !this.toggleDico;
			this.sendWidgetOf("dico");
			this.getMyWidget();
		},
		closeTic() {
			this.toggleTic = !this.toggleTic;
			this.sendWidgetOf("tic");
			this.getMyWidget();
		},
		closeDrinks() {
			this.toggleDrinks = !this.toggleDrinks;
			this.sendWidgetOf("drinks");
			this.getMyWidget();
		},
		closeSearch() {
			this.toggleSearch = !this.toggleSearch;
			this.sendWidgetOf("search");
			this.getMyWidget();
		},
		closePost() {
			this.togglePost = !this.togglePost;
			this.sendWidgetOf("post");
			this.getMyWidget();
		},
		closeTranslator() {
			this.toggleTranslator = !this.toggleTranslator;
			this.sendWidgetOf("translator");
			this.getMyWidget();
		},
		closeRandomDrink() {
			this.toggleRandomDrink = !this.toggleRandomDrink;
			this.sendWidgetOf("random");
			this.getMyWidget();
		},
		closeDetector() {
			this.toggleDetector = !this.toggleDetector;
			this.sendWidgetOf("detector");
			this.getMyWidget();
		},
		closeTodo() {
			this.toggleToDo = !this.toggleToDo;
			this.sendWidgetOf("postit");
			this.getMyWidget();
		},
	},
};
</script>

<style scoped></style>
