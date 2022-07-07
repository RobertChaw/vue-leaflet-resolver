const matches = [
    "LCircle",
    "LCircleMarker",
    "LControl",
    "LControlAttribution",
    "LControlLayers",
    "LControlScale",
    "LControlZoom",
    "LFeatureGroup",
    "LGeoJson",
    "LGridLayer",
    "LIcon",
    "LImageOverlay",
    "LLayerGroup",
    "LMap",
    "LMarker",
    "LPolygon",
    "LPolyline",
    "LPopup",
    "LRectangle",
    "LTileLayer",
    "LTooltip",
    "LWmsTileLayer",
]

export default (componentName: string) => {
    if (matches.indexOf(componentName) >= 0) {
        if (componentName === "LMap") {
            return {
                name: componentName,
                from: "@vue-leaflet/vue-leaflet",
                sideEffects: "leaflet/dist/leaflet.css"
            }
        }
        return {
            name: componentName,
            from: "@vue-leaflet/vue-leaflet"
        }
    }
}
