import { createSlice } from "@reduxjs/toolkit";
const initialState = { showCart: false, notification: null };

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleShowCart(state) {
      state.showCart = !state.showCart;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;

//? functionality
/*
initialState: This variable defines the initial state for the UI slice of the Redux store. It contains two properties:
showCart: A boolean indicating whether the cart should be shown or not. Initialized to false.

notification: An object representing a notification. Initialized to null.

uiSlice: This is created using the createSlice function, presumably imported from the Redux Toolkit. It defines a slice of the Redux state specifically for managing UI-related state.

name: Specifies the name of the slice, which is "ui" in this case.

initialState: Specifies the initial state for this slice, which is the initialState object defined earlier.
Reducers: Inside the createSlice function, reducers are defined. Reducers are functions that specify how the state should change in response to actions. In this code, there are two reducers defined:

toggleShowCart: This reducer is responsible for toggling the showCart boolean value. It takes the current state as its parameter, toggles the value of showCart, and because it's using Redux Toolkit's createSlice, it can directly mutate the state.

showNotification: This reducer is responsible for updating the notification object in the state. It takes the current state and an action as parameters. The action parameter is expected to have a payload property containing an object with status, title, and message properties. It then updates the state.notification with the provided values from the payload.
*/
