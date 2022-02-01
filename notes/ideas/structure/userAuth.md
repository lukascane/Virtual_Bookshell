# User Authorization 

## username
- check if username is already registered
- minimum characters: 3 
  code example: ``` isLength({ min: 5 }),```
- maximum characters: 10


## Email 
check if email is already registered

check if mail is correct:
- @ required 
- . after domain required
username = None
    email = XXXX(max_length=20, unique=True, blank=False)
## password 
-minimum 6 characters
-one big letter
-one number
-one special character
-maximum characters: 10
password = XXXXXX(max_length=20, blank=False)



## firstname/lastname
(minimum 2 chacacters)
- first name 
- lastname



links:
https://forum.djangoproject.com/t/implementing-a-custom-backend-for-email-authentication/5231