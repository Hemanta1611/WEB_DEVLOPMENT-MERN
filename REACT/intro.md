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

# State in React
- The state is a built-in React object that is used to contain data or information about the component.
- A component's state can change over time; whenever it changes, the component re-renders.
- React `re-render` when `state value change`.

# Hooks
- Hooks were a new addition in React 16.8
- They let you use state and other React features without writing a class.
1. useState():
    - useState is React Hook that lets you add a state variable to your component.
    - const [state, setState] = useState(initialState);
    - useState returns an array with exactly two values:
        1. The current state. During the first render, it will match the initialState you have passed.
        2. The set function that lets you update the state to a different values and trigger a re-render.


# Closure:
- A `Closure` is a feature in JavaScript where an inner function has access to the outer(enclosing) function's variable.

# setState()
- for array and objects we can't directly push elements, before pushing elements we need to destructure (...) in array & objects.


# Component Types `class & functional`
`Logical Comp`                   `Presentational Comp`
- Smart component                 - Dumb component
- State                           - No State


