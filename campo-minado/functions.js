
const createBoard = (rows, cols) => {
  return Array(rows).fill(0).map((_, row) => {
    return Array(cols).fill(0).map((_, col) => {
      return {
           row,
           col,
           opened: false,
           flagged: false,
           mined: false,
           exploded: false,
           nearMines: 0
      }
    })
  })
}

const spreadMines = (board, minesAmount) => {
  const rows = board.length
  const cols = board[0].length
  let minesPlanted = 0
  while (minesPlanted < minesAmount){
      const rowSel = parseInt(Math.random() * rows, 10)
      const columnSel = parseInt(Math.random() * cols, 10)
      if (!board[rowSel][columnSel].mined) {
            board[rowSel][columnSel].mined = true
            minesPlanted++
      }
  }
}

const createMinedBoard = (rows, cols, minesAmount) => {
    const board = createBoard(rows, cols)
    spreadMines(board, minesAmount)
    return board
}

export {createMinedBoard}