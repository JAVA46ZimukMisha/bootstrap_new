const chessBoard = new Chessboard("chess", showCellFn);
function showCellFn(ind, j) {
    myAlert("forAlert", ind, j);
}