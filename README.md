## This app is based built on React Native Firebase Starter<a href="https://invertase.io/oss/react-native-firebase"><img align="left" src="https://i.imgur.com/JIyBtKW.png" width="110px"></a>
---
Drinking game react native app with [`react-native-firebase`](https://github.com/invertase/react-native-firebase) integrated.
---
### Getting Started

> If you're only developing for one platform you can ignore the steps below that are tagged with the platform you don't require.

### 1) Clone & Install Dependencies
- 1.1) git clone https://github.com/VladCojanu/Siply.git
- 1.2) cd Siply
- 1.3) Install NPM packages `yarn`
- 1.4) [iOS] cd ios and run pod install - if you don't have CocoaPods you can follow these instructions to install it.
- 1.5) [Android] No additional steps for android here.

#### 2) Place `Google Services` files (plist & JSON)
- 2.1) **[iOS]** Place this file in the `ios/` directory of the project.
- 2.2)  **[Android]** Place this file in the `android/app/` directory of the project.
  
#### 3) Start the app
- 1.1) Start the react native packager, run `yarn run start` from the root of the project.
- 1.2) **[iOS]** Build and run the iOS app, run `yarn run ios` from the root of the project. The first build will take some time. This will automatically start up a simulator also for you on a successful build if one wasn't already started.
- 1.3) **[Android]** If you haven't already got an android device attached/emulator running then you'll need to get one running (make sure the emulator is with Google Play / APIs). When ready run `yarn run android` from the root of the project.

### License

- See [LICENSE](/LICENSE)
