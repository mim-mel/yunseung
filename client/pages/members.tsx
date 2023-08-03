import Layout from '@/components/Layout';
import styled from '@emotion/styled';

const Members = () => {
  return (
    <Layout>
      <Wrap>
        <Title>구성원 소개</Title>
        <GreenBox>
          <GreenBoxText>대표이사</GreenBoxText>
          <GreenBoxText2>정효성 세무사</GreenBoxText2>
        </GreenBox>
        <CenterLine />
        <LineBoxWrap>
          <LineWrap>
            <Line1 />
            <Line2 />
            <Line3 />
          </LineWrap>
          <BoxWrap>
            <Box height='164px'>
              <NameBox>경기 광교 지점</NameBox>
              <TextBox>구현승 세무사 (010-2987-3203)</TextBox>
            </Box>
            <Box height='200px'>
              <NameBox>서울 서초 본사</NameBox>
              <TextBox>
                정효성 세무사 (010-6315-1923)
                <br />
                최인호 세무사 (010-3387-3298)
              </TextBox>
            </Box>
            <Box height='164px'>
              <NameBox>제주 지점</NameBox>
              <TextBox>구현승 세무사 (010-2987-3203)</TextBox>
            </Box>
            <Box isBottomNone height='238px'>
              <NameBox>Adviser</NameBox>
              <TextBox>
                김완희 박사 (회계학 교수)
                <br />
                윤태화 박사 (회계학 교수)
                <br />
                - 兼 조세심판원 의원
                <br />
              </TextBox>
            </Box>
            <Box isBottomNone height='164px'>
              <NameBox>IBS PARTNERS 법인 연구소</NameBox>
              <TextBox>전용승 센터장 (010-8257-6173)</TextBox>
            </Box>
            <Box isBottomNone>
              <NameBox>Assistance Group</NameBox>
              <TextBox>
                가율 회계법인 서용욱 회계사
                <br />
                (주)우리감정평가법인 김정근 감평사
                <br />
                법무법인 나은 이헌제 변호사
                <br />
                탁월 법무사사무소 최진헌 법무사
                <br />
                노무법인 로고스 김명선 노무사
                <br />
                특허법인 해안 이주철 변리사
                <br />
              </TextBox>
            </Box>
          </BoxWrap>
        </LineBoxWrap>
      </Wrap>
    </Layout>
  );
};

interface Props {
  isBottomNone?: boolean;
  height?: string;
}

const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 220px 0 160px 0;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 37px;
  font-weight: 800;
  color: #004453;
  margin-bottom: 90px;
`;

const GreenBox = styled.div`
  width: 310px;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #066f68;
  border-radius: 18px;
`;

const CenterLine = styled.div`
  height: 64px;
  width: 0.1px;
  background-color: #066f68;
`;

const GreenBoxText = styled.div`
  font-size: 22px;
  color: white;
  font-weight: 700;
  margin-bottom: 7px;
`;

const GreenBoxText2 = styled.div`
  font-size: 22px;
  color: white;
`;

const LineBoxWrap = styled.div`
  width: 1179px;
  height: auto;
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
  margin-bottom: 300px;
`;

const LineWrap = styled.div`
  width: 809px;
  height: auto;
  border-top: 1px solid #066f68;
  display: grid;
  justify-content: space-between;
  grid-template-columns: 0.1px 0.1px 0.1px;
`;

const Line1 = styled.div`
  height: 410px;
  width: 0.1px;
  background-color: #066f68;
`;

const Line2 = styled.div`
  height: 410px;
  width: 0.1px;
  background-color: #066f68;
`;

const Line3 = styled.div`
  height: 410px;
  width: 0.1px;
  background-color: #066f68;
`;

const BoxWrap = styled.div`
  width: 100%;
  position: absolute;
  display: grid;
  height: auto;
  grid-template-columns: 31% 31% 31%;
  justify-content: space-between;
  top: 100px;
  z-index: 20;
`;

const Box = styled.div<Props>`
  width: 100%;
  border: 1px solid #066f68;
  height: ${props => props.height};
  border-radius: 18px;
  overflow: hidden;
  margin: ${props => (props.isBottomNone ? '0 auto' : '0 auto 100px auto')};
`;

const NameBox = styled.div`
  border-bottom: 1px solid #066f68;
  width: 100%;
  background-color: #f4f8fb;
  padding: 25px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #066f68;
  font-size: 22px;
  font-weight: 800;
`;

const TextBox = styled.div`
  width: 100%;
  padding: 26px 0;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 21px;
  line-height: 35px;
  text-align: center;
`;

export default Members;
