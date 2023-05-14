const countEl = document.querySelector('.count');
const trees = document.querySelector(".trees");
const puzzles = Array.from(trees.children);
const btn = document.querySelector("button")

let tree_num = 35;
let loop_num = parseInt(tree_num % 10);


let btn_num = parseInt(tree_num / 10);
console.log(tree_num);
countEl.textContent = "총" + tree_num +"그루";

// 개수로 나무를 구현했을 때의 코드
// const tree = trees.querySelector(".tree")
// for (i =0; i< loop_num; i++){
//     const newElement = document.createElement("div");
//     newElement.textContent = "";
//     newElement.setAttribute("class", "tree");
//     trees.appendChild(newElement);
//     console.log('!!!')
// }

// 정적인 퍼즐
console.log(puzzles);
let cnt = 0
for (i = 0; i < loop_num; i++){
        setTimeout(() =>{
          puzzles[9-cnt].style.transition = "opacity .3s ease-in-out";
          puzzles[9-cnt].style.opacity = 0;
          console.log(i, cnt)
          cnt += 1 
        }, i * 1000)
    
    }

// 동적인 퍼즐
// puzzles.forEach(function(puzzle, index){
//     gsap.to(puzzle, .3,{
//         opacity: 0,
//     }) 
// })

btn.textContent = btn_num