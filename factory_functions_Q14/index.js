// You have been given a factory function createBook with a method printInfo. However, the printInfo method 
// is not correctly using the this keyword to access book properties. Identify and fix the issue so that the 
// method correctly outputs the book's title and author.


function createBook(title, author) {
    return {
      title: title,
      author: author,
      printInfo: function() { // changed arrow function cause this doesn't work in arrow function 
        console.log("Book: " + this.title + ", Author: " + this.author);
      }
    };
  }
  
  const book = createBook("1984", "George Orwell");
  book.printInfo();
  // Output: Book: 1984, Author: George Orwell
  

