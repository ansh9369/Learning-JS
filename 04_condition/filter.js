const Arr = [1,2,3,4,5,6,7,8,9,10,4];

// let newNum = Arr.filter((num)=> num > 4)
//     console.log(newNum);



// Second method
const newNum = [];
Arr.forEach((num)=>{
    if (num > 4) {
        newNum.push(num)
    }
})
// console.log(newNum);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const newElement = books.filter( (bookItem) => (bookItem.genre === "Science") )
console.log(newElement);


const getTitle = books.filter( (titleDedo) => (titleDedo.title) )
console.log(getTitle);


// Printing through map function...


const numbers = [1,2,3,4,5,6,7,8,9,10];

const newNums = numbers.map((num)=> {return num+10})
// console.log(newNums);

const x = numbers.map((num)=>num*10).map((num)=>num+1).filter((num)=> num==21);
const y = numbers.map((num)=>num*10).map((num)=>num+1).filter((num)=> num>=21);
console.log(x,y);
