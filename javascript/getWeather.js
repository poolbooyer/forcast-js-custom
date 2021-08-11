var request = new XMLHttpRequest();

request.open('GET', 'https://www.jma.go.jp/bosai/forecast/data/forecast/040000.json', true);
request.responseType = 'json';

request.onload = function () {
  var data = this.response;
  var forcastData = data[0]['timeSeries'][0]
  var table=document.createElement("table")
  table.setAttribute("class","table table-striped")
  var date=[]
  var thead=document.createElement("thead")
  forcastData['timeDefines'].forEach(element => {
    var d=new Date(element)
    date.push(`${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`.replace(/\n|\r/g, ''));
  });
  var row = createRow('th', 'location', date)
  thead.append(row)
  var tbody=document.createElement("tbody")
  forcastData['areas'].forEach(position =>{
      var row = createRow('td', position['area']['name'], position['weathers'])
      tbody.append(row)
    }
  )
  table.append(thead)
  table.append(tbody)
  document.getElementById("weather").append(table)

};

request.send();

function createRow(type,top,items){
  var element = document.createElement('tr');
  var item = document.createElement(type)
  item.textContent = top
  element.appendChild(item);
  items.forEach(item =>{
    var data = document.createElement(type)
    data.textContent = item
    element.appendChild(data);
  })
  return element
}
