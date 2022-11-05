### Starter app to build [ArcGIS JS API](https://developers.arcgis.com/javascript/latest/) with [Vite](https://vitejs.dev/) and [Typescript](https://www.typescriptlang.org/)

#### Follow the steps to use this starter

Simple with the IDE in the web:  
[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz_small.svg)](https://stackblitz.com/github/SaschaBrunnerCH/arcgisjsapi-vite-ts-starter)

or locally with the following steps:

1. Clone the repository
2. Remove .git folder to untrack git
3. Install dependencies with `npm install`
4. Start server with `npm run dev` and start programming

---

#### How to create this starter from scratch

Steps to create this starter project:

1. `npm create vite@latest`
   1. set project-name `arcgisjsapi-vite-ts-starter`
   2. select `vanille`
   3. select `typescript`
2. `npm install`
3. `npm install @arcgis/core` to install ArcGIS JS API
4. Change the `main.ts` to:

   ```javascript
   import './style.css'
   import SceneView from "@arcgis/core/views/SceneView";
   import Map from "@arcgis/core/Map";

   new SceneView({
       container: "viewDiv",
       map: new Map({
           basemap: "topo-vector",
           ground: "world-elevation"
       })
   });
   ```

5. Change in the `index.html`: `<div id="app">` with `<div id="viewDiv">`
6. Change the `style.css` to:

   ```css
   @import url("https://js.arcgis.com/4.24/@arcgis/core/assets/esri/themes/light/main.css");
   html,
   body,
   #viewDiv {
       padding: 0;
       margin: 0;
       height: 100%;
       width: 100%;
   }
   ```

7. start with `npm run dev`
