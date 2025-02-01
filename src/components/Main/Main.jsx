import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import {Context} from '../../context/Context'
const Main = () => {
    const{onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context)
  return (
    <div className='main'>
        <div className="nav">
            <p>Queri</p>
            <img src={assets.mainlogo} alt=""/>
        </div>
      <div className="main-container">

        {!showResult?
        <><div className="greet">
            <p><span>Hello,SIB.</span></p>
            <p>how can i help you today?..</p>
        </div>
        <div className="cards">
            <div className="card">
                <p>suggest a besautiful place to see on an upcoming trip</p>
                <img src={assets.compass_icon} alt=""/>
            </div>
            <div className="card">
                <p>breifly summarise the concepts of urban planning</p>
                <img src={assets.bulb_icon} alt=""/>
            </div>
            <div className="card">
                <p>brain storm team bonding the activities for work retreat</p>
                <img src={assets.message_icon} alt=""/>
            </div>
            <div className="card">
                <p>improve the readibility of the following code</p>
                <img src={assets.code_icon} alt=""/>
            </div>
        </div></>:<div className='result'>
            <div className="result-titlle">
                <img src={assets.user_icon} alt="" />
                <p>{recentPrompt}</p>
                </div>
                <div className="result-data">

                    <img src={assets.gemini_icon} alt="" />
                    {loading? <div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                    </div>:
                    <p dangerouslySetInnerHTML={{__html:resultData}}></p>}
                </div>
                </div>}

        
        <div className="main-bottom">
            <div className="search-box">
                <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt' />
                <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    {input? <img onClick={()=>onSent()}  src={assets.send_icon} alt="" />:null}
                </div>
            </div>
            <div className="bottom-info">
                gemini may dispaly the info inaccuratley,check the response correctly.
            </div>
        </div>
      </div>
    </div>
  )
}

export default Main
