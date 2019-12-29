import React from 'react'
import {hydrate} from 'react-dom'
import Menu from './components/Menu.jsx'
import Test from './components/Test.jsx'

window.React = React

// alert('start render')
console.log('start render')
hydrate(
    <Test recipes={__DATA__} />,
    document.getElementById("react-container")
)

alert('render complete')