import { extendObservable, action } from 'mobx';
import axios from 'axios';

class bookStore {
  constructor() {
    extendObservable(this, {
      books: [],

      fetchBookList: action( () => {
        axios.get('http://localhost:8080/books')
        .then((response) => {
          var currentBooks = response.data;
          currentBooks.map((item) => {
            if(item.authorId){
              var currentAuthor = item.authorId;
              if(Array.isArray(currentAuthor)) {
                item.authorId = [];
                currentAuthor.forEach( (author) => {
                  axios.get('http://localhost:8080/authors/'+author)
                  .then((response) => {
                    item.authorId.push(response.data.name+" "+response.data.surname);
                  }, (err) => {
                    console.log(err);
                  });
                })
              }
              else {
                item.authorId = "";
                axios.get('http://localhost:8080/authors/'+currentAuthor)
                .then((response) => {
                  item.authorId = response.data.name+" "+response.data.surname;
                  console.log(item.authorId);
                }, (err) => {
                  console.log(err);
                });
              }
            }
          });
          setTimeout(() => {
            this.books = currentBooks;
          },100)
          
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
      }),
      
      deleteBook: action((id) =>{
        axios.delete('http://localhost:8080/books/'+id)
        .then((response) => {
          console.log(response);
        }), (err) => {
          console.log(err);
        }
      })

    });
  }
}

export default new bookStore();