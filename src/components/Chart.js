import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

export default function Chart() {
    const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }, { name: 'Page B', uv: 780, pv: 400, amt: 1400 }, { name: 'Page C', uv: 8500, pv: 2400, amt: 3500 }, { name: 'Page D', uv: 286, pv: 240, amt: 300 }];

    return (
        <LineChart width={400} height={400} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
        </LineChart>
    )
}