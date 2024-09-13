import { Divider } from 'primereact/divider'

type ActivityProps = {
	nroActividad: number
	nombreActividad: string
	fechaInicio: Date
	fechaFin: Date
	descripcion: string
	responsable: string | null
	resultado: string
	onClick: () => void
}

const Activity: React.FC<ActivityProps> = ({
	nroActividad,
	nombreActividad,
	fechaInicio,
	fechaFin,
	descripcion,
	responsable,
	resultado,
	onClick,
}) => {
	return (
		<div onClick={onClick} className="flex flex-grow text-sm bg-red-400 py-2 items-center m-2 rounded-sm cursor-pointer">
			<p className="px-2">Actividad {nroActividad}</p>
			<Divider layout="vertical" />
			<p className="px-2">{nombreActividad}</p>
			{responsable === null ? <p className="px-2">No asignado</p> : <p className="px-2">{responsable}</p>}
		</div>
	)
}

export default Activity
