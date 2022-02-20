const abc = ["","a", "b", "c", "d", "e", "f", "g", "h", ""];
function rows(length) {
    const res = [];
    for(let i = 0; i<length; i++) {
        res[i] = [];
    }
    return res;
}
function getRow(length, cellClickFn) {
    return rows(length).map((i,ind) => `<div class="row" style="min-height: 4.5vw">${getChessBoard(length, ind, cellClickFn)}</div>`).join("");
}
function columns(length) {
    const res1 = [];
    for (let j = 0; j<length; j++) {
        res1[j] = j;
    }
    return res1;
}

function getChessBoard(length, ind, cellClickFn) {
    return columns(length).map(j => {
       if ((ind == 0 && j != 0 && j!= (length-1))|| (ind ==(length-1) && j != 0 && j!= (length-1))) {
          return `<div class='col-1 bg-white text-dark border-white d-flex justify-content-center align-self-center' style='width: 4.5vw'>${(j)}</div>`
        }
        if ((j==0 && ind != 0 && ind != (length-1)) || (j==(length-1) && ind != 0 && ind != (length-1))){
            return `<div class='col-1 bg-white text-dark border-white d-flex  justify-content-center align-self-center' style='width: 4.5vw'>${abc[ind]}</div>`
        }
        if ((ind == 0 && j == 0) || (ind == 0 && j == (length-1)) || (ind == (length-1) && j == 0) || (ind ==(length-1) && j == (length-1))){
            return `<div class='col-1 bg-white text-white border-white' style='width: 4.5vw'>${abc[ind]}</div>`
        } 
        else {
          return  !((ind+j)%2) 
    ? `<div class='col-1 bg-dark text-dark border' style='width: 4.5vw' onclick="${cellClickFn.name}(${[ind, j]})">${[ind, j]}</div>` 
    : `<div class='col-1 bg-white text-white border' style='width: 4.5vw' onclick="${cellClickFn.name}(${[ind, j]})">${[ind, j]}</div>`
        }
    }).join("");
};
class Chessboard {
    constructor(idParent, cellClickFn) {
        this.parentElem = document.getElementById(idParent)
        this.cellClickFn = cellClickFn;
        this.render(10)
    }
    render(length) {
        this.parentElem.innerHTML = "";
        this.parentElem.innerHTML = `${getRow(length, this.cellClickFn)}`
    }
}
function myAlert(idParentEl, ind, j) {
    const al = document.getElementById(idParentEl);
    al.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong></strong> ${abc[ind]+j}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`
}