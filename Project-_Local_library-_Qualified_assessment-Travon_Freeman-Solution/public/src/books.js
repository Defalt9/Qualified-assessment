function findAuthorById(authors, id) {
  return findElementById(authors, id);
}
//return author with corresponding ID

function findBookById(books, id) {
  return findElementById(books, id);
} //findElementById helper function below

function partitionBooksByBorrowedStatus(books) {
  //borrows array have values for if the book was returned or not
  //set a placeholder boolean to represent if a book was returned
  const returned = true;
  //borrowed is opposite of returned
  const borrowed = !returned;
  //used filterBorrowed helper function to create filtered arrays of all books that are either borrowed or returned
  const borrowedBooks = filterBorrowed(books, borrowed);
  const returnedBooks = filterBorrowed(books, returned);
  //return an array that spreads both of the arrays
  return [[...borrowedBooks], [...returnedBooks]];
}

function getBorrowersForBook({ borrows }, accounts) {
  //array we will populate and return
  const borrowers = [];
  // iterate through each record in borrows
  for (let record in borrows) {
    //find matching account using helper function
    const borrowId = borrows[record].id;
    const matchingAccount = findElementById(accounts, borrowId);
    borrowers.push({ ...borrows[record], ...matchingAccount });
  }
  //first ten elements and return the array
  return borrowers.slice(0, 10);

}

//Helper function to find an element in the array given an id value
function findElementById(elements, id) {
  return elements.find((element) => element.id === id);
}

//Helper Function to make partitionBooksByBorrowed Status more readable and filter out a list of books based on their returned status
function filterBorrowed(books, status) {
  return books.filter(({ borrows }) => status === borrows[0].returned);
}



module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
