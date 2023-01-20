import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {selectNoteByID} from './notesApiSLice'
import { selectAllUsers } from '../users/usersApiSlice'
import EditNoteForm from './EditNoteForm'


const EditNote = () => {
 const {id} = useParams()

 const note = useSelector(state => selectNoteByID(state,id))
 const users = useSelector(selectAllUsers)
 const content = note && users ? <EditNoteForm note={note} users={users}/> : <p>Loading..</p>

 return content
  
}

export default EditNote