import axios from "axios"
import { useEffect, useState } from "react";

export const useRatesData = () => {
    const [date, setDate] = useState();
    const [rates, setRates] = useState([]);
    const [status, setStatus] = useState("loading");

    useEffect(() => {
        const getDate = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:5500/src/currencies.json")
                setDate(response.data.date);
                setRates(response.data.rates)
                setStatus("ok")
            } catch (error) {
                setStatus("error")
            }
        };
        setTimeout(getDate, 1000);
    }, []);

    return { date, rates, status }
};