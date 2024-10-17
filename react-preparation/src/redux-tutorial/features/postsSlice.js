import { createSlice, nanoid } from "@reduxjs/toolkit";
import { format } from "date-fns";

const initialState = [
  {
    id: "1",
    title: "Home Page",
    content: "This is a Home Page",
    userId: "4fr5a",
    roles: [""],
    date : format(new Date(), "yyyy-MM-dd HH:mm:ss"),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0
  }
  },
  {
    id: "2",
    title: "Component Page",
    content: "This is a Component Page",
    userId: "pde2Y",
    roles: [""],
    date : format(new Date(), "yyyy-MM-dd HH:mm:ss"),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0
  }
  },
];

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId, roles) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
            roles,
            date : format(new Date(), "yyyy-MM-dd HH:mm:ss"),
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0
          }
          },
        };
      },
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload
      const existingPost = state.find(post => post.id === postId)
      if (existingPost) {
          existingPost.reactions[reaction]++
      }
    }
  },
});

export const selectAllPosts = (state) => state.posts;

export const { addPost, reactionAdded } = postSlice.actions;
export default postSlice.reducer;
