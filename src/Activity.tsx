import { Calendar } from 'primereact/calendar'
import { Divider } from 'primereact/divider'
import { Dropdown } from 'primereact/dropdown'
import { Sidebar } from 'primereact/sidebar'
import { useState } from 'react'

type ActivityProps = {
	nroActividad: number
	nombreActividad: string
	fechaInicio: Date
	fechaFin: Date
	descripcion: string
	responsable: string | null
	resultado: string
}

const Activity: React.FC<ActivityProps> = ({
	nroActividad,
	nombreActividad,
	fechaInicio,
	fechaFin,
	descripcion,
	responsable,
	resultado,
}) => {
	const [visibleRight, setVisibleRight] = useState<boolean>(false)
	const [dateIni, setDateIni] = useState<Date>(fechaInicio)
	const [dateFin, setDateFin] = useState<Date>(fechaFin)
	const [responsableSeleccionado, setResponsable] = useState<string | null>(responsable)
	const responsables = ['Jairo Maida', 'Mariana Vallejos', 'Emily Callejas', 'Nahuel Torrez', 'Winsor Orellana', 'Walter Sanabria']

	return (
		<>
			<div onClick={() => setVisibleRight(true)} className="flex text-sm bg-red-400 py-2 items-center m-2  rounded-sm cursor-pointer">
				<p className="px-2">Actividad {nroActividad}</p>
				<Divider layout="vertical" />
				<p className="px-2">{nombreActividad}</p>

				{/* Ícono de miembro */}
				{/* <Dropdown ></Dropdown> */}
				{responsable === null ? <p className="px-2">No asignado</p> : <p className="px-2">{responsable}</p>}
			</div>

			<Sidebar header={nombreActividad} visible={visibleRight} position="right" onHide={() => setVisibleRight(false)}>
				<h3 className="text-lg font-bold">Duración</h3>

				<div className="flex border border-black p-1 mt-1 text-xs w-fit">
					<p>Fecha de Inicio</p>
					{/* <input type={'date'} ></input>text-sm */}
					<Divider layout="vertical" />
					<Calendar disabled value={dateIni} onChange={(e) => setDateIni(e.value)} dateFormat="dd/mm/yy"></Calendar>
					<Divider layout="vertical" />
					<p>Í</p>
				</div>
				<div className="flex border border-black p-1 mt-1 text-sm w-fit">
					<p>Fecha de Fin</p>
					{/* <input type={'date'} ></input>text-sm */}
					<Divider layout="vertical" />
					<Calendar disabled value={dateFin} onChange={(e) => setDateFin(e.value)} dateFormat="dd/mm/yy"></Calendar>
					<Divider layout="vertical" />
					<p>Í</p>
				</div>

				<h3 className="text-lg font-bold">Descripción</h3>
				<p className="text-sm border border-black p-1 mt-1">{descripcion}</p>
				<h3 className="text-lg font-bold mt-2">Responsable</h3>
				<div className="flex mt-2">
					<p className="text-sm p-1 mt-1">Persona asignada</p>
					<Dropdown
						className="w-2 text-sm"
						placeholder="Nombre de Responsable"
						onChange={(e) => setResponsable(e.value)}
						options={responsables}
						value={responsableSeleccionado}
						showClear
						disabled
					/>
				</div>

				{/* {responsable === null ?  :  <Dropdown /> } */}
				{/* <p className="text-sm p-1 mt-1">Persona asignada </p> */}
				<h3 className="text-lg font-bold mt-2">Resultado</h3>
				<p className="text-sm border border-black p-1 mt-1">{resultado}</p>
			</Sidebar>
		</>
	)
}

export default Activity
