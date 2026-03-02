import React, { useState } from 'react'
import Button from './Button'
import { LuUser, LuPalette } from "react-icons/lu";

const TabContent = () => {
    const [tab, setTab] = useState('profile');
    const handleOpenTab = (e,value) => {
        e.preventDefault();

        setTab(value)
    }

  return (
    <div className='m-5'>
        {/* tab buttons */}
        <div className='flex gap-3'>
            <Button func={(e) => handleOpenTab(e, 'profile')} title={
                <> <LuUser className='inline -mt-1' /> Profile </>
            }/>
            <Button func={(e) => handleOpenTab(e, 'preferences')} title={
                <> <LuPalette className='inline -mt-1'  /> Preferences </>
            }/>
            <Button func={(e) => handleOpenTab(e, 'settings')} title='Settings'/>
            <Button func={(e) => handleOpenTab(e, 'about')} title='About'/>
        </div>

        {/* tab content */}
        {   
            tab == 'profile' &&
            <div>Profile tab</div>
        }
        {
            tab == 'preferences' &&
            <div>Preferences tab</div>
        }
        {
            tab == 'settings' &&
            <div>Settings tab</div>
        }
        {
            tab == 'about' &&
            <div>about tab</div>
        }
    </div>
  )
}

export default TabContent