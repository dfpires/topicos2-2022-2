import Membro from './Membro'
import {Text} from 'react-native'

export default props => {

  return (
    <>
      <Text>
      [Início da família]
        {props.children}
      [Fim da família]
      </Text>
    </>
  )
}