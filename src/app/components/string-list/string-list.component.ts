import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-string-list',
  templateUrl: './string-list.component.html',
  styleUrls: ['./string-list.component.scss']
})
export class StringListComponent implements OnInit {

  @Input() list: string[] = [];
  @Output() selectItemRequested = new EventEmitter<string>();
  @Input() selectedItem = '';

  constructor() { }

  ngOnInit(): void {
  }

  onItemClicked(item: string) {
    this.selectItemRequested.emit(item); // rasie event
  }
}
