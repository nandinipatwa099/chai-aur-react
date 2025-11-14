// function hello(){
//     return []
// }  // can use built in hooks by custom hooks 

import { useEffect, useState } from "react";

function useCurrencyInfo(currencyInfo){
    const [data, setdata] = useState({})  // value written by useState
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currencyInfo}.json`)
        .then((res) => res.json())
        .then((res) => setdata(res[currencyInfo]))
        console.log(data);

    }, [currencyInfo])
    console.log(data);
    return data;
}

export default useCurrencyInfo; 
// custom hook created phase 1 

