// console.log("testing");
// all variables
let rock = document.getElementById("rock");
// console.log(rock);
let paper = document.getElementById("paper");
// console.log(paper);
let scissor = document.getElementById("scissor");
// console.log(scissor);
let user_score = document.getElementById("user-score");
// console.log(user_score);
let comp_score = document.getElementById("comp-score");
// console.log(comp_score);
let result = document.getElementById("tell");
// console.log(result);
let user_num = 0;
let comp_num = 0;
let user_choice;
let randomNum;
let lose_border = `2px solid red`;
let win_border = `2px solid green`;
let draw_border = `2px solid grey`;
let normal_border = `2px solid white`;
// let combo = "no";
// console.log(randomNum);
// all functions
Score = () => {
  user_score.innerHTML = `${user_num}`;
  comp_score.innerHTML = `${comp_num}`;
};
border_setter = (a) => {
  setTimeout(() => {
    a.style.border = `${normal_border}`;
  }, 800);
};
// choice functions
cr = () => {
  user_choice = 1;
  // console.log(user_choice);
  //   user_score.innerHTML = user_choice;
  randomNum = Math.floor(Math.random() * (4 - 1) + 1);
  go();
};
cp = () => {
  user_choice = 2;
  // console.log(user_choice);
  //   user_score.innerHTML = user_choice;
  randomNum = Math.floor(Math.random() * (4 - 1) + 1);
  go();
};
cs = () => {
  user_choice = 3;
  // console.log(user_choice);
  //   user_score.innerHTML = user_choice;
  randomNum = Math.floor(Math.random() * (4 - 1) + 1);
  go();
};

go = () => {
  if (user_choice === 1 && randomNum == 1) {
    r_r();
  } else if (user_choice === 2 && randomNum == 2) {
    p_p();
  } else if (user_choice === 3 && randomNum == 3) {
    s_s();
  } else if (user_choice === 1 && randomNum == 2) {
    r_p();
  } else if (user_choice === 1 && randomNum == 3) {
    r_s();
  } else if (user_choice === 2 && randomNum == 1) {
    p_r();
  } else if (user_choice === 2 && randomNum == 3) {
    p_s();
  } else if (user_choice === 3 && randomNum == 1) {
    s_r();
  } else if (user_choice === 3 && randomNum == 2) {
    s_p();
  }
  //   score();
};

// all combinations
p_p = () => {
  result.innerHTML = "Paper equals Paper. It's a Draw😐😐";
  Score();
  paper.style.border = `${draw_border}`;
  border_setter(paper);
};
r_r = () => {
  result.innerHTML = "Rock equals Rock. It's a Draw😐😐";
  Score();
  rock.style.border = `${draw_border}`;
  border_setter(rock);
};
s_s = () => {
  result.innerHTML = "Scissor equals Scissors. It's a Draw😐😐";
  Score();
  scissor.style.border = `${draw_border}`;
  border_setter(scissor);
};
p_r = () => {
  result.innerHTML = "Paper Wraps Rock. You Win!🔥";
  user_num++;
  Score();
  paper.style.border = `${win_border}`;
  border_setter(paper);
};
r_s = () => {
  result.innerHTML = "Rock Breaks Scissor. You Win!🔥";
  user_num++;
  Score();
  rock.style.border = `${win_border}`;
  border_setter(rock);
};
s_p = () => {
  result.innerHTML = "Scissors Cut Paper. You Win!🔥";
  user_num++;
  Score();
  scissor.style.border = `${win_border}`;
  border_setter(scissor);
};
p_s = () => {
  result.innerHTML = "Paper Is teared By Scissor. You Lost😭😭";
  comp_num++;
  Score();
  paper.style.border = `${lose_border}`;
  border_setter(paper);
};
r_p = () => {
  result.innerHTML = "Rock is Wraped by Paper. You Lost😭😭";
  comp_num++;
  Score();
  rock.style.border = `${lose_border}`;
  border_setter(rock);
};
s_r = () => {
  result.innerHTML = "Scissor is broken by rock. You Lost😭😭";
  comp_num++;
  Score();
  scissor.style.border = `${lose_border}`;
  border_setter(scissor);
};
