import Dots from './../assets/dots.svg'
import { useState } from 'react'
import { MultiSelect } from 'primereact/multiselect'

interface Activity {
  id: number
  name: string
}

interface ObservationProps {
  observation: string
  activities: Activity[]
  onSave: (observation: string, activities: Activity[]) => void
}

export const Observation: React.FC<ObservationProps> = ({ observation, activities, onSave }) => {
  const [selectedActivities, setSelectedActivities] = useState<Activity[] | null>(null)
  const [editableObservation, setEditableObservation] = useState<string>(observation)
  const [error, setError] = useState<string>('')

  // Manejar los cambios en el textarea y validar longitud
  const handleObservationChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value
    if (newValue.length <= 256) {
      setEditableObservation(newValue)
      setError('') // Limpiar error si la longitud es válida
    } else {
      setError('La observación no puede exceder los 256 caracteres.')
    }
  }

  // Verificar y validar antes de guardar
  const validateAndSave = () => {
    if (!editableObservation.trim()) {
      setError('La observación no puede estar vacía.')
      return
    }

    if (!selectedActivities || selectedActivities.length === 0) {
      setError('Debe seleccionar al menos una actividad.')
      return
    }

    // Si pasa la validación, ejecutamos la función onSave
    onSave(editableObservation, selectedActivities)
    setError('') // Limpiar errores después de guardar
  }

  // Manejar el evento de presionar la tecla Enter
  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault() // Evitar salto de línea en el textarea
      validateAndSave() // Guardar al presionar Enter
    }
  }

  // Manejar el evento onBlur (cuando el textarea pierde el foco)
  const handleBlur = () => {
    validateAndSave() // Guardar al perder el foco
  }

  return (
    <div>
      <div className="flex border border-black rounded-lg w-5/6 h-[80px] my-5 mx-auto">
        <textarea
          className="flex justify-end text-left mx-2 my-2 w-full resize-none h-4/5 border-none rounded-lg focus:margin focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={editableObservation}
          onChange={handleObservationChange}
          onKeyDown={handleKeyPress} // Guardar al presionar Enter
          onBlur={handleBlur} // Guardar al perder el foco
        />
        <div className="ml-auto flex items-center my-[2.1%] mx-4">
          <MultiSelect
            value={selectedActivities}
            onChange={(e) => setSelectedActivities(e.value)}
            options={activities}
            optionLabel="name"
            placeholder="Seleccionar Actividad"
            maxSelectedLabels={3}
            className="w-[80px] md:w-5rem"
          />
          <img className="m-2 ml-8" src={Dots} alt="Dots icon" />
        </div>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  )
}
