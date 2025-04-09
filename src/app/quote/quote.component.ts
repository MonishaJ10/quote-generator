import { Component } from '@angular/core';

@Component({
  selector: 'app-quote',
  imports: [],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.css'
})

export class QuoteComponent {
  quotes = [
    { text: "Believe in yourself!", author: "Unknown" },
    { text: "Push yourself, because no one else will.", author: "Anonymous" },
    { text: "Success doesn’t just find you. You have to go out and get it.", author: "Unknown" },
    { text: "Great things never come from comfort zones.", author: "Anonymous" }
  ];

  currentQuote = this.quotes[0];

  generateQuote() {
    const index = Math.floor(Math.random() * this.quotes.length);
    this.currentQuote = this.quotes[index];
  }
}
