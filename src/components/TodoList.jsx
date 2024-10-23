import { Box, IconButton, Typography,InputBase } from '@mui/material'
import React, { useState } from 'react'
import {DeleteOutlined,EditNoteOutlined,SaveOutlined} from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, editTodo } from '../store/state'

const TodoList = ({text,id}) => {

    const [edited,setEdited]=useState(false)
    const [editedText,setEditedText]=useState(text)

    const todos=useSelector((state)=>state.todoSlice.todos)
    const dispatch=useDispatch()

    const handleEdit=()=>{
      setEdited(true)
    }

    const handleSave=()=>{
      dispatch(editTodo({id,editedText:editedText}))
      setEdited(false)
    }

  return (
    <Box display="flex" justifyContent="space-between" padding="1rem">
          {edited ? (
        <InputBase
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          fullWidth
        />
      ) : (
        <Typography variant="h6">{text}</Typography>
      )}
          <Box display="flex">
          {edited ? (
          <IconButton onClick={handleSave}>
            <SaveOutlined />
          </IconButton>
        ) : (
          <IconButton onClick={handleEdit}>
            <EditNoteOutlined />
          </IconButton>
        )}
          <IconButton onClick={()=>dispatch(deleteTodo(id))}>     
                 <DeleteOutlined />
          </IconButton>
          </Box>
          
    </Box>
  )
}

export default TodoList