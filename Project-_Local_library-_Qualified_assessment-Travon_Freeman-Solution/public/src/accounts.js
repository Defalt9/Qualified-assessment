
function findAccountById(accounts, id) {
  //return the account object with the matching ID
  return accounts.find((account) => account.id === id);
}


function sortAccountsByLastName(accounts) {
  //sort the objects in alphabetical order, by last name key
  const sorted = [...accounts];
  sorted.sort((acnt1, acnt2) =>
    acnt1.name.last.toLowerCase() > acnt2.name.last.toLowerCase() ? 1 : -1
  );
  //return the sorted array
  return sorted;
}

function getTotalNumberOfBorrows(account, books) {
  //iterate through every book in books to see if the given account has checked out that book at least once
  const accountId = account.id;
  return books.reduce((totalBorrowed, { borrows }) => {
    //if any of the records in borrows match the accountId, then increment our totalBorrowed
    if (borrows.some((record) => record.id === accountId)) totalBorrowed++;
    return totalBorrowed;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  //filter through each book in books
  return (
    books
      //checking to see if the most recent transaction matches account and that it hasn't been returned
      .filter(
        (book) => book.borrows[0].id === account.id && !book.borrows[0].returned
      )
      //map through all the filtered books to add the author object to it
      .map((book) => {
        book["author"] = authors.find((author) => author.id === book.authorId);
        return book;
      })
  );
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
