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

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fas", "fa-times", "close");

    div.appendChild(shortenurl);
    div.appendChild(copyurl);

    parenturl.appendChild(originalurl);
    parenturl.appendChild(div);
    parenturl.appendChild(deleteIcon);

    // localStorage.setItem("person", JSON.stringify(person));
    // var retrievedPerson = JSON.parse(localStorage.getItem("person"));

    shortenLink.appendChild(parenturl);
    console.log(parenturl);
    shortenLinkInput.value = "";

    copyButton = document.querySelectorAll(".copy-url");
    copyArr = Array.from(copyButton);
    copyArr.forEach((element) => {
      element.addEventListener("click", () => {
        // copyTextArr.select();
        element.innerHTML = "copied!";
        element.style.backgroundColor = "hsl(257, 27%, 26%)";
      });
    });

    deleteIcon = document.querySelectorAll(".close");
    displayBox = document.querySelectorAll(".shorten-link__display");

    displayBoxArr = Array.from(displayBox);
    deleteIconArr = Array.from(deleteIcon);
    // deleteIconArr.style.padding = "5px";

    deleteIconArr.forEach((element, index) => {
      element.addEventListener("click", () => {
        displayBoxArr[index].style.display = "none";
      });
    });

    // document.execCommand("copy");
    // alert("Copied the text: " + copyText.value);
  } else {
    //display error msg
    shortenLinkCardText.style.display = "block";
    shortenLinkInput.style.border = "2px solid hsl(0, 87%, 67%)";

    //make error msg disppear after 3 seconds
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
