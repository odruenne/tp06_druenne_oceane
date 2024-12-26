import { Component, OnInit } from '@angular/core';
import { KibblesService } from '../kibbles.service';
import { Kibbles } from '../../store/models/kibbles';
import { CommonModule } from '@angular/common';
import { Store } from '@ngxs/store';
import { AddItemToShoppingCart } from '../../store/actions/shoppingCart-action';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kibbles-list.component.html',
  styleUrls: ['./kibbles-list.component.css'],
})
export class KibblesList implements OnInit {

  kibbles: Kibbles[];

  constructor(private kibblesService : KibblesService, private store: Store) { }

  ngOnInit() {
    this.kibblesService.kibblesObservable.subscribe(res => this.kibbles = res);
    this.kibblesService.getKibbles('', Infinity);
  }

  addItemToCart(kibble: Kibbles) {
    this.store.dispatch(new AddItemToShoppingCart(kibble));
  }
}