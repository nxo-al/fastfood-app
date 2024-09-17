
# Ionic Vue.js App with Capacitor
This is a cross-platform mobile app built with Ionic and Vue.js, using Capacitor for native functionalities like camera, file system, and geolocation.

## Technologies Used
- Ionic Framework for UI
- Vue.js for frontend
- Capacitor for native integration
## Getting Started
### Prerequisites
- Node.js (v14+)
- Ionic CLI
```npm install -g @ionic/cli```
- Capacitor CLI
```npm install --save @capacitor/core @capacitor/cli```
### Installation
1. Clone the repo:
```
git clone https://github.com/nxo-al/fastfood-app.git
cd fastfood-app
```
2. Install dependencies:
```npm install```
3. Build and sync with Capacitor:
```
npm run build
npx cap sync
```
## Scripts
- npm start – Run the app in development mode.
- npm run build – Build the app for production.
- npm run sync – Sync with Capacitor.
## Capacitor Plugins
- @capacitor/camera
- @capacitor/filesystem
- @capacitor/geolocation
- @capacitor/storage
## Running on Platforms
# Web
```ionic serve```
# iOS
```npx cap open ios```
# Android
```npx cap open android```
