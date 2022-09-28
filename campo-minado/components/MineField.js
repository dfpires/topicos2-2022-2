
import {View} from 'react-native'
import Field from './Field'
import {StyleSheet} from 'react-native'

export default props => {

  const rows = props.board.map((row, r) => {

    const columns = row.map((field, c) => {
      return <Field {...field} key={c}/>  // retorna field

    }) 
    return <View key={r} style={{flexDirection: 'row'}}> {columns} </View> // retorna as colunas da board
    
  })

  return <View style={styles.container}> {rows} </View> // retorna as linhas da board
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEE',
    }
})