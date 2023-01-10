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
`;

const Title = styled.div`
  font-weight: bolder;
  font-size: 2.5rem;
  padding-top: 10rem;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-items: center;
  width: 80%;
  gap: 5rem;
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

const Card = styled.div`
  background-color: #4e4e4e;
  width: 300px;
`;
const CardTitle = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  padding: 0 1rem;
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
  width: 300px;
`;

function Projects() {
  return (
    <ProjectsWrapper>
      <Title>Projects</Title>
      <CardGrid>
        <Card>
          <Image src="https://as2.ftcdn.net/v2/jpg/02/18/72/73/1000_F_218727336_yFWOEXi4dqc01tCWSNZg2JSa0TPHtz4h.jpg"></Image>
          <CardTitle>Title</CardTitle>
          <CardExtra>
            <a href="">Show More</a>
          </CardExtra>
        </Card>
        <Card>
          <Image
            src="https://as2.ftcdn.net/v2/jpg/02/18/72/73/1000_F_218727336_yFWOEXi4dqc01tCWSNZg2JSa0TPHtz4h.jpg"
            width={300}
          ></Image>
          <CardTitle>Title</CardTitle>
          <CardExtra>
            <a href="">Show More</a>
          </CardExtra>
        </Card>
        <Card>
          <Image
            src="https://as2.ftcdn.net/v2/jpg/02/18/72/73/1000_F_218727336_yFWOEXi4dqc01tCWSNZg2JSa0TPHtz4h.jpg"
            width={300}
          ></Image>
          <CardTitle>Title</CardTitle>
          <CardExtra>
            <a href="">Show More</a>
          </CardExtra>
        </Card>
      </CardGrid>
    </ProjectsWrapper>
  );
}

export default Projects;
