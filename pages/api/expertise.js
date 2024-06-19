const expertise = [
    {
        id: 0,
        title: 'Full Stack Development with Laravel and MySQL',
        desc: 'I specialize in Full Stack Development, leveraging Laravel and MySQL to create robust web applications. My expertise spans server-side rendering, RESTful API development, and efficient database management. With a deep understanding of Laravel’s MVC architecture and MySQL’s relational database capabilities, I deliver tailored web solutions that meet client requirements effectively.',
    },
    {
        id: 1,
        title: 'Scrum and Jira',
        desc: "As a developer and a QA Engineer, I'm proficient in Jira and Scrum methodologies. I use Jira to simplify project management tasks like task assignment, prioritization, and progress tracking. Scrum has improved my teamwork, utilizing daily stand-ups, sprint planning, and retrospectives. My expertise ensures high-quality software products are delivered promptly.",
    },
    {
        id: 2,
        title: 'Designing (UI/UX)',
        desc: 'I am proficient in using design software such as Figma, Adobe XD, and Adobe Illustrator. Through participating in hackathons and freelance work, I have gained practical experience in UI/UX design and graphic design. Designing is my passion, and it has allowed me to continue to develop my creative skills and grow in the field.',
    },
    {
        id: 3,
        title: 'Github',
        desc: "GitHub is essential for version control and collaboration. Its intuitive interface and features like pull requests and issue tracking simplify the process. Continuous integration ensures up-to-date code. GitHub is vital to my success as a developer.",
    },
    {
        id: 4,
        title: 'Open Source Contributor',
        desc: "Open Source is the future. I usually take some time on weekend and contribute into opensource project. It gives me opportunity to learn from best developer's practices and also gives me a chance to help others and contribute into the community for the good.",
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
