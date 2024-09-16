import AddToBag from "@/views/AddToBag.vue";
import Checkout from "@/views/Checkout.vue";
import Home from "@/views/Home.vue";
import Loyalty from "@/views/Loyalty.vue";
import Order from "@/views/Order.vue";
import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
	{
		path: "",
		component: Home,
	},
	{
		path: "/home",
		component: Home,
	},
	{
		path: "/home",
		name: "Home",
		component: Home,
	},
	{
		path: "/order",
		name: "Order",
		component: Order,
	},
	{
		path: "/loyalty",
		name: "Loyalty",
		component: Loyalty,
	},
	{
		path: "/bag",
		name: "Add To Bag",
		component: AddToBag,
	},
	{
		path: "/checkout",
		name: "Checkout",
		component: Checkout,
	},
	
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
