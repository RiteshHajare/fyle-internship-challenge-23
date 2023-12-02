import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.scss']
})
export class RepoComponent implements OnInit {
  @Input() item: any = {};
  @Input() currentPage: number = 1;
  constructor() { }
  size: number = 0;

  ngOnInit(): void {
    if (window.innerWidth < 527 && (this.item.tags && this.item.tags.length > 2)) this.item.tags.splice(2);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currentPage']) {
      if (this.item.topics.length > 4) {
        this.size = this.item.topics.length - 4;
        this.item.topics.splice(4);
        if (this.item.topics[3].length > 7) this.item.topics[3].slice(0, 5);
        this.item.topics[3] += ` +${this.size > 0 && this.size}`;
      }
      if (window.innerWidth < 527) {
        this.item.topics.splice(2);
      }
    }
  }
}
