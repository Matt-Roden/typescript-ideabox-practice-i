import React from 'react'

interface IdeaProps {
  id: number;
  title: string;
  body: string;
  removeIdea: (id: number) => void;
}

const Idea: React.FC<IdeaProps> = ({ id, title, body, removeIdea }) => {
  return (
    <div className='idea-container' key={id}>
      <h2 className='title-text'>{title}</h2>
      <p className='body-text'>{body}</p>
      <button onClick={removeIdea.bind(null, id)}>Delete</button>
    </div>
  )
}

export default Idea;