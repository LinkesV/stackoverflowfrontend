import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    firstname:'',
    lastname:'',
    email:'',
    aboutme:'',
    questions:[],
    votes:[],
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setDetails:(state,action)=>{
            state.firstname = action.payload.fname
            state.lastname = action.payload.lname
            state.email = action.payload.email
            state.aboutme = action.payload.aboutme
            state.questions = action.payload.questions
            state.votes = action.payload.votes



        },

        addQuestions:(state,action)=>{
            state.questions = [...state.questions,action.payload]
        },

        addVotes:(state,action)=>{
            state.votes = [...state.votes,action.payload]
        },

        logOut:(state)=>{
            state = {
                firstname:'',
                lastname:'',
                email:'',
                aboutme:'',
                questions:[],
                votes:[]
            }
        }
    }
})

export const {setDetails, addQuestions, addVotes, logOut} = userSlice.actions;
export default userSlice.reducer