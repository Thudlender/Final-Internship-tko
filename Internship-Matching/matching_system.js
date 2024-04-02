let interns = [];

let companies = [
  { name: "Datapro Computer Systems Co., Ltd.", logo: "Logo Companies/DCS.jpg", interests: ["Marketing", "Finance"] },
  { name: "Onelink Technology Co.,Ltd.", logo: "Logo Companies/Onelink.jpg", interests: ["Technology", "Management"] },
  { name: "ซีดีจี กรุ๊ป (CDG Group)", logo: "Logo Companies/CDG.png", interests: ["Sales", "Communication"] },
  { name: "MFEC Public Company Limited", logo: "Logo Companies/mfec_logo.jpg", interests: ["Finance", "Technology"] },
  { name: "IBM Thailand Co., Ltd.", logo: "Logo Companies/IBM.png", interests: ["Management", "Sales"] },
  { name: "บริษัท ยิบอินซอย จำกัด (Yip In Tsoi & Co. Limited)", logo: "Logo Companies/YIP IN TSOI.png", interests: ["Communication", "Marketing"] }
];

function addIntern() {
  const internName = document.getElementById("interns").value;
  const age = document.getElementById("age").value;
  const interests = document.getElementById("interests").value.split(",").map(item => item.trim());

  interns.push({ name: internName, age: age, interests: interests });
  document.getElementById("interns").value = "";
  document.getElementById("age").value = "";
  document.getElementById("interests").value = "";

  matchInternWithCompanies();
}

function matchInternWithCompanies() {
  let matchesHTML = "";

  interns.forEach(intern => {
    companies.forEach(company => {
      let commonInterests = company.interests.filter(interest => intern.interests.includes(interest));
      if (commonInterests.length > 0) {
        matchesHTML += `<p>${intern.name} จับคู่กับ ${company.name} (อายุ ${intern.age}) ในเรื่อง ${commonInterests.join(", ")}</p>`;
      }
    });
  });

  document.getElementById("matches").innerHTML = matchesHTML;
}

function displayCompanies() {
  const companyContainer = document.getElementById("companyContainer");

  companies.forEach(company => {
    const card = document.createElement("div");
    card.classList.add("company-card");

    const logo = document.createElement("img");
    logo.src = company.logo;
    logo.alt = company.name + " Logo";
    logo.classList.add("company-logo");

    const name = document.createElement("h4");
    name.textContent = company.name;

    const interests = document.createElement("p");
    interests.textContent = "ความสนใจ: " + company.interests.join(", ");

    card.appendChild(logo);
    card.appendChild(name);
    card.appendChild(interests);

    companyContainer.appendChild(card);
  });
}

displayCompanies();
