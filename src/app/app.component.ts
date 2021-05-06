import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
declare const mytest: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit , OnInit  {

  constructor() {
  }

  ngOnInit(): void {

    // @ts-ignore
    $('body').tooltip({selector: '[data-toggle=tooltip]'});
  }

  ngAfterViewInit() {
    this.loadScript('assets/js/main.js');
    this.loadScript('assets/js/libs-init/libs-init.js');
  }

  public loadScript(url) {
    const node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('body')[0].appendChild(node);


  }

}

