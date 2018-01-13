import { extendObservable, action } from 'mobx';
import axios from 'axios';

class bookStore {
  constructor() {
    extendObservable(this, {
      books: [],
      book: {
        id: '',
        title: '',
        authors: null,
        authorId: [],
        publicationYear: '',
        publishingHouse: '',
        pages: '',
        price: '',
      },
      bookPopup: {
        title: '',
        idBook: null,
        isPopupShown: false,
        action: null
      },
      id: 8,

      fetchBookList: action(() => {
        let currentBooks;
        let currentAuthor;
        axios.get('http://localhost:8080/books')
          .then((response) => {
            currentBooks = response.data;
            currentBooks.map((item) => {
              if (item.authorId) {
                currentAuthor = item.authorId;
                if (Array.isArray(currentAuthor)) {
                  item.authorId = [];
                  currentAuthor.forEach((author) => {
                    axios.get('http://localhost:8080/authors/' + author)
                      .then((response) => {
                        item.authorId.push(response.data.name + " " + response.data.surname);
                      }, (err) => {
                        console.log(err);
                      })
                  })
                }
                else {
                  item.authorId = "";
                  axios.get('http://localhost:8080/authors/' + currentAuthor)
                    .then((response) => {
                      item.authorId = response.data.name + " " + response.data.surname;
                    }, (err) => {
                      console.log(err);
                    })
                }
              }
            });
          }, (err) => {
            console.log(err);
          });
        setTimeout(() => {
          this.books = currentBooks;
        }, 300)
      }),

      fetchBook: action((id) => {
        let currentBook;
        let currentAuthor;
        let newAuthors;
        axios.get('http://localhost:8080/books/' + id)
          .then((response) => {
            currentBook = response.data;
            currentAuthor = response.data.authorId;
            newAuthors = [];
            if (Array.isArray(currentAuthor)) {
              currentAuthor.forEach((author) => {
                axios.get('http://localhost:8080/authors/' + author)
                  .then((response) => {
                    newAuthors.push({
                      label: response.data.name + " " + response.data.surname,
                      value: response.data.id
                    });
                  }, (err) => {
                    console.log(err);
                  });
              })
            }
            else {
              newAuthors = "";
              axios.get('http://localhost:8080/authors/' + currentAuthor)
                .then((response) => {
                  label: response.data.name + " " + response.data.surname;
                  value: response.data.id;
                }, (err) => {
                  console.log(err);
                });
            }
          }, (err) => {
            console.log(err);
          })
        setTimeout(() => {
          var ids = [];
          ids = currentAuthor;
          console.log("przed", ids);
          currentBook.authorId = newAuthors;
          this.book = {
            id: currentBook.id,
            title: currentBook.title,
            authors: ids,
            authorId: currentBook.authorId,
            publicationYear: currentBook.publication_year,
            publishingHouse: currentBook.publishing_house,
            pages: currentBook.pages,
            price: currentBook.price
          }
          console.log("edit book", this.book);
        }, 200)
      }),

      addBook: action((id, title, authorId, publication_year, publishing_house, pages, price) => {
        let newBook;
        let authors;
        let newAuthors;
        axios.post('http://localhost:8080/books', {
          id: id,
          title: title,
          authorId: authorId,
          publication_year: publication_year,
          publishing_house: publishing_house,
          pages: pages,
          price: price
        })
          .then((response) => {
            newBook = response.data;
            authors = response.data.authorId;
            newAuthors = response.data.authorId;
            if (Array.isArray(authors)) {
              newAuthors = [];
              authors.map((author) => {
                axios.get('http://localhost:8080/authors/' + author)
                  .then((response) => {
                    newAuthors.push(response.data.name + " " + response.data.surname);
                  }, (err) => {
                    console.log(err);
                  });
              });
            }
            else {
              newAuthors = "";
              axios.get('http://localhost:8080/authors/' + authors)
                .then((response) => {
                  newAuthors = response.data.name + " " + response.data.surname;
                }, (err) => {
                  console.log(err);
                });
            }
          }, (error) => {
            console.log(error);
          })
        setTimeout(() => {
          newBook.authorId = newAuthors;
          console.log("new book :", newBook);
          this.books.push(newBook);
        }, 300)
      }),

      editBook: action((id, title, authorId, publication_year, publishing_house, pages, price) => {
        axios.put('http://localhost:8080/books/' + id, {
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

      deleteBook: action((id) => {
        console.log("w mobx", id);
        axios.delete('http://localhost:8080/books/' + id)
          .then((response) => {
            const currentBook = response.data;
            this.books.slice(this.books.indexOf(currentBook), 1);
          }), (err) => {
            console.log(err);
          }
      })

    });
  }
}

export default new bookStore();