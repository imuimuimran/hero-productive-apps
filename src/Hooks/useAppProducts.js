import axios from "axios";
import { useEffect, useState } from "react";

const useAppProducts = () => {
    const [apProducts, setApProducts] = useState([]);
    const [dataLoading, setDataLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setDataLoading(true)

        axios('../appData.json')
        .then(data => setApProducts(data.data))
        .catch(err => setError(err))
        .finally(() => setDataLoading(false))
    }, [])

    return{ apProducts, dataLoading, error }
}

export default useAppProducts;