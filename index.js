const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}

// Convert JavaScript object to JSON string
const bookJSON = JSON.stringify(book)

// Convert JSON string into object
const bookObject = JSON.parse(bookJSON)
console.log(bookObject.title)
console.log(bookObject.author)