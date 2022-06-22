import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
    { id: '1', title: 'Alaska', content: 'Home', date: sub(new Date(), { minutes: 10 }).toISOString(), },
    { id: '2', title: 'Maldives', content: 'Vacation',  date: sub(new Date(), { minutes: 5 }).toISOString(),},
];

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer: (state, action) => {
                state.push(action.payload);
            },
            prepare: (title, content, userId) => {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userId,
                        date: new Date().toISOString(),
                    }
                }
            }
        }
    }
});

export const { postAdded } = postsSlice.actions;
export const allPostSelector = (state) => state.posts;
export default postsSlice.reducer;
