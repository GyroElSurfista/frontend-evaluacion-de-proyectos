import { useState } from 'react'
import { Toolbar } from 'primereact/toolbar'
import { Dialog } from 'primereact/dialog'
import Activity from './Activity'
import { Dropdown } from 'primereact/dropdown'
import { Divider } from 'primereact/divider'
import { Calendar } from 'primereact/calendar'

// Define el tipo para las actividades
type ActivityProps = {
	nroActividad: number
	nombreActividad: string
	fechaInicio: Date
	fechaFin: Date
	descripcion: string
	responsable: string | null
	resultado: string
}

// Tipo para el estado de la actividad seleccionada
type SelectedActivityState = ActivityProps | null

function PruebasActivity() {
	const [selectedActivity, setSelectedActivity] = useState<SelectedActivityState>(null)
	const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)

	const responsables = ['Jairo Maida', 'Mariana Vallejos', 'Emily Callejas', 'Nahuel Torrez', 'Winsor Orellana', 'Walter Sanabria']

	const activities: ActivityProps[] = [
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
	]

	const handleActivityClick = (activity: ActivityProps) => {
		setSelectedActivity(activity)
		setIsDialogOpen(true)
	}

	const handleDialogClose = () => {
		setIsDialogOpen(false)
		setSelectedActivity(null)
	}

	const handleResponsableChange = (e: any) => {
		if (selectedActivity) {
			setSelectedActivity({
				...selectedActivity,
				responsable: e.value,
			})
		}
	}

	return (
		<>
			<Toolbar
				end={
					<h3>
						Hola Mundo <br /> para no tapar
					</h3>
				}
			/>

			<div className={`flex p-4 transition-all duration-300 ${isDialogOpen ? 'mr-[35vw]' : 'w-full'}`}>
				<div className="flex-1">
					{activities.map((activity) => (
						<Activity key={activity.nroActividad} {...activity} onClick={() => handleActivityClick(activity)} />
					))}
				</div>

				<Dialog
					header={selectedActivity?.nombreActividad || ''}
					visible={isDialogOpen}
					onHide={handleDialogClose}
					modal={false}
					position="right"
					className="fixed top-28 w-[35vw] h-full bg-white shadow-lg transition-transform duration-300"
					maskStyle={{ backgroundColor: 'transparent' }}
				>
					{selectedActivity && (
						<>
							<h3 className="text-lg font-bold">Duración</h3>
							<div className="flex border border-black p-1 mt-1 text-xs">
								<p>Fecha de Inicio</p>
								<Divider layout="vertical" />
								<Calendar disabled value={selectedActivity.fechaInicio} dateFormat="dd/mm/yy" />
								<Divider layout="vertical" />
							</div>
							<div className="flex border border-black p-1 mt-1 text-sm">
								<p>Fecha de Fin</p>
								<Divider layout="vertical" />
								<Calendar disabled value={selectedActivity.fechaFin} dateFormat="dd/mm/yy" />
								<Divider layout="vertical" />
							</div>
							<h3 className="text-lg font-bold">Descripción</h3>
							<p className="text-sm border border-black p-1 mt-1">{selectedActivity.descripcion}</p>
							<h3 className="text-lg font-bold mt-2">Responsable</h3>
							<div className="flex mt-2">
								<p className="text-sm p-1 mt-1">Persona asignada</p>
								<Dropdown
									className="w-2 text-sm"
									placeholder="Nombre de Responsable"
									onChange={handleResponsableChange}
									options={responsables.map((responsable) => ({ label: responsable, value: responsable }))}
									value={selectedActivity.responsable}
									showClear
									disabled
								/>
							</div>
							<h3 className="text-lg font-bold mt-2">Resultado</h3>
							<p className="text-sm border border-black p-1 mt-1">{selectedActivity.resultado}</p>
						</>
					)}
				</Dialog>
			</div>
		</>
	)
}

export default PruebasActivity
