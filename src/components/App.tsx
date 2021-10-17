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

  const removeIdea = () => {

  };

  return (
    <div className="App">
      <Form addIdea={addIdea}/>
      <IdeasContainer />
    </div>
  );
}

export default App;
