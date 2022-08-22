
import Estilo from './Estilo'
import {Button, Text} from 'react-native'
import {useState} from 'react'

export default ({inicial = 0, passo = 1}) => {

  const [numero, setNumero] = useState(inicial)

  const inc = () => {
    setNumero(numero + passo)
  }

  const dec = () => {
    setNumero(numero - passo)
  }

  return (
    <>
      <Text style={Estilo.txtGrande}> {numero} </Text>
      <Button title='Soma' onPress={inc}/>
      <Button title='Subtrai' onPress={dec}/>
    </>
  )

}