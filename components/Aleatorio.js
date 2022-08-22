
import {Text} from 'react-native'
import Estilo from './Estilo'

export default ({menor, maior}) => {
  const delta = maior - menor + 1
  const aleatorio = parseInt(Math.random() * delta) + menor

  return (

    <Text style={Estilo.txtGrande}> 

      Valor aleatório {aleatorio} 
    
    </Text>
  )


} 