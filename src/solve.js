
import { useEffect, useState } from "react";
import App from "./App";
import { createPortal } from "react-dom";
import { InitSpin } from "./component/initial-spin/initial-spin";

export const Solve = ()=>{

    const [d, setD] = useState(false);

    useEffect(()=>{
        setD(true)
        setTimeout(() => {
            setD(false);
        }, 3500);
    }, []);

    const swap = createPortal(<> <App /> </>, document.querySelector('.os_webkit_moz_ms_fox'));

    return(<>
        <main>
            {
                d ?
                    <InitSpin />
                :
                    swap
            }
        </main>
    </>)
};