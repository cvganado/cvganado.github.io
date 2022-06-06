function isMobile() {
  return /Mobi/.test(navigator.userAgent);
}

function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

function bco() {
  $("#iTpO").prop("checked", true);
  $("#iTpO").prop("checked", true).trigger("click");
  $("#pesoSca").val("100");
  if (!isMobile()) {
    var selec = document.getElementById("pesoAni");
    selec.focus();
    selec.setSelectionRange(0, selec.value.length);
  }
  return false;
}

function bca() {
  $("#iOpO").prop("checked", true);
  $("#iOpO").prop("checked", true).trigger("click");
  $("#pesoSca").val("100");
  if (!isMobile()) {
    var selec = document.getElementById("pesoAni");
    selec.focus();
    selec.setSelectionRange(0, selec.value.length);
  }
  return false;
}

function cTotal() {
  var anim = $('input[name=animales]:checked').val();
  var sca = round(parseFloat($('input[name=scalas]:checked').val()) / 10, 2);
  var pSca = $("#pesoSca").val();
  var pAni = $("#pesoAni").val();
  var aPrec = $("#aniPrec").val();
  var numAni = $("#numAni").val();
  if (isNaN(pSca) || isNaN(pAni) || isNaN(aPrec) || isNaN(numAni)
    || pSca == null || pAni == null || aPrec == null || numAni == null
    || numAni == 0) {
    return false;
  } else {
    pSca = round(pSca, 2);
    pAni = round(pAni/numAni, 2)
    aPrec = round(aPrec, 2);
  }
  var nuevoP = 0;
  if (pAni > pSca) nuevoP = round(aPrec - ((pAni - pSca) * sca), 2);
  else nuevoP = aPrec;
  var tot = round(pAni * nuevoP, 2);
  var totXNumAni = round(tot*numAni, 2);
  var arr = [
    anim, sca, pSca+"<br>"+pAni+"<br>"+aPrec, nuevoP, tot, numAni, totXNumAni
  ];

  var tableRef = document.getElementById("cvgHist").getElementsByTagName("tbody")[0];
  var newRow = tableRef.insertRow(tableRef.rows.length);
  for(i = 0; i < 7; i++) {
    var newCell  = newRow.insertCell(i);
    var newText  = document.createElement("span");
    newText.innerHTML = arr[i];
    newCell.appendChild(newText);
  }

  var currSum = round(parseFloat($("#cmtot").html()), 2);
  var newSum = round(totXNumAni+currSum, 2);
  $("#cmtot").html(newSum);

  if (!isMobile()) {
    var selec = document.getElementById("pesoAni");
    selec.focus();
    selec.setSelectionRange(0, selec.value.length);
  }

  return false;
}

$(document).keypress(function(e){
    if (e.which == 13){
        $("#calcu").click();
    }
});

onload = bco;