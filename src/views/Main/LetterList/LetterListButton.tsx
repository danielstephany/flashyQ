import Button from '@src/components/controls/Button'
import React from 'react'
import styled from 'styled-components'

const LetterListButtonComp: React.ElementType = ({className, ...others}) => {
    return (
        <button className={className} {...others}></button>
    )
}

const LetterListButton = styled(LetterListButtonComp)`
    border: none;
    box-shadow: none;
    border-radius: 16px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    width: 106px;
    height: 74px;
    font-size: 42px;
    font-weight: 500;
    margin: 0 8px 16px;
    transition: background-color 0.3s ease, opacity 0.5s ease-out;
    cursor: pointer;
    opacity: 1;
    &:disabled {
        opacity: 0.5;
        background-color: #dbd8fc;
    }
    &:hover {
        background-color: #dbd8fc;
    }
`

export default LetterListButton