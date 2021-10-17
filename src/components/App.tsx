import React, { useState } from 'react';
import { Idea } from './idea.model'
import './App.css';
import Form from './Form'
import IdeasContainer from './IdeasContainer'


const App: React.FC = () => {
  const [ideas, setIdeas] = useState<Idea[]>([])

  const addIdea = (newIdea: {id: number, title: string, body: string}) => {
    setIdeas([...ideas, newIdea])
  };

  const removeIdea = (id: number) => {
    const updatedIdeas = ideas.filter(idea => idea.id !== id)
    setIdeas(updatedIdeas)
  };

  return (
    <div className="App">
      <Form addIdea={addIdea} />
      <IdeasContainer ideas={ideas} removeIdea={removeIdea}/>
    </div>
  );
}

export default App;
