import React from "react";
import styled from "styled-components";

const ProjectsWrapper = styled.div`
  background-color: #151515;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  scroll-snap-align: start;
  overflow: auto;
  a {
    text-decoration: none;
    color: #fff;
  }
`;

const Title = styled.div`
  font-weight: bolder;
  font-size: 2.5rem;
  padding-top: 10rem;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  justify-items: center;
  gap: 3rem;
  padding-top: 15rem;
  padding-bottom: 5rem;

  @media (min-width: 600px) {
    width: 80%;
  }
  @media (max-width: 600px) {
    padding-top: 5rem;
    width: 400px;
  }
`;

const Card = styled.div`
  background-color: #4e4e4e;
  @media (min-width: 600px) {
    width: 400px;
  }
  width: 300px;
  position: relative;
  border-radius: 5px;

  :hover + hovercard {
    display: block;
  }
`;
const CardTitle = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  padding: 0.5rem 1rem 0 1rem;
  a {
    text-decoration: none;
    color: #fff;
  }
`;
const CardExtra = styled.div`
  padding: 0.5rem 1rem;
  font-weight: lighter;
  a {
    text-decoration: none;
    color: #fff;
  }
`;

const Image = styled.img`
  @media (min-width: 600px) {
    width: 400px;
  }
  width: 300px;
  height: 100%;
  border-radius: 5px 5px 0 0;
  object-fit: cover;
`;

const ImageWrapper = styled.div`
  height: 17rem;
  position: relative;
  border-radius: 5px 5px 0 0;
`;

const HoverCard = styled.a`
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  display: none;
  text-decoration: none;
  color: #fff;
  border-radius: 5px 5px 0 0;

  ${ImageWrapper}:hover & {
    display: flex;
  }
`;

const image = require("../images/covid-19.png");

function Projects() {
  return (
    <ProjectsWrapper>
      <Title>
        <a id="projects" href="#projects">
          Projects
        </a>
      </Title>
      <CardGrid>
        <Card>
          <ImageWrapper>
            <Image src={image}></Image>
            <HoverCard
              href="https://covid-19.izaacnoordhuis.dev/"
              className="hovercard"
              target="_blank"
              rel="noreferrer"
            >
              Live Site
            </HoverCard>
          </ImageWrapper>
          <CardTitle>
            <a
              href="https://covid-19.izaacnoordhuis.dev"
              target="_blank"
              rel="noreferrer"
            >
              Covid-19 Tracker
            </a>
          </CardTitle>
          <CardExtra>
            <a
              href="https://github.com/noord0/covid-tracker"
              target="_blank"
              rel="noreferrer"
            >
              Source Code
            </a>
          </CardExtra>
        </Card>
      </CardGrid>
    </ProjectsWrapper>
  );
}

export default Projects;
