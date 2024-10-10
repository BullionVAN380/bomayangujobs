const joblist = [
    {
      jobTitle: "Site Engineer",
      description:
        "Manage and supervise construction projects, ensuring all work complies with plans and safety regulations.",
      county: "Nairobi",
      publishedDate: "2024-10-01",
      applicationDeadline: "2024-10-20",
      jobCategory: "Engineering & Construction Management",
      qualifications: [
        "Bachelor's degree in Civil Engineering",
        "3+ years of experience in site management",
        "Proficiency in project management software"
      ],
      contactEmail: "recruitment@buildkenya.com",
    },
    {
      jobTitle: "Quantity Surveyor",
      description:
        "Oversee cost management for construction projects, including cost estimates and budget control.",
      county: "Mombasa",
      publishedDate: "2024-10-05",
      applicationDeadline: "2024-10-25",
      jobCategory: "Quantity Surveying",
      qualifications: [
        "Diploma/Degree in Quantity Surveying",
        "Experience with cost management software",
        "Analytical skills"
      ],
      contactEmail: "jobs@mombasaconstruct.co.ke",
    },
    {
      jobTitle: "Construction Foreman",
      description:
        "Supervise construction workers, ensuring project schedules are met and safety protocols followed.",
      county: "Kilifi",
      publishedDate: "2024-10-08",
      applicationDeadline: "2024-10-28",
      jobCategory: "Supervision & Skilled Trades",
      qualifications: [
        "Diploma in Construction Management",
        "5+ years of experience as a foreman",
        "Leadership and communication skills"
      ],
      contactEmail: "hr@kilificonstruct.co.ke",
    },
    {
      jobTitle: "Architectural Drafter",
      description:
        "Prepare detailed drawings and designs for projects, collaborating with architects and engineers.",
      county: "Kisumu",
      publishedDate: "2024-10-03",
      applicationDeadline: "2024-10-23",
      jobCategory: "Design & Drafting",
      qualifications: [
        "Diploma in Architectural Drafting",
        "Proficiency in AutoCAD",
        "Attention to detail"
      ],
      contactEmail: "careers@kisumudesigns.com",
    },
    {
      jobTitle: "Civil Engineer",
      description:
        "Plan, design, and oversee construction and maintenance of building structures and infrastructure.",
      county: "Nakuru",
      publishedDate: "2024-10-02",
      applicationDeadline: "2024-10-22",
      jobCategory: "Engineering",
      qualifications: [
        "Bachelor's degree in Civil Engineering",
        "5+ years of experience in construction projects",
        "Licensed engineer"
      ],
      contactEmail: "civileng@nakuruinfrastructure.co.ke",
    },
    {
      jobTitle: "Mason",
      description:
        "Build structures with stone, bricks, and concrete blocks, ensuring construction quality and structural integrity.",
      county: "Nyeri",
      publishedDate: "2024-10-04",
      applicationDeadline: "2024-10-24",
      jobCategory: "Skilled Trades",
      qualifications: [
        "Certificate in Masonry",
        "2+ years of experience in masonry work",
        "Attention to detail"
      ],
      contactEmail: "jobs@nyericonstruction.co.ke",
    },
    {
      jobTitle: "Plumber",
      description:
        "Install and repair water supply lines, waste disposal systems, and related appliances for both residential and commercial buildings.",
      county: "Meru",
      publishedDate: "2024-10-01",
      applicationDeadline: "2024-10-21",
      jobCategory: "Plumbing & Piping",
      qualifications: [
        "Certificate/Diploma in Plumbing",
        "3+ years of experience",
        "Problem-solving skills"
      ],
      contactEmail: "hr@meruplumbing.co.ke",
    },
    {
      jobTitle: "Electrician",
      description:
        "Install, maintain, and repair electrical systems in residential, commercial, and industrial buildings.",
      county: "Machakos",
      publishedDate: "2024-10-07",
      applicationDeadline: "2024-10-27",
      jobCategory: "Electrical",
      qualifications: [
        "Diploma in Electrical Engineering",
        "2+ years of experience in electrical installation",
        "Knowledge of safety regulations"
      ],
      contactEmail: "recruitment@machakospower.com",
    },
    {
      jobTitle: "Carpenter",
      description:
        "Construct, install, and repair building frameworks and structures such as stairways, doorframes, partitions, and rafters.",
      county: "Kiambu",
      publishedDate: "2024-10-09",
      applicationDeadline: "2024-10-29",
      jobCategory: "Skilled Trades",
      qualifications: [
        "Certificate in Carpentry",
        "3+ years of experience in construction carpentry",
        "Attention to detail"
      ],
      contactEmail: "jobs@kiambucarpentry.com",
    },
    {
      jobTitle: "Heavy Equipment Operator",
      description:
        "Operate heavy machinery used in construction, such as bulldozers, excavators, and loaders.",
      county: "Uasin Gishu",
      publishedDate: "2024-10-03",
      applicationDeadline: "2024-10-23",
      jobCategory: "Machinery Operation",
      qualifications: [
        "Certificate in Heavy Equipment Operation",
        "Experience operating machinery on large construction sites",
        "Understanding of safety regulations"
      ],
      contactEmail: "operator@uasinmachinery.co.ke",
    },
    {
      jobTitle: "Project Manager",
      description:
        "Lead construction projects, ensuring they are completed on time, within budget, and according to specifications.",
      county: "Bungoma",
      publishedDate: "2024-10-06",
      applicationDeadline: "2024-10-26",
      jobCategory: "Project Management",
      qualifications: [
        "Degree in Construction Management",
        "5+ years of experience managing large construction projects",
        "Strong leadership and communication skills"
      ],
      contactEmail: "careers@bungomaconstruct.co.ke",
    },
    {
      jobTitle: "Bricklayer",
      description:
        "Build walls, foundations, and other structures using bricks, blocks, and other materials.",
      county: "Kakamega",
      publishedDate: "2024-10-10",
      applicationDeadline: "2024-10-30",
      jobCategory: "Skilled Trades",
      qualifications: [
        "Certificate in Bricklaying",
        "2+ years of experience in bricklaying",
        "Knowledge of construction techniques"
      ],
      contactEmail: "hr@kakamegabricklayers.co.ke",
    },
    {
      jobTitle: "Steel Fixer",
      description:
        "Install and tie steel bars and mesh in concrete structures to strengthen buildings and other infrastructure.",
      county: "Kericho",
      publishedDate: "2024-10-12",
      applicationDeadline: "2024-11-01",
      jobCategory: "Skilled Trades",
      qualifications: [
        "Certificate in Steel Fixing",
        "2+ years of experience in construction",
        "Knowledge of construction safety"
      ],
      contactEmail: "jobs@kerichosteel.com",
    },
    {
      jobTitle: "Surveyor",
      description:
        "Measure land and properties to determine boundaries and prepare reports for use in construction and legal matters.",
      county: "Baringo",
      publishedDate: "2024-10-05",
      applicationDeadline: "2024-10-25",
      jobCategory: "Surveying",
      qualifications: [
        "Degree in Surveying or Geomatics",
        "5+ years of experience",
        "Proficiency with surveying instruments"
      ],
      contactEmail: "careers@baringosurveyors.co.ke",
    },
    {
      jobTitle: "Interior Designer",
      description:
        "Design and oversee the aesthetic elements of interior spaces in residential and commercial buildings.",
      county: "Nakuru",
      publishedDate: "2024-10-11",
      applicationDeadline: "2024-10-31",
      jobCategory: "Design & Architecture",
      qualifications: [
        "Diploma in Interior Design",
        "3+ years of experience in interior design",
        "Proficiency with design software"
      ],
      contactEmail: "interiors@nakurudesigns.com",
    },
    {
        jobTitle: "Site Engineer",
        description:
          "Responsible for managing and supervising construction projects, ensuring all work is completed according to plans and safety regulations.",
        county: "Nairobi",
        publishedDate: "2024-10-01",
        applicationDeadline: "2024-10-20",
        jobCategory: "Engineering & Construction Management",
        qualifications: [
          "Bachelor's degree in Civil Engineering or equivalent",
          "At least 3 years of experience in site management",
          "Proficiency in project management software"
        ],
        contactEmail: "recruitment@buildkenya.com",
      },
      {
        jobTitle: "Quantity Surveyor",
        description:
          "Oversee cost management for construction projects, preparing cost estimates, and managing budgets from project start to completion.",
        county: "Mombasa",
        publishedDate: "2024-10-05",
        applicationDeadline: "2024-10-25",
        jobCategory: "Quantity Surveying",
        qualifications: [
          "Diploma or degree in Quantity Surveying",
          "Familiarity with cost management software",
          "Strong analytical skills"
        ],
        contactEmail: "jobs@mombasaconstruct.co.ke",
      },
      {
        jobTitle: "Construction Foreman",
        description:
          "Supervise and coordinate the activities of construction workers, ensuring work progresses according to project schedule.",
        county: "Kilifi",
        publishedDate: "2024-10-08",
        applicationDeadline: "2024-10-28",
        jobCategory: "Supervision & Skilled Trades",
        qualifications: [
          "Certificate or diploma in construction management",
          "Minimum of 5 years of experience as a foreman",
          "Strong leadership and communication skills"
        ],
        contactEmail: "hr@kilificonstruct.co.ke",
      },
      {
        jobTitle: "Architectural Drafter",
        description:
          "Prepare detailed drawings and designs for construction projects, working closely with architects and engineers.",
        county: "Kisumu",
        publishedDate: "2024-10-03",
        applicationDeadline: "2024-10-23",
        jobCategory: "Design & Drafting",
        qualifications: [
          "Diploma in Architectural Drafting or related field",
          "Proficiency in AutoCAD and other design software",
          "Attention to detail"
        ],
        contactEmail: "careers@kisumudesigns.com",
      },
  ];
  