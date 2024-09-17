import { Accordion, AccordionTab } from 'primereact/accordion'
import { Button } from 'primereact/button'

import './ObjectiveAccordion.css'

const ObjectiveAccordion = () => {
	return (
		<div className="">
			<Accordion multiple activeIndex={[0]}>
				<AccordionTab
					headerTemplate={
						<div className="flex flex-row w-full justify-between ">
							<div className="w-auto border-r-2 px-2">
								<span>Objetivo 1</span>
							</div>
							<div className="w-9/12 text-start px-2">
								<span className="bg-red-200 rounded-xl text-sm p-1 text-gray-600 font-normal">02/09</span> -
								<span className="bg-indigo-200 rounded-xl text-sm p-1 ml-1 text-gray-600 font-normal">09/09</span>
							</div>
							<div className="w-auto pl-3 flex justify-items-end border-l-2">
								<Button label="Ver entregable" size="small" />
								<Button icon="pi pi-ellipsis-v" size="small" rounded text className="ml-3 text-black" />
							</div>
						</div>
					}
				>
					<p className="m-0">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
						enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
						in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
						sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</AccordionTab>
				<AccordionTab header="Header II">
					<p className="m-0">
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
						quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
						sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur,
						adipisci velit, sed quia non numquam eius modi.
					</p>
				</AccordionTab>
				<AccordionTab header="Header III">
					<p className="m-0">
						At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos
						dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
						mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore,
						cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
					</p>
				</AccordionTab>
			</Accordion>
		</div>
	)
}

export default ObjectiveAccordion
