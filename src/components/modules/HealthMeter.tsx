import React, {useEffect, useState, useRef} from 'react'
import styled from 'styled-components'
import HeartIcon from '@src/components/icons/HeartIcon.tsx'
import HealthBar from '@src/components/elements/HealthBar.tsx'

interface iProps  {
    className?: string, 
    currentSlot: number
}

const HealthMeterComp: React.ElementType = ({ className, currentSlot }: iProps) => {
    const lastSlot = useRef<number>(currentSlot)
    const pulseTimeout = useRef< ReturnType<typeof setTimeout> | number | undefined>()
    const [pulse, setPulse] = useState(false)

    useEffect(() => {
        if (lastSlot.current !== currentSlot && !pulse){
            lastSlot.current = currentSlot
            setPulse(true)
            clearTimeout(pulseTimeout.current)
        } else if(pulse) {
            pulseTimeout.current = setTimeout(() => {
                setPulse(false)
            }, 1000)
        }

        return () => {
            clearTimeout(pulseTimeout.current)
        }
    }, [currentSlot, pulse])

    return (
        <div className={className}>
            <div className='health__bar'>
                <HealthBar healthSlots={6} currentSlot={currentSlot} />
            </div>
            <div className="health__icon">
                <HeartIcon pulse={pulse} pulseShrink={0 === currentSlot}/>
            </div>
        </div>
    )
}

const HealthMeter = styled(HealthMeterComp)`
    display: flex;
    align-items: center;
    width: 400px;
    margin-left: auto;
    .health {
        &__bar {
            flex-grow: 1;
            margin-right: 24px;
        }
        &__icon {
            display: flex;
            svg {                
                height: 60px;
                width: 60px;
            }
        }
    }
    @media(max-width: 760px){
        .health {
            &__bar {
                margin-right: 8px;
            }
            &__icon {
                margin-right: -6px;
                svg {              
                    height: 52px;
                    width: 52px;
                }
            }
        }
    }
`

export default HealthMeter