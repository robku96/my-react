import { extendObservable, action } from 'mobx';
import axios from 'axios';

class authorStore {
  constructor() {
    extendObservable(this, {
      authors: [],
      isPopupShown: false,

      fetchAuthorList: action(() => {
        let currentAuthors;
        let currentBook;
        axios.get('http://localhost:8080/authors')
          .then((response) => {
            currentAuthors = response.data;
            currentAuthors.map((item) => {
              if (item.bookId) {
                currentBook = item.bookId;
                if (Array.isArray(currentBook)) {
                  item.bookId = [];
                  currentBook.forEach((book) => {
                    axios.get('http://localhost:8080/books/' + book)
                      .then((response) => {
                        item.bookId.push(response.data.title);
                      }, (err) => {
                        console.log(err);
                      });
                  })
                }
                else {
                  item.bookId = "";
                  axios.get('http://localhost:8080/books/' + currentBook)
                    .then((response) => {
                      item.bookId = response.data.title;
                    }, (err) => {
                      console.log(err);
                    });
                }
              }
            });
          }, (err) => {
            console.log(err);
          });
        setTimeout(() => {
          this.authors = currentAuthors;
          console.log(this.authors);
        }, 300)
      }),

      fetchAuthor: action((id) => {
        axios.get('http://localhost:8080/books/' + id)
          .then((response) => {
            this.authors = response.data;
          }, (err) => {
            console.log(err);
          });
      }),

      editAuthor: action((id, name, surname, date_of_birth, adress, phone, bookId) => {
        axios.post('http://localhost:8080/authors/' + id, {
          name: name,
          surname: surname,
          date_of_birth: date_of_birth,
          adress: adress,
          phone: phone,
          bookId: bookId
        })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }),

      deleteAuthor: action((id) => {
        axios.delete('http://localhost:8080/authors/' + id)
          .then((response) => {
            console.log(response);
          }), (err) => {
            console.log(err);
          }
      })

    });
  }
}

export default new authorStore();