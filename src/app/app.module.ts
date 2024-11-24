import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppComponent} from "./app.component";
import {StudioModule} from "./studio/studio.module";
import {ReviewModule} from "./review/review.module";
import {AnimeModule} from "./anime/anime.module";
import {UserModule} from "./user/user.module";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";


@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    StudioModule,
    ReviewModule,
    AnimeModule,
    UserModule,
    BrowserModule,
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule {
}
