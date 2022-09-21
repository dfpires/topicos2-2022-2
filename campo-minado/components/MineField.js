
import {View} from 'react-native'
import Field from './Field'

export default props => {

  const rows = props.board.map((row, r) => {

    const columns = row.map((field, c) => {
      return <Field {...field} key={c}/>  // retorna field

    }) 
    return <View > {columns} </View> // retorna as colunas da board
    
  })

  return <View > {rows} </View> // retorna as linhas da board
}