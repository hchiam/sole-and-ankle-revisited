import React, { useRef } from "react";
import styled from "styled-components/macro";

import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import Icon from "../Icon";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  const menuButtonRef = useRef(null);

  // // NOT NEEDED IF WE import { DialogOverlay, DialogContent } from '@reach/dialog';
  // function focusMenuButton() {
  //   menuButtonRef?.current?.focus();
  // }

  return (
    <header>
      <SuperHeader />

      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/">Sale</NavLink>
          <NavLink href="/">New&nbsp;Releases</NavLink>
          <NavLink href="/">Men</NavLink>
          <NavLink href="/">Women</NavLink>
          <NavLink href="/">Kids</NavLink>
          <NavLink href="/">Collections</NavLink>
          {/* <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink> */}
        </Nav>
        <RightSide>
          <NavLink href="/" aria-label="shop">
            <Icon id="shopping-bag"></Icon>
          </NavLink>
          <NavLink href="/" aria-label="search">
            <Icon id="search"></Icon>
          </NavLink>
          <NavLink
            href="/"
            tabIndex="0"
            aria-label="menu"
            ref={menuButtonRef}
            onClick={(e) => {
              e.preventDefault();
              setShowMobileMenu(true);
            }}
          >
            <Icon id="menu"></Icon>
          </NavLink>
        </RightSide>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => {
          setShowMobileMenu(false);
        }}
        // onDismiss={() => {setShowMobileMenu(false);focusMenuButton();}}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--gray-300);
  overflow-x: auto;

  @media ${(props) => props.theme.queries.tabletAndDown} {
    gap: 0.5rem;
    justify-content: space-between;
  }

  @media ${(props) => props.theme.queries.phoneAndDown} {
    padding: 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(1.25rem, 7vw - 2.5rem, 3rem);
  margin: 0px 48px;

  @media ${(props) => props.theme.queries.tabletAndDown} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
  display: flex;
`;

const RightSide = styled(Side)`
  justify-content: flex-end;
  gap: clamp(0.25rem, 10vw - 2rem, 2rem);
  display: none;

  @media ${(props) => props.theme.queries.tabletAndDown} {
    display: flex;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--gray-900);
  font-weight: var(--weight-medium);
`;

export default Header;
