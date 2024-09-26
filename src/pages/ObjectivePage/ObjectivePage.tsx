import { useState } from 'react'
import ObjectiveAccordion from './Components/ObjectiveAccordion/ObjectiveAccordion'
import NewObjectiveModal from './Components/NewObjectiveModal/NewObjectiveModal'

interface Objective {
  iniDate: string
  finDate: string
  objective: string
  valueP: string
}

const ObjectivePage = () => {
  const [objectives, setObjectives] = useState<Objective[]>([]) // Estado para almacenar los objetivos

  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  // Función para añadir un nuevo objetivo
  const handleCreateObjective = (newObjective: Objective) => {
    setObjectives([...objectives, newObjective])
  }

  return (
    <div className='px-2 mx-6'>
      <h2 className="text-2xl font-bold">Objetivos</h2>
      <hr className="border-[1.5px] border-[#c6caff] my-3" />
      {objectives.map((obj, index) => (
        <ObjectiveAccordion objective={obj} indexObj={index + 1} key={index} />
      ))}

      <hr className="border-[1.5px] border-[#c6caff] mt-4" />
      <div className="flex justify-center pt-3">
        <button onClick={openModal} className="button-primary">
          Nuevo Objetivo
        </button>
      </div>

      <NewObjectiveModal isOpen={isModalOpen} onClose={closeModal} onCreate={handleCreateObjective} />
    </div>
  )
}

export default ObjectivePage
