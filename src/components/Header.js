import styled from "styled-components";
import React from "react";

function Header() {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img
              src="data:image/png;base64,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"
              alt=""
            ></img>
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <SearchIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="currentColor"
              width="16"
              height="16"
              focusable="false"
            >
              <path d="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z"></path>
            </svg>
          </SearchIcon>
        </Search>
        <Nav>
          <NavListWrap>
            <NavList>
              <a href="/home">
                {/* <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
                  <path d="m23 9v2h-2v7c0 1.7-1.3 3-3 3h-4v-6h-4v6h-4c-1.7 0-3-1.3-3-3v-7h-2v-2l11-7z"></path>
                  <path d="m20 2h-3v3.2l3 1.9z"></path>
                </svg> */}
                <img src="/images/Linkedin-logo.png" alt="this is my pic"></img>
              </a>
            </NavList>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  padding: 0 24px;
  top: 0;
  width: 100vw;
  z-index: 100;
  position: fixed;
  left: 0;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  marign: 0 auto;
  min-height: 100%;
  max-height: 1128px;
`;

const Logo = styled.span`
  img {
    border-radius: 2px;
    width: 35px;
    height: 34px;
    margin-right: 5px;
  }
`;

const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }
`;
const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 8px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`;

const NavListWrap = styled.ul`
  display:flex;
  flex-wrap:nowrap;
  list-style-type:none;
`;
const NavList = styled.li`
  display: flex;
  align-items: center;
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;

    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }

    @media (max-width: 768px) {
      min-width: 70px;
    }
  }

  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;

export default Header;
