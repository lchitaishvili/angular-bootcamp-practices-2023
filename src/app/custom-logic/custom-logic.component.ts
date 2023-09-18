import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-custom-logic',
  templateUrl: './custom-logic.component.html',
  styleUrls: ['./custom-logic.component.scss']
})
export class CustomLogicComponent implements OnChanges {
  @Input() selectedItem: string = '';
  @Input() items: string[] = [];

  @Output() selectItemEvent = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);    
  }

  public selectItem(item: string): void {    
    this.selectItemEvent.emit(item)
  }
}

