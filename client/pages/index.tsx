import type { NextPage } from 'next';
import styled from '@emotion/styled';
import Layout from '@/components/Layout';
import { useState } from 'react';

const ServiceArray = [
  {
    src: '/image/main-service-icon1.png',
    title: '장부작성 및 세금신고',
    text: '법인사업자와 일정규모 이상의 개인사업자는 발생하는 모든 거래에 대해서 증빙서류에 근거하는 장부를 작성해야 합니다.',
    boolean: true,
  },
  {
    src: '/image/main-service-icon2.png',
    title: '양도 상속 증여세 신고',
    text: '사업자는 법인세, 부가가치세, 원천세 등의 신고 의무가 있으며, 일정 규모 이상의 사업자는 세무조정 계산서를 첨부하여 신고하여야 합니다.',
    boolean: false,
  },
  {
    src: '/image/main-service-icon3.png',
    title: '조세불복 및 세무조사 대행',
    text: '직계존비속간 증여추정, 부담부 증여, 8년 자격요건 검토 등 부동산을 양도하실 경우에는 전문가의 상담을 받으신 후 진행하여야 합니다.',
    boolean: false,
  },
  {
    src: '/image/main-service-icon4.png',
    title: '경영 및 세무 컨설팅',
    text: '상속 또는 증여에 의하여 무상으로 자산을 취득하는 경우, 증여 받은 날이 속하는 달의 말일부터 6개월 이내에 신고∙납부하여야 합니다.',
    boolean: false,
  },
  {
    src: '/image/main-service-icon5.png',
    title: '급여관리',
    text: '권리 또는 이익의 침해를 당한 자는 그 처분을 받은 날로부터 90일 이내에 이의신청, 심사청구, 심판청구를 할 수 있습니다.',
    boolean: false,
  },
  {
    src: '/image/main-service-icon6.png',
    title: '증명 발급 서비스',
    text: '경영전략과 파악, 내부 시스템의 문제 진단 후 대안을 제시하여 기업의 경영 효율성 증대와 실무진의 역량을 강화시켜 드립니다.',
    boolean: false,
  },
];

const Main: NextPage = () => {
  //업무 분야 active 아이템 관리 state
  const [Services, setServices] = useState(ServiceArray);
  const [Cnt, setCnt] = useState(0);

  const toggleBoolean = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    // 새로운 Cnt 값을 미리 계산합니다.
    let newCnt;
    if (Cnt < 5) {
      newCnt = Cnt + 1;
    } else {
      newCnt = 0;
    }

    // Services 배열 길이가 1 이상인 경우에만 업데이트를 시도합니다.
    if (Services.length > 0) {
      const updatedServiceArray = [...Services];

      // 이전 Cnt 값으로 배열을 업데이트합니다.
      if (Cnt >= 0 && Cnt < Services.length) {
        updatedServiceArray[Cnt].boolean = false;
      }

      // 새로운 Cnt 값으로 배열을 업데이트합니다.
      if (newCnt >= 0 && newCnt < Services.length) {
        updatedServiceArray[newCnt].boolean = true;
      }

      // 변경된 배열을 상태로 업데이트합니다.
      setServices(updatedServiceArray);
      setCnt(newCnt); // 이제 Cnt를 업데이트합니다.
    }
  };

  return (
    <Layout>
      <Wrap>
        {/* 메인컨텐츠 */}
        <MainWrap>
          <MainTextWrap>
            <MainTitle>
              언제나 고객과 함께하는 지속적인 파트너 <span>윤승</span>
            </MainTitle>
            <MainText>
              세무법인 윤승은 고객을 단순한 거래처가 아닌 함께 성장해 나아가는
              파트너로서 바라보고 지속적인 관심과 협력을 바탕으로 함께합니다.
            </MainText>
          </MainTextWrap>
          <MainImg src='/image/main.jpg' />
        </MainWrap>

        {/* 카테고리 소개 */}
        <Content1Wrap>
          <Content1Box>
            <Box1TextWrap>
              <Box1Title>
                윤승소개 바로가기
                <Box1Arrow src='/image/double-arrow-g.png' />
              </Box1Title>
              <Box1Text>
                세무법인 윤승에 대해 더욱 자세하게 알고 싶으시다면?
              </Box1Text>
            </Box1TextWrap>
            <Box1Icon src='/image/main-box-icon1.png' />
          </Content1Box>

          <Content1Box>
            <Box1TextWrap>
              <Box1Title>
                업무분야 바로가기
                <Box1Arrow src='/image/double-arrow-g.png' />
              </Box1Title>
              <Box1Text>
                세무법인 윤승에서 제공하는 서비스 항목들을 자세히 확인해보고
                싶으시다면?
              </Box1Text>
            </Box1TextWrap>
            <Box1Icon src='/image/main-box-icon2.png' />
          </Content1Box>

          <Content1Box>
            <Box1TextWrap>
              <Box1Title>
                동물병원전문센터 바로가기
                <Box1Arrow src='/image/double-arrow-g.png' top left />
              </Box1Title>
              <Box1Text>
                세무법인 윤승에서 제공하는 동물병원 전문 세무관리를 알고
                싶으시다면?
              </Box1Text>
            </Box1TextWrap>
            <Box1Icon src='/image/main-box-icon3.png' />
          </Content1Box>
        </Content1Wrap>

        <ContentTitle>
          <ContentTitleIcon src='/image/main-check.png' />
          업무 분야
        </ContentTitle>
        <ContentInfo bottom>
          아래와 같은 서비스 항목들을 제공해드리고 있습니다
        </ContentInfo>
        <Content2Wrap>
          {Services.map((service, i) => (
            <Content2Box key={i} istrue={service.boolean}>
              <Content2Img src={service.src} istrue={service.boolean} />
              <Content2Title istrue={service.boolean}>
                {service.title}
              </Content2Title>
              <Content2Text istrue={service.boolean}>
                {service.text}
              </Content2Text>
              <Content2SeeMore istrue={service.boolean}>
                자세히 보기
                <img src='/image/double-arrow-g.png' />
              </Content2SeeMore>
            </Content2Box>
          ))}
          <Content2Button onClick={e => toggleBoolean(e)}>
            <img src='/image/main-button-arrow.png' />
          </Content2Button>
        </Content2Wrap>

        <ContentTitle>
          <ContentTitleIcon src='/image/main-check.png' />
          동물병원 전문 서비스
        </ContentTitle>
        <ContentInfo>
          동물병원 전문 업체들과의 협력을 통해 컨설팅 및 MSO 법인설립 지원 등의
          혜택을 제공해 드립니다.
        </ContentInfo>
        <Content3Wrap>
          <Content3Box>
            <Content3IconBox>
              <img src='/image/main-content3-logo1.png' />
            </Content3IconBox>

            <NameButtonWrap>
              <Content3Name>동물병원 세무 컨설팅</Content3Name>
              <Content3Button>
                자세히 보기
                <img src='/image/double-arrow-w.png' />
              </Content3Button>
            </NameButtonWrap>
          </Content3Box>

          <Content3Box>
            <Content3IconBox>
              <img src='/image/main-content3-logo2.png' />
            </Content3IconBox>
            <NameButtonWrap>
              <Content3Name>동물병원 노무 컨설팅</Content3Name>
              <Content3Button>
                자세히 보기
                <img src='/image/double-arrow-w.png' />
              </Content3Button>
            </NameButtonWrap>
          </Content3Box>

          <Content3Box>
            <Content3IconBox>
              <img src='/image/main-content3-logo3.png' />
            </Content3IconBox>
            <NameButtonWrap>
              <Content3Name>동물병원 MSO 법인 설립 지원</Content3Name>
              <Content3Button>
                자세히 보기
                <img src='/image/double-arrow-w.png' />
              </Content3Button>
            </NameButtonWrap>
          </Content3Box>
        </Content3Wrap>

        <ContentTitle bottom>
          <ContentTitleIcon src='/image/main-check.png' />
          무료 상담신청
        </ContentTitle>
        <Content4Wrap>
          <Content4Text>세무관리 더 이상 고민하실 필요 없습니다.</Content4Text>
          <Content4Button>지금바로 상담 신청하기</Content4Button>
        </Content4Wrap>
      </Wrap>
    </Layout>
  );
};

interface Props {
  top?: boolean;
  left?: boolean;
  bottom?: boolean;
  istrue?: boolean;
}

const Wrap = styled.div`
  width: 1420px;
  margin: 100px auto 50px auto;

  @media screen and (max-width: 1024px) {
    width: 700px;
  }

  @media screen and (max-width: 760px) {
    margin: 130px auto 50px auto;
    width: 350px;
  }
`;

const MainWrap = styled.div`
  width: 100%;
  height: 760px;
  align-items: center;
  display: grid;
  grid-template-columns: 50% 50%;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 53% 45%;
    height: 400px;
  }

  @media screen and (max-width: 760px) {
    grid-template-columns: 100%;
    height: auto;
  }
`;

const MainTextWrap = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 760px) {
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
`;

const MainTitle = styled.h1`
  font-size: 70px;
  font-weight: 800;
  color: #000000;
  margin-bottom: 35px;

  span {
    color: #066f68;
  }

  @media screen and (max-width: 1024px) {
    font-size: 40px;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 760px) {
    font-size: 30px;
    width: 280px;
    text-align: center;
    margin-bottom: 20px;
  }
`;

const MainText = styled.h2`
  font-size: 22px;
  color: #5e5e5e;
  line-height: 42px;
  width: 580px;
  font-weight: 500;

  @media screen and (max-width: 1024px) {
    font-size: 16px;
    width: 100%;
    line-height: 28px;
  }

  @media screen and (max-width: 760px) {
    font-size: 15px;
    width: 280px;
    text-align: center;
  }
`;

const MainImg = styled.img`
  position: relative;
  top: 15px;

  @media screen and (max-width: 1024px) {
    width: 360px;
  }

  @media screen and (max-width: 760px) {
    width: 316px;
    margin-bottom: 20px;
  }
`;

const Content1Wrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 32% 32% 32%;
  margin: 30px 0 120px 0;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    margin: 30px 0 70px 0;
  }

  @media screen and (max-width: 760px) {
    grid-template-columns: 100%;
    grid-gap: 18px;
  }
`;

const Content1Box = styled.div`
  position: relative;
  top: 0;
  transition: 0.2s;
  width: 100%;
  height: 258px;
  background-color: #f7f9fa;
  border-radius: 20px;
  padding: 47px 55px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 55% 40%;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      top: -6px;
    }
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: 100%;
    padding: 30px;
    justify-content: center;
    align-items: center;
    height: 290px;
  }

  @media screen and (max-width: 760px) {
    padding: 30px 40px;
    grid-template-columns: 57% 27%;
    height: 209px;
    justify-content: space-between;
  }
`;

const Box1TextWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Box1Title = styled.h3`
  display: flex;
  color: #000000;
  font-size: 21px;
  font-weight: 700;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (max-width: 1024px) {
    text-align: center;
    position: relative;
    font-size: 19px;
    width: 150px;
    margin-bottom: 15px;
  }

  @media screen and (max-width: 760px) {
    text-align: left;
  }
`;

const Box1Arrow = styled.img<Props>`
  margin-left: 10px;
  position: relative;
  top: ${props => (props.top ? '14px' : '')};
  left: ${props => (props.left ? '-89px' : '-5px')};

  @media screen and (max-width: 1024px) {
    position: absolute;
    top: ${props => (props.top ? '29px' : '4px')};
    left: ${props => (props.left ? '105px' : '135px')};
  }

  @media screen and (max-width: 760px) {
    left: ${props => (props.left ? '65px' : '135px')};
    top: ${props => (props.top ? '30px' : '5px')};
    width: 16px;
  }
`;

const Box1Text = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #606060;
  line-height: 27px;

  @media screen and (max-width: 1024px) {
    font-size: 15px;
    line-height: 25px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 14px;
    line-height: 24px;
  }
`;

const Box1Icon = styled.img`
  margin-left: auto;

  @media screen and (max-width: 1024px) {
    order: -2;
    width: 68px;
    margin: 0 auto 20px auto;
  }

  @media screen and (max-width: 760px) {
    order: 0;
  }
`;

const ContentTitle = styled.div<Props>`
  display: flex;
  align-items: center;
  margin-bottom: ${props => (props.bottom ? '50px' : '25px')};
  font-size: 37px;
  font-weight: 800;
  color: #066f68;

  @media screen and (max-width: 1024px) {
    font-size: 27px;
    margin-bottom: ${props => (props.bottom ? '40px' : '20px')};
  }

  @media screen and (max-width: 760px) {
    text-align: center;
    font-size: 23px;
    justify-content: center;

    margin-bottom: ${props => (props.bottom ? '40px' : '13px')};
  }
`;

const ContentTitleIcon = styled.img`
  margin-right: 15px;

  @media screen and (max-width: 1024px) {
    margin-right: 10px;
    width: 34px;
  }

  @media screen and (max-width: 760px) {
    width: 25px;
    margin-right: 7px;
  }
`;

const ContentInfo = styled.div<Props>`
  font-size: 22px;
  color: #5c5c5c;
  font-weight: 600;
  margin-bottom: ${props => (props.bottom ? '100px' : '57px')};

  @media screen and (max-width: 1024px) {
    font-size: 18px;
    margin-bottom: ${props => (props.bottom ? '70px' : '57px')};
  }

  @media screen and (max-width: 760px) {
    text-align: center;
    font-size: 15px;
    width: 230px;
    margin: 0 auto;
    margin-bottom: ${props => (props.bottom ? '40px' : '30px')};
    line-height: 23px;
  }
`;

const Content2Wrap = styled.div`
  width: 100%;
  margin: 0 auto 120px auto;
  display: flex;
  justify-content: space-between;
  height: auto;
  position: relative;

  @media screen and (max-width: 1024px) {
    display: grid;
    grid-template-columns: 19% 19% 19% 19% 19%;
    height: 140px;
    margin: 0 auto 80px auto;
    padding-top: 280px;
    width: 100%;
  }

  @media screen and (max-width: 760px) {
    grid-template-columns: 47% 47%;
    height: 440px;
    width: 296px;
    grid-gap: 17px;
    padding-top: 260px;
  }
`;

const Content2Box = styled.div<Props>`
  width: ${props => (props.istrue ? '385px' : '175px')};
  height: ${props => (props.istrue ? '270px' : '175px')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 1px solid #d8d8d8;
  position: relative;
  margin-top: auto;
  padding: ${props => (props.istrue ? '30px 50px' : '0')};
  box-sizing: border-box;
  cursor: ${props => (props.istrue ? 'pointer' : '')};

  @media screen and (max-width: 1024px) {
    position: ${props => (props.istrue ? 'absolute' : 'relative')};
    left: ${props => (props.istrue ? '50%' : '')};
    width: ${props => (props.istrue ? '415px' : '132px')};
    height: ${props => (props.istrue ? '270px' : '132px')};
    transform: ${props => (props.istrue ? 'translate(-50%,0)' : '')};
  }

  @media screen and (max-width: 760px) {
    width: ${props => (props.istrue ? '296px' : '140px')};
    height: ${props => (props.istrue ? '202px' : '140px')};
    padding: ${props => (props.istrue ? '36px 25px' : '0')};
  }
`;

const Content2Img = styled.img<{ istrue: boolean }>`
  position: ${props => (props.istrue ? 'absolute' : 'relative')};
  height: ${props => (props.istrue ? 'auto' : '60px')};
  margin-bottom: 16px;
  top: ${props => (props.istrue ? '-22%' : '0')};
  left: ${props => (props.istrue ? '60%' : '0')};

  @media screen and (max-width: 1024px) {
    height: ${props => (props.istrue ? 'auto' : '50px')};
  }

  @media screen and (max-width: 760px) {
    top: ${props => (props.istrue ? '15%' : '0')};
    left: ${props => (props.istrue ? '8%' : '0')};
    height: ${props => (props.istrue ? '26px' : '56px')};
  }
`;

const Content2Title = styled.div<{ istrue: boolean }>`
  font-size: ${props => (props.istrue ? '24px' : '16px')};
  text-align: ${props => (props.istrue ? 'left' : 'center')};
  font-weight: ${props => (props.istrue ? '800' : '700')};
  color: #000000;
  width: ${props => (props.istrue ? '100%' : '80%')};
  margin-bottom: ${props => (props.istrue ? '15px' : '0')};
  margin-top: ${props => (props.istrue ? '20px' : '0')};

  @media screen and (max-width: 1024px) {
    font-size: ${props => (props.istrue ? '27px' : '13.5px')};
    letter-spacing: ${props => (props.istrue ? '' : '-1px')};
  }

  @media screen and (max-width: 760px) {
    margin-left: ${props => (props.istrue ? '70px' : '0')};
    font-size: ${props => (props.istrue ? '18px' : '14px')};
    width: ${props => (props.istrue ? '100%' : '80%')};
    margin-top: 0;
  }
`;

const Content2Text = styled.div<{ istrue: boolean }>`
  display: ${props => (props.istrue ? 'flex' : 'none')};
  font-size: 14.5px;
  color: #767676;
  font-weight: 400;
  line-height: 23px;
  margin-bottom: 15px;

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 1024px) {
    font-size: 13.5px;
    margin-bottom: 10px;
    letter-spacing: -0.5px;
  }
`;

const Content2SeeMore = styled.div<{ istrue: boolean }>`
  display: ${props => (props.istrue ? 'flex' : 'none')};
  font-size: 15px;
  color: #066f68;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  margin-right: auto;

  img {
    margin-left: 8px;
    width: 14px;
    height: auto;
  }

  @media screen and (max-width: 1024px) {
    font-size: 14px;

    img {
      width: 12px;
      height: auto;
    }
  }
`;

const Content2Button = styled.button`
  position: absolute;
  width: 33px;
  height: 33px;
  background-color: #b2b2b2;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 63%;
  left: 101.5%;
  cursor: pointer;
  border: none;

  @media screen and (max-width: 1024px) {
    top: 55%;
    left: 95%;
  }

  @media screen and (max-width: 1024px) {
    top: 30.5%;
    left: 90%;
  }
`;

const Content3Wrap = styled.div`
  width: 100%;
  height: 380px;
  background-color: #f7f9fa;
  border-radius: 20px;
  padding: 54px 212px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  justify-content: space-between;
  margin-bottom: 120px;

  @media screen and (max-width: 1024px) {
    height: 300px;
    margin-bottom: 80px;
    padding: 41px 60px;
  }

  @media screen and (max-width: 760px) {
    height: 397px;
    width: 350px;
    grid-template-columns: 100%;
    padding: 25px 35px;
  }
`;

const Content3Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 760px) {
    display: grid;
    grid-template-columns: 30% 64%;
    justify-content: space-between;
  }
`;

const Content3IconBox = styled.div`
  width: 166px;
  height: 166px;
  background-color: white;
  border-radius: 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (max-width: 1024px) {
    width: 110px;
    height: 110px;

    img {
      height: 48px;
    }
  }

  @media screen and (max-width: 760px) {
    width: 80px;
    height: 80px;
    border-radius: 15px;

    img {
      height: 36px;
    }
  }

  @media screen and (max-width: 760px) {
    margin-bottom: 0;
    margin-right: 18px;
  }
`;

const Content3Name = styled.div`
  font-size: 21px;
  color: #000000;
  font-weight: 700;
  text-align: center;
  margin-bottom: 17px;

  @media screen and (max-width: 1024px) {
    font-size: 16px;
    letter-spacing: -0.5px;
  }

  @media screen and (max-width: 760px) {
    font-size: 15px;
    margin-bottom: 8px;
    text-align: left;
  }
`;

const Content3Button = styled.div`
  width: 135px;
  height: 40px;
  border-radius: 50px;
  background-color: #066f68;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  top: 0;
  transition: 0.2s;
  margin: 0 auto;

  img {
    margin-left: 8px;
  }

  @media (hover: hover) {
    &:hover {
      top: -4px;
    }
  }

  @media screen and (max-width: 1024px) {
    width: 120px;
    height: 35px;
    font-size: 13px;

    img {
      width: 13px;
    }
  }

  @media screen and (max-width: 760px) {
    margin: 0;
    margin-right: auto;
  }
`;

const NameButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
`;

const Content4Wrap = styled.div`
  width: 100%;
  height: 380px;
  background-color: #066f68;
  border-radius: 20px;
  padding: 54px 212px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 70px;
    height: 196px;
    padding: 51px 138px;
  }

  @media screen and (max-width: 760px) {
    margin-bottom: 40px;
    height: 196px;
    padding: 35px;
  }
`;

const Content4Text = styled.div`
  color: white;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 47px;

  @media screen and (max-width: 1024px) {
    font-size: 26px;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 760px) {
    font-size: 21px;
    margin-bottom: 30px;
    text-align: center;
    width: 82%;
    margin-bottom: 15px;
    line-height: 31px;
  }
`;

const Content4Button = styled.div`
  width: 387px;
  height: 84px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: white;
  color: #066f68;
  font-size: 23px;
  font-weight: 800;
  letter-spacing: -0.2px;
  position: relative;
  top: 0;
  transition: 0.2s;
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      top: -7px;
    }
  }

  @media screen and (max-width: 1024px) {
    width: 214px;
    height: 42px;
    border-radius: 10px;
    font-size: 20px;
    padding: 13px 15px;
  }

  @media screen and (max-width: 760px) {
    width: 200px;
    height: 35px;
    border-radius: 10px;
    font-size: 18px;
    padding: 10px 13px;
  }
`;

export default Main;
