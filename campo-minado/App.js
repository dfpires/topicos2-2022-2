import {Component} from 'react';
import { View, StyleSheet } from 'react-native';
import MineField from './components/MineField'
import params from './params'
import functions from './functions'

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = this.createState()
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  createState = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return {
      board: createMinedBoard(rows, cols, this.minesAmount),
      won: false,
      lost: false,
      showLevelSelection: false
    }
  }

  render(){
    return (
      <View style={styles.container}>
          <View style={styles.board}>
            <MineField 
            board={this.state.board} />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  }
});
