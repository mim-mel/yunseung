import { useRouter } from 'next/router';
import styled from '@emotion/styled';

interface CategoryProps {
  categoryName: string;
}

const ServiceNav = ({ categoryName }: CategoryProps) => {
  const router = useRouter();

  return (
    <ServiceNavWrap>
      <ServiceNavBox1>
        <Category
          className={categoryName === 'service1' ? 'active' : undefined}
          onClick={() => router.push('/service1')}
        >
          장부작성 및<br /> 세금신고
        </Category>
        <Category
          className={categoryName === 'service2' ? 'active' : undefined}
          onClick={() => router.push('/service2')}
        >
          양도, 상속,
          <br /> 증여세 신고
        </Category>
        <Category
          className={categoryName === 'service3' ? 'active' : undefined}
          onClick={() => router.push('/service3')}
        >
          조세불복 및<br /> 세무조사 대행
        </Category>
      </ServiceNavBox1>
      <ServiceNavBox2>
        <Category
          className={categoryName === 'service4' ? 'active' : undefined}
          onClick={() => router.push('/service4')}
        >
          경영 및<br /> 세무 컨설팅
        </Category>
        <Category
          className={categoryName === 'service5' ? 'active' : undefined}
          onClick={() => router.push('/service5')}
        >
          급여관리
          <br /> (4대 보험 업무 대행)
        </Category>
        <Category
          className={categoryName === 'service6' ? 'active' : undefined}
          onClick={() => router.push('/service6')}
        >
          증명 발급 서비스
        </Category>
      </ServiceNavBox2>
    </ServiceNavWrap>
  );
};

const ServiceNavWrap = styled.div`
  width: 1092px;
  height: 72px;
  margin: 220px auto 110px auto;
  display: grid;
  grid-template-columns: 50% 50%;

  @media screen and (max-width: 1024px) {
    width: 700px;
    height: 62px;
    border-radius: 15px;
    margin: 150px auto 70px auto;
  }

  @media screen and (max-width: 760px) {
    width: 350px;
    grid-template-columns: 100%;
    height: 154px;
    grid-gap: 10px;
    margin: 120px auto 50px auto;
  }
`;

const ServiceNavBox1 = styled.div`
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
  background: #f9f9f9;

  @media screen and (max-width: 1024px) {
    border-bottom-left-radius: 15px;
    border-top-left-radius: 15px;
  }

  @media screen and (max-width: 760px) {
    width: 350px;
    border-radius: 15px;
  }
`;

const ServiceNavBox2 = styled.div`
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  background: #f9f9f9;

  @media screen and (max-width: 1024px) {
    border-bottom-right-radius: 15px;
    border-top-right-radius: 15px;
  }

  @media screen and (max-width: 760px) {
    width: 350px;
    border-radius: 15px;
  }
`;

const Category = styled.div`
  width: 100%;
  border-radius: 20px;
  background: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #4d4d4d;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  text-align: center;
  cursor: pointer;
  letter-spacing: -0.5px;

  &.active {
    border: 1px solid #066f68;
    background: #fff;
    z-index: 10;
    color: #066f68;
    font-weight: 700;
  }

  @media screen and (max-width: 1024px) {
    font-size: 14px;
    border-radius: 15px;
    line-height: 18px;
  }
`;

export default ServiceNav;
