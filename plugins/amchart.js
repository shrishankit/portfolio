import Vue from 'vue'

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_dark from "@amcharts/amcharts4/themes/dark.js";

Vue.use(am4core)
Vue.use(am4charts)
am4core.useTheme(am4themes_animated);

export {am4charts,am4core,am4themes_animated ,am4themes_dark}