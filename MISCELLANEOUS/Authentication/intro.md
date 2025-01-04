# Authentication:
- Authentication is the process of verifying who someone is.
- signup/login

# Authorization:
- Authorization is the process of verifying what specific application, files, and data a user has access to.


# storing password:
- We never store the passwords as it is. We store their hashed form.
# Hashing:
- for every input, there is a fixed output
- they are one way functions, we can't get input from output
- for a different input, there is a different ouput but of same length
- small changes in input should bring large changes in output
- top popular hashing function: SHA256, MD5, CRC
# Salting:
- Password salting is a technique to protect passwords stored in databases by adding a string of 32 or more characters and then hashing them.

# best already availabe library in npm for authentication is:
## Passport:
- npm i passport
- npm i passport-local
- npm i passport-local-mongoose

