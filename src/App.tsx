import React, { useState } from 'react'
import { Button } from './compos/Button';
import { ShareIcon } from './assets/icons/ShareIcon'
import { PlusIcon } from './assets/icons/PlusIcon';
import { Card } from './compos/Crad';
import { ContentModel } from './compos/ContentModel';
import { SideBar } from './compos/Sidebar';

function App() {

  const [modelopen, setModelOpen] = useState(false)
  return (
     <div>
      <div><SideBar /></div>
      <div className='p-4 ml-72 min-h-screen bg-grey-100'>
      <ContentModel open={modelopen} close={() => {
        setModelOpen(false);
      }} />
    <div className='flex justify-end gap-4'>
    <Button onClick = {() => {
      setModelOpen(true)
    } } varient='primary' text = "Add content" startIcon={<PlusIcon />} size = 'sm'/>
    <Button varient='secondary' text = "Share Content" startIcon={<ShareIcon />} size='sm' />
    </div>
    <div className='flex gap-4'>
      <div className='w-72 h-24'>
        <Card type ={'twitter'}title={'dancing robot'} link = {'https://twitter.com/Reza_Zadeh/status/1344009123004747778?ref_src=twsrc%5Etfw'}/>
      </div>
     <Card type ={'youtube'}title={'js concept'} link = {'https://youtu.be/lkIFF4maKMU?si=TBL-jWsjEuAt4-S1'}/>
    </div>
     </div>
     </div>
  ) 
};


export default App;