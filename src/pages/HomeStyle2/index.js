import React from "react";

import { getPosts } from "service/api";
import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Button } from "components/Button";
import { Grid } from "components/Grid";
import { List } from "components/List";

const HomeStyle2Page = () => {
  React.useEffect(() => {
    callApi();
  }, []);

  function callApi() {
    const req = { data: { 1: "3" } };
    getPosts(req)
      .then((res) => {})
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <>
      <Column
        className="bg-gray_200 font-dmsans items-center justify-start mx-[auto] w-[100%]"
        compId="1708:435"
        comWidth={1440}
        comHeight={5987}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <Stack
          className="h-[1091px] 2xl:h-[1092px] 3xl:h-[1310px] lg:h-[849px] xl:h-[971px] w-[100%]"
          compId="161"
          comWidth={1440}
          comHeight={1091}
          compLeft={0}
          compRight={0}
          compType="Stack"
        >
          <Stack
            className="absolute h-[1091px] 2xl:h-[1092px] 3xl:h-[1310px] lg:h-[849px] xl:h-[971px] inset-[0] w-[100%]"
            compId="163"
            comWidth={1440}
            comHeight={1091}
            compLeft={0}
            compRight={0}
            compType="Stack"
          >
            <div
              className="absolute bg-white_A700 lg:h-[592px] xl:h-[677px] h-[760px] 2xl:h-[761px] 3xl:h-[913px] top-[0] w-[100%]"
              compId="1708:559"
              comWidth={1440}
              comHeight={760}
              compLeft={0}
              compRight={0}
              compType="View"
            ></div>
            <div
              className="absolute bg-gray_300 bottom-[0] lg:h-[343px] xl:h-[392px] h-[440px] 2xl:h-[441px] 3xl:h-[529px] left-[7%] w-[42%]"
              compId="1708:560"
              comWidth={608}
              comHeight={440}
              compLeft={104}
              compRight={0}
              compType="View"
            ></div>
            <div
              className="absolute bg-gray_300 bottom-[0] lg:h-[343px] xl:h-[392px] h-[440px] 2xl:h-[441px] 3xl:h-[529px] right-[7%] w-[42%]"
              compId="1708:594"
              comWidth={608}
              comHeight={440}
              compLeft={0}
              compRight={104}
              compType="View"
            ></div>
          </Stack>
          <Column
            className="absolute inset-x-[0] mx-[auto] top-[5%] w-[86%]"
            compId="135"
            comWidth={1232}
            comHeight={551}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <header
              className="w-[100%]"
              compId="21"
              comWidth={1232}
              comHeight={56}
              compLeft={0}
              compRight={0}
              compType="Header"
            >
              <Row
                className="items-center justify-start w-[100%]"
                compId="1708:577"
                comWidth={1232}
                comHeight={56}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Row
                  className="items-center justify-between xl:mb-[12px] mb-[14px] 3xl:mb-[16px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] lg:my-[10px] w-[18%]"
                  compId="1708:583"
                  comWidth={216}
                  comHeight={29}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-bold lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_500 text-left tracking-ls1 w-[39%]"
                    compId="1708:584"
                    comWidth={84}
                    comHeight={29}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Gallery`}</Text>
                  <Text
                    className="font-bold lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_500 text-left tracking-ls1 w-[50%]"
                    compId="1708:585"
                    comWidth={108}
                    comHeight={29}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`About Us`}</Text>
                </Row>
                <Image
                  src={"images/img_logo_2.svg"}
                  className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] lg:mb-[3px] mb-[4.33px] 2xl:mb-[4px] 3xl:mb-[5px] lg:ml-[217px] xl:ml-[249px] ml-[280px] 3xl:ml-[336px] lg:mt-[2px] mt-[3.67px] 2xl:mt-[3px] 3xl:mt-[4px] xl:my-[3px] object-contain w-[19%]"
                  compId="1708:578"
                  comWidth={240}
                  comHeight={48}
                  compLeft={280}
                  compRight={0}
                  compType="Image"
                  alt="Logo"
                />
                <Button
                  className="bg-gray_600 font-bold lg:ml-[269px] xl:ml-[308px] ml-[347px] 3xl:ml-[416px] lg:py-[15px] xl:py-[17px] py-[20.1px] 2xl:py-[20px] 3xl:py-[24px] rounded-radius8 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-white_A700 tracking-ls1 w-[12%]"
                  compId="20"
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
              compId="134"
              comWidth={1232}
              comHeight={386}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Column
                className="items-start justify-start lg:mb-[37px] xl:mb-[42px] mb-[48px] 3xl:mb-[57px] w-[74%]"
                compId="133"
                comWidth={908}
                comHeight={338}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold leading-lh12000 lg:text-fs49 xl:text-fs56 text-fs64 3xl:text-fs76 text-gray_900 text-left tracking-ls1 w-[100%]"
                  compId="1708:576"
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
                  compId="1708:575"
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
                  compId="19"
                  comWidth={156}
                  comHeight={56}
                  compLeft={0}
                  compRight={10}
                  compType="Button"
                >{`Find out More`}</Button>
              </Column>
              <Column
                className="xl:mt-[101px] mt-[114px] 3xl:mt-[136px] lg:mt-[88px] w-[5%]"
                compId="1708:562"
                comWidth={56}
                comHeight={272}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Column
                  className="border-2 border-gray_500 border-solid lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] items-center justify-start rounded-radius50 w-[100%]"
                  compId="1708:563"
                  comWidth={56}
                  comHeight={56}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold xl:mb-[12px] mb-[14px] 3xl:mb-[16px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] mx-[auto] lg:my-[10px] text-center lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_600 tracking-ls1 w-[45%]"
                    compId="1708:565"
                    comWidth={25}
                    comHeight={29}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`fb`}</Text>
                </Column>
                <Column
                  className="border-2 border-gray_500 border-solid lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] items-center justify-start lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] rounded-radius50 w-[100%]"
                  compId="1708:566"
                  comWidth={56}
                  comHeight={56}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold xl:mb-[12px] mb-[14px] 3xl:mb-[16px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] mx-[auto] lg:my-[10px] text-center lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_600 tracking-ls1 w-[54%]"
                    compId="1708:568"
                    comWidth={30}
                    comHeight={29}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`tw`}</Text>
                </Column>
                <Column
                  className="border-2 border-gray_500 border-solid lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] items-center justify-start lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] rounded-radius50 w-[100%]"
                  compId="1708:569"
                  comWidth={56}
                  comHeight={56}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold xl:mb-[12px] mb-[14px] 3xl:mb-[16px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] mx-[auto] lg:my-[10px] text-center lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_600 tracking-ls1 w-[38%]"
                    compId="1708:571"
                    comWidth={21}
                    comHeight={29}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`ig`}</Text>
                </Column>
                <Column
                  className="border-2 border-gray_500 border-solid lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] items-center justify-start lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] rounded-radius50 w-[100%]"
                  compId="1708:572"
                  comWidth={56}
                  comHeight={56}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold xl:mb-[12px] mb-[14px] 3xl:mb-[16px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] mx-[auto] lg:my-[10px] text-center lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_600 tracking-ls1 w-[55%]"
                    compId="1708:574"
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
        <Column
          className="items-center justify-start xl:mt-[106px] mt-[120px] 3xl:mt-[144px] lg:mt-[93px] mx-[auto] w-[86%]"
          compId="1708:603"
          comWidth={1232}
          comHeight={1186}
          compLeft={10}
          compRight={10}
          compType="Column"
        >
          <Text
            className="font-bold mx-[auto] text-bluegray_900 text-center lg:text-fs37 xl:text-fs42 text-fs48 3xl:text-fs57 tracking-ls1 w-[62%]"
            compId="1708:622"
            comWidth={760}
            comHeight={58}
            compLeft={10}
            compRight={10}
            compType="Text"
          >{`When I Photograph I Make Love`}</Text>
          <Text
            className="font-normal leading-lh12500 lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] mx-[auto] not-italic text-bluegray_300 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 tracking-ls1 w-[49%]"
            compId="1708:604"
            comWidth={609}
            comHeight={40}
            compLeft={10}
            compRight={10}
            compType="Text"
          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.`}</Text>
          <Grid
            className="lg:gap-[12px] xl:gap-[14px] gap-[16px] 3xl:gap-[19px] grid grid-cols-2 lg:mt-[56px] xl:mt-[64px] mt-[72px] 3xl:mt-[86px] w-[100%]"
            compId="164"
            comWidth={1232}
            comHeight={976}
            compLeft={0}
            compRight={0}
            compType="Grid"
          >
            <Column
              className="bg-gray_300 items-start justify-center w-[100%]"
              compId="149"
              comWidth={608}
              comHeight={480}
              compLeft={0}
              compRight={624}
              compType="Column"
            >
              <Text
                className="font-bold lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_800 text-left tracking-ls1 w-[66%]"
                compId="1708:621"
                comWidth={400}
                comHeight={19}
                compLeft={40}
                compRight={40}
                compType="Text"
              >{`Intimate Moment`}</Text>
              <Text
                className="font-bold lg:mb-[282px] xl:mb-[322px] mb-[363px] 3xl:mb-[435px] lg:mt-[16px] xl:mt-[18px] mt-[21px] 3xl:mt-[25px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] lg:text-fs24 xl:text-fs27 text-fs31 3xl:text-fs37 text-gray_900 text-left tracking-ls1 w-[85%]"
                compId="1708:620"
                comWidth={518}
                comHeight={37}
                compLeft={40}
                compRight={40}
                compType="Text"
              >{`Wedding`}</Text>
            </Column>
            <Column
              className="bg-gray_300 items-start justify-center w-[100%]"
              compId="150"
              comWidth={608}
              comHeight={480}
              compLeft={624}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-bold lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_800 text-left tracking-ls1 w-[66%]"
                compId="1708:617"
                comWidth={400}
                comHeight={19}
                compLeft={40}
                compRight={40}
                compType="Text"
              >{`Intimate Moment`}</Text>
              <Text
                className="font-bold lg:mb-[282px] xl:mb-[322px] mb-[363px] 3xl:mb-[435px] lg:mt-[16px] xl:mt-[18px] mt-[21px] 3xl:mt-[25px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] lg:text-fs24 xl:text-fs27 text-fs31 3xl:text-fs37 text-gray_900 text-left tracking-ls1 w-[85%]"
                compId="1708:616"
                comWidth={518}
                comHeight={37}
                compLeft={40}
                compRight={40}
                compType="Text"
              >{`Engangement`}</Text>
            </Column>
            <Column
              className="bg-gray_300 items-start justify-center w-[100%]"
              compId="151"
              comWidth={608}
              comHeight={480}
              compLeft={0}
              compRight={624}
              compType="Column"
            >
              <Text
                className="font-bold lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_800 text-left tracking-ls1 w-[66%]"
                compId="1708:613"
                comWidth={400}
                comHeight={19}
                compLeft={40}
                compRight={40}
                compType="Text"
              >{`Fun Moment`}</Text>
              <Text
                className="font-bold lg:mb-[282px] xl:mb-[322px] mb-[363px] 3xl:mb-[435px] lg:mt-[16px] xl:mt-[18px] mt-[21px] 3xl:mt-[25px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] lg:text-fs24 xl:text-fs27 text-fs31 3xl:text-fs37 text-gray_900 text-left tracking-ls1 w-[85%]"
                compId="1708:612"
                comWidth={518}
                comHeight={37}
                compLeft={40}
                compRight={40}
                compType="Text"
              >{`Fashion`}</Text>
            </Column>
            <Column
              className="bg-gray_300 items-start justify-center w-[100%]"
              compId="152"
              comWidth={608}
              comHeight={480}
              compLeft={624}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-bold lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_800 text-left tracking-ls1 w-[66%]"
                compId="1708:609"
                comWidth={400}
                comHeight={19}
                compLeft={40}
                compRight={40}
                compType="Text"
              >{`Fun Moment`}</Text>
              <Text
                className="font-bold lg:mb-[282px] xl:mb-[322px] mb-[363px] 3xl:mb-[435px] lg:mt-[16px] xl:mt-[18px] mt-[21px] 3xl:mt-[25px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] lg:text-fs24 xl:text-fs27 text-fs31 3xl:text-fs37 text-gray_900 text-left tracking-ls1 w-[85%]"
                compId="1708:608"
                comWidth={518}
                comHeight={37}
                compLeft={40}
                compRight={40}
                compType="Text"
              >{`Brand - Products`}</Text>
            </Column>
          </Grid>
        </Column>
        <Column
          className="items-center justify-start lg:mt-[124px] xl:mt-[142px] mt-[160px] 3xl:mt-[192px] w-[100%]"
          compId="144"
          comWidth={1440}
          comHeight={2226}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Text
            className="font-bold mx-[auto] lg:text-fs37 xl:text-fs42 text-fs48 3xl:text-fs57 text-gray_900 text-left tracking-ls1 w-[36%]"
            compId="1708:557"
            comWidth={515}
            comHeight={58}
            compLeft={10}
            compRight={10}
            compType="Text"
          >{`All Completed Project`}</Text>
          <List
            className="gap-[0] min-h-[auto] lg:mt-[62px] xl:mt-[71px] mt-[80px] 3xl:mt-[96px] mx-[auto] w-[86%]"
            compId="165"
            comWidth={1232}
            comHeight={1952}
            compLeft={10}
            compRight={10}
            compType="List"
            orientation="vertical"
          >
            <Row
              className="items-center justify-between lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] w-[100%]"
              compId="139"
              comWidth={1232}
              comHeight={640}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Column
                className="bg-white_A700 items-start w-[41%]"
                compId="153"
                comWidth={504}
                comHeight={640}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:mt-[341px] xl:mt-[390px] mt-[439px] 3xl:mt-[527px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] text-bluegray_300 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1 w-[24%]"
                  compId="1708:535"
                  comWidth={119}
                  comHeight={19}
                  compLeft={40}
                  compRight={40}
                  compType="Text"
                >{`Deep Moments`}</Text>
                <Text
                  className="font-bold leading-lh12000 lg:mb-[38px] xl:mb-[44px] mb-[50px] 3xl:mb-[60px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] lg:text-fs37 xl:text-fs42 text-fs48 3xl:text-fs57 text-gray_900 text-left tracking-ls1 w-[63%]"
                  compId="1708:536"
                  comWidth={319}
                  comHeight={116}
                  compLeft={40}
                  compRight={40}
                  compType="Text"
                >{`Classic Wedding`}</Text>
              </Column>
              <Column
                className="bg-white_A700 items-start w-[58%]"
                compId="154"
                comWidth={712}
                comHeight={640}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:mt-[341px] xl:mt-[390px] mt-[439px] 3xl:mt-[527px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] text-bluegray_300 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1 w-[17%]"
                  compId="1708:539"
                  comWidth={119}
                  comHeight={19}
                  compLeft={40}
                  compRight={40}
                  compType="Text"
                >{`Deep Moments`}</Text>
                <Text
                  className="font-bold leading-lh12000 lg:mb-[38px] xl:mb-[44px] mb-[50px] 3xl:mb-[60px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] lg:text-fs37 xl:text-fs42 text-fs48 3xl:text-fs57 text-gray_900 text-left tracking-ls1 w-[45%]"
                  compId="1708:540"
                  comWidth={319}
                  comHeight={116}
                  compLeft={40}
                  compRight={40}
                  compType="Text"
                >
                  {
                    <>
                      {`Photoshoot`}
                      <br />
                      {`Pre-Wedding`}
                    </>
                  }
                </Text>
              </Column>
            </Row>
            <Row
              className="items-center justify-between lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] w-[100%]"
              compId="140"
              comWidth={1232}
              comHeight={640}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Column
                className="bg-white_A700 items-start w-[58%]"
                compId="155"
                comWidth={712}
                comHeight={640}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:mt-[341px] xl:mt-[390px] mt-[439px] 3xl:mt-[527px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] text-bluegray_300 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1 w-[17%]"
                  compId="1708:551"
                  comWidth={119}
                  comHeight={19}
                  compLeft={40}
                  compRight={40}
                  compType="Text"
                >{`Deep Moments`}</Text>
                <Text
                  className="font-bold leading-lh12000 lg:mb-[38px] xl:mb-[44px] mb-[50px] 3xl:mb-[60px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] lg:text-fs37 xl:text-fs42 text-fs48 3xl:text-fs57 text-gray_900 text-left tracking-ls1 w-[51%]"
                  compId="1708:552"
                  comWidth={362}
                  comHeight={116}
                  compLeft={40}
                  compRight={40}
                  compType="Text"
                >{`Spring Nature Wedding`}</Text>
              </Column>
              <Column
                className="bg-white_A700 items-start w-[41%]"
                compId="156"
                comWidth={504}
                comHeight={640}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:mt-[341px] xl:mt-[390px] mt-[439px] 3xl:mt-[527px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] text-bluegray_300 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1 w-[24%]"
                  compId="1708:555"
                  comWidth={119}
                  comHeight={19}
                  compLeft={40}
                  compRight={40}
                  compType="Text"
                >{`Deep Moments`}</Text>
                <Text
                  className="font-bold leading-lh12000 lg:mb-[38px] xl:mb-[44px] mb-[50px] 3xl:mb-[60px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] lg:text-fs37 xl:text-fs42 text-fs48 3xl:text-fs57 text-gray_900 text-left tracking-ls1 w-[63%]"
                  compId="1708:556"
                  comWidth={319}
                  comHeight={116}
                  compLeft={40}
                  compRight={40}
                  compType="Text"
                >{`White Horse Wedding`}</Text>
              </Column>
            </Row>
            <Row
              className="items-center justify-between lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] w-[100%]"
              compId="141"
              comWidth={1232}
              comHeight={640}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Column
                className="bg-white_A700 items-start w-[41%]"
                compId="157"
                comWidth={504}
                comHeight={640}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:mt-[341px] xl:mt-[390px] mt-[439px] 3xl:mt-[527px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] text-bluegray_300 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1 w-[24%]"
                  compId="1708:543"
                  comWidth={119}
                  comHeight={19}
                  compLeft={40}
                  compRight={40}
                  compType="Text"
                >{`Deep Moments`}</Text>
                <Text
                  className="font-bold leading-lh12000 lg:mb-[38px] xl:mb-[44px] mb-[50px] 3xl:mb-[60px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] lg:text-fs37 xl:text-fs42 text-fs48 3xl:text-fs57 text-gray_900 text-left tracking-ls1 w-[63%]"
                  compId="1708:544"
                  comWidth={319}
                  comHeight={116}
                  compLeft={40}
                  compRight={40}
                  compType="Text"
                >{`Blue Eyes Wedding`}</Text>
              </Column>
              <Column
                className="bg-white_A700 items-start w-[58%]"
                compId="158"
                comWidth={712}
                comHeight={640}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:mt-[341px] xl:mt-[390px] mt-[439px] 3xl:mt-[527px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] text-bluegray_300 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1 w-[17%]"
                  compId="1708:547"
                  comWidth={119}
                  comHeight={19}
                  compLeft={40}
                  compRight={40}
                  compType="Text"
                >{`Deep Moments`}</Text>
                <Text
                  className="font-bold leading-lh12000 lg:mb-[38px] xl:mb-[44px] mb-[50px] 3xl:mb-[60px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] lg:text-fs37 xl:text-fs42 text-fs48 3xl:text-fs57 text-gray_900 text-left tracking-ls1 w-[45%]"
                  compId="1708:548"
                  comWidth={319}
                  comHeight={116}
                  compLeft={40}
                  compRight={40}
                  compType="Text"
                >
                  {
                    <>
                      {`Essential`}
                      <br />
                      {`Wedding`}
                    </>
                  }
                </Text>
              </Column>
            </Row>
          </List>
          <Button
            className="bg-gray_600 font-bold lg:mt-[62px] xl:mt-[71px] mt-[80px] 3xl:mt-[96px] mx-[auto] lg:py-[15px] xl:py-[17px] py-[20.1px] 2xl:py-[20px] 3xl:py-[24px] rounded-radius8 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-white_A700 tracking-ls1 w-[11%]"
            compId="18"
            comWidth={156}
            comHeight={56}
            compLeft={10}
            compRight={10}
            compType="Button"
          >{`Find out More`}</Button>
        </Column>
        <Column
          className="bg-gray_500 items-center justify-center lg:mt-[124px] xl:mt-[142px] mt-[160px] 3xl:mt-[192px] mx-[auto] w-[85%]"
          compId="159"
          comWidth={1230}
          comHeight={408}
          compLeft={10}
          compRight={10}
          compType="Column"
        >
          <Text
            className="font-bold 3xl:mt-[112px] lg:mt-[73px] xl:mt-[83px] mt-[94px] mx-[auto] text-center lg:text-fs37 xl:text-fs42 text-fs48 3xl:text-fs57 text-white_A700 tracking-ls1 w-[65%]"
            compId="1708:473"
            comWidth={797}
            comHeight={58}
            compLeft={10}
            compRight={10}
            compType="Text"
          >{`News Letters`}</Text>
          <Text
            className="font-normal leading-lh12500 lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] mx-[auto] not-italic text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-white_A700 tracking-ls1 w-[49%]"
            compId="1708:472"
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
            compId="145"
            comWidth={816}
            comHeight={64}
            compLeft={10}
            compRight={10}
            compType="Row"
          >
            <Text
              className="font-normal lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] lg:my-[17px] xl:my-[19px] my-[22px] 3xl:my-[26px] not-italic text-bluegray_300 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1 w-[19%]"
              compId="1708:466"
              comWidth={153}
              comHeight={20}
              compLeft={32}
              compRight={0}
              compType="Text"
            >{`Insert your mail here`}</Text>
            <Image
              src={"images/img_button.svg"}
              className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] 3xl:mr-[10px] lg:mr-[7px] xl:mr-[8px] mr-[9px] lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] object-contain rounded-radius8 lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
              compId="1708:467"
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
          compId="1708:436"
          comWidth={1440}
          comHeight={476}
          compLeft={0}
          compRight={0}
          compType="Footer"
        >
          <Row
            className="bg-white_A700 items-center justify-start w-[100%]"
            compId="147"
            comWidth={1440}
            comHeight={476}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <div
              className="bg-gray_300 lg:h-[280px] xl:h-[321px] h-[360px] 2xl:h-[361px] 3xl:h-[433px] ml-[104px] 3xl:ml-[124px] lg:ml-[80px] xl:ml-[92px] lg:my-[45px] xl:my-[51px] my-[58px] 3xl:my-[69px] lg:w-[280px] xl:w-[320px] w-[360px] 3xl:w-[432px]"
              compId="1708:438"
              comWidth={360}
              comHeight={360}
              compLeft={104}
              compRight={0}
              compType="View"
            ></div>
            <Column
              className="items-center lg:mb-[58px] xl:mb-[66px] mb-[75px] 3xl:mb-[90px] lg:ml-[43px] xl:ml-[49px] ml-[56px] 3xl:ml-[67px] 3xl:mt-[102px] lg:mt-[66px] xl:mt-[75px] mt-[85px] w-[57%]"
              compId="146"
              comWidth={816}
              comHeight={316}
              compLeft={56}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-center justify-between w-[100%]"
                compId="1708:444"
                comWidth={816}
                comHeight={48}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Image
                  src={"images/img_logo_3.svg"}
                  className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] object-contain w-[29%]"
                  compId="1708:440"
                  comWidth={240}
                  comHeight={48}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Logo"
                />
                <Row
                  className="items-center justify-between lg:mb-[13px] xl:mb-[15px] mb-[17px] 3xl:mb-[20px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[45%]"
                  compId="166"
                  comWidth={370}
                  comHeight={19}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-bold lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[12%]"
                    compId="1708:445"
                    comWidth={46}
                    comHeight={19}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Home`}</Text>
                  <Text
                    className="font-bold lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[13%]"
                    compId="1708:446"
                    comWidth={49}
                    comHeight={19}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`About`}</Text>
                  <Text
                    className="font-bold lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[16%]"
                    compId="1708:447"
                    comWidth={59}
                    comHeight={19}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Service`}</Text>
                  <Text
                    className="font-bold lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[24%]"
                    compId="1708:448"
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
                compId="1708:449"
                comWidth={811}
                comHeight={40}
                compLeft={3}
                compRight={2}
                compType="Row"
              >
                <Text
                  className="font-bold mb-[11px] 3xl:mb-[13px] lg:mb-[8px] xl:mb-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[48%]"
                  compId="1708:439"
                  comWidth={392}
                  comHeight={19}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`@2020 TanahAir Studio. All rights reserved.`}</Text>
                <Row
                  className="lg:gap-[12px] xl:gap-[14px] gap-[16px] 3xl:gap-[19px] grid grid-cols-4 items-center justify-between w-[26%]"
                  compId="167"
                  comWidth={208}
                  comHeight={40}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Column
                    className="bg-gray_600 lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                    compId="1708:450"
                    comWidth={40}
                    comHeight={40}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-bold mb-[11px] 3xl:mb-[13px] lg:mb-[8px] xl:mb-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] mx-[auto] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700 tracking-ls1 w-[43%]"
                      compId="1708:452"
                      comWidth={17}
                      comHeight={19}
                      compLeft={10}
                      compRight={10}
                      compType="Text"
                    >{`Yt`}</Text>
                  </Column>
                  <Column
                    className="bg-gray_600 lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                    compId="1708:453"
                    comWidth={40}
                    comHeight={40}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-bold mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700 tracking-ls1 w-[50%]"
                      compId="1708:455"
                      comWidth={20}
                      comHeight={19}
                      compLeft={10}
                      compRight={10}
                      compType="Text"
                    >{`Fb`}</Text>
                  </Column>
                  <Column
                    className="bg-gray_600 lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                    compId="1708:456"
                    comWidth={40}
                    comHeight={40}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-bold mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700 tracking-ls1 w-[55%]"
                      compId="1708:458"
                      comWidth={22}
                      comHeight={19}
                      compLeft={9}
                      compRight={9}
                      compType="Text"
                    >{`Tw`}</Text>
                  </Column>
                  <Column
                    className="bg-gray_600 lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                    compId="1708:459"
                    comWidth={40}
                    comHeight={40}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-bold mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700 tracking-ls1 w-[35%]"
                      compId="1708:461"
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

export default HomeStyle2Page;
