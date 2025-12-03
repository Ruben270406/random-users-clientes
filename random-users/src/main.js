import './style.css'

const container = document.querySelector("div");

const card = document.createElement("div");
card.className= "card";
const img = document.createElement("img");
img.src = "public/user_nt_found.jpg";
card.appendChild(img);
container.appendChild(card);

const namespan = document.createElement("span");
const strong1 = document.createElement("strong");
card.appendChild(namespan);
strong1.textContent="Name:";
namespan.appendChild(strong1);
namespan.append(" name surname");


const mailspan = document.createElement("span");
const strong2 = document.createElement("strong");
card.appendChild(mailspan);
strong2.textContent="Mail:";
mailspan.appendChild(strong2);
mailspan.append(" mail");

const phonespan = document.createElement("span");
const strong3 = document.createElement("strong");
card.appendChild(phonespan);
strong3.textContent="Phone:";
phonespan.appendChild(strong3);
phonespan.append(" phone");


const locationspan = document.createElement("span");
const strong4 = document.createElement("strong");
card.appendChild(locationspan);
strong4.textContent="Name:";
locationspan.appendChild(strong4);
locationspan.append(" city");

const timespan = document.createElement("span");
const strong5 = document.createElement("strong");
card.appendChild(timespan);
strong5.textContent="Current Time:";
timespan.appendChild(strong5);
timespan.append(" time");

const button = document.createElement("button");
button.textContent = "GENERATE USER";
container.appendChild(button);

const fetchperson = async (info) => {
  const response = await fetch(`${URL_USERS}${info}`, options);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return response.json();
};