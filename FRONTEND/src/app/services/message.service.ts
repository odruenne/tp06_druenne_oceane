import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private data = new Subject<string>();
  data$ = this.data.asObservable();

  setData(data: string) {
    this.data.next(data);
  }
}