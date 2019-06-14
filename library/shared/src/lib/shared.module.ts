import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedComponent } from './shared.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab.component';
import { ButtonComponent } from './button/button.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DragDropComponent } from './drag-drop/drag-drop.component';

const sharedComponents = [SharedComponent, ButtonComponent, TabComponent, TabsComponent, FormsComponent, DragDropComponent];

@NgModule({
  imports: [CommonModule, FormsModule, DragDropModule],
  declarations: [...sharedComponents],
  exports: [...sharedComponents]
})
export class SharedModule {}
