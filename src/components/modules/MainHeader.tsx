import React, {useState} from 'react'
import styled from 'styled-components'
import HealthMeter from '@src/components/modules/HealthMeter.tsx'
import Button from "@src/components/controls/Button.tsx"
import IconButton from "@src/components/controls/IconButton.tsx"
import {Menu,RefreshCw } from 'react-feather'

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
                <div className='main-header__btn-container--mobile'>
                    <IconButton onClick={handleOpenModal} aria-label="Categories"><Menu /></IconButton>
                    <IconButton onClick={handleReset} aria-label={gameEnded ? "Play Again" : "Reset"}><RefreshCw /></IconButton>
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
        &__btn-container--mobile {
            display: none;            
        }
    }
    @media (max-width: 760px){
        padding: 16px 24px 0;
        .main-header {
            &__btn-container {
                display: none;
            }
            &__btn-container--mobile {
                display: flex;
                padding: 0 16px 0 0;
                button {
                    margin-right: 16px;
                }
            }
        }
    }
    @media (max-width: 525px){
        padding: 16px 16px 0;
    }
`

export default MainHeader