import Layout from '@/components/Layout';
import { Title } from './members';
import ServiceNav from '@/components/ServiceNav';
import {
  Wrap,
  Content1Wrap,
  Content1TextBox,
  ContentTitle,
  ContentText,
  ContentPoint,
  Point,
  PointText,
  Content1ImgBox,
  Img,
} from './service1';

const Service2 = () => {
  return (
    <Layout>
      <ServiceNav categoryName='service2' />
      <Wrap>
        <Title>양도 및 상속 증여세 신고</Title>
        <Content1Wrap isMarginTop>
          <Content1TextBox>
            <ContentTitle>양도소득세 신고</ContentTitle>
            <ContentText>
              2007. 01. 01. 이후부터 양도소득세 전면 실 거래가 신고,직계존비속
              간 증여 추정, 부담부 증여, 8년 자격요건 검토 등 부동산을 양도하실
              경우에는 사전에 꼭 전문가의 상담을 받으신 후에 거래하시기
              바랍니다.
            </ContentText>
            <ContentPoint>
              <Point />
              <PointText>
                양도소득세 및 종합부동산세 상담 및 신고 대행
              </PointText>
            </ContentPoint>
            <ContentPoint>
              <Point />
              <PointText>비상장 / 상장 주식의 가치 평가</PointText>
            </ContentPoint>
            <ContentPoint isBottomNone>
              <Point />
              <PointText>
                주식 이동 시의 관련 세무서류 등의 작성 및 신고
              </PointText>
            </ContentPoint>
          </Content1TextBox>
          <Content1ImgBox
            webHeight='294px'
            ipadHeight='285px'
            mobileHeight='238px'
          >
            <Img src='/image/service2-icon1.png' />
          </Content1ImgBox>
        </Content1Wrap>

        <Content1Wrap isBottomNone>
          <Content1ImgBox
            webHeight='491px'
            ipadHeight='483px'
            mobileHeight='238px'
          >
            <Img src='/image/service2-icon2.png' />
          </Content1ImgBox>
          <Content1TextBox>
            <ContentTitle>상속 증여세 신고</ContentTitle>
            <ContentText>
              상속 또는 증여에 의하여 무상으로 자산을 취득하는 경우
              상속개시일(증여받은 날)이 속하는 달의 말일부터 6월(3월) 이내에
              신고 ∙ 납부하여야 합니다.
              <br />
              <br />
              상속 및 증여의 경우 세대 간의 자산의 이전이 사전 계획 없이
              진행되거나 비전문가에 의한 상담을 기반으로 정확하지 않은 정보에
              의한 자산의 이전 행위로 인하여 예측하지 못한 세금을 부담해야 하는
              경우가 많습니다.
              <br />
              <br />
              사전에 전문가와의 상담을 통하여 적법한 절차에 의하여 절세효과를
              누리시기 바랍니다.
            </ContentText>
            <ContentPoint>
              <Point />
              <PointText>자산 이전에 대한 사전적인 컨설팅</PointText>
            </ContentPoint>
            <ContentPoint>
              <Point />
              <PointText>자산 구성 내용 분석을 통한 절세방안 강구</PointText>
            </ContentPoint>
            <ContentPoint>
              <Point />
              <PointText>상속⋅증여세의 상담 및 신고 대행</PointText>
            </ContentPoint>
            <ContentPoint isBottomNone>
              <Point />
              <PointText>상속⋅증여세 신고 이후 사후 관리</PointText>
            </ContentPoint>
          </Content1TextBox>
        </Content1Wrap>
      </Wrap>
    </Layout>
  );
};

export default Service2;
