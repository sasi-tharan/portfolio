const portfolio = [
    {
      id: 0,
      projectName: "UlavarSandhai PVT",
      url: "https://fms.uzhavarsandhai.in/",
      image: "projects/logo_main.jpg",
      projectDetail:
        "Developed a comprehensive Livestock Management System using Laravel and MySQL. This system utilizes Bootstrap for responsive design and follows the MVC architecture, ensuring scalability and maintainability. It includes features for efficient livestock management, enhancing operational efficiency and productivity.",
      technologiesUsed: [
        {
          tech: "Laravel",
        },
        {
          tech: "MySQL",
        },
        {
          tech: "Bootstrap",
        },
        {
          tech: "MVC Architecture",
        },
      ],
    },
    {
      id: 1, // Changed id to 1 (assuming this should be unique per project)
      projectName: "Samsons Cash and Carry",
      url: "https://crm.wie-testing.co.uk/",
      image: "projects/samsons.png",
      projectDetail:
        "Developed a wholesale ecommerce website using Laravel, providing Samsons Cash and Carry with unparalleled business consulting solutions tailored to meet client’s unique needs.",
      technologiesUsed: [
        {
          tech: "Laravel",
        },
        {
          tech: "MySQL",
        },
        {
          tech: "Bootstrap",
        },
        {
          tech: "MVC Architecture",
        },
      ],
    },
  ];
  
  export default function handler(req, res) {
    res.status(200).json(portfolio);
  }
  