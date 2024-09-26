import { useState } from 'react'
import ObjectivePage from '../pages/ObjectivePage/ObjectivePage'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)


  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className={`${isOpen ? 'w-72' : 'w-20'} h-[calc(100vh-5rem)] bg-white shadow border-r-4 border-[#e7e7e7] transition-all duration-300 relative`}>

          <button onClick={toggleSidebar} className="focus:outline-none -right-2 top-8 bg-[#d1d1d1] text-white absolute rounded-full">
            {isOpen ? '<' : '>'}
          </button>

        {/* Sidebar content */}
        <nav className={`${isOpen ? 'block' : 'hidden'} pl-16 pt-8`}>
          <h2 className='text-black text-xl font-semibold'>Nombre_Proyecto</h2>
          <ul className='mt-9'>
            <li className="py-4 px-2.5 bg-[#e0e3ff] border-l-2 border-[#6344e7]">
              <a href="#" className="text-[#6344e7] text-base font-normal">
                Objetivos
              </a>
            </li>
            <li className="py-4 px-2.5">
              <a href="#" className="hover:text-gray-300">
                Seguimiento
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-grow p-6 h-[calc(100vh-5rem)]">
        <ObjectivePage/>
      </div>
    </div>
  )
}

export default Sidebar
