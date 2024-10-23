import {createSlice} from '@reduxjs/toolkit'

const initialState={
    todos:[]
}

const TodoSlice=createSlice({
    name:"todoSlice",
    initialState,
    reducers:{
       addTodo:(state,action)=>{
           state.todos.push({
            id:Date.now(),
            text:action.payload
           })
       },
       deleteTodo:(state,action)=>{
        state.todos = state.todos.filter((todo)=> todo.id!==action.payload)
       },
       editTodo:(state,action)=>{
        const {id,editedText}=action.payload
        const todo=state.todos.find((todo)=>todo.id===id)

        if(todo) todo.text=editedText
       }
    }
})

export const {addTodo,deleteTodo,editTodo}=TodoSlice.actions;
export default TodoSlice.reducer;