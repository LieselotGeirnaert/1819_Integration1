{
  // clowns
  const $articleClowns = document.querySelector(".service__clowns");
  const $backClowns = document.querySelector(".service__clowns__back");
  const $frontClowns = document.querySelector(".service__clowns__front");
  // knot
  const $articleKnot = document.querySelector(".service__knot");
  const $backKnot = document.querySelector(".service__knot__back");
  const $frontKnot = document.querySelector(".service__knot__front");
  // fire
  const $articleFire = document.querySelector(".service__fire");
  const $backFire = document.querySelector(".service__fire__back");
  const $frontFire = document.querySelector(".service__fire__front");
  // makeup
  const $articleMakeup = document.querySelector(".service__makeup");
  const $backMakeup = document.querySelector(".service__makeup__back");
  const $frontMakeup = document.querySelector(".service__makeup__front");
  // steady
  const $articleSteady = document.querySelector(".service__steady");
  const $backSteady = document.querySelector(".service__steady__back");
  const $frontSteady = document.querySelector(".service__steady__front");
  // bones
  const $articleBones = document.querySelector(".service__bones");
  const $backBones = document.querySelector(".service__bones__back");
  const $frontBones = document.querySelector(".service__bones__front");

  // ratingbutton
  const $ratingBtn = document.querySelector(".speciality__submit");
  const $ratingImg = document.querySelector(".speciality__img");
  let $rating = 0;

  const init = () => {
    $articleClowns.onclick = () => toggleDisplay($backClowns, $frontClowns);
    $articleKnot.onclick = () => toggleDisplay($backKnot, $frontKnot);
    $articleFire.onclick = () => toggleDisplay($backFire, $frontFire);
    $articleMakeup.onclick = () => toggleDisplay($backMakeup, $frontMakeup);
    $articleSteady.onclick = () => toggleDisplay($backSteady, $frontSteady);
    $articleBones.onclick = () => toggleDisplay($backBones, $frontBones);

    $ratingBtn.onclick = () => addRating();
  };

  const toggleDisplay = (front, back) => {
    if (front.classList.contains("hidden")) {
      front.classList.remove("hidden");
    } else {
      front.classList.add("hidden");
    }

    if (back.classList.contains("hidden")) {
      back.classList.remove("hidden");
    } else {
      back.classList.add("hidden");
    }
  };

  const addRating = () => {
    if ($rating != 10) {
      $rating++;
    } else {
      $ratingBtn.setAttribute("disabled", true);
    }
    $ratingImg.src = "assets/img/fire-" + $rating + ".png";
  };

  init();
}
