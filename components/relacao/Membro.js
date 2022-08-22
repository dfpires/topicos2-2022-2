import {Text} from 'react-native'
import Estilo from '../Estilo'

export default props => {

  return (
    <>
    <Text style={Estilo.txtGrande}>

      {props.nome} {props.sobrenome} 
    
    </Text>
    <br/>
    </>

  )
}