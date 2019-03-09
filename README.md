## This app is based built on React Native Firebase Starter<a href="https://invertase.io/oss/react-native-firebase"><img align="left" src="https://i.imgur.com/JIyBtKW.png" width="180px"></a>
---
Drinking game react native app with [`react-native-firebase`](https://github.com/invertase/react-native-firebase) pre-integrated to get you started quickly.

---
### Getting Started

> If you're only developing for one platform you can ignore the steps below that are tagged with the platform you don't require.

#### 1) Clone & Install Dependencies

- 1.1) `git clone https://github.com/invertase/react-native-firebase-starter.git`
- 1.2) `cd react-native-firebase-starter` - cd into your newly created project directory.
- 1.3) Install NPM packages with your package manager of choice - i.e run `yarn` or `npm install`
- 1.4) **[iOS]** `cd ios` and run `pod install` - if you don't have CocoaPods you can follow [these instructions](https://guides.cocoapods.org/using/getting-started.html#getting-started) to install it.
- 1.5) **[Android]** No additional steps for android here.

#### 2) Place `Google Services` files (plist & JSON)
- 2.1) **[iOS]** Place this file in the `ios/` directory of your project.
- 2.2)  **[Android]** Place this file in the `android/app/` directory of your project.
  
#### 3) Start your app

- 3.1) Start the react native packager, run `yarn run start` or `npm start` from the root of your project.
- 3.2) **[iOS]** Build and run the iOS app, run `npm run ios` or `yarn run ios` from the root of your project. The first build will take some time. This will automatically start up a simulator also for you on a successful build if one wasn't already started.
- 3.3) **[Android]** If you haven't already got an android device attached/emulator running then you'll need to get one running (make sure the emulator is with Google Play / APIs). When ready run `npm run android` or `yarn run android` from the root of your project.

If all has gone well you'll see an initial screen like the one below.

### License

- See [LICENSE](/LICENSE)
