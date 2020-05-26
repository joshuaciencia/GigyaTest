import { Component, OnInit } from '@angular/core';

import { ScriptLoaderService } from './script-loader.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'myapp';

  constructor(private dynamicScriptLoader: ScriptLoaderService) {}

  ngOnInit() {
    // Just call your load scripts function with scripts you want to load
    this.loadScripts();
  }

    private loadScripts() {
    // You can load multiple scripts by just providing the key as argument into load method of the service
    this.dynamicScriptLoader.load('gigyaLoader').then(data => {
      // Script Loaded Successfully
    }).catch(error => console.log(error));
  }
}
