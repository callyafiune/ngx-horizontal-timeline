# Installation

```javascript
$ npm i ngx-horizontal-timeline
```
## Import

```javascript
import { NgxHorizontalTimelineModule } from 'ngx-horizontal-timeline';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgxHorizontalTimelineModule
    ...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
## Component

```javascript
 items: TimelineItem[];
 
ngOnInit() {
  this.items.push({
    label: 'Test 1',
    icon: 'glyphicon glyphicon-adjust',
    active: true,
    title: 'Example 1',
    color: '16a085',
    command() {
      console.log('Action 1');
    }
  });
  
  this.items.push({
    label: 'Test 2',
    icon: 'fa fa-plus',
    title: 'Example 2',
    color: '2980b9',
    command() {
      console.log('Action 2');
    }
  });
}
```
## HTML

```html
<ngx-htl-horizontal-timeline [(items)]="items"></ngx-htl-horizontal-timeline>
```
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
