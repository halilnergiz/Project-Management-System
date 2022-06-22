import React, { useState } from 'react'

const SidebarItems = ({ item }) => {
    const [open, setOpen] = useState(false)

    if (item.childrens) {
        return (
            <div className={open ? "sidebar-item open" : "sidebar-item"}>
                <div className="sidebar-title"  onClick={() => setOpen(!open)}>
                    <span>
                        {/* {item.icon && <i className={item.icon}></i>} */}
                        {item.title}
                    </span>
                    <i className="fa-solid fa-chevron-down toggle-btn" ></i>
                </div>
                <div className="sidebar-content">
                    {item.childrens.map((child, index) => <SidebarItems key={index} item={child} />)}
                </div>
            </div>
        )
    } else {
        return (
            <a href={item.path || "#"} className="sidebar-item plain">
                {/* {item.icon && <i className={item.icon}></i>} */}
                {item.title}
            </a>
        )
    }
}

export default SidebarItems
