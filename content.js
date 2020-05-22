// FOR SOME REASON WHEN I TRY TO RUN ALL OF THESE
// WITHIN A SINGLE ADD LISTENER FUNCTION, THEY DON'T WORK
// I'M NOT SURE WHY - WHEN I SPLIT THEM OUT INTO THEIR OWN
// IT WORKS FINE - MIGHT BE WORTH A REFACTOR

chrome.runtime.onMessage.addListener((formData) => {
  let valueArray = formData.split("||")
  console.log("HOLY SHIT WE MADE IT")
  if (formData.includes("||") === true){
    //FIRST AUDIENCE
    document.querySelector("#app > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-App__appMainContainer__conent--8g7Ev > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div > div > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__header--Dw_Uk > div > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__header__title--3G7mP > span > a").innerHTML = valueArray[1]

    document.querySelector("#app > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-App__appMainContainer__conent--8g7Ev > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div > div > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__rightSideWrapper--2aRmc > div > div:nth-child(1) > div > div").innerHTML = valueArray[2]

    document.querySelector("#app > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-App__appMainContainer__conent--8g7Ev > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div > div > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__rightSideWrapper--2aRmc > div > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__cell__number--1j-Il").innerHTML = valueArray[3]

    document.querySelector("#app > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-App__appMainContainer__conent--8g7Ev > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div > div > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__rightSideWrapper--2aRmc > div > div:nth-child(3) > div > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__cell__number--1j-Il").innerHTML = valueArray[4]

    document.querySelector("#app > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-App__appMainContainer__conent--8g7Ev > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div > div > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__rightSideWrapper--2aRmc > div > div:nth-child(4) > div > div").innerHTML = valueArray[5]

    // SECOND AUDIENCE
    document.querySelector("#app > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-App__appMainContainer__conent--8g7Ev > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div > div > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__header--Dw_Uk > div > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__header__title--3G7mP > span > a").innerHTML = valueArray[6]

    document.querySelector("#app > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-App__appMainContainer__conent--8g7Ev > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div > div > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__rightSideWrapper--2aRmc > div > div:nth-child(1) > div > div").innerHTML = valueArray[7]

    document.querySelector("#app > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-App__appMainContainer__conent--8g7Ev > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div > div > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__rightSideWrapper--2aRmc > div > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__cell__number--1j-Il").innerHTML = valueArray[8]

    document.querySelector("#app > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-App__appMainContainer__conent--8g7Ev > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div > div > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__rightSideWrapper--2aRmc > div > div:nth-child(3) > div > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__cell__number--1j-Il").innerHTML = valueArray[9]

    document.querySelector("#app > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-App__appMainContainer__conent--8g7Ev > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div > div > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__rightSideWrapper--2aRmc > div > div:nth-child(4) > div > div").innerHTML = valueArray[10]

    // THIRD AUDIENCE
    document.querySelector("#app > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-App__appMainContainer__conent--8g7Ev > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div > div > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__header--Dw_Uk > div > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__header__title--3G7mP > span > a").innerHTML = valueArray[11]

    document.querySelector("#app > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-App__appMainContainer__conent--8g7Ev > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div > div > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__rightSideWrapper--2aRmc > div > div:nth-child(1) > div > div").innerHTML = valueArray[12]

    document.querySelector("#app > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-App__appMainContainer__conent--8g7Ev > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div > div > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__rightSideWrapper--2aRmc > div > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__cell__number--1j-Il").innerHTML = valueArray[13]

    document.querySelector("#app > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-App__appMainContainer__conent--8g7Ev > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div > div > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__rightSideWrapper--2aRmc > div > div:nth-child(3) > div > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__cell__number--1j-Il").innerHTML = valueArray[14]

    document.querySelector("#app > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-App__appMainContainer__conent--8g7Ev > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div > div > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__rightSideWrapper--2aRmc > div > div:nth-child(4) > div > div").innerHTML = valueArray[15]

    // FOURTH AUDIENCE
    document.querySelector("#app > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-App__appMainContainer__conent--8g7Ev > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div > div > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__header--Dw_Uk > div > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__header__title--3G7mP > span > a").innerHTML = valueArray[16]

    document.querySelector("#app > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-App__appMainContainer__conent--8g7Ev > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div > div > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__rightSideWrapper--2aRmc > div > div:nth-child(1) > div > div").innerHTML = valueArray[17]

    document.querySelector("#app > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-App__appMainContainer__conent--8g7Ev > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div > div > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__rightSideWrapper--2aRmc > div > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__cell__number--1j-Il").innerHTML = valueArray[18]

    document.querySelector("#app > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-App__appMainContainer__conent--8g7Ev > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div > div > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__rightSideWrapper--2aRmc > div > div:nth-child(3) > div > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__cell__number--1j-Il").innerHTML = valueArray[19]

    document.querySelector("#app > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-App__appMainContainer__conent--8g7Ev > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div > div > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__rightSideWrapper--2aRmc > div > div:nth-child(4) > div > div").innerHTML = valueArray[20]

    // FIFTH AUDIENCE
    document.querySelector("#app > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-App__appMainContainer__conent--8g7Ev > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(3) > div > div > div > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__header--Dw_Uk > div > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__header__title--3G7mP > span > a").innerHTML = valueArray[21]

    document.querySelector("#app > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-App__appMainContainer__conent--8g7Ev > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(3) > div > div > div > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__rightSideWrapper--2aRmc > div > div:nth-child(1) > div > div").innerHTML = valueArray[22]

    document.querySelector("#app > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-App__appMainContainer__conent--8g7Ev > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(3) > div > div > div > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__rightSideWrapper--2aRmc > div > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__cell__number--1j-Il").innerHTML = valueArray[23]

    document.querySelector("#app > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-App__appMainContainer__conent--8g7Ev > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(3) > div > div > div > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__rightSideWrapper--2aRmc > div > div:nth-child(3) > div > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__cell__number--1j-Il").innerHTML = valueArray[24]

    document.querySelector("#app > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-App__appMainContainer__conent--8g7Ev > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(3) > div > div > div > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__rightSideWrapper--2aRmc > div > div:nth-child(4) > div > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__cell__number--1j-Il").innerHTML = valueArray[25]
  }
})

chrome.runtime.onMessage.addListener((formData) => {
  // this splits out values out of string format back into array format for easier usage
  if (formData.includes("//") === true){
    let valueArray = formData.split("//")

  // FIRST AUDIENCE NAME CHANGE
    document.querySelector('#app > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-App__appMainContainer__conent--8g7Ev > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container--yWWMK.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container_expanded--j_aiz > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__wrapper--2c8gy > div > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__header--Dw_Uk > div > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__header__title--3G7mP > span > a').innerHTML = valueArray[1]
  }
})

chrome.runtime.onMessage.addListener((formData) => {
  if (formData.includes("//") === true){
    let valueArray = formData.split("//")

    // FIRST AUDIENCE NUMBER OF ACCOUNTS
    document.querySelector('#app > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-App__appMainContainer__conent--8g7Ev > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div > div > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__rightSideWrapper--2aRmc > div > div:nth-child(1) > div > div').innerHTML = valueArray[2]
  }
})

chrome.runtime.onMessage.addListener((formData) => {
  if (formData.includes("//") === true){
    let valueArray = formData.split("//")
    let barPercentage =  (parseInt(valueArray[3])) / (parseInt(valueArray[2])) * 100

    // FIRST AUDIENCE VISITED WEBSITE
    document.querySelector('#app > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-App__appMainContainer__conent--8g7Ev > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container--yWWMK.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container_expanded--j_aiz > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__wrapper--2c8gy > div > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__rightSideWrapper--2aRmc > div > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__cell__number--1j-Il').innerHTML = valueArray[3]

    // FIRST AUDIENCE VISITED WEBSITE BAR
    document.querySelector('#app > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-App__appMainContainer__conent--8g7Ev > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container--yWWMK.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container_expanded--j_aiz > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__wrapper--2c8gy > div > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__rightSideWrapper--2aRmc > div > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__cell__chart--103AG > div > div').outerHTML = "<div class='frontend-js-components-audiences-audiences-ui-SmallBarChart-SmallBarChart__chartContainer__bar--1UJnt' style='width: " + barPercentage + "%; height: 5px; background-color: rgb(255, 138, 0); border-radius: 0px;'></div>"
  }
})

chrome.runtime.onMessage.addListener((formData) => {
  if (formData.includes("//") === true){
    let valueArray = formData.split("//")
    let barPercentage =  (parseInt(valueArray[4])) / (parseInt(valueArray[2])) * 100

    // FIRST AUDIENCE ENGAGED ON WEBSITE
    document.querySelector('#app > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-App__appMainContainer__conent--8g7Ev > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container--yWWMK.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container_expanded--j_aiz > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__wrapper--2c8gy > div > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__rightSideWrapper--2aRmc > div > div:nth-child(3) > div > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__cell__number--1j-Il').innerHTML = valueArray[4]

    // FIRST AUDIENCE ENGAGED ON WEBSITE BAR
    document.querySelector('#app > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-App__appMainContainer__conent--8g7Ev > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container--yWWMK.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container_expanded--j_aiz > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__wrapper--2c8gy > div > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__rightSideWrapper--2aRmc > div > div:nth-child(3) > div > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__cell__chart--103AG > div > div').outerHTML = "<div class='frontend-js-components-audiences-audiences-ui-SmallBarChart-SmallBarChart__chartContainer__bar--1UJnt' style='width:" + barPercentage + "%; height: 5px; background-color: rgb(255, 138, 0); border-radius: 0px;'></div>"
  }
})

chrome.runtime.onMessage.addListener((formData) => {
  if (formData.includes("//") === true){
    let valueArray = formData.split("//")

    //FIRST AUDIENCE TOTAL PAGEVIEWS
    document.querySelector('#app > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-App__appMainContainer__conent--8g7Ev > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container--yWWMK.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container_expanded--j_aiz > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__wrapper--2c8gy > div > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__rightSideWrapper--2aRmc > div > div:nth-child(4) > div > div').innerHTML = valueArray[5]
  }
})

chrome.runtime.onMessage.addListener((formData) => {
  if (formData.includes("//") === true){
    // OPPORTUNITY BAR CHANGES
    let valueArray = formData.split("//")
    document.querySelector('.frontend-js-components-reporting-view-View__mainContainer--3KOXd > div > div').style = ""

    document.querySelector('.frontend-js-components-reporting-view-View__mainContainer--3KOXd > div > div').classList.add("frontend-js-components-reporting-totals-totalsStats-TotalsStats__totalStats_wrapper--3rcC0")

    document.querySelector('.frontend-js-components-reporting-view-View__mainContainer--3KOXd > div > div').innerHTML = ""

    document.querySelector('.frontend-js-components-reporting-view-View__mainContainer--3KOXd > div > div').innerHTML = "<div class='_2P9F1lsO73MwzBQmpFy1y_ color-icon'><div class='frontend-js-components-reporting-totals-totalsStats-TotalsStats__totalStats_item--VxKi8'><div class='frontend-js-components-reporting-totals-totalsStats-TotalsStats__totalStats_item_value--WrrT3'>$" + valueArray[9] + "</div><div class='frontend-js-components-reporting-totals-totalsStats-TotalsStats__totalStats_item_description--1uCPF'>Total Won (USD)</div></div></div><div class='_2P9F1lsO73MwzBQmpFy1y_ color-icon'><div class='frontend-js-components-reporting-totals-totalsStats-TotalsStats__totalStats_item--VxKi8'><div class='frontend-js-components-reporting-totals-totalsStats-TotalsStats__totalStats_item_value--WrrT3'>" + valueArray[10] + "%</div><div class='frontend-js-components-reporting-totals-totalsStats-TotalsStats__totalStats_item_description--1uCPF'>Opportunity Close Rate</div></div></div><div class='_2P9F1lsO73MwzBQmpFy1y_ color-icon'><div class='frontend-js-components-reporting-totals-totalsStats-TotalsStats__totalStats_item--VxKi8'><div class='frontend-js-components-reporting-totals-totalsStats-TotalsStats__totalStats_item_value--WrrT3'>$" + valueArray[11] + "</div><div class='frontend-js-components-reporting-totals-totalsStats-TotalsStats__totalStats_item_description--1uCPF'>Total Pipeline</div></div></div><div class='_2P9F1lsO73MwzBQmpFy1y_ color-icon'><div class='frontend-js-components-reporting-totals-totalsStats-TotalsStats__totalStats_item--VxKi8'><div class='frontend-js-components-reporting-totals-totalsStats-TotalsStats__totalStats_item_value--WrrT3'>$" + valueArray[12] + "</div><div class='frontend-js-components-reporting-totals-totalsStats-TotalsStats__totalStats_item_description--1uCPF'>Average Deal Size</div></div></div>"
  }
})

chrome.runtime.onMessage.addListener((formData) => {
  if (formData.includes("//") === true){
    let valueArray = formData.split("//")

    // ALL ACCOUNTS NUMBERS
    document.querySelector('#app > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-App__appMainContainer__conent--8g7Ev > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container--yWWMK.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container_expanded--j_aiz > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__expandBlock--3RmnN > div > div.frontend-js-components-audiences-audiences-table-ItemTabs-ItemTabs__tabsContainer__content--HWyJg > div > div > div > div:nth-child(2) > div > div > div > div:nth-child(2) > div.chart-wrapper > div > div:nth-child(1) > div > div > span > div > a').outerHTML = "<a class='frontend-js-components-reporting-chart-Histogram__barLink--2WtdS' href='/accountlist/135574/view/?' style='color: rgb(255, 255, 255);'>" + valueArray[2] + "</a>"
  }
})

chrome.runtime.onMessage.addListener((formData) => {
  if (formData.includes("//") === true){
    let valueArray = formData.split("//")
    let barPercentage =  (parseInt(valueArray[3])) / (parseInt(valueArray[2])) * 100
    // VISITED WEBSITE
      document.querySelector('#app > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-App__appMainContainer__conent--8g7Ev > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container--yWWMK.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container_expanded--j_aiz > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__expandBlock--3RmnN > div > div.frontend-js-components-audiences-audiences-table-ItemTabs-ItemTabs__tabsContainer__content--HWyJg > div > div > div > div:nth-child(2) > div > div > div > div:nth-child(2) > div.chart-wrapper > div > div:nth-child(2) > div > div.frontend-js-components-reporting-chart-Histogram__histogramWrapper_dbLine--3l62h.frontend-js-components-reporting-chart-Histogram__histogram_isShowComparison--100rm.frontend-js-components-reporting-chart-Histogram__histogram_isTab--1vOjp').style = "background: rgb(0, 78, 136); width: " + barPercentage + "%"

    if (barPercentage >= 10){
      document.querySelector('#app > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-App__appMainContainer__conent--8g7Ev > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container--yWWMK.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container_expanded--j_aiz > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__expandBlock--3RmnN > div > div.frontend-js-components-audiences-audiences-table-ItemTabs-ItemTabs__tabsContainer__content--HWyJg > div > div > div > div:nth-child(2) > div > div > div > div:nth-child(2) > div.chart-wrapper > div > div:nth-child(2) > div > div.frontend-js-components-reporting-chart-Histogram__histogramWrapper_dbLine--3l62h.frontend-js-components-reporting-chart-Histogram__histogram_isShowComparison--100rm.frontend-js-components-reporting-chart-Histogram__histogram_isTab--1vOjp').innerHTML = "<span><div class='_2P9F1lsO73MwzBQmpFy1y_ color-icon'><a class='frontend-js-components-reporting-chart-Histogram__barLink--2WtdS' href='/accountlist/209102/view/?&amp;filter=%5B%7B%22field_name%22%3A%22account_stage%22%2C%22condition%22%3A%5B%22on_site%20has%22%5D%2C%22value%22%3A%5B%5D%2C%22enddate%22%3A%222020-05-21%22%2C%22startdate%22%3A%222020-04-21%22%7D%5D' style='color: rgb(255, 255, 255);'>" + valueArray[3] + "</a></div></span>"

      document.querySelector('#app > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-App__appMainContainer__conent--8g7Ev > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container--yWWMK.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container_expanded--j_aiz > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__expandBlock--3RmnN > div > div.frontend-js-components-audiences-audiences-table-ItemTabs-ItemTabs__tabsContainer__content--HWyJg > div > div > div > div:nth-child(2) > div > div > div > div:nth-child(2) > div.chart-wrapper > div > div:nth-child(2) > div > div.frontend-js-components-reporting-chart-Histogram__barValue__outBar--2Nn-h').style = "display: none"
    }
    else {
      document.querySelector('#app > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-App__appMainContainer__conent--8g7Ev > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container--yWWMK.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container_expanded--j_aiz > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__expandBlock--3RmnN > div > div.frontend-js-components-audiences-audiences-table-ItemTabs-ItemTabs__tabsContainer__content--HWyJg > div > div > div > div:nth-child(2) > div > div > div > div:nth-child(2) > div.chart-wrapper > div > div:nth-child(2) > div > div.frontend-js-components-reporting-chart-Histogram__barValue__outBar--2Nn-h > span > div > a').innerHTML = valueArray[3]
    }
  }
})

chrome.runtime.onMessage.addListener((formData) => {
  if (formData.includes("//") === true){
    let valueArray = formData.split("//")
    let barPercentage =  (parseInt(valueArray[4])) / (parseInt(valueArray[2])) * 100
    // ENGAGED ON WEBSITE
    document.querySelector('#app > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-App__appMainContainer__conent--8g7Ev > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container--yWWMK.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container_expanded--j_aiz > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__expandBlock--3RmnN > div > div.frontend-js-components-audiences-audiences-table-ItemTabs-ItemTabs__tabsContainer__content--HWyJg > div > div > div > div:nth-child(2) > div > div > div > div:nth-child(2) > div.chart-wrapper > div > div:nth-child(3) > div > div.frontend-js-components-reporting-chart-Histogram__histogramWrapper_dbLine--3l62h.frontend-js-components-reporting-chart-Histogram__histogram_isShowComparison--100rm.frontend-js-components-reporting-chart-Histogram__histogram_isTab--1vOjp').style = "background: rgb(0, 78, 136); width: " + barPercentage + "%;"

    if (barPercentage >= 10){
      document.querySelector('#app > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-App__appMainContainer__conent--8g7Ev > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container--yWWMK.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container_expanded--j_aiz > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__expandBlock--3RmnN > div > div.frontend-js-components-audiences-audiences-table-ItemTabs-ItemTabs__tabsContainer__content--HWyJg > div > div > div > div:nth-child(2) > div > div > div > div:nth-child(2) > div.chart-wrapper > div > div:nth-child(3) > div > div.frontend-js-components-reporting-chart-Histogram__histogramWrapper_dbLine--3l62h.frontend-js-components-reporting-chart-Histogram__histogram_isShowComparison--100rm.frontend-js-components-reporting-chart-Histogram__histogram_isTab--1vOjp').innerHTML = "<span><div class='_2P9F1lsO73MwzBQmpFy1y_ color-icon'><a class='frontend-js-components-reporting-chart-Histogram__barLink--2WtdS' href='/accountlist/209102/view/?&amp;filter=%5B%7B%22field_name%22%3A%22account_stage%22%2C%22condition%22%3A%5B%22on_site%20has%22%5D%2C%22value%22%3A%5B%5D%2C%22enddate%22%3A%222020-05-21%22%2C%22startdate%22%3A%222020-04-21%22%7D%5D' style='color: rgb(255, 255, 255);'>" + valueArray[4] + "</a></div></span>"

      document.querySelector('#app > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-App__appMainContainer__conent--8g7Ev > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container--yWWMK.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container_expanded--j_aiz > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__expandBlock--3RmnN > div > div.frontend-js-components-audiences-audiences-table-ItemTabs-ItemTabs__tabsContainer__content--HWyJg > div > div > div > div:nth-child(2) > div > div > div > div:nth-child(2) > div.chart-wrapper > div > div:nth-child(3) > div > div.frontend-js-components-reporting-chart-Histogram__barValue__outBar--2Nn-h').style = "display: none"
    }

    else {
      document.querySelector('#app > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-App__appMainContainer__conent--8g7Ev > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container--yWWMK.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container_expanded--j_aiz > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__expandBlock--3RmnN > div > div.frontend-js-components-audiences-audiences-table-ItemTabs-ItemTabs__tabsContainer__content--HWyJg > div > div > div > div:nth-child(2) > div > div > div > div:nth-child(2) > div.chart-wrapper > div > div:nth-child(3) > div > div.frontend-js-components-reporting-chart-Histogram__barValue__outBar--2Nn-h > span > div > a').innerHTML = valueArray[4]
    }
  }
})

chrome.runtime.onMessage.addListener((formData) => {
  if (formData.includes("//") === true){
    let valueArray = formData.split("//")
    let barPercentage =  (parseInt(valueArray[6])) / (parseInt(valueArray[2])) * 100
    // CONVERTED ON WEBSITE
    document.querySelector('#app > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-App__appMainContainer__conent--8g7Ev > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container--yWWMK.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container_expanded--j_aiz > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__expandBlock--3RmnN > div > div.frontend-js-components-audiences-audiences-table-ItemTabs-ItemTabs__tabsContainer__content--HWyJg > div > div > div > div:nth-child(2) > div > div > div > div:nth-child(2) > div.chart-wrapper > div > div:nth-child(4) > div > div.frontend-js-components-reporting-chart-Histogram__histogramWrapper_dbLine--3l62h.frontend-js-components-reporting-chart-Histogram__histogram_isShowComparison--100rm.frontend-js-components-reporting-chart-Histogram__histogram_isTab--1vOjp').style = "background: rgb(0, 78, 136); width: " + barPercentage + "%;"

    if (barPercentage >= 10){
      document.querySelector('#app > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-App__appMainContainer__conent--8g7Ev > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container--yWWMK.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container_expanded--j_aiz > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__expandBlock--3RmnN > div > div.frontend-js-components-audiences-audiences-table-ItemTabs-ItemTabs__tabsContainer__content--HWyJg > div > div > div > div:nth-child(2) > div > div > div > div:nth-child(2) > div.chart-wrapper > div > div:nth-child(4) > div > div.frontend-js-components-reporting-chart-Histogram__histogramWrapper_dbLine--3l62h.frontend-js-components-reporting-chart-Histogram__histogram_isShowComparison--100rm.frontend-js-components-reporting-chart-Histogram__histogram_isTab--1vOjp').innerHTML = "<span><div class='_2P9F1lsO73MwzBQmpFy1y_ color-icon'><a class='frontend-js-components-reporting-chart-Histogram__barLink--2WtdS' href='/accountlist/209102/view/?&amp;filter=%5B%7B%22field_name%22%3A%22account_stage%22%2C%22condition%22%3A%5B%22on_site%20has%22%5D%2C%22value%22%3A%5B%5D%2C%22enddate%22%3A%222020-05-21%22%2C%22startdate%22%3A%222020-04-21%22%7D%5D' style='color: rgb(255, 255, 255);'>" + valueArray[6] + "</a></div></span>"

      document.querySelector('#app > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-App__appMainContainer__conent--8g7Ev > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container--yWWMK.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container_expanded--j_aiz > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__expandBlock--3RmnN > div > div.frontend-js-components-audiences-audiences-table-ItemTabs-ItemTabs__tabsContainer__content--HWyJg > div > div > div > div:nth-child(2) > div > div > div > div:nth-child(2) > div.chart-wrapper > div > div:nth-child(4) > div > div.frontend-js-components-reporting-chart-Histogram__barValue__outBar--2Nn-h').style = "display: none"
    }
    else {
      document.querySelector('#app > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-App__appMainContainer__conent--8g7Ev > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container--yWWMK.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container_expanded--j_aiz > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__expandBlock--3RmnN > div > div.frontend-js-components-audiences-audiences-table-ItemTabs-ItemTabs__tabsContainer__content--HWyJg > div > div > div > div:nth-child(2) > div > div > div > div:nth-child(2) > div.chart-wrapper > div > div:nth-child(4) > div > div.frontend-js-components-reporting-chart-Histogram__barValue__outBar--2Nn-h > span > div > a').innerHTML = valueArray[6]
    }
  }

})

chrome.runtime.onMessage.addListener((formData) => {
  if (formData.includes("//") === true){
    let valueArray = formData.split("//")
    let barPercentage =  (parseInt(valueArray[7])) / (parseInt(valueArray[2])) * 100
    // OPPORTUNITY
    document.querySelector('#app > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-App__appMainContainer__conent--8g7Ev > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container--yWWMK.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container_expanded--j_aiz > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__expandBlock--3RmnN > div > div.frontend-js-components-audiences-audiences-table-ItemTabs-ItemTabs__tabsContainer__content--HWyJg > div > div > div > div:nth-child(2) > div > div > div > div:nth-child(2) > div.chart-wrapper > div > div:nth-child(5) > div > div.frontend-js-components-reporting-chart-Histogram__histogramWrapper_dbLine--3l62h.frontend-js-components-reporting-chart-Histogram__histogram_isShowComparison--100rm.frontend-js-components-reporting-chart-Histogram__histogram_isTab--1vOjp').style = "background: rgb(0, 78, 136); width: " + barPercentage + "%;"

    if (barPercentage >= 10){
      document.querySelector('#app > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-App__appMainContainer__conent--8g7Ev > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container--yWWMK.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container_expanded--j_aiz > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__expandBlock--3RmnN > div > div.frontend-js-components-audiences-audiences-table-ItemTabs-ItemTabs__tabsContainer__content--HWyJg > div > div > div > div:nth-child(2) > div > div > div > div:nth-child(2) > div.chart-wrapper > div > div:nth-child(5) > div > div.frontend-js-components-reporting-chart-Histogram__histogramWrapper_dbLine--3l62h.frontend-js-components-reporting-chart-Histogram__histogram_isShowComparison--100rm.frontend-js-components-reporting-chart-Histogram__histogram_isTab--1vOjp').innerHTML = "<span><div class='_2P9F1lsO73MwzBQmpFy1y_ color-icon'><a class='frontend-js-components-reporting-chart-Histogram__barLink--2WtdS' href='/accountlist/209102/view/?&amp;filter=%5B%7B%22field_name%22%3A%22account_stage%22%2C%22condition%22%3A%5B%22on_site%20has%22%5D%2C%22value%22%3A%5B%5D%2C%22enddate%22%3A%222020-05-21%22%2C%22startdate%22%3A%222020-04-21%22%7D%5D' style='color: rgb(255, 255, 255);'>" + valueArray[7] + "</a></div></span>"

      document.querySelector('#app > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-App__appMainContainer__conent--8g7Ev > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container--yWWMK.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container_expanded--j_aiz > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__expandBlock--3RmnN > div > div.frontend-js-components-audiences-audiences-table-ItemTabs-ItemTabs__tabsContainer__content--HWyJg > div > div > div > div:nth-child(2) > div > div > div > div:nth-child(2) > div.chart-wrapper > div > div:nth-child(5) > div > div.frontend-js-components-reporting-chart-Histogram__barValue__outBar--2Nn-h').style = "display: none"
    }
    else {
      document.querySelector('#app > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-App__appMainContainer__conent--8g7Ev > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container--yWWMK.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container_expanded--j_aiz > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__expandBlock--3RmnN > div > div.frontend-js-components-audiences-audiences-table-ItemTabs-ItemTabs__tabsContainer__content--HWyJg > div > div > div > div:nth-child(2) > div > div > div > div:nth-child(2) > div.chart-wrapper > div > div:nth-child(5) > div > div.frontend-js-components-reporting-chart-Histogram__barValue__outBar--2Nn-h > span > div > a').innerHTML = valueArray[7]
    }
  }
})

chrome.runtime.onMessage.addListener((formData) => {
  if (formData.includes("//") === true){
    let valueArray = formData.split("//")
    let barPercentage =  (parseInt(valueArray[8])) / (parseInt(valueArray[2])) * 100
    // WON
    document.querySelector('#app > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-App__appMainContainer__conent--8g7Ev > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container--yWWMK.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container_expanded--j_aiz > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__expandBlock--3RmnN > div > div.frontend-js-components-audiences-audiences-table-ItemTabs-ItemTabs__tabsContainer__content--HWyJg > div > div > div > div:nth-child(2) > div > div > div > div:nth-child(2) > div.chart-wrapper > div > div:nth-child(6) > div > div.frontend-js-components-reporting-chart-Histogram__histogramWrapper_dbLine--3l62h.frontend-js-components-reporting-chart-Histogram__histogram_isShowComparison--100rm.frontend-js-components-reporting-chart-Histogram__histogram_isTab--1vOjp').style = "background: rgb(0, 78, 136); width: " + barPercentage + "%;"

    if (barPercentage >= 10){
      document.querySelector('#app > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-App__appMainContainer__conent--8g7Ev > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container--yWWMK.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container_expanded--j_aiz > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__expandBlock--3RmnN > div > div.frontend-js-components-audiences-audiences-table-ItemTabs-ItemTabs__tabsContainer__content--HWyJg > div > div > div > div:nth-child(2) > div > div > div > div:nth-child(2) > div.chart-wrapper > div > div:nth-child(6) > div > div.frontend-js-components-reporting-chart-Histogram__histogramWrapper_dbLine--3l62h.frontend-js-components-reporting-chart-Histogram__histogram_isShowComparison--100rm.frontend-js-components-reporting-chart-Histogram__histogram_isTab--1vOjp').innerHTML = "<span><div class='_2P9F1lsO73MwzBQmpFy1y_ color-icon'><a class='frontend-js-components-reporting-chart-Histogram__barLink--2WtdS' href='/accountlist/209102/view/?&amp;filter=%5B%7B%22field_name%22%3A%22account_stage%22%2C%22condition%22%3A%5B%22on_site%20has%22%5D%2C%22value%22%3A%5B%5D%2C%22enddate%22%3A%222020-05-21%22%2C%22startdate%22%3A%222020-04-21%22%7D%5D' style='color: rgb(255, 255, 255);'>" + valueArray[8] + "</a></div></span>"

      document.querySelector('#app > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-App__appMainContainer__conent--8g7Ev > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container--yWWMK.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container_expanded--j_aiz > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__expandBlock--3RmnN > div > div.frontend-js-components-audiences-audiences-table-ItemTabs-ItemTabs__tabsContainer__content--HWyJg > div > div > div > div:nth-child(2) > div > div > div > div:nth-child(2) > div.chart-wrapper > div > div:nth-child(6) > div > div.frontend-js-components-reporting-chart-Histogram__barValue__outBar--2Nn-h').style = "display: none"
    }
    else {
      document.querySelector('#app > div:nth-child(2) > div > div.frontend-js-components-audiences-audiences-App__appMainContainer__conent--8g7Ev > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container--yWWMK.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container_expanded--j_aiz > div.frontend-js-components-audiences-audiences-table-TableRow-TableRow__container__expandBlock--3RmnN > div > div.frontend-js-components-audiences-audiences-table-ItemTabs-ItemTabs__tabsContainer__content--HWyJg > div > div > div > div:nth-child(2) > div > div > div > div:nth-child(2) > div.chart-wrapper > div > div:nth-child(6) > div > div.frontend-js-components-reporting-chart-Histogram__barValue__outBar--2Nn-h > span > div > a').innerHTML = valueArray[8]
    }
  }
})
