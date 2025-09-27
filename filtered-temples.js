const temples = [
  {
    templeName: "Harare Zimbabwe",
    location: "Harare, Zimbabwe",
    dedicated: "2024-12-20",
    area: 17000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/harare-zimbabwe-temple/harare-zimbabwe-temple-62166.jpg"
  },
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005-08-07",
    area: 11500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5087.jpg"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004-01-11",
    area: 17500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-5154.jpg"
  },
  {
    templeName: "Johannesburg South Africa",
    location: "Johannesburg, South Africa",
    dedicated: "1985-08-24",
    area: 19184,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-22477.jpg"
  },
  {
    templeName: "Nairobi Kenya",
    location: "Nairobi, Kenya",
    dedicated: "2022-09-15",
    area: 18000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/nairobi-kenya-temple/nairobi-kenya-temple-59209.jpg"
  },
  {
    templeName: "Cape Town South Africa",
    location: "Cape Town, South Africa",
    dedicated: "2025-06-08",
    area: 22000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/cape-town-south-africa-temple/cape-town-south-africa-temple-64609-main.jpg"
  },
  {
    templeName: "Salt Lake Utah",
    location: "Salt Lake City, Utah, USA",
    dedicated: "1893-04-06",
    area: 253015,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983-12-02",
    area: 116642,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/mexico-city-mexico-temple/mexico-city-mexico-temple-4060-main.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020-05-02",
    area: 6861,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/yigo-guam-temple/yigo-guam-temple-26512.jpg"
  }
];
function displayTemples(filteredTemples) {
  const container = document.getElementById("temples-container");
  container.innerHTML = "";

  filteredTemples.forEach(temple => {
    const card = document.createElement("div");
    card.classList.add("temple-card");

    card.innerHTML = `
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      <h2>${temple.templeName}</h2>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
    `;

    container.appendChild(card);
  });
}

displayTemples(temples);

const buttons = document.querySelectorAll("nav button");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    if (btn.id === "home") displayTemples(temples);
    if (btn.id === "old") displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900));
    if (btn.id === "new") displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000));
    if (btn.id === "large") displayTemples(temples.filter(t => t.area > 90000));
    if (btn.id === "small") displayTemples(temples.filter(t => t.area < 10000));
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;