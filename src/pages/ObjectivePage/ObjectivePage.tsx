import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { Divider } from 'primereact/divider'
import { useState } from 'react'
import { useForm } from 'react-hook-form' // Importa useForm desde react-hook-form
import ObjectiveAccordion from './Components/ObjectiveAccordion/ObjectiveAccordion'

interface ObjectiveFormData {
	iniDate: string
	finDate: string
	objective: string
	valueP: string
}

const ObjectivePage = () => {
	const [visible, setVisible] = useState(false)
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ObjectiveFormData>() 

	const onSubmit = (data: ObjectiveFormData) => {
		console.log(data)
		setVisible(false)
		reset()
	}

	const handleClose = () => {
		setVisible(false)
		reset() 
	}

	const headerElement = (
		<div className="inline-flex align-items-center justify-content-center gap-2">
			<span className="font-bold white-space-nowrap">Añadir un nuevo objetivo</span>
		</div>
	)

	const footerContent = (
		<div className="">
			<Button label="Cancelar" onClick={handleClose} autoFocus severity="secondary" outlined />
			<Button label="Crear" onClick={handleSubmit(onSubmit)} autoFocus className="ml-3" />
		</div>
	)

	return (
		<div>
			<h2 className="text-2xl font-bold">Objetivos</h2>
			<Divider />
			<ObjectiveAccordion />

			<Divider />
			<div className="flex justify-center">
				<Button label="Nuevo Objetivo" onClick={() => setVisible(true)} icon="pi pi-plus" />
			</div>
			<Dialog
				visible={visible}
				modal
				header={headerElement}
				footer={footerContent}
				style={{ width: '28rem' }}
				onHide={() => setVisible(false)}
			>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="grid grid-cols-2 gap-4">
						<div className="">
							<label htmlFor="iniDate" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
								Fecha de inicio
								<span className="text-[#f60c2e] text-base font-normal">*</span>
							</label>
							<input
								type="date"
								id="iniDate"
								{...register('iniDate', { required: 'La fecha de inicio es obligatoria' })} // Asocia el campo a React Hook Form
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							/>
							{errors.iniDate && <p className="text-red-500 text-sm">{errors.iniDate.message}</p>}
						</div>
						<div className="col-2">
							<label htmlFor="finDate" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
								Fecha de fin
								<span className="text-[#f60c2e] text-base font-normal">*</span>
							</label>
							<input
								type="date"
								id="finDate"
								{...register('finDate', { required: 'La fecha de fin es obligatoria' })}
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							/>
							{errors.finDate && <p className="text-red-500 text-sm">{errors.finDate.message}</p>}
						</div>
					</div>
					<div className="pt-4">
						<label htmlFor="objective" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
							Objetivo
							<span className="text-[#f60c2e] text-base font-normal">*</span>
						</label>
						<input
							type="text"
							id="objective"
							{...register('objective', { required: 'El objetivo es obligatorio' })}
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="¿Cuál es el objetivo?"
						/>
						{errors.objective && <p className="text-red-500 text-sm">{errors.objective.message}</p>}
					</div>
					<div className="pt-4">
						<div className="grid grid-cols-5 gap-4">
							<div className="col-span-3">
								<label htmlFor="valueP" className="block mb-1 text-base font-normal text-[#1c1c1c] dark:text-white">
									Valor porcentual
									<span className="text-[#f60c2e] text-base font-normal">*</span>
								</label>
								<input
									type="number"
									id="valueP"
									{...register('valueP', {
										required: 'El valor porcentual es obligatorio',
										pattern: {
											value: /^[0-9]+(\.[0-9]{1,2})?$/,
											message: 'Por favor, ingresa un número válido',
										},
									})}
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="¿Cuál es el valor del objetivo?"
								/>
								{errors.valueP && <p className="text-red-500 text-sm">{errors.valueP.message}</p>}
							</div>
							<div className="text-center pt-4 col-span-2">
								<p className="text-lg font-semibold">Equivalencia:</p>
								<p className="text-gray-500">00.00</p>
							</div>
						</div>
					</div>
				</form>
			</Dialog>
		</div>
	)
}

export default ObjectivePage
