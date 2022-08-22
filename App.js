import {SafeAreaView, StyleSheet, Text} from 'react-native'
import Primeiro from './components/Primeiro'
import Propriedade from './components/Propriedade'
import Botao from './components/Botao'
import Contador from './components/Contador'
import Comp1, {Comp2, Comp3} from './components/MultiComponente'
import MenorMaior from './components/MenorMaior'
import Aleatorio from './components/Aleatorio'
export default () => {
  
  return (
    <SafeAreaView style={style.App}>
      <Text> Hello World !!! </Text>
      <Primeiro/>
      <Propriedade nome='João' sobrenome='da Silva'/>
      <Botao/>
      <Contador/>
      <Comp1/>
      <Comp2/>
      <Comp3/>
      <MenorMaior msenor='5' maior='9'/>
      <Aleatorio menor={10} maior={20}/>
    </SafeAreaView>
  )

}

const style = StyleSheet.create({
  App: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  }
})