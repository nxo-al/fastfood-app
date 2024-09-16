<template>
	<ion-header :translucent="true" class="ion-no-border">
		<ion-toolbar>
			<ion-buttons slot="start">
				<ion-button href="/bag" fill="clear">
					<ion-icon slot="icon-only" :icon="chevronBack"></ion-icon>
				</ion-button>
			</ion-buttons>
			<div class="home-header">
				<ion-title>Order Summary</ion-title>
			</div>
		</ion-toolbar>
	</ion-header>
	<ion-content class="ion-padding">
		<!-- Personal Info -->
		<div class="item-wrapper">
			<div class="add-ons-item-container">
				<div class="item-details">
					<div class="item-name" id="tomato-name">Chou Tzuyu</div>
					<div class="number">+63 912 345 6789</div>
					<div class="email">chou.tzu-yu@email.com</div>
				</div>
			</div>
			<ion-icon :icon="ellipsisVertical" size="large"></ion-icon>
		</div>
		<!-- Radio Group for Selection -->
		<ion-radio-group v-model="selectedRice">
			<!-- Home Address -->
			<div class="item-wrapper">
				<div class="add-ons-item-container">
					<div class="item-details">
						<div class="item-name" id="tomato-name">
							My Home Address
							<!-- Radio Button 1 -->
							<ion-radio value="home"></ion-radio>
						</div>
						<div class="item-address">
							No. 21 St. Agustin Street Brgy. De Jose Delgado City 2234
							Philippines
						</div>
					</div>
				</div>
				<ion-icon :icon="ellipsisVertical" size="large"></ion-icon>
			</div>

			<!-- Work Address -->
			<div class="item-wrapper">
				<div class="add-ons-item-container">
					<div class="item-details">
						<div class="item-name" id="tomato-name">
							Work/Office
							<!-- Radio Button 2 -->
							<ion-radio value="work/office"></ion-radio>
						</div>
						<div class="item-address">
							3rd Flr Anyeong Bldg. Seareal St. Joaqin City 3456 Philippines
						</div>
					</div>
				</div>
				<ion-icon :icon="ellipsisVertical" size="large"></ion-icon>
			</div>
		</ion-radio-group>
		<div class="order-txt">Orders</div>
		<div class="order-container">
			<div class="add-ons-item-container">
				<div class="item-img">
					<img src="../../images/steakfries&veggies.png" alt="Tomato Sauce" />
				</div>

				<div class="item-details">
					<div class="item-name" id="tomato-name">Steak Fries Veggies</div>
					<div class="item-add-ons">1x Tomato Sauce</div>
					<div class="item-add-ons">1x Regular Coke</div>
					<div class="item-add-ons">1x Fried Chicken</div>
				</div>
			</div>
			<ion-icon :icon="ellipsisVertical" size="large"></ion-icon>
		</div>
		<div class="order-qty">
			<div class="price">P 185</div>
			<ion-input type="number" label="Qty:" placeholder="0"></ion-input>
		</div>
		<div class="payment-txt">Payment Option</div>
		<ion-radio-group>
			<div class="payment-container">
				<div class="item-details">
					<div class="item-name" id="tomato-name">
						Cash On Delivery
						<!-- Cash On Delivery -->
						<ion-radio value="cod"></ion-radio>
					</div>
					<div class="item-category">Pay when you received the order</div>
					<div class="item-price-container" id="tomato-price-container"></div>
				</div>
			</div>
			<div class="payment-container">
				<div class="item-details">
					<div class="item-name" id="tomato-name">
						Loyalty Points<span>(0 Points)</span>
						<!-- Loyalty Points -->
						<ion-radio value="loyalty"></ion-radio>
					</div>
					<div class="item-category">Pay using your earned loyalty points</div>
					<div class="item-price-container" id="tomato-price-container"></div>
				</div>
			</div>
			<div class="payment-container">
				<div class="item-details">
					<div class="item-name" id="tomato-name">
						<img src="../../images/PayPal-Logo 1.png" />
						<!-- Paypal -->
						<ion-radio value="paypal"></ion-radio>
					</div>
					<div class="item-category">
						A new tab will open to access your account.
					</div>
					<div class="item-price-container" id="tomato-price-container"></div>
				</div>
			</div>
			<div class="payment-container">
				<div class="item-details">
					<div class="item-name" id="tomato-name">
						<img src="../../images/paynamics_rgb 1.png" />
						<!-- Paynamics -->
						<ion-radio value="paynamics"></ion-radio>
					</div>
					<div class="item-category">
						Choose paynamics services available from you
					</div>
					<div class="item-price-container" id="tomato-price-container"></div>
				</div>
			</div>
		</ion-radio-group>
		<div class="sub-total">
			Subtotal
			<div class="subtotal-price">P 185</div>
		</div>
		<div class="df">
			Delivery Charge
			<div class="df-price">P 59</div>
		</div>
		<div class="change">
			<ion-input
				type="number"
				label="Change for"
				label-placement="stacked"
				placeholder="e.g. 1,000"
			></ion-input>
		</div>
		<div class="payment-footer">
			<div>
				<div class="total">Grand Total</div>
				<div class="total-price">P 244</div>
			</div>
			<ion-button fill="clear" id="open-modal">Place Order</ion-button>
		</div>

		<!-- Order Track Modal -->
		<ion-modal ref="modal" trigger="open-modal" @willDismiss="onWillDismiss">
			<ion-content class="ion-padding">
				<div class="modal-wrapper">
					<div class="content-container">
						<img src="../../images/success.png" />
						<h6>Order Received!</h6>
						<p>
							Your order <span>No. 19049585</span> has successfully take and now
							being processed. Kindly wait for our notification regarding your
							order.
						</p>
					</div>
					<div class="modal-button-container">
						<div class="track">
							<ion-button fill="clear" href="/checkout">
								Track Order
							</ion-button>
						</div>
						<div class="home">
							<ion-button fill="clear" href="/home">Back to Home</ion-button>
						</div>
					</div>
				</div>
			</ion-content>
		</ion-modal>
	</ion-content>
</template>

<script setup>
import { chevronBack, ellipsisVertical, heartOutline } from "ionicons/icons";
import {
	IonButtons,
	IonFooter,
	IonToolbar,
	IonTitle,
	IonModal,
} from "@ionic/vue";
import { ref } from "vue";

const modal = ref();
</script>

<style scoped>
.sub-total {
	margin-top: 20px;
	font-size: 14px;
	font-weight: 700;
	display: flex;
	justify-content: space-between;
}
.change {
	margin-bottom: 100px;
	border: 1px solid #dee2e6;
	padding: 10px;
	border-radius: 10px;
	margin-top: 10px;
}
.df {
	margin-top: 10px;
	font-size: 14px;
	font-weight: 700;
	display: flex;
	justify-content: space-between;
}
.payment-container {
	height: 90px;
	display: flex;
	background-color: #dee2e6;
	border-radius: 10px;
	align-items: center;
	width: 100%;
	padding: 10px;
	margin-bottom: 10px;
}
#tomato-name span {
	color: #d71921;
}
.payment-txt {
	margin: 20px 0px 10px 0px;
	font-size: 18px;
	font-weight: 700;
}
#tomato-name {
	margin-bottom: 10px;
}
.item-add-ons {
	font-size: 12px;
}
.price {
	color: #d71921;
	font-weight: 700;
	padding-left: 10px;
}
.order-qty ion-input {
	width: 30%;
}
.order-qty {
	background-color: #dee2e6;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 90%;
	border-radius: 10px;
}
.order-txt {
	margin: 10px 0px 10px 0px;
	font-size: 18px;
	font-weight: 700;
}
.email {
	font-size: 14px;
	color: #6c757d;
}
.number {
	font-size: 14px;
	color: #6c757d;
}
.item-address {
	margin-top: 10px;
	font-size: 14px;
	color: #6c757d;
	width: 80%;
}
.content-container {
	display: flex;
	flex-direction: column;
	text-align: center;
	height: 70%;
	align-items: center;
	justify-content: start;
	margin-bottom: 100px;
}
.modal-wrapper span {
	font-weight: 700;
	color: #d71921;
}
.home ion-button {
	color: #d71921;
	text-transform: capitalize;
	background: transparent;
	border-style: none;
	font-weight: 700;
	width: 90%;
	height: 50px;
}
.track ion-button {
	color: #fff;
	text-transform: capitalize;
	background: #d71921;
	height: 50px;
	width: 90%;
	border-radius: 10px;
}
.track {
	display: flex;
	justify-content: center;
	width: 100%;
}
.home {
	display: flex;
	justify-content: center;
	width: 100%;
}
.modal-button-container {
	position: fixed;
	bottom: 0;
	display: flex;
	flex-direction: column;
	height: 40%;
	align-items: center;
	justify-content: flex-end;
	width: 100%;
}
.modal-wrapper p {
	font-size: 14px;
	color: #6c757d;
}
.modal-wrapper h6 {
	font-weight: 700;
}
.modal-wrapper img {
	width: 200px;
}
.modal-wrapper {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
ion-modal {
	--border-radius: 16px;
	--box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
		0 4px 6px -4px rgb(0 0 0 / 0.1);
}

ion-modal::part(backdrop) {
	background: rgb(44, 50, 59);
	opacity: 1;
}
.total-price {
	font-weight: 700;
}
.total {
	font-size: 12px;
}
.payment-footer ion-button {
	height: 100%;
	background-color: #d71921;
	color: #fff;
	letter-spacing: 0.1px;
	text-transform: capitalize;
	width: 50%;
	border-radius: 10px;
	z-index: 99;
}
.payment-footer {
	background: #fff;
	border-top: 1px solid #dee2e6;
	bottom: 0;
	width: 95%;
	position: fixed;
	display: flex;
	justify-content: space-between;
	height: 40px;
	align-items: center;
	margin-right: 24px;
}
.order-container ion-icon {
	color: #ffc02e;
}
.order-container {
	display: flex;
	align-items: center;
}
.item-wrapper ion-icon {
	color: #ffc02e;
}
.item-wrapper {
	width: 100%;
	display: flex;
	align-content: center;
	align-items: center;
}
.item-img img {
	padding: 10px;
	width: 125px;
}

.item-details {
	width: 100%;
	align-items: center;
	padding-left: 10px;
}

#tomato-name ion-radio {
	margin-right: 10px;
	background-color: #fff;
	border-radius: 50%;
	--color: #fff;
	--color-checked: #ffc02e;
}
ion-checkbox::part(container) {
	border-radius: 50%;
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
	display: flex;
	background-color: #dee2e6;
	border-radius: 10px;
	align-items: center;
	width: 100%;
	padding: 10px;
	margin-bottom: 10px;
}

.item-name {
	margin-top: 10px;
	font-weight: 700;
	font-size: 14px;
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

ion-title {
	color: #000;
	font-size: 24px;
	font-weight: bold;
}
</style>
