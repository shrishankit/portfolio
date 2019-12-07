import Vue from 'vue'

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as timeline from "@amcharts/amcharts4/plugins/timeline.js";
import * as bullets from "@amcharts/amcharts4/plugins/bullets.js";
{/* <script src="https://www.amcharts.com/lib/4/plugins/timeline.js"></script>
<script src="https://www.amcharts.com/lib/4/plugins/bullets.js"></script> */}
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_dark from "@amcharts/amcharts4/themes/dark.js";

Vue.use(am4core)
Vue.use(am4charts)
am4core.useTheme(am4themes_animated);

export {am4charts,am4core,am4themes_animated ,am4themes_dark,timeline,bullets}