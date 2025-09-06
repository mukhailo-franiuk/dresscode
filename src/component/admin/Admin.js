import { Outlet } from "react-router-dom";
const Admin = () => {
    return(
        <h1>
            Admin panel
            <Outlet />
        </h1>
    )
}
export default Admin;