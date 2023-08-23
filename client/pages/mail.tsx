import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from '@emotion/styled';
import { Wrap } from './members';
import Layout from '@/components/Layout';

const Mail = () => {
  const [IsChecked, setIsChecked] = useState(false);
  const form = useRef<HTMLFormElement | null>(null);

  const CheckHandler = (checked: boolean) => {
    if (checked === true) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(IsChecked);

    if (IsChecked === true) {
      if (form.current instanceof HTMLFormElement) {
        try {
          const response = await emailjs.sendForm(
            process.env.NEXT_PUBLIC_EMAIL_ID!,
            process.env.NEXT_PUBLIC_EMAIL_TEMPLATE!,
            form.current,
            process.env.NEXT_PUBLIC_EMAIL_KEY!
          );
          alert('메일이 전송되었습니다.');
          console.log(response);
        } catch (error) {
          alert('메일 전송에 실패하였습니다. 다시 시도해주세요.');
          console.error(error);
        }
      } else {
        alert('폼 요소를 참조할 수 없습니다.');
      }
    } else {
      alert('개인정보 제공에 동의해주세요.');
    }
  };

  return (
    <Layout>
      <Wrap>
        <Title>상담 신청하기</Title>
        <MainText>
          고객과 함께 성장하는 파트너 세무법인 윤승입니다.
          <br />
          궁금한 점이 있으시다면 문의해 주세요.
        </MainText>
        <SubText>
          <span>*</span>는 필수 입력 항목입니다.
        </SubText>
        <Form ref={form} onSubmit={onSubmit}>
          <NameInputWrap>
            <NameInputBlock>
              <Name>
                <span>*</span> 이름
              </Name>
              <Input
                type='name'
                name='name'
                placeholder='이름을 입력해주세요.'
              />
            </NameInputBlock>

            <NameInputBlock>
              <Name>
                <span>*</span> 사업장
              </Name>
              <Input
                type='business'
                name='business'
                placeholder='전화번호를 입력해주세요.'
              />
            </NameInputBlock>
          </NameInputWrap>

          <NameInputWrap>
            <NameInputBlock>
              <Name>
                <span>*</span> 연락처
              </Name>
              <Input
                type='tel'
                name='tel'
                placeholder='이메일을 입력해주세요.'
              />
            </NameInputBlock>

            <NameInputBlock>
              <Name>
                <span>*</span> 이메일
              </Name>
              <Input
                type='email'
                name='email'
                placeholder='제목을 입력해주세요.'
              />
            </NameInputBlock>
          </NameInputWrap>

          <TextAreaBlock>
            <Name>
              <span>*</span> 문의 내용
            </Name>
            <TextArea name='content' placeholder='문의 내용을 입력해주세요.' />
          </TextAreaBlock>

          <PersonalDataInfo>
            <DataText1>개인정보 수집 및 이용 동의</DataText1>
            <DataText2 isMarginBottom>
              세무법인 윤승은 귀하의 개인정보를 중요시하며, 개인정보보호에 관한
              법률을 준수하고 있습니다.
            </DataText2>
            <DataText2>
              <span>개인정보 수집 항목:</span> 이름, 연락처, 이메일
              <br />
              <span>개인정보 수집 및 이용 목적:</span> 문의에 대한 확인 및 회신
              <br />
              <span>개인정보 보유 및 이용 기간:</span> 수집 및 이용 목적 달성
              시까지 보유하며 해당 목적이 달성되면 파기됩니다.
              <br />
            </DataText2>
          </PersonalDataInfo>
          <CheckBoxBlock>
            <CheckBox
              type='checkbox'
              checked={IsChecked}
              onChange={e => CheckHandler(e.target.checked)}
            />
            <CheckBoxText>개인정보 수집 및 이용에 동의합니다.</CheckBoxText>
          </CheckBoxBlock>
          <Button>문의하기</Button>
        </Form>
      </Wrap>
    </Layout>
  );
};

interface Props {
  isMarginBottom?: boolean;
}

const Title = styled.div`
  font-size: 50px;
  font-weight: 800;
  color: #004453;
  margin-bottom: 25px;

  @media screen and (max-width: 1024px) {
    font-size: 40px;
    margin-bottom: 15px;
  }

  @media screen and (max-width: 760px) {
    font-size: 26px;
  }
`;

const MainText = styled.div`
  font-size: 32px;
  line-height: 47px;
  color: #292929;
  font-weight: 700;
  width: 860px;
  text-align: center;
  margin: 0 auto 90px auto;

  @media screen and (max-width: 1024px) {
    font-size: 25px;
    width: 533px;
    line-height: 40px;
    margin-bottom: 50px;
  }

  @media screen and (max-width: 760px) {
    font-size: 15px;
    width: 315px;
    line-height: 28px;
    margin-bottom: 30px;
  }
`;

const SubText = styled.div`
  color: #787878;
  font-size: 16px;
  font-weight: 400;
  margin: 0 0 50px auto;

  span {
    color: #066f68;
  }

  @media screen and (max-width: 760px) {
    margin: 0 0 0 auto;
    position: relative;
    top: 15px;
    font-size: 14px;
  }
`;

const Form = styled.form`
  width: 1420px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    width: 700px;
  }

  @media screen and (max-width: 760px) {
    width: 350px;
  }
`;

const NameInputWrap = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
  margin-bottom: 30px;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }

  @media screen and (max-width: 760px) {
    display: grid;
    grid-template-columns: 100%;
    margin-bottom: 0;
  }
`;

const NameInputBlock = styled.div`
  width: 48%;
  height: 50px;
  box-sizing: border-box;
  margin-bottom: 35px;

  @media screen and (max-width: 760px) {
    width: 100%;
    height: 70px;
    margin-bottom: 25px;
  }
`;

const TextAreaBlock = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  margin-bottom: 35px;

  @media screen and (max-width: 760px) {
    margin-bottom: 10px;
  }
`;

const Name = styled.div`
  font-size: 18px;
  color: #4d4d4d;
  font-weight: 700;
  margin-bottom: 12px;
  margin-left: 5px;

  span {
    color: #066f68;
  }

  @media screen and (max-width: 760px) {
    font-size: 16px;
    margin-bottom: 7px;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid #d3d3d3;
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 500;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: #bababa;
  }

  @media screen and (max-width: 760px) {
    height: 43px;
    padding: 15px;
  }
`;

const TextArea = styled.textarea`
  border: 1px solid #d3d3d3;
  background: #fff;
  border-radius: 10px;
  resize: none;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  height: 188px;
  font-size: 16px;

  ::placeholder {
    color: #bababa;
  }

  :focus {
    outline: none;
  }

  @media screen and (max-width: 760px) {
    height: 250px;
    margin-bottom: 15px;
    padding: 15px;
  }
`;

const PersonalDataInfo = styled.div`
  width: 1420px;
  border-radius: 10px;
  background: #f8f8f8;
  padding: 40px 30px;
  box-sizing: border-box;

  @media screen and (max-width: 1024px) {
    width: 700px;
  }

  @media screen and (max-width: 760px) {
    width: 350px;
    padding: 36px 20px;
  }
`;

const DataText1 = styled.div`
  color: #4d4d4d;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 25px;

  @media screen and (max-width: 760px) {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

const DataText2 = styled.div<Props>`
  color: #787878;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  margin-bottom: ${props => (props.isMarginBottom ? '25px' : '')};
  span {
    font-weight: 700;
  }

  @media screen and (max-width: 760px) {
    font-size: 14px;
    line-height: 26px;
  }
`;

const CheckBoxBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  margin-top: 20px;

  @media screen and (max-width: 760px) {
  }
`;

const CheckBox = styled.input`
  height: 25px;
  width: 18px;
  color: #a5a5a5;
  cursor: pointer;

  @media screen and (max-width: 760px) {
    width: 15px;
  }
`;

const CheckBoxText = styled.div`
  color: #4d4d4d;
  margin-left: 7px;
  font-size: 16px;

  @media screen and (max-width: 760px) {
    font-size: 15px;
  }
`;

const Button = styled.button`
  width: 158px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: #066f68;
  color: white;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  margin-left: auto;
  top: 0;
  margin-top: 60px;

  &:hover {
    top: 2%;
  }

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 760px) {
    width: 100%;
    margin-top: 50px;
    height: 46px;
  }
`;

export default Mail;
