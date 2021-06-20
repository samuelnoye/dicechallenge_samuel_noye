  const randomNumber1 = Math.floor(Math.random() * 6) + 1;
  const randomNumber2 = Math.floor(Math.random() * 6) + 1;;
  // console.log(randomNumber1);

  var src1 = "images/" + "dice" + randomNumber1 + ".png";

  var src2 = "images/" + "dice" + randomNumber2 + ".png";



  document.querySelectorAll("img")[0].setAttribute("src", src1);

  document.querySelectorAll("img")[1].setAttribute("src", src2);

  if (randomNumber1 > randomNumber2) {
      document.querySelector("h1").innerHTML = "Player1 wins!";
  } else if (randomNumber1 < randomNumber2) {
      document.querySelector("h1").innerHTML = "Player2 wins!";
  } else {
      document.querySelector("h1").innerHTML = "Draw!";
  }