# Read Me

I've added the link buttons in the search and list books components with the to="" attribute pointing to either the home page or to search and that got the back button working in the browser. I can now click on the add button and the URL changes. From the search bar, I can now click on the back button and the URL will change back to the homepage URL of "/". 

What's not working is that both the search component and the list books components are showing. I want only the list books view to show and I want to switch over to the search view when the user clicks on the add book button.

- one thing i need to do is add the header and footer content to the search page, but that's pretty minor and would also be a huge pain in the neck
- another more important thing is to not show the search page on initial page load and to only show after the user clicks the add book button

Holy shit! All I had to do was import Route and Switch and then add a Switch statement with my Routes inside that statement and choose search and list books as my two components, one each for each route.

In the template, the books are just hard coded into the JSX in App.js. I moved that hard coding to a component called ListBooks. 

The shelves and the books that appear on those shelves are all just hard coded. I need to figure out how to use the BooksAPI to fetch all of those books and display them correctly.

To do that I think I'll need components both for Books and for Shelves. Definitely for Books.

