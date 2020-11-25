class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
        
    get title() {
      return this._title;
    }
  
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    
    toggleCheckOutStatus() {
      this._isCheckedOut = !this._isCheckedOut;
    }
  
    addRating(rating) {
      this._ratings.push(rating);
    }
  
    getAverageRating(rating) {
      const reducer = (accumulator,currentValue) => accumulator + currentValue ;
      return this._ratings.reduce(reducer)/this._ratings.length;
    }
       
  }
  


  class Book extends Media {
    constructor(title,author,pages) {
      super(title)
      this._author = author;
      this._pages = pages;
    }
    
    get author() {
      return this._author;
    }
    
    get pages() {
      return this._pages;
    }
    
  }
    


  class Movie extends Media {
    constructor(title,director,runTime,movieCast) {
      super(title);
      this._director = director;
      this._runTime = runTime;
      this._movieCast = [];
    }
    
    get director() {
      return this._director;
    }
    get runTime() {
      return this._runTime;
    }  
  }
  
  class CD extends Media {
    constructor(title,artist,songs) {
      super(title);
      this._artist = artist;
      this._songs = songs;
    }
    
    get artist() {
      return this._artist;
    }
    
    get songs() {
      return this._songs;
    }
  }

  const catalog = {
    _books: [],
    _movies: [],
    _CDs: [],

    get books() {
      return this._books;
    },

    get movies() {
      return this._movies;
    },

    get CDs() {
      return this._CDs;
    },

    addBookToCatalog (title,author,pages) {
      book = new Book(title,author,pages);
      this._books.push(book);
      return book;
    },

    removeBookFromCatalog (title,author) {
      const books = this.books;
      let bookToRemove = books.findIndex(function(book) {
         return book.title === title && book.author === author;
      });
      this._books.splice(bookToRemove);
   },

    getBookFromCatalog (title,author) {
      const books = this.books;
      let findBook = books.find(function(book) {
        return book.title === title && book.author === author;
      })
      return findBook;
    },

    addMovieToCatalog (title,director,runTime) {
      const movie = new Movie(title,director,runTime);
      this._movies.push(movie);
    },

    removeMovieFromCatalog (title,director) {
      const movies = this.movies;
      let movieToRemove = movies.findIndex(function(movie) {
         return movie.title === title && movie.director === director;
      });
      this._movies.splice(movieToRemove);
   },

    getMovieFromCatalog (title,director) {
      const movies = this.movies;
      let findMovie = movies.find(function(movie) {
        return movie.title === title && movie.director === director;
      })
      return findMovie;
    },

    addCDToCatalog (title,artist,songs) {
      const cd = new CD(title,artist,songs);
      this._CDs.push(cd);
    },

    removeCDFromCatalog (title,artist) {
      const cds = this.cds;
      let bookToRemove = cds.findIndex(function(cd) {
         return cd.title === title && cd.artist === artist;
      });
      this._books.splice(bookToRemove);
   },

    getCDFromCatalog (title,artist) {
      const cds = this.cds;
      let findCD = cds.find(function(cd) {
        return cd.title === title && cd.artist  === artist;
      })
      return findCD;
    },

    listCatalog () {
      books = this.books;
      movies = this.movies;
      cds = this.cds;

      if (books) {books.forEach(function(book) {console.log(`Book Title: ${book.title}, Author: ${book.author}, 
      Checked out: ${book.toggleCheckOutStatus()}, Average rating: ${book.getAverageRating()}`)})};

      if (movies) {movies.forEach(function(movie) {console.log(`Movie Title: ${movie.title}, Director: ${movie.director}, 
      Checked out: ${movie.toggleCheckOutStatus()}, Average rating: ${movie.getAverageRating()}`)})};

      if (cds) {cds.forEach(function(cd) {console.log(`Book Title: ${cd.title}, Artist: ${cd.artist}, 
      Checked out: ${cd.toggleCheckOutStatus()}, Average rating: ${cd.getAverageRating()}`)})};
      
    }
  }
  









  catalog.addBookToCatalog('A Short History of Nearly Everything','Bill Bryson',544);

  historyOfEverything = catalog.getBookFromCatalog('A Short History of Nearly Everything','Bill Bryson');

  console.log(historyOfEverything.isCheckedOut);

  historyOfEverything.toggleCheckOutStatus();

  console.log(historyOfEverything.isCheckedOut);

  historyOfEverything.addRating(4);

  historyOfEverything.addRating(5);

  historyOfEverything.addRating(5);

  console.log(historyOfEverything.getAverageRating());
  









  catalog.addMovieToCatalog('Speed','Jan de Bont',116);

  speed = catalog.getMovieFromCatalog('Speed','Jan de Bont');

  speed.toggleCheckOutStatus();

  console.log(speed.isCheckedOut);

  speed.addRating(1);

  speed.addRating(1);

  speed.addRating(5);

  console.log(speed.getAverageRating());

  catalog.listCatalog();


