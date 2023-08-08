import Layout from '@/components/Layout';
import { Title } from './members';
import ServiceNav from '@/components/ServiceNav';
import styled from '@emotion/styled';
import {
  Wrap,
  ContentTitle,
  ContentPoint,
  Point,
  PointText,
  Content1ImgBox,
  Img,
} from './service1';

const Service6 = () => {
  return (
    <Layout>
      <ServiceNav categoryName='service6' />
      <Wrap>
        <Title>증명 발급 서비스</Title>
        <Content1Wrap>
          <Content1ImgBox
            webHeight='700px'
            ipadHeight='610px'
            mobileHeight='238px'
          >
            <Img src='/image/service6-icon1.png' />
          </Content1ImgBox>
          <div>
            <Content1TextBox>
              <ContentTitle>세무컨설팅</ContentTitle>
              <PointWrap>
                <PointBox>
                  <ContentPoint>
                    <Point />
                    <PointText>대차대조표</PointText>
                  </ContentPoint>
                  <ContentPoint>
                    <Point />
                    <PointText>손익계산서</PointText>
                  </ContentPoint>
                  <ContentPoint>
                    <Point />
                    <PointText>제조원가명세서</PointText>
                  </ContentPoint>
                  <ContentPoint>
                    <Point />
                    <PointText>이익잉여금</PointText>
                  </ContentPoint>
                  <ContentPoint>
                    <Point />
                    <PointText>처분 계산서</PointText>
                  </ContentPoint>
                </PointBox>

                <PointBox>
                  <ContentPoint>
                    <Point />
                    <PointText>합계잔액시산표</PointText>
                  </ContentPoint>
                  <ContentPoint>
                    <Point />
                    <PointText>현금흐름표</PointText>
                  </ContentPoint>
                  <ContentPoint>
                    <Point />
                    <PointText>자본변동표</PointText>
                  </ContentPoint>
                  <ContentPoint>
                    <Point />
                    <PointText>재무제표증명원</PointText>
                  </ContentPoint>
                  <ContentPoint>
                    <Point />
                    <PointText>재무제표 등 확인원 등</PointText>
                  </ContentPoint>
                </PointBox>
              </PointWrap>
            </Content1TextBox>

            <Content1TextBox isMarginTop>
              <ContentTitle>근로소득 관련 증명 발급</ContentTitle>
              <ContentPoint>
                <Point />
                <PointText>근로소득 원천 영수증</PointText>
              </ContentPoint>
              <ContentPoint>
                <Point />
                <PointText>소득 금액 확인원</PointText>
              </ContentPoint>
              <ContentPoint>
                <Point />
                <PointText>퇴직소득 원천징수영수증</PointText>
              </ContentPoint>
              <ContentPoint>
                <Point />
                <PointText>사업소득 원천징수영수증</PointText>
              </ContentPoint>
              <ContentPoint>
                <Point />
                <PointText>기타소득 원천징수영수증 등</PointText>
              </ContentPoint>
            </Content1TextBox>

            <Content1TextBox isMarginTop>
              <ContentTitle>기타</ContentTitle>
              <ContentPoint>
                <Point />
                <PointText>부가세 과표 확인원</PointText>
              </ContentPoint>
              <ContentPoint>
                <Point />
                <PointText>면세사업자 원천징수 영수증</PointText>
              </ContentPoint>
              <ContentPoint>
                <Point />
                <PointText>각종 사실증명원 등</PointText>
              </ContentPoint>
            </Content1TextBox>
          </div>
        </Content1Wrap>
      </Wrap>
    </Layout>
  );
};

interface Props {
  isMarginTop?: boolean;
}

const Content1Wrap = styled.div`
  width: 900px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;

  @media screen and (max-width: 1024px) {
    width: 700px;
  }

  @media screen and (max-width: 760px) {
    margin-top: 10px;
    width: 347px;
    display: grid;
    grid-template-columns: 100%;
  }
`;

const Content1TextBox = styled.div<Props>`
  width: 360px;
  display: flex;
  flex-direction: column;
  margin-top: ${props => (props.isMarginTop ? '40px' : '')};

  @media screen and (max-width: 1024px) {
    width: 360px;
  }

  @media screen and (max-width: 760px) {
    width: 330px;
    margin: 0 auto;
    margin-top: ${props => (props.isMarginTop ? '40px' : '')};
  }
`;

const PointWrap = styled.div`
  display: grid;
  grid-template-columns: 49% 49%;
  justify-content: space-between;
  width: 310px;

  /* @media screen and (max-width: 760px) {
    grid-template-columns: 100%;
  } */
`;

const PointBox = styled.div``;

export default Service6;
