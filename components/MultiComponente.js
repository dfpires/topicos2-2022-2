import Estilo from './Estilo'
import {Text} from 'react-native'

function Comp1(){
  return <Text style={Estilo.txtGrande}> Componente 1 </Text>
}

function Comp2(){
  return <Text style={Estilo.txtGrande}> Componente 2 </Text>
}

function Comp3(){
  return <Text style={Estilo.txtGrande}> Componente 3 </Text>
}

export default Comp1
export {Comp2, Comp3}