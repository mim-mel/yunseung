import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { useState } from 'react';
const Nav = () => {
  const router = useRouter();
  const [IsMenuOpen, setIsMenuOpen] = useState(false);
  const [IsIntroduce, setIsIntroduce] = useState(false);
  const [IsService, setIsService] = useState(false);

  //토글바 활성화
  const isMenuToggle = () => {
    if (IsMenuOpen) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
    }
  };

  //윤승소개 토글
  const isIntroduceToggle = () => {
    if (IsIntroduce) {
      setIsIntroduce(false);
    } else {
      setIsIntroduce(true);
      setIsService(false);
    }
  };

  //업무분야 토글
  const isServiceToggle = () => {
    if (IsService) {
      setIsService(false);
    } else {
      setIsService(true);
      setIsIntroduce(false);
    }
  };

  return (
    <Wrap>
      <Box>
        <Logo src='/image/logo.png' onClick={() => router.push('/')} />
        <TitleWrap ismenuopen={IsMenuOpen}>
          <TitleBox>
            <Title onClick={() => isIntroduceToggle()}>
              윤승소개
              <TitleArrow
                src='/image/nav-arrow.png'
                ismenuopen={!!IsIntroduce}
              />
            </Title>
            <SubTitleBox width='170px' ismenuopen={IsIntroduce}>
              <SubTitle onClick={() => router.push('/greetings')}>
                <SubTitleImg src='/image/nav-introduce1.png' />
                인사말
              </SubTitle>
              <SubTitle onClick={() => router.push('/members')}>
                <SubTitleImg src='/image/nav-introduce2.png' />
                구성원 소개
              </SubTitle>
              <SubTitle onClick={() => router.push('/history')}>
                <SubTitleImg src='/image/nav-introduce3.png' />
                연혁
              </SubTitle>
            </SubTitleBox>
          </TitleBox>

          <TitleBox>
            <Title onClick={() => isServiceToggle()}>
              업무분야
              <TitleArrow src='/image/nav-arrow.png' ismenuopen={IsService} />
            </Title>
            <SubTitleBox width='260px' ismenuopen={IsService}>
              <SubTitle>
                <SubTitleImg src='/image/nav-service1.png' />
                장부작성 및 세금신고
              </SubTitle>
              <SubTitle>
                <SubTitleImg src='/image/nav-service2.png' />
                양도, 상속, 증여세 신고
              </SubTitle>
              <SubTitle>
                <SubTitleImg src='/image/nav-service3.png' />
                조세불복 및 세무조사 대행
              </SubTitle>
              <SubTitle>
                <SubTitleImg src='/image/nav-service4.png' />
                경영 및 세무 컨설팅
              </SubTitle>
              <SubTitle>
                <SubTitleImg src='/image/nav-service5.png' />
                급여관리 (4대 보험 업무 대행)
              </SubTitle>
              <SubTitle>
                <SubTitleImg src='/image/nav-service6.png' />
                증명발급 서비스
              </SubTitle>
            </SubTitleBox>
          </TitleBox>
          <Title>동물병원전문 센터</Title>
          <Title>오시는길</Title>
          <Button2>상담 신청하기</Button2>
        </TitleWrap>
        <Button>상담 신청하기</Button>
        {IsMenuOpen ? (
          <ToggleMenu onClick={() => isMenuToggle()} src='image/x-mark.png' />
        ) : (
          <ToggleMenu onClick={() => isMenuToggle()} src='image/burger.png' />
        )}
      </Box>
    </Wrap>
  );
};

interface Props {
  width?: string;
  ismenuopen?: boolean;
}

const Wrap = styled.div`
  position: fixed;
  background-color: white;
  width: 100vw;
  height: 70px;
  border-bottom: 1px solid #e2e2e2;
  z-index: 100;

  @media screen and (max-width: 760px) {
    height: 60px;
  }
`;

const Box = styled.div`
  width: 1420px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 10% 45% 12%;
  justify-content: space-between;
  align-items: center;
  height: 70px;

  @media screen and (max-width: 1024px) {
    width: 700px;
    grid-template-columns: 20% 3%;
  }

  @media screen and (max-width: 760px) {
    width: 350px;
    grid-template-columns: 40% 8%;
    height: 60px;
  }
`;

const Logo = styled.img`
  cursor: pointer;

  @media screen and (max-width: 760px) {
    width: 130px;
  }
`;

const TitleWrap = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1024px) {
    position: absolute;
    top: 71px;
    width: 100vw;
    left: 0;
    overflow: hidden;
    display: block;
    padding: ${props => (props.ismenuopen ? '15px 0' : '0px')};
    height: ${props => (props.ismenuopen ? 'auto' : '0px')};
    box-sizing: border-box;
    background-color: #fbfbfb;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
      rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  }

  @media screen and (max-width: 760px) {
    padding: ${props => (props.ismenuopen ? '15px 25px' : '0px')};
  }
`;

const SubTitleBox = styled.div<Props>`
  position: absolute;
  left: 50%;
  top: 71px;
  width: ${props => props.width};
  height: auto;
  padding: 10px 20px;
  background: #ffffff;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 0;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  transform: translate(-50%, 0);
  z-index: 10;
  justify-content: center;
  display: none;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    display: ${props => (props.ismenuopen ? 'flex' : 'none')};
    position: relative;
    top: 0;
    left: 0;
    transform: translate(0, 0);
    width: 40%;
  }

  @media screen and (max-width: 760px) {
    width: 75%;
    padding: 10px 15px;
  }
`;

const SubTitleImg = styled.img`
  margin-right: 14px;
`;

const SubTitle = styled.div`
  display: flex;
  color: #4a4a4a;
  font-size: 16px;
  font-weight: 600;
  margin: 15px;
  transition: 0.2s;

  &:hover {
    color: #066f68;
  }

  @media screen and (max-width: 1024px) {
    font-size: 17px;
  }

  @media screen and (max-width: 760px) {
    font-size: 15px;
  }
`;

const Title = styled.div`
  font-size: 17px;
  font-weight: 700;
  color: #5a5a5a;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 17px;
  border-radius: 10px;

  @media screen and (max-width: 1024px) {
    display: flex;
    padding: 14px 0;
    box-sizing: border-box;
    justify-content: space-between;
    margin: 0 auto;
    color: #434343;
    font-size: 20px;
    width: 700px;
  }

  @media screen and (max-width: 760px) {
    font-size: 17px;
    width: 350px;
  }
`;

const TitleArrow = styled.img<Props>`
  display: none;
  transform: rotate(-90deg);
  transition: 0.2s;
  opacity: 0.6;

  @media screen and (max-width: 1024px) {
    display: flex;
    padding: 0;
    transform: ${props =>
      props.ismenuopen ? 'rotate(0deg)' : 'rotate(-90deg)'};
  }

  @media screen and (max-width: 760px) {
    width: 15px;
    position: relative;
    left: -3px;
  }
`;

const TitleBox = styled.div`
  position: relative;
  cursor: pointer;
  padding: 15px 0;
  box-sizing: border-box;

  @media (hover: hover) {
    &:hover ${SubTitleBox} {
      display: flex;
    }

    &:hover ${Title} {
      color: #000000;
      background-color: #f0f0f0;
    }
  }

  @media screen and (max-width: 1024px) {
    padding: 0;
    width: 700px;
    margin: 0 auto;
  }

  @media screen and (max-width: 760px) {
    padding: 0;
    width: 350px;
  }
`;

const ToggleMenu = styled.img`
  display: none;
  margin-left: auto;

  @media screen and (max-width: 1024px) {
    display: flex;
  }

  @media screen and (max-width: 760px) {
    width: 20px;
  }
`;

const Button = styled.div`
  width: 164px;
  height: 45px;
  background-color: #066f68;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  top: 0;
  transition: 0.2s;

  @media (hover: hover) {
    &:hover {
      top: -3px;
    }
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const Button2 = styled.div`
  display: none;
  width: 100%;
  height: 45px;
  background-color: #066f68;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  top: 0;
  transition: 0.2s;
  margin: 20px 0;

  @media (hover: hover) {
    &:hover {
      top: -3px;
    }
  }

  @media screen and (max-width: 1024px) {
    display: flex;
    font-size: 18px;
    height: 50px;
    width: 700px;
    margin: 20px auto;
  }

  @media screen and (max-width: 760px) {
    margin: 20px auto 10px auto;
    width: 350px;
  }
`;

export default Nav;
