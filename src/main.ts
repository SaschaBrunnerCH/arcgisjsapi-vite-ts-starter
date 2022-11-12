import './style.css'
import SceneView from "@arcgis/core/views/SceneView";
import Map from "@arcgis/core/Map";
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils";

const view = new SceneView({
    container: "viewDiv",
    map: new Map({
        basemap: "topo-vector",
        ground: "world-elevation"
    })
});

// Store view on the window so we can access for debugging purposes
(window as any).view = view;

view.when(async () => {
    await reactiveUtils.whenOnce(() => !view.updating);
    console.log("view loaded and updated")
});