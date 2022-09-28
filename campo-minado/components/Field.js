import {View, StyleSheet, Text, TouchableWithoutFeedback} from 'react-native'

import Mine from './Mine'
import Flag from './Flag'
import params from '../params'

export default props => {
  
  const {mined, opened, nearMines, exploded,  flagged } = props

  const styleField = [styles.field]
  if (opened){
    styleField.push(styles.opened)
  }
  if (exploded){
    styleField.push(styles.exploded)
  }
  if (!opened && !exploded) {
     styleField.push(styles.regular)
  }
   let color = null
  return (
        <TouchableWithoutFeedback onPress={props.onOpen}
            onLongPress={props.onSelect}>
            <View style={styleField}>
                {!mined && opened && nearMines > 0 ?
                    <Text style={[styles.label, { color: color }]}>
                        {nearMines}</Text> : false}
                {mined && opened ? <Mine /> : false}
                {flagged && !opened ? <Flag /> : false}
            </View>
        </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    field: {
      height: params.blockSize,
      width: params.blockSize,
      borderWidth: params.borderSize,
    },
    regular: {
      backgroundColor: '#999',
      borderLeftColor: '#CCC',
      borderTopColor: '#CCC',
      borderRightColor: '#333',
      borderBottomColor: '#333',
    },
    opened: {
      backgroundColor: '#999',
      borderColor: '#777',
      alignItems: 'center',
      justifyContent: 'center',
    }, 
    label: {
      fontWeight: 'bold',
      fontSize: params.fontSize,
    },
    exploded: {
      backgroundColor: 'red',
      borderColor: 'red',
    }
})