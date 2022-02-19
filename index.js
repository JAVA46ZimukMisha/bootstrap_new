const chessBoard = new Chessboard("chess", showCellFn);
function showCellFn(ind, j) {
    const ab = ["", "a", "b", "c", "d", "e", "f", "g", "h", ""]
    alert(ab[ind]+(j));
}