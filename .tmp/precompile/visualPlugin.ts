import { Visual } from "../../src/visual";
import powerbiVisualsApi from "powerbi-visuals-api"
import IVisualPlugin = powerbiVisualsApi.visuals.plugins.IVisualPlugin
import VisualConstructorOptions = powerbiVisualsApi.extensibility.visual.VisualConstructorOptions
var powerbiKey: any = "powerbi";
var powerbi: any = window[powerbiKey];

var circleCardD97BF9113200477585B95936E2A78CAD_DEBUG: IVisualPlugin = {
    name: 'circleCardD97BF9113200477585B95936E2A78CAD_DEBUG',
    displayName: 'circleCard',
    class: 'Visual',
    apiVersion: '5.4.0',
    create: (options?: VisualConstructorOptions) => {
        if (Visual) {
            return new Visual(options);
        }

        throw 'Visual instance not found';
    },
    custom: true
};

if (typeof powerbi !== "undefined") {
    powerbi.visuals = powerbi.visuals || {};
    powerbi.visuals.plugins = powerbi.visuals.plugins || {};
    powerbi.visuals.plugins["circleCardD97BF9113200477585B95936E2A78CAD_DEBUG"] = circleCardD97BF9113200477585B95936E2A78CAD_DEBUG;
}

export default circleCardD97BF9113200477585B95936E2A78CAD_DEBUG;