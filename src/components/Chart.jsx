import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    uv: 4000,
  
  },
  {
    name: 'Feb',
    uv: 3000,
    
  },
  {
    name: 'Mar',
    uv: 2000,
   
  },
  {
    name: 'Apr',
    uv: 2780,
   
  },
  {
    name: 'May',
    uv: 1890,
   
  },
  {
    name: 'Jun',
    uv: 2390,

  },
  {
    name: 'Jul',
    uv: 3490,
   
  },
  {
    name: 'Aug',
    uv: 3490,
  },
  {
    name: 'Sep',
    uv: 3490,
  },
  {
    name: 'Oct',
    uv: 3490,
  },
  
  {
    name: 'Nov',
    uv: 3490,
  },
  {
    name: 'Dec',
    uv: 3490,
  },
];


export function ChartBox () {
  

  
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip  />
          <Bar dataKey="uv" fill="#82ca9d" radius={15} activeBar={<Rectangle  />} />
        </BarChart>
      </ResponsiveContainer>
    );
  }

