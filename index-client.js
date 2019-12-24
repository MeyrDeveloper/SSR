import React from 'react'
import {hydrate} from 'react-dom'
import Menu from './components/Menu'

window.React = React

alert('start render')

hydrate(
    <Menu recipes={__DATA__} />,
    document.getElementById("react")
)

alert('render complete')