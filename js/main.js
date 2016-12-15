
   function changeRangeValue() {
    var rangeValue = document.getElementById("other-range-size").value;
    var textValue = document.getElementById("range-value");
    textValue.innerHTML = rangeValue;
    var rangeTextIndent = 8 + 10*rangeValue;
	document.getElementById("range-text").style.left = String(rangeTextIndent)+"%";
   }
  	