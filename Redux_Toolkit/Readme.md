# Redux:
- State Management Libray for JS Apps
- Redux is built for larger, more complex application
- Redux Toolkit is the official recommendation of writing Redux

# Understanding Terms:
1. Store: A centralized store holds the whole state tree of your application.
2. Reducer: Functions that take the current state and and action as arguments, and return a new state result. In other words, (state, action) => newState.
3. Action: It is a plain javascript object that has a type field (like events)
4. Slice: Collection of Redux reducer logic and actions for a single together in a single file.

# Steps: Seutup:
1. Store
2. Actions
3. Reducer(s)
4. Store: passon the reducer(s)

# Provider Component:
- The <Provide> component makes the Redux store avialable to any nested components that need to access the Redux store.

# Dispatching action:
- Triggering a State Change
- The useDispatch hook allows you to send or dispatch an action to the redux store by giving the action as an argument to the dispatch variable.
- The useSelector hooks allow you to extract data or the state from the Redux store using selection function.(returns the data)

