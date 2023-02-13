import React, { useState} from 'react'
import './RightSide.css'
import home from '../../img/home.png'
import noti from '../../img/noti.png'
import comment from '../../img/comment.png'
import {UilSetting} from '@iconscout/react-unicons'
import TrendCard from '../TrendCard/TrendCard'
import ShareModal from '../ProfileModal/ProfileModal'

const RightSide = () => {

  const [modalOpened ,setModalOpened] = useState(false)
  return (
    <div className='RightSide'>
         <div className="navIcons">
            <img src={home} alt="" />
            <UilSetting/>
            <img src={noti} alt="" />
            <img src={comment} alt="" />
         </div>
         <TrendCard/>

         <button className='button r-button' onClick={()=>
            setModalOpened(true)} >
            
            Share
            </button>
            <ShareModal 
            modalOpened={modalOpened} 
            setModalOpened={setModalOpened} 
            />
    </div>
  )
}

export default RightSide