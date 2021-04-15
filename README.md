# MicroFrontendsWithAngular

Based on this youtube video:
https://www.youtube.com/watch?v=4u9_kdkvTsc

This project we created a Angular Component: "outage-screen"

Made some changes to app.module: 
https://github.com/pedroaz/MicroFrontendsWithAngular/blob/master/SmallAngularApp/src/app/app.module.ts

And then created a package.js file as a single script with the fllowing commands:

Bundle script:
* "build":"ng build --prod --output-hashing=none",
* "package":" cat dist/angular-project/{polyfills,runtime,main}.js > ./package.js",
* "bundle":"npm run build && npm run package"


Then on the other html we requested the javascript and used the component:

* <outage-screen></outage-screen>
* <script src="../SmallAngularApp/elements.js"></script>
