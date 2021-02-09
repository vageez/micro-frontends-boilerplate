import { mount } from 'marketing/MarketingApp'
import React, { useEffect, useRef } from 'react'

export default () => {
  const ref = useRef(null)

  useEffect(() => {
    if (ref?.current) {
      mount(ref?.current)
    }
  }, [ref])

  return <div ref={ref} />
}
