import React from "react";

import Style from "../modules/BalanceSheetGen.module.css";

export function BalanceSheetGen() {
  return (
    <div>
      {
        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <link
            type="text/css"
            rel="stylesheet"
            href="../modules/BalanceSheetGen.module.css"
          />
          <style type="text/css"></style>
        </head>
      }

      <body>
        <div className="ritz grid-container" dir="ltr">
          <table className={Style.ritz.waffle} cellspacing="2" cellpadding="5 ">
            <thead>
              <tr>
                <th className="row-header freezebar-origin-ltr"></th>
                <th
                  id="126933298C0"
                  className={Style.columnheadersbackground}
                ></th>
                <th
                  id="126933298C1"
                  //style="width:100px;"
                  className={Style.columnheadersbackground}
                ></th>
                <th
                  id="126933298C2"
                  //style="width:100px;"
                  className={Style.columnheadersbackground}
                ></th>
                <th
                  id="126933298C3"
                  //style="width:36px;"
                  className={Style.columnheadersbackground}
                ></th>
                <th
                  id="126933298C4"
                  //style="width:253px;"
                  className={Style.columnheadersbackground}
                ></th>
                <th
                  id="126933298C5"
                  //style="width:100px;"
                  className={Style.columnheadersbackground}
                ></th>
                <th
                  id="126933298C6"
                  //style="width:100px;"
                  className={Style.columnheadersbackground}
                ></th>
              </tr>
            </thead>
            <tbody>
              <tr /*style="height: 20px"*/>
                <th
                  id="126933298R0"
                  ////style="height: 20px;"
                  className="row-headers-background"
                >
                  <div
                    className="row-header-wrapper" /*style="line-height: 20px"*/
                  >
                    1
                  </div>
                </th>
                <td></td>
                <td className="s0" dir="ltr" colspan="4">
                  Balance sheet (in Cr.)
                </td>
                <td className="s1" dir="ltr"></td>
                <td className="s1" dir="ltr"></td>
                <td className="s1" dir="ltr"></td>
                <td className="s1" dir="ltr"></td>
              </tr>
              <tr /*style="height: 20px"*/>
                <th
                  id="126933298R1"
                  //style="height: 20px;"
                  className="row-headers-background"
                >
                  <div
                    className="row-header-wrapper" /*style="line-height: 20px"*/
                  >
                    2
                  </div>
                </th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr /*style="height: 20px"*/>
                <th
                  id="126933298R2"
                  //style="height: 20px;"
                  className="row-headers-background"
                >
                  <div
                    className="row-header-wrapper" /*style="line-height: 20px"*/
                  >
                    3
                  </div>
                </th>
                <td className="s2" dir="ltr">
                  EQUITIES AND LIABILITIES
                </td>
                <td className="s3" dir="ltr">
                  2020
                </td>
                <td className="s3" dir="ltr">
                  2019
                </td>
                <td></td>
                <td className="s2" dir="ltr">
                  ASSETS
                </td>
                <td className="s3" dir="ltr">
                  2020
                </td>
                <td className="s3" dir="ltr">
                  2019
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr /*style="height: 20px"*/>
                <th
                  id="126933298R3"
                  //style="height: 20px;"
                  className="row-headers-background"
                >
                  <div
                    className="row-header-wrapper" /*style="line-height: 20px"*/
                  >
                    4
                  </div>
                </th>
                <td className="s4" dir="ltr">
                  SHAREHOLDER&#39;S FUNDS
                </td>
                <td className="s4"></td>
                <td className="s4"></td>
                <td></td>
                <td className="s4" dir="ltr">
                  NON-CURRENT ASSETS
                </td>
                <td className="s4"></td>
                <td className="s4"></td>
                <td></td>
                <td></td>
              </tr>
              <tr /*style="height: 20px"*/>
                <th
                  id="126933298R4"
                  //style="height: 20px;"
                  className="row-headers-background"
                >
                  <div
                    className="row-header-wrapper" /*style="line-height: 20px"*/
                  >
                    5
                  </div>
                </th>
                <td className="s1" dir="ltr">
                  Equity Share Capital
                </td>
                <td className="s5" dir="ltr">
                  <input
                    type="number"
                    step="0.01"
                    className="sc20"
                    value="0.03"
                  />
                </td>
                <td className="s5" dir="ltr">
                  <input
                    type="number"
                    step="0.01"
                    className="sc19"
                    value="0.03"
                  />
                </td>
                <td></td>
                <td className="s1" dir="ltr">
                  Tangible Assets
                </td>
                <td className="s5" dir="ltr">
                  <input
                    type="number"
                    step="0.01"
                    className="ta20"
                    value="57.54"
                  />
                </td>
                <td className="s5" dir="ltr">
                  <input
                    type="number"
                    step="0.01"
                    className="ta19"
                    value="93.39"
                  />
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr /*style="height: 20px"*/>
                <th
                  id="126933298R5"
                  //style="height: 20px;"
                  className="row-headers-background"
                >
                  <div
                    className="row-header-wrapper" /*style="line-height: 20px"*/
                  >
                    6
                  </div>
                </th>
                <td className="s1" dir="ltr">
                  Total Share Capital
                </td>
                <td className="s5" dir="ltr">
                  <input
                    type="number"
                    step="0.01"
                    className="tsc20 lia201"
                    value="0.03"
                  />
                </td>
                <td className="s5" dir="ltr">
                  <input type="number" step="0.01" className="tsc19" />
                </td>
                <td></td>
                <td className="s1" dir="ltr">
                  Intangible Assets
                </td>
                <td className="s5" dir="ltr">
                  <input type="number" step="0.01" className="ia20" />
                </td>
                <td className="s5" dir="ltr">
                  <input
                    type="number"
                    step="0.01"
                    className="ia19"
                    value="1486.12"
                  />
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr /*style="height: 20px"*/>
                <th
                  id="126933298R6"
                  //style="height: 20px;"
                  className="row-headers-background"
                >
                  <div
                    className="row-header-wrapper" /*style="line-height: 20px"*/
                  >
                    7
                  </div>
                </th>
                <td className="s1" dir="ltr">
                  Reserves and Surplus
                </td>
                <td className="s5" dir="ltr">
                  <input
                    type="number"
                    step="0.01"
                    className="rf20"
                    value="7754.50"
                  />
                </td>
                <td className="s5" dir="ltr">
                  <input type="number" step="0.01" className="rf19" />
                </td>
                <td></td>
                <td className="s1" dir="ltr">
                  Capital Work-In-Progress
                </td>
                <td className="s5" dir="ltr">
                  <input
                    type="number"
                    step="0.01"
                    className="cwip20"
                    value="0"
                  />
                </td>
                <td className="s5" dir="ltr">
                  <input
                    type="number"
                    step="0.01"
                    className="cwip19"
                    value="0"
                  />
                </td>
                <td></td>
                <td className="s1" dir="ltr"></td>
              </tr>
              <tr /*style="height: 20px"*/>
                <th
                  id="126933298R7"
                  //style="height: 20px;"
                  className="row-headers-background"
                >
                  <div
                    className="row-header-wrapper" /*style="line-height: 20px"*/
                  >
                    8
                  </div>
                </th>
                <td className="s1" dir="ltr">
                  Total Reserves and Surplus
                </td>
                <td className="s5" dir="ltr">
                  <input
                    type="number"
                    step="0.01"
                    className="trf20 lia201"
                    value="7754.50"
                  />
                </td>
                <td className="s5" dir="ltr">
                  <input
                    type="number"
                    step="0.01"
                    className="trf19"
                    value="601.41"
                  />
                </td>
                <td></td>
                <td className="s1" dir="ltr">
                  Other Assets
                </td>
                <td className="s5" dir="ltr">
                  <input type="number" step="0.01" className="oa20" value="0" />
                </td>
                <td className="s5" dir="ltr">
                  <input type="number" step="0.01" className="oa19" value="0" />
                </td>
                <td></td>
                <td className="s1" dir="ltr"></td>
              </tr>
              <tr /*style="height: 20px"*/>
                <th
                  id="126933298R8"
                  //style="height: 20px;"
                  className="row-headers-background"
                >
                  <div
                    className="row-header-wrapper" /*style="line-height: 20px"*/
                  >
                    9
                  </div>
                </th>
                <td className="s1" dir="ltr">
                  Total Shareholders Funds
                </td>
                <td className="s5 form-group" dir="ltr">
                  <input
                    type="number"
                    step="0.01"
                    className="tsf20"
                    id="liasum201"
                    value="7754.53"
                  />
                </td>
                <td className="s5" dir="ltr">
                  <input
                    type="number"
                    step="0.01"
                    className="tsf19"
                    id="liasum191"
                    value="601.44"
                  />
                </td>
                <td></td>
                <td className="s1" dir="ltr">
                  Fixed Assets
                </td>
                <td className="s5" dir="ltr">
                  <input
                    type="number"
                    step="0.01"
                    className="fa20"
                    id="asssum201"
                    value="1450.64"
                  />
                </td>
                <td className="s5" dir="ltr">
                  <input
                    type="number"
                    step="0.01"
                    className="fa19"
                    id="asssum191"
                    value="1580.28"
                  />
                </td>
                <td></td>
                <td className="s1" dir="ltr"></td>
              </tr>
              <tr /*style="height: 20px"*/>
                <th
                  id="126933298R9"
                  //style="height: 20px;"
                  className="row-headers-background"
                >
                  <div
                    className="row-header-wrapper" /*style="line-height: 20px"*/
                  >
                    10
                  </div>
                </th>
                <td className="s4" dir="ltr">
                  NON-CURRENT LIABILITIES
                </td>
                <td className="s4"></td>
                <td></td>
                <td></td>
                <td className="s1" dir="ltr">
                  Non-Current Investments
                </td>
                <td className="s5" dir="ltr">
                  <input
                    type="number"
                    step="0.01"
                    className="nci20"
                    value="311.74"
                  />
                </td>
                <td className="s5" dir="ltr">
                  <input type="number" className="nci19" value="200.31" />
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr /*style="height: 20px"*/>
                <th
                  id="126933298R10"
                  //style="height: 20px;"
                  className="row-headers-background"
                >
                  <div
                    className="row-header-wrapper" /*style="line-height: 20px"*/
                  >
                    11
                  </div>
                </th>
                <td className="s1" dir="ltr">
                  Long Term Borrowings
                </td>
                <td className="s5" dir="ltr">
                  <input
                    type="number"
                    step="0.01"
                    className="ltb20"
                    value="0"
                  />
                </td>
                <td className="s5" dir="ltr">
                  <input
                    type="number"
                    step="0.01"
                    className="ltb19"
                    value="0"
                  />
                </td>
                <td></td>
                <td className="s1" dir="ltr">
                  Deferred Tax Assets [Net]
                </td>
                <td className="s5" dir="ltr">
                  <input type="number" className="dta20" value="0" />
                </td>
                <td className="s5" dir="ltr">
                  <input type="number" className="dta19" value="0" />
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr /*style="height: 20px"*/>
                <th
                  id="126933298R11"
                  //style="height: 20px;"
                  className="row-headers-background"
                >
                  <div
                    className="row-header-wrapper" /*style="line-height: 20px"*/
                  >
                    12
                  </div>
                </th>
                <td className="s1" dir="ltr">
                  Deferred Tax Liabilities [Net]
                </td>
                <td className="s5" dir="ltr">
                  <input
                    type="number"
                    step="0.01"
                    className="dtl20"
                    value="0"
                  />
                </td>
                <td className="s5" dir="ltr">
                  <input
                    type="number"
                    step="0.01"
                    className="dtl19"
                    value="0"
                  />
                </td>
                <td></td>
                <td className="s1" dir="ltr">
                  Long Term Loans And Advances
                </td>
                <td className="s5" dir="ltr">
                  <input type="number" className="ltlaa20" value="0" />
                </td>
                <td className="s5" dir="ltr">
                  <input type="number" className="ltlaa19" value="0" />
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr /*style="height: 20px"*/>
                <th
                  id="126933298R12"
                  //style="height: 20px;"
                  className="row-headers-background"
                >
                  <div
                    className="row-header-wrapper" /*style="line-height: 20px"*/
                  >
                    13
                  </div>
                </th>
                <td className="s1" dir="ltr">
                  Other Long Term Liabilities
                </td>
                <td className="s5" dir="ltr">
                  <input
                    type="number"
                    step="0.01"
                    className="otll20"
                    value="46.69"
                  />
                </td>
                <td className="s5" dir="ltr">
                  <input
                    type="number"
                    step="0.01"
                    className="otll19"
                    value="1456.06"
                  />
                </td>
                <td></td>
                <td className="s1" dir="ltr">
                  Other Non-Current Assets
                </td>
                <td className="s5" dir="ltr">
                  <input type="number" className="onca20" value="3009.91" />
                </td>
                <td className="s5" dir="ltr">
                  <input type="number" className="onca19" value="22.7" />
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr /*style="height: 20px"*/>
                <th
                  id="126933298R13"
                  //style="height: 20px;"
                  className="row-headers-background"
                >
                  <div
                    className="row-header-wrapper" /*style="line-height: 20px"*/
                  >
                    14
                  </div>
                </th>
                <td className="s1" dir="ltr">
                  Long Term Provisions
                </td>
                <td className="s5" dir="ltr">
                  <input
                    type="number"
                    step="0.01"
                    className="ltp20"
                    value="19.73"
                  />
                </td>
                <td className="s5" dir="ltr">
                  <input
                    type="number"
                    step="0.01"
                    className="ltp19"
                    value="12.87"
                  />
                </td>
                <td></td>
                <td className="s1" dir="ltr">
                  Total Non-Current Assets
                </td>
                <td className="s5" dir="ltr">
                  <input type="number" className="tnca20" value="4772.29" />
                </td>
                <td className="s5" dir="ltr">
                  <input type="number" className="tnca19" value="1803.29" />
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr /*style="height: 20px"*/>
                <th
                  id="126933298R14"
                  //style="height: 20px;"
                  className="row-headers-background"
                >
                  <div
                    className="row-header-wrapper" /*style="line-height: 20px"*/
                  >
                    15
                  </div>
                </th>
                <td className="s1" dir="ltr">
                  Total Non-Current Liabilities
                </td>
                <td className="s5" dir="ltr">
                  <input
                    type="number"
                    step="0.01"
                    className="tncl20"
                    value="66.41"
                  />
                </td>
                <td className="s5" dir="ltr">
                  <input
                    type="number"
                    step="0.01"
                    className="tncl19"
                    value="1468.93"
                  />
                </td>
                <td></td>
                <td className="s1" dir="ltr"></td>
                <td className="s1"></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr /*style="height: 20px"*/>
                <th
                  id="126933298R15"
                  //style="height: 20px;"
                  className="row-headers-background"
                >
                  <div
                    className="row-header-wrapper" /*style="line-height: 20px"*/
                  >
                    16
                  </div>
                </th>
                <td className="s4" dir="ltr">
                  CURRENT LIABILITIES
                </td>
                <td className="s4"></td>
                <td></td>
                <td></td>
                <td className="s4" dir="ltr">
                  CURRENT ASSETS
                </td>
                <td className="s4"></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr /*style="height: 20px"*/>
                <th
                  id="126933298R16"
                  //style="height: 20px;"
                  className="row-headers-background"
                >
                  <div
                    className="row-header-wrapper" /*style="line-height: 20px"*/
                  >
                    17
                  </div>
                </th>
                <td className="s1" dir="ltr">
                  Short Term Borrowings
                </td>
                <td className="s5" dir="ltr">
                  <input
                    type="number"
                    step="0.01"
                    className="stb20"
                    value="0"
                  />
                </td>
                <td className="s5" dir="ltr">
                  <input
                    type="number"
                    step="0.01"
                    className="stb19"
                    value="0"
                  />
                </td>
                <td></td>
                <td className="s1" dir="ltr">
                  Current Investments
                </td>
                <td className="s5" dir="ltr">
                  <input type="number" className="ci20" value="2194.11" />
                </td>
                <td className="s5" dir="ltr">
                  <input type="number" className="ci19" value="323.92" />
                </td>
                <td className="s1" dir="ltr"></td>
                <td></td>
              </tr>
              <tr /*style="height: 20px"*/>
                <th
                  id="126933298R17"
                  //style="height: 20px;"
                  className="row-headers-background"
                >
                  <div
                    className="row-header-wrapper" /*style="line-height: 20px"*/
                  >
                    18
                  </div>
                </th>
                <td className="s1" dir="ltr">
                  Trade Payables
                </td>
                <td className="s5" dir="ltr">
                  <input
                    type="number"
                    step="0.01"
                    className="tp20"
                    value="274.07"
                  />
                </td>
                <td className="s5" dir="ltr">
                  <input
                    type="number"
                    step="0.01"
                    className="tp19"
                    value="256.8"
                  />
                </td>
                <td></td>
                <td className="s1" dir="ltr">
                  Inventories
                </td>
                <td className="s5" dir="ltr">
                  <input type="number" step="0.01" className="i20" value="0" />
                </td>
                <td className="s5" dir="ltr">
                  <input type="number" step="0.01" className="i19" value="0" />
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr /*style="height: 20px"*/>
                <th
                  id="126933298R18"
                  //style="height: 20px;"
                  className="row-headers-background"
                >
                  <div
                    className="row-header-wrapper" /*style="line-height: 20px"*/
                  >
                    19
                  </div>
                </th>
                <td className="s1" dir="ltr">
                  Other Current Liabilities
                </td>
                <td className="s5" dir="ltr">
                  <input
                    type="number"
                    step="0.01"
                    className="ocl20"
                    value="193.45"
                  />
                </td>
                <td className="s5" dir="ltr">
                  <input
                    type="number"
                    step="0.01"
                    className="ocl19"
                    value="400.83"
                  />
                </td>
                <td></td>
                <td className="s1" dir="ltr">
                  Trade Receivables
                </td>
                <td className="s5" dir="ltr">
                  <input
                    type="number"
                    step="0.01"
                    className="tr20"
                    value="123.71"
                  />
                </td>
                <td className="s5" dir="ltr">
                  <input
                    type="number"
                    step="0.01"
                    className="tr19"
                    value="132.72"
                  />
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr /*style="height: 20px"*/>
                <th
                  id="126933298R19"
                  //style="height: 20px;"
                  className="row-headers-background"
                >
                  <div
                    className="row-header-wrapper" /*style="line-height: 20px"*/
                  >
                    20
                  </div>
                </th>
                <td className="s1" dir="ltr">
                  Short Term Provisions
                </td>
                <td className="s5" dir="ltr">
                  <input
                    type="number"
                    step="0.01"
                    className="stp20"
                    value="4.85"
                  />
                </td>
                <td className="s5" dir="ltr">
                  <input
                    type="number"
                    step="0.01"
                    className="stp19"
                    value="4.95"
                  />
                </td>
                <td></td>
                <td className="s1" dir="ltr">
                  Cash And Cash Equivalents
                </td>
                <td className="s5" dir="ltr">
                  <input
                    type="number"
                    step="0.01"
                    className="cace20"
                    value="765.18"
                  />
                </td>
                <td className="s5" dir="ltr">
                  <input
                    type="number"
                    step="0.01"
                    className="cace19"
                    value="279.38"
                  />
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr /*style="height: 20px"*/>
                <th
                  id="126933298R20"
                  //style="height: 20px;"
                  className="row-headers-background"
                >
                  <div
                    className="row-header-wrapper" /*style="line-height: 20px"*/
                  >
                    21
                  </div>
                </th>
                <td className="s1" dir="ltr">
                  Total Current Liabilities
                </td>
                <td className="s5" dir="ltr">
                  <input
                    type="number"
                    step="0.01"
                    className="tcl20"
                    value="472.37"
                  />
                </td>
                <td className="s5" dir="ltr">
                  <input
                    type="number"
                    step="0.01"
                    className="tcl19"
                    value="662.57"
                  />
                </td>
                <td></td>
                <td className="s1" dir="ltr">
                  Short Term Loans And Advances
                </td>
                <td className="s5" dir="ltr">
                  <input type="number" className="stlaa20" value="40" />
                </td>
                <td className="s5" dir="ltr">
                  <input type="number" className="stlaa19" value="31.02" />
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr /*style="height: 20px"*/>
                <th
                  id="126933298R21"
                  //style="height: 20px;"
                  className="row-headers-background"
                >
                  <div
                    className="row-header-wrapper" /*style="line-height: 20px"*/
                  >
                    22
                  </div>
                </th>
                <td className="s6" dir="ltr">
                  Total Capital And Liabilities
                </td>
                <td className="s5" dir="ltr">
                  <input
                    type="number"
                    step="0.01"
                    className="tcal20"
                    value="8748.24"
                  />
                </td>
                <td className="s5" dir="ltr">
                  <input
                    type="number"
                    step="0.01"
                    className="tcal19"
                    value="2985.35"
                  />
                </td>
                <td></td>
                <td className="s1" dir="ltr">
                  OtherCurrentAssets
                </td>
                <td className="s5" dir="ltr">
                  <input type="number" className="oca20" value="852.95" />
                </td>
                <td className="s5" dir="ltr">
                  <input type="number" className="oca19" value="415.03" />
                </td>
                <td></td>
                <td className="s1" dir="ltr"></td>
              </tr>
              <tr /*style="height: 20px"*/>
                <th
                  id="126933298R22"
                  //style="height: 20px;"
                  className="row-headers-background"
                >
                  <div
                    className="row-header-wrapper" /*style="line-height: 20px"*/
                  >
                    23
                  </div>
                </th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="s1" dir="ltr">
                  Total Current Assets
                </td>
                <td className="s5" dir="ltr">
                  <input type="number" className="tca20" value="3975.95" />
                </td>
                <td className="s5" dir="ltr">
                  <input type="number" className="tca19" value="1182.06" />
                </td>
                <td className="s1" dir="ltr"></td>
                <td></td>
              </tr>
              <tr /*style="height: 20px"*/>
                <th
                  id="126933298R23"
                  //style="height: 20px;"
                  className="row-headers-background"
                >
                  <div
                    className="row-header-wrapper" /*style="line-height: 20px"*/
                  >
                    24
                  </div>
                </th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="s6" dir="ltr">
                  Total Assets
                </td>
                <td className="s5" dir="ltr">
                  <input type="number" className="ta20" value="8748.24" />
                </td>
                <td className="s5" dir="ltr">
                  <input type="number" className="ta19" value="2985.35" />
                </td>
                <td className="s1" dir="ltr"></td>
                <td></td>
              </tr>
              <tr /*style="height: 20px"*/>
                <th
                  id="126933298R24"
                  //style="height: 20px;"
                  className="row-headers-background"
                >
                  <div
                    className="row-header-wrapper" /*style="line-height: 20px"*/
                  >
                    25
                  </div>
                </th>
                <td className="s1" dir="ltr"></td>
                <td className="s1"></td>
                <td className="s1"></td>
                <td className="s1"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="s1"></td>
              </tr>
              <tr /*style="height: 20px"*/>
                <th
                  id="126933298R25"
                  //style="height: 20px;"
                  className="row-headers-background"
                >
                  <div
                    className="row-header-wrapper" /*style="line-height: 20px"*/
                  >
                    26
                  </div>
                </th>
                <td className="s6" dir="ltr">
                  Balance Carry Down (c/d)
                </td>
                <td className="s5" dir="ltr">
                  <input
                    type="number"
                    readonly="true"
                    step="0.01"
                    className="diff"
                    value="0.00"
                  />
                </td>
                <td className="s1" dir="ltr"></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr /*style="height: 20px"*/>
                <th
                  id="126933298R26"
                  //style="height: 20px;"
                  className="row-headers-background"
                >
                  <div
                    className="row-header-wrapper" /*style="line-height: 20px"*/
                  >
                    27
                  </div>
                </th>
                <td className="s1"></td>
                <td className="s1"></td>
                <td className="s1"></td>
                <td className="s1"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="s1"></td>
              </tr>
              <tr /*style="height: 20px"*/>
                <th
                  id="126933298R27"
                  //style="height: 20px;"
                  className="row-headers-background"
                >
                  <div
                    className="row-header-wrapper" /*style="line-height: 20px"*/
                  >
                    28
                  </div>
                </th>
                <td className="s1"></td>
                <td className="s1"></td>
                <td className="s1"></td>
                <td className="s1"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="s1"></td>
              </tr>
              <tr>
                <th
                  id="126933298R48"
                  //style="height: 20px;"
                  className="row-headers-background"
                >
                  <div
                    className="row-header-wrapper" /*style="line-height: 20px"*/
                  >
                    49
                  </div>
                </th>
                <td className="s1"></td>
                <td className="s1"></td>
                <td className="s1"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="s1"></td>
              </tr>
              <tr /*style="height: 20px"*/>
                <th
                  id="126933298R49"
                  //style="height: 20px;"
                  className="row-headers-background"
                >
                  <div
                    className="row-header-wrapper" /*style="line-height: 20px"*/
                  >
                    50
                  </div>
                </th>
                <td className="s1"></td>
                <td className="s1"></td>
                <td className="s1"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="s1"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </body>

      <>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script type="text/javascript" src="script.js"></script>
      </>
    </div>
  );
}
