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

const Service4 = () => {
  return (
    <Layout>
      <ServiceNav categoryName='service5' />
      <Wrap>
        <Title>급여관리(4대 보험 업무 대행)</Title>
        <Content1Wrap isMarginTop isBottomNone>
          <Content1TextBox>
            <ContentTitle>급여관리</ContentTitle>
            <ContentText>
              4대 보험이란 국민연금, 건강보험, 고용보험, 산재보험을 말하며
              종업원 1인 이상을 두는 사업자는(개인∙법인 모두 포함) 의무적으로
              가입하여야 합니다.
              <br />
              <br />
              세무법인 윤승은 근로복지공단에 보험사무 위탁 기관으로 등록되어
              있어 4대 보험 관련 업무를 위탁 수행하고 있습니다.
            </ContentText>
            <ContentPoint>
              <Point />
              <PointText>급여대장 및 명세서의 작성</PointText>
            </ContentPoint>
            <ContentPoint>
              <Point />
              <PointText>월별 소득세 예수금의 세무서 신고</PointText>
            </ContentPoint>
            <ContentPoint>
              <Point />
              <PointText isLessSpacing>
                퇴직금 계산 및 퇴직소득에 대한 원천징수액의 세무서 신고
              </PointText>
            </ContentPoint>
            <ContentPoint>
              <Point />
              <PointText>연말정산 업무 및 세무서 신고 대행</PointText>
            </ContentPoint>
            <ContentPoint>
              <Point />
              <PointText>
                건강보험, 국민연금, 고용보험, 산재보험과 관련한 각종 사고
              </PointText>
            </ContentPoint>
          </Content1TextBox>
          <Content1ImgBox
            webHeight='410px'
            ipadHeight='373px'
            mobileHeight='238px'
          >
            <Img src='/image/service5-icon1.png' />
          </Content1ImgBox>
        </Content1Wrap>
      </Wrap>
    </Layout>
  );
};

export default Service4;
