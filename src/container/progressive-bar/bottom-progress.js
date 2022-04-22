import React from 'react';
import { Progress } from 'antd';
export default function BottomProgress({ sucsess, progressive, total }) {
    return (
        <div className='container'>
            <Progress trailColor='black'
                strokeColor={{
                    '0%': '#fff',
                    '100%': '#87d068',
                }}
                percent={progressive}
            />
            <Progress trailColor='black' strokeColor='blue' percent={sucsess} />
            <Progress trailColor='black' strokeColor='red' percent={total} />
        </div>
    )
}