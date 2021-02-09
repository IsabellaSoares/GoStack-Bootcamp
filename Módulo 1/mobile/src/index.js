import React, { useEffect, useState } from 'react'
import { SafeAreaView, Text, StyleSheet, StatusBar, FlatList, TouchableOpacity } from 'react-native'

import api from './services/api'

const App = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data)
    })
  }, [])

  const handleAddProject = async () =>{    
    const response = await api.post('/projects', {
      title: `Novo projeto ${Date.now()}`,
      owner: "Isa"
    })
    
    const project = response.data
    setProjects([ ...projects, project ])
  }

  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#7159c1' />

      <SafeAreaView style={styles.container}>
        <FlatList        
          data={projects}
          keyExtractor={project => project.id}
          renderItem={({ item }) => (
            <Text style={styles.title}>{item.title}</Text>
          )}
        />
      </SafeAreaView>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.6}
        onPress={handleAddProject}
      >
        <Text style={styles.buttonText}>Adicionar projeto</Text>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1'
  },
  title: {
    color: '#fff',
    fontSize: 20   
  },
  button: {
    backgroundColor: '#fff',
    marginLeft: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16
  }
})

export default App