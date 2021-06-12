import { useEffect, useRef, useState } from 'react'

type TimeRef = {
  current: any
}

export const useDebounce = (value: number, wait: number) => {
  const [debounceValue, setDebounceValue] = useState(value)
  const timeout: TimeRef = useRef()

  useEffect(() => {
    if (timeout?.current) {
      clearTimeout(timeout?.current)
    }

    timeout.current = setTimeout(() => {
      setDebounceValue(value)
    }, wait)

    return () => {
      clearTimeout(timeout?.current)
    }
  }, [value, wait])

  return debounceValue
}
