import * as React from "react"
import styled from "styled-components"
import "src/components/Layout.css"
import { StaticImage } from "gatsby-plugin-image"
import SEO from "src/components/SEO"

const Container = styled.div`
  display: flex;
  justify-content: center;

  > main {
    position: relative;
    color: #333;
    width: 840px;

    > .left-node {
      position: fixed;
      width: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      border-right: 3px dotted rgba(50, 100, 100, 0.15);
      padding-right: 2rem;
      /* border: 1px solid #020202; */
    }

    > .right-node {
      position: absolute;
      width: 540px;
      height: 200vh;
      padding-top: 8rem;
      left: 300px;
    }
  }

  li {
    margin-left: 1.65rem;
  }
`

const ColumnLeft = styled.div`
  width: inherit;
  text-align: right;

  > .name {
    font-size: 20px;
    color: #333;
    margin-bottom: 1rem;

    > h1 {
      font-family: Impact, sans-serif;
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }
  }

  > .quick-links {
    margin-bottom: 1rem;

    > ul {
      list-style: none;
    }
  }

  > .links {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-bottom: 1rem;

    > .links-container {
      width: 220px;

      display: flex;
      justify-content: flex-end;
      flex-wrap: wrap;

      > a {
        margin-left: 0.5rem;
      }
    }
  }

  > a {
    margin-top: 0.5rem;
    display: block;
  }

  p {
    font-size: 1rem;
  }
`

const ColumnRight = styled.div`
  > div {
    padding: 2rem;
    border-bottom: 3px dotted rgba(50, 100, 100, 0.15);
  }

  > .skills {
    > .skill {
      margin-bottom: 1rem;

      > h2 {
      }

      > ul {
        display: flex;
        flex-wrap: wrap;
      }
    }
  }

  > .programming {
    > h1 {
      margin-bottom: 1rem;
    }

    > h3 {
      margin-bottom: 0.25rem;
    }

    > p {
      margin-bottom: 1rem;
    }
  }

  h1 {
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1.4rem;
  }
`

const IndexPage: React.FC = () => {
  return (
    <Container>
      <SEO title="My Portfolio" />

      <main>
        <section className="left-node">
          <ColumnLeft>
            <div className="name">
              <StaticImage
                src="../images/my-picture.png"
                width={200}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="Christian Villamin's profile picture."
                placeholder="tracedSVG"
                style={{ borderRadius: 8 }}
              />
              <h1>CHRISTIAN VILLAMIN</h1>
              <p>
                I build web sites and
                <br />
                web applications.
              </p>
            </div>

            <div className="quick-links">
              <h2>Quick Nav</h2>
              <ul>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#work-experience">Work Exp</a>
                </li>
                <li>
                  <a href="#programming-experience">Prog Exp</a>
                </li>
                <li>
                  <a href="#web-journey">Web Journey</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
              </ul>
            </div>

            <div className="links">
              <h2>My Links</h2>

              <div className="links-container">
                <a href="http://github.com/codekcv">GitHub</a>
                <a href="https://www.linkedin.com/in/codekcv/">LinkedIn</a>
                <a href="https://twitter.com/codekcv">Twitter</a>
                <a href="https://codepen.io/codekcv">CodePen</a>
                <a href="https://dev.to/codekcv">dev.to</a>
                <a href="https://www.freecodecamp.org/codekcv">freeCodeCamp</a>
                <a href="https://www.youtube.com/channel/UC9NkngOuNAcPGfx4Nl3ODgg/videos">
                  YouTube
                </a>
              </div>
            </div>

            <p>
              This is my second portfolio site. See my first one when I was
              starting out with web
            </p>

            <a href="http://codekcv.github.io/">http://codekcv.github.io/</a>
          </ColumnLeft>
        </section>

        <section className="right-node">
          <ColumnRight>
            <div id="about" className="skills">
              <h1>// ABOUT ME AND STUFF</h1>
              <p>
                I'm a software engineer. Tinker Lord. Coding God. I don't play
                games but I play sometimes. Dank memes are fun. Piano. Cats. A
                little design.
              </p>
            </div>

            <div id="skills" className="skills">
              <h1>// SKILLS AND THINGS</h1>

              <div className="skill">
                <h2>Front-End</h2>

                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>ES6+</li>
                  <li>TypeScript</li>
                  <li>React</li>
                  <li>GatsbyJS</li>
                  <li>NextJS</li>
                  <li>styled-components</li>
                  <li>Sass</li>
                  <li>Framer Motion</li>
                  <li>tailwindCSS</li>
                  <li>chakra</li>
                </ul>
              </div>

              <div className="skill">
                <h2>State Management (local)</h2>

                <ul>
                  <li>Redux / RTK (large app)</li>
                  <li>Recoil (medium app)</li>
                  <li>Zustand (small app)</li>
                  <li>Context API (component scope)</li>
                </ul>
              </div>

              <div className="skill">
                <h2>State Management (network)</h2>

                <ul>
                  <li>Apollo GraphQL (large app)</li>
                  <li>react-query (small - medium app)</li>
                  <li>SWR (small app)</li>
                </ul>
              </div>

              <div className="skill">
                <h2>Back-End</h2>

                <ul>
                  <li>NodeJS</li>
                  <li>TypeScript</li>
                  <li>Express</li>
                  <li>socket.io</li>
                  <li>JWT</li>
                  <li>Prisma </li>
                  <li>Nexus</li>
                  <li>PostgreSQl</li>
                  <li>MongoDB</li>
                  <li>GraphQL</li>
                  <li>RESTful</li>
                </ul>
              </div>

              <div className="skill">
                <h2>Testing</h2>

                <ul>
                  <li>Jest</li>
                  <li>MochaJS</li>
                  <li>React Testing Library</li>
                  <li>e2e - Cypress</li>
                </ul>
              </div>

              <div className="skill">
                <h2>Version Control</h2>

                <ul>
                  <li>Git & GitHub</li>
                  <li>Folder with dates (just kidding)</li>
                </ul>
              </div>

              <div className="skill">
                <h2>Tools & Collab</h2>

                <ul>
                  <li>Slack</li>
                  <li>Discord</li>
                  <li>atlassian jira</li>
                  <li>Trello</li>
                </ul>
              </div>

              <div className="skill">
                <h2>System</h2>

                <ul>
                  <li>Linux</li>
                  <li>i use arch btw</li>
                </ul>
              </div>
            </div>

            {/* --- */}

            <div id="work-experience" className="work">
              <h1>// WORK EXPERIENCE</h1>

              <h2>
                High Output Ventures (<a href="https://hov.co/">hov.co</a>)
              </h2>

              <p>Dec 2019 - Current | Front-End Developer</p>
              <p>Project I maintained in HOV.</p>
              <p>Project I collaborated in HOV.</p>
              <p>Project I built for HOV.</p>
              <p>I also wrote an article in our HOV site.</p>
            </div>

            {/* --- */}

            <div id="programming-experience" className="programming">
              <h1>// PROGRAMMING EXPERIENCE</h1>
              <h3>2006 - 2009 (hobbyist)</h3>
              <p>
                I self-taught myself to program when I was 12 using Blizzard's
                event driven scripting langauge called JASS. I used it to create
                mods and custom maps in Warcraft III and StarCraft II. Fun
                times.
              </p>

              <h3>2011 - 2016 (java, c++, c#)</h3>
              <p>
                Learned Java in school. I used it to create applications, join
                in programming competitions(and win). Created an android game.
                c++ was taught but nothing fancy. Some c# because I got also
                interested in Unity3D.
              </p>

              <h3>2019 - Current (JavaScript and the likes)</h3>
              <p>This is the era I started my web development.</p>

              <h3>Languages learning on the side</h3>
              <p>
                C(CS50 Course). Rust(for web assembly). Python(general, algo,
                flask? maybe ML sometime?).
              </p>
            </div>

            <div id="web-journey" className="web-journey">
              <h1>// WEB JOURNEY </h1>
            </div>

            <div id="projects" className="projects">
              <h1>// LEARNING PROJECTS</h1>
              <p>
                These are just things I built as I was learning my way through
                web development.
              </p>
            </div>
          </ColumnRight>
        </section>
      </main>
    </Container>
  )
}

export default IndexPage

// const sections = [About, Skills, Experience, Projects, Blogs]

// const IndexPage: React.FC = () => {
//   return (
//     <Layout>
//       <SEO />

//       {sections.map((Section, index) => (
//         <Card key={index} Component={<Section />} />
//       ))}
//     </Layout>
//   )
// }
