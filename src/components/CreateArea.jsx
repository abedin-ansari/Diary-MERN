import React, { useState, useEffect } from "react";
import './createArea.css';

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [error, setError] = useState("");

  // Update the note state when props.note changes.
  useEffect(() => {
    if (props.note) {
      setNote({
        title: props.note.title,
        content: props.note.content,
      });
      setExpanded(true);
    }
  }, [props.note]);

  function handleChange(event) {
    const { name, value } = event.target;
  
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }  

  function submitNote(event) {
    event.preventDefault();

    if(note.content.trim() === ""){
      setError("Content is required.");
      return;
    }
    setError("");
    // Destructure the title and content from the note state
    // const { title, content } = note;
  
    if (props.note) {
      props.onEdit(props.note.id, note);
    } else {
      
      props.onAdd(note);
    }
  
    setNote({
      title: "",
      content: "",
    });
  
    setExpanded(false);
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded ? (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        ) : null}
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <button onClick={submitNote}>
          {props.note ? "Update" : "+"}
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default CreateArea;
