function skillsMember() {
    var mySkills = [
        "HTML",
        "CSS",
        "JS",
        "Bootstrap",
        "jQuery",
        "ReactJS",
        "NodeJS",
        "ExpressJS",
        "MongoDB",
        "Python",
        "Django",
        "Git",
        "GitHub",
        "Heroku",
        "Netlify"
    ];
    var skillsList = document.getElementById("skillsList");
    mySkills.forEach(function(skill) {
        var skillElement = document.createElement("span");
        skillElement.className = "skill";
        skillElement.textContent = skill;
        skillsList.appendChild(skillElement);
    });
}