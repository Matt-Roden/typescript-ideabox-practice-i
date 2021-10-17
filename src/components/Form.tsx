import React, { useState } from 'react'

const Form: React.FC = () => {

  return (
    <form>
      <div className='title-container'>
          <label>Idea Title:</label>
          <input name='title' type='text'/>
      </div>
      <div className='body-container'>
        <label>Idea Body:</label>
        <input name='body' type='text'/>
      </div>
      <button>Add Idea</button>
    </form>
  )
};

export default Form;