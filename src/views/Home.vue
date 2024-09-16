<template>
	<ion-header :translucent="true" class="ion-no-border">
		<ion-toolbar>
			<ion-menu-button slot="start"></ion-menu-button>
			<div class="home-header">
				<div class="loyalty-container">
					<ion-button href="/loyalty" class="points" fill="clear" color="dark">
						<div class="button-content">
							<img src="../../images/crown.png" />
							<div class="num-points">0 Points</div>
							<ChevronRight size="18px" />
						</div>
					</ion-button>
				</div>
				<div class="profile-container">
					<button class="btn-profile">
						<img src="../../images/ChouTzuyu.png" alt="User photo" />
					</button>
				</div>
			</div>
		</ion-toolbar>
	</ion-header>
	<ion-content id="home-content">
		<div class="home-banner">
			<div>
				<img src="../../images/Logo.svg" />
			</div>
			<div class="banner-txt">
				<div class="banner-name">Anneoyong, Chou!</div>
				<div class="banner-desc">What do you want to eat?</div>
			</div>
		</div>
		<ion-searchbar
			show-clear-button="always"
			placeholder="Try our new Steak, Fries, Veggies"
		></ion-searchbar>

		<!-- Special Offers -->
		<div class="special-offer">
			<div class="offer-subtitle">Special Offers!</div>
			<div class="btn-offer">
				<button>
					View All
					<ChevronRight size="16px" />
				</button>
			</div>
		</div>
		<div class="offer-slideshow">
			<div class="image">
				<img src="../../images/Mask Group.png" alt="Special Offers" />
			</div>
			<div class="image">
				<img src="../../images/Mask Group.png" alt="Special Offers" />
			</div>
			<div class="image">
				<img src="../../images/Mask Group.png" alt="Special Offers" />
			</div>
			<div class="image">
				<img src="../../images/Mask Group.png" alt="Special Offers" />
			</div>
		</div>

		<!-- Category -->
		<div class="category">
			<div class="home-subtitle">Category</div>
		</div>
		<div class="offer-slideshow">
			<div class="category-image">
				<img src="../../images/Chicken.png" alt="Chicken" />
				<div class="category-name-container">
					<div class="category-name">Chicken</div>
					<div class="category-recipe">9 recipes</div>
				</div>
			</div>
			<div class="category-image">
				<img src="../../images/Chicken.png" alt="Chicken" />
				<div class="category-name-container">
					<div class="category-name">Chicken</div>
					<div class="category-recipe">9 recipes</div>
				</div>
			</div>
			<div class="category-image">
				<img src="../../images/Chicken.png" alt="Chicken" />
				<div class="category-name-container">
					<div class="category-name">Chicken</div>
					<div class="category-recipe">9 recipes</div>
				</div>
			</div>
			<div class="category-image">
				<img src="../../images/Chicken.png" alt="Chicken" />
				<div class="category-name-container">
					<div class="category-name">Chicken</div>
					<div class="category-recipe">9 recipes</div>
				</div>
			</div>
		</div>

		<!-- Whats New -->
		<div class="new">
			<div class="home-subtitle">What's New?</div>
		</div>
		<div class="new-img-container">
			<div class="new-image">
				<img src="../../images/FoodMenu.png" alt="Chicken" />
			</div>
		</div>

		<!-- Most Popular -->
		<div class="most-popular">
			<div class="home-subtitle">Most Popular</div>
		</div>
		<div class="most-popular-container">
			<!-- Steak Fries Veggies -->
			<div class="popular-image">
				<img
					src="../../images/steakfries&veggies.png"
					alt="Steak Fries & Veggies"
				/>
				<div class="item-container">
					<div class="item-name">Steak Fries Veggies</div>
					<div class="item-category">Meat</div>
					<div class="item-price-container">
						<div class="item-price">P 175</div>
						<div class="item-rating">
							<ion-icon :src="star" class="star"></ion-icon>
							<ion-icon :src="star" class="star"></ion-icon>
							<ion-icon :src="star" class="star"></ion-icon>
							<ion-icon :src="star" class="star"></ion-icon>
							<ion-icon :src="starHalf" class="star-half"></ion-icon>
						</div>
					</div>
				</div>
			</div>

			<!-- Chicken -->
			<div class="popular-image">
				<img src="../../images/item-chicken.png" alt="Chicken Salad" />
				<div class="item-container">
					<div class="item-name">Chicken Salad</div>
					<div class="item-category">Chicken</div>
					<div class="item-price-container">
						<div class="item-price">P 172</div>

						<div class="item-rating">
							<ion-icon :src="star" class="star"></ion-icon>
							<ion-icon :src="star" class="star"></ion-icon>
							<ion-icon :src="star" class="star"></ion-icon>
							<ion-icon :src="star" class="star"></ion-icon>
							<ion-icon :src="starHalf" class="star-half"></ion-icon>
						</div>
					</div>
				</div>
			</div>

			<!-- Chicken -->
			<div class="popular-image">
				<img src="../../images/item-chicken.png" alt="Sorvetes Primavera" />
				<div class="item-container">
					<div class="item-name">Sorvetes Primavera</div>
					<div class="item-category">Dessert</div>
					<div class="item-price-container">
						<div class="item-price">P 185</div>
						<div class="item-rating">
							<ion-icon :src="star" class="star"></ion-icon>
							<ion-icon :src="star" class="star"></ion-icon>
							<ion-icon :src="star" class="star"></ion-icon>
							<ion-icon :src="star" class="star"></ion-icon>
							<ion-icon :src="starHalf" class="star-half"></ion-icon>
						</div>
					</div>
				</div>
			</div>

			<!-- Chicken -->
			<div class="popular-image">
				<img src="../../images/item-chicken.png" alt="Sorvetes Primavera" />
				<div class="item-container">
					<div class="item-name">Fried Chicken</div>
					<div class="item-category">Chicken</div>
					<div class="item-price-container">
						<div class="item-price">P 175</div>
						<div class="item-rating">
							<ion-icon :src="star" class="star"></ion-icon>
							<ion-icon :src="star" class="star"></ion-icon>
							<ion-icon :src="star" class="star"></ion-icon>
							<ion-icon :src="star" class="star"></ion-icon>
							<ion-icon :src="starHalf" class="star-half"></ion-icon>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="btn-container">
			<ion-button href="/order" size="medium">Order Now!</ion-button>
		</div>
	</ion-content>
</template>

<script setup>
import { IonHeader, IonToolbar } from "@ionic/vue";
import { star, starHalf } from "ionicons/icons";
import { Crown, ChevronRight } from "lucide-vue-next";
</script>

<style scoped>
.category-recipe {
	padding-top: 4px;
}
.category-name {
	font-weight: 600;
}
.category-name-container {
	position: absolute;
	bottom: 28px;
	left: 18px;
	color: #fff;
}

.btn-container ion-button {
	--background: transparent;
	text-transform: capitalize;
	height: 50px;
	width: 150px;
}
.btn-container {
	background-color: #d71921;
	color: #fff;
	border-radius: 10px;
	margin-right: 15px;
	margin-bottom: 15px;
	border: 1px solid;
	position: fixed;
	bottom: 0;
	right: 0;
	text-align: center;
}
.item-price {
	color: #d71921;
}
.item-rating ion-icon {
	color: #ffc02e;
	font-size: 12px;
}

.item-price-container {
	display: flex;
	justify-content: space-between;
	margin-top: 10px;
}
.item-container {
	display: flex;
	flex-direction: column;
	width: 100%;
}
.item-category {
	font-size: 12px;
}
.item-name {
	font-weight: 700;
	font-size: 15px;
}
.popular-image img {
	max-height: 150px;
	max-width: 200px;
}

.popular-image {
	display: flex;
	flex-direction: column;
	background-color: #e9ecef;
	border-radius: 10px;
	justify-content: center;
	align-items: center;
	height: auto;
	padding: 20px;
}

.most-popular-container {
	display: grid;
	margin: 10px 10px 130px 10px;
	width: auto;
	grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
	gap: 10px;
}
.most-popular {
	display: flex;
	margin: 10px 10px;
	justify-content: space-between;
	align-content: center;
	align-items: center;
}
.new-image img {
	width: 500px;
}
.new-img-container {
	display: flex;
	justify-content: center;
	margin: 10px 10px;
	width: auto;
	margin-bottom: 10px;
}
.new {
	display: flex;
	margin: 10px 10px;
	justify-content: space-between;
	align-content: center;
	align-items: center;
	height: auto;
}
.category-image img {
	min-height: 300px;
	min-width: 200px;
}
.category-image {
	position: relative;
	border-radius: 10px;
}
.home-subtitle {
	display: flex;
	justify-content: flex-start;
	font-size: 18px;
	font-weight: 900;
}
.category-slideshow {
	display: flex;
	margin: 10px 10px 10px 10px;
	width: auto;
	gap: 10px;
}
.category {
	display: flex;
	margin: 10px 10px;
	justify-content: space-between;
	align-content: center;
	align-items: center;
}
.image {
	height: auto;
	min-width: 300px;
	border-radius: 10px;
}
.offer-slideshow {
	display: flex;
	margin: 10px 10px;
	width: auto;
	gap: 10px;
}

.offer-subtitle {
	display: flex;
	justify-content: flex-start;
	font-size: 18px;
	font-weight: 900;
}
.special-offer {
	display: flex;
	margin: 20px 10px;
	justify-content: space-between;
	align-content: center;
	align-items: center;
}

.btn-offer button {
	background-color: #fff;
	display: flex;
	color: #d71921;
	align-items: center;
	align-content: center;
	font-weight: 600;
}

ion-searchbar {
	--icon-color: #d71921;
	--border-radius: 10px;
	--clear-button-color: #d71921;
	--box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
}
.home-banner {
	display: flex;
	margin: 10px;
	align-items: center;
}

.home-banner img {
	height: 60px;
	width: 60px;
	background: transparent;
}

.banner-txt {
	align-content: center;
	margin-left: 20px;
}

.banner-desc {
	font-size: 24px;
	font-weight: bold;
}

ion-toolbar {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

ion-menu-button {
	color: #d71921;
}

.home-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
}
.button-content img {
	height: 20px;
}
.button-content {
	font-size: 16px;
	display: flex;
	align-items: center;
	gap: 15px; /* This controls the space between elements */
}
.loyalty-container {
	display: flex;
	justify-content: space-between;
	margin-left: 20px;
	width: 100%;
}
.points {
	display: flex;
	justify-content: space-between;
	text-transform: capitalize;
	display: flex;
	gap: 10px;
	font-weight: 900;
	width: 100%;
}
.points ion-button {
	margin-left: 10px;
	font-size: 17px;
	color: #000;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	text-transform: capitalize;
}
.profile {
	display: flex;
	margin-bottom: 8px;
	width: 100%;
	padding-left: 10px;
	align-items: center;
}
.profile-container {
	display: flex;
	justify-content: flex-end;
	align-items: center;
	margin-right: 10px;
}

.btn-profile {
	background-color: transparent;
}

.profile-container img {
	width: 40px;
	height: 40px;
	border-radius: 50%;
}
</style>
