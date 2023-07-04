import React, {useState} from 'react';
import './ProductList.css';
import ProductItem from "../ProductItem/ProductItem";
import useTelegram from "../../hooks/useTelegram";

const products = [
    {id: '1', title: 'Car', description: 'Red car', price: 1000},
    {id: '2', title: 'Doll', description: 'Doll with blue eyes', price: 800},
    {id: '3', title: 'Ball', description: 'Soccer ball', price: 125},
    {id: '4', title: 'Train', description: 'Train with full railroad', price: 5000},
    {id: '5', title: 'Book', description: 'Book about dragon world hero', price: 200}
]

const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price
    }, 0)
}

const ProductList = () => {

    const [addedItems, setAddedItems] = useState([]);
    const {tg} = useTelegram();
    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if(alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems, product];
        }

        setAddedItems(newItems)

        if(newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `By for ${getTotalPrice(newItems)} $`
            })
        }
    }

    return (
        <div>
            <div className={'list'}>
                {products.map(product =>
                    <ProductItem
                        product={product}
                        onAdd={onAdd}
                        className={'item'}
                    />
                )}
            </div>
        </div>
    );
};

export default ProductList;