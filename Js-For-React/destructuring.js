// Destructuring

const book = getBook(3);

// const title = book.title;
// const author = book.author;

const { title, author, pages, hasMovieAdaptation, genres, publicationDate } =
  book;
console.log(title, author, genres);

// Destructuring with Arrays

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

const [primaryGenre, secondaryGenre, ...otherGenre] = genres; // rest operator used here

console.log(primaryGenre, secondaryGenre, otherGenre);

// [
//   "science fiction",
//   "humor",
//   "speculative fiction",
//   "short stories",
//   "fantasy",
// ];

const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${publicationDate.split("-")[0]}`;
summary;

const pageRange = pages > 1000 ? "over a thousand" : "less than 1000";
pageRange;
console.log(`The book has ${pageRange} pages`);

// Arrow Functions

// function getYear(str) {
//   return str.split("-")[0];
// }

const getYear = (str) => {
  str.split("-")[0];
};

console.log(getYear(publicationDate));

// Shortcircuiting

console.log(true && "some value");
console.log(false && "some value");

console.log(hasMovieAdaptation && "This book has a movie");

//falsy: 0,'', null,undefined
console.log("jonas" && "Some String");
console.log(0 && "Some String");

console.log(true || "Some String");
console.log(false || "Some Value");

console.log(book.translations.spanish);

const spanishTranslation = book.translations.spanish || "Not translation";
spanishTranslation;

// console.log(book.reviews.librarything.reviewsCount);
// const countWrong = book.reviews.librarything.reviewsCount || "no data";
// countWrong;

// const count = book.reviews.librarything.reviewsCount ?? "no data";
// count;

// Optional Chaining
function getTotalReviewCount(book) {
  const goodReads = book.reviews.goodReads?.reviewsCount;
  const libraryThing = book.reviews.libraryThing?.reviewsCount ?? 0;
  libraryThing;
  return goodReads + libraryThing;
}

getTotalReviewCount(book);
