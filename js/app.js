//Build the menu dynamically

let navList = document.getElementById("navbar__list");
let sections = document.getElementsByClassName("landing__container").length;

for (i = 1; i < sections + 1; i++) {
  let sectionItem = "#section" + i + "-header";
  let sectionValue = document.querySelector(sectionItem);
  let sectionText = sectionValue.textContent;
  let newList = document.createElement("li");
  let listText = document.createTextNode(sectionText);
  let listItem = "nav-list" + i;
  let button =document.createElement("button")
  let buttonItem="btn" + i;
  button.setAttribute("id" , buttonItem);
  newList.setAttribute("id", listItem);
  newList.setAttribute("class", "nav-list-item");
  newList.appendChild(listText);
  button.appendChild(newList);
  navList.appendChild(button);

  let targetSection = document.getElementById("section" + i);
  let targetList = document.getElementById(listItem);

  targetList.addEventListener("click", function() {
    targetSection.scrollIntoView ({
      behavior: 'smooth'}
    )
  });
}

//This is the helper function for a scroll 
  const scrollToTop = () => {
  const scrolling = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrolling > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, scrolling - scrolling / 50);
  }
};

// On button click, goes to top of page 
let backButton= document.createElement("button");
const footer= document.querySelector("footer");
backButton.innerHTML=
"<button class='back__button' onclick='goToTop()'>Return to Top</button>";
footer.appendChild(backButton);
function goToTop() {
  document.documentElement.scrollTop = 0; 
};
//Checks if section is in view and adds active-class with moving background and color change
function checkSectionView() {
  let inView = function(elem) {
    let bounding = elem.getBoundingClientRect();
    return (
      bounding.top <= 50 &&
      bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  };

 for (i = 1; i < sections + 1; i++) {
    let sectionInFullView = document.getElementById("section" + i);
    let link= document.getElementById("btn" + i);
    window.addEventListener("scroll", function(event) {
        if (inView(sectionInFullView)) {
          sectionInFullView.classList.add("active");
        } else {
          sectionInFullView.classList.remove("active");
        }
      },
      false
    );
  }
}
//Add highlight to active class in navbar
let buttons=document.querySelectorAll("button");
buttons.forEach(button =>{
   button.addEventListener('click', function(){
     buttons.forEach(btn => btn.classList.remove("highlight"));
     this.classList.add("highlight");
   });
 });
// When the user scrolls the page, execute scrollFunction
window.onscroll = function() {scrollFunction()};

// Get the navbar
const navbar = document.getElementsByClassName("page__header");

// Get the offset position of the navbar
const scrolled = navbar.offsetTop;

// Add the "scrolled" class to the navbar when you reach its scroll position. Remove "scrolled" when you leave the scroll position
function scrollFunction() {
  if (window.pageYOffset >= scrolled) {
    navbar[0].classList.add("scrolled")
  } else {
    navbar[0].classList.remove("scrolled");
  }
}
checkSectionView();
//Hide navbar
function hideNav(delay) {
  var timer;
  timer && clearTimeout(timer);
  navList.classList.add("hide");
  timer = setTimeout(function() {
  navList.classList.remove("hide");
  }, delay);
};
//Set a timer for navbar
setTimeout(
  window.addEventListener("scroll", function() {
    hideNav(2000);      
  }),
  //Delay to reduce the frequency of scrolling events 
  2000
);
