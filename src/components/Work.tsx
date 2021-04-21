import * as React from "react"
import styled from "styled-components"

const Container = styled.div`
  > h2 {
    font-size: 1.5rem;
  }
  > .date {
    margin-top: -16px;
    font-size: 0.8rem;
    font-style: italic;
  }

  .divider {
    border-bottom: 1px solid rgba(50, 100, 100, 0.15);
    margin-bottom: 18px;
  }

  > .hov-project {
    margin-bottom: 3rem;

    h3 {
      font-size: 1.15rem;
    }

    .sub {
      margin-top: -16px;
      font-size: 0.8rem;
      font-style: italic;
    }
  }

  .article {
    display: block;
    margin-bottom: 18px;
  }

  @media (max-width: 800px) {
    > .date {
      margin-top: -14px;
    }
  }
`

const Wallet = () => (
  <div className="hov-project">
    <h3>Private Enterprise Project 1</h3>
    <p className="sub">Project I mainted and developed in HOV.</p>
    <p>
      Worked with a team of designers, QA Specialists, backend engineers, and
      product managers on an information management application for real-time
      game and player data processing. Worked as a core member of the front-end
      team in an agile environment that maintain, develop, test, and ships
      features.
    </p>

    <ul className="tech-used">
      <li>React</li>
      <li>Redux</li>
      <li>TypeScript</li>
      <li>Apollo GraphQL</li>
      <li>Ant Design</li>
      <li>styled-components</li>
      <li>Recharts</li>
      <li>React Hook Form</li>
      <li>React Testing Library</li>
      <li>Jest</li>
      <li>CircleCI</li>
    </ul>
  </div>
)

const Her = () => (
  <>
    <div className="hov-project">
      <h3>
        HER (
        <a href="https://www.her.vn/" target="_blank" rel="noopener noreferrer">
          her.vn
        </a>
        )
      </h3>

      <div className="sub">Project I built for HOV</div>

      <p>
        HER is a blogging site about better living of Vietnamese women. A
        project I built from scratch with mobile, tablet, and desktop
        responsiveness. And as the sole front-end developer.
      </p>

      <ul className="tech-used">
        <li>NextJS</li>
        <li>Strapi (CMS)</li>
        <li>react markdown</li>
        <li>Zustand</li>
        <li>SWR</li>
        <li>graphql-request</li>
        <li>styled-components</li>
        <li>ConvertKit</li>
        <li>Vercel deployment</li>
        <li>react</li>
      </ul>
    </div>
  </>
)

const HOV = () => (
  <div className="hov-project">
    <h3>
      HOV Website (
      <a href="https://hov.co/" target="_blank" rel="noopener noreferrer">
        hov.co
      </a>
      )
    </h3>
    <div className="sub">Project I collaborated in HOV</div>

    <p>
      The revamped website of High Output Ventures built from scratch from
      collaboration with the FE team. My main part of this is creating the
      main/index page and its animations.
    </p>

    <ul className="tech-used">
      <li>NextJS</li>
      <li>TypeScript</li>
      <li>tailwindCSS</li>
      <li>Framer Motion</li>
      <li>react-intersection-obvserver</li>
      <li>React Hook Form</li>
      <li>Apollo GraphQL</li>
    </ul>
  </div>
)

const Work: React.FC = () => (
  <Container id="work">
    <h1>* WORK EXPERIENCE</h1>

    <h2>
      - High Output Ventures (
      <a href="https://hov.co/" target="_blank" rel="noopener noreferrer">
        hov.co
      </a>
      )
    </h2>
    <p className="date">Dec 2019 - Current | Front-End Developer</p>

    <Wallet />
    <Her />
    <HOV />

    <p>
      I also wrote an article in our HOV site. You can read it here at your own
      peril.
    </p>
    <a
      className="article"
      href="https://www.hov.co/blog/post/ill-tell-you-6-specific-things-to-stop-doing-and-win-at-life-could-be-offensive"
      target="_blank"
      rel="noopener noreferrer"
    >
      How to win at live. Could be offensive.
    </a>

    <div className="divider" />

    <h2>{`- { yourCompanyName }`}</h2>
    <div className="date">202X - 20XX | Software Engineer</div>
    <p>
      Hire me. I live and breathe programming. I love meeting new people and
      learning with each other. I quickly adapt to environments. I learn fast.
      Always tinkering and excited in ever-growing tech. I'm a bit crazy too.
    </p>

    <div className="divider" />

    <h2>- Self-Employed</h2>
    <div className="date">2060 - To Death | Sheperd</div>
    <p className="work-description">
      Milking cows and tending sheeps in a peaceful farm at a mountain side with
      a waterfall and a river crossing.
    </p>
  </Container>
)

export default Work
