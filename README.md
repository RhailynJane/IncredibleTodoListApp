# Incredible Todo List App 📱📝

Welcome to your Expo-powered React Native app! This project was created using [`create-expo-app`](https://www.npmjs.com/package/create-expo-app) and serves as a solid starting point for developing cross-platform mobile applications.

---

## 🚀 System Requirements

Make sure you have the following installed:

- **Node.js** (v16 or later) — [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js) or install **Yarn** globally:
  ```
  npm install --global yarn
  ```
- **Android Studio** (for emulator testing)

---

## 📁 Project Setup

### 1. Create a New App

Run this in your terminal:

```
npx create-expo-app@latest
```

### 2. Navigate into the App Directory

```
cd Incredible\ Todo\ List\ App
```

### 3. Install Dependencies

```
npm install
# or
yarn install
```

### 4. Start the Development Server

Using npm:

```
npm run start
```

Using Yarn:

```
yarn start
```

This will open **Expo Dev Tools** in your browser.

---

## 📱 Run the App

You can run the app on:

- **Web browser**
- **Android Emulator** (requires setup — see below)
- **Physical device** via Expo Go (scan QR code)

---

## 🧪 Android Emulator Setup

### Prerequisites

- Android Studio installed
- At least one Android Virtual Device (AVD) created

### Steps

1. Open Android Studio
2. Go to **Tools > Device Manager**
3. Launch an emulator (e.g., Pixel 5 API 33)
4. In your terminal, run:
   ```
   yarn start
   ```
5. Press **`a`** in the terminal to launch on the emulator

---

## ♻️ Optional: Reset the Project

If you want a fresh start:

```
yarn reset-project
```

When prompted, press **`n`** (No) to retain base structure.

---

## 🛠️ Troubleshooting

| Issue                 | Cause                                  | Solution                                                                            |
| --------------------- | -------------------------------------- | ----------------------------------------------------------------------------------- |
| Emulator not detected | Emulator not running or misconfigured  | Start AVD from Android Studio before running the project                            |
| App stuck on loading  | Build process interrupted or corrupted | Stop all terminals, kill node processes, and restart: `Ctrl + C`, then `yarn start` |

---

## 📚 Resources

- [📘 Expo Docs](https://docs.expo.dev/)
- [📱 React Native Docs](https://reactnative.dev/docs/environment-setup)
- [📦 Expo CLI GitHub](https://github.com/expo/expo)
- [❓ Expo Questions on Stack Overflow](https://stackoverflow.com/questions/tagged/expo)
- [🎥 Learn Expo in 15 Minutes (YouTube)](https://www.youtube.com/results?search_query=Learn+Expo+in+15+Minutes)
- 📲 **Download Expo Go:**
  - [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent)
  - [Apple App Store](https://apps.apple.com/app/apple-store/id982107779)

---

## 🤝 Join the Community

- [Expo GitHub](https://github.com/expo/expo)
- [Expo Discord](https://chat.expo.dev)

Happy building!
