// AddObservation.tsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom' // Para la redirección
import { Observation } from './Observation'

// Definir el tipo para las actividades
interface Activity {
	id: number
	name: string
}

// Definir el tipo para las observaciones
interface ObservationData {
	observacion: string
	actividades: Activity[]
}

export const AddObservation: React.FC = () => {
	const [observations, setObservations] = useState<ObservationData[]>([]) // Almacena todas las observaciones obtenidas
	const [currentEndpointIndex, setCurrentEndpointIndex] = useState<number>(0) // Controla el índice del endpoint actual
	const [newObservationData, setNewObservationData] = useState<ObservationData | null>(null) // Datos de la nueva observación

	const navigate = useNavigate() // Para la redirección

	// Función para obtener los datos de observación y actividades desde el endpoint actual
	const fetchMockData = async (index: number): Promise<ObservationData> => {
		try {
			// Realiza la petición al endpoint específico basado en el índice
			const response = await fetch(`http://localhost:3000/${index}`)
			if (!response.ok) {
				throw new Error('Error al cargar los datos del servidor')
			}
			const data = await response.json()

			// Retorna los datos obtenidos
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
			// Obtén los datos del endpoint actual basado en currentEndpointIndex
			const newData = await fetchMockData(currentEndpointIndex)

			// Establecer los datos de la nueva observación para editar antes de guardar
			setNewObservationData(newData)

			// Incrementa el índice para el siguiente endpoint
			setCurrentEndpointIndex((prevIndex) => prevIndex + 1)
		} catch (error) {
			console.error('Error al agregar objetivo:', error)
		}
	}

	// Maneja la acción de guardar la nueva observación
	const handleSaveObservation = (observation: string, activities: Activity[]) => {
		// Agrega los datos obtenidos al array de observaciones
		setObservations([...observations, { observacion: observation, actividades: activities }])
		setNewObservationData(null) // Limpiar los datos de la nueva observación
	}

	// Redirige a la vista de seguimiento del proyecto seleccionado
	const handleNavigateToProject = () => {
		navigate('/project/seguimiento') // Cambiar esta ruta según sea necesario
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
			<button onClick={handleAddObjetive} className="bg-green-500 text-white px-4 py-2 rounded">
				Nueva Observación
			</button>
			<button onClick={handleNavigateToProject} className="bg-gray-500 text-white px-4 py-2 rounded ml-2">
				Ir a Seguimiento de Proyecto
			</button>
		</div>
	)
}
