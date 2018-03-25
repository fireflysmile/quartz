import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';
declare const d3: any;

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input()
  data: any;
  options = {
    chart: {
      type: 'lineChart',
      height: 400,
      useInteractiveGuideline: true,
      transitionDuration: 350,
      legendPosition: 'bottom',
      legend: {
        rightAlign: false,
        padding: 50
      },
      margin : {
        top: 10,
        right: 20,
        bottom: 50,
        left: 55
      },
      x: function(d) { return d && new Date(d.label); },
      y: function(d) { return d && d.value; },
      xAxis: {
        axisLabel: 'Time in Months',
        tickFormat: function(d) {
          return d3.time.format('%b %y')(new Date(d));
        },
        tickValues: function(values) {
          let a =  _.map(values[0].values, function(v: any) {
            let tmp = new Date(v.label);
            return new Date(tmp.getFullYear(), tmp.getMonth(), 1);
          });
          return a;
        },
        showMaxMin: false
        // orient: 'top'
      },
      yAxis: {
        axisLabel: 'Chanel Value',
        tickFormat: function(d) {
          return d3.format('d')(d);
        },
        axisLabelDistance: -10,
        showMaxMin: false,
      }
    }
  };
  constructor() { }

  ngOnInit() {
    
  }

}
