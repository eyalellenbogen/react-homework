import React from 'react';
import { storiesOf } from '@storybook/react';

import { object, withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { actions } from '@storybook/addon-actions';

import { CartItem } from '../../src/cart/cart-item/CartItem';
import cartItemDesc from './notes.md';
import '../../src/items/ItemList.scss';
import '../../src/cart/Cart.scss';

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

const stories = storiesOf('Cart', module);
stories.addDecorator(withKnobs);
stories.addDecorator(withNotes);

const cartItemActions = actions({ addItem: 'Adding item', removeItem: 'removing item' });

stories.addDecorator((story) => {
    return (<div className="app-content">
        <div className="items-panel cart-panel">
            {story()}
        </div>
    </div>)
})
    .add('cart item',
        () => <CartItem {...cartItemActions} target={object('target', cartItemWithCount)}></CartItem>,
        { notes: { markdown: cartItemDesc } }
    );