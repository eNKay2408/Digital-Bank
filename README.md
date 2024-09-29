<div align="center">

  # 🏦 Digital Bank

  *A modern React JS application with reusable components and Tailwind CSS for responsive design* 🚀

  ![ReactJS](https://img.shields.io/badge/React_JS-black?style=for-the-badge&logo=react&logoColor=61DAFB)
  ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-black?style=for-the-badge&logo=tailwindcss&logoColor=62baf3)
  ![Docker](https://img.shields.io/badge/Docker-black?style=for-the-badge&logo=docker&logoColor=4090e1)
  ![GitLab CI/CD](https://img.shields.io/badge/GitLab_CI/CD-black?style=for-the-badge&logo=gitlab&logoColor=d2553c)
  ![AWS S3](https://img.shields.io/badge/AWS_S3-black?style=for-the-badge&logo=amazonwebservices&logoColor=FF9900)

  <img width="595px" src="https://res.cloudinary.com/dvzhmi7a9/image/upload/v1727286835/DigitalBank/1-Hero.png">

  [![Live Demo](https://img.shields.io/badge/🔗_Visit_website-black?style=flat)](https://digital-bank.enkay.live)
</div>

## 📘 Table of Contents
1. [Introduction](#introduction) 🧟
2. [Technologies](#technologies) 💻
3. [Features](#features) 🔎
4. [DevOps](#devops) ✈️
5. [Acknowledgements](#acknowledgements) 💙
6. [Contact](#contact) 🌐

## 🧟 <a name="introduction">Introduction</a>
*Welcome to Digital Bank, the **1st** of 4 major projects I’ve built as part of my journey to create a strong portfolio for my first job application. As this is one of my first major project README files, some mistakes are to be expected. If you encounter any issues or need further support, please don't hesitate to reach out via the contact information below. I truly appreciate your understanding and thank you so much for taking the time to visit this project!* 😚

I felt overwhelmed at the beginning because I saw many challenges ahead. The directory structure had a lot of files when I first set it up with Vite and created components. Luckily, since this is just a front-end project, I gradually adapted and became more comfortable with the process. Right after finishing it, I was proud of the beautiful website I had created.

Through this project, I developed my front-end web skills and learned to structure a fully responsive application. This experience served as a great starting point for getting acquainted with tools like React and Tailwind CSS. It has been a significant step in my development career, helping me grow as a developer and gain a deeper understanding of creating modern, reusable components.

## 💻 <a name="technologies">Technologies</a>

<div align="center">

  ![Technologies](https://skillicons.dev/icons?i=react,tailwind,docker,gitlab,aws)

</div>

- **ReactJS:** For building user interfaces with reusable components.
- **TailwindCSS:** For styling and ensuring a responsive design.
- **Docker:** For containerizing the application.
- **GitLab CI/CD:** For automating building and deployment.
- **AWS S3:** For hosting static assets and deploying the application.

## 🔎 <a name="features">Features</a>

**🔷 Responsive Navbar:** Provides intuitive navigation with a dynamic, mobile-friendly menu.

**🔷 Modern Hero:** Captivates users with a compelling headline and engaging visuals.

**🔷 Stats & Business:** Highlights key metrics and business features with clear, engaging content.

**🔷 Efficient Billing:** Simplifies transaction tracking and billing with easy-to-use controls and visuals.

**🔷 Card Deal:** Helps users find the best credit card with simple steps and attractive visuals.

**🔷 Testimonials & Clients:** Builds trust with customer feedback and client logos.

**🔷 CTA & Footer:** Engages users with a call-to-action and provides essential information and links.

<img width="49%" src="https://res.cloudinary.com/dvzhmi7a9/image/upload/v1727286835/DigitalBank/1-Hero.png" alt="Hero"> <img width="49%" src="https://res.cloudinary.com/dvzhmi7a9/image/upload/v1727286833/DigitalBank/2-Business.png" alt="Stats & Business">

<img width="49%" src="https://res.cloudinary.com/dvzhmi7a9/image/upload/v1727286833/DigitalBank/3-Billing.png" alt="Billing"> <img width="49%" src="https://res.cloudinary.com/dvzhmi7a9/image/upload/v1727286833/DigitalBank/4-CardDeal.png" alt="Card Deal">

<img width="49%" src="https://res.cloudinary.com/dvzhmi7a9/image/upload/v1727286833/DigitalBank/5-Testimonials.png" alt="Testimonials"> <img width="49%" src="https://res.cloudinary.com/dvzhmi7a9/image/upload/v1727286833/DigitalBank/6-Footer.png" alt="Testimonials & Clients">

## ✈️ <a name="devops">DevOps</a>

### Prerequisites
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [GitLab](https://gitlab.com/)
- [AWS](https://aws.amazon.com/)

### 🖥️ Development 
#### 1. Clone the repository:
```
git clone https://github.com/eNKay2408/Digital-Bank.git
cd Digital-Bank
```

#### 2. Install dependencies:
```
npm install
```

#### 3. Start the development server:
```
npm run dev
```

#### 4. Open the browser and navigate to [http://localhost:5173](http://localhost:5173) to view the application.

#### 5. Make changes to the code and see the changes reflected in real-time.

### 🔄 CI/CD

#### 1. Create GitHub repository and add remote URL to the local repository.
- Because GitLab CI/CD is used for building and deploying the application
- The code is hosted on GitHub and the CI/CD pipeline is triggered using a webhook.

#### 2. Setup AWS S3 and IAM:
- Setup AWS S3 bucket for hosting the static assets: Follow this [tutorial video](https://www.youtube.com/watch?v=-l83oqcaTHg) for step-by-step instructions.
- Create an IAM user and generate access keys: Follow this [tutorial video](https://www.youtube.com/watch?v=39X5WdZbEwQ) 

  (**NOTE:** Choose Command Line Interface (CLI) instead of Application running outside AWS).

#### 3. Set up CI/CD on GitLab:
- Create a new empty project on GitLab.
- Replace `$GITHUB_REPO_URL` with your repository URL in the local `.gitlab-ci.yml` file. Then copy this file to the root of your GitLab repository.
- Go to Settings > CI/CD > Variables and add the following environment variables: `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_DEFAULT_REGION` (e.g, ap-southeast-1), `S3_BUCKET` (Bucket name), `GITHUB_REPO` (Repository name).
- Add a trigger token in the CI/CD settings.

#### 4. Add Webhook to GitHub:
- Go to GitHub repository > Settings > Webhooks > Add Webhook.
- Add the GitLab trigger URL and the trigger token:
`https://gitlab.com/api/v4/projects/<GITLAB_PROJECT_ID>/trigger/pipeline?token=<TRIGGER_TOKEN>&ref=main`
- Replace `<GITLAB_PROJECT_ID>` with your GitLab project ID and `<TRIGGER_TOKEN>` with your trigger token.

#### 5. Push the code to GitHub:
- Push the code to the GitHub repository.
- The GitLab CI/CD will be triggered automatically.
- Once the pipeline is successful, the application will be deployed to AWS S3.

#### 6. Open the browser and navigate to the S3 bucket URL to view the deployed application.

![Successful Deployment](https://res.cloudinary.com/dvzhmi7a9/image/upload/v1727451963/DigitalBank/7-GitLab.png)

### 🌟 I hope it saves you time debugging, as I’ve already gone through the tough parts for you, `XD`. And if you found it useful, a star on this GitHub repository would mean the world to me!

## 💙 <a name="acknowledgements">Acknowledgements</a>

- **[JS Mastery](https://www.jsmastery.pro/):** For the amazing [tutorial](https://www.youtube.com/watch?v=_oO4Qi5aVZs) and resources that helped me build this project.
- **[Gitlab](https://gitlab.com/):** For the CI/CD that helped me automate building and deploying the application.
- **[AWS](https://aws.amazon.com/):** For the free tier S3 services that helped me deploy the application.
- **[Cloudinary](https://cloudinary.com/):** For the free image hosting service that helped me store and serve images.
- **[anmolbaranwal](https://dev.to/anmolbaranwal):** For the amazing [article](https://dev.to/anmolbaranwal/make-github-readme-like-pro-15am) that helped me create this beautiful README.

## 🌐 <a name="contact">Contact</a>

- **Name:** Nguyen Phan Duc Khai - **eNKay**
- **Portfolio:** [enkay.live](https://enkay.live)
- **LinkedIn:** [en-kay](https://www.linkedin.com/in/en-kay/)
- **Email:** [enkay.work@outlook.com](mailto:enkay.work@outlook.com)