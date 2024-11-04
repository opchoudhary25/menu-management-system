import React from 'react';
import MenuTree from './MenuTree';
import MenuForm from './MenuForm';

const App = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Menu Management System</h1>
            <MenuForm />
            <MenuTree />
        </div>
    );
};

export default App;
