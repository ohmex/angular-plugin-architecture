import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

/**
 * @title Drag&Drop connected sorting
 */
@Component({
  selector: 'core-drag-drop',
  templateUrl: 'drag-drop.component.html',
  styleUrls: ['drag-drop.component.css'],
})
export class DragDropComponent {
  widgets = [
    'Recommeneded Products',
    'Listing Products',
    'Search',
    'Recently Viewed'
  ];

  workingTheme = [
    'Wishlist',
    'Cart Products',
    'Locations',
    'Offers',
    'About Us'
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    console.log(this.widgets);
    console.log(this.workingTheme);
  }
}
