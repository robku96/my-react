import { extendObservable, action } from 'mobx';
import axios from 'axios';

class bookStore {
  constructor() {
    extendObservable(this, {
      books: [],

      fetchBookList: action( () => {
        axios.get('http://localhost:8080/books')
        .then((response) => {
          this.books = response.data;
        }, (err) => {
          console.log(err);
        });
      }),

      fetchBook: action( (id) => {
        axios.get('http://localhost:8080/books/'+id)
        .then((response) => {
          this.books = response.data;
        }, (err) => {
          console.log(err);
        });
      }),

      editBook: action( (id, title, authorId, publication_year, publishing_house, pages, price) => {
        axios.post('http://localhost:8080/books/'+id,{
          title: title,
          authorId: authorId,
          publication_year: publication_year,
          publishing_house: publishing_house,
          pages: pages,
          price: price
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      }) 
    });
  }
}

export default new bookStore();