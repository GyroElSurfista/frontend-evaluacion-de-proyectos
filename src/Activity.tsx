import { Divider } from 'primereact/divider'
import { Dropdown } from 'primereact/dropdown'
import { Sidebar } from 'primereact/sidebar'
import { useState } from 'react'

type ActivityRowProps = {
	nroActividad: number
	fechaInicio: Date
	fechaFin: Date
	descripcion: string
	responsable: string | null
	resultado: string
}

const Activity: React.FC<ActivityRowProps> = ({ nroActividad, descripcion, responsable }) => {
	const [visibleRight, setVisibleRight] = useState<boolean>(false)
	return (
		<>
			<div onClick={() => setVisibleRight(true)} className="flex text-sm bg-red-400 py-2 items-center m-2 rounded-sm w-fit">
				<p className="px-2">Actividad {nroActividad}</p>
				<Divider layout="vertical" />
				<p className="px-2">{descripcion}</p>
				{/* Ícono de miembro */}
				{/* <Dropdown ></Dropdown> */}
				{responsable === null ? <p className="px-2">No asignado</p> : <p className="px-2">{responsable}</p>}
			</div>
			<Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)}>
				Holiwi
			</Sidebar>
		</>
	)
}

export default Activity
