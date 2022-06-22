import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
const initialState=[
    {id:'1',name:'Sarika.Sairam'},
{id:'2',name:'Aisha Sharma'},
]

const userSlice=createSlice({
    name:'users',
    initialState,
    reducers:{userAdded:{
        reducer:(state,action)=>{
            state.push(action.payload);
        },
        prepare:(name)=>{
            return{
                payload:{
                    id:nanoid(),
                    name
                }
            }
        }
    }}
});

export const {userAdded}=userSlice.actions
export const allUserSelectors=(state)=>state.users;
export default userSlice.reducer;