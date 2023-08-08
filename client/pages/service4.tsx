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
      <ServiceNav categoryName='service4' />
      <Wrap>
        <Title>중소기업 경영 컨설팅</Title>
        <Content1Wrap isMarginTop>
          <Content1TextBox>
            <ContentTitle>양도소득세 신고</ContentTitle>
            <ContentText isBottomNone>
              세무법인 윤승은 중소기업청에서 주관하는 중소기업 컨설팅을 수행하는
              중소기업 비즈니스지원단 자문기관 및 자문 위원으로 등록되어 있으며,
              중소기업을 상대로 경영 컨설팅 및 세무컨설팅을 수행하고 있습니다.
              <br />
              <br />
              이러한 자문기관 및 자문 위원을 통해 컨설팅을 받고 문제를 해결하는
              경우, 전문가의 도움을 받아 보다 확실하게 경영상의 난관을 해결할 수
              있을 뿐 아니라, 컨설팅 비용의 일부를 국가로부터 지원받을 수
              있습니다.
            </ContentText>
          </Content1TextBox>
          <Content1ImgBox
            webHeight='294px'
            ipadHeight='293px'
            mobileHeight='238px'
          >
            <Img src='/image/service4-icon1.png' />
          </Content1ImgBox>
        </Content1Wrap>

        <Content1Wrap isBottomNone>
          <Content1ImgBox
            webHeight='330px'
            ipadHeight='320px'
            mobileHeight='238px'
          >
            <Img src='/image/service4-icon2.png' />
          </Content1ImgBox>
          <Content1TextBox>
            <ContentTitle>세무컨설팅</ContentTitle>
            <ContentText>
              급변하고 있는 시장 환경 속에서 법인과 개인 사업자의 경영관리에
              대한 중요성은 커지고 있습니다.
              <br />
              <br />
              고객이 고민하는 경영전략과 내부 시스템의 문제를 진단하고 대안을
              제시하여 기업의 경영 효율성 증대와 실무진의 역량을 강화하여 경쟁력
              있는 기업으로 성장할 수 있도록 합니다.
            </ContentText>
            <ContentPoint>
              <Point />
              <PointText textWidth>
                기업 자문을 위하여 법령 검토 및 세법해석, 예규, 판례를 연구
              </PointText>
            </ContentPoint>
            <ContentPoint isBottomNone>
              <Point />
              <PointText textWidth>
                기업 실무진과의 지속적인 커뮤니케이션을 통한 자문 관리
              </PointText>
            </ContentPoint>
          </Content1TextBox>
        </Content1Wrap>
      </Wrap>
    </Layout>
  );
};

export default Service4;
