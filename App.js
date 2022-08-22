import {SafeAreaView, StyleSheet, Text} from 'react-native'
import Primeiro from './components/Primeiro'
import Propriedade from './components/Propriedade'
import Botao from './components/Botao'
import Contador from './components/Contador'
import Comp1, {Comp2, Comp3} from './components/MultiComponente'
import MenorMaior from './components/MenorMaior'
import Aleatorio from './components/Aleatorio'
import PaiD from './components/direta/Pai'
import PaiID from './components/indireta/Pai'
import Familia from './components/relacao/Familia'
import Membro from './components/relacao/Membro'

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
      <PaiD />
      <PaiID />
      <Familia>
        <Membro nome="Zeca" sobrenome="Silva"/>
        <Membro nome="Pedro" sobrenome="Silva"/>
        <Membro nome="João" sobrenome="Silva"/>
      </Familia>
      <Familia>
        <Membro nome="Zeca" sobrenome="Oliveira"/>
        <Membro nome="Pedro" sobrenome="Oliveira"/>
        <Membro nome="João" sobrenome="Oliveira"/>
        <Membro nome="Tulio" sobrenome="Oliveira"/>
        <Membro nome="Juca" sobrenome="Oliveira"/>
      </Familia>
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