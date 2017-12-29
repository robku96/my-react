import { extendObservable, action } from 'mobx';
import axios from 'axios';

class authorStore {
  constructor() {
    extendObservable(this, {
      authors: [],

      fetchAuthorList: action( () => {
        axios.get('http://localhost:8080/authors')
        .then((response) => {
          this.authors = response.data;
        }, (err) => {
          console.log(err);
        });
      }),

      fetchAuthor: action( (id) => {
        axios.get('http://localhost:8080/authors/'+id)
        .then((response) => {
          this.authors = response.data;
        }, (err) => {
          console.log(err);
        });
      }),

    });
  }
}

export default new authorStore();