#!/usr/bin/env node
require("fs").copyFileSync(
    require("path").resolve(__dirname, "exports.js"),
    require("path").resolve(process.cwd(), ".xo-config.js"),
);
console.log("Please run 'npm i -D nature-xo-config' to finish installing, if you haven't already.");