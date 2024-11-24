import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ListAnimeComponent} from "./anime/list-anime/list-anime.component";
import {ListReviewComponent} from "./review/list-review/list-review.component";
import {ListUserComponent} from "./user/list-user/list-user.component";
import {ListStudioComponent} from "./studio/list-studio/list-studio.component";

const routes: Routes = [
  {path: 'anime', component: ListAnimeComponent},
  {path: 'reviews', component: ListReviewComponent},
  {path: 'users', component: ListUserComponent},
  {path: 'studios', component: ListStudioComponent}
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
