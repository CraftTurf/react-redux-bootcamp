import React from 'react';
import { configure } from '@storybook/react';

import '../src/style/normalize.scss';

const stories = require.context('../src/components', true, /.stories.jsx$/);

const loadStories = () => stories.keys().forEach(stories);

configure(loadStories, module);
