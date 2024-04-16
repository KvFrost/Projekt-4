console.log("filter.js is running");

var projects = [
    { name: 'Projekt 1', type: 'miljø' },
    { name: 'Projekt 2', type: 'dyr' },
    { name: 'Projekt 3', type: 'hav' },
    { name: 'Projekt 4', type: 'skove' },
    { name: 'Projekt 5', type: 'plantning' }
];

function renderProjects() {
    var selectedType = document.getElementById('type').value;

    var filteredProjects = projects.filter(function(project) {
        return selectedType === 'all' || project.type === selectedType;
    });

for (var i = 0; i < filteredProjects.length; i++) {
    console.log(filteredProjects[i].name);
}
}

document.getElementById('type').addEventListener('change', renderProjects);

renderProjects();