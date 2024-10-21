import React, { useState, useEffect } from "react";
import './content.css';
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Note from "../components/Note";
import CreateArea from "../components/CreateArea";

export const addNote = async (title, content) => {
  try {
    const token = localStorage.getItem('token');

    if (!token) {
      throw new Error('Token not found');
    }

    const response = await axios.post(
      'http://localhost:8000/api/notes',
      { title, content },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

export default function Content() {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('Token not found');
        }

        const response = await axios.get('http://localhost:8000/api/notes', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setNotes(response.data);
      } catch (error) {
        const errorMessage = error.message === 'Token not found' ? 'You are not logged in. Please login.' : 'Error fetching notes';
        setError(errorMessage);
        toast.error(errorMessage);
      }
    };

    fetchNotes();
  }, []);

  const handleAddNote = async (note) => {
    const loadingToastId = toast.loading("Adding note...");
    try {
      setTimeout(async () => {
        const newNote = await addNote(note.title, note.content);
        if (newNote) {
          setNotes((prevNotes) => [...prevNotes, newNote]);
          toast.dismiss(loadingToastId);
          toast.success("Note added successfully", { duration: 1000 });
        }
      }, 2000); 
    } catch (error) {
      toast.dismiss(loadingToastId);
      const errorMessage = error.response?.data?.error || 'Error adding note';
      toast.error(errorMessage);
      setError(errorMessage);
    }
  };

  const editNote = async (id, updatedNoteContent) => {
    const loadingToastId = toast.loading("Editing note...");
    try {
      setTimeout(async () => {
        const token = localStorage.getItem('token');
        const response = await axios.put(`http://localhost:8000/api/notes/${id}`, updatedNoteContent, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const updatedNote = response.data;
        setNotes((prevNotes) =>
          prevNotes.map((noteItem) =>
            noteItem._id === id ? { ...noteItem, ...updatedNoteContent, _id: id } : noteItem
          )
        );
        toast.dismiss(loadingToastId);
        toast.success("Note edited successfully", { duration: 1000 });
      }, 2000); // 2-second delay
    } catch (error) {
      toast.dismiss(loadingToastId);
      const errorMessage = error.response?.data?.error || 'Error editing note';
      toast.error(errorMessage);
      setError(errorMessage);
    }
  };

  const deleteNote = async (id) => {
    const loadingToastId = toast.loading("Deleting note...");
    try {
      setTimeout(async () => {
        const token = localStorage.getItem('token');
        await axios.delete(`http://localhost:8000/api/notes/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setNotes((prevNotes) => prevNotes.filter((noteItem) => noteItem._id !== id));
        toast.dismiss(loadingToastId);
        toast.success("Note deleted successfully", { duration: 1000 });
      }, 2000); // 2-second delay
    } catch (error) {
      toast.dismiss(loadingToastId);
      const errorMessage = error.response?.data?.error || 'Error deleting note';
      toast.error(errorMessage);
      setError(errorMessage);
    }
  };

  useEffect(() => {
    document.body.classList.add("content-body");

    return () => {
      document.body.classList.remove("content-body");
    };
  }, []);


  return (
    <div className="content-body">

      <Toaster position="top-center" reverseOrder={false} toastOptions={{ className: 'content-toaster-custom' }} />

      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      <Header />
      <CreateArea onAdd={handleAddNote} />

      {error && (
        <div style={{ color: "red", textAlign: "center", marginTop: "10px" }}>
          <p>{error}</p>
          {error === 'You are not logged in. Please login.' && (
            <a href="/login" style={{ color: "#f5ba13" }}>Login</a>
          )}
        </div>
      )}

      {notes.map((noteItem) => (
        <Note
          key={noteItem._id}
          id={noteItem._id}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
          onEdit={editNote}
        />
      ))}
      <Footer id="footer" />
    </div>
  );
}
