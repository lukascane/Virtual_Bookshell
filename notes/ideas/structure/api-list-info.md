
# APIs

## We are using the apis from openlibrary

### For subject search(to show the list - subject Api):
- https://openlibrary.org/dev/docs/api/subjects
- Example with architecture: http://openlibrary.org/subjects/architecture.json?published_in=2000-2010&details=true

### For title and author (Search Api): 
- Example: http://openlibrary.org/search.json?q=the+lord+of+the+rings
- Example-2 with limit and pagination: http://openlibrary.org/search.json?q=the+lord+of+the+rings&page=2&limit=10

### Cover - we need to use a valid number:
- https://covers.openlibrary.org/b/$key/$value-$size.jpg
  
  - example 1: cover_i 
  https://covers.openlibrary.org/b/id/8166951-M.jpg

  - example 2: isbn
  https://covers.openlibrary.org/b/isbn/1559586753-M.jpg

  - if cover_id === null -> render a dummy img

- to show bestsellers use edition count from the api

### For the description we need to use this Api
#### We have different cases for the api objects:
- some json have description, some not and some have an object as a description
  - example: works/OLnumber (with description)
  https://openlibrary.org/works/OL45883W.json

  - example: (with an object as a description)
  https://openlibrary.org/works/OL15662518W.json

  - example: (without a description at all)
  https://openlibrary.org/works/OL4135057W.json