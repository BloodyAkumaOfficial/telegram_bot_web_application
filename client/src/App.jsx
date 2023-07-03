import React, {useEffect} from 'react';
import './App.css'
import Header from "../components/Header/Header";
import useTelegram from "../hooks/useTelegram";
import Button from "../components/Buttons/Button";

const App = () => {
    const {tg, onToggleButton} = useTelegram()

    useEffect(() => {
        tg.ready()
    }, [])

    return (
        <div>
            <Button onClick={onToggleButton}>Toggle</Button>
        </div>
    );
};

export default App;