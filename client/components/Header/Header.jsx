import React from 'react';
import Button from "../Buttons/Button";
import './Header.css'

const Header = () => {

    const tg = window.Telegram.WebApp;
    const onClose = () => {
        tg.close()
    }

    return (
        <div className={'header'}>
            <Button onClick={onClose}>Close App</Button>
            <span className={'username'}>
                {tg.initDataUnsafe?.user?.username}
            </span>
        </div>
    );
};

export default Header;