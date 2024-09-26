import { NavLink } from "react-router-dom"

const Navegacion = () => {
    return (
        <nav className="w-2/12 bg-blue-500 border-r-2 text-white flex flex-col pt-16 px-7 text-base font-extrabold gap-y-9">
            <NavLink to="/dashboard" > DashBoard </NavLink>
            <NavLink to="/inventory" > Inventory </NavLink>
            <NavLink to="/history" > History </NavLink>
            <NavLink to="/config" > Config </NavLink>
        </nav>
    )
}

export default Navegacion