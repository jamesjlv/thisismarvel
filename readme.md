# This is Marvel

![Badge in Development](http://img.shields.io/static/v1?label=STATUS&message=IN%20DEVELOPMENT&color=GREEN&style=for-the-badge)

## Description

- This app brings the entire Marvel universe to the palm of your hand. Easily search for your favorite heroes, comics, and even events.

## Technologies

![Badge Firebase](https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black) ![Badge React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Badge React ](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Badge Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white) ![Badge JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white) ![Badge Expo](https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white) ![Badge Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![Badge styled-components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) ![Badge Realm](https://img.shields.io/badge/Realm-39477F?style=for-the-badge&logo=realm&logoColor=white)

## Architecture

For this application, the concepts of Clean Architecture + SOLID were applied. This ensures that the logic connecting the presentation layer with the data layer doesn't rely on a specific provider or framework. This minimizes the impact on the application when scaling. For instance, if a change is needed from Axios to another fetch tool, only minor adjustments will be required in the infra and main layers, where the factories are used in the data layer.

## Decisions

To enable all functionalities, technologies like Firebase's Firestore were selected for database connection, user registration, and sending password reset codes. Axios was used for the connection with the Marvel API. RealmDB was utilized for locally storing tokens.

## Communication

The components and screens do not directly interact with Axios or Firestore. They integrate via factories in the main layer, which imports classes with standard execution implementations for specific purposes and injects the necessary services for proper functioning. The main layer creates the factory, combining the httpClient or databaseClient factories, and injects them into the use case of the data function, enabling it to receive the function execution. After that, it injects the factory into the screen, allowing it to use the necessary functions.

## Marvel API

For this project, you will need Marvel API keys, which should be specified in the `.env` file. Please follow the instructions in the `.env.example` file located in the repository.

To generate the keys, follow the steps at this link: [Marvel Documentation](https://developer.marvel.com/documentation/getting_started "Marvel Documentation")

## Firebase

For this project, some Firebase functions need to be enabled, such as Firestore, as well as the **Trigger Email from Firestore** extension.

To configure Firebase, follow the step-by-step guide at [Google Firebase](https://firebase.google.com/?hl=en "Google Firebase") by clicking the "Get Started" button.

## UI

[![UI](https://raw.githubusercontent.com/jamesjlv/thisismarvel/main/src/assets/images/App.png)](https://raw.githubusercontent.com/jamesjlv/thisismarvel/main/src/assets/images/App.png)

## Environment

To ensure everything functions as expected, your device must have all the necessary resources. If you're unsure whether your device can run the application, please check this link: [Environment Setup](https://react-native.rocketseat.dev/ "Environment Setup")

## How to Start

- Download the project to your device and install all necessary packages.

```shell
yarn
```

### Android

##### Development

For development mode, simply open a terminal at the project root and run the command:

```shell
yarn android
```

##### Production/Release

To create a release version of the app, execute the following command:

```shell
yarn build:android:production
```

The SDK file will be saved in `./android/app/build/outputs/apk/release/app-release.apk`.

**_If desired, there will already be an `.sdk` file saved in the directory above, so you won't need to do any configuration. To install, run `yarn install:apk`._**

### iOS

##### Development

To start the project in development mode, simply open a terminal at the project root and run the command:

```shell
yarn ios
```

##### Production

To generate an apk, you will first need an Apple account. Follow the step-by-step guide at this link: [iOS Publication](https://medium.com/timeless/adding-react-native-app-to-app-store-connect-c4d45571df0d "iOS Publication")

## Tests? Yes, we have them.

Constantly improving the tests ensures a functional app with fewer errors.

To view the application's coverage, simply run the following command in the terminal at the project root:

```shell
yarn test:ci
```

It will display the coverage status directly in the console, but it will also create coverage files that can be viewed directly in your web browser.

To open this file, navigate to and open the file in `coverage/lcov-report/index.html`.

##### Test Progress

- Components: 100%
- Screens: 30%
- Data Layer: 5%

## Dependencies

In this project, all dependencies are fixed to ensure the application runs on your machine. However, during development, it will be updated and tested for potential version changes.

## Functionality

Below you can see the tool in action, from registration to viewing information:

https://github.com/jamesjlv/thisismarvel/assets/63821594/3b3fc31d-900c-4973-b256-d112d0af4699
