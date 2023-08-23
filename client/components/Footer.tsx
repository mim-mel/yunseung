import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Footer = () => {
  const router = useRouter();

  return (
    <Wrap>
      <Box>
        <ContactWrap>
          <ContactTitle>CONTACT US</ContactTitle>
          <ContactText>
            <span>TEL</span>010-8257-6173
          </ContactText>
          <ContactText>
            <span>EMAIL</span>dontak@naver.com
          </ContactText>
          <ContactText isBottomNone>
            <span>ADDRESS</span>서울 서초구 법원로4길 31 대원빌딩 4층
          </ContactText>
        </ContactWrap>
        <TitleIconBox>
          <TitleWrap>
            <Title onClick={() => router.push('/greetings')}>윤승소개</Title>
            <Title onClick={() => router.push('/service1')}>업무분야</Title>
            <Title onClick={() => router.push('/consulting')}>
              동물병원전문센터
            </Title>
            <Title onClick={() => router.push('/map')}>오시는길</Title>
          </TitleWrap>
          <IconWrap>
            <Link href=''>
              <Icon1 src='/image/naver-map.png' />
            </Link>
          </IconWrap>
          <IconWrap2>
            <Link href=''>
              <Icon2 src='/image/naver-map.png' />
            </Link>
          </IconWrap2>
        </TitleIconBox>
      </Box>
    </Wrap>
  );
};

interface Props {
  isBottomNone?: boolean;
}

const Wrap = styled.div`
  width: 100%;
  height: 300px;
  box-sizing: border-box;
  border-top: 1px solid #e2e2e2;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 760px) {
    margin-bottom: 50px;
  }
`;

const Box = styled.div`
  width: 1420px;
  height: auto;
  display: grid;
  grid-template-columns: 30% 45%;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    width: 700px;
    grid-template-columns: 45% 55%;
  }

  @media screen and (max-width: 760px) {
    grid-template-columns: 100%;
    grid-gap: 50px;
    width: 350px;
    position: relative;
  }
`;

const ContactWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  height: 142px;
`;

const ContactTitle = styled.div`
  font-size: 19px;
  font-weight: 800;
  color: #066f68;
  margin-bottom: 28px;

  @media screen and (max-width: 1024px) {
    font-size: 16px;
    margin-bottom: 25px;
  }

  @media screen and (max-width: 760px) {
    margin-bottom: 16px;
    font-size: 15px;
  }
`;

const ContactText = styled.div<Props>`
  font-size: 16px;
  color: #666666;
  font-weight: 500;
  margin-right: 17px;
  margin-bottom: ${props => (props.isBottomNone ? '0' : '16px')};

  span {
    font-weight: 800;
    color: #066f68;
    margin-right: 17px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 14px;

    span {
      margin-right: 10px;
    }
  }

  @media screen and (max-width: 760px) {
    margin-bottom: ${props => (props.isBottomNone ? '0' : '14px')};
  }
`;

const TitleIconBox = styled.div`
  width: 100%;
  height: 142px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 760px) {
    order: -2;
    height: auto;
  }
`;

const TitleWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 19px;
  font-weight: 800;
  color: #066f68;

  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }

  @media screen and (max-width: 760px) {
    font-size: 14px;
  }
`;

const IconWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: auto;
`;

const Icon1 = styled.img`
  @media screen and (max-width: 760px) {
    display: none;
  }
`;

const IconWrap2 = styled.div`
  display: none;

  @media screen and (max-width: 760px) {
    display: flex;
    position: absolute;
    top: 230px;
    left: 100%;
    transform: translate(-100%, 0);
  }
`;

const Icon2 = styled.img``;

export default Footer;
