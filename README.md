<h1 align="center">nature-xo-config</h1>

<p align="center">naturecodevoid's <a href="https://github.com/xojs/xo">XO</a> Config

<p align="center"><a href="https://github.com/naturecodevoid/nature-xo-config/blob/master/LICENSE"><img src="https://img.shields.io/github/license/naturecodevoid/nature-xo-config?style=flat-square"></a> <a href="https://www.npmjs.com/package/nature-xo-config"><img src="https://img.shields.io/npm/v/nature-xo-config?style=flat-square"></a></p>

<h2 align="center">Installing</h2>

<h3 align="center">CLI</h3>

This assumes you have Node.js and npm (bundled with node) and the terminal's working directory is where you want to make
the `.xo-config.js`.

1. Install config: `$ npm install --save-dev nature-xo-config`
1. Generate the `.xo-config.js`: `$ npx nature-xo-config`

If you want to change options:

<!-- prettier-ignore-start -->

```javascript
// .xo-config.js
module.exports = {
    ...require("nature-xo-config"),
};
```

<!-- prettier-ignore-end -->

<h3 align="center">Manual</h3>

Install:

```shell
$ npm install --save-dev nature-xo-config
```

Edit `.xo-config.js`:

```javascript
module.exports = {
    ...require("nature-xo-config"),
};
```

Or if you want to change some rules:

```javascript
// .xo-config.js
module.exports = {
    ...require("nature-xo-config"),
    space: true
};
```
