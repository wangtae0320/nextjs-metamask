import type { NextPage } from "next";
import { useAddress, useMetamask } from "@thirdweb-dev/react";
import styled from '@emotion/styled'

const Home: NextPage = () => {
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  return (
    <>
      <TitleWrap>
        <h1> PFPlay </h1>
      </TitleWrap> 
      <LoginContainer>
        {address ? (
          <AddressWrap>
            {address.slice(0,5)}...{address.slice(address.length-5,address.length)}
          </AddressWrap>
        ) : (
          <Button onClick={connectWithMetamask}>Metamask</Button>
        )}
      </LoginContainer>
    </>
  );
};

export default Home;

// CSS 임시 적용
const TitleWrap = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 250px;
`

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
`

const Button = styled.button`
  border-color: #00000020;
  border-radius: 30px;
  background-color: #ffffff;
  width: 240px;
  font-size: 17px;
  height: 50px;
  cursor: pointer;
  :hover{
    background-color: #00000010
  }
`

const AddressWrap = styled.div`
  border: 2px solid #00000020;
  border-radius: 30px;
  padding: 12px 15px;
  width: 240px;
  height: 50px;
  text-align: center;
  font-size: 15px;
`