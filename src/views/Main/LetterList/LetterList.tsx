import React from 'react'
import styled from 'styled-components'
import LetterListButton from "./LetterListButton.tsx"
import { LETTERS } from '../Letters.ts'

const LetterListComp: React.ElementType = ({ 
    className, 
    handleSelection, 
    selections,
    isGameOver
}) => {
    
     const displayLetters = () => {
         return LETTERS.map((letter, i) => {
          return (
            <LetterListButton 
                key={i}
                onClick={handleSelection(letter)}
                disabled={selections.has(letter) || isGameOver}
            >{letter.toUpperCase()}</LetterListButton>
            )
        })
     }

    return (
        <div className={className} >
            <div className="letter-list__container">                
                {displayLetters()}
            </div>
        </div>
    )
}

const LetterList = styled(LetterListComp)`
    display: flex;
    width: 100%;
    max-width: 1098px;
    margin: 0px auto 36px;
    padding: 0 24px;    
    .letter-list__container {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        margin: 0 -8px;
        }
    @media (max-width: 800px){
        ${LetterListButton} {
            aspect-ratio: 1/1.25;
        }
    }
    @media (max-width: 650px){
        padding: 0 16px;
        .letter-list__container {
            margin: 0 -6px;
        }
        ${LetterListButton} {
            border-radius: 12px;
            width: calc(11.111% - 12px);
            margin: 0 6px 8px 6px;
            font-size: 32px;
        }
    }
    @media (max-width: 525px){
        padding: 0 8px;
        margin: 0px auto 12px;
        max-width: 426px;
        .letter-list__container {
            margin: 0 -4px;
            justify-content: center;
        }
        ${LetterListButton} {
            width: calc(14.285% - 8px);
            margin: 0 4px 8px 4px;
            font-size: 22px;
        }
    }
` as typeof LetterListComp

export default LetterList