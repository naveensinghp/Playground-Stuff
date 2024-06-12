// https://www.joshwcomeau.com/snippets/react-hooks/use-toggle/

import React from 'react'

export default function useToggle(initalValue = false){
    const [value, setValue] = React.useState(initalValue)
    const toggle = React.useCallback(() => {
        setValue(v => !v);
    },[])

    return [value,toggle];
}