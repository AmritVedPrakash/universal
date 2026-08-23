import React from 'react'
import Quality from '../components/qualities/Quality';
import Training from "../components/qualities/training";
import QualityAssurance from '../components/qualities/QualityAssurance';



export default function Qualities() {
  return (
    <div>
        <Quality/>
        <Training/>
        <QualityAssurance/>
    </div>
  )
}
