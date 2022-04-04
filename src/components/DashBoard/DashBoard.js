import MyBarChart from '../MyBarChart/MyBarChart';
import MyLineChart from '../MyLineChart/MyLineChart';
import './Dashboard.css'

const DashBoard = () => {

    return (
        <div className='dashboard-container'>
            <MyLineChart></MyLineChart>
            <MyBarChart></MyBarChart>
        </div>

    );
};

export default DashBoard;