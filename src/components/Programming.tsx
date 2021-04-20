import * as React from "react"
import styled from "styled-components"

const Container = styled.div`
  > h1 {
    margin-bottom: 1rem;
  }

  > h3 {
    margin-bottom: 0.25rem;
  }

  > p {
    margin-bottom: 1rem;
  }
`

const Programming: React.FC = () => (
  <Container id="programming">
    <h1>* PROGRAMMING EXPERIENCE</h1>

    <h3>
      2006 - 2009 (hobbyist,{" "}
      <a
        href="https://wc3we.fandom.com/wiki/Jass_Coding"
        target="_blank"
        rel="noopener noreferrer"
      >
        JASS
      </a>
      )
    </h3>
    <p>
      I self-taught myself to program when I was 12 using Blizzard's event
      driven scripting langauge called JASS. I used it to create mods and custom
      maps in Warcraft III. Fun times.
    </p>

    <h3>2011 - 2016 (java, c++, c#)</h3>
    <p>
      Learned Java in school. I used it to create applications, join in
      programming competitions(
      <a
        href="https://drive.google.com/file/d/192NsAwp8o68biwlWBC-faXvwl-GAf2ri/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        and win
      </a>
      ). Created an android game. c++ was taught but nothing fancy. Some c#
      because I got also interested in Unity3D.
    </p>

    <h3>2019 - Current (JavaScript and the likes)</h3>
    <p>
      This is the era I started my web development career and got a job. Read
      more about this at the web journey section.
    </p>

    <h3>Languages learning on the side</h3>
    <p>
      C(CS50 Course). Rust(for web assembly). Python(general, algo, flask? maybe
      ML sometime?).
    </p>
  </Container>
)

export default Programming
