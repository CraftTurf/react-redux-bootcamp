import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from './Button';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .add('default', () =>
    <Button onClick={action('clicked')}>
      Hello
    </Button>
  )
  .add('disabled', () =>
    <Button onClick={action('button clicked')} disabled>
      Hello
    </Button>
  )
  .add('with knobs', () =>
    <Button onClick={action('button clicked')}>
      {text('Label', 'Hello')}
    </Button>
  )
  .add('link button', () =>
    <Button onClick={linkTo('Button', 'some emojies as the text')}>
      Next Story
    </Button>
  )
  .add('some emojies as the text', () =>
    <Button onClick={action('button clicked')}>😀 😎 👍 💯</Button>
  );
