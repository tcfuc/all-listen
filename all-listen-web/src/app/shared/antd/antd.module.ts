import { NgModule } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSliderModule } from 'ng-zorro-antd/slider';

// 引入全部的图标
import * as AllIcons from '@ant-design/icons-angular/icons';
const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

const atndModule = [
  NzLayoutModule,
  NzMenuModule,
  NzIconModule.forRoot(icons),
  NzInputModule,
  NzGridModule,
  NzSliderModule
]

@NgModule({
  imports: [
    atndModule
  ],
  exports: [
    atndModule
  ]
})
export class AntdModule { }
