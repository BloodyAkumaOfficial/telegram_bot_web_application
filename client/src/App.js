import React, {useEffect} from 'react';
import './App.css'
import Header from "./components/Header/Header";
import useTelegram from "./hooks/useTelegram";
import {Route, Routes} from 'react-router-dom'
import ProductList from "./components/ProductList/ProductList";
import Form from "./components/Form/Form";

const App = () => {
    const {tg, onToggleButton} = useTelegram()

    useEffect(() => {
        tg.ready()
    }, [])

    return (
        <div>
            <Header/>
            <Routes>
                <Route index element={<ProductList/>}/>
                <Route path={'form'} element={<Form/>}/>
            </Routes>
        </div>
    );
};

export default App;