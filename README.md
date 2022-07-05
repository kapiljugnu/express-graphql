query Author {
  a1: author(id: "62c3ac55c627e8a05bc73fb4") {
    name
    books {
      name
    }
  }
}

query Books {
  books {
    name
    author {
      name
      age
    }
  }
}

query Book {
  book(id: "62c3ad914b67029248c351d2") {
    name
    author {
      name
    }
  }
}

mutation addAuthor {
  addAuthor(name: "Terry Pratchett", age: 66) {
    name,
    age
  }
}

mutation addBook {
  addBook(name: "The Light Fantastic", genre: "Fantasy", authorId: "62c3ac55c627e8a05bc73fb4") {
    name,
    genre
  }
}
