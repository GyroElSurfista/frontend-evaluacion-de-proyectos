import { act, useState } from 'react'
import { Toolbar } from 'primereact/toolbar'
import { Button } from 'primereact/button'
import Activity from './Activity'
import DialogActivity from './DialogActivity'

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

function PruebasActivity() {
	const [activities, setActivities] = useState<ActivityProps[]>([
		{
			nroActividad: 1,
			nombreActividad: 'Entrevista a nuestro tutor TIS',
			fechaInicio: new Date(),
			fechaFin: new Date(),
			descripcion: 'Elicitación de requerimientos para obtener el Product Backlog.',
			responsable: null,
			resultado: 'Completar las historias de usuario con su estimación y priorización correspondiente',
		},
		{
			nroActividad: 2,
			nombreActividad: 'Observar procedimiento de evaluaciones TIS',
			fechaInicio: new Date(),
			fechaFin: new Date(),
			descripcion: 'Elicitación de requerimientos para obtener el Product Backlog.',
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

	const handleNewActivityChange = (e: any) => {
		const { name, value } = e.target
		setSelectedActivity((prevState) => (prevState ? { ...prevState, [name]: value } : null))
	}

	const handleAddNewActivity = () => {
		if (selectedActivity) {
			setActivities((prevActivities) => [...prevActivities, { ...selectedActivity, nroActividad: activities.length + 1 }])
			setIsDialogOpen(false)
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

	return (
		<div className="activity-page">
			<Toolbar
				right={() => (
					<h3>
						Hola Mundo <br /> No debe taparse
					</h3>
				)}
			/>

			<div className={`flex p-4 ${isDialogOpen ? 'mr-[50vw]' : 'w-full'}`}>
				<div className="flex-1">
					{activities.map((activity) => (
						<Activity
							key={activity.nroActividad}
							nroActividad={0}
							nombreActividad={activity.nombreActividad}
							fechaInicio={activity.fechaInicio}
							fechaFin={activity.fechaFin}
							descripcion={activity.descripcion}
							responsable={activity.responsable}
							resultado={activity.resultado}
							onClick={() => handleActivityClick(activity)}
						/>
					))}
					<Button label="Agregar Actividad" icon="pi pi-plus" onClick={handleAddActivityClick} />
				</div>

				<DialogActivity
					activity={selectedActivity}
					isVisible={isDialogOpen}
					onHide={handleDialogClose}
					onSave={handleAddNewActivity}
					onChange={handleNewActivityChange}
					isEditMode={isEditMode}
					responsables={responsables}
				/>
			</div>
		</div>
	)
}

export default PruebasActivity
