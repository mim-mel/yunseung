import styled from '@emotion/styled';
import Layout from '@/components/Layout';
import { Wrap, Title } from './members';
import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    naver: any;
  }
}

const MapPage = () => {
  const [MapNum, setMapNum] = useState(1);

  const mapElement = useRef(null);

  useEffect(() => {
    const { naver } = window;
    if (!mapElement.current || !naver) return;

    // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
    const location = new naver.maps.LatLng(37.4949581, 127.0122414);
    // 맵 옵션을 설정해 줍니다.
    const mapOptions = {
      center: location,
      zoom: 17,
    };
    const map = new naver.maps.Map(mapElement.current, mapOptions);
    new naver.maps.Marker({
      position: location,
      map,
    });
  }, [MapNum]);

  const mapElement2 = useRef(null);

  useEffect(() => {
    const { naver } = window;
    if (!mapElement2.current || !naver) return;

    // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
    const location2 = new naver.maps.LatLng(37.2969655, 127.0686789);
    // 맵 옵션을 설정해 줍니다.
    const mapOptions = {
      center: location2,
      zoom: 17,
    };
    const map = new naver.maps.Map(mapElement2.current, mapOptions);
    new naver.maps.Marker({
      position: location2,
      map,
    });
  }, [MapNum]);

  const mapElement3 = useRef(null);

  useEffect(() => {
    const { naver } = window;
    if (!mapElement3.current || !naver) return;

    // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
    const location3 = new naver.maps.LatLng(33.4895714, 126.5220844);
    // 맵 옵션을 설정해 줍니다.
    const mapOptions = {
      center: location3,
      zoom: 17,
    };
    const map = new naver.maps.Map(mapElement3.current, mapOptions);
    new naver.maps.Marker({
      position: location3,
      map,
    });
  }, [MapNum]);

  return (
    <Layout>
      <Wrap>
        <Title>오시는길</Title>
        <Img src='/image/map-img1.jpg' />
        <MainText1>세무법인 윤승은,</MainText1>
        <MainText2>
          진취적으로 생각하고, 역동적으로 행동하며
          <br />
          사려 깊은 연구를 바탕으로
        </MainText2>
        <MainText2 isBottom>
          <span>고객과 언제나 함께 하는</span> 윤승
          <br />
          <span>고객이 언제나 믿을 수 있는</span> 윤승
          <br />
          <span>고객을 언제나 찾아가는 </span>윤승이 되겠습니다.
          <br />
        </MainText2>
        <MapNav>
          <NavBox
            className={MapNum === 1 ? 'active' : undefined}
            onClick={() => {
              setMapNum(1);
            }}
          >
            서울 서초 본사
          </NavBox>
          <NavBox
            className={MapNum === 2 ? 'active' : undefined}
            onClick={() => {
              setMapNum(2);
            }}
          >
            경기 광교 지점
          </NavBox>
          <NavBox
            className={MapNum === 3 ? 'active' : undefined}
            onClick={() => {
              setMapNum(3);
            }}
          >
            제주 지점
          </NavBox>
        </MapNav>
        <MapBlock>
          {MapNum === 1 && <MapImg ref={mapElement} />}
          {MapNum === 2 && <MapImg ref={mapElement2} />}
          {MapNum === 3 && <MapImg ref={mapElement3} />}
        </MapBlock>
        {MapNum === 1 && (
          <MapNameTextBox>
            <MapName>서울 서초 본사</MapName>
            <MapTextBox>
              <MapText isMarginBottom isMobileMarginBottom>
                <span>주소</span>서울 서초구 법원로4길 31 대원빌딩 4층
              </MapText>
              <MapTextBox2>
                <MapText isMarginRight isMobileMarginBottom>
                  <span>Tel</span>02-525-6172~73
                </MapText>
                <MapText>
                  <span>Fax</span>02-587-4230~1
                </MapText>
              </MapTextBox2>
            </MapTextBox>
          </MapNameTextBox>
        )}

        {MapNum === 2 && (
          <MapNameTextBox>
            <MapName>경기 광교 지점</MapName>
            <MapTextBox>
              <MapText isMarginBottom isMobileMarginBottom>
                <span>주소</span>경기도 용인시 수지구 상현동 광교중앙로 301
                드림타워 501호
              </MapText>
              <MapTextBox2>
                <MapText isMarginRight isMobileMarginBottom>
                  <span>Tel</span>031-234-7671
                </MapText>
                <MapText>
                  <span>Fax</span>031-234-7672
                </MapText>
              </MapTextBox2>
            </MapTextBox>
          </MapNameTextBox>
        )}

        {MapNum === 3 && (
          <MapNameTextBox>
            <MapName>제주 지점</MapName>
            <MapTextBox>
              <MapText isMarginBottom>
                <span>주소</span>제주 제주시 청사로 28 3층
              </MapText>
              <MapText>
                <span>Tel</span>064-805-0093
              </MapText>
            </MapTextBox>
          </MapNameTextBox>
        )}
      </Wrap>
    </Layout>
  );
};

interface Props {
  isBottom?: boolean;
  isMarginBottom?: boolean;
  isMarginRight?: boolean;
  isMobileMarginBottom?: boolean;
}

const Img = styled.img`
  margin-bottom: 90px;
  border-radius: 30px;

  @media screen and (max-width: 1024px) {
    width: 700px;
    margin-bottom: 70px;
  }

  @media screen and (max-width: 760px) {
    width: 350px;
    margin-bottom: 40px;
    border-radius: 20px;
  }
`;

const MainText1 = styled.div`
  color: #292929;
  text-align: center;
  font-size: 60px;
  font-weight: 700;
  margin-bottom: 60px;

  @media screen and (max-width: 1024px) {
    font-size: 36px;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 760px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

const MainText2 = styled.div<Props>`
  color: #292929;
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  line-height: 65px;
  margin-bottom: ${props => (props.isBottom ? '150px' : '30px')};

  span {
    color: #066f68;
  }

  @media screen and (max-width: 1024px) {
    line-height: 40px;
    font-size: 22px;
    margin-bottom: ${props => (props.isBottom ? '70px' : '25px')};
  }

  @media screen and (max-width: 760px) {
    font-size: 16px;
    line-height: 26px;
    margin-bottom: ${props => (props.isBottom ? '60px' : '20px')};
  }
`;

const MapNav = styled.div`
  background-color: #f9f9f9;
  width: 546px;
  height: 72px;
  border-radius: 20px;
  display: grid;
  grid-template-columns: 33.2% 33.2% 33.2%;
  overflow: hidden;
  margin-bottom: 70px;

  @media screen and (max-width: 1024px) {
    width: 416px;
    height: 55px;
    margin-bottom: 50px;
  }

  @media screen and (max-width: 760px) {
    width: 350px;
    border-radius: 15px;
    grid-template-columns: 33.1% 33.1% 33.1%;
    margin-bottom: 40px;
  }
`;

const NavBox = styled.div`
  width: 100%;
  background-color: #f9f9f9;
  color: #4d4d4d;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 20px;
  border-radius: 20px;
  border: 1px solid #f9f9f9;

  &.active {
    border: 1px solid #066f68;
    background: #fff;
    z-index: 10;
    color: #066f68;
    font-weight: 700;
  }

  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }

  @media screen and (max-width: 760px) {
    font-size: 14px;
    border-radius: 15px;
  }
`;

const MapBlock = styled.div`
  width: 1420px;
  height: 750px;
  border-radius: 30px;
  background-color: #f9f9f9;
  margin-bottom: 70px;

  @media screen and (max-width: 1024px) {
    width: 700px;
    height: 375px;
    margin-bottom: 50px;
  }

  @media screen and (max-width: 760px) {
    width: 350px;
    height: 187px;
    margin-bottom: 40px;
  }
`;

const MapImg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 40px;
  border: none;

  @media screen and (max-width: 760px) {
    border-radius: 20px;
  }
`;

const MapNameTextBox = styled.div`
  display: flex;
  margin-right: auto;

  @media screen and (max-width: 760px) {
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
  }
`;

const MapName = styled.div`
  color: #292929;
  font-size: 50px;
  font-weight: 800;
  margin-right: 80px;

  @media screen and (max-width: 1024px) {
    font-size: 28px;
    margin-right: 47px;
  }

  @media screen and (max-width: 760px) {
    font-size: 24px;
    margin-right: 0;
    margin-bottom: 30px;
  }
`;

const MapTextBox = styled.div`
  display: block;
`;

const MapTextBox2 = styled.div`
  display: flex;

  @media screen and (max-width: 760px) {
    flex-direction: column;
  }
`;

const MapText = styled.div<Props>`
  color: #4d4d4d;
  font-size: 22px;
  font-weight: 400;
  margin-bottom: ${props => (props.isMarginBottom ? '15px' : '')};
  margin-right: ${props => (props.isMarginRight ? '35px' : '')};

  span {
    color: #066f68;
    margin-right: 15px;
    font-weight: 800;
  }

  @media screen and (max-width: 1024px) {
    font-size: 18px;
  }

  @media screen and (max-width: 760px) {
    font-size: 16px;
    text-align: center;
    margin-right: 0;
    margin-bottom: ${props => (props.isMobileMarginBottom ? '13px' : '')};
    line-height: 26px;
    width: 300px;
  }
`;

export default MapPage;
