# React
- Create UI from components.
- React lets you build user interface out of individual pieces called components.
- component <--> function
    render          call
- Component is a reusable & independent piece of code.


# JSX
- JavaScript Extension Syntax
- It lets us write HTML directly inside JS

# Components:
- Creating a Component:
function Title(){
    return(
        <h1> Hello World! </h1>
    );
};

- Rendering a Component
<Title></Title>         <Title/>


# Writing Markup in JSX: Rules of JSX:
1. Return a single root element
2. Close all the tags
3. camelCase most of the things


# React Fragment:
- Fragments let you group a list of children without adding extra nodes to the DOM.
- <> ... </>

# JavaScript in JSX with Curly Braces:
- JSX lets you write HTML-like markup inside a JavaScript file, keeping rendering logic and content in the same place. 
- Sometimes you will want to add a little JavaScript logic or reference a dynamic property inside that markup. In this situation, you can use curly braces in your JSX to open a window to JavaScript.

# React Props
- Props are the information that you pass to a JSX tag.



