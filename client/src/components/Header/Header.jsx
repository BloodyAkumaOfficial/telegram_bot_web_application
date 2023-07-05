import React from 'react';
import Button from "../Buttons/Button";
import './Header.css'
import useTelegram from "../../hooks/useTelegram";

const Header = () => {
    const {user, onClose} = useTelegram()

    return (
        <div className={'header'}>
            <Button onClick={onClose}>Close App</Button>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    );
};

export default Header;