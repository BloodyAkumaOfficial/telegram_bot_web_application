import React, {useEffect} from 'react';
import './App.css'
const tg = window.Telegram.WebApp
const App = () => {

    useEffect(() => {
        tg.ready()
    }, [])

    const onClose = () => {
        tg.close()
    }

    return (
        <div>
            Work!
            <button onClick={onClose}>Close App</button>
        </div>
    );
};

export default App;