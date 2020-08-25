import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-qoutes',
  templateUrl: './qoutes.component.html',
 
})
export class QoutesComponent implements OnInit{  
  title: string;
  quotes: Quote[]= [
    new Quote ( 1, 'Becky','Love','Accept the challenges so that you can feel the exhilaration of victory','George S Patton', new Date(2020, 5, 5), 0, 0),
    new Quote ( 2, 'Keya', 'Gain', 'The secret of getting ahead is getting started','Mark Twain', new Date(2020, 4, 6), 0,0),
    new Quote ( 3, 'Liam', 'Happiness', 'You gain strength courage and confidence by every experience in which you really stop to look fear in the face. You are able to say to yourself I lived through this horror. I can take the next thing that comes along','Eleanor Roosevelt', new Date(2020, 3, 12), 0, 0),
    new Quote ( 4, 'Mercy', 'Strength','In the long run we shape our lives and we shape ourselves The process never ends until we die.   And the choices we make are ultimately our own responsibility','Eleanor Roosevelt', new Date(2020, 2, 14), 0, 0),
    new Quote ( 5, 'Maratah','Peace','A woman is like a tea bag  you cant tell how strong she is until you put her in hot water','Eleanor Roosevelt', new Date (2020, 5, 5),0, 0),
  ];
  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }  
  addedQuote(quote){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  quoteDelete(isRead, index){
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }
 
  displayInfo(index){
    this.quotes[index].showInfo = !this.quotes[index].showInfo;
  }
   constructor() {}

    ngOnInit() {
     
    }
}  

