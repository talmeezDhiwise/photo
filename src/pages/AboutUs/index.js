import React from "react";

import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Button } from "components/Button";
import { Grid } from "components/Grid";

const AboutUsPage = () => {
  return (
    <>
      <Column
        className="bg-gray_200 font-dmsans items-center justify-start mx-[auto] w-[100%]"
        compId="1711:582"
        comWidth={1440}
        comHeight={5672}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <Stack
          className="h-[1091px] 2xl:h-[1092px] 3xl:h-[1310px] lg:h-[849px] xl:h-[971px] w-[100%]"
          compId="77"
          comWidth={1440}
          comHeight={1091}
          compLeft={0}
          compRight={0}
          compType="Stack"
        >
          <Stack
            className="absolute h-[1091px] 2xl:h-[1092px] 3xl:h-[1310px] lg:h-[849px] xl:h-[971px] inset-[0] w-[100%]"
            compId="79"
            comWidth={1440}
            comHeight={1091}
            compLeft={0}
            compRight={0}
            compType="Stack"
          >
            <div
              className="absolute bg-white_A700 lg:h-[592px] xl:h-[677px] h-[760px] 2xl:h-[761px] 3xl:h-[913px] top-[0] w-[100%]"
              compId="1711:706"
              comWidth={1440}
              comHeight={760}
              compLeft={0}
              compRight={0}
              compType="View"
            ></div>
            <div
              className="absolute bg-gray_300 bottom-[0] lg:h-[343px] xl:h-[392px] h-[440px] 2xl:h-[441px] 3xl:h-[529px] inset-x-[0] mx-[auto] w-[86%]"
              compId="1711:707"
              comWidth={1232}
              comHeight={440}
              compLeft={0}
              compRight={0}
              compType="View"
            ></div>
          </Stack>
          <Column
            className="absolute inset-x-[0] mx-[auto] top-[5%] w-[86%]"
            compId="34"
            comWidth={1232}
            comHeight={551}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <header
              className="w-[100%]"
              compId="4"
              comWidth={1232}
              comHeight={56}
              compLeft={0}
              compRight={0}
              compType="Header"
            >
              <Row
                className="items-center justify-start w-[100%]"
                compId="1711:724"
                comWidth={1232}
                comHeight={56}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Row
                  className="items-center justify-between xl:mb-[12px] mb-[14px] 3xl:mb-[16px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] lg:my-[10px] w-[18%]"
                  compId="1711:730"
                  comWidth={216}
                  comHeight={29}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-bold lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_500 text-left tracking-ls1 w-[39%]"
                    compId="1711:731"
                    comWidth={84}
                    comHeight={29}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Gallery`}</Text>
                  <Text
                    className="font-bold lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_500 text-left tracking-ls1 w-[50%]"
                    compId="1711:732"
                    comWidth={108}
                    comHeight={29}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`About Us`}</Text>
                </Row>
                <Image
                  src={"images/img_logo.svg"}
                  className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] lg:mb-[3px] mb-[4.33px] 2xl:mb-[4px] 3xl:mb-[5px] lg:ml-[217px] xl:ml-[249px] ml-[280px] 3xl:ml-[336px] lg:mt-[2px] mt-[3.67px] 2xl:mt-[3px] 3xl:mt-[4px] xl:my-[3px] object-contain w-[19%]"
                  compId="1711:725"
                  comWidth={240}
                  comHeight={48}
                  compLeft={280}
                  compRight={0}
                  compType="Image"
                  alt="Logo"
                />
                <Button
                  className="bg-gray_600 font-bold lg:ml-[269px] xl:ml-[308px] ml-[347px] 3xl:ml-[416px] lg:py-[15px] xl:py-[17px] py-[20.1px] 2xl:py-[20px] 3xl:py-[24px] rounded-radius8 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-white_A700 tracking-ls1 w-[12%]"
                  compId="3"
                  comWidth={149}
                  comHeight={56}
                  compLeft={347}
                  compRight={0}
                  compType="Button"
                >{`Booking Now`}</Button>
              </Row>
            </header>
            <Row
              className="items-start justify-between mt-[109px] 3xl:mt-[130px] lg:mt-[84px] xl:mt-[96px] w-[100%]"
              compId="33"
              comWidth={1232}
              comHeight={386}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Column
                className="items-start justify-start lg:mb-[37px] xl:mb-[42px] mb-[48px] 3xl:mb-[57px] w-[74%]"
                compId="32"
                comWidth={908}
                comHeight={338}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold leading-lh12000 lg:text-fs49 xl:text-fs56 text-fs64 3xl:text-fs76 text-gray_900 text-left tracking-ls1 w-[100%]"
                  compId="1711:723"
                  comWidth={908}
                  comHeight={154}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  {
                    <>
                      {`Alyssa Julie,`}
                      <br />
                      {`Japan Based Photographer`}
                    </>
                  }
                </Text>
                <Text
                  className="font-normal leading-lh12500 mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_800 text-left tracking-ls1 w-[67%]"
                  compId="1711:722"
                  comWidth={612}
                  comHeight={40}
                  compLeft={0}
                  compRight={10}
                  compType="Text"
                >
                  {
                    <>
                      {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, `}
                      <br />
                      {`sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
                    </>
                  }
                </Text>
                <Button
                  className="bg-gray_600 font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[43px] xl:mt-[49px] mt-[56px] 3xl:mt-[67px] lg:py-[15px] xl:py-[17px] py-[20.1px] 2xl:py-[20px] 3xl:py-[24px] rounded-radius8 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-white_A700 tracking-ls1 w-[17%]"
                  compId="2"
                  comWidth={156}
                  comHeight={56}
                  compLeft={0}
                  compRight={10}
                  compType="Button"
                >{`Find out More`}</Button>
              </Column>
              <Column
                className="xl:mt-[101px] mt-[114px] 3xl:mt-[136px] lg:mt-[88px] w-[5%]"
                compId="1711:709"
                comWidth={56}
                comHeight={272}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Column
                  className="border-2 border-gray_500 border-solid lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] items-center justify-start rounded-radius50 w-[100%]"
                  compId="1711:710"
                  comWidth={56}
                  comHeight={56}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold xl:mb-[12px] mb-[14px] 3xl:mb-[16px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] mx-[auto] lg:my-[10px] text-center lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_600 tracking-ls1 w-[45%]"
                    compId="1711:712"
                    comWidth={25}
                    comHeight={29}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`fb`}</Text>
                </Column>
                <Column
                  className="border-2 border-gray_500 border-solid lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] items-center justify-start lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] rounded-radius50 w-[100%]"
                  compId="1711:713"
                  comWidth={56}
                  comHeight={56}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold xl:mb-[12px] mb-[14px] 3xl:mb-[16px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] mx-[auto] lg:my-[10px] text-center lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_600 tracking-ls1 w-[54%]"
                    compId="1711:715"
                    comWidth={30}
                    comHeight={29}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`tw`}</Text>
                </Column>
                <Column
                  className="border-2 border-gray_500 border-solid lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] items-center justify-start lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] rounded-radius50 w-[100%]"
                  compId="1711:716"
                  comWidth={56}
                  comHeight={56}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold xl:mb-[12px] mb-[14px] 3xl:mb-[16px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] mx-[auto] lg:my-[10px] text-center lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_600 tracking-ls1 w-[38%]"
                    compId="1711:718"
                    comWidth={21}
                    comHeight={29}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`ig`}</Text>
                </Column>
                <Column
                  className="border-2 border-gray_500 border-solid lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] items-center justify-start lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] rounded-radius50 w-[100%]"
                  compId="1711:719"
                  comWidth={56}
                  comHeight={56}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold xl:mb-[12px] mb-[14px] 3xl:mb-[16px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] mx-[auto] lg:my-[10px] text-center lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_600 tracking-ls1 w-[55%]"
                    compId="1711:721"
                    comWidth={31}
                    comHeight={29}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`be`}</Text>
                </Column>
              </Column>
            </Row>
          </Column>
        </Stack>
        <Image
          src={"images/img_brandclientlo.svg"}
          className="h-[104px] 2xl:h-[105px] 3xl:h-[125px] lg:h-[81px] xl:h-[93px] lg:mt-[62px] xl:mt-[71px] mt-[80px] 3xl:mt-[96px] mx-[auto] object-contain w-[86%]"
          compId="1711:741"
          comWidth={1232}
          comHeight={104}
          compLeft={10}
          compRight={10}
          compType="Image"
          alt="BrandClientLo"
        />
        <Column
          className="items-start justify-start lg:mt-[108px] xl:mt-[124px] mt-[140px] 3xl:mt-[168px] w-[100%]"
          compId="63"
          comWidth={1440}
          comHeight={685}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Text
            className="font-bold leading-lh12000 mx-[104px] 3xl:mx-[124px] lg:mx-[80px] xl:mx-[92px] text-bluegray_900 lg:text-fs37 xl:text-fs42 text-fs48 3xl:text-fs57 text-left tracking-ls1 w-[52%]"
            compId="1711:762"
            comWidth={754}
            comHeight={116}
            compLeft={104}
            compRight={104}
            compType="Text"
          >{`’’You don’t take a photograph. You ask quietly to borrow it.’’`}</Text>
          <Column
            className="lg:mt-[62px] xl:mt-[71px] mt-[80px] 3xl:mt-[96px] w-[100%]"
            compId="86"
            comWidth={1440}
            comHeight={489}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Row
              className="items-start justify-start w-[100%]"
              compId="62"
              comWidth={1440}
              comHeight={489}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <div
                className="bg-gray_300 lg:h-[381px] xl:h-[436px] h-[489px] 2xl:h-[490px] 3xl:h-[588px] ml-[104px] 3xl:ml-[124px] lg:ml-[80px] xl:ml-[92px] w-[39%]"
                compId="1711:760"
                comWidth={557}
                comHeight={489}
                compLeft={104}
                compRight={0}
                compType="View"
              ></div>
              <Column
                className="items-start justify-start lg:mb-[50px] xl:mb-[57px] mb-[65px] 3xl:mb-[78px] lg:ml-[56px] xl:ml-[64px] ml-[72px] 3xl:ml-[86px] w-[42%]"
                compId="61"
                comWidth={603}
                comHeight={424}
                compLeft={72}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-normal leading-lh12500 not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_800 text-left tracking-ls1 w-[100%]"
                  compId="1711:761"
                  comWidth={603}
                  comHeight={328}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  <span className="text-gray_800 font-dmsans">
                    <>
                      {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim quam libero sed urna. Varius non ut vestibulum massa faucibus. Ac ipsum fermentum tortor id. Augue mauris eleifend montes, diam. Lorem lobortis vel aliquet donec massa amet diam ullamcorper cursus. Vestibulum turpis tincidunt nulla neque pretium. Sed mi ac posuere commodo, `}
                      <br />
                      {``}
                      <br />
                      {`Ut lorem porttitor in. Id et, semper ut pharetra. Vitae urna, interdum bibendum amet pretium rhoncus. Auctor tortor mauris amet vel proin mattis vel purus ultrices. Fames vulputate in augue pharetra, porttitor. Enim  pharetra malesuada nulla leo nibh non scelerisque lobortis fermentum. Mauris habitant blandit lectus facilisi. Ut sed sed a, donec. `}
                      <br />
                      {``}
                    </>
                  </span>
                  <span className="text-gray_800 font-dmsans">
                    <>
                      {``}
                      <br />
                      {`Vitae urna, interdum bibendum amet pretium rhoncus. Auctor tortor mauris amet vel proin mattis vel purus ultrices. Fames vulputate in augue pharetra, porttitor. Enim  pharetra malesuada nulla leo nibh non scelerisque lobortis fermentum. Mauris habitant blandit lectus facilisi. Ut sed sed a, donec. `}
                    </>
                  </span>
                </Text>
                <Button
                  className="bg-gray_600 font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] lg:py-[15px] xl:py-[17px] py-[20.1px] 2xl:py-[20px] 3xl:py-[24px] rounded-radius8 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-white_A700 tracking-ls1 w-[23%]"
                  compId="1"
                  comWidth={136}
                  comHeight={56}
                  compLeft={0}
                  compRight={10}
                  compType="Button"
                >{`Contact Us`}</Button>
              </Column>
            </Row>
          </Column>
        </Column>
        <Column
          className="items-start justify-start lg:mt-[124px] xl:mt-[142px] mt-[160px] 3xl:mt-[192px] w-[100%]"
          compId="37"
          comWidth={1440}
          comHeight={728}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Text
            className="font-bold mx-[104px] 3xl:mx-[124px] lg:mx-[80px] xl:mx-[92px] text-bluegray_900 lg:text-fs37 xl:text-fs42 text-fs48 3xl:text-fs57 text-left tracking-ls1 w-[45%]"
            compId="1711:830"
            comWidth={642}
            comHeight={58}
            compLeft={104}
            compRight={104}
            compType="Text"
          >{`My Photography Services`}</Text>
          <Column
            className="items-center lg:mt-[60px] xl:mt-[69px] mt-[78px] 3xl:mt-[93px] w-[100%]"
            compId="87"
            comWidth={1440}
            comHeight={592}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Grid
              className="lg:gap-[12px] xl:gap-[14px] gap-[16px] 3xl:gap-[19px] grid grid-cols-3 mx-[auto] w-[86%]"
              compId="82"
              comWidth={1232}
              comHeight={592}
              compLeft={10}
              compRight={10}
              compType="Grid"
            >
              <Column
                className="bg-gray_500 items-start justify-center w-[100%]"
                compId="64"
                comWidth={400}
                comHeight={288}
                compLeft={0}
                compRight={832}
                compType="Column"
              >
                <div
                  className="bg-gray_300 lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] rounded-radius8 lg:w-[43px] xl:w-[49px] w-[56px] 3xl:w-[67px]"
                  compId="1711:828"
                  comWidth={56}
                  comHeight={56}
                  compLeft={40}
                  compRight={40}
                  compType="View"
                ></div>
                <Text
                  className="font-bold lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left text-white_A700 tracking-ls1 w-[42%]"
                  compId="1711:827"
                  comWidth={169}
                  comHeight={29}
                  compLeft={40}
                  compRight={40}
                  compType="Text"
                >{`Brand Product`}</Text>
                <Text
                  className="font-normal leading-lh12500 lg:mb-[45px] xl:mb-[52px] mb-[59px] 3xl:mb-[70px] lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] lg:mr-[24px] xl:mr-[28px] mr-[32px] 3xl:mr-[38px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700 tracking-ls1 w-[82%]"
                  compId="1711:826"
                  comWidth={328}
                  comHeight={60}
                  compLeft={40}
                  compRight={32}
                  compType="Text"
                >{`Make the appearance of a mobile application that has quality and increases user convenience`}</Text>
              </Column>
              <Column
                className="bg-white_A700 items-start justify-center w-[100%]"
                compId="65"
                comWidth={400}
                comHeight={288}
                compLeft={416}
                compRight={416}
                compType="Column"
              >
                <div
                  className="bg-gray_300 lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] rounded-radius8 lg:w-[43px] xl:w-[49px] w-[56px] 3xl:w-[67px]"
                  compId="1711:823"
                  comWidth={56}
                  comHeight={56}
                  compLeft={40}
                  compRight={40}
                  compType="View"
                ></div>
                <Text
                  className="font-bold lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_900 text-left tracking-ls1 w-[29%]"
                  compId="1711:822"
                  comWidth={117}
                  comHeight={29}
                  compLeft={40}
                  compRight={40}
                  compType="Text"
                >{`Weddings`}</Text>
                <Text
                  className="font-normal leading-lh12500 lg:mb-[45px] xl:mb-[52px] mb-[59px] 3xl:mb-[70px] lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] lg:mr-[24px] xl:mr-[28px] mr-[32px] 3xl:mr-[38px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_800 text-left tracking-ls1 w-[82%]"
                  compId="1711:821"
                  comWidth={328}
                  comHeight={60}
                  compLeft={40}
                  compRight={32}
                  compType="Text"
                >{`Help create a website and redesign it so that it becomes a website that is more trendy and looks fresh`}</Text>
              </Column>
              <Column
                className="bg-white_A700 items-start justify-center w-[100%]"
                compId="66"
                comWidth={400}
                comHeight={288}
                compLeft={832}
                compRight={0}
                compType="Column"
              >
                <div
                  className="bg-gray_300 lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] rounded-radius8 lg:w-[43px] xl:w-[49px] w-[56px] 3xl:w-[67px]"
                  compId="1711:818"
                  comWidth={56}
                  comHeight={56}
                  compLeft={40}
                  compRight={40}
                  compType="View"
                ></div>
                <Text
                  className="font-bold lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_900 text-left tracking-ls1 w-[23%]"
                  compId="1711:817"
                  comWidth={90}
                  comHeight={29}
                  compLeft={40}
                  compRight={40}
                  compType="Text"
                >{`Fashion`}</Text>
                <Text
                  className="font-normal leading-lh12500 lg:mb-[45px] xl:mb-[52px] mb-[59px] 3xl:mb-[70px] lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] lg:mr-[24px] xl:mr-[28px] mr-[32px] 3xl:mr-[38px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_800 text-left tracking-ls1 w-[82%]"
                  compId="1711:816"
                  comWidth={328}
                  comHeight={60}
                  compLeft={40}
                  compRight={32}
                  compType="Text"
                >{`Create customizable illustrations with attractive designs that are made visually through high creativity`}</Text>
              </Column>
              <Column
                className="bg-white_A700 items-start justify-center w-[100%]"
                compId="67"
                comWidth={400}
                comHeight={288}
                compLeft={0}
                compRight={832}
                compType="Column"
              >
                <div
                  className="bg-gray_300 lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] rounded-radius8 lg:w-[43px] xl:w-[49px] w-[56px] 3xl:w-[67px]"
                  compId="1711:813"
                  comWidth={56}
                  comHeight={56}
                  compLeft={40}
                  compRight={40}
                  compType="View"
                ></div>
                <Text
                  className="font-bold lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_900 text-left tracking-ls1 w-[20%]"
                  compId="1711:812"
                  comWidth={80}
                  comHeight={29}
                  compLeft={40}
                  compRight={40}
                  compType="Text"
                >{`Nature`}</Text>
                <Text
                  className="font-normal leading-lh12500 lg:mb-[45px] xl:mb-[52px] mb-[59px] 3xl:mb-[70px] lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] lg:mr-[24px] xl:mr-[28px] mr-[32px] 3xl:mr-[38px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_800 text-left tracking-ls1 w-[82%]"
                  compId="1711:811"
                  comWidth={328}
                  comHeight={60}
                  compLeft={40}
                  compRight={32}
                  compType="Text"
                >{`Change the appearance of a design into code that will be made into an amazing website`}</Text>
              </Column>
              <Column
                className="bg-white_A700 items-start justify-center w-[100%]"
                compId="68"
                comWidth={400}
                comHeight={288}
                compLeft={416}
                compRight={416}
                compType="Column"
              >
                <div
                  className="bg-gray_300 lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] rounded-radius8 lg:w-[43px] xl:w-[49px] w-[56px] 3xl:w-[67px]"
                  compId="1711:808"
                  comWidth={56}
                  comHeight={56}
                  compLeft={40}
                  compRight={40}
                  compType="View"
                ></div>
                <Text
                  className="font-bold lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_900 text-left tracking-ls1 w-[37%]"
                  compId="1711:807"
                  comWidth={147}
                  comHeight={29}
                  compLeft={40}
                  compRight={40}
                  compType="Text"
                >{`Engagement`}</Text>
                <Text
                  className="font-normal leading-lh12500 lg:mb-[45px] xl:mb-[52px] mb-[59px] 3xl:mb-[70px] lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] lg:mr-[24px] xl:mr-[28px] mr-[32px] 3xl:mr-[38px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_800 text-left tracking-ls1 w-[82%]"
                  compId="1711:806"
                  comWidth={328}
                  comHeight={60}
                  compLeft={40}
                  compRight={32}
                  compType="Text"
                >{`Create 2d / 3d video animation in a short period of time designed to promote a company product`}</Text>
              </Column>
              <Column
                className="bg-white_A700 items-start justify-center w-[100%]"
                compId="69"
                comWidth={400}
                comHeight={288}
                compLeft={832}
                compRight={0}
                compType="Column"
              >
                <div
                  className="bg-gray_300 lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] rounded-radius8 lg:w-[43px] xl:w-[49px] w-[56px] 3xl:w-[67px]"
                  compId="1711:803"
                  comWidth={56}
                  comHeight={56}
                  compLeft={40}
                  compRight={40}
                  compType="View"
                ></div>
                <Text
                  className="font-bold lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_900 text-left tracking-ls1 w-[34%]"
                  compId="1711:802"
                  comWidth={135}
                  comHeight={29}
                  compLeft={40}
                  compRight={40}
                  compType="Text"
                >{`Self Project`}</Text>
                <Text
                  className="font-normal leading-lh12500 lg:mb-[61px] xl:mb-[70px] mb-[79px] 3xl:mb-[94px] lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] lg:mr-[24px] xl:mr-[28px] mr-[32px] 3xl:mr-[38px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_800 text-left tracking-ls1 w-[82%]"
                  compId="1711:801"
                  comWidth={328}
                  comHeight={40}
                  compLeft={40}
                  compRight={32}
                  compType="Text"
                >{`Help your business grow with our SEO Experts`}</Text>
              </Column>
            </Grid>
          </Column>
        </Column>
        <Stack
          className="lg:h-[436px] xl:h-[499px] h-[560px] 2xl:h-[561px] 3xl:h-[673px] lg:mt-[124px] xl:mt-[142px] mt-[160px] 3xl:mt-[192px] mx-[auto] w-[86%]"
          compId="81"
          comWidth={1232}
          comHeight={560}
          compLeft={10}
          compRight={10}
          compType="Stack"
        >
          <Row
            className="absolute bg-white_A700 inset-x-[3%] inset-y-[0] items-center justify-start w-[95%]"
            compId="73"
            comWidth={1168}
            comHeight={560}
            compLeft={32}
            compRight={32}
            compType="Row"
          >
            <div
              className="bg-gray_300 lg:h-[349px] xl:h-[399px] h-[448px] 2xl:h-[449px] 3xl:h-[538px] lg:ml-[56px] xl:ml-[64px] ml-[72px] 3xl:ml-[86px] lg:my-[43px] xl:my-[49px] my-[56px] 3xl:my-[67px] rounded-radius8 w-[27%]"
              compId="1711:667"
              comWidth={320}
              comHeight={448}
              compLeft={72}
              compRight={0}
              compType="View"
            ></div>
            <Column
              className="items-start lg:mb-[42px] xl:mb-[48px] mb-[54px] 3xl:mb-[64px] lg:ml-[61px] xl:ml-[70px] ml-[79px] 3xl:ml-[94px] lg:mt-[54px] xl:mt-[62px] mt-[70px] 3xl:mt-[84px] w-[53%]"
              compId="72"
              comWidth={618}
              comHeight={436}
              compLeft={79}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:text-fs37 xl:text-fs42 text-fs48 3xl:text-fs57 text-gray_600 text-left tracking-ls1 w-[75%]"
                compId="1711:668"
                comWidth={466}
                comHeight={58}
                compLeft={0}
                compRight={10}
                compType="Text"
              >{`Joshua & Samantha`}</Text>
              <Text
                className="font-normal leading-lh12500 lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] not-italic text-bluegray_300 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1 w-[100%]"
                compId="1711:669"
                comWidth={618}
                comHeight={260}
                compLeft={0}
                compRight={0}
                compType="Text"
              >
                {
                  <>
                    {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim quam libero sed urna. Varius non ut vestibulum massa faucibus. Ac ipsum fermentum tortor id. Augue mauris eleifend montes, diam. Lorem lobortis vel aliquet donec massa amet diam ullamcorper cursus. Vestibulum turpis tincidunt nulla neque pretium. Sed mi ac posuere commodo, `}
                    <br />
                    {``}
                    <br />
                    {``}
                    <br />
                    {`ut lorem porttitor in. Id et, semper ut pharetra. Vitae urna, interdum bibendum amet pretium rhoncus. Auctor tortor mauris amet vel proin mattis vel purus ultrices.`}
                    <br />
                    {`Fames vulputate in augue pharetra, porttitor. Enim pharetra malesuada nulla leo nibh non scelerisque lobortis fermentum. Mauris habitant blandit lectus facilisi. Ut sed sed a, donec.`}
                  </>
                }
              </Text>
              <Text
                className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_900 text-left tracking-ls1 w-[22%]"
                compId="1711:671"
                comWidth={138}
                comHeight={29}
                compLeft={0}
                compRight={10}
                compType="Text"
              >{`Alyssa Julie`}</Text>
              <Text
                className="font-medium mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_800 text-left tracking-ls1 w-[33%]"
                compId="1711:670"
                comWidth={206}
                comHeight={19}
                compLeft={0}
                compRight={10}
                compType="Text"
              >{`Your Beloved Photographer`}</Text>
            </Column>
          </Row>
          <Image
            src={"images/img_arrowleft.svg"}
            className="absolute bottom-[43%] lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] left-[0] object-contain lg:w-[43px] xl:w-[49px] w-[56px] 3xl:w-[67px]"
            compId="1711:672"
            comWidth={56}
            comHeight={56}
            compLeft={0}
            compRight={0}
            compType="Image"
            alt="ArrowLeft"
          />
          <Image
            src={"images/img_arrowright.svg"}
            className="absolute bottom-[43%] lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] object-contain right-[0] lg:w-[43px] xl:w-[49px] w-[56px] 3xl:w-[67px]"
            compId="1711:675"
            comWidth={56}
            comHeight={56}
            compLeft={0}
            compRight={0}
            compType="Image"
            alt="ArrowRight"
          />
        </Stack>
        <Column
          className="items-start justify-start lg:mt-[124px] xl:mt-[142px] mt-[160px] 3xl:mt-[192px] w-[100%]"
          compId="56"
          comWidth={1440}
          comHeight={600}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Text
            className="font-bold leading-lh12000 mx-[104px] 3xl:mx-[124px] lg:mx-[80px] xl:mx-[92px] lg:text-fs37 xl:text-fs42 text-fs48 3xl:text-fs57 text-gray_900 text-left tracking-ls1 w-[38%]"
            compId="1711:897"
            comWidth={544}
            comHeight={116}
            compLeft={104}
            compRight={104}
            compType="Text"
          >{`My Personal Photography Skills`}</Text>
          <Text
            className="font-normal leading-lh12500 lg:mt-[34px] xl:mt-[39px] mt-[44px] 3xl:mt-[52px] mx-[104px] 3xl:mx-[124px] lg:mx-[80px] xl:mx-[92px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_800 text-left tracking-ls1 w-[35%]"
            compId="1711:896"
            comWidth={504}
            comHeight={40}
            compLeft={104}
            compRight={104}
            compType="Text"
          >{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the`}</Text>
          <Column
            className="items-center lg:mt-[62px] xl:mt-[71px] mt-[80px] 3xl:mt-[96px] w-[100%]"
            compId="88"
            comWidth={1440}
            comHeight={320}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <Grid
              className="lg:gap-[174px] xl:gap-[199px] gap-[224px] 3xl:gap-[268px] grid grid-cols-2 mx-[auto] w-[86%]"
              compId="83"
              comWidth={1232}
              comHeight={320}
              compLeft={10}
              compRight={10}
              compType="Grid"
            >
              <Column
                className="w-[100%]"
                compId="42"
                comWidth={504}
                comHeight={64}
                compLeft={0}
                compRight={728}
                compType="Column"
              >
                <Row
                  className="items-center justify-between w-[100%]"
                  compId="41"
                  comWidth={504}
                  comHeight={29}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-bold text-bluegray_300 lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left tracking-ls1 w-[59%]"
                    compId="1711:895"
                    comWidth={296}
                    comHeight={29}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Photography`}</Text>
                  <Text
                    className="font-bold lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_900 text-right tracking-ls1 w-[25%]"
                    compId="1711:894"
                    comWidth={127}
                    comHeight={29}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`90%`}</Text>
                </Row>
                <div
                  className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] overflow-hidden relative w-[100%]"
                  compId="10"
                  comWidth={504}
                  comHeight={16}
                  compLeft={0}
                  compRight={0}
                  compType="ProgressBar"
                  name="Group10"
                >
                  <div className="w-full h-full absolute bg-gray_301 rounded-[8px]"></div>
                  <div
                    className="h-full absolute bg-gray_600  rounded-[8px]"
                    style={{ width: "87%" }}
                  ></div>
                </div>
              </Column>
              <Column
                className="w-[100%]"
                compId="40"
                comWidth={504}
                comHeight={64}
                compLeft={728}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="items-center justify-between w-[100%]"
                  compId="39"
                  comWidth={504}
                  comHeight={29}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-bold text-bluegray_300 lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left tracking-ls1 w-[59%]"
                    compId="1711:916"
                    comWidth={296}
                    comHeight={29}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Perfect Angle`}</Text>
                  <Text
                    className="font-bold lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_900 text-right tracking-ls1 w-[25%]"
                    compId="1711:915"
                    comWidth={127}
                    comHeight={29}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`90%`}</Text>
                </Row>
                <div
                  className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] overflow-hidden relative w-[100%]"
                  compId="6"
                  comWidth={504}
                  comHeight={16}
                  compLeft={0}
                  compRight={0}
                  compType="ProgressBar"
                  name="Group6"
                >
                  <div className="w-full h-full absolute bg-gray_301 rounded-[8px]"></div>
                  <div
                    className="h-full absolute bg-gray_600  rounded-[8px]"
                    style={{ width: "87%" }}
                  ></div>
                </div>
              </Column>
              <Column
                className="w-[100%]"
                compId="46"
                comWidth={504}
                comHeight={64}
                compLeft={0}
                compRight={728}
                compType="Column"
              >
                <Row
                  className="items-center justify-between w-[100%]"
                  compId="45"
                  comWidth={504}
                  comHeight={29}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-bold text-bluegray_300 lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left tracking-ls1 w-[59%]"
                    compId="1711:904"
                    comWidth={296}
                    comHeight={29}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Videography`}</Text>
                  <Text
                    className="font-bold lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_900 text-right tracking-ls1 w-[25%]"
                    compId="1711:903"
                    comWidth={127}
                    comHeight={29}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`90%`}</Text>
                </Row>
                <div
                  className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] overflow-hidden relative w-[100%]"
                  compId="9"
                  comWidth={504}
                  comHeight={16}
                  compLeft={0}
                  compRight={0}
                  compType="ProgressBar"
                  name="Group9"
                >
                  <div className="w-full h-full absolute bg-gray_301 rounded-[8px]"></div>
                  <div
                    className="h-full absolute bg-gray_600  rounded-[8px]"
                    style={{ width: "87%" }}
                  ></div>
                </div>
              </Column>
              <Column
                className="w-[100%]"
                compId="44"
                comWidth={504}
                comHeight={64}
                compLeft={728}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="items-center justify-between w-[100%]"
                  compId="43"
                  comWidth={504}
                  comHeight={29}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-bold text-bluegray_300 lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left tracking-ls1 w-[59%]"
                    compId="1711:922"
                    comWidth={296}
                    comHeight={29}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Animation`}</Text>
                  <Text
                    className="font-bold lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_900 text-right tracking-ls1 w-[25%]"
                    compId="1711:921"
                    comWidth={127}
                    comHeight={29}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`90%`}</Text>
                </Row>
                <div
                  className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] overflow-hidden relative w-[100%]"
                  compId="8"
                  comWidth={504}
                  comHeight={16}
                  compLeft={0}
                  compRight={0}
                  compType="ProgressBar"
                  name="Group8"
                >
                  <div className="w-full h-full absolute bg-gray_301 rounded-[8px]"></div>
                  <div
                    className="h-full absolute bg-gray_600  rounded-[8px]"
                    style={{ width: "87%" }}
                  ></div>
                </div>
              </Column>
              <Column
                className="w-[100%]"
                compId="50"
                comWidth={504}
                comHeight={64}
                compLeft={0}
                compRight={728}
                compType="Column"
              >
                <Row
                  className="items-center justify-between w-[100%]"
                  compId="49"
                  comWidth={504}
                  comHeight={29}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-bold text-bluegray_300 lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left tracking-ls1 w-[59%]"
                    compId="1711:910"
                    comWidth={296}
                    comHeight={29}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Lightning`}</Text>
                  <Text
                    className="font-bold lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_900 text-right tracking-ls1 w-[25%]"
                    compId="1711:909"
                    comWidth={127}
                    comHeight={29}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`90%`}</Text>
                </Row>
                <div
                  className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] overflow-hidden relative w-[100%]"
                  compId="7"
                  comWidth={504}
                  comHeight={16}
                  compLeft={0}
                  compRight={0}
                  compType="ProgressBar"
                  name="Group7"
                >
                  <div className="w-full h-full absolute bg-gray_301 rounded-[8px]"></div>
                  <div
                    className="h-full absolute bg-gray_600  rounded-[8px]"
                    style={{ width: "87%" }}
                  ></div>
                </div>
              </Column>
              <Column
                className="w-[100%]"
                compId="48"
                comWidth={504}
                comHeight={64}
                compLeft={728}
                compRight={0}
                compType="Column"
              >
                <Row
                  className="items-center justify-between w-[100%]"
                  compId="47"
                  comWidth={504}
                  comHeight={29}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-bold text-bluegray_300 lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left tracking-ls1 w-[59%]"
                    compId="1711:928"
                    comWidth={296}
                    comHeight={29}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Audio Visual`}</Text>
                  <Text
                    className="font-bold lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_900 text-right tracking-ls1 w-[25%]"
                    compId="1711:927"
                    comWidth={127}
                    comHeight={29}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`90%`}</Text>
                </Row>
                <div
                  className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] overflow-hidden relative w-[100%]"
                  compId="5"
                  comWidth={504}
                  comHeight={16}
                  compLeft={0}
                  compRight={0}
                  compType="ProgressBar"
                  name="Group5"
                >
                  <div className="w-full h-full absolute bg-gray_301 rounded-[8px]"></div>
                  <div
                    className="h-full absolute bg-gray_600  rounded-[8px]"
                    style={{ width: "87%" }}
                  ></div>
                </div>
              </Column>
            </Grid>
          </Column>
        </Column>
        <Column
          className="bg-gray_500 items-center justify-center lg:mt-[124px] xl:mt-[142px] mt-[160px] 3xl:mt-[192px] mx-[auto] w-[85%]"
          compId="75"
          comWidth={1230}
          comHeight={408}
          compLeft={10}
          compRight={10}
          compType="Column"
        >
          <Text
            className="font-bold 3xl:mt-[112px] lg:mt-[73px] xl:mt-[83px] mt-[94px] mx-[auto] text-center lg:text-fs37 xl:text-fs42 text-fs48 3xl:text-fs57 text-white_A700 tracking-ls1 w-[65%]"
            compId="1711:620"
            comWidth={797}
            comHeight={58}
            compLeft={10}
            compRight={10}
            compType="Text"
          >{`News Letters`}</Text>
          <Text
            className="font-normal leading-lh12500 lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] mx-[auto] not-italic text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-white_A700 tracking-ls1 w-[49%]"
            compId="1711:619"
            comWidth={608}
            comHeight={40}
            compLeft={10}
            compRight={10}
            compType="Text"
          >
            {
              <>
                {`If you like the idea of getting away from it all, without even moving from`}
                <br />
                {`your seat. sign up to our newsletter.`}
              </>
            }
          </Text>
          <Row
            className="bg-white_A700 items-center justify-between lg:mb-[62px] xl:mb-[71px] mb-[80px] 3xl:mb-[96px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] mx-[auto] rounded-radius8 w-[66%]"
            compId="57"
            comWidth={816}
            comHeight={64}
            compLeft={10}
            compRight={10}
            compType="Row"
          >
            <Text
              className="font-normal lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] lg:my-[17px] xl:my-[19px] my-[22px] 3xl:my-[26px] not-italic text-bluegray_300 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1 w-[19%]"
              compId="1711:613"
              comWidth={153}
              comHeight={20}
              compLeft={32}
              compRight={0}
              compType="Text"
            >{`Insert your mail here`}</Text>
            <Image
              src={"images/img_button.svg"}
              className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] 3xl:mr-[10px] lg:mr-[7px] xl:mr-[8px] mr-[9px] lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] object-contain rounded-radius8 lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
              compId="1711:614"
              comWidth={48}
              comHeight={48}
              compLeft={0}
              compRight={9}
              compType="Image"
              alt="Button"
            />
          </Row>
        </Column>
        <footer
          className="lg:mt-[124px] xl:mt-[142px] mt-[160px] 3xl:mt-[192px] w-[100%]"
          compId="1711:583"
          comWidth={1440}
          comHeight={476}
          compLeft={0}
          compRight={0}
          compType="Footer"
        >
          <Row
            className="bg-white_A700 items-center justify-start w-[100%]"
            compId="59"
            comWidth={1440}
            comHeight={476}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <div
              className="bg-gray_300 lg:h-[280px] xl:h-[321px] h-[360px] 2xl:h-[361px] 3xl:h-[433px] ml-[104px] 3xl:ml-[124px] lg:ml-[80px] xl:ml-[92px] lg:my-[45px] xl:my-[51px] my-[58px] 3xl:my-[69px] lg:w-[280px] xl:w-[320px] w-[360px] 3xl:w-[432px]"
              compId="1711:585"
              comWidth={360}
              comHeight={360}
              compLeft={104}
              compRight={0}
              compType="View"
            ></div>
            <Column
              className="items-center lg:mb-[58px] xl:mb-[66px] mb-[75px] 3xl:mb-[90px] lg:ml-[43px] xl:ml-[49px] ml-[56px] 3xl:ml-[67px] 3xl:mt-[102px] lg:mt-[66px] xl:mt-[75px] mt-[85px] w-[57%]"
              compId="58"
              comWidth={816}
              comHeight={316}
              compLeft={56}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-center justify-between w-[100%]"
                compId="1711:591"
                comWidth={816}
                comHeight={48}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Image
                  src={"images/img_logo_1.svg"}
                  className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] object-contain w-[29%]"
                  compId="1711:587"
                  comWidth={240}
                  comHeight={48}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Logo"
                />
                <Row
                  className="items-center justify-between lg:mb-[13px] xl:mb-[15px] mb-[17px] 3xl:mb-[20px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[45%]"
                  compId="84"
                  comWidth={370}
                  comHeight={19}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-bold lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[12%]"
                    compId="1711:592"
                    comWidth={46}
                    comHeight={19}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Home`}</Text>
                  <Text
                    className="font-bold lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[13%]"
                    compId="1711:593"
                    comWidth={49}
                    comHeight={19}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`About`}</Text>
                  <Text
                    className="font-bold lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[16%]"
                    compId="1711:594"
                    comWidth={59}
                    comHeight={19}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Service`}</Text>
                  <Text
                    className="font-bold lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[24%]"
                    compId="1711:595"
                    comWidth={87}
                    comHeight={19}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Contact us`}</Text>
                </Row>
              </Row>
              <Row
                className="items-center justify-between xl:ml-[2px] lg:ml-[2px] ml-[3px] xl:mr-[1px] lg:mr-[1px] mr-[2px] lg:mt-[177px] xl:mt-[202px] mt-[228px] 3xl:mt-[273px] w-[99%]"
                compId="1711:596"
                comWidth={811}
                comHeight={40}
                compLeft={3}
                compRight={2}
                compType="Row"
              >
                <Text
                  className="font-bold mb-[11px] 3xl:mb-[13px] lg:mb-[8px] xl:mb-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[48%]"
                  compId="1711:586"
                  comWidth={392}
                  comHeight={19}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`@2020 TanahAir Studio. All rights reserved.`}</Text>
                <Row
                  className="lg:gap-[12px] xl:gap-[14px] gap-[16px] 3xl:gap-[19px] grid grid-cols-4 items-center justify-between w-[26%]"
                  compId="85"
                  comWidth={208}
                  comHeight={40}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Column
                    className="bg-gray_600 lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                    compId="1711:597"
                    comWidth={40}
                    comHeight={40}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-bold mb-[11px] 3xl:mb-[13px] lg:mb-[8px] xl:mb-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] mx-[auto] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700 tracking-ls1 w-[43%]"
                      compId="1711:599"
                      comWidth={17}
                      comHeight={19}
                      compLeft={10}
                      compRight={10}
                      compType="Text"
                    >{`Yt`}</Text>
                  </Column>
                  <Column
                    className="bg-gray_600 lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                    compId="1711:600"
                    comWidth={40}
                    comHeight={40}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-bold mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700 tracking-ls1 w-[50%]"
                      compId="1711:602"
                      comWidth={20}
                      comHeight={19}
                      compLeft={10}
                      compRight={10}
                      compType="Text"
                    >{`Fb`}</Text>
                  </Column>
                  <Column
                    className="bg-gray_600 lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                    compId="1711:603"
                    comWidth={40}
                    comHeight={40}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-bold mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700 tracking-ls1 w-[55%]"
                      compId="1711:605"
                      comWidth={22}
                      comHeight={19}
                      compLeft={9}
                      compRight={9}
                      compType="Text"
                    >{`Tw`}</Text>
                  </Column>
                  <Column
                    className="bg-gray_600 lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                    compId="1711:606"
                    comWidth={40}
                    comHeight={40}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-bold mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700 tracking-ls1 w-[35%]"
                      compId="1711:608"
                      comWidth={14}
                      comHeight={19}
                      compLeft={10}
                      compRight={10}
                      compType="Text"
                    >{`Ig`}</Text>
                  </Column>
                </Row>
              </Row>
            </Column>
          </Row>
        </footer>
      </Column>
    </>
  );
};

export default AboutUsPage;
