import {Component} from 'react';
import { View, StyleSheet } from 'react-native';
import MineField from './components/MineField'
import params from './params'
import {createMinedBoard, cloneBoard, openField, hadExplosion, wonGame, showMines} from './functions'

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

  onOpenField = (row, column) => {
    // pegamos um clone do tabuleiro atual
    const board = cloneBoard(this.state.board)
    // chama uma função que faz as verificações
    openField(board, row, column)
    // tem explosão - true ou false
    const lost = hadExplosion(board)
    // ganhou - true ou false
    const won = wonGame(board)

    if (lost){
      showMines(board)
      Alert.alert(`Perdeuuuuu playboy`, `Que burrrrro`)
    }

    if (won){
      Alert.alert(`Parabéns`, `Você venceu`)
    }

    this.setState({board, lost, won})

  }

  render(){
    return (
      <View style={styles.container}>
          <View style={styles.board}>
            <MineField 
              board={this.state.board} 
              onOpenField={this.onOpenField} />
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
