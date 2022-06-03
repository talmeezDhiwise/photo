import React from "react";

import { getPosts1 } from "service/api";
import { Column } from "components/Column";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Button } from "components/Button";
import { Grid } from "components/Grid";

const BlogPage = () => {
  const [apiData1, setapiData1] = React.useState();
  React.useEffect(() => {
    callApi1();
  }, []);

  function callApi1() {
    const req = {};
    getPosts1(req)
      .then((res) => {
        setapiData1(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <>
      <Column
        className="bg-gray_200 font-dmsans items-center justify-start mx-[auto] w-[100%]"
        compId="1710:468"
        comWidth={1440}
        comHeight={4395}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <Column
          className="bg-white_A700 w-[100%]"
          compId="1710:545"
          comWidth={1440}
          comHeight={760}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Column
            className="bg-gray_300 items-center justify-start w-[100%]"
            compId="90"
            comWidth={1440}
            comHeight={760}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <header
              className="lg:mt-[40px] xl:mt-[46px] mt-[52px] 3xl:mt-[62px] mx-[auto] w-[86%]"
              compId="14"
              comWidth={1232}
              comHeight={56}
              compLeft={10}
              compRight={10}
              compType="Header"
            >
              <Row
                className="items-center justify-start w-[100%]"
                compId="1710:564"
                comWidth={1232}
                comHeight={56}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Row
                  className="items-center justify-between xl:mb-[12px] mb-[14px] 3xl:mb-[16px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] lg:my-[10px] w-[18%]"
                  compId="1710:570"
                  comWidth={216}
                  comHeight={29}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-bold lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_500 text-left tracking-ls1 w-[39%]"
                    compId="1710:571"
                    comWidth={84}
                    comHeight={29}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Gallery`}</Text>
                  <Text
                    className="font-bold lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_500 text-left tracking-ls1 w-[50%]"
                    compId="1710:572"
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
                  compId="1710:565"
                  comWidth={240}
                  comHeight={48}
                  compLeft={280}
                  compRight={0}
                  compType="Image"
                  alt="Logo"
                />
                <Button
                  className="bg-gray_600 font-bold lg:ml-[269px] xl:ml-[308px] ml-[347px] 3xl:ml-[416px] lg:py-[15px] xl:py-[17px] py-[20.1px] 2xl:py-[20px] 3xl:py-[24px] rounded-radius8 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-white_A700 tracking-ls1 w-[12%]"
                  compId="13"
                  comWidth={149}
                  comHeight={56}
                  compLeft={347}
                  compRight={0}
                  compType="Button"
                >{`Booking Now`}</Button>
              </Row>
            </header>
            <Row
              className="items-start justify-between lg:mb-[122px] xl:mb-[139px] mb-[157px] 3xl:mb-[188px] lg:mt-[173px] xl:mt-[198px] mt-[223px] 3xl:mt-[267px] w-[100%]"
              compId="89"
              comWidth={1440}
              comHeight={272}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Text
                className="font-bold lg:mb-[143px] xl:mb-[163px] mb-[184px] 3xl:mb-[220px] ml-[104px] 3xl:ml-[124px] lg:ml-[80px] xl:ml-[92px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:text-fs49 xl:text-fs56 text-fs64 3xl:text-fs76 text-gray_900 text-left tracking-ls1 w-[63%]"
                compId="1710:561"
                comWidth={908}
                comHeight={77}
                compLeft={104}
                compRight={0}
                compType="Text"
              >{`Our Latest Blog`}</Text>
              <Column
                className="mr-[104px] 3xl:mr-[124px] lg:mr-[80px] xl:mr-[92px] w-[4%]"
                compId="1710:548"
                comWidth={56}
                comHeight={272}
                compLeft={0}
                compRight={104}
                compType="Column"
              >
                <Column
                  className="border-2 border-gray_500 border-solid lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] items-center justify-start rounded-radius50 w-[100%]"
                  compId="1710:549"
                  comWidth={56}
                  comHeight={56}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold xl:mb-[12px] mb-[14px] 3xl:mb-[16px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] mx-[auto] lg:my-[10px] text-center lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_600 tracking-ls1 w-[45%]"
                    compId="1710:551"
                    comWidth={25}
                    comHeight={29}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`fb`}</Text>
                </Column>
                <Column
                  className="border-2 border-gray_500 border-solid lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] items-center justify-start lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] rounded-radius50 w-[100%]"
                  compId="1710:552"
                  comWidth={56}
                  comHeight={56}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold xl:mb-[12px] mb-[14px] 3xl:mb-[16px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] mx-[auto] lg:my-[10px] text-center lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_600 tracking-ls1 w-[54%]"
                    compId="1710:554"
                    comWidth={30}
                    comHeight={29}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`tw`}</Text>
                </Column>
                <Column
                  className="border-2 border-gray_500 border-solid lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] items-center justify-start lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] rounded-radius50 w-[100%]"
                  compId="1710:555"
                  comWidth={56}
                  comHeight={56}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold xl:mb-[12px] mb-[14px] 3xl:mb-[16px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] mx-[auto] lg:my-[10px] text-center lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_600 tracking-ls1 w-[38%]"
                    compId="1710:557"
                    comWidth={21}
                    comHeight={29}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`ig`}</Text>
                </Column>
                <Column
                  className="border-2 border-gray_500 border-solid lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] items-center justify-start lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] rounded-radius50 w-[100%]"
                  compId="1710:558"
                  comWidth={56}
                  comHeight={56}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold xl:mb-[12px] mb-[14px] 3xl:mb-[16px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] mx-[auto] lg:my-[10px] text-center lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_600 tracking-ls1 w-[55%]"
                    compId="1710:560"
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
        </Column>
        <Column
          className="items-center justify-start lg:mt-[104px] xl:mt-[119px] mt-[134px] 3xl:mt-[160px] w-[100%]"
          compId="96"
          comWidth={1440}
          comHeight={2297}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Row
            className="items-center justify-center mx-[auto] w-[68%]"
            compId="1711:371"
            comWidth={986}
            comHeight={29}
            compLeft={10}
            compRight={10}
            compType="Row"
          >
            <Text
              className="font-bold lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_900 text-left tracking-ls1 w-[5%]"
              compId="1710:528"
              comWidth={49}
              comHeight={29}
              compLeft={0}
              compRight={0}
              compType="Text"
            >{`ALL`}</Text>
            <Text
              className="font-bold lg:ml-[43px] xl:ml-[49px] ml-[56px] 3xl:ml-[67px] lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_900 text-left tracking-ls1 w-[10%]"
              compId="1710:577"
              comWidth={99}
              comHeight={29}
              compLeft={56}
              compRight={0}
              compType="Text"
            >{`NATURE`}</Text>
            <Text
              className="font-bold lg:ml-[43px] xl:ml-[49px] ml-[56px] 3xl:ml-[67px] lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_900 text-left tracking-ls1 w-[17%]"
              compId="1710:578"
              comWidth={172}
              comHeight={29}
              compLeft={56}
              compRight={0}
              compType="Text"
            >{`TECHNOLOGY`}</Text>
            <Text
              className="font-bold lg:ml-[43px] xl:ml-[49px] ml-[56px] 3xl:ml-[67px] lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_900 text-left tracking-ls1 w-[19%]"
              compId="1710:579"
              comWidth={184}
              comHeight={29}
              compLeft={56}
              compRight={0}
              compType="Text"
            >{`PHOTOGRAPHY`}</Text>
            <Text
              className="font-bold lg:ml-[43px] xl:ml-[49px] ml-[56px] 3xl:ml-[67px] lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_900 text-left tracking-ls1 w-[10%]"
              compId="1711:369"
              comWidth={101}
              comHeight={29}
              compLeft={56}
              compRight={0}
              compType="Text"
            >{`EDITING`}</Text>
            <Text
              className="font-bold lg:ml-[43px] xl:ml-[49px] ml-[56px] 3xl:ml-[67px] lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_900 text-left tracking-ls1 w-[10%]"
              compId="1711:370"
              comWidth={101}
              comHeight={29}
              compLeft={56}
              compRight={0}
              compType="Text"
            >{`PRESET`}</Text>
          </Row>
          <Grid
            className="lg:gap-[12px] xl:gap-[14px] gap-[16px] 3xl:gap-[19px] grid grid-cols-2 lg:mt-[49px] xl:mt-[56px] mt-[63px] 3xl:mt-[75px] mx-[auto] w-[86%]"
            compId="101"
            comWidth={1232}
            comHeight={2029}
            compLeft={10}
            compRight={10}
            compType="Grid"
          >
            {apiData1?.map((apiData1Ele) => {
              return (
                <Column
                  className="items-start justify-start w-[100%]"
                  compId="1710:508"
                  comWidth={608}
                  comHeight={639}
                  compLeft={0}
                  compRight={624}
                  compType="Column"
                >
                  <Column
                    className="w-[100%]"
                    compId="104"
                    comWidth={608}
                    comHeight={416}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <div
                      className="bg-gray_300 lg:h-[324px] xl:h-[371px] h-[416px] 2xl:h-[417px] 3xl:h-[500px] w-[100%]"
                      compId="1710:517"
                      comWidth={608}
                      comHeight={416}
                      compLeft={0}
                      compRight={0}
                      compType="View"
                    ></div>
                  </Column>
                  <Text
                    className="font-bold lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] lg:text-fs24 xl:text-fs27 text-fs31 3xl:text-fs37 text-gray_900 text-left tracking-ls1 w-[100%]"
                    compId="1710:516"
                    comWidth={608}
                    comHeight={37}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    {apiData1Ele?.title}
                  </Text>
                  <Row
                    className="items-start justify-start mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[31%]"
                    compId="1710:512"
                    comWidth={186}
                    comHeight={19}
                    compLeft={0}
                    compRight={10}
                    compType="Row"
                  >
                    <Text
                      className="font-bold lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_800 text-left tracking-ls1 w-[26%]"
                      compId="1710:515"
                      comWidth={49}
                      comHeight={19}
                      compLeft={0}
                      compRight={0}
                      compType="Text"
                    >{`14 Feb`}</Text>
                    <div
                      className="bg-gray_800 h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:mb-[5px] xl:mb-[6px] mb-[7px] 3xl:mb-[8px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] rounded-radius50 xl:w-[3px] lg:w-[3px] w-[4px]"
                      compId="1710:514"
                      comWidth={4}
                      comHeight={4}
                      compLeft={8}
                      compRight={0}
                      compType="View"
                    ></div>
                    <Text
                      className="font-bold lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_800 text-left tracking-ls1 w-[63%]"
                      compId="1710:513"
                      comWidth={117}
                      comHeight={19}
                      compLeft={8}
                      compRight={0}
                      compType="Text"
                    >{`Visuel Projects`}</Text>
                  </Row>
                  <Text
                    className="font-normal leading-lh12500 lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic text-bluegray_300 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1 w-[100%]"
                    compId="1710:511"
                    comWidth={608}
                    comHeight={60}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >
                    {apiData1Ele?.body}
                  </Text>
                  <Text
                    className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_600 text-left tracking-ls1 w-[17%]"
                    compId="1710:510"
                    comWidth={103}
                    comHeight={19}
                    compLeft={0}
                    compRight={10}
                    compType="Text"
                  >{`Explore More`}</Text>
                </Column>
              );
            })}
          </Grid>
          <Button
            className="bg-gray_600 font-bold xl:mt-[106px] mt-[120px] 3xl:mt-[144px] lg:mt-[93px] mx-[auto] lg:py-[15px] xl:py-[17px] py-[20.1px] 2xl:py-[20px] 3xl:py-[24px] rounded-radius8 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-white_A700 tracking-ls1 w-[11%]"
            compId="11"
            comWidth={156}
            comHeight={56}
            compLeft={10}
            compRight={10}
            compType="Button"
          >{`Find out More`}</Button>
        </Column>
        <Column
          className="bg-gray_500 items-center justify-center lg:mt-[124px] xl:mt-[142px] mt-[160px] 3xl:mt-[192px] mx-[auto] w-[85%]"
          compId="100"
          comWidth={1230}
          comHeight={408}
          compLeft={10}
          compRight={10}
          compType="Column"
        >
          <Text
            className="font-bold 3xl:mt-[112px] lg:mt-[73px] xl:mt-[83px] mt-[94px] mx-[auto] text-center lg:text-fs37 xl:text-fs42 text-fs48 3xl:text-fs57 text-white_A700 tracking-ls1 w-[65%]"
            compId="1710:506"
            comWidth={797}
            comHeight={58}
            compLeft={10}
            compRight={10}
            compType="Text"
          >{`News Letters`}</Text>
          <Text
            className="font-normal leading-lh12500 lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] mx-[auto] not-italic text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-white_A700 tracking-ls1 w-[49%]"
            compId="1710:505"
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
            compId="97"
            comWidth={816}
            comHeight={64}
            compLeft={10}
            compRight={10}
            compType="Row"
          >
            <Text
              className="font-normal lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] lg:my-[17px] xl:my-[19px] my-[22px] 3xl:my-[26px] not-italic text-bluegray_300 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1 w-[19%]"
              compId="1710:499"
              comWidth={153}
              comHeight={20}
              compLeft={32}
              compRight={0}
              compType="Text"
            >{`Insert your mail here`}</Text>
            <Image
              src={"images/img_button.svg"}
              className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] 3xl:mr-[10px] lg:mr-[7px] xl:mr-[8px] mr-[9px] lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] object-contain rounded-radius8 lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
              compId="1710:500"
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
          compId="1710:469"
          comWidth={1440}
          comHeight={476}
          compLeft={0}
          compRight={0}
          compType="Footer"
        >
          <Row
            className="bg-white_A700 items-center justify-start w-[100%]"
            compId="99"
            comWidth={1440}
            comHeight={476}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <div
              className="bg-gray_300 lg:h-[280px] xl:h-[321px] h-[360px] 2xl:h-[361px] 3xl:h-[433px] ml-[104px] 3xl:ml-[124px] lg:ml-[80px] xl:ml-[92px] lg:my-[45px] xl:my-[51px] my-[58px] 3xl:my-[69px] lg:w-[280px] xl:w-[320px] w-[360px] 3xl:w-[432px]"
              compId="1710:471"
              comWidth={360}
              comHeight={360}
              compLeft={104}
              compRight={0}
              compType="View"
            ></div>
            <Column
              className="items-center lg:mb-[58px] xl:mb-[66px] mb-[75px] 3xl:mb-[90px] lg:ml-[43px] xl:ml-[49px] ml-[56px] 3xl:ml-[67px] 3xl:mt-[102px] lg:mt-[66px] xl:mt-[75px] mt-[85px] w-[57%]"
              compId="98"
              comWidth={816}
              comHeight={316}
              compLeft={56}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-center justify-between w-[100%]"
                compId="1710:477"
                comWidth={816}
                comHeight={48}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Image
                  src={"images/img_logo.svg"}
                  className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] object-contain w-[29%]"
                  compId="1710:473"
                  comWidth={240}
                  comHeight={48}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Logo"
                />
                <Row
                  className="items-center justify-between lg:mb-[13px] xl:mb-[15px] mb-[17px] 3xl:mb-[20px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[45%]"
                  compId="102"
                  comWidth={370}
                  comHeight={19}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-bold lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[12%]"
                    compId="1710:478"
                    comWidth={46}
                    comHeight={19}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Home`}</Text>
                  <Text
                    className="font-bold lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[13%]"
                    compId="1710:479"
                    comWidth={49}
                    comHeight={19}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`About`}</Text>
                  <Text
                    className="font-bold lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[16%]"
                    compId="1710:480"
                    comWidth={59}
                    comHeight={19}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Service`}</Text>
                  <Text
                    className="font-bold lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[24%]"
                    compId="1710:481"
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
                compId="1710:482"
                comWidth={811}
                comHeight={40}
                compLeft={3}
                compRight={2}
                compType="Row"
              >
                <Text
                  className="font-bold mb-[11px] 3xl:mb-[13px] lg:mb-[8px] xl:mb-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[48%]"
                  compId="1710:472"
                  comWidth={392}
                  comHeight={19}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`@2020 TanahAir Studio. All rights reserved.`}</Text>
                <Row
                  className="lg:gap-[12px] xl:gap-[14px] gap-[16px] 3xl:gap-[19px] grid grid-cols-4 items-center justify-between w-[26%]"
                  compId="103"
                  comWidth={208}
                  comHeight={40}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Column
                    className="bg-gray_600 lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                    compId="1710:483"
                    comWidth={40}
                    comHeight={40}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-bold mb-[11px] 3xl:mb-[13px] lg:mb-[8px] xl:mb-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] mx-[auto] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700 tracking-ls1 w-[43%]"
                      compId="1710:485"
                      comWidth={17}
                      comHeight={19}
                      compLeft={10}
                      compRight={10}
                      compType="Text"
                    >{`Yt`}</Text>
                  </Column>
                  <Column
                    className="bg-gray_600 lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                    compId="1710:486"
                    comWidth={40}
                    comHeight={40}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-bold mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700 tracking-ls1 w-[50%]"
                      compId="1710:488"
                      comWidth={20}
                      comHeight={19}
                      compLeft={10}
                      compRight={10}
                      compType="Text"
                    >{`Fb`}</Text>
                  </Column>
                  <Column
                    className="bg-gray_600 lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                    compId="1710:489"
                    comWidth={40}
                    comHeight={40}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-bold mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700 tracking-ls1 w-[55%]"
                      compId="1710:491"
                      comWidth={22}
                      comHeight={19}
                      compLeft={9}
                      compRight={9}
                      compType="Text"
                    >{`Tw`}</Text>
                  </Column>
                  <Column
                    className="bg-gray_600 lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                    compId="1710:492"
                    comWidth={40}
                    comHeight={40}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-bold mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700 tracking-ls1 w-[35%]"
                      compId="1710:494"
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

export default BlogPage;
