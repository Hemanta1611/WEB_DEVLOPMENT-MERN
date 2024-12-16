# Cookies
## WEB-Cookies: Cookies : Server-Cookies
- HTTP cookies are small blocks of data created by a web server wile a user is browsing a website and placed on the user's computer or other device by the user's web browser.

# uses:
- Session Management
- Personalization
- Tracking

- Improving your experience
Cookies help websites remember your preferences, such as your language, font size, and login information. This makes it easier to navigate the site and reduces the need to re-enter information each time you visit. 
- Analyzing your behavior
Cookies can collect data about how you use a website, such as which pages you visit most often and how long you stay on a page. This information can help websites improve their content and features. 
- Tailoring advertising
Cookies can track your browsing activity across websites and use that information to show you ads that are relevant to your interests. 
- Securing your account
Cookies can help ensure that only the account owner can access their account. For example, Google uses cookies to block attempts to steal the content of forms submitted in Google services. 
- Detecting fraud
Cookies can help detect spam, fraud, and abuse. For example, Google uses cookies to ensure that requests within a browsing session are made by the user.


# code;
app.get("/getcookie", (req, res) => {
    res.cookie("greet", "hello");
    //          name     value
    res.send("sent you some cookie);
})

# cookie-parser 
1 - installation: npm i cookie-parser
const cookieParser = require("cookie-parser");
app.use(cookieParser("secredCode"));

# Signed Cookies:
- Send Signed Cookie
app.get("/getsignedcookie", (req, res) =>{
    res.cookie("greet", "namaste", {signed: true});
    res.send("signed cookie send");
})

- Verify Signed Cookie
app.get("/verify", (req, res) => {
    console.log(req.cookies); // to print unsinged cookie
    console.log(req.signedCookies); // to print signed cookie
    res.send("verified");
})