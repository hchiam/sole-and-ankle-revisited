/* eslint-disable no-unused-vars */
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
        <CloseButton onClick={onDismiss} autoFocus>
          <Icon id="close"/>
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <div></div>
        <Nav>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </Nav>
        <Footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background: hsla(0deg, 100%, 0%, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled(DialogContent)`
  position: absolute;
  top: 0;
  right: 0;
  width: 50vw;
  height: 100%;
  background: ${COLORS.white};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  animation: slide-in forwards 0.2s 0s;

  @media ${props => props.theme.queries.desktopAndDown} {
    width: 25vw;
  }

  @media ${props => props.theme.queries.tabletAndDown} {
    width: 50vw;
  }

  @media ${props => props.theme.queries.phoneAndDown} {
    width: 80vw;
  }

  @keyframes slide-in {
    from {
      transform: translateX(100%);
    }
    to {
      transform: 0;
    }
  }
`;

const CloseButton = styled(UnstyledButton)`
  color: ${COLORS.gray['900']};
  position: absolute;
  right: 0rem;
  top: 0.75rem;
  padding: 1rem;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  gap: 1rem;
  a {
    text-decoration: none;
    color: ${COLORS.gray['900']};
    &:hover, &:focus {
      text-decoration: revert;
      color: ${COLORS.secondary};
    }
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  a {
    text-decoration: none;
    color: ${COLORS.gray['700']};
    font-size: small;
    &:hover, &:focus {
      text-decoration: revert;
      color: ${COLORS.secondary};
    }
  }
`;

export default MobileMenu;
