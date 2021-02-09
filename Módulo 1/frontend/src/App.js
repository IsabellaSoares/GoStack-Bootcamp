import React, { useState, useEffect } from 'react'
import Header from './components/Header'

import api from './services/api'

import './App.css'

const App = () => {
  const [projects, setProjects] = useState([])

  const handleAddProject = async () =>{    
    const response = await api.post('/projects', {
      title: `Novo projeto ${Date.now()}`,
      owner: "Isa"
    })
    
    const project = response.data
    setProjects([ ...projects, project ])
  }

  useEffect(() => {
    api.get('/projects').then(response => setProjects(response.data))
  }, [])

  return (
    <>
      <Header title='Bootcamp GoStack' />

      <ul>
        { projects.map(project => <li key={project.id}>{project.title}</li>) }
      </ul>

      <button type='button' onClick={() => handleAddProject()}>Adicionar projeto</button>
    </>
  )
}

export default App