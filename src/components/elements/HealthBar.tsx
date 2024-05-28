import React from 'react'
import styled from 'styled-components'
import PropTypes from "prop-types"

interface iProps {
    className?: string,
    healthSlots: number,
    currentSlot: number
}

const HealthBarComp: React.ElementType = ({ className, healthSlots, currentSlot }: iProps) => {
    return (
        <div className={className}></div>
    )
}

const HealthBar = styled(HealthBarComp)`
    border: 6px solid #fff;
    border-radius: 12px;
    height: 24px;
    width: 100%;
    dislay: inline-block;
    background-color: #fff;
    overflow: hidden;
    position: relative;
    &::before {
        border-radius: 20px;
        display: block;
        content: "";
        width: 100%;
        height: 100%;
        background-color: #070b41;
        position: absolute;
        right: ${({ healthSlots, currentSlot }) => 100 * (currentSlot / healthSlots)}%;
        transition: 0.5s ease right;
    }
` as typeof HealthBarComp

HealthBar.propTypes = {
    healthSlots: PropTypes.number.isRequired,
    currentSlot: PropTypes.number.isRequired,
    className: PropTypes.string
}

export default HealthBar