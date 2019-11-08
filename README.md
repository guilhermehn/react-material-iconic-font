# react-material-iconic-font

> [Material Iconic Font](http://zavoloklom.github.io/material-design-iconic-font) in React components

## Install

```bash
npm i react-material-iconic-font --save
```

## Peer Dependencies

- [react](https://www.npmjs.com/package/react) - >= 15
- [react-dom](https://www.npmjs.com/package/react) - >= 15
- [material-design-iconic-font](https://www.npmjs.com/package/material-design-iconic-font) - 2.2.x

## Usage

```jsx
import React from 'react';
import { render } from 'react-dom';
import MaterialIcon from 'react-material-iconic-font';

const AddButton = ({ children, ...props }) => (
	<button type="button" {...props}>
		<MaterialIcon type="plus" /> {children}
	</button>
);

render(<AddButton>Add</AddButton>, document.body);
```

## Using icon "stacks"

```js
import React from 'react';
import { render } from 'react-dom';
import MaterialIcon, { MaterialIconStack } from 'react-material-iconic-font';

const ShareButton = ({ children, ...props }) => (
	<button type="button" {...props}>
		<MaterialIconStack>
			<MaterialIcon type="square-o" stackSize={2} />
			<MaterialIcon type="share" stackSize={1} />
		</MaterialIconStack>
		{children}
	</button>
);

render(<ShareButton>Share</ShareButton>, document.body);
```

## Passing HTML attributes

```js
const AddButton = ({ children, ...props }) => (
	<button type="button" {...props}>
		<MaterialIcon type="plus" data-icon="Add icon" /> {children}
	</button>
);
```

## Optional Properties

```js
// large -> zmdi-hc-lg
<MaterialIcon large />

// large -> zmdi-hc-stack-lg
<MaterialIconStack large></MaterialIconStack>

// size -> zmdi-hc-{x}x
// valid: 2..5
<MaterialIcon size={2} />

// stackSize -> zmdi-hc-stack-{x}x
// valid: 1,2
<MaterialIcon stackSize={2} />

// fixed -> zmdi-hc-fw
<MaterialIcon fixed />

// MaterialIconList -> zmdi-hc-ul + zmdi-hc-li
<MaterialIconList>
	<MaterialIcon />
</MaterialIconList>

// inverse -> zmdi-hc-inverse
<MaterialIcon inverse />

// border -> zmdi-hc-border
<MaterialIcon border />

// border="circle" -> zmdi-hc-border-circle
<MaterialIcon border="circle" />

// pull -> pull-{direction}
// valid: ['left', 'right']
<MaterialIcon pull='left' />

// spin -> zmdi-hc-spin
<MaterialIcon spin />

// flip -> zmdi-hc-flip-{axis}
// valid: ['horizontal', 'vertical']
<MaterialIcon flip='horizontal' />

// rotate -> zmdi-hc-rotate-{degress}
// valid: [90, 180, 270]
<MaterialIcon rotate={90} />
```

## License

MIT
