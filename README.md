# MyReads README

# What is this?

This applicaiton is inspired by Goodreads and other sites like it. It allows users to place books on virtual bookshelves; move those books from shelf to shelf; and search for and add new books. 

The app uses React and for now, only implements a front end with a limited selection of books and possible search terms. The list of search terms can be found in SEARCH_TERMS.md

This project was created to fulfill a requirement in Udacity's Front-End Web Development Nanodegree program.

# How to Install and Launch the Application

The application can be installed with 'npm install' and launched with 'npm start'.

You can see it in action here:

https://julianjohannesen.github.io/myreads/

# Development Notes

## React Component Tree

index.js
|
App.js
|
Search.js ----- ListBooks.js
|               |
Books.js        Books.js
|               |
ShelfChanger    ShelfChanger


## The following is a list of just a few of the issues that cropped up during development.

## Why was I getting the "use value on select" warning

So what I was doing before I fixed this was telling the shelf generator that if the shelf id on the option element currently being generated is the same as the id of the old shelf for this book, then add the "selected" attribute to this option. But that's not the preferred way to handle selected options in React. What you're supposed to do is use the select element's value attribute to indicate which option is selected by default. So I did that and I created a state to represent the selected state of the options, changing that state with setState whenever the onChange event fires. 

## Why am I getting a mime type error on my service worker. 

This was a problem I spent a while on, but using Create React Apps default service worker corrected the problem

## At what point do you actually fetch the books?

At first I didn't realize that I needed to use getAll to set the state of my shelves in App.js. I was using a static array of books and then moving books from shelf to shelf and from search to the homepage by setting state. The only time I was accessing the API was when executing a search. 

The problem with that approach is that changes to the shelves don't persist on page refresh! So, I started using getAll to load my books initially and started calling update() in my moveBook function.

## How do you get each shelf of books? 

At first I couldn't figure out how to sort the books to their various shelves. I wasn't using getAll() to fetch the books and I didn't even realize that each book has a shelf property. I was using a static array of books. Eventually, I figured out that you need to add a state object to App.js (in App.js specifically so that it can be passed down to both ListBooks and Search) with keys for current, wantToRead, and read. Each of those keys has a value provided by getAll(). 

Those arrays are then passed first from App.js to either ListBooks or Search and then on to Books. 

I think that what I'm doing right now is passing the whole library along rather than an individual shelf. Need to look at that more.

## How will the books move from shelf to shelf?

I knew this was going to involve a callback function and setState(). But I didn't know where to put the call to the callback function or how to pass down the callback function. I eventually figured out that the callback fires on change to the select element in ShelfChanger, e.g.

But the callback has to be defined in the same place that the state is set and then passed down to whatever is calling it. That took a long time to figure out. My first instinct was to import the callback function into ShelfChanger. 

## How do you use the callback function to add and remove books from the state?

Then it took a while to figure out how to add and remove books from the state. I'm was pretty pleased with myself when I came up with using a self invoking function to push the book object onto the new shelf and then return the shelf array.

At first I had tried to just push the new book, e.g.

```jsx
this.setState(
    {[newShelf] : this.state[newShelf].push(theBook)}
)
```
and I didn't understand why that wasn't working. Of course, what gets returned by that push expression is the index of the new member of the array. But what I needed was the newShelf array with the new book added in. 

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



