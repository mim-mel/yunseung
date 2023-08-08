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

const Service3 = () => {
  return (
    <Layout>
      <ServiceNav categoryName='service3' />
      <Wrap>
        <Title>조세불복 및 세무조사 대행</Title>
        <Content1Wrap isMarginTop>
          <Content1TextBox>
            <ContentTitle>조세 불복</ContentTitle>
            <ContentText>
              위법 또는 부당한 처분을 받았거나 필요한 처분을 받지 못함으로써
              권리 또는 이익의 침해를 당한 자는 그 처분을 받은 날로부터 90일
              이내에 이의신청, 심사청구, 심판청구를 할 수 있습니다.
            </ContentText>
            <ContentPoint>
              <Point />
              <PointText>각종 세법의 해석과 법률 검토</PointText>
            </ContentPoint>
            <ContentPoint isBottomNone>
              <Point />
              <PointText>
                이의신청⋅심사청구⋅심판청구 등 조세 불복 절차대행
              </PointText>
            </ContentPoint>
          </Content1TextBox>
          <Content1ImgBox
            webHeight='294px'
            ipadHeight='337px'
            mobileHeight='238px'
          >
            <Img src='/image/service3-icon1.png' />
          </Content1ImgBox>
        </Content1Wrap>

        <Content1Wrap isBottomNone>
          <Content1TextBox>
            <ContentTitle>세무조사 대행</ContentTitle>
            <ContentText isLessSpacing>
              납세자권리헌장에서는 회사가 세무조사를 받는 경우 조세전문가인
              세무사가 조사에 입회하거나 의견 진술 등을 통하여 조력을 할 수
              있도록 규정하고 있습니다.
              <br />
              <br />
              최근의 세무조사는 조사영역의 확대, 조사 역량의 강화 등의 세무조사
              환경의 변화로 인하여 종전의 세무조사에 비하여 한층 더 많은 준비를
              요합니다.
            </ContentText>
            <ContentPoint>
              <Point />
              <PointText textWidth>
                예상되는 주요 쟁점사항에 대한 사전 검토 및 최선의 대응 방안 제공
              </PointText>
            </ContentPoint>
            <ContentPoint isBottomNone>
              <Point />
              <PointText>세무조사 입회 및 조사 대응 업무 수행</PointText>
            </ContentPoint>
          </Content1TextBox>
          <Content1ImgBox
            webHeight='294px'
            ipadHeight='337px'
            mobileHeight='238px'
          >
            <Img src='/image/service3-icon2.png' />
          </Content1ImgBox>
        </Content1Wrap>
      </Wrap>
    </Layout>
  );
};

export default Service3;
