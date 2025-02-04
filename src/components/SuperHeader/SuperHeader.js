import React from "react";
import styled from "styled-components/macro";

import SearchInput from "../SearchInput";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";

const SuperHeader = () => {
  return (
    <>
      <Wrapper>
        <MarketingMessage>
          Free shipping on domestic orders over $75!
        </MarketingMessage>
        <SearchInput />
        <HelpLink href="/">Help</HelpLink>
        {/* <HelpLink href="/help">Help</HelpLink> */}
        <UnstyledButton>
          <Icon id="shopping-bag" strokeWidth={1} />
        </UnstyledButton>
      </Wrapper>
      <Line></Line>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  font-size: 0.875rem;
  color: var(--gray-300);
  background-color: var(--gray-900);
  height: 40px;
  padding-left: 32px;
  padding-right: 32px;
  position: relative;

  @media ${(props) => props.theme.queries.tabletAndDown} {
    display: none;
  }
`;

const Line = styled.div`
  display: none;
  @media ${(props) => props.theme.queries.tabletAndDown} {
    display: revert;
    height: 10px;
    background: var(--gray-900);
    width: 100%;
  }
`;

const MarketingMessage = styled.span`
  color: var(--white);
  margin-right: auto;
`;

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;

  &:not(:focus-visible) {
    outline: none;
  }
`;

export default SuperHeader;
