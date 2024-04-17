function openPopup(event) {
  var index = Array.from(document.querySelectorAll('.grid-item2')).indexOf(event.target);
  var dynamicdat = document.querySelectorAll('.grid-item2')[index].innerText;
  var temp = dynamicdat.split('\n');
  var additionalData =
  "Variants Management : FALSE\n"+
  "Material Scrap:0.0\n" +
  "Sequencing Mode:Linear\n" +
  "Roll up      :TRUE\n" +
  "Estimated Time : 0.0\n"+
  "Value Added Ratio on  Estimated Time :1.0\n" +
  "Is Time Proportional  To Quantity : TRUE\n" +
  "Measured Time:0.0\n";
  function objectToTable(obj,temp) {
    var table = document.getElementById("data-table"); // Get the table element
    table.innerHTML = "";
    document.getElementById('dynamicdata').innerText = 'admin_platform 3/19/2024 \n';
    document.getElementById('heading').innerText=temp[0];
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        var dataRow = table.insertRow();
        var dataCell1 = dataRow.insertCell();
        dataCell1.textContent = key;
        var dataCell2 = dataRow.insertCell();
        dataCell2.textContent = obj[key];
      }
    }
  }
  var lines = additionalData.split('\n');
  var dataObject = {};
  lines.forEach(function(line) {
    var pair = line.split(':');
    var key = pair[0].trim();
    var value = pair[1] ? pair[1].trim() : '';
    dataObject[key] = value;
  });
    // Convert the object to an HTML table (call the function)
  objectToTable(dataObject,temp);
  document.getElementById('popup').style.display = 'block';
}
function Print() {
  window.print();
}
function closePopup() {
  document.getElementById('popup').style.display = 'none';
}
document.addEventListener('DOMContentLoaded', function() {
  var gridItems = document.querySelectorAll('.grid-item2');
  gridItems.forEach(function(item) {
    item.addEventListener('click', openPopup);
  });
});
