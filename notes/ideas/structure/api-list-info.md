
# APIs

## We are using the apis from openlibrary

- For subject search(to show the list): https://openlibrary.org/dev/docs/api/subjects
- Example with architecture: http://openlibrary.org/subjects/architecture.json?published_in=2000-2010&details=true

- For title and author (Search API): 
- Example: http://openlibrary.org/search.json?q=the+lord+of+the+rings
- Example-2 with limit and pagination: http://openlibrary.org/search.json?q=the+lord+of+the+rings&page=2&limit=10

- Cover - we need to use a valid number:
- https://covers.openlibrary.org/b/$key/$value-$size.jpg
  
  - example 1: cover_i 
  https://covers.openlibrary.org/b/id/8166951-M.jpg

  - example 2: isbn
  https://covers.openlibrary.org/b/isbn/1559586753-M.jpg
