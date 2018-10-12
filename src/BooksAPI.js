const api = "https://reactnd-books-api.udacity.com"

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token) token = localStorage.token = Math.random().toString(36).substr(-8)
console.log(token);
// The request headers
const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

// The get() method will fetch a single book from the book API,
// after turning the fetch result into JSON and grabbing the book 
// object
export const get = (bookId) =>
  fetch(`${api}/books/${bookId}`, { headers })
    .then(res => res.json())
    .then(data => data.book)
    .catch(new Error())

// The getAll() method will fetch all of the books in the book API
export const getAll = () =>
  fetch(`${api}/books`, { headers })
    .then(res => res.json())
    .then(data => data.books)
    .catch(new Error())

// The update() method will move a single book to a shelf
export const update = (book, shelf) =>
  fetch(`${api}/books/${book.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ shelf })
  })
  .then(res => res.json())
  .catch(new Error())

// The search() method will fetch matching books from the API
export const search = (query) =>
  fetch(`${api}/search`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  }).then(res => res.json())
    .then(data => data.books)
    .catch(new Error())
