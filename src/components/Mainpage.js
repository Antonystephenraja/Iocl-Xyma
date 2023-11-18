import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const Mainpage = () => {
const [device,setR_N]=useState([])

  const [device1,DeviceData1]=useState([])
  const [device2,DeviceData2]=useState([])
  const [device3,DeviceData3]=useState([])
  const [device4,DeviceData4]=useState([])
  const [device5,DeviceData5]=useState([])
  const [device6,DeviceData6]=useState([])
  const [device7,DeviceData7]=useState([])
  const [device8,DeviceData8]=useState([])
  const [device9,DeviceData9]=useState([])
  const [device10,DeviceData10]=useState([])
  const [device11,DeviceData11]=useState([])
  const [device12,DeviceData12]=useState([])
  const [device13,DeviceData13]=useState([])
  const [device14,DeviceData14]=useState([])
  const [device15,DeviceData15]=useState([])
  const [device16,DeviceData16]=useState([])
  const [device17,DeviceData17]=useState([])
  const [device18,DeviceData18]=useState([])
  const [device19,DeviceData19]=useState([])
  const [device20,DeviceData20]=useState([])
  const [device21,DeviceData21]=useState([])
  const [device22,DeviceData22]=useState([])
  const [device23,DeviceData23]=useState([])
  const [device24,DeviceData24]=useState([])
  const [device25,DeviceData25]=useState([])
  const [device26,DeviceData26]=useState([])
  const [device27,DeviceData27]=useState([])
  const [device28,DeviceData28]=useState([])
  const [device29,DeviceData29]=useState([])
  const [device30,DeviceData30]=useState([])
  const [device31,DeviceData31]=useState([])
  const [device32,DeviceData32]=useState([])
  const [device33,DeviceData33]=useState([])
  const [device34,DeviceData34]=useState([])
  const [device35,DeviceData35]=useState([])
  const [device36,DeviceData36]=useState([])
  const [device37,DeviceData37]=useState([])
  const [device38,DeviceData38]=useState([])
  const [device39,DeviceData39]=useState([])
  const [device40,DeviceData40]=useState([])
  const [device41,DeviceData41]=useState([])
  const [device42,DeviceData42]=useState([])
  const [device43,DeviceData43]=useState([])
  const [device44,DeviceData44]=useState([])
  const [device45,DeviceData45]=useState([])
  const [device46,DeviceData46]=useState([])
  const [device47,DeviceData47]=useState([])
  const [device48,DeviceData48]=useState([])
  const [device49,DeviceData49]=useState([])
  const [device50,DeviceData50]=useState([])
  const [device51,DeviceData51]=useState([])
  const [device52,DeviceData52]=useState([])
  const [device53,DeviceData53]=useState([])
  const [device54,DeviceData54]=useState([])
  const [device55,DeviceData55]=useState([])
  const [device56,DeviceData56]=useState([])
  const [device57,DeviceData57]=useState([])
  const [device58,DeviceData58]=useState([])
  const [device59,DeviceData59]=useState([])
  const [device60,DeviceData60]=useState([])

  useEffect(()=>{
    fetchData();
    DeviceData();
    const data = setInterval(fetchData,2000)
    const device = setInterval(()=>DeviceData(device),2000)
    return()=>{
      clearInterval(data);
      clearInterval(device)
    }
  },[device])

  const DeviceData = async(info) =>{
    if (info && info.device) {
      const sensorData = info.device;
      if (sensorData.length > 0) {
        const lastData = sensorData[0];
        console.log(lastData)
      
       
      } else {
        console.log(`Error: No data available for `);
      }
    } else {
      console.log(`Error: Unexpected response format for `);
    }

  }

  const dashboard_data =(value)=>{
    try{

      setR_N(value)
    }catch(error){
    }
  }


  const fetchData = async () => {
    try {
   
      const response = await fetch('http://localhost:2001/LastData');
      const info = await response.json();
      
      DeviceData(info);
 


      const device1_lastdata = info.sensor1 && info.sensor1.length > 0 ? info.sensor1[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device2_lastdata = info.sensor2 && info.sensor2.length > 0 ? info.sensor2[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device3_lastdata = info.sensor3 && info.sensor3.length > 0 ? info.sensor3[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device4_lastdata = info.sensor4 && info.sensor4.length > 0 ? info.sensor4[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device5_lastdata = info.sensor5 && info.sensor5.length > 0 ? info.sensor5[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device6_lastdata = info.sensor6 && info.sensor6.length > 0 ? info.sensor6[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device7_lastdata = info.sensor7 && info.sensor7.length > 0 ? info.sensor7[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device8_lastdata = info.sensor8 && info.sensor8.length > 0 ? info.sensor8[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device9_lastdata = info.sensor9 && info.sensor9.length > 0 ? info.sensor9[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device10_lastdata = info.sensor10 && info.sensor10.length > 0 ? info.sensor10[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device11_lastdata = info.sensor11 && info.sensor11.length > 0 ? info.sensor11[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device12_lastdata = info.sensor12 && info.sensor12.length > 0 ? info.sensor12[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device13_lastdata = info.sensor13 && info.sensor13.length > 0 ? info.sensor13[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device14_lastdata = info.sensor14 && info.sensor14.length > 0 ? info.sensor14[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device15_lastdata = info.sensor15 && info.sensor15.length > 0 ? info.sensor15[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device16_lastdata = info.sensor16 && info.sensor16.length > 0 ? info.sensor16[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device17_lastdata = info.sensor17 && info.sensor17.length > 0 ? info.sensor17[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device18_lastdata = info.sensor18 && info.sensor18.length > 0 ? info.sensor18[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device19_lastdata = info.sensor19 && info.sensor19.length > 0 ? info.sensor19[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device20_lastdata = info.sensor20 && info.sensor20.length > 0 ? info.sensor20[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device21_lastdata = info.sensor21 && info.sensor21.length > 0 ? info.sensor21[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device22_lastdata = info.sensor22 && info.sensor22.length > 0 ? info.sensor22[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device23_lastdata = info.sensor23 && info.sensor23.length > 0 ? info.sensor23[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device24_lastdata = info.sensor24 && info.sensor24.length > 0 ? info.sensor24[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device25_lastdata = info.sensor25 && info.sensor25.length > 0 ? info.sensor25[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device26_lastdata = info.sensor26 && info.sensor26.length > 0 ? info.sensor26[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device27_lastdata = info.sensor27 && info.sensor27.length > 0 ? info.sensor27[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device28_lastdata = info.sensor28 && info.sensor28.length > 0 ? info.sensor28[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device29_lastdata = info.sensor29 && info.sensor29.length > 0 ? info.sensor29[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device30_lastdata = info.sensor30 && info.sensor30.length > 0 ? info.sensor30[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device31_lastdata = info.sensor31 && info.sensor31.length > 0 ? info.sensor31[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device32_lastdata = info.sensor32 && info.sensor32.length > 0 ? info.sensor32[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device33_lastdata = info.sensor33 && info.sensor33.length > 0 ? info.sensor33[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device34_lastdata = info.sensor34 && info.sensor34.length > 0 ? info.sensor34[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device35_lastdata = info.sensor35 && info.sensor35.length > 0 ? info.sensor35[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device36_lastdata = info.sensor36 && info.sensor36.length > 0 ? info.sensor36[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device37_lastdata = info.sensor37 && info.sensor37.length > 0 ? info.sensor37[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device38_lastdata = info.sensor38 && info.sensor38.length > 0 ? info.sensor38[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device39_lastdata = info.sensor39 && info.sensor39.length > 0 ? info.sensor39[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device40_lastdata = info.sensor40 && info.sensor40.length > 0 ? info.sensor40[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device41_lastdata = info.sensor41 && info.sensor41.length > 0 ? info.sensor41[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device42_lastdata = info.sensor42 && info.sensor42.length > 0 ? info.sensor42[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device43_lastdata = info.sensor43 && info.sensor43.length > 0 ? info.sensor43[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device44_lastdata = info.sensor44 && info.sensor44.length > 0 ? info.sensor44[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device45_lastdata = info.sensor45 && info.sensor45.length > 0 ? info.sensor45[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device46_lastdata = info.sensor46 && info.sensor46.length > 0 ? info.sensor46[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device47_lastdata = info.sensor47 && info.sensor47.length > 0 ? info.sensor47[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device48_lastdata = info.sensor48 && info.sensor48.length > 0 ? info.sensor48[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device49_lastdata = info.sensor49 && info.sensor49.length > 0 ? info.sensor49[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device50_lastdata = info.sensor50 && info.sensor50.length > 0 ? info.sensor50[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device51_lastdata = info.sensor51 && info.sensor51.length > 0 ? info.sensor51[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device52_lastdata = info.sensor52 && info.sensor52.length > 0 ? info.sensor52[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device53_lastdata = info.sensor53 && info.sensor53.length > 0 ? info.sensor53[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device54_lastdata = info.sensor54 && info.sensor54.length > 0 ? info.sensor54[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device55_lastdata = info.sensor55 && info.sensor55.length > 0 ? info.sensor55[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device56_lastdata = info.sensor56 && info.sensor56.length > 0 ? info.sensor56[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device57_lastdata = info.sensor57 && info.sensor57.length > 0 ? info.sensor57[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device58_lastdata = info.sensor58 && info.sensor58.length > 0 ? info.sensor58[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device59_lastdata = info.sensor59 && info.sensor59.length > 0 ? info.sensor59[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };
      const device60_lastdata = info.sensor60 && info.sensor60.length > 0 ? info.sensor60[0] : { R_N: '-', sensor1: '-', sensor2: '-', sensor3: '-', sensor4: '-', sensor5: '-', time: '-' };


      DeviceData1(device1_lastdata);
      DeviceData2(device2_lastdata);
      DeviceData3(device3_lastdata);
      DeviceData4(device4_lastdata);
      DeviceData5(device5_lastdata);
      DeviceData6(device6_lastdata);
      DeviceData7(device7_lastdata);
      DeviceData8(device8_lastdata);
      DeviceData9(device9_lastdata);
      DeviceData10(device10_lastdata);
      DeviceData11(device11_lastdata);
      DeviceData12(device12_lastdata);
      DeviceData13(device13_lastdata);
      DeviceData14(device14_lastdata);
      DeviceData15(device15_lastdata);
      DeviceData16(device16_lastdata);
      DeviceData17(device17_lastdata);
      DeviceData18(device18_lastdata);
      DeviceData19(device19_lastdata);
      DeviceData20(device20_lastdata);
      DeviceData21(device21_lastdata);
      DeviceData22(device22_lastdata);
      DeviceData23(device23_lastdata);
      DeviceData24(device24_lastdata);
      DeviceData25(device25_lastdata);
      DeviceData26(device26_lastdata);
      DeviceData27(device27_lastdata);
      DeviceData28(device28_lastdata);
      DeviceData29(device29_lastdata);
      DeviceData30(device30_lastdata);
      DeviceData31(device31_lastdata);
      DeviceData32(device32_lastdata);
      DeviceData33(device33_lastdata);
      DeviceData34(device34_lastdata);
      DeviceData35(device35_lastdata);
      DeviceData36(device36_lastdata);
      DeviceData37(device37_lastdata);
      DeviceData38(device38_lastdata);
      DeviceData39(device39_lastdata);
      DeviceData40(device40_lastdata);
      DeviceData41(device41_lastdata);
      DeviceData42(device42_lastdata);
      DeviceData43(device43_lastdata);
      DeviceData44(device44_lastdata);
      DeviceData45(device45_lastdata);
      DeviceData46(device46_lastdata);
      DeviceData47(device47_lastdata);
      DeviceData48(device48_lastdata);
      DeviceData49(device49_lastdata);
      DeviceData50(device50_lastdata);

      DeviceData51(device51_lastdata);
      DeviceData52(device52_lastdata);
      DeviceData53(device53_lastdata);
      DeviceData54(device54_lastdata);
      DeviceData55(device55_lastdata);
      DeviceData56(device56_lastdata);
      DeviceData57(device57_lastdata);
      DeviceData58(device58_lastdata);
      DeviceData59(device59_lastdata);
      DeviceData60(device60_lastdata);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  
  const chartOptions = {
      grid: {
        show: false,
      },
      series: [
        {
          name: 'thickness',
          style: {
            colors: '#ffffff'
          },
          data: [600,800,24,1000],
        },
      ],
      chart: {
        height: 700,
        type: 'area',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        categories:[12,45,23,34],
        labels: {
          style: {
            colors: '#ffffff', 
          },
        },
      },
      yaxis:{
        labels:{
          style:{
            colors:'#ffffff'
          }
        }
      },
    };


    const getBackgroundColor = (value) => {
      return value > 50 ? 'bg-red-500' : ''; 
    };




  return (
    <div className="text-center">
        <h1 className="text-2xl font-sans font-bold mt-10 tracking-normal">
        IOCL HALDIA - REFORMER TUBE TEMPERATURE MEASUREMENT
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 mt-4">
            <div className="mb-4 md:mb-0  bg-dark_color rounded-lg">
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-4 ml-5 mr-5">
                    <h1 className="text-white p-4 justify-self-start">REFORMER TUBE</h1>
                    <div className="bg-gray-200 p-4 ">REPORTS</div>
                </div>
                <div className="grid grid-cols-5 md:grid-cols-5 gap-4 mt-4 ml-5 mr-5">
                    <div className="bg-gray-200 p-4">Column 1</div>
                    <div className="bg-gray-200 p-4">Column 2</div>
                    <div className="bg-gray-200 p-4">Column 3</div>
                    <div className="bg-gray-200 p-4">Column 4</div>
                    <div className="bg-gray-200 p-4">Column 5</div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-4 ml-5 mr-5">
                <h2 className="text-lg font-semibold mb-2 text-white justify-self-start ml-10 ">First Chart</h2>
                    <button className='bg-red-300 justify-self-end mr-10 w-32'>Submit</button>
                  
                </div>
                <div className="mb-4 mt-3">
                  <div className=''>
                    <ReactApexChart options={chartOptions} series={chartOptions.series} type='area' />
                  </div>
                </div>
            </div>

            {/* Second Column */}
            <div className="grid grid-cols-2 gap-4 ">
              {/* First Column */}
              <div className="col-span-1 overflow-x-auto bg-dark_color w-full  max-h-screen overflow-y-auto rounded-lg">
                {/* Your 31x6 table content for the first column */}
                <table className="border-collapse table_border  table-auto w-full">
                  <tbody>
                  <tr>
                      <th className='w-3'>R.N</th>
                      <th>Sensor1</th>
                      <th>Sensor2</th>
                      <th>Sensor3</th>
                      <th>Sensor4</th>
                      <th>Sensor5</th>
                    </tr>
                  <tr>
                    <td onClick={()=>dashboard_data('01')}>1</td>
                    <td className={getBackgroundColor(device1.sensor1)}>{device1.sensor1}</td>
                    <td className={getBackgroundColor(device1.sensor2)}>{device1.sensor2}</td>
                    <td className={getBackgroundColor(device1.sensor3)}>{device1.sensor3}</td>
                    <td className={getBackgroundColor(device1.sensor4)}>{device1.sensor4}</td>
                    <td className={getBackgroundColor(device1.sensor5)}>{device1.sensor5}</td> 
                  </tr>
                  <tr>
                    <td onClick={()=>dashboard_data('02')}>2</td>
                    <td className={getBackgroundColor(device2.sensor1)}>{device2.sensor1}</td>
                    <td className={getBackgroundColor(device2.sensor2)}>{device2.sensor2}</td>
                    <td className={getBackgroundColor(device2.sensor3)}>{device2.sensor3}</td>
                    <td className={getBackgroundColor(device2.sensor4)}>{device2.sensor4}</td>
                    <td className={getBackgroundColor(device2.sensor5)}>{device2.sensor5}</td> 
                  </tr>
                  <tr onClick={()=>dashboard_data('03')}>
                    <td>3</td>
                    <td className={getBackgroundColor(device3.sensor1)}>{device3.sensor1}</td>
                    <td className={getBackgroundColor(device3.sensor2)}>{device3.sensor2}</td>
                    <td className={getBackgroundColor(device3.sensor3)}>{device3.sensor3}</td>
                    <td className={getBackgroundColor(device3.sensor4)}>{device3.sensor4}</td>
                    <td className={getBackgroundColor(device3.sensor5)}>{device3.sensor5}</td> 
                  </tr>
                  <tr>
                    <td>4</td>
                    <td className={getBackgroundColor(device4.sensor1)}>{device4.sensor1}</td>
                    <td className={getBackgroundColor(device4.sensor2)}>{device4.sensor2}</td>
                    <td className={getBackgroundColor(device4.sensor3)}>{device4.sensor3}</td>
                    <td className={getBackgroundColor(device4.sensor4)}>{device4.sensor4}</td>
                    <td className={getBackgroundColor(device4.sensor5)}>{device4.sensor5}</td> 
                  </tr>
                  <tr>
                    <td>5</td>
                    <td className={getBackgroundColor(device5.sensor1)}>{device5.sensor1}</td>
                    <td className={getBackgroundColor(device5.sensor2)}>{device5.sensor2}</td>
                    <td className={getBackgroundColor(device5.sensor3)}>{device5.sensor3}</td>
                    <td className={getBackgroundColor(device5.sensor4)}>{device5.sensor4}</td>
                    <td className={getBackgroundColor(device5.sensor5)}>{device5.sensor5}</td> 
                  </tr>
                  <tr>
                    <td>6</td>
                    <td className={getBackgroundColor(device6.sensor1)}>{device6.sensor1}</td>
                    <td className={getBackgroundColor(device6.sensor2)}>{device6.sensor2}</td>
                    <td className={getBackgroundColor(device6.sensor3)}>{device6.sensor3}</td>
                    <td className={getBackgroundColor(device6.sensor4)}>{device6.sensor4}</td>
                    <td className={getBackgroundColor(device6.sensor5)}>{device6.sensor5}</td> 
                  </tr>
                  <tr>
                    <td>7</td>
                    <td className={getBackgroundColor(device7.sensor1)}>{device7.sensor1}</td>
                    <td className={getBackgroundColor(device7.sensor2)}>{device7.sensor2}</td>
                    <td className={getBackgroundColor(device7.sensor3)}>{device7.sensor3}</td>
                    <td className={getBackgroundColor(device7.sensor4)}>{device7.sensor4}</td>
                    <td className={getBackgroundColor(device7.sensor5)}>{device7.sensor5}</td> 
                  </tr>
                  <tr>
                    <td>8</td>
                    <td className={getBackgroundColor(device8.sensor1)}>{device8.sensor1}</td>
                    <td className={getBackgroundColor(device8.sensor2)}>{device8.sensor2}</td>
                    <td className={getBackgroundColor(device8.sensor3)}>{device8.sensor3}</td>
                    <td className={getBackgroundColor(device8.sensor4)}>{device8.sensor4}</td>
                    <td className={getBackgroundColor(device8.sensor5)}>{device8.sensor5}</td> 
                  </tr>

                  <tr>
                    <td>9</td>
                    <td className={getBackgroundColor(device9.sensor1)}>{device9.sensor1}</td>
                    <td className={getBackgroundColor(device9.sensor2)}>{device9.sensor2}</td>
                    <td className={getBackgroundColor(device9.sensor3)}>{device9.sensor3}</td>
                    <td className={getBackgroundColor(device9.sensor4)}>{device9.sensor4}</td>
                    <td className={getBackgroundColor(device9.sensor5)}>{device9.sensor5}</td> 
                  </tr>
                  <tr>
                    <td>10</td>
                    <td className={getBackgroundColor(device10.sensor1)}>{device10.sensor1}</td>
                    <td className={getBackgroundColor(device10.sensor2)}>{device10.sensor2}</td>
                    <td className={getBackgroundColor(device10.sensor3)}>{device10.sensor3}</td>
                    <td className={getBackgroundColor(device10.sensor4)}>{device10.sensor4}</td>
                    <td className={getBackgroundColor(device10.sensor5)}>{device10.sensor5}</td> 
                  </tr>

                   <tr>
                    <td>11</td>
                    <td className={getBackgroundColor(device11.sensor1)}>{device11.sensor1}</td>
                    <td className={getBackgroundColor(device11.sensor2)}>{device11.sensor2}</td>
                    <td className={getBackgroundColor(device11.sensor3)}>{device11.sensor3}</td>
                    <td className={getBackgroundColor(device11.sensor4)}>{device11.sensor4}</td>
                    <td className={getBackgroundColor(device11.sensor5)}>{device11.sensor5}</td> 
                  </tr>
                  <tr>
                    <td>12</td>
                    <td className={getBackgroundColor(device12.sensor1)}>{device12.sensor1}</td>
                    <td className={getBackgroundColor(device12.sensor2)}>{device12.sensor2}</td>
                    <td className={getBackgroundColor(device12.sensor3)}>{device12.sensor3}</td>
                    <td className={getBackgroundColor(device12.sensor4)}>{device12.sensor4}</td>
                    <td className={getBackgroundColor(device12.sensor5)}>{device12.sensor5}</td> 
                  </tr>
                  <tr>
                    <td>13</td>
                    <td className={getBackgroundColor(device13.sensor1)}>{device13.sensor1}</td>
                    <td className={getBackgroundColor(device13.sensor2)}>{device13.sensor2}</td>
                    <td className={getBackgroundColor(device13.sensor3)}>{device13.sensor3}</td>
                    <td className={getBackgroundColor(device13.sensor4)}>{device13.sensor4}</td>
                    <td className={getBackgroundColor(device13.sensor5)}>{device13.sensor5}</td> 
                  </tr>
                  <tr>
                    <td>14</td>
                    <td className={getBackgroundColor(device14.sensor1)}>{device14.sensor1}</td>
                    <td className={getBackgroundColor(device14.sensor2)}>{device14.sensor2}</td>
                    <td className={getBackgroundColor(device14.sensor3)}>{device14.sensor3}</td>
                    <td className={getBackgroundColor(device14.sensor4)}>{device14.sensor4}</td>
                    <td className={getBackgroundColor(device14.sensor5)}>{device14.sensor5}</td> 
                  </tr>
                  <tr>
                    <td>15</td>
                    <td className={getBackgroundColor(device15.sensor1)}>{device15.sensor1}</td>
                    <td className={getBackgroundColor(device15.sensor2)}>{device15.sensor2}</td>
                    <td className={getBackgroundColor(device15.sensor3)}>{device15.sensor3}</td>
                    <td className={getBackgroundColor(device15.sensor4)}>{device15.sensor4}</td>
                    <td className={getBackgroundColor(device15.sensor5)}>{device15.sensor5}</td> 
                  </tr>
                  <tr>
                    <td>16</td>
                    <td className={getBackgroundColor(device16.sensor1)}>{device16.sensor1}</td>
                    <td className={getBackgroundColor(device16.sensor2)}>{device16.sensor2}</td>
                    <td className={getBackgroundColor(device16.sensor3)}>{device16.sensor3}</td>
                    <td className={getBackgroundColor(device16.sensor4)}>{device16.sensor4}</td>
                    <td className={getBackgroundColor(device16.sensor5)}>{device16.sensor5}</td> 
                  </tr>
                  <tr>
                    <td>17</td>
                    <td className={getBackgroundColor(device17.sensor1)}>{device17.sensor1}</td>
                    <td className={getBackgroundColor(device17.sensor2)}>{device17.sensor2}</td>
                    <td className={getBackgroundColor(device17.sensor3)}>{device17.sensor3}</td>
                    <td className={getBackgroundColor(device17.sensor4)}>{device17.sensor4}</td>
                    <td className={getBackgroundColor(device17.sensor5)}>{device17.sensor5}</td> 
                  </tr>
                  <tr>
                    <td>18</td>
                    <td className={getBackgroundColor(device18.sensor1)}>{device18.sensor1}</td>
                    <td className={getBackgroundColor(device18.sensor2)}>{device18.sensor2}</td>
                    <td className={getBackgroundColor(device18.sensor3)}>{device18.sensor3}</td>
                    <td className={getBackgroundColor(device18.sensor4)}>{device18.sensor4}</td>
                    <td className={getBackgroundColor(device18.sensor5)}>{device18.sensor5}</td> 
                  </tr>
                  <tr>
                    <td>19</td>
                    <td className={getBackgroundColor(device19.sensor1)}>{device19.sensor1}</td>
                    <td className={getBackgroundColor(device19.sensor2)}>{device19.sensor2}</td>
                    <td className={getBackgroundColor(device19.sensor3)}>{device19.sensor3}</td>
                    <td className={getBackgroundColor(device19.sensor4)}>{device19.sensor4}</td>
                    <td className={getBackgroundColor(device19.sensor5)}>{device19.sensor5}</td> 
                  </tr>
                  <tr>
                    <td>20</td>
                    <td className={getBackgroundColor(device20.sensor1)}>{device20.sensor1}</td>
                    <td className={getBackgroundColor(device20.sensor2)}>{device20.sensor2}</td>
                    <td className={getBackgroundColor(device20.sensor3)}>{device20.sensor3}</td>
                    <td className={getBackgroundColor(device20.sensor4)}>{device20.sensor4}</td>
                    <td className={getBackgroundColor(device20.sensor5)}>{device20.sensor5}</td> 
                  </tr>

                  <tr>
                    <td>21</td>
                    <td className={getBackgroundColor(device21.sensor1)}>{device21.sensor1}</td>
                    <td className={getBackgroundColor(device21.sensor2)}>{device21.sensor2}</td>
                    <td className={getBackgroundColor(device21.sensor3)}>{device21.sensor3}</td>
                    <td className={getBackgroundColor(device21.sensor4)}>{device21.sensor4}</td>
                    <td className={getBackgroundColor(device21.sensor5)}>{device21.sensor5}</td> 
                  </tr>
                  <tr>
                    <td>22</td>
                    <td className={getBackgroundColor(device22.sensor1)}>{device22.sensor1}</td>
                    <td className={getBackgroundColor(device22.sensor2)}>{device22.sensor2}</td>
                    <td className={getBackgroundColor(device22.sensor3)}>{device22.sensor3}</td>
                    <td className={getBackgroundColor(device22.sensor4)}>{device22.sensor4}</td>
                    <td className={getBackgroundColor(device22.sensor5)}>{device22.sensor5}</td> 
                  </tr>
                  <tr>
                    <td>23</td>
                    <td className={getBackgroundColor(device23.sensor1)}>{device23.sensor1}</td>
                    <td className={getBackgroundColor(device23.sensor2)}>{device23.sensor2}</td>
                    <td className={getBackgroundColor(device23.sensor3)}>{device23.sensor3}</td>
                    <td className={getBackgroundColor(device23.sensor4)}>{device23.sensor4}</td>
                    <td className={getBackgroundColor(device23.sensor5)}>{device23.sensor5}</td> 
                  </tr>
                  <tr>
                    <td>24</td>
                    <td className={getBackgroundColor(device24.sensor1)}>{device24.sensor1}</td>
                    <td className={getBackgroundColor(device24.sensor2)}>{device24.sensor2}</td>
                    <td className={getBackgroundColor(device24.sensor3)}>{device24.sensor3}</td>
                    <td className={getBackgroundColor(device24.sensor4)}>{device24.sensor4}</td>
                    <td className={getBackgroundColor(device24.sensor5)}>{device24.sensor5}</td> 
                  </tr>
                  <tr>
                    <td>25</td>
                    <td className={getBackgroundColor(device25.sensor1)}>{device25.sensor1}</td>
                    <td className={getBackgroundColor(device25.sensor2)}>{device25.sensor2}</td>
                    <td className={getBackgroundColor(device25.sensor3)}>{device25.sensor3}</td>
                    <td className={getBackgroundColor(device25.sensor4)}>{device25.sensor4}</td>
                    <td className={getBackgroundColor(device25.sensor5)}>{device25.sensor5}</td> 
                  </tr>
                  <tr>
                    <td>26</td>
                    <td className={getBackgroundColor(device26.sensor1)}>{device26.sensor1}</td>
                    <td className={getBackgroundColor(device26.sensor2)}>{device26.sensor2}</td>
                    <td className={getBackgroundColor(device26.sensor3)}>{device26.sensor3}</td>
                    <td className={getBackgroundColor(device26.sensor4)}>{device26.sensor4}</td>
                    <td className={getBackgroundColor(device26.sensor5)}>{device26.sensor5}</td> 
                  </tr>
                  <tr>
                    <td>27</td>
                    <td className={getBackgroundColor(device27.sensor1)}>{device27.sensor1}</td>
                    <td className={getBackgroundColor(device27.sensor2)}>{device27.sensor2}</td>
                    <td className={getBackgroundColor(device27.sensor3)}>{device27.sensor3}</td>
                    <td className={getBackgroundColor(device27.sensor4)}>{device27.sensor4}</td>
                    <td className={getBackgroundColor(device27.sensor5)}>{device27.sensor5}</td> 
                  </tr>
                  <tr>
                    <td>28</td>
                    <td className={getBackgroundColor(device28.sensor1)}>{device28.sensor1}</td>
                    <td className={getBackgroundColor(device28.sensor2)}>{device28.sensor2}</td>
                    <td className={getBackgroundColor(device28.sensor3)}>{device28.sensor3}</td>
                    <td className={getBackgroundColor(device28.sensor4)}>{device28.sensor4}</td>
                    <td className={getBackgroundColor(device28.sensor5)}>{device28.sensor5}</td> 
                  </tr>
                  <tr>
                    <td>29</td>
                    <td className={getBackgroundColor(device29.sensor1)}>{device29.sensor1}</td>
                    <td className={getBackgroundColor(device29.sensor2)}>{device29.sensor2}</td>
                    <td className={getBackgroundColor(device29.sensor3)}>{device29.sensor3}</td>
                    <td className={getBackgroundColor(device29.sensor4)}>{device29.sensor4}</td>
                    <td className={getBackgroundColor(device29.sensor5)}>{device29.sensor5}</td> 
                  </tr>
                  <tr>
                    <td>30</td>
                    <td className={getBackgroundColor(device30.sensor1)}>{device30.sensor1}</td>
                    <td className={getBackgroundColor(device30.sensor2)}>{device30.sensor2}</td>
                    <td className={getBackgroundColor(device30.sensor3)}>{device30.sensor3}</td>
                    <td className={getBackgroundColor(device30.sensor4)}>{device30.sensor4}</td>
                    <td className={getBackgroundColor(device30.sensor5)}>{device30.sensor5}</td> 
                  </tr>
                  </tbody>
                </table>
              </div>



              {/* Second Column */}
              <div className="col-span-1 overflow-x-auto bg-dark_color w-full  max-h-screen overflow-y-auto rounded-lg">
                {/* Your 31x6 table content for the second column */}
                <table className="border-collapse table2_border  table-auto w-full">
                <tbody>
                    <tr>
                      <th className='w-3'>R.N</th>
                      <th>Sensor1</th>
                      <th>Sensor2</th>
                      <th>Sensor3</th>
                      <th>Sensor4</th>
                      <th>Sensor5</th>
                    </tr>
                 
                  <tr>
                    <td>31</td>
                    <td className={getBackgroundColor(device31.sensor1)}>{device31.sensor1}</td>
                    <td className={getBackgroundColor(device31.sensor2)}>{device31.sensor2}</td>
                    <td className={getBackgroundColor(device31.sensor3)}>{device31.sensor3}</td>
                    <td className={getBackgroundColor(device31.sensor4)}>{device31.sensor4}</td>
                    <td className={getBackgroundColor(device31.sensor5)}>{device31.sensor5}</td>
                  </tr>
                  <tr>
                    <td>32</td>
                    <td className={getBackgroundColor(device32.sensor1)}>{device32.sensor1}</td>
                    <td className={getBackgroundColor(device32.sensor2)}>{device32.sensor2}</td>
                    <td className={getBackgroundColor(device32.sensor3)}>{device32.sensor3}</td>
                    <td className={getBackgroundColor(device32.sensor4)}>{device32.sensor4}</td>
                    <td className={getBackgroundColor(device32.sensor5)}>{device32.sensor5}</td> 
                  </tr>
                  <tr>
                    <td>33</td>
                    <td className={getBackgroundColor(device33.sensor1)}>{device33.sensor1}</td>
                    <td className={getBackgroundColor(device33.sensor2)}>{device33.sensor2}</td>
                    <td className={getBackgroundColor(device33.sensor3)}>{device33.sensor3}</td>
                    <td className={getBackgroundColor(device33.sensor4)}>{device33.sensor4}</td>
                    <td className={getBackgroundColor(device33.sensor5)}>{device33.sensor5}</td> 
                  </tr>
                  <tr>
                    <td>34</td>
                    <td className={getBackgroundColor(device34.sensor1)}>{device34.sensor1}</td>
                    <td className={getBackgroundColor(device34.sensor2)}>{device34.sensor2}</td>
                    <td className={getBackgroundColor(device34.sensor3)}>{device34.sensor3}</td>
                    <td className={getBackgroundColor(device34.sensor4)}>{device34.sensor4}</td>
                    <td className={getBackgroundColor(device34.sensor5)}>{device34.sensor5}</td> 
                  </tr>
                  <tr>
                    <td>35</td>
                    <td className={getBackgroundColor(device35.sensor1)}>{device35.sensor1}</td>
                    <td className={getBackgroundColor(device35.sensor2)}>{device35.sensor2}</td>
                    <td className={getBackgroundColor(device35.sensor3)}>{device35.sensor3}</td>
                    <td className={getBackgroundColor(device35.sensor4)}>{device35.sensor4}</td>
                    <td className={getBackgroundColor(device35.sensor5)}>{device35.sensor5}</td> 
                  </tr>
                  <tr>
                    <td>36</td>
                    <td className={getBackgroundColor(device36.sensor1)}>{device36.sensor1}</td>
                    <td className={getBackgroundColor(device36.sensor2)}>{device36.sensor2}</td>
                    <td className={getBackgroundColor(device36.sensor3)}>{device36.sensor3}</td>
                    <td className={getBackgroundColor(device36.sensor4)}>{device36.sensor4}</td>
                    <td className={getBackgroundColor(device36.sensor5)}>{device36.sensor5}</td> 
                  </tr>
                  <tr>
                    <td>37</td>
                    <td className={getBackgroundColor(device37.sensor1)}>{device37.sensor1}</td>
                    <td className={getBackgroundColor(device37.sensor2)}>{device37.sensor2}</td>
                    <td className={getBackgroundColor(device37.sensor3)}>{device37.sensor3}</td>
                    <td className={getBackgroundColor(device37.sensor4)}>{device37.sensor4}</td>
                    <td className={getBackgroundColor(device37.sensor5)}>{device37.sensor5}</td> 
                  </tr>
                  <tr>
                    <td>38</td>
                    <td className={getBackgroundColor(device38.sensor1)}>{device38.sensor1}</td>
                    <td className={getBackgroundColor(device38.sensor2)}>{device38.sensor2}</td>
                    <td className={getBackgroundColor(device38.sensor3)}>{device38.sensor3}</td>
                    <td className={getBackgroundColor(device38.sensor4)}>{device38.sensor4}</td>
                    <td className={getBackgroundColor(device38.sensor5)}>{device38.sensor5}</td> 
                  </tr>

                  <tr>
                    <td>39</td>
                    <td className={getBackgroundColor(device39.sensor1)}>{device39.sensor1}</td>
                    <td className={getBackgroundColor(device39.sensor2)}>{device39.sensor2}</td>
                    <td className={getBackgroundColor(device39.sensor3)}>{device39.sensor3}</td>
                    <td className={getBackgroundColor(device39.sensor4)}>{device39.sensor4}</td>
                    <td className={getBackgroundColor(device39.sensor5)}>{device39.sensor5}</td> 
                  </tr>
                  <tr>
                    <td>40</td>
                    <td className={getBackgroundColor(device40.sensor1)}>{device40.sensor1}</td>
                    <td className={getBackgroundColor(device40.sensor2)}>{device40.sensor2}</td>
                    <td className={getBackgroundColor(device40.sensor3)}>{device40.sensor3}</td>
                    <td className={getBackgroundColor(device40.sensor4)}>{device40.sensor4}</td>
                    <td className={getBackgroundColor(device40.sensor5)}>{device40.sensor5}</td> 
                  </tr>

                   <tr>
                    <td>41</td>
                    <td className={getBackgroundColor(device41.sensor1)}>{device41.sensor1}</td>
                    <td className={getBackgroundColor(device41.sensor2)}>{device41.sensor2}</td>
                    <td className={getBackgroundColor(device41.sensor3)}>{device41.sensor3}</td>
                    <td className={getBackgroundColor(device41.sensor4)}>{device41.sensor4}</td>
                    <td className={getBackgroundColor(device41.sensor5)}>{device41.sensor5}</td> 
                  </tr>
                  <tr>
                    <td>42</td>
                    <td className={getBackgroundColor(device42.sensor1)}>{device42.sensor1}</td>
                    <td className={getBackgroundColor(device42.sensor2)}>{device42.sensor2}</td>
                    <td className={getBackgroundColor(device42.sensor3)}>{device42.sensor3}</td>
                    <td className={getBackgroundColor(device42.sensor4)}>{device42.sensor4}</td>
                    <td className={getBackgroundColor(device42.sensor5)}>{device42.sensor5}</td> 
                  </tr>
                  <tr>
                    <td>43</td>
                    <td className={getBackgroundColor(device43.sensor1)}>{device43.sensor1}</td>
                    <td className={getBackgroundColor(device43.sensor2)}>{device43.sensor2}</td>
                    <td className={getBackgroundColor(device43.sensor3)}>{device43.sensor3}</td>
                    <td className={getBackgroundColor(device43.sensor4)}>{device43.sensor4}</td>
                    <td className={getBackgroundColor(device43.sensor5)}>{device43.sensor5}</td> 
                  </tr>
                  <tr>
                    <td>44</td>
                    <td className={getBackgroundColor(device44.sensor1)}>{device44.sensor1}</td>
                    <td className={getBackgroundColor(device44.sensor2)}>{device44.sensor2}</td>
                    <td className={getBackgroundColor(device44.sensor3)}>{device44.sensor3}</td>
                    <td className={getBackgroundColor(device44.sensor4)}>{device44.sensor4}</td>
                    <td className={getBackgroundColor(device44.sensor5)}>{device44.sensor5}</td> 
                  </tr>
                  <tr>
                    <td>45</td>
                    <td className={getBackgroundColor(device45.sensor1)}>{device45.sensor1}</td>
                    <td className={getBackgroundColor(device45.sensor2)}>{device45.sensor2}</td>
                    <td className={getBackgroundColor(device45.sensor3)}>{device45.sensor3}</td>
                    <td className={getBackgroundColor(device45.sensor4)}>{device45.sensor4}</td>
                    <td className={getBackgroundColor(device45.sensor5)}>{device45.sensor5}</td> 
                  </tr>
                  <tr>
                    <td>46</td>
                    <td className={getBackgroundColor(device46.sensor1)}>{device46.sensor1}</td>
                    <td className={getBackgroundColor(device46.sensor2)}>{device46.sensor2}</td>
                    <td className={getBackgroundColor(device46.sensor3)}>{device46.sensor3}</td>
                    <td className={getBackgroundColor(device46.sensor4)}>{device46.sensor4}</td>
                    <td className={getBackgroundColor(device46.sensor5)}>{device46.sensor5}</td> 
                  </tr>
                  <tr>
                    <td>47</td>
                    <td className={getBackgroundColor(device47.sensor1)}>{device47.sensor1}</td>
                    <td className={getBackgroundColor(device47.sensor2)}>{device47.sensor2}</td>
                    <td className={getBackgroundColor(device47.sensor3)}>{device47.sensor3}</td>
                    <td className={getBackgroundColor(device47.sensor4)}>{device47.sensor4}</td>
                    <td className={getBackgroundColor(device47.sensor5)}>{device47.sensor5}</td> 
                  </tr>
                  <tr>
                    <td>48</td>
                    <td className={getBackgroundColor(device48.sensor1)}>{device48.sensor1}</td>
                    <td className={getBackgroundColor(device48.sensor2)}>{device48.sensor2}</td>
                    <td className={getBackgroundColor(device48.sensor3)}>{device48.sensor3}</td>
                    <td className={getBackgroundColor(device48.sensor4)}>{device48.sensor4}</td>
                    <td className={getBackgroundColor(device48.sensor5)}>{device48.sensor5}</td> 
                  </tr>
                  <tr>
                    <td>49</td>
                    <td className={getBackgroundColor(device49.sensor1)}>{device49.sensor1}</td>
                    <td className={getBackgroundColor(device49.sensor2)}>{device49.sensor2}</td>
                    <td className={getBackgroundColor(device49.sensor3)}>{device49.sensor3}</td>
                    <td className={getBackgroundColor(device49.sensor4)}>{device49.sensor4}</td>
                    <td className={getBackgroundColor(device49.sensor5)}>{device49.sensor5}</td> 
                  </tr>
                  <tr>
                    <td>50</td>
                    <td className={getBackgroundColor(device50.sensor1)}>{device50.sensor1}</td>
                    <td className={getBackgroundColor(device50.sensor2)}>{device50.sensor2}</td>
                    <td className={getBackgroundColor(device50.sensor3)}>{device50.sensor3}</td>
                    <td className={getBackgroundColor(device50.sensor4)}>{device50.sensor4}</td>
                    <td className={getBackgroundColor(device50.sensor5)}>{device50.sensor5}</td> 
                  </tr>

                  <tr>
                    <td>51</td>
                    <td className={getBackgroundColor(device51.sensor1)}>{device51.sensor1}</td>
                    <td className={getBackgroundColor(device51.sensor2)}>{device51.sensor2}</td>
                    <td className={getBackgroundColor(device51.sensor3)}>{device51.sensor3}</td>
                    <td className={getBackgroundColor(device51.sensor4)}>{device51.sensor4}</td>
                    <td className={getBackgroundColor(device51.sensor5)}>{device51.sensor5}</td> 
                  </tr>
                  <tr>
                    <td>52</td>
                    <td className={getBackgroundColor(device52.sensor1)}>{device52.sensor1}</td>
                    <td className={getBackgroundColor(device52.sensor2)}>{device52.sensor2}</td>
                    <td className={getBackgroundColor(device52.sensor3)}>{device52.sensor3}</td>
                    <td className={getBackgroundColor(device52.sensor4)}>{device52.sensor4}</td>
                    <td className={getBackgroundColor(device52.sensor5)}>{device52.sensor5}</td> 
                  </tr>
                  <tr>
                    <td>53</td>
                    <td className={getBackgroundColor(device53.sensor1)}>{device53.sensor1}</td>
                    <td className={getBackgroundColor(device53.sensor2)}>{device53.sensor2}</td>
                    <td className={getBackgroundColor(device53.sensor3)}>{device53.sensor3}</td>
                    <td className={getBackgroundColor(device53.sensor4)}>{device53.sensor4}</td>
                    <td className={getBackgroundColor(device53.sensor5)}>{device53.sensor5}</td> 
                  </tr>
                  <tr>
                    <td>54</td>
                    <td className={getBackgroundColor(device54.sensor1)}>{device54.sensor1}</td>
                    <td className={getBackgroundColor(device54.sensor2)}>{device54.sensor2}</td>
                    <td className={getBackgroundColor(device54.sensor3)}>{device54.sensor3}</td>
                    <td className={getBackgroundColor(device54.sensor4)}>{device54.sensor4}</td>
                    <td className={getBackgroundColor(device54.sensor5)}>{device54.sensor5}</td> 
                  </tr>
                  <tr>
                    <td>55</td>
                    <td className={getBackgroundColor(device55.sensor1)}>{device55.sensor1}</td>
                    <td className={getBackgroundColor(device55.sensor2)}>{device55.sensor2}</td>
                    <td className={getBackgroundColor(device55.sensor3)}>{device55.sensor3}</td>
                    <td className={getBackgroundColor(device55.sensor4)}>{device55.sensor4}</td>
                    <td className={getBackgroundColor(device55.sensor5)}>{device55.sensor5}</td> 
                  </tr>
                  <tr>
                    <td>56</td>
                    <td className={getBackgroundColor(device56.sensor1)}>{device56.sensor1}</td>
                    <td className={getBackgroundColor(device56.sensor2)}>{device56.sensor2}</td>
                    <td className={getBackgroundColor(device56.sensor3)}>{device56.sensor3}</td>
                    <td className={getBackgroundColor(device56.sensor4)}>{device56.sensor4}</td>
                    <td className={getBackgroundColor(device56.sensor5)}>{device56.sensor5}</td> 
                  </tr>
                  <tr>
                    <td>57</td>
                    <td className={getBackgroundColor(device57.sensor1)}>{device57.sensor1}</td>
                    <td className={getBackgroundColor(device57.sensor2)}>{device57.sensor2}</td>
                    <td className={getBackgroundColor(device57.sensor3)}>{device57.sensor3}</td>
                    <td className={getBackgroundColor(device57.sensor4)}>{device57.sensor4}</td>
                    <td className={getBackgroundColor(device57.sensor5)}>{device57.sensor5}</td> 
                  </tr>
                  <tr>
                    <td>58</td>
                    <td className={getBackgroundColor(device58.sensor1)}>{device58.sensor1}</td>
                    <td className={getBackgroundColor(device58.sensor2)}>{device58.sensor2}</td>
                    <td className={getBackgroundColor(device58.sensor3)}>{device58.sensor3}</td>
                    <td className={getBackgroundColor(device58.sensor4)}>{device58.sensor4}</td>
                    <td className={getBackgroundColor(device58.sensor5)}>{device58.sensor5}</td> 
                  </tr>
                  <tr>
                    <td>59</td>
                    <td className={getBackgroundColor(device59.sensor1)}>{device59.sensor1}</td>
                    <td className={getBackgroundColor(device59.sensor2)}>{device59.sensor2}</td>
                    <td className={getBackgroundColor(device59.sensor3)}>{device59.sensor3}</td>
                    <td className={getBackgroundColor(device59.sensor4)}>{device59.sensor4}</td>
                    <td className={getBackgroundColor(device59.sensor5)}>{device59.sensor5}</td> 
                  </tr>
                  <tr>
                    <td>60</td>
                    <td className={getBackgroundColor(device60.sensor1)}>{device60.sensor1}</td>
                    <td className={getBackgroundColor(device60.sensor2)}>{device60.sensor2}</td>
                    <td className={getBackgroundColor(device60.sensor3)}>{device60.sensor3}</td>
                    <td className={getBackgroundColor(device60.sensor4)}>{device60.sensor4}</td>
                    <td className={getBackgroundColor(device60.sensor5)}>{device60.sensor5}</td> 
                  </tr>
                  
                  </tbody>
                </table>
              </div>
            </div>

        </div>
    </div>
);
};

export default Mainpage
