import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar'
import Sidebar from '../Sidebar'

const Layout = () => {
  return (
    <>
      <NavBar />
      <div className="sm:flex">
        <Sidebar />
        <main className="sm:flex-grow p-6 h-[calc(100vh-5rem)]">
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default Layout
