import React from 'react';

const MenuCard = ({ menu }) => {
    return (
        <div className="menu-card">
            <div className="menu-header">
                <span className="menu-title">DAILY</span>
                <p>{menu.daily}</p>
            </div>
            <div className="menu-header">
                <span className="menu-title">SPECIALS</span>
                <p>
                    {menu.specials.map((item, index) => (
                        <span key={index} className={item.type === "veg" ? "veg" : "non-veg"}>
                            {item.name} ({item.quantity})
                        </span>
                    ))}
                </p>
            </div>
            <div className="menu-header">
                <span className="menu-title">REGULARS</span>
                <p>{menu.regulars}</p>
            </div>
        </div>
    );
};

export default MenuCard;
