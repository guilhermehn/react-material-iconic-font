# react-material-iconic-font
> [Material Iconic Font](http://zavoloklom.github.io/material-design-iconic-font) in React components

## Install
```bash
npm i react-material-iconic-font --save
```

## Peer Dependencies
- [react](https://www.npmjs.com/package/react) - 0.14.x
- [react-dom](https://www.npmjs.com/package/react) - 0.14.x
- [material-design-iconic-font](https://www.npmjs.com/package/material-design-iconic-font) - 2.2.x

## Usage
```js
import React from 'react'
import { render } from 'react-dom'
import MaterialIcon from 'react-material-iconic-font'

const AddButton = ({ children }) => (
  <button type='button'>
    <MaterialIcon type='plus' /> { children }
  </button>
)

render(<AddButton>Add</AddButton>, document.body)
```

## Using "stacks"
```js
import React from 'react'
import { render } from 'react-dom'
import MaterialIcon, { MaterialIconStack } from 'react-material-iconic-font'

const SquareAddButton = ({ children }) => (
  <button type='button'>
    <MaterialIconStack>
      <MaterialIcon type='square-o' stackSize={ 2 } />
      <MaterialIcon type='share' stackSize={ 1 } />
    </MaterialIconStack>
  </button>
)

render(<SquareAddButton>Add</SquareAddButton>, document.body)
```

## Optional Properties
```js
// large -> zmdi-hc-lg
<MaterialIcon type='plus' large />

// large -> zmdi-hc-stack-lg
<MaterialIconStack large>...</MaterialIconStack>

// size -> zmdi-hc-{x}x
// valid: 2..5
<MaterialIcon type='plus' size={ 2 } />

// stackSize -> zmdi-hc-stack-{x}x
// valid: 1,2
<MaterialIcon type='plus' stackSize={ 2 } />

// fixed -> zmdi-hc-fw
<MaterialIcon type='plus' fixed />

// list -> zmdi-hc-li
<MaterialIcon type='plus' list />

// border -> zmdi-hc-border
<MaterialIcon type='plus' border />

// borderCircle -> zmdi-hc-border-circle
<MaterialIcon type='plus' borderCircle />

// pull -> pull-{direction}
// valid: ['left', 'right']
<MaterialIcon type='plus' pull='left' />

// spin -> zmdi-hc-spin
<MaterialIcon type='plus' spin />

// flip -> zmdi-hc-flip-{axis}
// valid: ['horizontal', 'vertical']
<MaterialIcon type='plus' flip='horizontal' />

// rotate -> zmdi-hc-rotate-{degress}
// valid: [90, 180, 270]
<MaterialIcon type='plus' rotate={ 90 } />
```

## License
MIT
