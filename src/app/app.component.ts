import { Component, ViewEncapsulation  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'DragDrop';
  htmlAppendChild = '';
  argumentTagHtml = "<span class='arguments'></span>";
  constructor() { };

  add(x, y) { }
  subtract(x, y) { }
  foo(x, y, z) { }
  doSomethingComplicated(x) { }

  onDragStart(event, data) {
    event.dataTransfer.setData('data', event.target.id);
  }
  onDrop(event, data) {
    let dataTransfer = event.dataTransfer.getData('data');
    let htmlToAdd = "<div class='centerAlign'><span class='inline'>" + dataTransfer+"</span>";

    if (dataTransfer === "doSomethingComplicated") {
      htmlToAdd = htmlToAdd + this.argumentTagHtml;
    } else if (dataTransfer === "add" || dataTransfer === "subtract") {
      htmlToAdd = htmlToAdd + this.argumentTagHtml + this.argumentTagHtml;
    } else if (dataTransfer === "foo") {
      htmlToAdd = htmlToAdd + this.argumentTagHtml
        + this.argumentTagHtml + this.argumentTagHtml;
    }
    this.htmlAppendChild = htmlToAdd + "</div>";
    event.preventDefault();
  }
  allowDrop(event) {
    event.preventDefault();
  }
}
