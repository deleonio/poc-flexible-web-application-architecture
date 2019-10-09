import { render } from 'inferno';
import { APP_HTML_DIV_ELEMENT } from './constants';

import { MyComponent } from './components/app/component.inferno';

render(<MyComponent />, APP_HTML_DIV_ELEMENT);
