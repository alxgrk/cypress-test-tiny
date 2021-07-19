import { Component } from '@angular/core';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  private content = ["Hello World"];
  private report = {
    info: {
      title: 'Foo'
    },
    header: {
      text: 'Header'
    },
    footer: {
      text: 'Footer'
    },
    content: this.content,
    styles: {
    },
    images: {}
  };

  onClick() {
    pdfMake.createPdf(this.report).open()
  }
}
