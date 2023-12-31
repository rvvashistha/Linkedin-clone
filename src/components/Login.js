import React from "react";
/* import "./Login.css" */
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <Nav>
        <a href="/">
          <img
            src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg"
            alt="this is the linkedin logo"
          ></img>
        </a>
        <div>
          <Join>Join now</Join>
          <SignIn>Sign in</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Find jobs through your community</h1>
          <img
            src="https://static.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4"
            alt="this is the hero pic"
          ></img>
        </Hero>
        <From>
          <Google>
            <img
              src="data:image/png;base64,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"
              alt="google logo"
            ></img>
            Sign in with google
          </Google>
        </From>
      </Section>
    </Container>
  );
}

const Container = styled.div`
  padding: 0px;
  margin-top: 8px;
`;
const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;
  & > a {
    width: 135px;
    height: 34px;
    @media: (max-width:768px) {
      padding: 0 5px;
    }
    & > img {
      width: 140px;
    }
  }
`;

const Join = styled.a`
  font-size: 16px;
  padding: 13px 24px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  border-radius: 24px;
  font-weight: 600;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    cursor: pointer;
    text-decoration: none;
  }
`;

const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 13px 24px;
  text-align: center;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0);
  &: hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none;
  }
`;

const Section = styled.section`
  display: flex;
  align-content: start;
  min-height: 700px;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;
  @media (max-width: 768px) {
    marign: auto;
    min-height: 0px;
  }
`;

const Hero = styled.div`
  width: 100%;
  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
    font-weight: 100;
    color: #2977c9;
    line-height: 70px;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
  }
  img {
    /* z-index:-1;  */
    width: 700px;
    height: 670px;
    position: absolute;
    bottom: 77px;
    right: -150px;
  }
`;

const From = styled.div`
  margin-top: 100px;
  widht: 408px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Google = styled.button`
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  height: 56px;
  width: 100%;
  border-radius: 28px;
  padding:24px;
  cursor:pointer;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0 / 0%)
    inset 0 0 0 1px rgb(0 0 0 /0%);
    vertical-align:center;
    z-index:0;
    transition-duration:167ms;
    font-size:20px;
    color:rgba(0,0,0,0.6);
    &:hover{
      background-color:rgba(207,207,207,0.25);
    }
  & img{
    height:30px;
    margin-right:5px;
  }
`;

export default Login;
