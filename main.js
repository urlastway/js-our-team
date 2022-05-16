const teamMembers = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        img: "img/wayne-barnett-founder-ceo.jpg",
    },
    {
        name: "Walter Gordon Barret",
        role: "Office Manager",
        img: "img/walter-gordon-office-manager.jpg",
    },
    {
        name: "Scoot Estrada",
        role: "Developer",
        img: "img/scott-estrada-developer.jpg",
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        img: "img/barbara-ramos-graphic-designer.jpg",
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        img: "img/angela-lopez-social-media-manager.jpg",
    },
    {
        name: "Angela Carrol",
        img: "Chief Editor",
        img: "img/angela-caroll-chief-editor.jpg",
    },

];
console.log(teamMembers)

const teamContainerHTNL = (document.querySelector(".team-container"));
for(let i = 0; i < teamMembers.length; i++){
        const member = teamMembers[i];
        const memberHTML = `${member.img} ${member.name} ${member.role}`;
        teamMembers.innerHTML += memberHTML;
    }

for (let i = 0; i < teamMembers.length; i++){

    const addButton = document.getElementById("addMemberButton");
    addButton.addEventListener("click",
    function () {
        const name = document.querySelector(".name");
        const role = document.querySelector(".role");
        const img = document.querySelector(".image");

        const member = {
            img: img,
            name: name,
            role: role,
        }
        teamMembers.push(member)
    })
};