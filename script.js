// Array of possible forenames for characters
const forenames = [
  "Erevan",
  "Lyra",
  "Thorian",
  "Aelar",
  "Isolde",
  "Kalden",
  "Sylas",
  "Elowen",
  "Varis",
  "Lireth",
  "Draven",
  "Selene",
  "Finnian",
  "Elara",
  "Thaldrin",
  "Mira",
  "Leofric",
  "Neria",
  "Galen",
  "Elysia",
];

// Array of possible surnames for characters
const surnames = [
  "Windrider",
  "Blackthorn",
  "Fireforge",
  "Shadowheart",
  "Stormcaller",
  "Ironfist",
  "Moonshadow",
  "Ravensong",
  "Silverblade",
  "Stonehelm",
  "Nightshade",
  "Frostbloom",
  "Starweaver",
  "Emberfall",
  "Thornbreaker",
  "Skywatcher",
  "Bloodmoon",
  "Oakenshield",
  "Swiftwind",
  "Grimhammer",
];

// Array of possible genders for characters
const genders = ["Male", "Female", "Non-binary"];

// Array of possible levels for characters
const levels = new Array(20).fill(null).map((c, i) => i + 1);

// Array of possible races for characters
const races = [
  "Dragonborn",
  "Dwarf",
  "Elf",
  "Gnome",
  "Half-Elf",
  "Half-Orc",
  "Halfling",
  "Human",
  "Tiefling",
];

// Array of possible classes for characters
const classes = [
  "Barbarian",
  "Bard",
  "Cleric",
  "Druid",
  "Fighter",
  "Monk",
  "Paladin",
  "Ranger",
  "Rogue",
  "Sorcerer",
  "Warlock",
  "Wizard",
];

// Array of possible backgrounds for characters
const backgrounds = [
  "Acolyte",
  "Charlatan",
  "Criminal",
  "Entertainer",
  "Folk Hero",
  "Guild Artisan",
  "Hermit",
  "Noble",
  "Outlander",
  "Sage",
  "Sailor",
  "Soldier",
  "Urchin",
];

// Array of possible alignments for characters
const alignments = [
  "Lawful Good",
  "Neutral Good",
  "Chaotic Good",
  "Lawful Neutral",
  "True Neutral",
  "Chaotic Neutral",
  "Lawful Evil",
  "Neutral Evil",
  "Chaotic Evil",
];

const backstories = [
  {
    name: "The Redeemer",
    story: "Having experienced the consequences of their own mistakes, {{Character Name}} now dedicates their life to redemption. They've set out to right wrongs, offering help to those they meet along the way. Guided by empathy and the belief that everyone deserves a chance at redemption, {{Character Name}} seeks to make amends for their past and provide opportunities for others to find their own paths to healing and renewal."
  },
  {
    name: "Artisan of Dreams",
    story: "From a young age, {{Character Name}} possessed a remarkable talent for crafting and creating. Their works weren't just physical creations, but extensions of their dreams and imagination. Through their art, they aim to inspire others and weave stories that resonate with the hearts of many. {{Character Name}} travels to gather inspiration from diverse cultures and experiences, seeking to craft their magnum opus that will leave a lasting legacy."
  },
  {
    name: "The Reluctant Leader",
    story: "{{Character Name}} never aspired to lead, but destiny had other plans. When their village faced a crisis, they found themselves thrust into a leadership role. Balancing the needs of their community and the weight of their newfound responsibilities, {{Character Name}} strives to make decisions that will benefit all. Their journey involves not only facing external threats but also grappling with internal doubts as they navigate the complexities of leadership."
  },
  {
    name: "Wanderer of the Wilds",
    story: "Born in a nomadic tribe, {{Character Name}} inherited a deep connection to the natural world. They learned the ways of survival and harmonizing with nature from their elders. As they grew older, their wanderlust led them to explore the uncharted wilderness. They strive to protect the balance of ecosystems, and their travels take them to distant lands where they encounter both beauty and challenges that test their resourcefulness."
  },
  {
    name: "Seeker of Truth",
    story: "From an early age, {{Character Name}} was curious about the mysteries of the world. They were never content with accepting things at face value, always wanting to delve deeper. This curiosity led them to become a dedicated seeker of truth, uncovering hidden agendas and exposing corruption wherever they went. Their journey is a quest for knowledge and understanding, as they believe that only through uncovering the truth can they bring about positive change."
  },
  {
    name: "The Protector",
    story: "Born in a realm plagued by strife, {{Character Name}} grew up in the midst of turmoil. Their village was constantly threatened by marauders, and their loved ones suffered. Driven by a desire to bring safety to their community, {{Character Name}} set out to become a beacon of protection. Armed with determination and a growing set of skills, they journey across the land, seeking knowledge, allies, and power to stand against any threat that may arise."
  },
]

// Character form fields
const nameBox = document.getElementById("character-name");
const genderBox = document.getElementById("character-gender");
const levelBox = document.getElementById("character-level");
const raceBox = document.getElementById("character-race");
const classBox = document.getElementById("character-class");
const backgroundBox = document.getElementById("character-background")
const alignmentBox = document.getElementById("character-alignment")
const backstoryBox = document.getElementById('character-backstory');

// Randomise buttons
const randomNameButton = document.getElementById('random-character-name-button');
const randomGenderButton = document.getElementById('random-gender-button');
const randomLevelButton = document.getElementById('random-level-button');
const randomRaceButton = document.getElementById('random-race-button');
const randomClassButton = document.getElementById('random-class-button');
const randomBackgroundButton = document.getElementById('random-background-button');
const randomAlignmentButton = document.getElementById('random-alignment-button');
const randomBackstoryButton = document.getElementById('random-backstory-button');
const randomiseAllButton = document.getElementById('randomise-all-button');
const generateCharacterButton = document.getElementById('generate-character-button');

// Character sheet elements
const errorMessage = document.getElementById('error-message');
const characterSheet = document.getElementById('character-sheet');

// Event listeners for the randomise buttons
randomNameButton.addEventListener('click', () => nameBox.value = generateName());
randomGenderButton.addEventListener('click', () => genderBox.value = pickRandomOption(genders))
randomLevelButton.addEventListener('click', () => levelBox.value = pickRandomOption(levels))
randomRaceButton.addEventListener('click', () => raceBox.value = pickRandomOption(races))
randomClassButton.addEventListener('click', () => classBox.value = pickRandomOption(classes))
randomBackgroundButton.addEventListener('click', () => backgroundBox.value = pickRandomOption(backgrounds))
randomAlignmentButton.addEventListener('click', () => alignmentBox.value = pickRandomOption(alignments))
randomBackstoryButton.addEventListener('click', () => generateBackstory());
randomiseAllButton.addEventListener('click', () => randomiseAllFields());
generateCharacterButton.addEventListener('click', () => generateCharacterSheet())

// Adding options from lists into the select boxes - div ID, array name, prefix to items in list
initialiseSelect("character-gender", genders, "Gender");
initialiseSelect("character-level", levels, "Level");
initialiseSelect("character-race", races, "Race");
initialiseSelect("character-class", classes, "Class");
initialiseSelect("character-background", backgrounds, "Background");
initialiseSelect("character-alignment", alignments, "Alignment");

// Function to populate the select boxes
function initialiseSelect(selectId, options, prefix = null) {
  const element = document.getElementById(selectId);
  console.log({ selectId, element })
  options.forEach((option) => {
    const optionElement = document.createElement("option");
    if (prefix) {
      optionElement.innerText = prefix + ": " + option;
    } else {
      optionElement.innerText = option;
    }
    optionElement.value = option;
    element.appendChild(optionElement);
  });
}

// Random backstory 
const generateBackstory = () => {
  const randomNumber = getRandomInt(backstories.length);
  const randomText = backstories[randomNumber].story;
  //character name input and replacing in the backstory.
  const characterNameMatch = /{{Character Name}}/g;
  let characterName = nameBox.value;
  if (characterName === '') {
    characterName = "They";
  }

  const modifiedString = randomText.replace(characterNameMatch, characterName);

  backstoryBox.value = modifiedString;
}

//Helper Functions
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function pickRandomOption(options) {
  const randomIndex = getRandomIntInRange(0, options.length);
  return options[randomIndex];
}

// Function to generate a random name for the character
function generateName() {
  const randomForenameIndex = getRandomIntInRange(0, forenames.length);
  const randomSurnameIndex = getRandomIntInRange(0, surnames.length);
  const forename = forenames[randomForenameIndex];
  const surname = surnames[randomSurnameIndex];
  return `${forename} ${surname}`;
}

// Character sheet JS starts here
// Checking that all the values used are not empty strings - to submit
function isValid() {
  return [
    nameBox.value,
    genderBox.value,
    levelBox.value,
    raceBox.value,
    classBox.value,
    backgroundBox.value,
    alignmentBox.value,
    backstoryBox.value,
  ].every(field => !!field)
}

// Function to populate the character sheet - checks if valid, if not shows error message, if valid shows character sheet div
function generateCharacterSheet() {
  console.log(isValid())
  if (!isValid()) {
    errorMessage.style.display = 'block';
    return
  }
  
  errorMessage.style.display = 'none';
  characterSheet.style.display = 'block';

  const fieldAssociations = [
    { inputId: 'character-name', outputId: 'sheet-output-name' },
    { inputId: 'character-level', outputId: 'sheet-output-level' },
    { inputId: 'character-gender', outputId: 'sheet-output-gender' },
    { inputId: 'character-alignment', outputId: 'sheet-output-alignment' },
    { inputId: 'character-race', outputId: 'sheet-output-race' },
    { inputId: 'character-class', outputId: 'sheet-output-class' },
    { inputId: 'character-background', outputId: 'sheet-output-background' },
    { inputId: 'character-backstory', outputId: 'sheet-output-backstory' }
  ];

  for (const association of fieldAssociations) {
    const inputValue = document.getElementById(association.inputId).value;
    const outputElement = document.getElementById(association.outputId);
    outputElement.textContent = inputValue;
  }
  generateAvatar()
}

function randomiseAllFields() {
  nameBox.value = generateName();
  genderBox.value = pickRandomOption(genders);
  levelBox.value = pickRandomOption(levels);
  raceBox.value = pickRandomOption(races);
  classBox.value = pickRandomOption(classes);
  backgroundBox.value = pickRandomOption(backgrounds);
  alignmentBox.value = pickRandomOption(alignments);
  generateBackstory();
}

// function to change avatar image source

function generateAvatar() {
  const avatar_image = document.getElementById("avatar-img");
  let race_result = raceBox.value
  let gender_result = genderBox.value
  let avatar_filepath = "images/avatars/" + race_result + "_" + gender_result + ".png"
  avatar_image.src = avatar_filepath.toLowerCase()
};

// Get a randon number for the generators
function getRandomIntInRange(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

// Print as a document
function printdiv(elem) {
  var header_str = '<html><head><title>' + document.title + '</title></head><body>';
  var footer_str = '</body></html>';
  var new_str = document.getElementById(elem).innerHTML;
  var old_str = document.body.innerHTML;
  document.body.innerHTML = header_str + new_str + footer_str;
  window.print();
  document.body.innerHTML = old_str;
  return false;
}

// Nav scripts start here
function menuToggle() {
  var nav = document.getElementById("menu-overlay");
  nav.classList.toggle("active");

  var nav = document.getElementById("toggleIcon");
  nav.classList.toggle("active");
}
// Nav scripts end here