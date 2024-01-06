## Electron React Chat App

This application is largely bootstrapped from [Alexdevero's](https://github.com/alexdevero/electron-react-webpack-boilerplate) and [Timonwa's](https://github.com/Timonwa/react-chat) repos.


#### Install dependencies

```
npm install
```
or
```
yarn
```

### Usage

#### Run the app

```
npm run start
```
or
```
yarn start
```

#### Adding your own Firebase Configurations

You will need generate your own firebase config keys. You can then choose to use your own keys either by adding them to a `.env` file or update the values in the `src/firebase.js` folder.


#### Build the app (automatic)

```
npm run package
```
or
```
yarn package
```

#### Build the app (manual)

```
npm run build
```
or
```
yarn build
```

#### Test the app (after `npm run build` || `yarn run build`)
```
npm run prod
```
```
yarn prod
```