import React from 'react'
import Idea from './Idea'

interface IdeasContainerProps {
  ideas: {id: number, title: string, body: string}[];
  removeIdea: (id: number) => void;
}

const IdeasContainer: React.FC<IdeasContainerProps> = ({ ideas, removeIdea }) => {
  const allIdeas = ideas.map(idea => <Idea id={idea.id} title={idea.title} body={idea.body} removeIdea={removeIdea} key={idea.id}/>)

  return (
    <section className='all-ideas-container'>{ allIdeas }</section>
  )
};

export default IdeasContainer;