
import {Text} from 'react-native'

export default props => {
  return (
    <>
      <Text> Nome: {props.nome} </Text>
      <Text> Sobrenome: {props.sobrenome} </Text>
    </>
  )
}