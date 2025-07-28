import React, { useEffect, useState } from 'react'
import { Button } from '../compos/Button';
import { ShareIcon } from '../assets/icons/ShareIcon'
import { PlusIcon } from '../assets/icons/PlusIcon';
import { Card } from '../compos/Crad';
import { ContentModel } from '../compos/ContentModel';
import { SideBar } from '../compos/Sidebar';
import { UseContent } from '../hooks/useContent';

function DashBoard() {

  const [modelopen, setModelOpen] = useState(false);

  

  const {contents, refresh} = UseContent();

  useEffect(() => {
    refresh();
  }, [modelopen])
     
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
      <div className='flex gap-4 pt-4 flex-wrap'>
        {contents.map(({type, link, title}, idx) => (
          <Card key={idx} type={type} title={title} link={link} />
        ))}
      </div>
     </div>
     </div>
  ) 
};


export default DashBoard;