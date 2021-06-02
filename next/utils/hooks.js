import { useEffect, useRef, useState } from 'react'

export const useDebounce = (value, wait) => {
  const [debounceValue, setDebounceValue] = useState(value)
  const timeout = useRef()

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
