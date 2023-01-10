import React from "react";
import styled from "styled-components";
import Icon from "@mdi/react";
import useMediaQuery from "@mui/material/useMediaQuery";

import { mdiLinkedin, mdiGithub, mdiArrowDown } from "@mdi/js";

const Title = styled.div`
  text-transform: uppercase;
  font-weight: bolder;
  font-size: 3rem;
`;
const TitleWrapper = styled.div`
  @media (max-width: 600px) {
    font-size: 1rem;
    padding-top: 10rem;
  }
`;
const SubTitle = styled.div``;

const ResumeButton = styled.button`
  &:hover {
    cursor: pointer;
  }
  border: 1px solid #fff;
  font-size: 1rem;
  color: #fff;
  background-color: Transparent;
  border-radius: 5px;
  padding: 0.5rem 1rem;

  font-family: "Poppins", sans-serif;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Resume = styled.div`
  padding-top: 2.5rem;
  padding-bottom: 1rem;
`;

const ProjectsButton = styled.div`
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  font-size: 2rem;
  user-select: none;
  font-weight: bolder;
  padding-top: 1rem;
`;

const Wrappper = styled.div`
  @media (min-width: 600px) {
    justify-content: center;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  vertical-align: middle;
  background-color: #272727;
  color: #ffffff;
  height: 100vh;
`;

const Ic = styled.div`
  padding: 2rem 0.5rem;
  height: 2rem;
`;

const NewIcon = styled(Icon)`
  &:hover {
    cursor: pointer;
  }
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 1rem 2rem;
  a {
    text-decoration: none;
    color: #fff;
  }
`;
const PageLink = styled.a`
  display: flex;
  justify-content: start;
`;
const Navbar = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  #resume {
    &:hover {
      cursor: pointer;
    }
    border: 1px solid #fff;
    font-size: 1rem;
    color: #fff;
    background-color: Transparent;
    border-radius: 5px;
    padding: 0.25rem 0.5rem;

    font-family: "Poppins", sans-serif;
  }
`;
const NavbarLink = styled.a`
  margin: 0 1rem;
`;
const SocialLinks = styled.div`
  display: flex;
  justify-content: end;
`;
const SocialIcon = styled.div`
  margin: 0 0.5rem;
`;

const PageWrapper = styled.div`
  position: relative;
  scroll-snap-align: start;
`;

const HeaderWrapper = styled.div`
  position: absolute;
  width: 100%;
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

function Intro() {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <PageWrapper>
      {matches ? (
        <HeaderWrapper>
          <Header>
            <PageLink href="/">izaacnoordhuis.dev</PageLink>
            <NavWrapper>
              <Navbar>
                <NavbarLink href="/">introduction</NavbarLink>
                <NavbarLink href="/">projects</NavbarLink>
                <NavbarLink id="resume" href="/">
                  resume
                </NavbarLink>
              </Navbar>
            </NavWrapper>
            <SocialLinks>
              <SocialIcon>
                <a
                  href="https://www.linkedin.com/in/izaac-noordhuis-391020221/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <NewIcon path={mdiLinkedin} size="2rem"></NewIcon>
                </a>
              </SocialIcon>
              <SocialIcon>
                <a
                  href="https://github.com/noord0"
                  target="_blank"
                  rel="noreferrer"
                >
                  <NewIcon path={mdiGithub} size="2rem"></NewIcon>
                </a>
              </SocialIcon>

              {/* <SocialIcon>LinkedIn</SocialIcon> */}
            </SocialLinks>
          </Header>
        </HeaderWrapper>
      ) : (
        ""
      )}
      <Wrappper>
        <TitleWrapper>
          <Title>Izaac Noordhuis</Title>
          <SubTitle>front-end web developer</SubTitle>
        </TitleWrapper>
        <>
          {matches ? (
            ""
          ) : (
            <>
              <Resume>
                <ResumeButton>resume</ResumeButton>
              </Resume>
              <Icons>
                <Ic>
                  <NewIcon path={mdiGithub} size="2rem"></NewIcon>
                </Ic>
                <Ic>
                  <NewIcon path={mdiLinkedin} size="2rem"></NewIcon>
                </Ic>
              </Icons>
              <ProjectsButton>
                projects <Icon path={mdiArrowDown} size="2rem"></Icon>
              </ProjectsButton>
            </>
          )}
        </>
      </Wrappper>
    </PageWrapper>
  );
}

export default Intro;
