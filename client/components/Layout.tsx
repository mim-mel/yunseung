import styled from '@emotion/styled';
import Nav from './Nav';
import Footer from './Footer';

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <Wrap>
      <Nav />
      {props.children}
      <Footer />
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Layout;
