$(document).ready(function () {
	$.ajax({
  		url: "http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=f4a75ba9-7721-4363-884d-c3820b0b917c",
  		type: "GET",
  		dataType: "json",
  		success: function(jsonData) {
  			//alert(jsonData.result.results.length);	//テスト
  			var animaldata = jsonData.result.results;

  			var animalstring = "";
  			for(var i = 0 ; i < animaldata.length ; i++){
  				animalstring += "<div class='row' style='border-style:dashed;border-color:rgba(255,165,79,1.0)'>\n";

  				animalstring += "<div class='col-md-3'>\n"
  					animalstring += "<img class='img' src=\'" + animaldata[i].ImageName + "\' width='100%' height='100%'>";
  					if(animaldata[i].Sex == "雌"){
  						animalstring += "<img src='image/women.png' style='position:absolute;top:0%;right:5%;'>\n";
  					}else{
  						animalstring += "<img src='image/men.png' style='position:absolute;top:0%;right:2%;'>\n";
  					}
  				animalstring += "</div>\n";
				
  				animalstring += "<div class='col-md-9'>"
  					animalstring += "<p>名稱 : " + animaldata[i].Name + "</p>"
  					animalstring += "<p>晶片編號 : " + animaldata[i].ChipNum + "</p>"
  					animalstring += "<p>年齡 : " + animaldata[i].Age + " 品種 : " + animaldata[i].Variety + " 體型 : " + animaldata[i].Build + " 毛色 : " + animaldata[i].HairType + "</p>"
  					animalstring += "<p>是否絕育 : " + animaldata[i].IsSterilization + "</p>"
  					//animalstring += "<p>可否與其他孩童相處 : " + animaldata[i].ChildreAnlong + " 可否與其他動物相處 : " + animaldata[i].AnimalAnlong + "</p>"
  					animalstring += "<p>進所原因 : " + animaldata[i].Reason + "</p>"
  					animalstring += "<br>"
  					animalstring += "<p>描述 : " + animaldata[i].Note + "</p>"
  					animalstring += "<br>"
  					animalstring += "<p>收容位置 : " + animaldata[i].Resettlement + "</p>"
  					animalstring += "<p>電話 : " + animaldata[i].Phone + "</p>"
  					animalstring += "<p>E-mail : " + animaldata[i].Email + "</p>"
  				animalstring += "</div>\n";

  				animalstring += "</div>\n";
  			}

  			document.getElementById("animalData").innerHTML = animalstring;
  		},
  		error: function() {
    		alert("ERROR!!!");
  		}
  	});	
});
		