# react-material-iconic-font
> [Material Iconic Font](http://zavoloklom.github.io/material-design-iconic-font) in React components

## Install
```bash
npm i react-material-iconic-font --save
```

## Peer Dependencies
- [react](https://www.npmjs.com/package/react) - 0.14.x
- [react-dom](https://www.npmjs.com/package/react) - 0.14.x
- [material-iconic-font](https://www.npmjs.com/package/material-iconic-font) - 2.2.x

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

## License
MIT
