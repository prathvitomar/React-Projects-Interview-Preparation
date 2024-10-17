import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [{
  id : "132",
  username: "prathvi",
  password: "tomar",
  roles: [],
  author : ""
}];

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(username, password, roles, author) {
        return {
          payload: {
            id: nanoid(),
            username,
            password,
            roles,
            author
          },
        };
      },
    },
  },
});

export const selectAllUsers = (state) => state.user;

export const { login } = userSlice.actions;

export default userSlice.reducer;