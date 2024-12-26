import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Kibbles } from '../store/models/kibbles';
import { environment } from '../environments/environment';

// providedIn: root pour utiliser la même instance partout
@Injectable({
  providedIn: 'root',
})
export class KibblesService implements OnDestroy {
  kibblesSubject: BehaviorSubject<Kibbles[]> = new BehaviorSubject<Kibbles[]>([]); 
  kibblesObservable : Observable<Kibbles[]> = this.kibblesSubject.asObservable();
  
  constructor(private http:HttpClient) { }

  public getKibbles(tasteFilter: string, priceFilter: number): void {
    this.http.get<Kibbles[]>(environment.backendClient)
    .pipe(
      map((kibbles: Kibbles[]) => {
        return kibbles
              .filter((k: Kibbles) => k.taste.toLowerCase().includes(tasteFilter.toLowerCase()))
              .filter((k: Kibbles) => priceFilter == null || k.pricePerKilo <= priceFilter)
      })
    )
    .subscribe((res: Kibbles[]) => this.kibblesSubject.next(res));
  }

  ngOnDestroy(): void {
    this.kibblesSubject.unsubscribe();
  }
}