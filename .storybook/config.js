import { configure } from '@storybook/react';

function loadStories() {
    require('../stories/ItemList.story.js');
}

configure(loadStories, module);