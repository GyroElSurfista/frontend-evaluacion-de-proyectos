import logo from '../assets/Logo Project.png'

const NavBar = () => {
  return (
    <div className="w-full h-20 bg-[#e0e3ff] shadow">
      <div className="flex h-full py-4 mx-4 pl-10">
        <img src={logo} alt="Logo Proyecto Cocoa" />
      </div>
    </div>
  )
}

export default NavBar
