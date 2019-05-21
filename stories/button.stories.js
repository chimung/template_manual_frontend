import { storiesOf } from '@storybook/html';

const btnBasicPage = require('./btn-page.html') 
storiesOf('Button', module)
  .add('Button basic', () => btnBasicPage)
