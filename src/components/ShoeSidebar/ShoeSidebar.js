import styled from "styled-components/macro";

const Sidebar = () => {
  return (
    <Wrapper>
      <Link href="/">Lifestyle</Link>
      <Link href="/">Jordan</Link>
      <ActiveLink href="/">Running</ActiveLink>
      <Link href="/">Basketball</Link>
      <Link href="/">Training &amp; Gym</Link>
      <Link href="/">Football</Link>
      <Link href="/">Skateboarding</Link>
      <Link href="/">American Football</Link>
      <Link href="/">Baseball</Link>
      <Link href="/">Golf</Link>
      <Link href="/">Tennis</Link>
      <Link href="/">Athletics</Link>
      <Link href="/">Walking</Link>
      {/* <Link href="/lifestyle">Lifestyle</Link>
      <Link href="/jordan">Jordan</Link>
      <ActiveLink href="/running">Running</ActiveLink>
      <Link href="/basketball">Basketball</Link>
      <Link href="/training">Training &amp; Gym</Link>
      <Link href="/football">Football</Link>
      <Link href="/skateboarding">Skateboarding</Link>
      <Link href="/us-football">American Football</Link>
      <Link href="/baseball">Baseball</Link>
      <Link href="/golf">Golf</Link>
      <Link href="/tennis">Tennis</Link>
      <Link href="/athletics">Athletics</Link>
      <Link href="/walking">Walking</Link> */}
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  @media ${(props) => props.theme.queries.tabletAndDown} {
    display: none;
  }
`;

const Link = styled.a`
  display: block;
  text-decoration: none;
  font-weight: var(--weight-medium);
  color: var(--gray-900);
  line-height: 2;
`;

const ActiveLink = styled(Link)`
  color: var(--primary);
`;

export default Sidebar;
