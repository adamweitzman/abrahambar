// $('#jlmsection').hover(function() {
//   $('#bar').addClass('baronjlm');
//   $('#jlmbg').addClass('width');
//   }, function() {
//   $('#bar').removeClass('baronjlm');
//   $('#jlmbg').removeClass('width');
//   });

$('#jlmsection').hover(function() {
  $('#bar').addClass('baronjlm');
  $('#jlmbg').addClass('width');
  $('#eventstlv').addClass('opacityno');
  $('#eventsjlm').addClass('opacityyes');
  $('#jlmlogo').addClass('opacityyes');
  $('#bar').removeClass('baroffjlm');
  $('#jlmbg').removeClass('nowidth');
  $('#eventstlv').removeClass('opacityyes');
  $('#eventsjlm').removeClass('opacityno');
  $("#jlmsection h1").text($("#jlmsection h1").text().replace("JLM", "Jerusalem"));
  $("#tlvsection h1").text($("#tlvsection h1").text().replace("Tel Aviv", "TLV"));

  }, function() {
  $('#bar').removeClass('baronjlm');
  $('#jlmbg').removeClass('width');
  $('#jlmlogo').removeClass('opacityyes');
  $('#eventstlv').removeClass('opacityno');
  $('#eventsjlm').addClass('opacityno');
  $('#bar').addClass('baroffjlm');
  $('#jlmbg').addClass('nowidth');
  $('#eventstlv').addClass('opacityyes');
  $("#jlmsection h1").text($("#jlmsection h1").text().replace("Jerusalem", "JLM"));
  $("#tlvsection h1").text($("#tlvsection h1").text().replace("TLV", "Tel Aviv"));
  });

$('#navleft').hover(function() {
  $('#bar').addClass('baronjlm');
  $('#jlmbg').addClass('width');
  $('#eventstlv').addClass('opacityno');
  $('#eventsjlm').addClass('opacityyes');
  $('#jlmlogo').addClass('opacityyes');
  $('#bar').removeClass('baroffjlm');
  $('#jlmbg').removeClass('nowidth');
  $('#eventstlv').removeClass('opacityyes');
  $('#eventsjlm').removeClass('opacityno');
  $("#jlmsection h1").text($("#jlmsection h1").text().replace("JLM", "Jerusalem"));
  $("#tlvsection h1").text($("#tlvsection h1").text().replace("Tel Aviv", "TLV"));

  }, function() {
  $('#bar').removeClass('baronjlm');
  $('#jlmbg').removeClass('width');
  $('#jlmlogo').removeClass('opacityyes');
  $('#eventstlv').removeClass('opacityno');
  $('#eventsjlm').addClass('opacityno');
  $('#bar').addClass('baroffjlm');
  $('#jlmbg').addClass('nowidth');
  $('#eventstlv').addClass('opacityyes');
  $("#jlmsection h1").text($("#jlmsection h1").text().replace("Jerusalem", "JLM"));
  $("#tlvsection h1").text($("#tlvsection h1").text().replace("TLV", "Tel Aviv"));
  });

$('#tlvone').hover(function() {
	$('#overlay').addClass('blacker');
  $('#eventsbgtlvone').addClass('eventonetlv');
  $('#eventsbgtlvone').removeClass('eventstlvmotion');
  }, function() {
  $('#eventsbgtlvone').removeClass('eventonetlv');
  $('#eventsbgtlvone').addClass('eventstlvmotion');
  $('#overlay').removeClass('blacker');
  });

$('#tlvtwo').hover(function() {
	$('#overlay').addClass('blacker');
  $('#eventsbgtlvtwo').addClass('eventtwotlv');
  $('#eventsbgtlvtwo').removeClass('eventstlvmotion');
  }, function() {
  $('#eventsbgtlvtwo').removeClass('eventtwotlv');
  $('#eventsbgtlvtwo').addClass('eventstlvmotion');
  $('#overlay').removeClass('blacker');
  });

$('#jlmone').hover(function() {
	$('#overlay').addClass('blacker');
  $('#eventsbgjlmone').addClass('eventonejlm');
  $('#eventsbgjlmone').removeClass('eventsjlmmotion');
  }, function() {
  $('#eventsbgjlmone').removeClass('eventonejlm');
  $('#eventsbgjlmone').addClass('eventsjlmmotion');
  $('#overlay').removeClass('blacker');
  });



$('#jlmone').hover(function() {
	$('#overlay').addClass('blacker');
  $('#jlmsection').addClass('jlmeventonebg');
  }, function() {
  $('#jlmsection').removeClass('jlmeventonebg');
  $('#overlay').removeClass('blacker');
  });

