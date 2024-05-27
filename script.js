document.addEventListener("DOMContentLoaded", () => {
    const projects = [
        {
            title: "Project 1",
            image: "images/project1.png",
            link: "https://github.com/your-username/project1",
            description: "Description of project 1."
        },
        {
            title: "Project 2",
            image: "images/project2.png",
            link: "https://github.com/your-username/project2",
            description: "Description of project 2."
        },
        {
            title: "Project 3",
            image: "images/project3.png",
            link: "https://github.com/your-username/project3",
            description: "Description of project 3."
        }
    ];

    const projectGrid = document.getElementById("project-grid");

    projects.forEach(project => {
        const projectItem = document.createElement("div");
        projectItem.classList.add("project-item");

        projectItem.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;

        projectGrid.appendChild(projectItem);
    });
});
