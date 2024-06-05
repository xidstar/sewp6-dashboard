import React from 'react';
import { sidebarLinks } from '../data/data';

const Sidebar = () => {
  return (
    <div className='w-[300px] h-screen bg-sewp-skyblue p-5'>
      <div className="profile pb-10">
        <div className="logo-wrapper flex items-center">
            <img src="" alt="" />
            <h3 className='ml-5 font-bold'>SEWP Customer</h3>
        </div>
        <div className="name leading-4">
            <h2 className='font-bold text-lg'>Joyce Harrington</h2>
            <p>Department of Interior</p>
        </div>
      </div>
      <div className="pages">
        {
            sidebarLinks.map((link, index) => (
                <div key={index} className='pb-5'>
                    <h3 className='font-bold uppercase text-sm'>{link.title}</h3>
                    {
                        link.pages.map((page, id) => (
                            <h4 key={id}><span className='w-[8px]'>{page.icon}</span> {page.name}</h4>
                        ))
                    }
                </div>
            ))
        }
      </div>
      <div className="settings">

      </div>
    </div>
  )
}

export default Sidebar
