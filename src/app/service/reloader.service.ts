import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FeedComponent } from '../pages/feed/feed.component';

@Injectable({
  providedIn: 'root',
})
export class ReloaderService {
  private feedMessage = new BehaviorSubject('normal');
  currentFeedMessage = this.feedMessage.asObservable();

  constructor() {}

  changeFeed(message: string) {
    this.feedMessage.next(message);
  }
}
