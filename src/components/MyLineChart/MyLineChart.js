import React, { useEffect, useState } from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';
import useData from '../../hooks/useData';

const MyLineChart = () => {
    const [datas] = useData();

    return (

        <div>
            <h3>Revenue Chart</h3>
            <LineChart width={400} height={500} data={datas}>
                <Line type='monotone' dataKey={'revenue'} stroke="#8884d8"></Line>
                <XAxis dataKey={'investment'}></XAxis>
                <YAxis></YAxis>
            </LineChart>
        </div>

    );
};

export default MyLineChart;