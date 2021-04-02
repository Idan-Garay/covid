import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import styles from  './Charts.module.css';

const Charts = () => {
    const {dailyData, setDailyData} = setState({});

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        fetchAPI();
    });

    const lineChart = (<Line data={{
        labels: '',
        dataSets: [{}, {}],
    }}/>);
    //50:02

    return (
        <div>
            <h1>Charts</h1>
        </div>
    )
}

export default Charts
