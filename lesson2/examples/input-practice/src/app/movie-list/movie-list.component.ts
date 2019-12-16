
import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];
   alertMessage: string = '';

   constructor() { }

   ngOnInit() {
   }

   addMovie(newTitle: string) {
      if(newTitle !== '') {
         if(!this.movies.includes(newTitle)){
            this.movies.push(newTitle);
         } else {
            this.alertMessage = 'Movie already in list.';
            return this.alertMessage;
         }
      } else {
         this.alertMessage = 'No title entered.';
         return this.alertMessage;
      }
   }
}