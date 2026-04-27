import React from 'react'
import { Link } from 'react-router';

const SidebarLinkIcon = ( props ) => {
    const { url, icon, ...otherProps } = props;
  return (
    <Link 
        {...otherProps} 
        to={url} 
        className="rounded transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer hover:shadow">
        {icon}
    </Link>
  )
}

export default SidebarLinkIcon