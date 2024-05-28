const focusTrap = (parent: HTMLElement) => {
    const elemetTypeString = 'a[href], button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])'
    let tabbableEls: NodeListOf<HTMLElement> = parent.querySelectorAll(elemetTypeString)

    const getFocusedEl = () => {
        const activeElement = document.activeElement
        if (activeElement){
            for(let i = 0; i < tabbableEls.length; i++){
                if (tabbableEls[i] === activeElement) return i
            }   
        }

        return -1
    }

    const trapFocus = (e: KeyboardEvent) => {
        if(e.key === "Tab"){
            e.preventDefault()
            const currentFocusedEl = getFocusedEl(),
                endIndex = tabbableEls.length - 1,
                currentIsLast = currentFocusedEl === endIndex,
                currentIsFirst = currentFocusedEl === 0;

            if (e.shiftKey){
                if (currentFocusedEl < 0 || currentIsFirst){
                    tabbableEls[endIndex].focus()
                } else {
                    tabbableEls[currentFocusedEl - 1].focus()
                }
            } else {
                if (currentFocusedEl < 0 || currentIsLast) {
                    tabbableEls[0].focus()
                } else {
                    tabbableEls[currentFocusedEl + 1].focus()
                }
            }
        }
    }
    
    if(parent){
        parent.addEventListener("keydown", trapFocus)
    }
    
    const updateFocusList = () => {
        tabbableEls = parent.querySelectorAll(elemetTypeString)
    }

    const destroy = () => {
        parent.removeEventListener("keydown", trapFocus)
    }

    return { 
        destroy,
        updateFocusList
    }
}

export default focusTrap