import { Accordion, AccordionTab } from 'primereact/accordion'
import { Button } from 'primereact/button'

import './ObjectiveAccordion.css'
interface Objective {
	iniDate: string
	finDate: string
	objective: string
	valueP: string
}

interface ObjectiveAccordionProps {
	objectives: Objective[]
}

const formatDate = (dateString: string) => {
	const date = new Date(dateString);
	const day = date.getDate().toString().padStart(2, '0'); // Añadir 0 si es menor a 10
	const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Los meses empiezan desde 0
	return `${day}/${month}`;
  };

const ObjectiveAccordion: React.FC<ObjectiveAccordionProps> = ({ objectives }) => {
	return (
		<div className="">
			<Accordion multiple activeIndex={[0]}>
				{objectives.map((obj, index) => (
					<AccordionTab
					key={index}
						headerTemplate={
							<div className="flex flex-row w-full justify-between ">
								<div className="w-auto border-r-2 px-2">
									<span>Objetivo {index + 1}</span>
								</div>
								<div className="w-9/12 text-start px-2">
									<span className="bg-red-200 rounded-xl text-sm p-1 text-gray-600 font-normal">{formatDate(obj.iniDate)}</span> -
									<span className="bg-indigo-200 rounded-xl text-sm p-1 ml-1 text-gray-600 font-normal">{formatDate(obj.finDate)}</span>
								</div>
								<div className="w-auto pl-3 flex justify-items-end border-l-2">
									<Button label="Ver entregable" size="small" />
								</div>
							</div>
						}
					>
						<p className="m-0">
							{obj.objective}
						</p>
					</AccordionTab>
				))}
			</Accordion>
		</div>
	)
}

export default ObjectiveAccordion
