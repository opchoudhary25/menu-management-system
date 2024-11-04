import axios from 'axios';

export const getMenus = () => axios.get('/api/menus').then(res => res.data);
export const addMenu = (menu) => axios.post('/api/menus', menu).then(res => res.data);
export const updateMenu = (menu) => axios.put(`/api/menus/${menu.id}`, menu).then(res => res.data);
export const deleteMenu = (id) => axios.delete(`/api/menus/${id}`).then(res => res.data);
