import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { routes } from './feedback.routes';
import { RatingComponent } from './rating/rating.component';


@NgModule({
  imports: [
    RouterModule.forChild(routes),
    RatingComponent // 👈 standalone
  ]
})
export class FeedbackModule {}
