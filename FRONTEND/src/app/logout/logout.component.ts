import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit, OnDestroy {
  message: string;
  subscription: Subscription;
  
  constructor(private authService: AuthService, private messageService : MessageService) {
    this.subscription = this.messageService.data$.subscribe(data => {
      this.message = data;
    });
  }

  ngOnInit(): void {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}