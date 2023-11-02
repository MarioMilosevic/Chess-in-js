// White Pawns 
const a2Pawn = document.querySelector("#a_2_pawn");
const b2Pawn = document.querySelector("#b_2_pawn");
const c2Pawn = document.querySelector("#c_2_pawn");
const d2Pawn = document.querySelector("#d_2_pawn");
const e2Pawn = document.querySelector("#e_2_pawn");
const f2Pawn = document.querySelector("#f_2_pawn");
const g2Pawn = document.querySelector("#g_2_pawn");
const h2Pawn = document.querySelector("#h_2_pawn");
// White Pawns array
const whitePawnsArr = [a2Pawn,b2Pawn,c2Pawn,d2Pawn,e2Pawn,f2Pawn,g2Pawn,h2Pawn]
// Third row white
const a3Field = document.querySelector("#a_3");
const b3Field = document.querySelector("#b_3");
const c3Field = document.querySelector("#c_3");
const d3Field = document.querySelector("#d_3");
const e3Field = document.querySelector("#e_3");
const f3Field = document.querySelector("#f_3");
const g3Field = document.querySelector("#g_3");
const h3Field = document.querySelector("#h_3");
// Forth row white
const a4Field = document.querySelector("#a_4");
const b4Field = document.querySelector("#b_4");
const c4Field = document.querySelector("#c_4");
const d4Field = document.querySelector("#d_4");
const e4Field = document.querySelector("#e_4");
const f4Field = document.querySelector("#f_4");
const g4Field = document.querySelector("#g_4");
const h4Field = document.querySelector("#h_4");
//
const circle1 = document.createElement("div");
const circle2 = document.createElement("div");



const pawnBegginingMoves = function () {
  e2Pawn.addEventListener("click", function () {
    if (!e3Field.firstChild && !e4Field.firstChild) {
      console.log("if");
      e3Field.appendChild(circle1);
      e4Field.appendChild(circle2);
      circle1.classList.add("circle");
      circle2.classList.add("circle");
    } else {
      console.log("else");
      e3Field.removeChild(circle1);
      e4Field.removeChild(circle2);
      circle1.classList.remove("circle");
      circle2.classList.remove("circle");
    }
  });
};
pawnBegginingMoves()






