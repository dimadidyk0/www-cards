
   function changeRangeValue() {
    var rangeValue = document.getElementById("other-range-size").value;
    var textValue = document.getElementById("range-value");
    textValue.innerHTML = rangeValue;
    var rangeTextIndent = 30 + 32*rangeValue;
	document.getElementById("range-text").style.left = String(rangeTextIndent)+"px";
   }
  