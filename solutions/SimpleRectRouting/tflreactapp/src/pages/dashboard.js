import { Link,Outlet, Route, Routes } from "react-router-dom";
import PieChart from "../components/dashboards/piechart";
import LineChart from "../components/dashboards/linechart";
import Barchart from "../components/dashboards/barchart";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <nav>
                <ul className="dashboard-nav">
                    <li><Link to="/dashboard/piechart">Pie Chart</Link></li>
                    <li><Link to="/dashboard/linechart">Line Chart</Link></li>
                    <li><Link to="/dashboard/barchart">Bar Chart</Link></li>
                </ul>
            </nav>
           <hr/>
           <h3>Welcome to the Dashboard</h3>
            <Outlet/>
            <h4>Here you can find various charts and data visualizations.</h4>
        </div>
    );
}

    export default Dashboard;