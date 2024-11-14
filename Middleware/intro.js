/*
Middleware:
                    __________
-> Request -----> | middleware | -----> Response
                    ----------
-> in Express, Middleware are function that come into play after the server receives the request and
   before the response is sent to the client.

Common Middleware function:
. methodOverride
. bodyParser
. express.static
. express.urlecoded

What middleware can do?
. Execute any code
. Make changes to the request and the response objects
. End the request-response cycle
. Call the next middleware function in the stack

"next" middleware function:
-> is a function that is passed as an argument to another middleware function, 
   and is used to advance to the next middleware function in the stack.
-> if the current middleware function doesn't end the requese-response cycle, it must call
   next() to pass control to the next middleware function in the stack.

** Midlleware always run on the request-response cycle, whether it is wrong path or right path **



*/