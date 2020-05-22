const formLog = document.getElementById('abm_analytics')
const audienceLog = document.getElementById('audiences_form')
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
  debugger
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

  debugger

  const params = {
    active: true,
    currentWindow: true
  }

  chrome.tabs.query(params, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, jsonString)
  })
})
