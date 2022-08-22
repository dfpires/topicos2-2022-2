
import Filho from './Filho'

export default props => {
  let x = 10
  let y = 20
  return (
    <>
      <Filho a={x} b={y}/>
      <Filho a={x+9} b={y+30}/>
    </>
  )
}