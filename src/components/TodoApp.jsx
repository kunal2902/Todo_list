import React,{useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Box,IconButton,InputBase,Typography,List} from '@mui/material'
import {AddOutlined} from '@mui/icons-material'
import TodoList from './TodoList'
import { addTodo } from '../store/state'

const TodoApp = () => {

    const todos=useSelector((state)=>
        state.todoSlice.todos
    )
    const dispatch=useDispatch()

    const [ItemText,setItemText]=useState("")
    const itemClick=(e)=>{
        setItemText(e.target.value)
    }
    const HandleClick=(e)=>{
        e.preventDefault()
        dispatch(addTodo(ItemText))
        setItemText("")
    }

  return (
    <>
    <Box sx={{backgroundColor:"#6983aa"}} height="100vh" width="100vw" display="flex" justifyContent="center" alignItems="center">
        <Box  height="55vh" width="20vw" sx={{backgroundColor:"white",   boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px"
}}>
           <Typography textAlign="center" pt="0.8rem" variant='h4' fontFamily="serif" sx={{  backgroundColor: "#8566aa"
}} color='white' mt="1.5rem">Todo-List</Typography>
           <Box display="flex" justifyContent="center" padding="1rem">
               <InputBase type='text' placeholder='Type here...' value={ItemText} onChange={itemClick} />
               <IconButton onClick={HandleClick}>
                   <AddOutlined/>
               </IconButton>
           </Box>
           <List sx={{width:"100%"}}>
               {
                    todos.map((ele)=>{
                        return <TodoList
                          key={ele.id}
                          text={ele.text}
                          id={ele.id}
                        />
                    })
               }
           </List>
        </Box>
    </Box>
    </>
  )
}

export default TodoApp