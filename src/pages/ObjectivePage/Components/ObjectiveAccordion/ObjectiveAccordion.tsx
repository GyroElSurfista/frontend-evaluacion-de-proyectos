import './ObjectiveAccordion.css'

// Propio de ActivityPage
import Button from '@mui/material/Button'
import Activity from '../../../ActivityPage/Components/Activity'
import DialogActivity from '../../../ActivityPage/Components/DialogActivity'
import { Dayjs } from 'dayjs'

export type ActivityProps = {
  nroActividad: number
  nombreActividad: string
  fechaInicio: Date
  fechaFin: Date
  descripcion: string
  responsable: string | null
  resultado: string
}

type SelectedActivityState = ActivityProps | null

// Propio de ObjectiveAccordion
import { useState } from 'react'
interface Objective {
  iniDate: string
  finDate: string
  objective: string
  valueP: string
}

interface ObjectiveAccordionProps {
  objective: Objective
  indexObj: number
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  const day = date.getDate().toString().padStart(2, '0') // Añadir 0 si es menor a 10
  const month = (date.getMonth() + 1).toString().padStart(2, '0') // Los meses empiezan desde 0
  return `${day}/${month}`
}

const ObjectiveAccordion: React.FC<ObjectiveAccordionProps> = ({ objective, indexObj }) => {
  // Propio de ActivityPage
  const [activities, setActivities] = useState<ActivityProps[]>([
    {
      nroActividad: 1,
      nombreActividad: 'Entrevista a nuestro tutor TIS',
      fechaInicio: new Date(),
      fechaFin: new Date(),
      descripcion: 'Descripcion 1 - Elicitación de requerimientos para obtener el Product Backlog.',
      responsable: null,
      resultado: 'Completar las historias de usuario con su estimación y priorización correspondiente',
    },
    {
      nroActividad: 2,
      nombreActividad: 'Observar procedimiento de evaluaciones TIS',
      fechaInicio: new Date(),
      fechaFin: new Date(),
      descripcion:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mi massa, posuere vel interdum a, posuere at mauris. Cras sem est, malesuada sed libero eget, egestas vulputate turpis. Vivamus eu placerat sem. Vestibulum lobortis velit sit amet nunc faucibus, vel viverra ex accumsan. Ut imperdiet nunc neque, nec sodales risus faucibus vitae. Mauris interdum nulla in elementum vulputate. Phasellus sollicitudin vehicula ornare. Morbi id mauris fermentum, consequat nisl nec, hendrerit neque. Maecenas pharetra mattis quam. Integer quis fringilla nibh, quis lobortis massa. Quisque non vehicula enim. Nullam non lorem in sem vulputate faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
      responsable: 'Winsor Orellana',
      resultado: 'Completar las historias de usuario con su estimación y priorización correspondiente',
    },
    {
      nroActividad: 10,
      nombreActividad: 'Prototipado del diseño',
      fechaInicio: new Date(),
      fechaFin: new Date(),
      descripcion: 'Prototipado del diseño para discutirlo junto al tutor TIS.',
      responsable: null,
      resultado: 'Prototipo base para programar en el frontend.',
    },
  ])
  const [selectedActivity, setSelectedActivity] = useState<SelectedActivityState>(null)
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)
  const [isEditMode, setIsEditMode] = useState<boolean>(false)
  const responsables = ['Jairo Maida', 'Mariana Vallejos', 'Emily Callejas', 'Nahuel Torrez', 'Winsor Orellana', 'Walter Sanabria']

  const handleActivityClick = (activity: ActivityProps) => {
    setSelectedActivity(activity)
    setIsEditMode(false)
    setIsDialogOpen(true)
  }

  const handleDialogClose = () => {
    setIsDialogOpen(false)
    setSelectedActivity(null)
  }

  const handleNewActivityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setSelectedActivity((prevState) => (prevState ? { ...prevState, [name]: value } : null))
  }

  const handleNewInitialDateActivityChange = (value: Dayjs | null) => {
    if (value) {
      setSelectedActivity((prevState) => (prevState ? { ...prevState, fechaInicio: value.toDate() } : null))
    }
  }

  const handleNewFinalDateActivityChange = (value: Dayjs | null) => {
    if (value) {
      setSelectedActivity((prevState) => (prevState ? { ...prevState, fechaFin: value.toDate() } : null))
    }
  }

  const handleAddNewActivity = () => {
    if (selectedActivity) {
      setActivities((prevActivities) => [...prevActivities, { ...selectedActivity, nroActividad: activities.length + 1 }])
      setIsDialogOpen(false)
      setSelectedActivity(null)
    }
  }

  const handleAddActivityClick = () => {
    setSelectedActivity({
      nroActividad: activities.length + 1,
      nombreActividad: '',
      fechaInicio: new Date(),
      fechaFin: new Date(),
      descripcion: '',
      responsable: null,
      resultado: '',
    })
    setIsEditMode(true)
    setIsDialogOpen(true)
  }

  // Propio de ObjectiveAccordion
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className={'flex overflow-x-hidden'}>
      <div className={`${isDialogOpen ? 'w-[65%] flex-shrink mr-4' : 'w-full'}`}>
        <div className="bg-[#e0e3ff] rounded my-3">
          <div className="hover:bg-[#c6caff] w-full border rounded border-[#c6caff] p-4" onClick={toggleAccordion}>
            <div className="flex flex-row w-full justify-between items-center">
              <div className="w-auto border-r-2 pr-2 border-[#c6caff]">
                <span className="text-center text-[#1c1c1c] text-xl font-semibold">Objetivo {indexObj}</span>
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

              {activities.map((activity) => (
                <Activity
                  key={activity.nroActividad}
                  nroActividad={activity.nroActividad}
                  nombreActividad={activity.nombreActividad}
                  fechaInicio={activity.fechaInicio}
                  fechaFin={activity.fechaFin}
                  descripcion={activity.descripcion}
                  responsable={activity.responsable}
                  resultado={activity.resultado}
                  onClick={() => handleActivityClick(activity)}
                />
              ))}
              <Button variant="contained" onClick={handleAddActivityClick}>
                Agregar actividad
              </Button>
            </div>
          )}
        </div>
      </div>

      <DialogActivity
        activity={selectedActivity}
        isVisible={isDialogOpen}
        onHide={handleDialogClose}
        onSave={handleAddNewActivity}
        onChange={handleNewActivityChange}
        onChangeInitialDate={handleNewInitialDateActivityChange}
        onChangeFinalDate={handleNewFinalDateActivityChange}
        isEditMode={isEditMode}
        responsables={responsables}
      />
    </div>
  )
}

export default ObjectiveAccordion
