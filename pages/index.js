import React, { useState } from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import styled from "styled-components";

const MainPageSection = styled.section`
  width: 100%;
  position: fixed;
  top: 70px;
`;

const ImageWrap = styled.div`
  height: 100vh;
`;

const ParallaxImageCommon = styled.div`
  position: fixed;
  width: 100%;
  height: inherit;
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const ParallaxImage1 = styled(ParallaxImageCommon)`
  &:nth-child(1) {
    background-image: url(/images/004.png);
  }
`;

const ParallaxImage2 = styled(ParallaxImageCommon)`
  &:nth-child(2) {
    background-image: url(/images/005.png);
  }
`;

const ParallaxImage3 = styled(ParallaxImageCommon)`
  &:nth-child(3) {
    background-image: url(/images/006.png);
  }
`;

const ParallaxImage4 = styled(ParallaxImageCommon)`
  &:nth-child(4) {
    background-image: url(/images/007.png);
  }
`;

const ParallaxImage5 = styled(ParallaxImageCommon)`
  &:nth-child(5) {
    background-image: url(/images/008.png);
  }
`;

const SubPageSection = styled.section`
  z-index: 10;
  padding-top: 100vh;
  padding-bottom: 60px;
  width: 700px;
  margin: auto;
`;

const SubPageInnerWrap = styled.div`
  position: relative;
  background-color: rgba(50, 92, 62, 0.5);
  height: 550px;
  display: flex;
  flex-direction: column;
`;

const PhraseWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const PhraseImg = styled.img`
  width: 70%;
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const BtnImgCommon = styled.img`
  background-color: white;
  width: 120px;
  height: 120px;
  border-radius: 20%;
  cursor: pointer;
`;

const Home = () => {
  const [scrollNum, setScrollNum] = useState(0);
  const backgroundImgs = [
    ParallaxImage1,
    ParallaxImage2,
    ParallaxImage3,
    ParallaxImage4,
    ParallaxImage5,
  ];
  const totalNum = backgroundImgs.length;

  // window.addEventListener("scroll", () => {
  //   setScrollNum(window.scrollY);

  //   backgroundImgs.forEach((item, index) => {
  //     console.log(item);
  //     item.style.transform = `perspective(500px) translate3d(0,0, ${
  //       scrollNum / (2 * (totalNum - index))
  //     }px)`;
  //   });
  // });

  return (
    <>
      <Head>
        <title>Haru Camping</title>
      </Head>
      <AppLayout></AppLayout>
      <MainPageSection>
        <ImageWrap>
          <ParallaxImage1 />
          <ParallaxImage2 />
          <ParallaxImage3 />
          <ParallaxImage4 />
          <ParallaxImage5 />
        </ImageWrap>
      </MainPageSection>
      <SubPageSection>
        <SubPageInnerWrap>
          <PhraseWrap>
            <PhraseImg
              src="/images/main_phrase.png"
              alt="집에서 놀고 있는 캠핑 용품으로 용돈 벌어요!"
            />
          </PhraseWrap>
          <BtnWrap>
            <BtnImgCommon src="/images/btn_rental.png" alt="대여해요" />
            <BtnImgCommon src="/images/btn_buy.png" alt="구해요" />
            <BtnImgCommon src="/images/btn_clean.png" alt="금주의깔끔왕" />
          </BtnWrap>
        </SubPageInnerWrap>
      </SubPageSection>
    </>
  );
};

export default Home;
