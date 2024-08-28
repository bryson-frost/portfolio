import { tools } from '@/assets/data/tools';

export const skills = [
  '.NET',
  'C#',
  'Git',
  'TypeScript',
  'NuxtJS',
  'Vue.js',
  'Node.js',
  'MongoDB',
  'SQL',
  'Django',
  'Bootstrap',
  'Docker',
  'Bash',
  'Python',
  'Tailwind CSS',
  'Linux'
]

export const projects = [
  {
    id: '1',
    name: 'Vargo Hunting',
    description: 'A website made for Vargo Hunting Consultants, LLC. They are a hunting consulting company that offers hunts in Texas and the Crow Indian Reservation.',
    headimage: '/img/vargohunting/vargohuntinglogo.png',
    github: 'None',
    link: 'https://vargohunting.com/',
    linkshort: 'vargohunting',
    toolList: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Bootstrap',
      'jQuery',
      'GitHub Pages'
    ],
    images: ['/img/vargohunting/ss-1.png', '/img/vargohunting/ss-2.png', '/img/vargohunting/ss-3.png', '/img/vargohunting/ss-4.png', '/img/vargohunting/ss-5.png', '/img/vargohunting/ss-6.png', 'img/vargohunting/ss-7.png']
  },
  {
    id: '2',
    name: 'Cheaper Buy The Dozen',
    description: 'This app specializes in selling items with dynamic pricing that reduces per-item cost with larger quantities. Stripe integration for checkout, and hosting on SmarterASP.net',
    headimage: '/img/CBTD.png',
    github: 'None',
    link: 'http://brysonfrost-001-site1.ftempurl.com',
    linkshort: 'brysonfrost-site1',
    toolList: [
      '.NET',
      'C#',
      'SQL',
      'Bootstrap',
      'Stripe',
      'Identity Framework'

    ],
    images: ['/img/cbtd/ss-1.png', '/img/cbtd/ss-2.png', '/img/cbtd/ss-3.png', '/img/cbtd/ss-4.png', '/img/cbtd/ss-5.png']
  },
  {
    id: '3',
    name: 'Community Hub',
    description: 'A simple Django application designed to assist community members in posting and managing information about upcoming events.',
    headimage: '/img/ch/communityhub.png',
    github: 'https://github.com/bryson-frost/community-hub',
    link: 'https://events-community-hub-63d18e590ffa.herokuapp.com/',
    linkshort: 'community-hub',
    toolList: [
      'Django',
      'PostgreSQL',
      'Python',
      'CSS3',
      'Heroku',
    ],
    images: ['/img/ch/ss-1.png', '/img/ch/ss-2.png', '/img/ch/ss-3.png']
  },
  {
    id: '4',
    name: 'Sports Store',
    description: 'An application dedicated to selling sports equipment. Hosted on SmarterASP.net',
    headimage: '/img/sportsstore.png',
    github: 'None',
    link: 'http://brysonfrost-001-site2.ftempurl.com',
    linkshort: 'brysonfrost-site2',
    toolList: [
      '.NET',
      'C#',
      'SQL',
      'Bootstrap',
      'Identity Framework',
      'Docker'
    ],
    images: ['/img/sportsstore/ss-1.png', '/img/sportsstore/ss-2.png', '/img/sportsstore/ss-3.png', '/img/sportsstore/ss-4.png', '/img/sportsstore/ss-5.png']
  },
  {
    id: '5',
    name: 'Tooth Clicker',
    description: 'A small game inspired by the Cookie Clicker genre, developed predominantly using vanilla JavaScript.',
    headimage: '/img/toothclicker/toothclicker.png',
    github: 'https://github.com/bryson-frost/toothclicker/',
    link: 'https://bryson-frost.github.io/toothclicker/',
    linkshort: 'github.io/toothclicker',
    toolList: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'GitHub Pages'

    ],
    images: ['/img/toothclicker/ss-1.png', '/img/toothclicker/ss-2.png', '/img/toothclicker/ss-3.png']
  }
]