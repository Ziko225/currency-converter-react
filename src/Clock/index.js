import React from 'react';
import { useCurrentDate } from './useCurrentDate.js'

const Clock = () => {

    const date = useCurrentDate();

    return (
        <p className='date'>
            {date.toLocaleString(date, {
                weekday: "long",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                day: "numeric",
                month: "long",
            })}
        </p>
    )
}

export default Clock