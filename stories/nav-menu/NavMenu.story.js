import React from 'react';
import { storiesOf } from '@storybook/react';

import { MemoryRouter } from 'react-router-dom';

import { boolean, withKnobs, number } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';

import { NavMenu } from '../../src/nav-menu/NavMenu';

import '../../src/App.scss';

const stories = storiesOf('Nav Menu', module);
stories.addDecorator(withKnobs);
stories.addDecorator(withNotes);

stories.addDecorator((story) => {
    return (
        <div className="side-panel" style={{ width: '280px', paddingLeft: 20 }}>
            <MemoryRouter>
                {story()}
            </MemoryRouter>
        </div>
    )
})
    .add('links',
        () => (
            <NavMenu isLoggedIn={boolean('Logged in', true)} onLoggedOut={action('Log out')}
                totalCart={number('Total cart items', 20)}></NavMenu>
        )
    );