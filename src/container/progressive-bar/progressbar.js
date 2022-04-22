import React, { useState } from 'react'
import { Progress } from 'antd';

export default function ProgressiveBar({ progressive }) {
    return (
        <div>
            <Progress trailColor='black'
                strokeColor={{
                    '0%': '#fff',
                    '100%': '#87d068',
                }}
                percent={progressive}
            />
        </div>
    )
}