import React, { useState } from "react";
import Logo from "../../atoms/logo/Logo";
import { Upgrade } from "../../molecules";

type MenuItem = 'Overview' | 'Course' | 'Resources' | 'Message' | 'Settings';

const SideBar:React.FC = () => {
    const [activeItem, setActiveItem] = useState<MenuItem>('Overview');
    return(
        <div className="sidebar">
        <Logo/>
        <ul>
        <li
          className={activeItem === 'Overview' ? 'active' : ''}
          onClick={() => setActiveItem('Overview')}
        >
          <img src="assets/SideBar/Home.png" alt="home" /> Overview
        </li>
        <li
          className={activeItem === 'Course' ? 'active' : ''}
          onClick={() => setActiveItem('Course')}
        >
          <img src="assets/SideBar/Category.png" alt="category" /> Courses
        </li>
        <li
          className={activeItem === 'Resources' ? 'active' : ''}
          onClick={() => setActiveItem('Resources')}
        >
          <img src="assets/SideBar/Folder.png" alt="Folder" /> Resources
        </li>
        <li
          className={activeItem === 'Message' ? 'active' : ''}
          onClick={() => setActiveItem('Message')}
        >
          <img src="assets/SideBar/Chat.png" alt="Chat" /> Message
        </li>
        <li
          className={activeItem === 'Settings' ? 'active' : ''}
          onClick={() => setActiveItem('Settings')}
        >
          <img src="assets/SideBar/Setting.png" alt="Settings" /> Settings
        </li>
      </ul>
      <picture className="sidebar_image">
        <source media="(min-width:768px)" srcSet="assets/SideBar/Sidebaricon.png" />
        <img src="assets/SideBar/Sidebaricon.png" alt="Lorem" />
      </picture>
      <Upgrade/>
        </div>
    )
}

export default SideBar;
