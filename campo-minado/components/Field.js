import {View, StyleSheet, Text, TouchableWithoutFeedback} from 'react-native'

import Mine from './Mine'

export default props => {
  
  const {mined, opened, nearMines, exploded,  flagged } = props

  return (
    <TouchableWithoutFeedback
      onPress={props.onOpen}
      onLongPress={props.onSelect}>
      <View>
        {
          !mined && opened && nearMines > 0 } ? 
          <Text> {nearMines} </Text> : false
        }
        {
          mined && opened ? <Mine/> : false
        }
        {
          flagged && !opened ? <Flag/> : false}
        }
      </View>
    </TouchableWithoutFeedback>
  )

}