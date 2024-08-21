import { Outlet,Link } from "react-router-dom";
const Dashboard =()=>{
    return(
            <div>
                <h3>Dashboard</h3>
                    <nav>
                        <Link to="/dashboard/line">Line Chart</Link>| <Link to="/dashboard/bar">Bar Chart</Link>| <Link to="/dashboard/pie">Pie Chart</Link>
                    </nav>
                    <Outlet/>
                    { /* this will render nested routes  */}
            </div>
    );
}
export default Dashboard;
