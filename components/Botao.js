
import {Button} from 'react-native'

export default props => {

  const mensagem1 = () => {
    console.info('Executado botão 1')
  }
  
  return (
    <>
      <Button 
        title="Executar método 1"
        onPress={mensagem1}/>
      <Button 
        title="Executar método 2"
        onPress={ () => console.info('Executado botão 2') }/>
      <Button 
        title="Executar método 3"
        onPress={ function () {
          console.info('Executado botão 3')
        }}/>
    </>
  )
}