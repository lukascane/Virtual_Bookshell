# Database structure

## 3 Schemas
- user
- book collections
- comments

### User schema
- username
- firstname
- lastname
- email
- password
- created on (hidden)
- comments (hidden? - subDocument)

### Comments schema
- user_id (linked to username)
- created on
- rating
- comments
- book-key

### To read list/book collection
- key (isbn) for subject
- cover (link)
- title
- author
- year
- subject
- description
- comments (linked to comments (subDocument))
- rating (?)
- user_id 
- reading status
  - 0 to read
  - 1 read

### read list
- shows the book collection with the status 0
- Example: 
  ``` BookList.find({ user_id : req.user_id, reading_status=0 }) ```
