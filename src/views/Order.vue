<template>
	<ion-header :translucent="true" class="ion-no-border">
		<ion-toolbar>
			<ion-buttons slot="start">
				<ion-menu-button></ion-menu-button>
			</ion-buttons>
			<div class="home-header">
				<ion-title>Our Foods</ion-title>

				<div class="shop-container">
					<div class="btn-shop">
						<ion-icon :src="bagHandle"></ion-icon>
					</div>
				</div>
			</div>
		</ion-toolbar>
	</ion-header>
	<ion-content>
		<ion-searchbar
			class="searchbar"
			show-filter-button="always"
			placeholder="Try our new Beef Bibimbowl"
		>
		</ion-searchbar>
		<div class="filterbtn-container">
			<button selec>All</button>
			<button>Breakfast</button>
			<button>Chicken</button>
			<button>Seafood</button>
			<button>Dessert</button>
		</div>

		<div class="most-popular-container">
			<!-- Steak Fries Veggies -->
			<ion-button href="/bag" fill="clear">
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
			</ion-button>

			<!-- Chicken -->
			<ion-button fill="clear">
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
			</ion-button>

			<!-- Sorvetes Primavera -->
			<ion-button fill="clear">
				<div class="popular-image">
					<img src="../../images/sorvetes.png" alt="Sorvetes Primavera" />
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
			</ion-button>

			<!-- Fried Chicken -->
			<ion-button fill="clear">
				<div class="popular-image">
					<img src="../../images/item-chicken.png" alt="Fried Chicken" />
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
			</ion-button>

			<!-- Steak Fries Veggies -->
			<ion-button fill="clear">
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
			</ion-button>

			<!-- Chicken -->
			<ion-button fill="clear">
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
			</ion-button>

			<!-- Chicken -->
			<ion-button fill="clear">
				<div class="popular-image">
					<img src="../../images/sorvetes.png" alt="Sorvetes Primavera" />
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
			</ion-button>

			<!-- Chicken -->
			<ion-button fill="clear">
				<div class="popular-image">
					<img src="../../images/item-chicken.png" alt="Fried Chicken" />
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
			</ion-button>
		</div>
	</ion-content>
</template>

<script setup>
import { IonHeader, IonTitle, IonToolbar } from "@ionic/vue";
import { star, starHalf } from "ionicons/icons";
import { bagHandle } from "ionicons/icons";
</script>

<style scoped>
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
ion-button .item-category {
	margin-top: 5px;
}
.item-category {
	font-size: 12px;
}
.item-name {
	font-weight: 700;
	font-size: 15px;
}
.most-popular-container img {
	max-height: 150px;
	max-width: 200px;
}

ion-button .popular-image {
	letter-spacing: 0.1px;
	color: #000;
	text-transform: capitalize;
	display: flex;
	flex-direction: column;
	background-color: #e9ecef;
	border-radius: 10px;
	justify-content: center;
	align-items: center;
	text-align: left;
	padding: 20px;
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
	margin: 10px 10px 70px 10px;
	width: auto;
	grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
	gap: 5px;
}
.most-popular {
	display: flex;
	margin: 10px 10px;
	justify-content: space-between;
	align-content: center;
	align-items: center;
}
.filterbtn-container button:focus {
	color: #fff;
	background-color: #d71921;
}

.filterbtn-container button {
	font-weight: 700;
	border-radius: 10px;
	background-color: #e9ecef;
	color: #6c757d;
	padding: 15px;
}
.filterbtn-container {
	margin: 10px;
	height: auto;
	display: flex;
	justify-content: space-between;
	gap: 10px;
}
ion-searchbar {
	--position: relative;
	--icon-color: #d71921;
	--border-radius: 10px;
	--clear-button-color: #d71921;
	--box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
}
.btn-shop ion-icon {
	font-size: 28px;
	color: #d71921;
	margin-right: 10px;
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
ion-title {
	color: #000;
	font-size: 24px;
	font-weight: bold;
}
</style>
