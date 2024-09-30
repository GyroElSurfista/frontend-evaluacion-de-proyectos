import './ObjectiveAccordion.css'

// Propio de ActivityPage
import Activity from '../../../ActivityPage/Components/Activity'

// Propio de ObjectiveAccordion
import { useState } from 'react'
import { ActivityProps } from '../../ObjectivePage'
interface Objective {
  iniDate: string
  finDate: string
  objective: string
  valueP: string
}

interface ObjectiveAccordionProps {
  objective: Objective
  indexObj: number

  activities: ActivityProps[]
  handleActivityClick: (activity: ActivityProps) => void
  handleAddActivityClick: () => void
  handleDeleteActivityClick: (activityIndex: number) => void
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  const day = date.getDate().toString().padStart(2, '0') // Añadir 0 si es menor a 10
  const month = (date.getMonth() + 1).toString().padStart(2, '0') // Los meses empiezan desde 0
  return `${day}/${month}`
}

const ObjectiveAccordion: React.FC<ObjectiveAccordionProps> = ({
  objective,
  indexObj,
  activities,
  handleActivityClick,
  handleAddActivityClick,
  handleDeleteActivityClick,
}) => {
  // Propio de ObjectiveAccordion
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="bg-[#e0e3ff] rounded my-3">
      <div className="hover:bg-[#c6caff] w-full border rounded border-[#c6caff] p-4" onClick={toggleAccordion}>
        <div className="flex flex-row w-full justify-between items-center">
          <div className="w-auto border-r-2 pr-2 border-[#c6caff]">
            <span className="text-center text-[#1c1c1c] text-lg font-semibold">Objetivo {indexObj}</span>
          </div>
          <div className="w-9/12 text-start">
            <span className="bg-red-200 rounded-xl text-sm p-1 text-gray-600 font-normal">{formatDate(objective.iniDate)}</span> -
            <span className="bg-indigo-200 rounded-xl text-sm p-1 ml-1 text-gray-600 font-normal">{formatDate(objective.finDate)}</span>
          </div>
          <div className="w-auto pl-3 flex justify-items-end border-l-2 border-[#c6caff]">
            <button className="button-primary">Ver entregable</button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="p-4 text-gray-600">
          <p>{objective.objective}</p>

          {activities.map((activity, index) => (
            <Activity
              key={activity.nroActividad}
              nroActividad={index + 1}
              nombreActividad={activity.nombreActividad}
              fechaInicio={activity.fechaInicio}
              fechaFin={activity.fechaFin}
              descripcion={activity.descripcion}
              responsable={activity.responsable}
              resultado={activity.resultado}
              onClick={() => handleActivityClick(activity)}
              onDelete={() => handleDeleteActivityClick(index)}
            />
          ))}
          <button onClick={handleAddActivityClick} className="button-primary">
            + Nueva Actividad
          </button>
        </div>
      )}
    </div>
  )
}

export default ObjectiveAccordion
