const formLog = document.getElementById('abm_analytics')
const audienceLog = document.getElementById('audiences_form')
const prebuilt = document.getElementById('prebuilt')
let audienceNameChange = document.querySelector('#audience_name_change')

formLog.addEventListener('submit', (e) => {
  // THE FORM HTMLCOLLECTION NEEDS TO BE CONVERTED INTO A STRING TO PASS THROUGH THE SENDMESSAGE FUNCTION
  e.preventDefault()
  var jsonString = ""
  for (var i=0; i<e.target.elements.length; i++){
    if (e.target.elements[i].value !== ""){
      jsonString += "//" + e.target.elements[i].value
    }
  }

  const params = {
    active: true,
    currentWindow: true
  }
  chrome.tabs.query(params, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, jsonString)
  })
})

audienceLog.addEventListener('submit', (e) => {
  e.preventDefault()
  var jsonString = ""
  for (var i=0; i<e.target.elements.length; i++){
    if (e.target.elements[i].value !== ""){
      jsonString += "||" + e.target.elements[i].value
    }
  }

  const params = {
    active: true,
    currentWindow: true
  }

  chrome.tabs.query(params, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, jsonString)
  })
})

prebuilt.addEventListener("change", (e) => {
  // debugger
  if (e.target.value === "Midmarket Audiences"){
    document.querySelector('#audience_one_name').value = "All Prospect Accounts"
    document.querySelector('#audience_one_accounts').value = "2500"
    document.querySelector('#audience_one_visited').value = "850"
    document.querySelector('#audience_one_engaged').value = "223"
    document.querySelector('#audience_one_total').value = "1200"

    document.querySelector('#audience_two_name').value = "Awareness Audience"
    document.querySelector('#audience_two_accounts').value = "2000"
    document.querySelector('#audience_two_visited').value = "400"
    document.querySelector('#audience_two_engaged').value = "40"
    document.querySelector('#audience_two_total').value = "800"

    document.querySelector('#audience_three_name').value = "Engagement Audience"
    document.querySelector('#audience_three_accounts').value = "375"
    document.querySelector('#audience_three_visited').value = "337"
    document.querySelector('#audience_three_engaged').value = "112"
    document.querySelector('#audience_three_total').value = "500"

    document.querySelector('#audience_four_name').value = "Pipeline Audience"
    document.querySelector('#audience_four_accounts').value = "125"
    document.querySelector('#audience_four_visited').value = "112"
    document.querySelector('#audience_four_engaged').value = "75"
    document.querySelector('#audience_four_total').value = "340"

    document.querySelector('#audience_five_name').value = "Customer Accounts"
    document.querySelector('#audience_five_accounts').value = "389"
    document.querySelector('#audience_five_visited').value = "109"
    document.querySelector('#audience_five_engaged').value = "75"
    document.querySelector('#audience_five_total').value = "525"


    document.querySelector("#audience_name_change").value = "All Prospect Accounts"
    document.querySelector("#main_audience_accounts").value = "2500"
    document.querySelector("#main_audience_visited").value = "850"
    document.querySelector("#main_audience_engaged").value = "223"
    document.querySelector("#main_audience_pageviews").value = "1200"
    document.querySelector("#main_audience_converted").value = "118"
    document.querySelector("#main_audience_opportunities").value = "117"
    document.querySelector("#main_audience_accountswon").value = "14"
    document.querySelector("#main_audience_totalwon").value = "140000"
    document.querySelector("#main_audience_closerate").value = "12"
    document.querySelector("#main_audience_pipeline").value = "117000"
    document.querySelector("#main_audience_dealsize").value = "10000"
  }

  if (e.target.value === "Enterprise Audiences"){
    document.querySelector('#audience_one_name').value = "All Prospect Accounts"
    document.querySelector('#audience_one_accounts').value = "5000"
    document.querySelector('#audience_one_visited').value = "2488"
    document.querySelector('#audience_one_engaged').value = "557"
    document.querySelector('#audience_one_total').value = "4000"

    document.querySelector('#audience_two_name').value = "Awareness Audience"
    document.querySelector('#audience_two_accounts').value = "4042"
    document.querySelector('#audience_two_visited').value = "1013"
    document.querySelector('#audience_two_engaged').value = "0"
    document.querySelector('#audience_two_total').value = "1013"

    document.querySelector('#audience_three_name').value = "Engagement Audience"
    document.querySelector('#audience_three_accounts').value = "1253"
    document.querySelector('#audience_three_visited').value = "1250"
    document.querySelector('#audience_three_engaged').value = "375"
    document.querySelector('#audience_three_total').value = "1400"

    document.querySelector('#audience_four_name').value = "Pipeline Audience"
    document.querySelector('#audience_four_accounts').value = "256"
    document.querySelector('#audience_four_visited').value = "225"
    document.querySelector('#audience_four_engaged').value = "202"
    document.querySelector('#audience_four_total').value = "900"

    document.querySelector('#audience_five_name').value = "Customer Accounts"
    document.querySelector('#audience_five_accounts').value = "983"
    document.querySelector('#audience_five_visited').value = "302"
    document.querySelector('#audience_five_engaged').value = "298"
    document.querySelector('#audience_five_total').value = "900"


    document.querySelector("#audience_name_change").value = "All Prospect Accounts"
    document.querySelector("#main_audience_accounts").value = "5000"
    document.querySelector("#main_audience_visited").value = "2488"
    document.querySelector("#main_audience_engaged").value = "577"
    document.querySelector("#main_audience_pageviews").value = "4000"
    document.querySelector("#main_audience_converted").value = "185"
    document.querySelector("#main_audience_opportunities").value = "124"
    document.querySelector("#main_audience_accountswon").value = "37"
    document.querySelector("#main_audience_totalwon").value = "370000"
    document.querySelector("#main_audience_closerate").value = "30"
    document.querySelector("#main_audience_pipeline").value = "12400000"
    document.querySelector("#main_audience_dealsize").value = "100000"
  }
})
