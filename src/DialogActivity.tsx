import { DatePicker } from '@mui/x-date-pickers'
import Select from '@mui/material/Select'
import Divider from '@mui/material/Divider'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { ActivityProps } from './PruebasActivity'
import { MenuItem } from '@mui/material'

type DialogActivityProps = {
	activity: ActivityProps | null
	isVisible: boolean
	onHide: () => void
	onSave: () => void
	onChange: (e: any) => void
	isEditMode: boolean
	responsables: string[]
}

const DialogActivity = ({ activity, isVisible, onHide, onSave, onChange, isEditMode, responsables }: DialogActivityProps) => (
	<div className={`shadow-lg transform transition-transform ${isVisible ? 'translate-x-0 w-[35%] p-4' : 'translate-x-full w-[0vw]'}`}>
		{activity && (
			<>
				<div className="flex justify-between items-center mb-4">
					<h2 className="text-xl font-bold">{activity?.nombreActividad || 'Nueva Actividad'}</h2>
					<Button onClick={onHide}>X</Button>
				</div>
				<h3 className="text-lg font-bold">Nombre de la Actividad</h3>
				<TextField id="standard-nasoc" variant="standard"></TextField>
				{/* <InputLabel
                    name="nombreActividad"
                    value={activity.nombreActividad}
                    onChange={onChange}
                    className="mb-3 w-full"
                    disabled={!isEditMode}
                /> */}
				<h3 className="text-lg font-bold">Duración</h3>
				<div className="flex border border-black p-1 mt-1 text-xs">
					<p>Fecha de Inicio</p>
					// <Divider />
					<DatePicker label="Basic date picker" />
					{/* <Calendar
                    value={activity.fechaInicio}
                    onChange={(e) => onChange && onChange({ target: { name: 'fechaInicio', value: e.value } })}
                    dateFormat="dd/mm/yy"
                    disabled={!isEditMode}
                /> */}
					<Divider />
				</div>
				<div className="flex border border-black p-1 mt-1 text-xs">
					<p>Fecha de Fin</p>
					<Divider />
					{/* <Calendar
                    value={activity.fechaFin}
                    onChange={(e) => onChange && onChange({ target: { name: 'fechaFin', value: e.value } })}
                    dateFormat="dd/mm/yy"
                    disabled={!isEditMode}
                /> */}
					<Divider />
				</div>
				<h3 className="text-lg font-bold">Descripción</h3>
				<TextField id="standard-nasoc" variant="standard"></TextField>
				{/* <InputText
                    name="descripcion"
                    value={activity.descripcion}
                    onChange={onChange}
                    className="text-sm border border-black p-1 mt-1"
                    disabled={!isEditMode}
                /> */}
				<h3 className="text-lg font-bold">Responsable</h3>
				<div className="flex mt-2">
					<p className="text-sm p-1 mt-1">Persona asignada</p>
					<Select
						value={activity.responsable}
						// options={responsables.map((responsable) => ({ label: responsable, value: responsable }))}
						onChange={(e) => onChange && onChange({ target: { name: 'responsable', value: e.value } })}
						placeholder="Nombre de Responsable"
						disabled={!isEditMode}
					>
						{responsables.map((responsable, index) => {
							return <MenuItem value={index + 1}>{responsable}</MenuItem>
						})}
					</Select>
				</div>
				<h3 className="text-lg font-bold mt-2">Resultado</h3>
				<TextField id="standard-nasoc" variant="standard"></TextField>
				{/* <InputText
                    name="resultado"
                    value={activity.resultado}
                    onChange={onChange}
                    className="text-sm border border-black p-1 mt-1"
                    disabled={!isEditMode}
                /> */}
				{isEditMode && (
					<Button variant="contained" onClick={onSave}>
						Guardar actividad
					</Button>
				)}
			</>
		)}
	</div>
)

export default DialogActivity
