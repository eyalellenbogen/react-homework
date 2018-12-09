import { configure,addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';

addDecorator(
    withOptions({
      name: 'portfolio-stories',
      goFullScreen: false,
      showAddonsPanel: true,
      showSearchBox: false,
      addonPanelInRight: true,
      sortStoriesByKind: false,
      hierarchySeparator: /\./,
      hierarchyRootSeparator: /\|/,
      enableShortcuts: true,
    })
  );

function loadStories() {
    require('../stories/item-list/Cart.story');
    require('../stories/nav-menu/NavMenu.story');
}

configure(loadStories, module);