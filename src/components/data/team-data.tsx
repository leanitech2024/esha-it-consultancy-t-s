const teamData = [
  {
    id: crypto.randomUUID(),
    image: '/assets/img/team/team-1.jpeg',
    name: 'B Srikanth Raju',
    position: 'CEO',
    mail: 'derya@gmail.com',
    phone: '+125 (564) 656 156',
    category: 'founder',
    social_link: [
      {
        link: 'https://linkedin.com',
        target: '_blank',
        icon: <i className="fab fa-linkedin-in"></i>,
      },
      {
        link: 'https://twitter.com',
        target: '_blank',
        icon: <i className="fa-brands fa-x-twitter"></i>,
      },
      {
        link: 'https://facebook.com',
        target: '_blank',
        icon: <i className="fab fa-facebook-f"></i>,
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    image: '/assets/img/team/team-2.jpeg',
    name: 'Esha',
    position: 'Managing director',
    mail: 'rhodes@gmail.com',
    phone: '+125 (261) 564 232',
    category: 'writer',
    social_link: [
      {
        link: 'https://twitter.com',
        target: '_blank',
        icon: <i className="fa-brands fa-x-twitter"></i>,
      },
      {
        link: 'https://linkedin.com',
        target: '_blank',
        icon: <i className="fab fa-linkedin-in"></i>,
      },
      {
        link: 'https://facebook.com',
        target: '_blank',
        icon: <i className="fab fa-facebook-f"></i>,
      },
    ],
  },
  // {
  //   id: 'lisa-thompson',
  //   image: team3,
  //   name: 'Lisa Thompson',
  //   position: 'Senior Engineer',
  //   mail: 'lisa@gmail.com',
  //   phone: '+125 (564) 226 781',
  //   category: 'founder',
  //   social_link: [
  //     {
  //       link: 'https://facebook.com',
  //       target: '_blank',
  //       icon: <i className="fab fa-facebook-f"></i>,
  //     },
  //     {
  //       link: 'https://linkedin.com',
  //       target: '_blank',
  //       icon: <i className="fab fa-linkedin-in"></i>,
  //     },
  //     {
  //       link: 'https://twitter.com',
  //       target: '_blank',
  //       icon: <i className="fa-brands fa-x-twitter"></i>,
  //     },
  //   ],
  // },
  // {
  //   id: 'david-martinez',
  //   image: team4,
  //   name: 'David Martinez',
  //   position: 'Senior Technician',
  //   mail: 'martinez@gmail.com',
  //   phone: '+125 (231) 562 156',
  //   category: 'writer',
  //   social_link: [
  //     {
  //       link: 'https://linkedin.com',
  //       target: '_blank',
  //       icon: <i className="fab fa-linkedin-in"></i>,
  //     },
  //     {
  //       link: 'https://facebook.com',
  //       target: '_blank',
  //       icon: <i className="fab fa-facebook-f"></i>,
  //     },
  //     {
  //       link: 'https://twitter.com',
  //       target: '_blank',
  //       icon: <i className="fa-brands fa-x-twitter"></i>,
  //     },
  //   ],
  // },
  // {
  //   id: 'cansu-tuman',
  //   image: team5,
  //   name: 'Cansu Tuman',
  //   position: 'Project Manager',
  //   mail: 'cansu@gmail.com',
  //   phone: '+125 (456) 121 894',
  //   category: 'manager',
  //   social_link: [
  //     {
  //       link: 'https://linkedin.com',
  //       target: '_blank',
  //       icon: <i className="fab fa-linkedin-in"></i>,
  //     },
  //     {
  //       link: 'https://twitter.com',
  //       target: '_blank',
  //       icon: <i className="fa-brands fa-x-twitter"></i>,
  //     },
  //     {
  //       link: 'https://facebook.com',
  //       target: '_blank',
  //       icon: <i className="fab fa-facebook-f"></i>,
  //     },
  //   ],
  // },
  // {
  //   id: 'devon-lane',
  //   image: team6,
  //   name: 'Devon Lane',
  //   position: 'Technician',
  //   mail: 'devon@gmail.com',
  //   phone: '+125 (544) 897 488',
  //   category: 'designer',
  //   social_link: [
  //     {
  //       link: 'https://facebook.com',
  //       target: '_blank',
  //       icon: <i className="fab fa-facebook-f"></i>,
  //     },
  //     {
  //       link: 'https://twitter.com',
  //       target: '_blank',
  //       icon: <i className="fa-brands fa-x-twitter"></i>,
  //     },
  //     {
  //       link: 'https://linkedin.com',
  //       target: '_blank',
  //       icon: <i className="fab fa-linkedin-in"></i>,
  //     },
  //   ],
  // },
]

export default teamData
