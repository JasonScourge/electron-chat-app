## Minimal Electron, React and Webpack boilerplate

Minimal Electron, React, PostCSS and Webpack boilerplate to help you get started with building your next app.
This application is largely bootstrapped from [Alex Devero's](https://github.com/alexdevero/electron-react-webpack-boilerplate) repo.

### Table of contents

- [Install](#install)
- [Usage](#usage)
- [Add Sass](#add-sass)
- [Add TailwindcSS](#add-tailwindcss)
- [Change app title](#change-app-title)
- [Contact and Support](#contact-and-support)
- [Code of Conduct](#code-of-conduct)
- [License](#license)

### Install

#### Clone this repo

```
git clone https://github.com/alexdevero/electron-react-webpack-boilerplate.git
```

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

### Add Sass

Adding Sass to boilerplate requires updating webpack configs and adding necessary loaders.

1. To `webpack.build.config.js` and `webpack.dev.config.js` add new object to `rules`:

```JavaScript
{
  test: /\.scss$/,
  use: [
    { loader: 'style-loader' },
    { loader: 'css-loader' },
    { loader: 'sass-loader' }],
  include: defaultInclude
}
```

2. Install additional loaders for sass, `sass-loader` and `node-sass`.

3. Rename all CSS file to `.scss`.

### Add TailwindCSS

If you don't want to do all these steps, you can clone [This Repository](https://github.com/Sanan4li/React-Electron-TailwindCSS-Boilerplate) and you are good to go.

Adding TainwindCSS to boilerplate requires adding all the dependencies listed on the tailwindcss website for `create react app` [Official Guide](https://tailwindcss.com/docs/guides/create-react-app). OR follow these steps

1. install `tailwindcss`, `postcss` and `autoprefixer`.

```
npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```

2. Install `craco`.

```
npm install @craco/craco
```

3. Open `package.json` file, find `start` and `build` scripts under `scripts`.

4. Add `&& craco start` at the end in `start` and `build` scripts. You also have to add `build-css` script to build the CSS styles using tailwindCSS. `"build-css": "npx tailwindcss build  -o src/styles/main.css",`. You can choose output folder of your own choice. Here are the three scripts after changing/adding.

```json
"start": "cross-env NODE_ENV=development webpack serve --hot --host 0.0.0.0 --config=./webpack.dev.config.js --mode development && craco start",
    "build": "cross-env NODE_ENV=production webpack --config webpack.build.config.js --mode production && craco build",
"build-css": "npx tailwindcss build  -o src/styles/main.css",
```

5. Now, create `craco.config.js` file in your project at root of your project and add the following.

```JavaScript
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}
```

6. Next, generate your tailwind.config.js file:

```
npx tailwindcss-cli@latest init
```

This will create a minimal tailwind.config.js file at the root of your project.

7. (Optional) Configure Tailwind to remove unused styles in production
   In your `tailwind.config.js` file, configure the purge option with the paths to all of your components so Tailwind can tree-shake unused styles in production builds:

```JavaScript
  // tailwind.config.js
  module.exports = {
   purge: [],
   purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
```

8. Add `main.css` file in `app.js`. Make sure you choose correct path for CSS file.

```
import '../styles/main.css'
```

9. You may have to run `npm install tailwindcss@latest postcss@latest autoprefixer@latest` if you face different version issues.
10. You can also check [JIT Mode In TailwindCSS](https://tailwindcss.com/docs/just-in-time-mode#enabling-jit-mode) if you want to use Just In Time Mode.

### Change app title

This boilerplate uses [HTML Webpack Plugin](https://github.com/jantimon/html-webpack-plugin#options) to generate the HTML file of the app. Changing app title is possible only through webpack configs, `webpack.build.config.js` and `webpack.dev.config.js`. App title can be changed by adding objects of options.

In `webpack.build.config.js`:

```JavaScript
plugins: [
  new HtmlWebpackPlugin({title: 'New app title '}),// Add this (line 41)
  new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: 'bundle.css',
    chunkFilename: '[id].css'
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  }),
  new BabiliPlugin()
],
```

In `webpack.dev.config.js`:

```JavaScript
plugins: [
  new HtmlWebpackPlugin({title: 'New app title '}),// Add this (line 36)
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  })
],
```

## Contact and Support

I want your feedback!
