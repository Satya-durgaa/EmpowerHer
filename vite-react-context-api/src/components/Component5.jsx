
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Component6 from './Component6'

function Component5() {
  const { f } = useContext(AppContext)

  return (
    <div>
      <h3>Component5</h3>
      <h4>This is prop f: {f}</h4>
      <Component6 />
    </div>
  )
}

export default Component5
