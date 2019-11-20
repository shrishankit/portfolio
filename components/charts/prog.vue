<template>
  <!--  -->
  <div style="">
    <div class="" style="" id="progchart"></div>
  </div>
</template>
<script>
import {
  am4charts,
  am4core,
  am4themes_animated,
  am4themes_dark
} from "../../plugins/amchart";

export default {
  mounted() {
    this.loadChart();
  },
  methods: {
    loadChart() {
      am4core.useTheme(am4themes_animated);
      am4core.useTheme(am4themes_dark);

      var iconPath =
        "M11.542 29.34l1.088-1.088h7.96l-5.079-9.177-3.756.764c-.985.2-1.771.942-2.028 1.914L5.268 36.305a2.64 2.64 0 0 0 2.554 3.315h3.721l-.001-10.28zm25.768 6.965l-4.459-14.552a2.644 2.644 0 0 0-2.062-1.921l-3.742-.708-5.058 9.127h8.56l1.088 1.088v10.279h3.121a2.64 2.64 0 0 0 2.552-3.313z M13.719 39.62h-.302v.004l15.742-.001v-.003h.301v-9.19H13.719zm-4.347.988h23.833v1.968H9.372zm3.432-27.954c.042.086.097.218.155.356.231.556.419.971.68 1.215 1.209 3.945 4.329 6.676 7.644 6.666 3.301-.011 6.383-2.766 7.547-6.722.256-.246.438-.659.663-1.211.057-.141.109-.274.15-.36.447-.924.293-1.925-.332-2.412v-.091c-.015-4.897-.654-10.12-8.1-10.095-7.501.024-8.111 5.027-8.095 10.148l.001.091c-.62.494-.766 1.496-.313 2.415zm1.047-1.577l.022-.009a.547.547 0 0 0 .284-.24l1.299.201a.279.279 0 0 0 .296-.164l.821-1.896c.929.223 4.447 1.018 7.204 1.008.854-.002 1.563-.085 2.112-.246l.521 1.257a.274.274 0 0 0 .329.161l1.513-.425a.56.56 0 0 0 .313.295l.021.007c.225.112.299.603.062 1.091-.057.118-.116.267-.182.425-.092.229-.281.695-.396.82a.552.552 0 0 0-.258.332c-.989 3.578-3.68 6.083-6.539 6.093-2.874.009-5.602-2.478-6.633-6.048a.551.551 0 0 0-.261-.329c-.116-.125-.312-.594-.407-.824a6.827 6.827 0 0 0-.184-.419c-.233-.486-.163-.977.063-1.09z";

      var chart = am4core.create("progchart", am4charts.SlicedChart);
      chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect

      chart.data = [
        {
          name: "The first",
          value: 354
        },
        {
          name: "The second",
          value: 245
        },
        {
          name: "The third",
          value: 187
        },
        {
          name: "The fourth",
          value: 123
        },
        {
          name: "The fifth",
          value: 87
        },
        {
          name: "The sixth",
          value: 45
        },
        {
          name: "The seventh",
          value: 23
        }
      ];

      var series = chart.series.push(new am4charts.PictorialStackedSeries());
      series.dataFields.value = "value";
      series.dataFields.category = "name";
      //   series.dataFields.template.stroke = am4core.color("#ff0000");
      series.alignLabels = true;

      //   series.dataFields.value = "value: [bold {color}]{name}[/]"

      series.maskSprite.path = iconPath;
      series.ticks.template.locationX = 1;
      series.ticks.template.locationY = 0.5;

      series.labelsContainer.width = 200;

      //   chart.legend = new am4charts.Legend();
      //   chart.legend.position = "left";
      //   chart.legend.valign = "bottom";

      //   chart.legend.labels.template.text = "Series: [bold {color}]{name}[/]";

      //   var container = am4core.create("container", am4core.Container);
      //   container.width = am4core.percent(100);
      //   container.height = am4core.percent(100);
      //   container.layout = "vertical";

      //   // Add labels

      //   createLabel("Hello [#00ff00]world[/]!");

      //   function createLabel(text) {
      //     var label = container.createChild(am4core.Label);
      //     label.text = text;
      //     label.align = "center";
      //     label.marginTop = 5;
      //   }
    }
  }
};
</script>
<style scoped>
#progchart {
  width: 42rem;
  left: -10%;
  height: calc(254px + (90 - 14) * ((100vw - 303px) / (1600 - 300)));
}
</style>
