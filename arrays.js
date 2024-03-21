//Find the last element of the following arrays.arr1 = [3,7,34,90,12]arr2 = [true, "green", "where",12,56]

let arr1 = [3,7,34,90,12];
console.log('last element', arr1.slice(-1));

let arr2 = [true, "green", "where",12,56];
console.log('last item', arr2.slice(-1));


//Write a JS program that will join the following array elements into a string myPets = ["Cow", "Bird", "Snake", "Dog"];
let myPets = ["Cow", "Bird", "Snake", "Dog"];
let newText = myPets.toString();
console.log({newText});


//Write a JS script to sort the following array itemsvar arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
let arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
let newArr3 = arr3.sort();
console.log({newArr3});


//Write a program to remove duplicates from the following array.Console the array without duplicates, and console another array that only contains the duplicates
let arr = ["boy", "man", "girl",            "school", "girl", "woman"];
let people = [];
let duplicates = [];
arr.forEach(person =>{
    if (!people.includes(person)) {
        people.push(person);
    }
    else(duplicates.push(person));
});
console.log({people});
console.log({duplicates});


//Write a JS script to search for the following word in the array."food"If the word is present, return it else return "the search word was not found"let arr5 = ["the", "way", "x", 4];
let arrs = ["the","way","x",4];
const word = "food";
const wordIndex = arrs.indexOf(word);
if (word==arrs[1]){console.log({word})}
 else{console.log("the search was not found")};

 


//Write a JS script to sort the following string:let word = "renniw"
let words = "renniw";
let newWord= words.split("")
                .sort()
                .join("")
;
console.log({newWord});


//Using an array of fruits with length 10 , insert 'Tomato' at the 5th index 
let fruits = ["Guavas", "Mango","Pears", "Kiwi", "Orange", "Apple", "Banana", "Pineapple", "Plums", "Avocado"];
 fruits[5] = "Tomato";
 console.log({fruits});
