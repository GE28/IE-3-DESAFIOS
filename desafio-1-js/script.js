import PersonClass from './person.js';

function updatePeopleInfo() {
  const filteredPeople = getFilteredPeople().map(person =>`
    <div class="person" id="${PersonClass._getPeople().indexOf(person)}">
      <p class="name">${person.getName()}</p>
      <p class="age">${person.getAge()}</p>
      <button class="remove-button" type="button" onclick="removePerson(${PersonClass._getPeople().indexOf(person)})">
        <i class="fa fa-trash" aria-hidden="true"></i>
      </button>
    </div>`).join('');
  const peopleWithAverage = filteredPeople + getAverage();
  document.getElementById('people').innerHTML = peopleWithAverage;
}

function getFilteredPeople() {
  const name = document.getElementById('your-name').value;
  if (name) {
    return PersonClass._getPeople().filter(person => person.getName().startsWith(name[0]) || person.getName().startsWith(name[0].toUpperCase()));
  }
  return PersonClass._getPeople();
}

function getAverageAge() {
  const people = getFilteredPeople();
  const totalAge = people.reduce((total, person) => total + Number(person.getAge()), 0);
  return Math.ceil(totalAge / people.length) || 'N/A';
}

function getAverage() {
  return `<div class="average person">
            <p class="name">Média</p>
            <p class="age">${getAverageAge()}</p>
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/70/Solid_white.svg"></div>`;
}

function updatePeoplePhoto() {
  document.querySelectorAll('.person:not(.average)').forEach(person => {
    const [name, age] = [person.querySelector('.name').innerText, 
                         person.querySelector('.age').innerText];
    const img = document.createElement('img');
    img.classList = 'photo';
    img.src = `https://avatars.dicebear.com/api/adventurer-neutral/${name}${age}.svg`;
    person.appendChild(img);
  });
}

function updateName() {
  const nameStatus = document.createElement('p');
  const name = document.getElementById('your-name').value;
  nameStatus.innerText = 'Nenhum nome foi inserido';
  nameStatus.id = 'your-status';
  nameStatus.classList = 'your-status danger';
  if (name) {
    nameStatus.innerText = `Seu nome é ${name}. A média será calculada para os nomes iniciados em ${name[0]}!
    (Para limpar, apague o nome e clique em "Preencher")`;
    nameStatus.classList = 'your-status';
  }
  document.getElementById('your-status').outerHTML = nameStatus.outerHTML;
}

function updatePeople() {
  updatePeopleInfo();
  updatePeoplePhoto(); 
}

window.updatePeople = updatePeople;

window.addPerson = function addPerson(name, age) {
  PersonClass._addPerson(name, age);
  updatePeople();
}

window.removePerson = function removePerson(id) {
  PersonClass._removePerson(id);
  updatePeople();
}

window.fillName = function fillName(name) {
  document.getElementById('your-name').value = name;
  updateName();
  updatePeopleInfo();
  updatePeoplePhoto();
}