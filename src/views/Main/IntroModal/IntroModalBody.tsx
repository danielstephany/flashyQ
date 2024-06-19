import React from 'react'
import styled from 'styled-components'
import Button from '@src/components/controls/Button.tsx'
import IconButton from '@src/components/controls/IconButton.tsx'
import {X} from 'react-feather'


const IntroModalBodyComp: React.ElementType = ({ className, handleClose, handleOpenCatagoryModal }) => {

    const openCatagoryModal = () => {
        handleClose()
        handleOpenCatagoryModal()
    }

    return (
        <div className={className}>
            <div className='categories__container'>
                <IconButton onClick={handleClose} aria-label="close Modal"><X /></IconButton>
                <div className='categories__grid--full'>
                    <h2>Word Guess!</h2>
                    <h3>Thanks for choosing to play Word Guess, Learn how to play below</h3>
                    <p>
                        Step into Word Guess, a game where uncovering hidden words is your quest. You'll face rows of empty spaces, each waiting for the right letters to reveal the mystery.
                    </p>
                    <p>
                        Every wrong guess chips away at your health, but you start with six chances to crack the puzzle. If you need a change, just click the categories button to explore new word options.
                    </p>
                    <p>
                        And whenever you want a fresh start, hit reset and begin anew. In Word Guess, every guess counts toward solving the puzzle. Can you decode the hidden words and emerge victorious?
                    </p>
                </div>
                <div className='categories__grid'>
                    <Button onClick={openCatagoryModal} noWrap fullWidth>Select Catagory</Button>
                </div>
                <div className='categories__grid'>
                    <Button onClick={handleClose} noWrap fullWidth>Start Game</Button>
                </div>
            </div>
        </div>
    )
}

const IntroModalBody = styled(IntroModalBodyComp)`
    border-top: 4px solid #576dde;
    border-bottom: 4px solid #576dde;
    border-radius: 16px;
    width: 600px;
    max-width: 100%;
    background-color: #070b41;
    position: relative;
    color: #fff;
    h2 {
        font-size: 32px;
        color: #fff;
        margin: 0 0 32px;
        text-align: center;
        font-family: "Poetsen One", sans-serif;
    }
    h3 {
        font-size: 24px;
        color: #fff;
        margin: 0 0 32px;
        text-align: center;
        font-family: "Poetsen One", sans-serif;
    }
    P:last-child {
        margin-bottom: 32px;
    }
    ${IconButton} {
        position: absolute;
        top: 4px;
        right: 4px;
        background-image: none;
        background-color: transparent;
        &.button-clicked {
            box-shadow: inset 0 0 3px 3px rgba(255, 255, 255, 0.3);
        }
    }
    .categories {
        &__container {
            display: flex;
            flex-wrap: wrap;
            padding: 32px 24px;
            margin-left: -12px;
            margin-right: -12px;
        }
        &__grid {
            width: 50%;
            max-width: 100%;
            margin-bottom: 24px;
            padding: 0 12px;
            &--full {
                width: 100%;
                padding: 0 12px;
            }
        }
    }
    @media (max-width: 525px){
        .categories {
            &__grid {
                width: 100%;
            }
        }
    }
`

export default IntroModalBody