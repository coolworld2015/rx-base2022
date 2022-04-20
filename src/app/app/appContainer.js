import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from './routes';
import Header from './Header';

export const AppContext = React.createContext();

const App = () => {
    const [item, setItem] = useState({name:'root', searchText: 'Marvel', itemsCount:0});
    const setContextItem = ((item) => {
        return setItem(item);
    });

    return (
        <AppContext.Provider value={{item, setContextItem}}>
            <div>
                <Router>
                    <div>
                        <Header/>
                    </div>
                    <Routes/>
                </Router>
            </div>
        </AppContext.Provider>
    )
};

export default App;