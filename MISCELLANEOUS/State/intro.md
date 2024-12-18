## What is State?
# Session: a single interaction between client and server is called a single session. it can be to different route but same user (i.e. same browser)
- Stateful Protocol:
    stateful protocol required server to save the status and session information.
    eg. ftp (file transfer ptotocol)

- Stateless Protocol:
    stateless protocol does not require the server to retain the server information or session information.
    eg. http (hypertext tranfer protocol)

# Express Session:
An attempt to make our session stateful.
To use express session we can simply install it as: npm i express-session

# connect-flash
- The flash is a special area of the session used for storing messages. Messages are written to the flash and cleared after being displayed to the user.
- The flash is typically used in combination with redirects, esuring the message is available to the next page that is to be rendered.
- npm i connect-flash

# res.local
- Use this property to set variable accessible in templates rendered with res.render. 
- The variable set on res.locals are available within a single request-response cycle, and will not be shared between requests.

