import { View, StyleSheet } from 'react-native';
import Display from './components/Display'
import Button from './components/Button'

export default props => {
  return (
    <View style={styles.container}>
      <Display value={0} />
      <View style={styles.buttons}>
        <Button label='AC' triple />
        <Button label='/' operation />
        <Button label='7'/>
        <Button label='8'/>
        <Button label='9'/>
        <Button label='*' operation/>
        <Button label='6'/>
        <Button label='7'/>
        <Button label='8'/>
        <Button label='-' operation/>
        <Button label='3'/>
        <Button label='4'/>
        <Button label='5'/>
        <Button label='+' operation />
        <Button label='0' double/>
        <Button label='1'/>
        <Button label='2'/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttons: {
    flexDirection: 'row',
    flexWrap:'wrap'
  }
})
