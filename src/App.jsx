import './App.css';
import  Sidebar  from './components/Sidebar'
import  Main  from './components/Main'
import { useState } from 'react';
import uuid from "react-uuid"
import { useEffect } from 'react';

function App() {
     const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || [])
     const [activeNote, setActiveNote] = useState(false)
     const onAddNote = () => {
          const newNote = {
               id : uuid(),
               title : "ノートのタイトルを記入してください",
               content : "ノートの内容を記入してください",
               modDate : Date.now()
          }
          setNotes([...notes, newNote])
     }

     const onDeleteNote = (id) => {
          const filterNotes = notes.filter((note) =>note.id !== id)
          setNotes(filterNotes)
     }

     const getActiveNote = () => {
          return notes.find((note) => note.id === activeNote)
     }

     const onUpdateNote = (updatedNote) => {
          // 修正した新しいノートの配列を返す
          const updateNotesArray = notes.map((note) => {
               if(note.id === updatedNote.id){
                    return updatedNote
               } else {
                    return note
               }
          })
          setNotes(updateNotesArray)
     }
     useEffect(() => {
          localStorage.setItem("notes", JSON.stringify(notes))
     }, [notes])
     // useEffect(() => {
     //      setActiveNote(notes[0].id)
     // }, [notes])
  

  return (
    <div className="App">
      <Sidebar onAddNote={onAddNote} notes={notes} onDeleteNote={onDeleteNote} activeNote={activeNote} setActiveNote={setActiveNote}/>
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote}/>
    </div>
  )
}

export default App
