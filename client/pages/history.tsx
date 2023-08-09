import styled from '@emotion/styled';
import Layout from '@/components/Layout';
import { Wrap, Title } from './members';

const History = () => {
  return (
    <Layout>
      <Wrap>
        <Title isBottomMainText>연혁</Title>
        <MainText>
          세무법인 윤승은 지속적인 관심과 협력을 통해 여러분의 파트너로 함께
          성장하고 있습니다.
        </MainText>
        <Img src='/image/history1.jpg' />
        <LineArrowWrap>
          <Line>
            <RoundWrap>
              <Round>
                <TextBox>
                  <Year>2003</Year>
                  <Date>2003.12</Date>
                  <Text>서초구 서초동 “태현” 설립</Text>
                </TextBox>
              </Round>
              <Round>
                <TextBox isUpText>
                  <Year isUpText>2007</Year>
                  <Date isUpText>2007.05</Date>
                  <Text isBottom isUpText>
                    “태현 합동 사무소” 구성
                  </Text>
                </TextBox>
              </Round>
              <Round>
                <TextBox>
                  <Year>2011</Year>
                  <Date>2003.05</Date>
                  <Text isBottom>“세무법인 윤승” 법인전환 및 설립</Text>
                  <Date>2003.06</Date>
                  <Text isBottom>중소기업 비즈니스지원단 자문기관 위촉</Text>
                  <Date>2003.06</Date>
                  <Text>경기도 광교 지점 설립</Text>
                </TextBox>
              </Round>
              <Round>
                <TextBox isUpText>
                  <Year isUpText>2012</Year>
                  <Date isUpText>2012.12</Date>
                  <Text isBottom isUpText>
                    경기도 성남 지점 설립
                  </Text>
                </TextBox>
              </Round>
              <Round>
                <TextBox>
                  <Year>2018</Year>
                  <Date>2018.08</Date>
                  <Text>제주도 제주 지점 설립</Text>
                </TextBox>
              </Round>
            </RoundWrap>
          </Line>
          <Arrow src='/image/history-arrow.png' />
        </LineArrowWrap>
      </Wrap>
    </Layout>
  );
};

interface Props {
  isBottom?: boolean;
  isUpText?: boolean;
}

export const MainText = styled.div`
  font-size: 50px;
  line-height: 70px;
  color: #292929;
  font-weight: 700;
  width: 888px;
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
  }
`;

const Img = styled.img`
  margin-bottom: 255px;
  border-radius: 30px;

  @media screen and (max-width: 1024px) {
    width: 700px;
    margin-bottom: 157px;
  }

  @media screen and (max-width: 760px) {
    width: 350px;
    margin-bottom: 50px;
  }
`;

const LineArrowWrap = styled.div`
  display: grid;
  grid-template-columns: 80% 6.5%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 421px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 218px;
    grid-template-columns: 80% 9%;
  }

  @media screen and (max-width: 760px) {
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 0;
  }
`;

const Line = styled.div`
  width: 1300px;
  height: 46px;
  border-radius: 30px;
  background-color: #99b9b5;
  padding-left: 92px;
  padding-right: 154px;
  box-sizing: border-box;

  @media screen and (max-width: 1024px) {
    width: 617px;
    height: 30px;
    padding-left: 52px;
    padding-right: 72px;
  }

  @media screen and (max-width: 760px) {
    width: 30px;
    height: 630px;
    padding: 34px 0 76px 0;
  }
`;

const RoundWrap = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 46px 46px 46px 46px 46px;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 30px 30px 30px 30px 30px;
  }

  @media screen and (max-width: 760px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const Round = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 23px;
  background-color: #066f68;
  position: relative;

  @media screen and (max-width: 1024px) {
    width: 30px;
    height: 30px;
  }
`;

const TextBox = styled.div<Props>`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 350px;
  top: ${props => (props.isUpText ? '-170px' : '85px')};

  @media screen and (max-width: 1024px) {
    width: 190px;
    top: ${props => (props.isUpText ? '-105px' : '50px')};
  }

  @media screen and (max-width: 760px) {
    top: 0;
    left: ${props => (props.isUpText ? '50px' : '-150px')};
    width: 125px;
  }
`;

const Year = styled.div<Props>`
  font-size: 42px;
  font-weight: 800;
  color: #066f68;
  margin-bottom: 20px;
  order: ${props => (props.isUpText ? '2' : '')};

  @media screen and (max-width: 1024px) {
    font-size: 28px;
    margin-bottom: 13px;
  }

  @media screen and (max-width: 760px) {
    text-align: ${props => (props.isUpText ? 'left' : 'right')};
    order: 0;
  }
`;

const Date = styled.div<Props>`
  font-size: 22px;
  color: #066f68;
  font-weight: 600;
  margin-bottom: 4px;

  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }

  @media screen and (max-width: 760px) {
    text-align: ${props => (props.isUpText ? 'left' : 'right')};
    font-size: 12px;
  }
`;

const Text = styled.div<Props>`
  font-size: 22px;
  color: #4d4d4d;
  margin-bottom: ${props => (props.isBottom ? '20px' : '')};

  @media screen and (max-width: 1024px) {
    font-size: 14px;
    margin-bottom: ${props => (props.isBottom ? '11px' : '')};
    font-size: 12px;
  }

  @media screen and (max-width: 760px) {
    text-align: ${props => (props.isUpText ? 'left' : 'right')};
  }
`;

const Arrow = styled.img`
  @media screen and (max-width: 1024px) {
    width: 55px;
  }

  @media screen and (max-width: 760px) {
    width: 55px;
    transform: rotate(90deg);
  }
`;

export default History;
