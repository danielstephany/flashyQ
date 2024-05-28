import React, {useState} from 'react'
import styled from 'styled-components'
import HealthMeter from '@src/components/modules/HealthMeter.tsx'
import Button from "@src/components/controls/Button.tsx"

const MainHeaderComp: React.ElementType = ({className}) => {
    const [slot, setSlot] = useState<number>(5)

    return (
        <div className={className}>
            <div className='main-header__content'>
                <Button component="a" href="#">Restart</Button>
                <HealthMeter currentSlot={slot} />
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
    .main-header__content {
        display: flex;
        align-items: center;
        width: 100%;
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