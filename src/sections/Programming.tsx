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
    <h1>// PROGRAMMING EXPERIENCE</h1>

    <h3>2006 - 2009 (hobbyist)</h3>
    <p>
      I self-taught myself to program when I was 12 using Blizzard's event
      driven scripting langauge called JASS. I used it to create mods and custom
      maps in Warcraft III and StarCraft II. Fun times.
    </p>

    <h3>2011 - 2016 (java, c++, c#)</h3>
    <p>
      Learned Java in school. I used it to create applications, join in
      programming competitions(and win). Created an android game. c++ was taught
      but nothing fancy. Some c# because I got also interested in Unity3D.
    </p>

    <h3>2019 - Current (JavaScript and the likes)</h3>
    <p>This is the era I started my web development.</p>

    <h3>Languages learning on the side</h3>
    <p>
      C(CS50 Course). Rust(for web assembly). Python(general, algo, flask? maybe
      ML sometime?).
    </p>
  </Container>
)

export default Programming