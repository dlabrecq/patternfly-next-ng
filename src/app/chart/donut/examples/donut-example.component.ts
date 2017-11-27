import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

import { cloneDeep } from 'lodash';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'donut-example',
  templateUrl: './donut-example.component.html'
})
export class DonutExampleComponent implements OnInit {
  public config: any = {
    chartId: 'exampleDonut',
    colors: {
      Cats: '#0088ce',     // blue
      Hamsters: '#3f9c35', // green
      Fish: '#ec7a08',     // orange
      Dogs: '#cc0000'      // red
    },
    onClickFn: (data: any, element: any) => {
      alert('You clicked on donut arc: ' + data.id);
    },
    donut: {
      title: 'Animals'
    },
    legend: {
      show: true
    }
  };

  public config2: any;

  public data: any = [
    ['Cats', 2],
    ['Hamsters', 1],
    ['Fish', 3],
    ['Dogs', 2]
  ];

  constructor() {
  }

  ngOnInit(): void {
    this.config2 = cloneDeep(this.config);
    this.config2.chartId = 'exampleDonut2';
    this.config2.legend = {
      show: true,
      position: 'right'
    };
    this.config2.centerLabelFn = () => {
      return 'Pets';
    };
    this.config2.chartHeight = 120;
  }
}
