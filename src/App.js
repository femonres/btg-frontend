import React from 'react';

import AppNavbar from './components/organisms/Navbar';
import AppRoutes from './routes/Routes';


function App() {
    return (
        <div className="App">
            <AppNavbar />
            <div className="container mt-4">
                <AppRoutes />
            </div>
        </div>
    );
}

export default App;
