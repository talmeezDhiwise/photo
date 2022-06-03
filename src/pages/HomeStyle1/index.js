import React from "react";

import { getTodos, getPosts2 } from "service/api";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Button } from "components/Button";
import { List } from "components/List";
import { Grid } from "components/Grid";

const HomeStyle1Page = () => {
  const [apiData2, setapiData2] = React.useState();
  React.useEffect(() => {
    callApi2();
  }, []);
  const navigate = useNavigate();

  function callApi2() {
    const req = {};
    getTodos(req)
      .then((res) => {
        setapiData2(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function callApi3() {
    const req = { params: {} };
    getPosts2(req)
      .then((res) => {
        navigate("/homestyle2");
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function callApi5(data) {
    const req = {
      params: { test: JSON.parse(localStorage.getItem("USER_ID")) },
    };
    getPosts2(req)
      .then((res) => {
        toast.success("Done");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Server Error");
      });
  }
  function callApi4() {
    const req = {};
    getTodos(req)
      .then((res) => {
        localStorage.setItem("USER_ID", JSON.stringify(res?.userId));

        callApi5(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <>
      <Column
        className="bg-gray_200 font-dmsans items-center justify-start mx-[auto] w-[100%]"
        compId="909:542"
        comWidth={1440}
        comHeight={6993}
        compLeft={0}
        compRight={0}
        compType="Column"
      >
        <Stack
          className="h-[1091px] 2xl:h-[1092px] 3xl:h-[1310px] lg:h-[849px] xl:h-[971px] w-[100%]"
          compId="200"
          comWidth={1440}
          comHeight={1091}
          compLeft={0}
          compRight={0}
          compType="Stack"
        >
          <Stack
            className="absolute h-[1091px] 2xl:h-[1092px] 3xl:h-[1310px] lg:h-[849px] xl:h-[971px] inset-[0] w-[100%]"
            compId="202"
            comWidth={1440}
            comHeight={1091}
            compLeft={0}
            compRight={0}
            compType="Stack"
          >
            <div
              className="absolute bg-white_A700 lg:h-[592px] xl:h-[677px] h-[760px] 2xl:h-[761px] 3xl:h-[913px] top-[0] w-[100%]"
              compId="1602:384"
              comWidth={1440}
              comHeight={760}
              compLeft={0}
              compRight={0}
              compType="View"
            ></div>
            <div
              className="absolute bg-gray_300 bottom-[0] lg:h-[343px] xl:h-[392px] h-[440px] 2xl:h-[441px] 3xl:h-[529px] inset-x-[0] mx-[auto] w-[86%]"
              compId="1701:1269"
              comWidth={1232}
              comHeight={440}
              compLeft={0}
              compRight={0}
              compType="View"
            ></div>
          </Stack>
          <Column
            className="absolute inset-x-[0] mx-[auto] top-[5%] w-[86%]"
            compId="171"
            comWidth={1232}
            comHeight={551}
            compLeft={0}
            compRight={0}
            compType="Column"
          >
            <header
              className="w-[100%]"
              compId="25"
              comWidth={1232}
              comHeight={56}
              compLeft={0}
              compRight={0}
              compType="Header"
            >
              <Row
                className="items-center justify-start w-[100%]"
                compId="1703:414"
                comWidth={1232}
                comHeight={56}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Row
                  className="items-center justify-between xl:mb-[12px] mb-[14px] 3xl:mb-[16px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] lg:my-[10px] w-[18%]"
                  compId="1703:371"
                  comWidth={216}
                  comHeight={29}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-bold lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_500 text-left tracking-ls1 w-[39%]"
                    compId="1703:369"
                    comWidth={84}
                    comHeight={29}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Gallery`}</Text>
                  <Text
                    className="font-bold lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_500 text-left tracking-ls1 w-[50%]"
                    compId="1703:370"
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
                  compId="1701:1266"
                  comWidth={240}
                  comHeight={48}
                  compLeft={280}
                  compRight={0}
                  compType="Image"
                  alt="Logo"
                />
                <Button
                  className="common-pointer bg-gray_600 font-bold lg:ml-[269px] xl:ml-[308px] ml-[347px] 3xl:ml-[416px] lg:py-[15px] xl:py-[17px] py-[20.1px] 2xl:py-[20px] 3xl:py-[24px] rounded-radius8 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-white_A700 tracking-ls1 w-[12%]"
                  compId="24"
                  comWidth={149}
                  comHeight={56}
                  compLeft={347}
                  compRight={0}
                  compType="Button"
                  onClick={callApi4}
                >{`Booking Now`}</Button>
              </Row>
            </header>
            <Row
              className="items-start justify-between mt-[109px] 3xl:mt-[130px] lg:mt-[84px] xl:mt-[96px] w-[100%]"
              compId="170"
              comWidth={1232}
              comHeight={386}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Column
                className="items-start justify-start lg:mb-[37px] xl:mb-[42px] mb-[48px] 3xl:mb-[57px] w-[74%]"
                compId="169"
                comWidth={908}
                comHeight={338}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold leading-lh12000 lg:text-fs49 xl:text-fs56 text-fs64 3xl:text-fs76 text-gray_900 text-left tracking-ls1 w-[100%]"
                  compId="1602:385"
                  comWidth={908}
                  comHeight={154}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >
                  {apiData2?.title}
                </Text>
                <Text
                  className="font-normal leading-lh12500 mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] not-italic lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_800 text-left tracking-ls1 w-[67%]"
                  compId="1603:373"
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
                  className="common-pointer bg-gray_600 font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[43px] xl:mt-[49px] mt-[56px] 3xl:mt-[67px] lg:py-[15px] xl:py-[17px] py-[20.1px] 2xl:py-[20px] 3xl:py-[24px] rounded-radius8 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-white_A700 tracking-ls1 w-[17%]"
                  compId="23"
                  comWidth={156}
                  comHeight={56}
                  compLeft={0}
                  compRight={10}
                  compType="Button"
                  onClick={callApi3}
                >{`Find out More`}</Button>
              </Column>
              <Column
                className="xl:mt-[101px] mt-[114px] 3xl:mt-[136px] lg:mt-[88px] w-[5%]"
                compId="1703:355"
                comWidth={56}
                comHeight={272}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Column
                  className="border-2 border-gray_500 border-solid lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] items-center justify-start rounded-radius50 w-[100%]"
                  compId="1703:356"
                  comWidth={56}
                  comHeight={56}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold xl:mb-[12px] mb-[14px] 3xl:mb-[16px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] mx-[auto] lg:my-[10px] text-center lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_600 tracking-ls1 w-[45%]"
                    compId="1703:358"
                    comWidth={25}
                    comHeight={29}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`fb`}</Text>
                </Column>
                <Column
                  className="border-2 border-gray_500 border-solid lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] items-center justify-start lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] rounded-radius50 w-[100%]"
                  compId="1703:359"
                  comWidth={56}
                  comHeight={56}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold xl:mb-[12px] mb-[14px] 3xl:mb-[16px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] mx-[auto] lg:my-[10px] text-center lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_600 tracking-ls1 w-[54%]"
                    compId="1703:361"
                    comWidth={30}
                    comHeight={29}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`tw`}</Text>
                </Column>
                <Column
                  className="border-2 border-gray_500 border-solid lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] items-center justify-start lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] rounded-radius50 w-[100%]"
                  compId="1703:362"
                  comWidth={56}
                  comHeight={56}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold xl:mb-[12px] mb-[14px] 3xl:mb-[16px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] mx-[auto] lg:my-[10px] text-center lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_600 tracking-ls1 w-[38%]"
                    compId="1703:364"
                    comWidth={21}
                    comHeight={29}
                    compLeft={10}
                    compRight={10}
                    compType="Text"
                  >{`ig`}</Text>
                </Column>
                <Column
                  className="border-2 border-gray_500 border-solid lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] items-center justify-start lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] rounded-radius50 w-[100%]"
                  compId="1703:365"
                  comWidth={56}
                  comHeight={56}
                  compLeft={0}
                  compRight={0}
                  compType="Column"
                >
                  <Text
                    className="font-bold xl:mb-[12px] mb-[14px] 3xl:mb-[16px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] mx-[auto] lg:my-[10px] text-center lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_600 tracking-ls1 w-[55%]"
                    compId="1703:367"
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
          className="items-center justify-start lg:mt-[124px] xl:mt-[142px] mt-[160px] 3xl:mt-[192px] w-[100%]"
          compId="177"
          comWidth={1440}
          comHeight={2226}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Text
            className="font-bold mx-[auto] lg:text-fs37 xl:text-fs42 text-fs48 3xl:text-fs57 text-gray_900 text-left tracking-ls1 w-[25%]"
            compId="1605:869"
            comWidth={360}
            comHeight={58}
            compLeft={10}
            compRight={10}
            compType="Text"
          >{`Feature Project`}</Text>
          <List
            className="gap-[0] min-h-[auto] lg:mt-[62px] xl:mt-[71px] mt-[80px] 3xl:mt-[96px] mx-[auto] w-[86%]"
            compId="206"
            comWidth={1232}
            comHeight={1952}
            compLeft={10}
            compRight={10}
            compType="List"
            orientation="vertical"
          >
            <Row
              className="items-center justify-between lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] w-[100%]"
              compId="172"
              comWidth={1232}
              comHeight={640}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Column
                className="bg-white_A700 items-start w-[41%]"
                compId="187"
                comWidth={504}
                comHeight={640}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:mt-[341px] xl:mt-[390px] mt-[439px] 3xl:mt-[527px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] text-bluegray_300 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1 w-[24%]"
                  compId="1605:865"
                  comWidth={119}
                  comHeight={19}
                  compLeft={40}
                  compRight={40}
                  compType="Text"
                >{`Deep Moments`}</Text>
                <Text
                  className="font-bold leading-lh12000 lg:mb-[38px] xl:mb-[44px] mb-[50px] 3xl:mb-[60px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] lg:text-fs37 xl:text-fs42 text-fs48 3xl:text-fs57 text-gray_900 text-left tracking-ls1 w-[63%]"
                  compId="1605:866"
                  comWidth={319}
                  comHeight={116}
                  compLeft={40}
                  compRight={40}
                  compType="Text"
                >{`Classic Wedding`}</Text>
              </Column>
              <Column
                className="bg-white_A700 items-start w-[58%]"
                compId="188"
                comWidth={712}
                comHeight={640}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:mt-[341px] xl:mt-[390px] mt-[439px] 3xl:mt-[527px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] text-bluegray_300 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1 w-[17%]"
                  compId="1702:346"
                  comWidth={119}
                  comHeight={19}
                  compLeft={40}
                  compRight={40}
                  compType="Text"
                >{`Deep Moments`}</Text>
                <Text
                  className="font-bold leading-lh12000 lg:mb-[38px] xl:mb-[44px] mb-[50px] 3xl:mb-[60px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] lg:text-fs37 xl:text-fs42 text-fs48 3xl:text-fs57 text-gray_900 text-left tracking-ls1 w-[45%]"
                  compId="1702:347"
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
              compId="173"
              comWidth={1232}
              comHeight={640}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Column
                className="bg-white_A700 items-start w-[58%]"
                compId="189"
                comWidth={712}
                comHeight={640}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:mt-[341px] xl:mt-[390px] mt-[439px] 3xl:mt-[527px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] text-bluegray_300 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1 w-[17%]"
                  compId="1702:350"
                  comWidth={119}
                  comHeight={19}
                  compLeft={40}
                  compRight={40}
                  compType="Text"
                >{`Deep Moments`}</Text>
                <Text
                  className="font-bold leading-lh12000 lg:mb-[38px] xl:mb-[44px] mb-[50px] 3xl:mb-[60px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] lg:text-fs37 xl:text-fs42 text-fs48 3xl:text-fs57 text-gray_900 text-left tracking-ls1 w-[51%]"
                  compId="1702:351"
                  comWidth={362}
                  comHeight={116}
                  compLeft={40}
                  compRight={40}
                  compType="Text"
                >{`Spring Nature Wedding`}</Text>
              </Column>
              <Column
                className="bg-white_A700 items-start w-[41%]"
                compId="190"
                comWidth={504}
                comHeight={640}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:mt-[341px] xl:mt-[390px] mt-[439px] 3xl:mt-[527px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] text-bluegray_300 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1 w-[24%]"
                  compId="1702:342"
                  comWidth={119}
                  comHeight={19}
                  compLeft={40}
                  compRight={40}
                  compType="Text"
                >{`Deep Moments`}</Text>
                <Text
                  className="font-bold leading-lh12000 lg:mb-[38px] xl:mb-[44px] mb-[50px] 3xl:mb-[60px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] lg:text-fs37 xl:text-fs42 text-fs48 3xl:text-fs57 text-gray_900 text-left tracking-ls1 w-[63%]"
                  compId="1702:343"
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
              compId="174"
              comWidth={1232}
              comHeight={640}
              compLeft={0}
              compRight={0}
              compType="Row"
            >
              <Column
                className="bg-white_A700 items-start w-[41%]"
                compId="191"
                comWidth={504}
                comHeight={640}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:mt-[341px] xl:mt-[390px] mt-[439px] 3xl:mt-[527px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] text-bluegray_300 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1 w-[24%]"
                  compId="1702:354"
                  comWidth={119}
                  comHeight={19}
                  compLeft={40}
                  compRight={40}
                  compType="Text"
                >{`Deep Moments`}</Text>
                <Text
                  className="font-bold leading-lh12000 lg:mb-[38px] xl:mb-[44px] mb-[50px] 3xl:mb-[60px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] lg:text-fs37 xl:text-fs42 text-fs48 3xl:text-fs57 text-gray_900 text-left tracking-ls1 w-[63%]"
                  compId="1702:355"
                  comWidth={319}
                  comHeight={116}
                  compLeft={40}
                  compRight={40}
                  compType="Text"
                >{`Blue Eyes Wedding`}</Text>
              </Column>
              <Column
                className="bg-white_A700 items-start w-[58%]"
                compId="192"
                comWidth={712}
                comHeight={640}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <Text
                  className="font-bold lg:mt-[341px] xl:mt-[390px] mt-[439px] 3xl:mt-[527px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] text-bluegray_300 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1 w-[17%]"
                  compId="1702:358"
                  comWidth={119}
                  comHeight={19}
                  compLeft={40}
                  compRight={40}
                  compType="Text"
                >{`Deep Moments`}</Text>
                <Text
                  className="font-bold leading-lh12000 lg:mb-[38px] xl:mb-[44px] mb-[50px] 3xl:mb-[60px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:mx-[31px] xl:mx-[35px] mx-[40px] 3xl:mx-[48px] lg:text-fs37 xl:text-fs42 text-fs48 3xl:text-fs57 text-gray_900 text-left tracking-ls1 w-[45%]"
                  compId="1702:359"
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
            compId="22"
            comWidth={156}
            comHeight={56}
            compLeft={10}
            compRight={10}
            compType="Button"
          >{`Find out More`}</Button>
        </Column>
        <Stack
          className="lg:h-[436px] xl:h-[499px] h-[560px] 2xl:h-[561px] 3xl:h-[673px] lg:mt-[124px] xl:mt-[142px] mt-[160px] 3xl:mt-[192px] mx-[auto] w-[86%]"
          compId="204"
          comWidth={1232}
          comHeight={560}
          compLeft={10}
          compRight={10}
          compType="Stack"
        >
          <Row
            className="absolute bg-white_A700 inset-x-[3%] inset-y-[0] items-center justify-start w-[95%]"
            compId="196"
            comWidth={1168}
            comHeight={560}
            compLeft={32}
            compRight={32}
            compType="Row"
          >
            <div
              className="bg-gray_300 lg:h-[349px] xl:h-[399px] h-[448px] 2xl:h-[449px] 3xl:h-[538px] lg:ml-[56px] xl:ml-[64px] ml-[72px] 3xl:ml-[86px] lg:my-[43px] xl:my-[49px] my-[56px] 3xl:my-[67px] rounded-radius8 w-[27%]"
              compId="1606:410"
              comWidth={320}
              comHeight={448}
              compLeft={72}
              compRight={0}
              compType="View"
            ></div>
            <Column
              className="items-start lg:mb-[42px] xl:mb-[48px] mb-[54px] 3xl:mb-[64px] lg:ml-[61px] xl:ml-[70px] ml-[79px] 3xl:ml-[94px] lg:mt-[54px] xl:mt-[62px] mt-[70px] 3xl:mt-[84px] w-[53%]"
              compId="195"
              comWidth={618}
              comHeight={436}
              compLeft={79}
              compRight={0}
              compType="Column"
            >
              <Text
                className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:text-fs37 xl:text-fs42 text-fs48 3xl:text-fs57 text-gray_600 text-left tracking-ls1 w-[75%]"
                compId="1606:411"
                comWidth={466}
                comHeight={58}
                compLeft={0}
                compRight={10}
                compType="Text"
              >{`Joshua & Samantha`}</Text>
              <Text
                className="font-normal leading-lh12500 lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] not-italic text-bluegray_300 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1 w-[100%]"
                compId="1606:412"
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
                compId="1606:414"
                comWidth={138}
                comHeight={29}
                compLeft={0}
                compRight={10}
                compType="Text"
              >{`Alyssa Julie`}</Text>
              <Text
                className="font-medium mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_800 text-left tracking-ls1 w-[33%]"
                compId="1606:413"
                comWidth={206}
                comHeight={19}
                compLeft={0}
                compRight={10}
                compType="Text"
              >{`Your Beloved Photographer`}</Text>
            </Column>
          </Row>
          <Image
            src={"images/img_arrowleft_1.svg"}
            className="absolute bottom-[43%] lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] left-[0] object-contain lg:w-[43px] xl:w-[49px] w-[56px] 3xl:w-[67px]"
            compId="1606:402"
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
            compId="1606:405"
            comWidth={56}
            comHeight={56}
            compLeft={0}
            compRight={0}
            compType="Image"
            alt="ArrowRight"
          />
        </Stack>
        <Column
          className="items-center justify-start lg:mt-[124px] xl:mt-[142px] mt-[160px] 3xl:mt-[192px] w-[100%]"
          compId="182"
          comWidth={1440}
          comHeight={1432}
          compLeft={0}
          compRight={0}
          compType="Column"
        >
          <Row
            className="items-center justify-between w-[100%]"
            compId="179"
            comWidth={1440}
            comHeight={58}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <Text
              className="font-bold ml-[104px] 3xl:ml-[124px] lg:ml-[80px] xl:ml-[92px] lg:text-fs37 xl:text-fs42 text-fs48 3xl:text-fs57 text-gray_901 text-left tracking-ls1 w-[35%]"
              compId="1606:450"
              comWidth={501}
              comHeight={58}
              compLeft={104}
              compRight={0}
              compType="Text"
            >{`Latest Blog`}</Text>
            <Text
              className="font-bold lg:mb-[11px] xl:mb-[13px] mb-[15px] 3xl:mb-[18px] mr-[104px] 3xl:mr-[124px] lg:mr-[80px] xl:mr-[92px] lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-gray_600 text-right tracking-ls1 w-[8%]"
              compId="1606:492"
              comWidth={111}
              comHeight={29}
              compLeft={0}
              compRight={104}
              compType="Text"
            >{`See more`}</Text>
          </Row>
          <Grid
            className="lg:gap-[12px] xl:gap-[14px] gap-[16px] 3xl:gap-[19px] grid grid-cols-2 lg:mt-[37px] xl:mt-[42px] mt-[48px] 3xl:mt-[57px] mx-[auto] w-[86%]"
            compId="205"
            comWidth={1232}
            comHeight={1326}
            compLeft={10}
            compRight={10}
            compType="Grid"
          >
            <Column
              className="items-start justify-start w-[100%]"
              compId="1606:439"
              comWidth={608}
              comHeight={639}
              compLeft={0}
              compRight={624}
              compType="Column"
            >
              <Column
                className="w-[100%]"
                compId="209"
                comWidth={608}
                comHeight={416}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <div
                  className="bg-gray_300 lg:h-[324px] xl:h-[371px] h-[416px] 2xl:h-[417px] 3xl:h-[500px] w-[100%]"
                  compId="1606:449"
                  comWidth={608}
                  comHeight={416}
                  compLeft={0}
                  compRight={0}
                  compType="View"
                ></div>
              </Column>
              <Text
                className="font-bold lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] lg:text-fs24 xl:text-fs27 text-fs31 3xl:text-fs37 text-gray_900 text-left tracking-ls1 w-[100%]"
                compId="1606:448"
                comWidth={608}
                comHeight={37}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`Moody Morning at the Beach`}</Text>
              <Row
                className="items-start justify-start mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[26%]"
                compId="1606:444"
                comWidth={159}
                comHeight={19}
                compLeft={0}
                compRight={10}
                compType="Row"
              >
                <Text
                  className="font-bold lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_800 text-left tracking-ls1 w-[31%]"
                  compId="1606:447"
                  comWidth={49}
                  comHeight={19}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`14 Feb`}</Text>
                <div
                  className="bg-gray_800 h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:mb-[5px] xl:mb-[6px] mb-[7px] 3xl:mb-[8px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] rounded-radius50 xl:w-[3px] lg:w-[3px] w-[4px]"
                  compId="1606:446"
                  comWidth={4}
                  comHeight={4}
                  compLeft={8}
                  compRight={0}
                  compType="View"
                ></div>
                <Text
                  className="font-bold lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_800 text-left tracking-ls1 w-[57%]"
                  compId="1606:445"
                  comWidth={90}
                  comHeight={19}
                  compLeft={8}
                  compRight={0}
                  compType="Text"
                >{`Livina Style`}</Text>
              </Row>
              <Text
                className="font-normal leading-lh12500 lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic text-bluegray_300 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1 w-[100%]"
                compId="1606:443"
                comWidth={608}
                comHeight={60}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`}</Text>
              <Text
                className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_600 text-left tracking-ls1 w-[17%]"
                compId="1606:442"
                comWidth={103}
                comHeight={19}
                compLeft={0}
                compRight={10}
                compType="Text"
              >{`Explore More`}</Text>
            </Column>
            <Column
              className="items-start justify-start w-[100%]"
              compId="1606:462"
              comWidth={608}
              comHeight={639}
              compLeft={624}
              compRight={0}
              compType="Column"
            >
              <Column
                className="w-[100%]"
                compId="210"
                comWidth={608}
                comHeight={416}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <div
                  className="bg-gray_300 lg:h-[324px] xl:h-[371px] h-[416px] 2xl:h-[417px] 3xl:h-[500px] w-[100%]"
                  compId="1606:471"
                  comWidth={608}
                  comHeight={416}
                  compLeft={0}
                  compRight={0}
                  compType="View"
                ></div>
              </Column>
              <Text
                className="font-bold lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] lg:text-fs24 xl:text-fs27 text-fs31 3xl:text-fs37 text-gray_900 text-left tracking-ls1 w-[100%]"
                compId="1606:470"
                comWidth={608}
                comHeight={37}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`14 photos from a year ago`}</Text>
              <Row
                className="items-start justify-start mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[26%]"
                compId="1606:466"
                comWidth={159}
                comHeight={19}
                compLeft={0}
                compRight={10}
                compType="Row"
              >
                <Text
                  className="font-bold lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_800 text-left tracking-ls1 w-[31%]"
                  compId="1606:469"
                  comWidth={49}
                  comHeight={19}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`14 Feb`}</Text>
                <div
                  className="bg-gray_800 h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:mb-[5px] xl:mb-[6px] mb-[7px] 3xl:mb-[8px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] rounded-radius50 xl:w-[3px] lg:w-[3px] w-[4px]"
                  compId="1606:468"
                  comWidth={4}
                  comHeight={4}
                  compLeft={8}
                  compRight={0}
                  compType="View"
                ></div>
                <Text
                  className="font-bold lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_800 text-left tracking-ls1 w-[57%]"
                  compId="1606:467"
                  comWidth={90}
                  comHeight={19}
                  compLeft={8}
                  compRight={0}
                  compType="Text"
                >{`Livina Style`}</Text>
              </Row>
              <Text
                className="font-normal leading-lh12500 lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic text-bluegray_300 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1 w-[100%]"
                compId="1606:465"
                comWidth={608}
                comHeight={60}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`}</Text>
              <Text
                className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_600 text-left tracking-ls1 w-[17%]"
                compId="1606:464"
                comWidth={103}
                comHeight={19}
                compLeft={0}
                compRight={10}
                compType="Text"
              >{`Explore More`}</Text>
            </Column>
            <Column
              className="items-start justify-start w-[100%]"
              compId="1606:472"
              comWidth={608}
              comHeight={639}
              compLeft={0}
              compRight={624}
              compType="Column"
            >
              <Column
                className="w-[100%]"
                compId="211"
                comWidth={608}
                comHeight={416}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <div
                  className="bg-gray_300 lg:h-[324px] xl:h-[371px] h-[416px] 2xl:h-[417px] 3xl:h-[500px] w-[100%]"
                  compId="1606:481"
                  comWidth={608}
                  comHeight={416}
                  compLeft={0}
                  compRight={0}
                  compType="View"
                ></div>
              </Column>
              <Text
                className="font-bold lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] lg:text-fs24 xl:text-fs27 text-fs31 3xl:text-fs37 text-gray_900 text-left tracking-ls1 w-[100%]"
                compId="1606:480"
                comWidth={608}
                comHeight={37}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`I Spent a Year Documenting Covid-19`}</Text>
              <Row
                className="items-start justify-start mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[26%]"
                compId="1606:476"
                comWidth={159}
                comHeight={19}
                compLeft={0}
                compRight={10}
                compType="Row"
              >
                <Text
                  className="font-bold lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_800 text-left tracking-ls1 w-[31%]"
                  compId="1606:479"
                  comWidth={49}
                  comHeight={19}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`14 Feb`}</Text>
                <div
                  className="bg-gray_800 h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:mb-[5px] xl:mb-[6px] mb-[7px] 3xl:mb-[8px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] rounded-radius50 xl:w-[3px] lg:w-[3px] w-[4px]"
                  compId="1606:478"
                  comWidth={4}
                  comHeight={4}
                  compLeft={8}
                  compRight={0}
                  compType="View"
                ></div>
                <Text
                  className="font-bold lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_800 text-left tracking-ls1 w-[57%]"
                  compId="1606:477"
                  comWidth={90}
                  comHeight={19}
                  compLeft={8}
                  compRight={0}
                  compType="Text"
                >{`Livina Style`}</Text>
              </Row>
              <Text
                className="font-normal leading-lh12500 lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic text-bluegray_300 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1 w-[100%]"
                compId="1606:475"
                comWidth={608}
                comHeight={60}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`}</Text>
              <Text
                className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_600 text-left tracking-ls1 w-[17%]"
                compId="1606:474"
                comWidth={103}
                comHeight={19}
                compLeft={0}
                compRight={10}
                compType="Text"
              >{`Explore More`}</Text>
            </Column>
            <Column
              className="items-start justify-start w-[100%]"
              compId="1606:482"
              comWidth={608}
              comHeight={639}
              compLeft={624}
              compRight={0}
              compType="Column"
            >
              <Column
                className="w-[100%]"
                compId="212"
                comWidth={608}
                comHeight={416}
                compLeft={0}
                compRight={0}
                compType="Column"
              >
                <div
                  className="bg-gray_300 lg:h-[324px] xl:h-[371px] h-[416px] 2xl:h-[417px] 3xl:h-[500px] w-[100%]"
                  compId="1606:491"
                  comWidth={608}
                  comHeight={416}
                  compLeft={0}
                  compRight={0}
                  compType="View"
                ></div>
              </Column>
              <Text
                className="font-bold lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] lg:text-fs24 xl:text-fs27 text-fs31 3xl:text-fs37 text-gray_900 text-left tracking-ls1 w-[100%]"
                compId="1606:490"
                comWidth={608}
                comHeight={37}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`Style from beginner Photographer`}</Text>
              <Row
                className="items-start justify-start mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[26%]"
                compId="1606:486"
                comWidth={159}
                comHeight={19}
                compLeft={0}
                compRight={10}
                compType="Row"
              >
                <Text
                  className="font-bold lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_800 text-left tracking-ls1 w-[31%]"
                  compId="1606:489"
                  comWidth={49}
                  comHeight={19}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`14 Feb`}</Text>
                <div
                  className="bg-gray_800 h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:mb-[5px] xl:mb-[6px] mb-[7px] 3xl:mb-[8px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] rounded-radius50 xl:w-[3px] lg:w-[3px] w-[4px]"
                  compId="1606:488"
                  comWidth={4}
                  comHeight={4}
                  compLeft={8}
                  compRight={0}
                  compType="View"
                ></div>
                <Text
                  className="font-bold lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_800 text-left tracking-ls1 w-[57%]"
                  compId="1606:487"
                  comWidth={90}
                  comHeight={19}
                  compLeft={8}
                  compRight={0}
                  compType="Text"
                >{`Livina Style`}</Text>
              </Row>
              <Text
                className="font-normal leading-lh12500 lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic text-bluegray_300 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1 w-[100%]"
                compId="1606:485"
                comWidth={608}
                comHeight={60}
                compLeft={0}
                compRight={0}
                compType="Text"
              >{`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`}</Text>
              <Text
                className="font-bold mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_600 text-left tracking-ls1 w-[17%]"
                compId="1606:484"
                comWidth={103}
                comHeight={19}
                compLeft={0}
                compRight={10}
                compType="Text"
              >{`Explore More`}</Text>
            </Column>
          </Grid>
        </Column>
        <Column
          className="bg-gray_500 items-center justify-center lg:mt-[124px] xl:mt-[142px] mt-[160px] 3xl:mt-[192px] mx-[auto] w-[85%]"
          compId="198"
          comWidth={1230}
          comHeight={408}
          compLeft={10}
          compRight={10}
          compType="Column"
        >
          <Text
            className="font-bold 3xl:mt-[112px] lg:mt-[73px] xl:mt-[83px] mt-[94px] mx-[auto] text-center lg:text-fs37 xl:text-fs42 text-fs48 3xl:text-fs57 text-white_A700 tracking-ls1 w-[65%]"
            compId="1606:975"
            comWidth={797}
            comHeight={58}
            compLeft={10}
            compRight={10}
            compType="Text"
          >{`News Letters`}</Text>
          <Text
            className="font-normal leading-lh12500 lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] mx-[auto] not-italic text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-white_A700 tracking-ls1 w-[49%]"
            compId="1606:974"
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
            compId="183"
            comWidth={816}
            comHeight={64}
            compLeft={10}
            compRight={10}
            compType="Row"
          >
            <Text
              className="font-normal lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] lg:my-[17px] xl:my-[19px] my-[22px] 3xl:my-[26px] not-italic text-bluegray_300 lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left tracking-ls1 w-[19%]"
              compId="1606:972"
              comWidth={153}
              comHeight={20}
              compLeft={32}
              compRight={0}
              compType="Text"
            >{`Insert your mail here`}</Text>
            <Image
              src={"images/img_button.svg"}
              className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] 3xl:mr-[10px] lg:mr-[7px] xl:mr-[8px] mr-[9px] lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] object-contain rounded-radius8 lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
              compId="1606:1139"
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
          compId="1606:1151"
          comWidth={1440}
          comHeight={476}
          compLeft={0}
          compRight={0}
          compType="Footer"
        >
          <Row
            className="bg-white_A700 items-center justify-start w-[100%]"
            compId="185"
            comWidth={1440}
            comHeight={476}
            compLeft={0}
            compRight={0}
            compType="Row"
          >
            <div
              className="bg-gray_300 lg:h-[280px] xl:h-[321px] h-[360px] 2xl:h-[361px] 3xl:h-[433px] ml-[104px] 3xl:ml-[124px] lg:ml-[80px] xl:ml-[92px] lg:my-[45px] xl:my-[51px] my-[58px] 3xl:my-[69px] lg:w-[280px] xl:w-[320px] w-[360px] 3xl:w-[432px]"
              compId="1606:1171"
              comWidth={360}
              comHeight={360}
              compLeft={104}
              compRight={0}
              compType="View"
            ></div>
            <Column
              className="items-center lg:mb-[58px] xl:mb-[66px] mb-[75px] 3xl:mb-[90px] lg:ml-[43px] xl:ml-[49px] ml-[56px] 3xl:ml-[67px] 3xl:mt-[102px] lg:mt-[66px] xl:mt-[75px] mt-[85px] w-[57%]"
              compId="184"
              comWidth={816}
              comHeight={316}
              compLeft={56}
              compRight={0}
              compType="Column"
            >
              <Row
                className="items-center justify-between w-[100%]"
                compId="1702:364"
                comWidth={816}
                comHeight={48}
                compLeft={0}
                compRight={0}
                compType="Row"
              >
                <Image
                  src={"images/img_logo_3.svg"}
                  className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] object-contain w-[29%]"
                  compId="1702:360"
                  comWidth={240}
                  comHeight={48}
                  compLeft={0}
                  compRight={0}
                  compType="Image"
                  alt="Logo"
                />
                <Row
                  className="items-center justify-between lg:mb-[13px] xl:mb-[15px] mb-[17px] 3xl:mb-[20px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[45%]"
                  compId="207"
                  comWidth={370}
                  comHeight={19}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Text
                    className="font-bold lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[12%]"
                    compId="1702:365"
                    comWidth={46}
                    comHeight={19}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Home`}</Text>
                  <Text
                    className="font-bold lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[13%]"
                    compId="1702:366"
                    comWidth={49}
                    comHeight={19}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`About`}</Text>
                  <Text
                    className="font-bold lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[16%]"
                    compId="1702:367"
                    comWidth={59}
                    comHeight={19}
                    compLeft={0}
                    compRight={0}
                    compType="Text"
                  >{`Service`}</Text>
                  <Text
                    className="font-bold lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[24%]"
                    compId="1702:368"
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
                compId="1606:1156"
                comWidth={811}
                comHeight={40}
                compLeft={3}
                compRight={2}
                compType="Row"
              >
                <Text
                  className="font-bold mb-[11px] 3xl:mb-[13px] lg:mb-[8px] xl:mb-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-gray_900 text-left tracking-ls1 w-[48%]"
                  compId="1606:1153"
                  comWidth={392}
                  comHeight={19}
                  compLeft={0}
                  compRight={0}
                  compType="Text"
                >{`@2020 TanahAir Studio. All rights reserved.`}</Text>
                <Row
                  className="lg:gap-[12px] xl:gap-[14px] gap-[16px] 3xl:gap-[19px] grid grid-cols-4 items-center justify-between w-[26%]"
                  compId="208"
                  comWidth={208}
                  comHeight={40}
                  compLeft={0}
                  compRight={0}
                  compType="Row"
                >
                  <Column
                    className="bg-gray_600 lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                    compId="1606:1157"
                    comWidth={40}
                    comHeight={40}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-bold mb-[11px] 3xl:mb-[13px] lg:mb-[8px] xl:mb-[9px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] mx-[auto] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700 tracking-ls1 w-[43%]"
                      compId="1606:1159"
                      comWidth={17}
                      comHeight={19}
                      compLeft={10}
                      compRight={10}
                      compType="Text"
                    >{`Yt`}</Text>
                  </Column>
                  <Column
                    className="bg-gray_600 lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                    compId="1606:1160"
                    comWidth={40}
                    comHeight={40}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-bold mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700 tracking-ls1 w-[50%]"
                      compId="1606:1162"
                      comWidth={20}
                      comHeight={19}
                      compLeft={10}
                      compRight={10}
                      compType="Text"
                    >{`Fb`}</Text>
                  </Column>
                  <Column
                    className="bg-gray_600 lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                    compId="1606:1163"
                    comWidth={40}
                    comHeight={40}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-bold mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700 tracking-ls1 w-[55%]"
                      compId="1606:1165"
                      comWidth={22}
                      comHeight={19}
                      compLeft={9}
                      compRight={9}
                      compType="Text"
                    >{`Tw`}</Text>
                  </Column>
                  <Column
                    className="bg-gray_600 lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                    compId="1606:1166"
                    comWidth={40}
                    comHeight={40}
                    compLeft={0}
                    compRight={0}
                    compType="Column"
                  >
                    <Text
                      className="font-bold mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 text-left text-white_A700 tracking-ls1 w-[35%]"
                      compId="1606:1168"
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

      <ToastContainer />
    </>
  );
};

export default HomeStyle1Page;
