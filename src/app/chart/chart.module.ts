import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ChartDefaults } from './chart-defaults';
import { DonutComponent } from './donut/donut.component';
import { DonutUtilizationComponent } from './donut/donut.utilization.component';
import { DonutConfig } from './donut/donut-config';
import { SparklineComponent } from './sparkline/sparkline.component';
import { SparklineConfig } from './sparkline/sparkline-config';
import { SparklineData } from './sparkline/sparkline-data';
import { WindowReference } from '../utilities/window.reference';

export {
  DonutConfig,
  SparklineConfig,
  SparklineData
};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [SparklineComponent, DonutComponent, DonutUtilizationComponent],
  exports: [SparklineComponent, DonutComponent, DonutUtilizationComponent],
  providers: [ChartDefaults, WindowReference]
})
export class ChartModule {}
