import MyBarChart from '../MyBarChart/MyBarChart';
import MyLineChart from '../MyLineChart/MyLineChart';
import './Dashboard.css'

const DashBoard = () => {

    return (
        <div className="container">
            <div className='dashboard-container'>
            <MyLineChart></MyLineChart>
            <MyBarChart></MyBarChart>
        </div>
        </div>

    );
};

export default DashBoard;