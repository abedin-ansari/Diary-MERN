import React, { useState } from "react";
import './note.css';

function Note(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(props.title);
  const [editedContent, setEditedContent] = useState(props.content);

  function handleDelete() {
    props.onDelete(props.id);
  }

  async function handleEdit() {
    try {
      await props.onEdit(props.id, {
        title: editedTitle,
        content: editedContent
      });
      setIsEditing(false);
    } catch (error) {
      console.error("Error editing note:", error);
    }
  }

  function handleTitleChange(event) {
    setEditedTitle(event.target.value);
  }

  function handleContentChange(event) {
    setEditedContent(event.target.value);
  }

  return (
    <div className="note">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={handleTitleChange}
          />
          <textarea
            
            value={editedContent}
            onChange={handleContentChange}
          />
          <button onClick={handleEdit}><i className="fa fa-save" style={{ fontSize: '20px' }}></i></button>
        </>
      ) : (
        <>
          <h1>{props.title}</h1>
          <p>{props.content}</p>
          <button onClick={handleDelete}><i className="fa fa-trash-o" style={{ fontSize: '20px' }}></i></button>
          <button onClick={() => setIsEditing(true)}><i className="fa fa-edit" style={{ fontSize: '20px' }}></i></button>
        </>
      )}
    </div>
  );
}

export default Note;
