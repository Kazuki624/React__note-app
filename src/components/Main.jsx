import React from 'react'
import './Main.css'
import ReactMarkDown  from 'react-markdown'

const Main = ({activeNote, onUpdateNote}) => {
     if(!activeNote){
          return <div className='no-active-note'>ノートが選択されていません</div>
     }
     const onEditNote = (key, value) => {
          onUpdateNote({
               ...activeNote,
               [key] : value,
               modDate : Date.now()
          })
     }
  return (
    <div className='app-main'>
     <div className="app-main-note-edit">
          <input type="text" id='title' value={activeNote.title} onChange={(e) => onEditNote("title", e.target.value)} />
          <textarea placeholder='write note content' id='textarea' value={activeNote.content} onChange={(e) => onEditNote("content", e.target.value)}></textarea>
     </div>
     <div className="app-main-note-preview">
          <h1 className='preview-title'>{activeNote.title}</h1>
          <ReactMarkDown className="markdown-preview">{activeNote.content}</ReactMarkDown>
     </div>
    </div>
  )
}

export default Main