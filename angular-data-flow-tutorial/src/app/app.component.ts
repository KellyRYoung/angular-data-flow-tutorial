import { Component, OnInit } from '@angular/core'

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
 title = 'angular-data-flow-tutorial';
 EXAMPLE_HTML_BLOCKS = document.getElementsByClassName('example-html');
 EXAMPLE_CSS_BLOCKS = document.getElementsByClassName('example-css');
 EXAMPLE_TS_BLOCKS = document.getElementsByClassName('example-ts');
 EXAMPLE_NG_BLOCKS = document.getElementsByClassName('example-ng');
 EXAMPLE_OUTPUT_BLOCKS = document.getElementsByClassName('example-output');
 EXAMPLE_PARENT_BLOCKS = document.getElementsByClassName('parent');
 EXAMPLE_CHILD_BLOCKS = document.getElementsByClassName('child');

 // addHtmlLogo = () => {
 //  // tslint:disable-next-line: prefer-for-of
 //  for (let i = 0; i < this.EXAMPLE_HTML_BLOCKS.length; i++) {
 //   this.EXAMPLE_HTML_BLOCKS[i].insertAdjacentHTML(
 //    'beforebegin',
 //    '<img class="html-logo" src="https://cdn.freebiesupply.com/logos/large/2x/html-5-logo-png-transparent.png">'
 //   )
 //  }
 // }

 // addCssLogo = () => {
 //  // tslint:disable-next-line: prefer-for-of
 //  for (let i = 0; i < this.EXAMPLE_CSS_BLOCKS.length; i++) {
 //   this.EXAMPLE_CSS_BLOCKS[i].insertAdjacentHTML(
 //    'beforebegin',
 //    '<img class="css-logo" src="https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png">'
 //   )
 //  }
 // }

 // addTsLogo = () => {
 //  for (let i = 0; i < this.EXAMPLE_TS_BLOCKS.length; i++) {
 //   this.EXAMPLE_TS_BLOCKS[i].insertAdjacentHTML(
 //    'beforebegin',
 //    '<img class="ts-logo" src="https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png">'
 //   )
 //  }
 // }

 // addNgLogo = () => {
 //  for (let i = 0; i < this.EXAMPLE_NG_BLOCKS.length; i++) {
 //   this.EXAMPLE_NG_BLOCKS[i].insertAdjacentHTML(
 //    'beforebegin',
 //    '<img class="ng-logo" src="https://angular.io/assets/images/logos/angular/angular.png">'
 //   )
 //  }
 // }

 addHtmlLabel = () => {
  // tslint:disable-next-line: prefer-for-of
  for (let i = 0; i < this.EXAMPLE_HTML_BLOCKS.length; i++) {
   this.EXAMPLE_HTML_BLOCKS[i].insertAdjacentHTML(
    'beforebegin',
    '<div class="html-label">HTML file</div>'
   );
  }
 }

 addCssLabel = () => {
  // tslint:disable-next-line: prefer-for-of
  for (let i = 0; i < this.EXAMPLE_CSS_BLOCKS.length; i++) {
   this.EXAMPLE_CSS_BLOCKS[i].insertAdjacentHTML(
    'beforebegin',
    '<div class="css-label">CSS file</div>'
   );
  }
 }

 addTsLabel = () => {
  for (let i = 0; i < this.EXAMPLE_TS_BLOCKS.length; i++) {
   this.EXAMPLE_TS_BLOCKS[i].insertAdjacentHTML(
    'beforebegin',
    '<div class="ts-label">TypeScript file</div>'
   );
  }
 }

 addOutputLabel = () => {
  for (let i = 0; i < this.EXAMPLE_OUTPUT_BLOCKS.length; i++) {
   this.EXAMPLE_OUTPUT_BLOCKS[i].insertAdjacentHTML(
    'beforebegin',
    '<div class="output-label">Output</div>'
   );
  }
 }

 addParentLabel = () => {
  for (let i = 0; i < this.EXAMPLE_PARENT_BLOCKS.length; i++) {
   this.EXAMPLE_PARENT_BLOCKS[i].insertAdjacentHTML(
    'beforebegin',
    '<div class="parent-label">Parent Component</div>'
   );
  }
 }

 addChildLabel = () => {
  for (let i = 0; i < this.EXAMPLE_CHILD_BLOCKS.length; i++) {
   this.EXAMPLE_CHILD_BLOCKS[i].insertAdjacentHTML(
    'beforebegin',
    '<div class="child-label">Child Component</div>'
   );
  }
 }


 ngOnInit() {
  this.addHtmlLabel();
  this.addCssLabel();
  this.addTsLabel();
  this.addOutputLabel()
  this.addParentLabel();
  this.addChildLabel();
 }
}
