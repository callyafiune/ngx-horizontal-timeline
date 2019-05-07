import { Component, OnInit } from '@angular/core';
import { TimelineItem } from 'projects/ngx-horizontal-timeline/src/public-api';

@Component({
  selector: 'ho-tl-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  items: TimelineItem[] = [];

  ngOnInit(): void {
    this.items.push({
      label: 'Outono',
      icon: 'glyphicon glyphicon-adjust',
      active: true,
      title: '20 de março',
      color: '16a085',
      command() {
        console.log('Outono!');
      }
    });

    this.items.push({
      label: 'Inverno',
      icon: 'fa fa-plus',
      title: '21 de junho',
      color: '2980b9',
      command() {
        console.log('Inverno!');
      }
    });

    this.items.push({
      label: 'Primavera',
      icon: 'fa fa-plus',
      title: '22 de setembro',
      color: '2980b9',
      command() {
        console.log('Primavera!');
      }
    });

    this.items.push({
      label: 'Verão',
      icon: 'fa fa-plus',
      title: '21 de dezembro',
      color: '2980b9',
      command() {
        console.log('Verão!');
      }
    });
  }
}
