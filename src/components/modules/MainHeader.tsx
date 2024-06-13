import React, {useState} from 'react'
import styled from 'styled-components'
import HealthMeter from '@src/components/modules/HealthMeter.tsx'
import Button from "@src/components/controls/Button.tsx"

const MainHeaderComp: React.ElementType = ({ 
    className, 
    currentSlot, 
    gameEnded, 
    handleOpenModal,
    handleReset
}) => {

    return (
        <div className={className}>
            <div className='main-header__content'>
                <div className='main-header__btn-container'>
                    <Button onClick={handleOpenModal}>Categories</Button>
                    <Button onClick={handleReset}>{gameEnded ? "Play Again" : "Reset"}</Button>
                </div>
                <HealthMeter currentSlot={currentSlot} />
            </div>
        </div>
    )
}

const MainHeader = styled(MainHeaderComp)`
    padding: 24px;
    color: #fff;
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    .main-header {
        &__content {
            display: flex;
            align-items: center;
            width: 100%;
        }
        &__btn-container {
            button {
                margin-right: 24px;
            }
        }
    }
    .health {
        display: flex;
        align-items: center;
        width: 400px;
        margin-left: auto;
        &__bar {
            flex-grow: 1;
            margin-right: 24px;
        }
        &__icon {
            display: flex;
            svg {                
                hight: 60px;
                width: 60px;
            }
        }
    }
`

export default MainHeader