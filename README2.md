# Problems and Solutions

# Component Tree

index.js
|
App.js
|
Search.js ----- ListBooks.js
|               |
Books.js        BookShelf.js
|               |
Book.js         Books.js
|               |
ShelfChanger    Book.js
                |
                ShelfChanger

## At what point do you actually fetch the books?

Still don't know.

## How do you get each shelf of books? 

Add a state object to ListBooks with entries for current, wantToRead, and read. Each of those entries is an array of book objects, or maybe book IDs. 

Those arrays are then passed first from ListBooks to BookShelf (as this.state.current, etc.), then from BookShelf to Books as "showingBooks" (as this.props.bookList), and then from Books to Book as "book" (as just book).

I've done all of that and it works. 

## How will the books move from shelf to shelf

This is going to involve a callback function and setState(). But where does the call to the callback function go? It goes in the select element in ShelfChanger, e.g.

```jsx
import { moveBook } from 'ListBooks'
// a bunch of code
(< select onChange={moveBook} >
{/* more code */}
)
```
But the moveBook callback has to be defined in the same place that the state is set. Or at least, that's my understanding. 

## After clicking on Search, using the back button does not return me to the homepage.

I've added the *Link* component (from react-router-dom) in the search component:

```js
<Link to="/" className="close-search">
	Close
</Link>
```

...and list books component:

```js
<div className="open-search">
    <Link to="/search" >Add a book</Link>
</div>
```

... with the *to=""* attribute pointing to either the home page or to search and that got the back button working in the browser. I can now click on the add button and the URL changes. From the search bar, I can now click on the back button and the URL will change back to the homepage URL of "/". 

## At first both the search component and the list books components were showing. I wanted only the list books view to show and to switch over to the search view only when the user clicks on the add book button.

I needed to import Route and Switch into App.js and then add a *Switch* statement with my *Routes* inside that statement and choose search and list books as my two components, one each for each route, using the *path* attribute and then specifying the component with the *component* attribute.

```js
<Switch>
    <Route exact path="/search" component={Search} />
    <Route exact path="/" component={ListBooks} />
</Switch>
```

In the template, the books are just hard coded into the JSX in App.js. I moved that hard coding to a component called ListBooks. 

The shelves and the books that appear on those shelves are all just hard coded. I need to figure out how to use the BooksAPI to fetch all of those books and display them correctly.

To do think that I think I'll need components both for Books and for Shelves. Definitely for Books.


