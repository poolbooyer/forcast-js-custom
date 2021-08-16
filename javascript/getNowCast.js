import { locations, columns, direction } from "./const.js"

var date=new Date()
date = new Date(date.setMinutes(date.getMinutes()-10))
const dateStr = `${date.getFullYear()}${('00' + (date.getMonth() + 1)).slice(-2)}${('00' + date.getDate()).slice(-2)}${('00' + date.getHours()).slice(-2)}`
var request = new XMLHttpRequest();
request.open('GET', `https://www.jma.go.jp/bosai/amedas/data/map/${dateStr}0000.json`, true);
request.responseType = 'json';

request.onload = function () {
  var data = this.response
  var table = document.createElement("table")
  table.setAttribute("class", "table table-striped")
  var head = []
  columns.forEach(column=>{
    head.push(`${column.displayName}(${column.count})`)
  })
  var thead = document.createElement("thead")
  var row = createRow('th', 'アメダス位置', head)
  thead.append(row)
  var tbody = document.createElement("tbody")
  locations.forEach(location =>{
    var item = data[location.code]
    var rowData = []
    columns.forEach(column=>{
      var d = item[column.name]
      if (column.name == 'windDirection') {
        rowData.push(direction[d[0]]["displayName"])
      }else{
        rowData.push(d[0])
      }
    })
    var row = createRow('td', location['displayName'], rowData)
    tbody.append(row)
  })
  table.append(thead)
  table.append(tbody)
  document.getElementById("weather").append(table)

};

request.send();

function createRow(type,top,items){
  var element = document.createElement('tr')
  if (top !="") {
    var item = document.createElement(type)
    item.textContent = top
    element.appendChild(item)
  }
  items.forEach(item =>{
    var data = document.createElement(type)
    data.textContent = item
    element.appendChild(data)
  })
  return element
}
