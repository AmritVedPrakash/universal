import React from 'react'
import Quality from '../components/qualities/Quality';

import QualityAssurance from '../components/qualities/QualityAssurance';
import Trainings from '../components/qualities/Trainings';



export default function Qualities() {
  return (
    <div>
        <Quality/>
        
        <Trainings/>
        <QualityAssurance/>
    </div>
  )
}
