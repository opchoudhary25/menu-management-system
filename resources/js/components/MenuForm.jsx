import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { addMenu } from '../api/menuApi';

const MenuForm = () => {
    const [name, setName] = useState('');
    const queryClient = useQueryClient();
    const mutation = useMutation(addMenu, {
        onSuccess: () => {
            queryClient.invalidateQueries('menus');
            setName('');
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        mutation.mutate({ name });
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Menu Name"
                className="border p-2"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2">Add Menu</button>
        </form>
    );
};

export default MenuForm;
