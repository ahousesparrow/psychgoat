let lastScroll = 0;
const header = document.querySelector("#header");
const hrefbox = document.querySelector(".hrefbox");
const headerlogo = document.querySelector(".headerlogo");
const headerBtn = document.querySelector(".headerBtn");



// Click for services list options

window.addEventListener("mouseup", (event) => {
  if (!event.target.closest(".servicesListOpt")) {return;}

  const evTarget = event.target.closest(".servicesListOpt");

  const hdrTxtCnt = evTarget.dataset.header;
  const pgphTxtCnt = evTarget.dataset.paragraph;

  const posX = evTarget.getBoundingClientRect().left + window.scrollX + "px";
  const posY = evTarget.getBoundingClientRect().top + window.scrollY + "px";

  const newDiv = document.createElement("div");
  const newHeader = document.createElement("h2");
  const newPgph = document.createElement("p");


  // newDiv

  newDiv.classList.add("servicesListOptBox");

  newDiv.style.left = posX;
  newDiv.style.top = posY;

  newDiv.style.display = "flex";
  newDiv.style.flexDirection = "column";

  newDiv.style.padding = 15 + "px";
  newDiv.style.color = "#453d38";


  // newHeader

  newHeader.textContent = hdrTxtCnt;

  newHeader.style.fontFamily = "bloggerSansRegular";
  newHeader.style.fontSize = 30 + "px";

  newHeader.style.alignSelf = "center";


  // newPgph

  newPgph.textContent = pgphTxtCnt;

  newPgph.style.fontFamily = "arsenalRegular";
  newPgph.style.fontSize = 25 + "px";


  // Append children

  newDiv.appendChild(newHeader);
  newDiv.appendChild(newPgph);
  document.body.appendChild(newDiv);
});



// Mouse out for services list options

window.addEventListener("mouseout", (event) => {
  if(event.target.closest(".servicesListOpt")) {document.querySelector(".servicesListOptBox").remove();}
}); 



// Click for faq list options

window.addEventListener("mouseup", (event) => {
  if (!event.target.closest(".faqListOpt")) {return;}

  const evTarget = event.target.closest(".faqListOpt");

  const pgphs = document.querySelector("#faq").querySelectorAll("p");

  pgphs.forEach((pgph) => {
    pgph.style.opacity = "0";
    pgph.style.position = "absolute";
    pgph.style.transform = "translateY(-10vh)";
    pgph.style.transition = "none";
  });
  
  evTarget.querySelector("p").style.transition = "opacity 0.3s ease, transform 0.2s ease";
  evTarget.querySelector("p").style.opacity = "1";
  evTarget.querySelector("p").style.position = "relative";
  evTarget.querySelector("p").style.transform = "translateY(0)";
});



// Mouse out for faq list options

window.addEventListener("mouseout", (event) => {
  if(event.target.closest(".servicesListOpt")) {document.querySelector(".servicesListOptBox").remove();}
}); 



// Header translate when you scroll

window.addEventListener("scroll", () => {
  const currentYOffset = window.pageYOffset;

  if (currentYOffset > lastScroll && (currentYOffset > 40 && currentYOffset <= 200)) {
    header.style.transform = "translateY(-50%)";
    hrefbox.style.transform = "translateY(+25%)";
    headerlogo.style.width = "15%";
    headerlogo.style.transform = "translateY(25%)";
    headerBtn.style.padding = "10px 50px";
  } 
  else if (currentYOffset > lastScroll && currentYOffset > 200) {
    header.style.transform = "translateY(-100%)";
  } 
  else if (currentYOffset < lastScroll && currentYOffset != 0) {
    header.style.transform = "translateY(-50%)";
    hrefbox.style.transform = "translateY(+25%)";
    headerlogo.style.width = "15%";
    headerlogo.style.transform = "translateY(25%)";
  } 
  else {
    header.style.transform = "translateY(0%)";
    hrefbox.style.transform = "translateY(0%)";
    headerlogo.style.width = "clamp(10vw, 20vw, 20vw)";
    headerlogo.style.transform = "translateY(0%)";
    headerBtn.style.padding = "15px 50px";
  }

  lastScroll = currentYOffset;
});



// Scroll to view for the header buttons

function scrollToView(event, sectionID) {
  event.preventDefault(); 

  const section = document.querySelector("#" + sectionID)
  
  if (sectionID === "slideshow" ){
    section.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }
  else if (sectionID === "services" ){
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  else if (sectionID === "aboutme" || sectionID === "faq" ){
    section.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  else if (sectionID === "contacts" || sectionID === "faq" ){
    section.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  else {console.error("Не е намерен елемент с ID: " + sectionId);}
}