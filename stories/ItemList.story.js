import React from 'react';
import { storiesOf } from '@storybook/react';
import { CartItem } from '../src/cart/cart-item/CartItem';

import '../src/items/ItemList.scss';
import '../src/cart/Cart.scss';

const cartItemWithCount = {
    count: 1,
    item: {
        _id: '123123',
        title: 'A cat',
        description: 'meow meow MMMEEEEOwwowowowwwww',
        price: 42,
        picture: 'https://picsum.photos/400/?image=11'
    }
}

storiesOf('Cart Item', module)
    .addDecorator((story)=>{
        return (<div className="app-content">
            <div className="items-panel cart-panel">
                {story()}
            </div>
        </div>)
    })
    .add('with text', () => <CartItem target={cartItemWithCount}></CartItem>)
    ;