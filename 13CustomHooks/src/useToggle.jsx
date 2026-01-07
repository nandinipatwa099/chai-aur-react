import { useState } from "react";

const useToggle = (defaultval) => {
   const [value, setvalue] = useState(defaultval);
   function toggleValue(val) {

    console.log(val);

    if(typeof val!= "boolean"){

        console.log("if");
        setvalue(!value)
    }
    else{
        console.log("else");
        setvalue(val)
    }
   }

   return [value, toggleValue]
}

export default useToggle;