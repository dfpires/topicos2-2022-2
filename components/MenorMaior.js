
import {Text} from 'react-native'
import Estilo from './Estilo'

export default props => {

  return (

    <Text style={Estilo.txtGrande}> 
      Valor menor {props.menor} e Valor maior {props.maior}
    </Text>
  )
}