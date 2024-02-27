
import { useContext } from 'react';
import './init.css'
// import { ThemeContext } from '../../App';

export const InitSpin = ()=>{

    // const name = useContext(ThemeContext);

    return(<>

        {/* <ThemeContext.Consumer> */}
        

        <div>
            <div className='init'>

            </div>
            <p className='sam_abs' style={{
                color:'#333', 
                fontSize:'15.6px', 
                wordSpacing:'1px',
                letterSpacing:'1px'
            }}> {name=> name}      Please wait...</p>

        </div>
        
        {/* </ThemeContext.Consumer> */}
        
    </>)
};