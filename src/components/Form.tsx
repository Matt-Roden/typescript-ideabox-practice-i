import { stringify } from 'querystring';
import React, { useState } from 'react'

interface FormProps {
  addIdea: (addIdea: {id: number, title: string, body: string}) => void;
}

const Form: React.FC<FormProps> = ({ addIdea }) => {
  const [title, setTitle] = useState<string>('')
  const [body ,setBody] = useState<string>('')

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newIdea = {
      id: Date.now(),
      title: title,
      body: body
    }
   console.log(newIdea, '<>')
   addIdea(newIdea)
   setTitle('')
   setBody('')
  }

  return (
    <form>
      <div className='title-container'>
        <label>Idea Title:</label>
        <input 
          name='title' 
          type='text'
          value={title}
          onChange={event => setTitle(event.target.value)}
          />
      </div>
      <div className='body-container'>
        <label>Idea Body:</label>
        <input 
          name='body' 
          type='text' 
          value={body}
          onChange={event => setBody(event.target.value)}
          />
      </div>
      <button type='submit' onClick={event => handleSubmit(event)}>Add Idea</button>
    </form>
  )
};

export default Form;