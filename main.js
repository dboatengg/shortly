const hamburger = document.querySelector(".hamburger"),
  navMenu = document.querySelector(".nav__menu"),
  mainBody = document.getElementsByTagName("main")[0],
  heroBody = document.querySelector(".hero"),
  shortenButton = document.querySelector(".button--square"),
  shortenLinkInput = document.querySelector(".shorten-link__input"),
  shortenLinkDisplay = document.querySelector(".shorten-link__display"),
  shortenLinkCardText = document.querySelector(".shorten-link__card p"),
  shortenLink = document.querySelector(".shorten-link");
// const navLink = document.querySelectorAll(".nav__link");

shortenButton.addEventListener("click", printUrl);
function printUrl(event) {
  event.preventDefault();
  if (shortenLinkInput && shortenLinkInput.value) {
    // alert("Still working on this feature :)");
    let parenturl = document.createElement("div");
    parenturl.classList.add("shorten-link__display");

    let originalurl = document.createElement("p");
    originalurl.innerHTML = shortenLinkInput.value;
    originalurl.classList.add("original-url");

    let div = document.createElement("div");

    let shortenurl = document.createElement("p");
    shortenurl.innerHTML = shortenLinkInput.value;
    shortenurl.classList.add("shorten-url");

    let copyurl = document.createElement("div");
    copyurl.innerHTML = "copy";
    copyurl.classList.add("copy-url");

    div.appendChild(shortenurl);
    div.appendChild(copyurl);

    parenturl.appendChild(originalurl);
    parenturl.appendChild(div);

    shortenLink.appendChild(parenturl);
    console.log(parenturl);
    shortenLinkInput.value = "";

    copyButton = document.querySelectorAll(".copy-url");
    copyArr = Array.from(copyButton);
    copyArr.forEach((element) => {
      element.addEventListener("click", () => {
        element.innerHTML = "copied!";
        element.style.backgroundColor = "hsl(257, 27%, 26%)";
      });
    });
  } else {
    //display error msg
    shortenLinkCardText.style.display = "block";
    shortenLinkInput.style.border = "2px solid hsl(0, 87%, 67%)";

    //make error msg disppear after some time
    setTimeout(() => {
      shortenLinkCardText.style.display = "none";
      shortenLinkInput.style.border = "2px solid transparent";
    }, 3000);
  }
}

hamburger.addEventListener("click", openMenu);
function openMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

mainBody.addEventListener("click", closeMenu);
heroBody.addEventListener("click", closeMenu);
console.log(mainBody);
