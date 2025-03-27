// Create a factory function createLibrary that manages a collection of books in a library. Each library should 
// allow for adding new books, removing books by title, and displaying all available books. Implement helper factory
//  functions for creating Book objects, which include properties title and author, and a method details()
//  to print the book’s details.


function Book(title, author){
    return{
        title,
        author,
        details: function(){
            console.log(`Title: ${this.title}, Author: ${this.author}.`)
        }
    }
}

function createLibrary(){
    const Books = []
    return {
        addBook: function(book){
            Books.push(book)
        },
        removeBook: function(title){
            Books.map((ele,i)=>{
                if(ele.title == title){
                    Books.splice(i,1)
                }
            })
        },
        listBooks: function(){
            console.log(Books)
        }
    }
}

const library = createLibrary();

const book1 = Book("To Kill a Mockingbird", "Harper Lee");
const book2 = Book("1984", "George Orwell");

library.addBook(book1);
library.addBook(book2);

library.listBooks();
// Output:
// Title: To Kill a Mockingbird, Author: Harper Lee
// Title: 1984, Author: George Orwell

library.removeBook("1984");
library.listBooks();
// Output:
// Title: To Kill a Mockingbird, Author: Harper Lee

