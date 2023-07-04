import React, {useCallback, useEffect, useState} from 'react';
import './Form.css'
import useTelegram from "../../hooks/useTelegram";

const Form = () => {

    const [county, setCountry] = useState('');
    const [address, setAddress] = useState('');
    const [subject, setSubject] = useState('physical');

    const {tg} = useTelegram()

    const onSendForm = useCallback(() => {
        const data = {
            county,
            address,
            subject
        }
        tg.sendData(JSON.stringify(data));
    }, [county, address, subject])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendForm);
        return () => {
            tg.offEvent('mainButtonClicked', onSendForm);
        }
    }, [onSendForm])

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Send form'
        })
    }, []);

    useEffect(() => {
        if (!county || !address) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }
    }, [county, address])

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }
    const onChangeAddress = (e) => {
        setAddress(e.target.value)
    }
    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }

    return (
        <div className={'form'}>
            <h3>Type your data</h3>
            <input
                type={'text'}
                placeholder={'Your county'}
                className={'input'}
                value={county}
                onChange={onChangeCountry}
            />
            <input
                type={'text'}
                placeholder={'Your address'}
                className={'input'}
                value={address}
                onChange={onChangeAddress}
            />
            <select
                className={'select'}
                value={subject}
                onChange={onChangeSubject}
            >
                <option value={'physical'}>Physical person</option>
                <option value={'legal'}>Entity</option>
            </select>
        </div>
    );
};

export default Form;