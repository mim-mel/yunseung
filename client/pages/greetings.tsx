import styled from '@emotion/styled';
import Layout from '@/components/Layout';

const Greetings = () => {
  return (
    <Layout>
      <Wrap>
        <Title>인사말</Title>
        <MainText>
          확고한 성취의지와 창의적인 전문지식으로 고객들의 등대가 되어드릴
          파트너 <span>세무법인 윤승</span>
          입니다.
        </MainText>
        <ContentWrap>
          <Img src='/image/greetings1.jpg' />
          <TextBox>
            <Text>
              21세기 경제환경은 매우 복잡하게 얽혀있고 전문화되어 극심한 경쟁
              환경에 직면하고 있습니다. 이에 따라 세무 관련 업무와 전문성이
              요구됩니다.
            </Text>
            <Text>
              세무법인 윤승은 확고한 성취 의지와 창의적인 전문지식으로 고객의
              가치를 극대화하고 효율적인 서비스를 제공하고 있습니다.
            </Text>
            <Text>
              어둠이 짙게 깔린 바다 한 치 앞도 구분할 수 없는 어둠 속에서
              자그마한 등대 불빛 하나가 수많은 배들의 길잡이가 되어 희망의
              불빛을 밝혀주 듯 저희 윤승은 한 치 앞도 판단하기 힘든 경쟁
              사회에서 고객들의 등대가 되어드리겠습니다.
            </Text>
            <Text>
              고객을 단순 거래처가 아닌 함께 성장해 나아가는 파트너로서 바라보고
              지속적인 관심과 협력을 바탕으로 함께하고자 합니다.
            </Text>
            <Text isEnd>감사합니다.</Text>
            <End>세무법인 윤승 임 직원 일동</End>
          </TextBox>
        </ContentWrap>
      </Wrap>
    </Layout>
  );
};

interface Props {
  isEnd?: boolean;
}

const Wrap = styled.div`
  width: 1420px;
  margin: 160px auto 100px auto;

  @media screen and (max-width: 1024px) {
    width: 700px;
    margin: 150px auto 100px auto;
  }

  @media screen and (max-width: 760px) {
    width: 350px;
    margin: 140px auto 80px auto;
  }
`;

const Title = styled.div`
  font-weight: 800;
  font-size: 37px;
  color: #004453;
  margin-bottom: 30px;

  @media screen and (max-width: 1024px) {
    font-size: 20px;
    text-align: center;
    margin-bottom: 15px;
  }
`;

const MainText = styled.div`
  font-size: 50px;
  font-weight: 700;
  line-height: 70px;
  color: #000000;
  margin-bottom: 90px;
  width: 73%;

  span {
    color: #066f68;
  }

  @media screen and (max-width: 1024px) {
    font-size: 30px;
    line-height: 40px;
    text-align: center;
    margin: 0 auto 50px auto;
  }

  @media screen and (max-width: 760px) {
    width: 90%;
    font-size: 24px;
    margin: 0 auto 40px auto;
  }
`;

const ContentWrap = styled.div`
  display: grid;
  grid-template-columns: 45% 45%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 100px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 100%;
    margin-bottom: 0;
  }
`;

const Img = styled.img`
  @media screen and (max-width: 1024px) {
    width: 463px;
    margin: 0 auto 50px auto;
  }

  @media screen and (max-width: 760px) {
    width: 350px;
  }
`;

const TextBox = styled.div`
  width: 100%;

  @media screen and (max-width: 1024px) {
    width: 470px;
    margin: 0 auto;
  }

  @media screen and (max-width: 760px) {
    width: 300px;
    margin: 0 auto;
  }
`;

const Text = styled.div<Props>`
  font-size: 21px;
  color: #4d4d4d;
  margin-bottom: ${props => (props.isEnd ? '50px' : '30px')};

  @media screen and (max-width: 1024px) {
    font-size: 16px;
    margin-bottom: ${props => (props.isEnd ? '35px' : '20px')};
    text-align: center;
    line-height: 24px;
  }

  @media screen and (max-width: 760px) {
    font-size: 15px;
    margin-bottom: ${props => (props.isEnd ? '35px' : '20px')};
    text-align: center;
  }
`;

const End = styled.div`
  font-size: 21px;
  color: #4d4d4d;
  font-weight: 700;

  @media screen and (max-width: 1024px) {
    font-size: 16px;
    text-align: center;
  }
`;

export default Greetings;
