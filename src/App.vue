<template>
	<ion-app>
		<ion-split-pane content-id="main-content">
			<ion-menu content-id="main-content" type="push">
				<ion-content>
					<ion-list id="inbox-list" lines="none">
						<div class="profile">
							<img src="../images/ChouTzuyu.png" alt="User photo" />
							<div class="loyalty-container">
								<ion-button
									href="/loyalty"
									class="points"
									fill="clear"
									color="dark"
								>
									<div class="button-content">
										<img src="../../images/crown.png" />
										<div class="num-points">0 Points</div>
										<ChevronRight size="18px" />
									</div>
								</ion-button>
							</div>
						</div>
						<ion-list-header>Chou Tzuyu</ion-list-header>
						<ion-note>+63 912 345 6789</ion-note>

						<ion-list id="list1" lines="none">
							<ion-item href="/home">
								<ion-icon src="../images/Logo.svg"></ion-icon>
								<ion-label>Home</ion-label>
							</ion-item>
							<ion-item href="/order">
								<ion-icon :src="fastFood"></ion-icon>
								<ion-label>Order Now</ion-label>
							</ion-item>
							<ion-item href="/notifications">
								<ion-icon :src="notifications"></ion-icon>
								<ion-label>Notifications</ion-label>
								<ion-badge slot="end"> 4 </ion-badge>
							</ion-item>
							<ion-item href="/store">
								<ion-icon :src="storefront"></ion-icon>
								<ion-label>Store Locator</ion-label>
							</ion-item>
							<ion-item href="/faq">
								<ion-icon :src="helpCircle"></ion-icon>
								<ion-label>FAQ's</ion-label>
							</ion-item>
						</ion-list>

						<ion-list lines="none" key="none">
							<ion-item href="/home">
								<ion-icon :src="bagHandle"></ion-icon>
								<ion-label>My Orders</ion-label>
							</ion-item>
							<ion-item href="/order">
								<ion-icon :src="person"></ion-icon>
								<ion-label>My Account</ion-label>
							</ion-item>
							<ion-item href="/notifications">
								<ion-icon :src="heart"></ion-icon>
								<ion-label>My Favorites</ion-label>
								<ion-badge slot="end"> 4 </ion-badge>
							</ion-item>
							<ion-item href="/store">
								<ion-icon :src="location"></ion-icon>
								<ion-label>Order Tracker</ion-label>
							</ion-item>
							<ion-item href="/faq">
								<ion-icon :src="time"></ion-icon>
								<ion-label>Order History</ion-label>
							</ion-item>
						</ion-list>
					</ion-list>

					<div class="logout-container">
						<button class="logout">Logout</button>
					</div>
				</ion-content>
			</ion-menu>
			<ion-router-outlet id="main-content">
				<ion-header>
					<ion-toolbar>
						<ion-title> Home </ion-title>
					</ion-toolbar>
				</ion-header>
				<ion-content> Home Content </ion-content>
			</ion-router-outlet>
		</ion-split-pane>
	</ion-app>
</template>

<script setup>
import {
	IonApp,
	IonContent,
	IonIcon,
	IonItem,
	IonLabel,
	IonList,
	IonListHeader,
	IonMenu,
	IonMenuToggle,
	IonNote,
	IonRouterOutlet,
	IonSplitPane,
} from "@ionic/vue";

import {
	bagHandle,
	fastFood,
	heart,
	helpCircle,
	location,
	mail,
	notifications,
	person,
	storefront,
	time,
} from "ionicons/icons";

import { Crown, ChevronRight, Bell, ShoppingBag } from "lucide-vue-next";
</script>

<style scoped>
ion-label {
	padding-left: 20px;
}

ion-menu {
	min-width: 10em;
}

::-webkit-scrollbar {
	width: 12px;
}

::-webkit-scrollbar-track {
	background: transparent;
}

::-webkit-scrollbar-thumb {
	background-color: rgba(0, 0, 0, 0.1);
	border-radius: 20px;
	border: 3px solid transparent;
}

::-webkit-scrollbar-thumb:hover {
	background-color: rgba(0, 0, 0, 0.1);
}

* {
	scrollbar-width: thin;
	scrollbar-color: rgba(0, 0, 0, 0.1) transparent;
}

/* For IE/Edge */
::-ms-scrollbar {
	width: 12px;
}

::-ms-scrollbar-track {
	background: transparent;
}

::-ms-scrollbar-thumb {
	background-color: rgba(0, 0, 0, 0.2);
	border-radius: 20px;
}

.profile img {
	width: 70px;
	height: 70px;
	object-fit: cover;
	border-radius: 50%;
}

.logout-container {
	margin-top: 40px;
}

.logout {
	margin-left: 10px;
	background: #d71921;
	color: #fff;
	padding: 10px;
	border-radius: 16px;
	width: 165px;
	height: 45px;
	font-size: 14px;
	font-weight: 700;
}
.button-content img {
	height: 18px;
	width: 18px;
}
.button-content {
	height: auto;
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
ion-split-pane {
	--side-width: 20%;
	--border: #fff;
}

ion-badge {
	--background: #edbe4c;
	--color: #ffffff;
}

ion-menu ion-content {
	--background: var(--ion-item-background, var(--ion-background-color, #fff));
}

ion-menu.md ion-content {
	--padding-start: 8px;
	--padding-end: 8px;
}

ion-menu.md ion-list {
	padding: 10px 0;
}

ion-menu.md ion-note {
	margin-bottom: 10px;
}

ion-menu.md ion-list-header,
ion-menu.md ion-note {
	padding-left: 10px;
}

ion-menu.md ion-list#list1 {
	border-bottom: 1px solid var(--ion-background-color-step-150, #d7d8da);
}

ion-menu.md ion-list#inbox-list ion-list-header {
	font-size: 22px;
	font-weight: 600;

	min-height: 20px;
}

ion-menu.md ion-list#labels-list ion-list-header {
	font-size: 16px;

	margin-bottom: 18px;

	color: #757575;

	min-height: 26px;
}

ion-menu.md ion-item {
	--padding-start: 10px;
	--padding-end: 10px;
	border-radius: 4px;
}

ion-menu.md ion-item.selected {
	--background: rgba(var(--ion-color-primary-rgb), 0.14);
}

ion-menu.md ion-item.selected ion-icon {
	color: #d71921;
}

ion-menu.md ion-item ion-icon {
	color: #dee2e6;
}

ion-menu.md ion-item ion-label {
	font-weight: 700;
	font-size: 16px;
}

ion-menu.ios ion-content {
	--padding-bottom: 20px;
}

ion-menu.ios ion-list {
	padding: 20px 0 0 0;
}

ion-menu.ios ion-note {
	line-height: 24px;
	margin-bottom: 20px;
}

ion-menu.ios ion-item {
	--padding-start: 16px;
	--padding-end: 16px;
	--min-height: 40px;
}

ion-menu.ios ion-item.selected ion-icon {
	color: #d71921;
}

ion-menu.ios ion-item ion-icon {
	font-size: 24px;
	color: #7c7c7c;
}

ion-menu.ios ion-list#labels-list ion-list-header {
	margin-bottom: 8px;
}

ion-menu.ios ion-list-header,
ion-menu.ios ion-note {
	padding-left: 16px;
	padding-right: 16px;
}

ion-menu.ios ion-note {
	margin-bottom: 8px;
}

ion-note {
	display: inline-block;
	font-size: 16px;

	color: var(--ion-color-medium-shade);
}

ion-item.selected {
	--color: #d71921;
}
</style>
