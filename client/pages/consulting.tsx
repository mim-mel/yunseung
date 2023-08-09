import styled from '@emotion/styled';
import Layout from '@/components/Layout';
import { Wrap, Title } from './members';

const Consulting = () => {
  return (
    <Layout>
      <Wrap>
        <Title isBottomMainText>동물병원전문 센터</Title>
        <MainText>
          IBS 아웃소싱과 함께 MSO법인 설립으로 동물병원의 효율적인 운영을
          시작해보세요.
        </MainText>
        <Img src='/image/consulting-img1.jpg' />
        <ContentWrap>
          <IconImg src='/image/consulting-icon1.png/' />
          <TextBox>
            <ContentTitle>MSO법인 설립과 운영</ContentTitle>
            <ContentText>
              병원경영지원회사(주식회사 형태)
              <span>
                의료 행위와 관계없는 병원 경영 전반(구매, 인력 관리, 진료비
                청구, 마케팅 등)을 제공하는 회사
              </span>
              를 지칭합니다. MSO법인 설립을 통해
              <span> 의료 행위와 경영이 이원화되어 효율적 운영</span>이
              가능합니다.
            </ContentText>
          </TextBox>
        </ContentWrap>
        <Arrow src='/image/consulting-arrow.png/' />
        <ContentWrap>
          <IconImg src='/image/consulting-icon2.png/' />
          <TextBox>
            <ContentTitle>MSO법인의 세금과 활용방법</ContentTitle>
            <ContentPoint>
              <Point />
              <PointText>
                개인병원과(41.8%~49.5%) vs MSO법인의(9%~19%) 세율 차이
              </PointText>
            </ContentPoint>
            <ContentPoint>
              <Point />
              <PointText>
                소득귀속자, 세금 종류 그리고 귀속시기 조정하여 절세가능
              </PointText>
            </ContentPoint>
            <ContentPoint>
              <Point />
              <PointText>설립 시 주주 비율 통한 명의 분산 효과</PointText>
            </ContentPoint>
          </TextBox>
        </ContentWrap>
        <Arrow src='/image/consulting-arrow.png/' />
        <ContentWrap>
          <IconImg src='/image/consulting-icon3.png/' />
          <TextBox>
            <ContentTitle>MSO법인 이익잉여금 인출전략</ContentTitle>
            <ContentPoint>
              <Point />
              <PointText>
                분류과세 - 종합소득세, 양도소득세, 퇴직 소득세
              </PointText>
            </ContentPoint>
            <ContentPoint>
              <Point />
              <PointText>
                분리과세 - 금융 소득, 즉 배당소득세 분리과세 (2000만원 한도)
              </PointText>
            </ContentPoint>
          </TextBox>
        </ContentWrap>
      </Wrap>
    </Layout>
  );
};

interface Props {
  isBottomNone?: boolean;
}

const MainText = styled.div`
  font-size: 50px;
  line-height: 70px;
  color: #292929;
  font-weight: 700;
  width: 860px;
  text-align: center;
  margin: 0 auto 90px auto;

  @media screen and (max-width: 1024px) {
    font-size: 30px;
    width: 533px;
    line-height: 45px;
    margin-bottom: 50px;
  }

  @media screen and (max-width: 760px) {
    font-size: 24px;
    width: 315px;
    line-height: 35px;
    margin-bottom: 40px;
  }
`;

const Img = styled.img`
  margin-bottom: 130px;
  border-radius: 30px;

  @media screen and (max-width: 1024px) {
    width: 700px;
    margin-bottom: 80px;
  }

  @media screen and (max-width: 760px) {
    width: 350px;
    margin-bottom: 60px;
    border-radius: 20px;
  }
`;

const ContentWrap = styled.div`
  width: 1216px;
  height: 300px;
  border-radius: 30px;
  border: 1px solid #99b9b5;
  padding: 72px 110px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 15% 83%;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1024px) {
    width: 660px;
    height: 238px;
    padding: 42px 40px;
  }

  @media screen and (max-width: 760px) {
    width: 296px;
    height: 362px;
    grid-template-columns: 100%;
    padding: 42px 33px;
  }
`;

const IconImg = styled.img`
  @media screen and (max-width: 1024px) {
    height: 70px;
  }

  @media screen and (max-width: 760px) {
    margin: 0 auto 25px auto;
  }
`;

const Arrow = styled.img`
  margin: 45px 0;

  @media screen and (max-width: 1024px) {
    width: 35px;
    margin: 30px 0;
  }

  @media screen and (max-width: 760px) {
    width: 30px;
    margin: 25px 0;
  }
`;

const TextBox = styled.div`
  display: block;
`;

const ContentTitle = styled.div`
  color: #066f68;
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 25px;

  @media screen and (max-width: 1024px) {
    font-size: 20px;
    margin-bottom: 16px;
  }

  @media screen and (max-width: 760px) {
    font-size: 18px;
    text-align: center;
  }
`;

const ContentText = styled.div`
  color: #4d4d4d;
  font-size: 22px;
  font-weight: 400;
  line-height: 34px;

  span {
    font-weight: 600;
  }

  @media screen and (max-width: 1024px) {
    font-size: 16px;
    line-height: 28px;
  }

  @media screen and (max-width: 760px) {
    font-size: 14px;
    text-align: center;
    line-height: 25px;
  }
`;

const ContentPoint = styled.div<Props>`
  color: #4d4d4d;
  margin-bottom: ${props => (props.isBottomNone ? '' : '10px')};
  display: flex;
  position: relative;

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 1024px) {
  }
`;

const Point = styled.div`
  width: 5px;
  height: 5px;
  position: absolute;
  background-color: #4d4d4d;
  border-radius: 5px;
  top: 12px;

  @media screen and (max-width: 1024px) {
    top: 8px;
  }

  @media screen and (max-width: 760px) {
    top: 6px;
  }
`;

const PointText = styled.div`
  font-size: 22px;
  font-weight: 600;
  margin-left: 15px;

  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }

  @media screen and (max-width: 760px) {
    font-size: 14px;
  }
`;

export default Consulting;
