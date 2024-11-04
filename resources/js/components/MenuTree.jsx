import React from 'react';
import { useQuery } from 'react-query';
import { getMenus } from '../api/menuApi';

const MenuTree = () => {
    const { data: menus, isLoading } = useQuery('menus', getMenus);

    if (isLoading) return <p>Loading...</p>;

    return (
        <div>
            <h2 className="text-xl font-semibold">Menus</h2>
            <ul>
                {menus.map(menu => (
                    <li key={menu.id}>{menu.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default MenuTree;
