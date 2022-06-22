const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://shaiderx.github.io',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Haider Bokhari',
  role: 'Computer Science Student',
  description:
    'A result-oriented undergraduate student passionate about the intersections of artificial intelligence, game design, and software development. Experienced in multiple coding languages, Unity Game Design, as well as web and app development. Always eager to grow and improve in any way possible to be the best version of myself. Extracurricular hobbies include boxing, weightlifting, gaming, and coding.',
  resume: 'https://drive.google.com/file/d/1ylKc3s7npwJxBhUsLxWaPV0BotdahlYI/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/haiderbok',
    github: 'https://github.com/SHaiderX',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Galaxy Royale',
    description:
      'A full fledged android puzzle game made by myself using Unity. All of the coding, design, and conceptualization for the game was done by me. This game was later recognised by one of Google\'s department "NBS Scaled" as a game of uniquness and high potential.',
    stack: ['Unity', 'C#', 'PhotoShop'],
    livePreview: 'https://play.google.com/store/apps/details?id=com.XcelsiorGames.GalaxyRoyale',
  },
  {
    name: 'Decked.js',
    description:
      'A full fledged JavaScript library coded by me. This library allows the user to implement dragable cards on their webpage which have many uniqe properties. More information can be found in the library documentation.',
    stack: ['JavaScript', 'JQuery', 'CSS', 'HTML'],
    sourceCode: 'https://deckedjs.herokuapp.com/decked.js',
    livePreview: 'https://deckedjs.herokuapp.com/',
  },
  {
    name: 'Append App',
    description:
      'An online forum made for students to help them connect with eachother. Students have options to join and create communities, participate in discussions, and add eachother to grow their friend base. This project was done in a group of 3, where I was responsible for both the frontend and backend.',
    stack: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'JQuery'],
    livePreview: 'https://appendapp.herokuapp.com/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'C#',
  'React',
  'JQuery',
  'Unity',
  'PhotoShop',
  'Git',
  'Assembly Code',
  'C',
  'Python',
  'Game Design'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'SHaiderHB@gmail.com',
}

export { header, about, projects, skills, contact }
