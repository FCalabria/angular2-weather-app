import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchBlockComponent } from './search-block/search-block.component';
import { ResultsBlockComponent } from './results-block/results-block.component';

@NgModule({
    declarations: [
        AppComponent,
        SearchBlockComponent,
        ResultsBlockComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        FormsModule
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
