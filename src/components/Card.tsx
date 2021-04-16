import * as React from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import styled from "styled-components"

const Container = styled(motion.div)`
  max-width: 960px;

  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.05);

  margin-bottom: 4rem;
  padding: 2rem;
`

type Props = {
  Component: React.ReactNode
}

const Card: React.FC<Props> = ({ Component }) => {
  const { ref, inView } = useInView({ threshold: 0.25 })

  return (
    <Container
      ref={ref}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
      transition={{ ease: "easeInOut", duration: 1 }}
    >
      {Component}
    </Container>
  )
}

export default Card
