import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { Divider } from 'primereact/divider'
import { useState } from 'react'
import ObjectiveAccordion from './Components/ObjectiveAccordion/ObjectiveAccordion'

const ObjectivePage = () => {
	const [visible, setVisible] = useState(false)

	const headerElement = (
		<div className="inline-flex align-items-center justify-content-center gap-2">
			<span className="font-bold white-space-nowrap">Añadir un nuevo objetivo</span>
		</div>
	)

	const footerContent = (
		<div className="">
			<Button label="Cancelar" onClick={() => setVisible(false)} autoFocus severity="secondary" />
			<Button label="Crear" onClick={() => setVisible(false)} autoFocus className="ml-3" />
		</div>
	)

	return (
		<div>
			<h2 className="text-2xl">Objetivos</h2>
			<Divider />
			<ObjectiveAccordion />

			<Divider />
			<div>
				<Button label="Nuevo Objetivo" onClick={() => setVisible(true)} icon='pi pi-plus'/>
				<Dialog
					visible={visible}
					modal
					header={headerElement}
					footer={footerContent}
					style={{ width: '28rem' }}
					onHide={() => {
						if (!visible) return
						setVisible(false)
					}}
				>
					<form>
						<div className="grid grid-cols-2 gap-4">
							<div className="">
								<label htmlFor="iniDate" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
									Fecha de inicio
								</label>
								<input
									type="date"
									id="iniDate"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									required
								/>
							</div>
							<div className="col-2">
								<label htmlFor="finDate" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
									Fecha de fin
								</label>
								<input
									type="date"
									id="finDate"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									required
								/>
							</div>
						</div>
						<div className="pt-4">
							<label htmlFor="objective" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
								Objetivo
							</label>
							<input
								type="text"
								id="objective"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="¿Cuál es el objetivo?"
								required
							/>
						</div>
						<div className="pt-4">
							<div className="grid grid-cols-5 gap-4">
								<div className="col-span-3">
									<label htmlFor="valueP" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
										Valor porcentual
									</label>
									<input
										type="text"
										id="valueP"
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="¿Cuál es el valor del objetivo?"
										required
									/>
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
		</div>
	)
}

export default ObjectivePage
