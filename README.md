<p align="center">
    <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" align="center" width="30%">
</p>
<p align="center"><h1 align="center">NEXTJS-PORTFOLIO</h1></p>
<p align="center">
    <em><code>❯ A modern, responsive portfolio website built with Next.js 16, showcasing professional experience, projects, and skills with interactive animations and particle effects.</code></em>
</p>
<p align="center">
    <img src="https://img.shields.io/github/license/vedchaudhari/nextjs-portfolio?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
    <img src="https://img.shields.io/github/last-commit/vedchaudhari/nextjs-portfolio?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
    <img src="https://img.shields.io/github/languages/top/vedchaudhari/nextjs-portfolio?style=default&color=0080ff" alt="repo-top-language">
    <img src="https://img.shields.io/github/languages/count/vedchaudhari/nextjs-portfolio?style=default&color=0080ff" alt="repo-language-count">
</p>
<p align="center"><!-- default option, no dependency badges. -->
</p>
<p align="center">
    <!-- default option, no dependency badges. -->
</p>
<br>

##  Table of Contents

- [ Overview](#-overview)
- [ Features](#-features)
- [ Project Structure](#-project-structure)
  - [ Project Index](#-project-index)
- [ Getting Started](#-getting-started)
  - [ Prerequisites](#-prerequisites)
  - [ Installation](#-installation)
  - [ Usage](#-usage)
  - [ Testing](#-testing)
- [ Project Roadmap](#-project-roadmap)
- [ Contributing](#-contributing)
- [ License](#-license)
- [ Acknowledgments](#-acknowledgments)

---

##  Overview

A professional portfolio website built with Next.js 16 and TypeScript, featuring a modern dark theme with interactive animations. The portfolio showcases professional experience, projects, technical skills, and includes sections for expertise, work experience, education, project gallery, skills visualization, blog posts, and contact information. Built with performance and user experience in mind, utilizing cutting-edge web technologies.

---

##  Features

- **Interactive Hero Section** - Dynamic particle background with typewriter effect
- **Responsive Navigation** - Mobile-friendly navbar with smooth scrolling
- **Professional Sections** - Expertise, experience, projects, skills, blogs, and contact
- **Project Showcase** - Interactive project cards with live demos and GitHub links
- **Skills Visualization** - Animated skill cards with percentage indicators
- **Contact Form** - Professional contact section with social media links
- **Smooth Animations** - AOS (Animate On Scroll) and Framer Motion effects
- **Modern UI/UX** - Dark theme with cyan accents and glassmorphism effects

---

##  Project Structure

```sh
└── nextjs-portfolio/
    ├── README.md
    ├── app
    │   ├── about
    │   ├── favicon.ico
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    ├── components
    │   └── home
    ├── constant
    │   └── constant.ts
    ├── eslint.config.mjs
    ├── next.config.ts
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.mjs
    ├── public
    │   ├── file.svg
    │   ├── globe.svg
    │   ├── images
    │   ├── next.svg
    │   ├── pdfs
    │   ├── vercel.svg
    │   └── window.svg
    └── tsconfig.json
```


###  Project Index
<details open>
    <summary><b><code>NEXTJS-PORTFOLIO/</code></b></summary>
    <details> <!-- __root__ Submodule -->
        <summary><b>__root__</b></summary>
        <blockquote>
            <table>
            <tr>
                <td><b><a href='https://github.com/vedchaudhari/nextjs-portfolio/blob/master/package-lock.json'>package-lock.json</a></b></td>
                <td>Package lock file for dependency management</td>
            </tr>
            <tr>
                <td><b><a href='https://github.com/vedchaudhari/nextjs-portfolio/blob/master/next.config.ts'>next.config.ts</a></b></td>
                <td>Next.js configuration file</td>
            </tr>
            <tr>
                <td><b><a href='https://github.com/vedchaudhari/nextjs-portfolio/blob/master/tsconfig.json'>tsconfig.json</a></b></td>
                <td>TypeScript configuration</td>
            </tr>
            <tr>
                <td><b><a href='https://github.com/vedchaudhari/nextjs-portfolio/blob/master/eslint.config.mjs'>eslint.config.mjs</a></b></td>
                <td>ESLint configuration for code quality</td>
            </tr>
            <tr>
                <td><b><a href='https://github.com/vedchaudhari/nextjs-portfolio/blob/master/postcss.config.mjs'>postcss.config.mjs</a></b></td>
                <td>PostCSS configuration for Tailwind CSS</td>
            </tr>
            <tr>
                <td><b><a href='https://github.com/vedchaudhari/nextjs-portfolio/blob/master/package.json'>package.json</a></b></td>
                <td>Package dependencies and scripts configuration</td>
            </tr>
            </table>
        </blockquote>
    </details>
    <details> <!-- components Submodule -->
        <summary><b>components</b></summary>
        <blockquote>
            <details>
                <summary><b>home</b></summary>
                <blockquote>
                    <table>
                    <tr>
                        <td><b><a href='https://github.com/vedchaudhari/nextjs-portfolio/blob/master/components/home/Home.tsx'>Home.tsx</a></b></td>
                        <td>Main home page component with all sections</td>
                    </tr>
                    </table>
                    <details>
                        <summary><b>skills</b></summary>
                        <blockquote>
                            <table>
                            <tr>
                                <td><b><a href='https://github.com/vedchaudhari/nextjs-portfolio/blob/master/components/home/skills/Skills.tsx'>Skills.tsx</a></b></td>
                                <td>Skills section with animated skill cards</td>
                            </tr>
                            </table>
                        </blockquote>
                    </details>
                    <details>
                        <summary><b>resume</b></summary>
                        <blockquote>
                            <table>
                            <tr>
                                <td><b><a href='https://github.com/vedchaudhari/nextjs-portfolio/blob/master/components/home/resume/ResumeCard.tsx'>ResumeCard.tsx</a></b></td>
                                <td>Resume card component for experience/education</td>
                            </tr>
                            <tr>
                                <td><b><a href='https://github.com/vedchaudhari/nextjs-portfolio/blob/master/components/home/resume/Resume.tsx'>Resume.tsx</a></b></td>
                                <td>Resume section with work experience and education</td>
                            </tr>
                            </table>
                        </blockquote>
                    </details>
                    <details>
                        <summary><b>projects</b></summary>
                        <blockquote>
                            <table>
                            <tr>
                                <td><b><a href='https://github.com/vedchaudhari/nextjs-portfolio/blob/master/components/home/projects/Projects.tsx'>Projects.tsx</a></b></td>
                                <td>Projects showcase with interactive cards</td>
                            </tr>
                            </table>
                        </blockquote>
                    </details>
                    <details>
                        <summary><b>navbar</b></summary>
                        <blockquote>
                            <table>
                            <tr>
                                <td><b><a href='https://github.com/vedchaudhari/nextjs-portfolio/blob/master/components/home/navbar/MobileNavbar.tsx'>MobileNavbar.tsx</a></b></td>
                                <td>Mobile navigation component</td>
                            </tr>
                            <tr>
                                <td><b><a href='https://github.com/vedchaudhari/nextjs-portfolio/blob/master/components/home/navbar/Navbar.tsx'>Navbar.tsx</a></b></td>
                                <td>Desktop navigation component</td>
                            </tr>
                            <tr>
                                <td><b><a href='https://github.com/vedchaudhari/nextjs-portfolio/blob/master/components/home/navbar/ResponsiveNavbar.tsx'>ResponsiveNavbar.tsx</a></b></td>
                                <td>Responsive navigation wrapper</td>
                            </tr>
                            </table>
                        </blockquote>
                    </details>
                    <details>
                        <summary><b>contact</b></summary>
                        <blockquote>
                            <table>
                            <tr>
                                <td><b><a href='https://github.com/vedchaudhari/nextjs-portfolio/blob/master/components/home/contact/Contact.tsx'>Contact.tsx</a></b></td>
                                <td>Contact section with form and social links</td>
                            </tr>
                            </table>
                        </blockquote>
                    </details>
                    <details>
                        <summary><b>services</b></summary>
                        <blockquote>
                            <table>
                            <tr>
                                <td><b><a href='https://github.com/vedchaudhari/nextjs-portfolio/blob/master/components/home/services/ServiceCard.tsx'>ServiceCard.tsx</a></b></td>
                                <td>Service card component for expertise section</td>
                            </tr>
                            <tr>
                                <td><b><a href='https://github.com/vedchaudhari/nextjs-portfolio/blob/master/components/home/services/Services.tsx'>Services.tsx</a></b></td>
                                <td>Services/expertise section</td>
                            </tr>
                            </table>
                        </blockquote>
                    </details>
                    <details>
                        <summary><b>hero</b></summary>
                        <blockquote>
                            <table>
                            <tr>
                                <td><b><a href='https://github.com/vedchaudhari/nextjs-portfolio/blob/master/components/home/hero/ParticleBackground.tsx'>ParticleBackground.tsx</a></b></td>
                                <td>Particle background for hero section</td>
                            </tr>
                            <tr>
                                <td><b><a href='https://github.com/vedchaudhari/nextjs-portfolio/blob/master/components/home/hero/Hero.tsx'>Hero.tsx</a></b></td>
                                <td>Hero section with typewriter effect and CTA</td>
                            </tr>
                            </table>
                        </blockquote>
                    </details>
                    <details>
                        <summary><b>blog</b></summary>
                        <blockquote>
                            <table>
                            <tr>
                                <td><b><a href='https://github.com/vedchaudhari/nextjs-portfolio/blob/master/components/home/blog/Blog.tsx'>Blog.tsx</a></b></td>
                                <td>Blog section component</td>
                            </tr>
                            <tr>
                                <td><b><a href='https://github.com/vedchaudhari/nextjs-portfolio/blob/master/components/home/blog/BlogCard.tsx'>BlogCard.tsx</a></b></td>
                                <td>Individual blog card component</td>
                            </tr>
                            </table>
                        </blockquote>
                    </details>
                    <details>
                        <summary><b>footer</b></summary>
                        <blockquote>
                            <table>
                            <tr>
                                <td><b><a href='https://github.com/vedchaudhari/nextjs-portfolio/blob/master/components/home/footer/Footer.tsx'>Footer.tsx</a></b></td>
                                <td>Footer component</td>
                            </tr>
                            </table>
                        </blockquote>
                    </details>
                </blockquote>
            </details>
        </blockquote>
    </details>
    <details> <!-- constant Submodule -->
        <summary><b>constant</b></summary>
        <blockquote>
            <table>
            <tr>
                <td><b><a href='https://github.com/vedchaudhari/nextjs-portfolio/blob/master/constant/constant.ts'>constant.ts</a></b></td>
                <td>Navigation links and constants configuration</td>
            </tr>
            </table>
        </blockquote>
    </details>
    <details> <!-- app Submodule -->
        <summary><b>app</b></summary>
        <blockquote>
            <table>
            <tr>
                <td><b><a href='https://github.com/vedchaudhari/nextjs-portfolio/blob/master/app/layout.tsx'>layout.tsx</a></b></td>
                <td>Root layout with navigation and footer</td>
            </tr>
            <tr>
                <td><b><a href='https://github.com/vedchaudhari/nextjs-portfolio/blob/master/app/globals.css'>globals.css</a></b></td>
                <td>Global CSS styles with Tailwind CSS</td>
            </tr>
            <tr>
                <td><b><a href='https://github.com/vedchaudhari/nextjs-portfolio/blob/master/app/page.tsx'>page.tsx</a></b></td>
                <td>Main page component rendering Home</td>
            </tr>
            </table>
            <details>
                <summary><b>about</b></summary>
                <blockquote>
                    <details>
                        <summary><b>team</b></summary>
                        <blockquote>
                            <details>
                                <summary><b>[name]</b></summary>
                                <blockquote>
                                    <table>
                                    <tr>
                                        <td><b><a href='https://github.com/vedchaudhari/nextjs-portfolio/blob/master/app/about/team/[name]/page.tsx'>page.tsx</a></b></td>
                                        <td>Dynamic team member page</td>
                                    </tr>
                                    </table>
                                </blockquote>
                            </details>
                        </blockquote>
                    </details>
                </blockquote>
            </details>
        </blockquote>
    </details>
</details>

---
##  Getting Started

###  Prerequisites

Before getting started with nextjs-portfolio, ensure your runtime environment meets the following requirements:

- **Programming Language:** TypeScript
- **Package Manager:** Npm


###  Installation

Install nextjs-portfolio using one of the following methods:

**Build from source:**

1. Clone the nextjs-portfolio repository:
```sh
❯ git clone https://github.com/vedchaudhari/nextjs-portfolio
```

2. Navigate to the project directory:
```sh
❯ cd nextjs-portfolio
```

3. Install the project dependencies:


**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm install
```




###  Usage
Run nextjs-portfolio using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm run dev
```


###  Testing
Run the test suite using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm test
```


---
##  Project Roadmap

- [X] **`Hero Section`**: <strike>Interactive hero with particle background and typewriter effect.</strike>
- [X] **`Portfolio Sections`**: <strike>Complete sections for expertise, experience, projects, skills, blogs, and contact.</strike>
- [X] **`Responsive Design`**: <strike>Mobile-first responsive design with modern UI/UX.</strike>
- [X] **`Animations`**: <strike>Smooth animations using AOS and Framer Motion.</strike>
- [ ] **`Contact API`**: Implement backend API for contact form functionality.
- [ ] **`Blog CMS`**: Add content management system for blog posts.
- [ ] **`Dark/Light Mode`**: Add theme toggle functionality.

---

##  Contributing

- **💬 [Join the Discussions](https://github.com/vedchaudhari/nextjs-portfolio/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/vedchaudhari/nextjs-portfolio/issues)**: Submit bugs found or log feature requests for the `nextjs-portfolio` project.
- **💡 [Submit Pull Requests](https://github.com/vedchaudhari/nextjs-portfolio/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/vedchaudhari/nextjs-portfolio
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/vedchaudhari/nextjs-portfolio/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=vedchaudhari/nextjs-portfolio">
   </a>
</p>
</details>

---

##  License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

##  Acknowledgments

- List any resources, contributors, inspiration, etc. here.

---
