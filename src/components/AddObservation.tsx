import { useState } from 'react'
import { Observation } from './Observation.tsx'

interface Activity {
  id: number
  name: string
}

interface ObservationData {
  observacion: string
  actividades: Activity[]
}

export const AddObservation: React.FC = () => {
  const [observations, setObservations] = useState<ObservationData[]>([]) // Almacena todas las observaciones obtenidas
  const [currentEndpointIndex, setCurrentEndpointIndex] = useState<number>(0) // Controla el índice del endpoint actual
  const [newObservationData, setNewObservationData] = useState<ObservationData | null>(null) // Datos de la nueva observación

  // Función para obtener los datos de observación y actividades desde el endpoint actual
  const fetchMockData = async (index: number): Promise<ObservationData> => {
    try {
      const response = await fetch(`http://localhost:3000/${index}`)
      if (!response.ok) {
        throw new Error('Error al cargar los datos del servidor')
      }
      const data = await response.json()

      return {
        observacion: data.observacion.observacion,
        actividades: data.actividades,
      }
    } catch (error) {
      console.error('Error en la carga de datos:', error)
      throw error
    }
  }

  // Maneja la acción de agregar una nueva observación
  const handleAddObjetive = async () => {
    try {
      // Cargar nuevos datos de observación
      const newData = await fetchMockData(currentEndpointIndex)
      setNewObservationData(newData)
      setCurrentEndpointIndex((prevIndex) => prevIndex + 1)
    } catch (error) {
      console.error('Error al agregar objetivo:', error)
    }
  }

  // Maneja la acción de guardar la nueva observación
  const handleSaveObservation = (observation?: string, activities?: Activity[]) => {
    if (newObservationData && !observation && !activities) {
      // Agrega los datos actuales si no se pasan nuevos datos
      setObservations([...observations, newObservationData])
      setNewObservationData(null) // Limpiar los datos de la nueva observación
    } else if (observation && activities) {
      // Agrega los datos enviados desde la validación
      setObservations([...observations, { observacion: observation, actividades: activities }])
      setNewObservationData(null)
    }
  }

  return (
    <div>
      {observations.map((objetiveData, index) => (
        <Observation
          key={index}
          observation={objetiveData.observacion}
          activities={objetiveData.actividades}
          onSave={handleSaveObservation}
        />
      ))}
      {newObservationData && (
        <Observation
          observation={newObservationData.observacion}
          activities={newObservationData.actividades}
          onSave={handleSaveObservation}
        />
      )}
      <button onClick={handleAddObjetive} className="bg-indigo-800 text-white px-2 py-1 rounded">
        +Nueva Observación
      </button>
    </div>
  )
}
