// Lista de roles
const roles = ["Student", "Intern", "Professional", "Other", "More..."];
// Lista de lenguajes y frameworks
const items = ["C", "C++", "C#", "Java", "Python", "JavaScript", "TypeScript", "React", "Angular", "Django", "Spring"];

// Referencia al contenedor de los checkboxes
const container = document.getElementById('checkbox-container');

// Función para generar los checkboxes
function generateCheckboxes(items) {
  items.forEach((item, index) => {
    // Crear un nuevo elemento label
    const label = document.createElement('label');
    label.setAttribute('for', `inp-${index + 1}`);

    // Crear un nuevo input de tipo checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'inp';
    checkbox.id = `inp-${index + 1}`;
    checkbox.value = item;

    // Agregar el checkbox y el texto al label
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(item));

    // Agregar el label al contenedor
    container.appendChild(label);
  });
}

// Generar los checkboxes al cargar la página
generateCheckboxes(items);





// Referencia al dropdown
const dropdown = document.getElementById('role');

// Función para generar las opciones del dropdown
function generateDropdownOptions(items) {
  items.forEach(item => {
    // Crear un nuevo elemento option
    const option = document.createElement('option');
    option.value = item.toLowerCase();
    option.textContent = item;

    // Agregar la opción al dropdown
    dropdown.appendChild(option);
  });
}

// Generar las opciones del dropdown al cargar la página
generateDropdownOptions(roles);