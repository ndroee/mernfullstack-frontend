import React from "react";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersApiSlice";
import NewNoteForm from "./NewNoteForm.js";

const NewNote = () => {
  const users = useSelector(selectAllUsers);
  if (!users.length) return <p>Not Curently Available</p>;
  const content = <NewNoteForm users={users} />;
  return content;
};

export default NewNote;