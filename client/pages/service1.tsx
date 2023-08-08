import styled from '@emotion/styled';
import Layout from '@/components/Layout';
import { Title } from './members';
import ServiceNav from '@/components/ServiceNav';

const Service1 = () => {
  return (
    <Layout>
      <ServiceNav categoryName='service1' />
      <Wrap>
        <Title>장부 작성 및 세금신고</Title>
        <Content1Wrap isMarginTop>
          <Content1TextBox>
            <ContentTitle>장부 작성</ContentTitle>
            <ContentText>
              법인사업자와 일정 규모 이상의 개인사업자는 발생하는 모든 거래에
              대하여 증빙서류에 근거하여 장부를 작성하여야 합니다. 장부는 각종
              재무보고의 기초가 될 뿐 아니라 소득세와 법인세 및 부가가치세
              신고의 근거가 됩니다.
            </ContentText>
            <ContentPoint>
              <Point />
              <PointText>회계장부의 작성 유지</PointText>
            </ContentPoint>
            <ContentPoint isBottomNone>
              <Point />
              <PointText>관리목적까지 고려한 신뢰성 있는 장부의 작성</PointText>
            </ContentPoint>
          </Content1TextBox>
          <Content1ImgBox
            webHeight='294px'
            ipadHeight='285px'
            mobileHeight='238px'
          >
            <Img src='/image/service1-icon1.png' />
          </Content1ImgBox>
        </Content1Wrap>

        <Content1Wrap isBottomNone>
          <Content1TextBox>
            <ContentTitle>세금신고</ContentTitle>
            <ContentText>
              사업자는 법인세, 부가가치세, 원천세 등의 신고 의무가 있으며,
              국세청장이 정한 일정 규모 이상의 사업자는 세무조정계산서를
              첨부하여 신고하여야 합니다. 세무법인 윤승에서는 세무조정 및 신고와
              관련된 제반 업무를 업종별로 차별화된 서비스를 제공하여 세무 및
              회계의 전반적인 서비스 업무를 제공합니다.
            </ContentText>
            <ContentPoint>
              <Point />
              <PointText>원천세 신고, 부가가치세 신고</PointText>
            </ContentPoint>
            <ContentPoint>
              <Point />
              <PointText>중간 결산 등을 통한 적시에 재무정보 제공</PointText>
            </ContentPoint>
            <ContentPoint isBottomNone>
              <Point />
              <PointText>소득세 법인세 신고 및 세무정보</PointText>
            </ContentPoint>
          </Content1TextBox>
          <Content1ImgBox
            webHeight='294px'
            ipadHeight='285px'
            mobileHeight='238px'
          >
            <Img src='/image/service1-icon2.png' />
          </Content1ImgBox>
        </Content1Wrap>
      </Wrap>
    </Layout>
  );
};

interface Props {
  isBottomNone?: boolean;
  isMarginTop?: boolean;
  isLessSpacing?: boolean;
  textWidth?: boolean;
  webHeight?: string;
  ipadHeight?: string;
  mobileHeight?: string;
}

export const Wrap = styled.div`
  width: 1420px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 160px auto;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    width: 700px;
    margin: 0 auto 120px auto;
  }

  @media screen and (max-width: 760px) {
    width: 350px;
    margin: 0 auto 100px auto;
  }
`;

export const Content1Wrap = styled.div<Props>`
  width: 1092px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${props => (props.isMarginTop ? '30px' : '')};
  margin-bottom: ${props => (props.isBottomNone ? '' : '120px')};

  @media screen and (max-width: 1024px) {
    width: 700px;
    margin-bottom: ${props => (props.isBottomNone ? '' : '70px')};
  }

  @media screen and (max-width: 760px) {
    width: 347px;
    display: grid;
    grid-template-columns: 100%;
    margin-top: ${props => (props.isMarginTop ? '10px' : '')};
  }
`;

export const Content1TextBox = styled.div<Props>`
  width: 543px;
  display: flex;
  flex-direction: column;
  margin-top: ${props => (props.isMarginTop ? '40px' : '')};

  @media screen and (max-width: 1024px) {
    width: 372px;
  }

  @media screen and (max-width: 760px) {
    width: 347px;
  }
`;

export const ContentTitle = styled.div`
  color: #066f68;
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 25px;

  @media screen and (max-width: 1024px) {
    font-size: 18px;
    margin-bottom: 19px;
  }

  @media screen and (max-width: 760px) {
  }
`;

export const ContentText = styled.div<Props>`
  color: #4d4d4d;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: ${props => (props.isBottomNone ? '' : '27px')};
  line-height: 30px;
  letter-spacing: ${props => (props.isLessSpacing ? '-0.5px' : '')};

  @media screen and (max-width: 1024px) {
    font-size: 15px;
    line-height: 26px;
    margin-bottom: ${props => (props.isBottomNone ? '' : '24px')};
  }

  @media screen and (max-width: 760px) {
  }
`;

export const ContentPoint = styled.div<Props>`
  color: #4d4d4d;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: ${props => (props.isBottomNone ? '' : '12px')};
  display: flex;
  position: relative;

  @media screen and (max-width: 1024px) {
    font-size: 15px;
  }
`;

export const Point = styled.div`
  width: 5px;
  height: 5px;
  position: absolute;
  background-color: #4d4d4d;
  border-radius: 5px;
  top: 9px;
`;

export const PointText = styled.div<Props>`
  margin-left: 15px;

  @media screen and (max-width: 1024px) {
    width: ${props => (props.textWidth ? '290px' : '')};
  }

  @media screen and (max-width: 760px) {
    letter-spacing: ${props => (props.isLessSpacing ? '-0.5px' : '')};
  }
`;

export const Content1ImgBox = styled.div<Props>`
  width: 431px;
  height: ${props => props.webHeight};
  background-color: #f4f8fb;
  border-radius: 34px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1024px) {
    width: 278px;
    height: ${props => props.ipadHeight};
  }

  @media screen and (max-width: 760px) {
    order: -1;
    width: 350px;
    height: ${props => props.mobileHeight};
    margin-bottom: 30px;
  }
`;

export const Img = styled.img`
  @media screen and (max-width: 1024px) {
    height: 106px;
  }
`;

export default Service1;
