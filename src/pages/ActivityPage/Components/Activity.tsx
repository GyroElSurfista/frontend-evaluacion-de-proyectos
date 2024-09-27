import { AccountCircle } from '@mui/icons-material'
import Divider from '@mui/material/Divider'

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

const Activity: React.FC<ActivityProps> = ({ nroActividad, nombreActividad, responsable, onClick }) => {
	return (
		<div onClick={onClick} className="flex text-sm bg-purple-50 my-2 items-center cursor-pointer">
			<div className="flex w-[12%] items-center justify-between">
				<p className="px-[10%] text-center">Actividad {nroActividad}</p>
				<Divider orientation="vertical" flexItem variant="middle" color='black'/>
			</div>

			<p className="truncate w-[75%] flex-shrink px-[2%]">{nombreActividad}</p>

			<div className="flex w-[15%] items-center md:opacity-0 lg:opacity-100">
				<AccountCircle fontSize="large" />
				<p className="px-[10%]">{responsable === null ? 'No asignado' : responsable}</p>
			</div>
		</div>
	)
}

export default Activity
