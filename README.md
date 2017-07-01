# React Component > Form > Input > Type: Date

`<input type="date" />`

  - An HTML5 native Date input field with non-native fallback support as outlined in the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date)

This component will render one `<input>` with a `type` of `date` for browsers that support it, and 3 (dynamic) `<select>` tags for browsers that don't.

## Simplified Overview:

### Native:
  - `<input type="date" />`

### Non-Native Fallback:
  - `<select name="year" />`
  - `<select name="month" />`
  - `<select name="day" />`

## Features:
  - Auto-detects native date field support
  - Auto-adjusts number of days available based on year/month input
  - A starting base for form validation (checks for type and length)

## Demo

### Online Demo

This demo is hosted and run on GitHub via Travis CI.

  - [GitHub Source (Code)](https://github.com/KDCinfo/react-form-input-date-native)
  - [GitHub Pages (Demo)](https://KDCinfo.github.io/react-form-input-date-native/)
  - [Travis CI (Prod Build)](https://travis-ci.org/KDCinfo/react-form-input-date-native)

### Install and Run Locally

This app was generated using [Create React App](https://github.com/facebookincubator/create-react-app)

  1. Clone this repo to your local dev environment,
  2. `cd` into your new project directory,
  3. run `npm install` (or `sudo npm install` if you require `su` permission),
  4. then `npm start`,
  5. follow the on-screen directions.

## Usage:

Inside your project's entry point:

  - [index.js] (conform the code below into your root JS file)
```
  import React from 'react'
  import { render } from 'react-dom'
  import FormDateContainer from './FormDateContainer'

  const overrideObj = { fid: 0, date: '20160228' }

  ReactDOM.render(
    <FormDateContainer formParams={overrideObj} />,
    root
  )
```
Tip:
  - The `<FormDateContainer />` field should be provided a unique ID which will be used in the component. This is provided for in the code but is passed a hard-coded `0` for simplicity. If nothing is passed, the component will also assume a `0` for the input's ID.

## Project Dependencies:
Note:
  - `react-scripts` is the base for the `Create React App` module utilization.
```
  "dependencies": {
    "prop-types": "^15.5.10",
    "react": "^15.6.1",
    "react-bootstrap": "^0.31.0",
    "react-dom": "^15.6.1"
  },
  "devDependencies": {
    "enzyme": "^2.9.1",
    "react-scripts": "1.0.10",
    "react-test-renderer": "^15.6.1"
  },
```
