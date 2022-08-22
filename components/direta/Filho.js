
import {Text} from 'react-native'
import Estilo from '../Estilo'

export default props => {

  return (
    <>
      <Text style={Estilo.txtGrande}> Valor de a: {props.a} </Text>
      <Text style={Estilo.txtGrande}> Valor de b: {props.b}</Text>
    </>    
  )
}