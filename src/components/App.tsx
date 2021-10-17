import React, { useState, useEffect } from 'react';
import { Idea } from './idea.model'
import './App.css';
import Form from './Form'
import IdeasContainer from './IdeasContainer'
import axios from 'axios'
import { CircularProgress } from '@mui/material';

interface KanyeQuote {
  quote: string
}


const App: React.FC = () => {
  const [ideas, setIdeas] = useState<Idea[]>([])
  const [quote, setQuote] = useState<KanyeQuote | any>({})

  const addIdea = (newIdea: {id: number, title: string, body: string}) => {
    setIdeas([...ideas, newIdea])
  };

  const removeIdea = (id: number) => {
    const updatedIdeas = ideas.filter(idea => idea.id !== id)
    setIdeas(updatedIdeas)
  };

  useEffect(() => {
    axios
      .get('https://api.kanye.rest')
      .then( response => {
        setQuote(response.data)
      })
      .catch(err => {
        console.log('Error: ', err)
      })

  }, [])

  return (
    <div className="App">
      <div>{quote.quote}</div>
      <div>
        <CircularProgress />
      </div>
      <Form addIdea={addIdea} />
      <IdeasContainer ideas={ideas} removeIdea={removeIdea}/>
    </div>
  );
}

export default App;
