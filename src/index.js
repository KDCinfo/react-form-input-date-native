import React from 'react'
import { render } from 'react-dom'

// // // // // // // // // //
// [index.css]
//
import './index.css'

// // // // // // // // // //
// [FormDateContainer.js]
//
import FormDateContainer from './components/FormDateContainer'

if(process.env.NODE_ENV !== 'production') {
    console.clear()
}

const overrideObj = {
    fid: 0,             // The <FormDateContainer/> should be provided a Unique ID
    date: '20170701'
}

render(
    <FormDateContainer formParams={overrideObj} />,
    root
)