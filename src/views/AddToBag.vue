<template>
	<ion-header :translucent="true" class="ion-no-border">
		<ion-toolbar>
			<ion-buttons slot="start">
				<ion-button href="/order" fill="clear">
					<ion-icon slot="icon-only" :icon="chevronBack"></ion-icon>
				</ion-button>
			</ion-buttons>
			<div class="home-header">
				<ion-title>Meat</ion-title>
				<div class="shop-container">
					<div class="btn-shop">
						<ion-icon :src="bagHandle"></ion-icon>
					</div>
				</div>
			</div>
		</ion-toolbar>
	</ion-header>
	<ion-content class="ion-padding">
		<div class="item-container">
			<img src="../../images/steakfries&veggies.png" />
			<button class="heart">
				<ion-icon :src="heartOutline"></ion-icon>
			</button>
		</div>
		<div class="item-name">Steak Fries Veggies</div>
		<div class="item-rating">
			<ion-icon :src="star" class="star"></ion-icon>
			<ion-icon :src="star" class="star"></ion-icon>
			<ion-icon :src="star" class="star"></ion-icon>
			<ion-icon :src="star" class="star"></ion-icon>
			<ion-icon :src="starHalf" class="star-half"></ion-icon>
		</div>
		<div class="item-desc">
			Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
			cubilia curae; Nam eu aliquam ipsum, sed accumsan metus. Maecenas neque
			nunc, tincidunt nec dui ac, rutrum consectetur ligula.
		</div>
		<div class="item-price-container">
			<div class="item-price">P 175</div>
			<div class="item-qty">
				<ion-input
					label="Qty:"
					type="number"
					color="none"
					placeholder="0"
				></ion-input>
			</div>
		</div>
		<div class="beverages-container">
			<div class="beverages-txt">Beverages</div>
			<div class="beverages-dropdown">
				<ion-select
					label="Choose Beverages"
					color="none"
					label-placement="stacked"
				>
					<ion-select-option value="coke">Coke</ion-select-option>
					<ion-select-option value="nestea">Nestea</ion-select-option>
					<ion-select-option value="ice-coffee">Ice Coffee</ion-select-option>
					<ion-select-option value="coke-float">Coke Float</ion-select-option>
				</ion-select>
			</div>
			<div class="beverages-size">
				<button>Regular</button>
				<button>Large</button>
				<button>X-Large</button>
			</div>
		</div>
		<div class="add-ons-container">
			<div class="add-ons-txt">Add-Ons</div>
			<div class="add-ons-item-container">
				<div class="item-img">
					<img src="../../images/tomatosauce.png" alt="Tomato Sauce" />
				</div>
				<div class="item-details">
					<div class="item-name" id="tomato-name">
						Tomato Sauce
						<ion-checkbox></ion-checkbox>
					</div>
					<div class="item-category">Sauce</div>
					<div class="item-price-container" id="tomato-price-container">
						<div class="item-price" id="tomato-price">P 49</div>
						<ion-input
							type="number"
							label="Qty:"
							color="none"
							placeholder="0"
						></ion-input>
					</div>
				</div>
			</div>
			<div class="add-ons-item-container">
				<div class="item-img">
					<img src="../../images/whiterice.png" alt="Tomato Sauce" />
				</div>
				<div class="item-details">
					<div class="item-name" id="tomato-name">
						White Rice
						<ion-checkbox></ion-checkbox>
					</div>
					<div class="item-category">Rice</div>
					<div class="item-price-container" id="tomato-price-container">
						<div class="item-price" id="tomato-price">P 49</div>
						<ion-input
							type="number"
							label="Qty:"
							color="none"
							placeholder="0"
						></ion-input>
					</div>
				</div>
			</div>
			<div class="add">
				<ion-button id="open-modal">Add to Bag</ion-button>
			</div>
		</div>
		<ion-modal ref="modal" trigger="open-modal">
			<ion-content class="ion-padding">
				<div class="modal-wrapper">
					<img src="../../images/success.png" />
					<h6>Successfully Added!</h6>
					<p>What do you want to do now?</p>
					<div class="modal-button-container">
						<div class="checkout">
							<ion-button fill="clear" href="/checkout">
								Proceed to Checkout
							</ion-button>
						</div>
						<div class="add-more">
							<ion-button fill="clear" href="/order">Add More</ion-button>
						</div>
					</div>
				</div>
			</ion-content>
		</ion-modal>
	</ion-content>
</template>

<script setup>
import { chevronBack, heartOutline } from "ionicons/icons";
import { IonButtons, IonModal } from "@ionic/vue";
import { bagHandle, star, starHalf } from "ionicons/icons";
import { ref } from "vue";

const modal = ref();
</script>

<style scoped>
ion-buttons ion-icon {
	color: #d71921;
}
.add-more ion-button {
	color: #d71921;
	text-transform: capitalize;
	background: transparent;
	border-style: none;
	font-weight: 700;
}
.checkout ion-button {
	color: #fff;
	text-transform: capitalize;
	background: #d71921;
	height: 100%;
	width: 100%;
	border-radius: 10px;
}
.modal-button-container {
	display: flex;
	flex-direction: column;
	height: auto;
	align-items: center;
	justify-content: center;
	width: 70%;
}
.modal-wrapper p {
	font-size: 14px;
	color: #6c757d;
}
.modal-wrapper h6 {
	font-weight: 700;
}
.modal-wrapper img {
	width: 70px;
}
.modal-wrapper {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
ion-modal {
	--width: 80%;
	--height: 35%;
	--border-radius: 16px;
	--box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
		0 4px 6px -4px rgb(0 0 0 / 0.1);
}

ion-modal::part(backdrop) {
	background: rgb(44, 50, 59);
	opacity: 1;
}
.item-img img {
	padding: 10px;
	width: 125px;
}
.add ion-button {
	padding: 0px 10px 5px 10px;
	width: 100%;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	text-transform: capitalize;
	--padding-top: 20px;
	--padding-bottom: 20px;
	--border-radius: 10px;
	--background: #d71921;
}
.add-ons-container {
	margin-bottom: 110px;
}
.item-details {
	width: 100%;
}
#tomato-name ion-checkbox {
	margin-right: 10px;

	--checkbox-background-checked: #ffffff;
	--border-color-checked: #fff;
	--checkmark-color: #ffc02e;
}

ion-checkbox::part(container) {
	border-radius: 4px;
	border: none;
}

#tomato-name {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
#tomato-price-container ion-input {
	text-align: center;
	width: 75px;
	border-radius: 10px;
	margin-right: 10px;
}
#tomato-price-container {
	display: flex;
	justify-content: space-between;
	width: 100%;
}
.add-ons-item-container #tomato-price {
	font-size: 14px;
}
.beverages-dropdown ion-select {
	display: flex;
	border: 2px solid #dee2e6;
	border-radius: 10px;
	height: auto;
	padding-left: 10px;
	padding-right: 10px;
}
.beverages-dropdown {
	height: auto;
	display: flex;
	align-items: center;
	margin: 0;
	padding: 0;
}

.item-category {
	font-size: 12px;
}
.loyalty-pts {
	font-weight: 700;
	color: #d71921;
	padding-left: 10px;
}
.tomato-container .item-img {
	display: flex;
	align-items: center;
	height: 7rem;
	width: 7rem;
	padding: 10px;
}

.add-ons-item-container {
	height: auto;
	margin-top: 10px;
	display: flex;
	background-color: #dee2e6;
	border-radius: 10px;
	align-items: center;
}
.add-ons-txt {
	margin-top: 10px;
	font-size: 18px;
	font-weight: 700;
}
.beverages-size button:focus {
	color: #fff;
	background-color: #ffc02e;
}
.beverages-size button {
	width: 100%;
}
.beverages-size {
	margin-bottom: 10px;
	display: flex;
	gap: 5px;
	width: auto;
}
.beverages-container button {
	font-weight: 700;
	border-radius: 10px;
	background-color: #ffffff;
	border: 2px solid #dee2e6;
	color: #000000;
	padding: 15px;
}
.beverages-container {
	margin-top: 10px;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 10px;
}
.beverages-txt {
	margin-top: 10px;
	font-size: 18px;
	font-weight: 700;
}
.item-price-container .item-price {
	color: #d71921;
	font-size: 24px;
	font-weight: 700;
}
.item-desc {
	font-size: 14px;
	color: #6c757d;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 10px;
}
.item-rating {
	margin-top: 10px;
	margin-bottom: 10px;
}
.item-rating ion-icon {
	color: #ffc02e;
	font-size: 16px;
}
.item-name {
	margin-top: 10px;
	font-weight: 700;
	font-size: 14px;
}
.item-container ion-icon {
	color: #d71921;
	font-size: 20px;
}
.item-container button {
	padding: 10px;
	background: #ffffff;
	position: absolute;
	right: 15px;
	bottom: -20px;
	z-index: 2;
	border-radius: 40%;
}
ion-input:focus {
	text-decoration: none;
}
.item-qty ion-icon {
	font-size: 14px;
}
.item-qty ion-input {
	text-align: center;
	width: 75px;
	border-radius: 10px;
}
.item-qty {
	display: flex;
	align-items: center;
}
.item-price-container {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.item-container img {
	height: 200px;
}
.item-container {
	position: relative;
	height: auto;
	margin-top: 10px;
	display: flex;
	background-color: #e9ecef;
	border-radius: 10px;
	align-items: center;
	justify-content: center;
}
.home-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
}
.btn-shop ion-icon {
	font-size: 28px;
	color: #d71921;
	margin-right: 10px;
}
ion-title {
	color: #000;
	font-size: 24px;
	font-weight: bold;
}
ion-back-button {
	color: #d71921;
}
</style>
