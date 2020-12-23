import { NgModule } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';

const atndModule = [
  NzLayoutModule,
  NzMenuModule,
  NzIconModule
]

@NgModule({
  declarations: [],
  imports: [
    atndModule
  ],
  exports: [
    atndModule
  ]
})
export class AntdModule { }
