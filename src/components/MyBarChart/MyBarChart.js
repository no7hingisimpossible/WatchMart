import React from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';
import useData from '../../hooks/useData';

const MyBarChart = () => {
    const [datas] = useData();
    return (
        <div>
            <h3>Monthly Sell</h3>
            <BarChart width={600} height={300} data={datas}>
            <XAxis dataKey={'month'}></XAxis>
            <YAxis ></YAxis>
            <Bar dataKey={'sell'} barSize={30} fill="#8884d8"></Bar>
        </BarChart>
        </div>
    );
};

export default MyBarChart;