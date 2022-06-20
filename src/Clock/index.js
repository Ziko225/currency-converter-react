import { useState, useEffect } from "react";
import { Data } from "./styled"

const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <Data>
            {date.toLocaleString(undefined, {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                day: "numeric",
                month: "long",
            })}
        </Data>
    );
};

export default Clock;