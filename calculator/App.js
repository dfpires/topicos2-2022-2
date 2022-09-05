import { View, StyleSheet } from 'react-native';
import Display from './components/Display'
import Button from './components/Button'
import React, {Component} from 'react'

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operacao: null,
  values: [0,0],
  current: 0
}

export default class App extends Component {

  state = {...initialState}

  // adiciona dígito pressionado para o Display
  addDigit = n => {
    console.log('entrou')
    // teremos que limpar?
    const clearDisplay = this.state.displayValue == '0' || this.state.clearDisplay
    // não podemos inserir mais de um .
    if (n == '.' && !clearDisplay && this.state.displayValue.includes('.')){
      return // sai da função
    }
    // recupera valor atual do display
    const currentValue = clearDisplay ? '' : this.state.displayValue
    const displayValue = currentValue + n
    // altera valor do displayValue
      this.setState({ displayValue, clearDisplay: false })

    if (n != '.'){
       const newValue = parseFloat(displayValue)
      const values = [...this.state.values]
      values[this.state.current] = newValue
      this.setState({ values })
     }

  }

  render(){
    
    return (
      
      <View style={styles.container}>
        <Display value={this.state.displayValue} />
        <View style={styles.buttons}>
          <Button label='AC' triple />
          <Button label='/' operation />
          <Button label='7' onClick={this.addDigit}/>
          <Button label='8' onClick={this.addDigit}/>
          <Button label='9' onClick={this.addDigit}/>
          <Button label='*' operation/>
          <Button label='4' onClick={this.addDigit}/>
          <Button label='5' onClick={this.addDigit}/>
          <Button label='6' onClick={this.addDigit}/>
          <Button label='-' operation/>
          <Button label='1' onClick={this.addDigit}/>
          <Button label='2' onClick={this.addDigit}/>
          <Button label='3' onClick={this.addDigit}/>
          <Button label='+' operation />
          <Button label='0' onClick={this.addDigit} double/>
          <Button label='.' onClick={this.addDigit}/>
          <Button label='='/>
        </View>
      </View>
    )
  }
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
