##  Integrations


**The process starts with a web application form filled which is sent via AJAX sending JSON element to:**
 
https://digibp-spiez.herokuapp.com/rest/process-definition/key/Process_HealthInsurance/submit-form

```
{ 
	"variables": 
	{
	"sFirstName" : {"value" : $("input[name=sFirstName]" ).val(),	"type": "String"},
	"sLastName" : 	{"value" : $("input[name=sLastName]" ).val(),	"type": "String"},
	"dBirthDate" : 	{"value" : $("input[name=dBirthDate]" ).val(),	"type": "String"},
	"eGender" : 	{"value" : $("input[name=eGender]" ).val(), 	"type": "String"},
	"nAge" :	{"value" : nAge, 	"type": "Long"},
	"dStartDate" : 	{"value" : $("input[name=dStartDate]" ).val(),	"type": "String"},
	"eCitizenShip" : 	{"value" : $("select[name=eCitizenShip]" ).val(),	"type": "String"},
	"sStreet" : 	{"value" : $("input[name=sStreet]" ).val(), 	"type": "String"},
	"nZipCode" : 	{"value" : $("input[name=nZipCode]" ).val(),	"type": "Long"},
	"sCity" : 	{"value" : $("input[name=sCity]" ).val(), 	"type": "String"},
	"sEmail" : 	{"value" : $("input[name=sEmail]" ).val(), 	"type": "String"},
	"eBaseInsuranceType" : 	{"value" : $("input[name=eBasicInsuranceType]" ).val(), 	"type": "String"},
	"eFranchise" : 	{"value" : $("select[name=eFranchise]" ).val(), 	"type": "String"},
	"bAccidentCoverage" : 	{"value" : ($("input[name=bAccidentCoverage]:checked" ).val()=="on"),	"type": "Boolean"},
	"bAlternativeInsurance" : 	{"value" :($("input[name=bAlternativeInsurance]" ).val()=="1"), 	"type": "Boolean"},
	"eAlternativeInsuranceType":{"value" : $("select[name=eAlternativeInsuranceType]" ).val(),	"type": "String"},
	"bDentalTreatment" : 	{"value": ($("input[name=bDentalTreatment]" ).val()=="1"), 	"type": "Boolean"},
	"eDentalTreatmentCoverage": {"value": $("select[name=eDentalTreatmentCoverage]" ).val(), 	"type": "String"},
	"bLifeInsurance" : 	{"value" :( $("input[name=bLifeInsurance]" ).val()=="1"), 	"type": "Boolean"},
	"eLifeInsuranceCoverage" : 	{"value" : $("select[name=eLifeInsuranceCoverage]" ).val(), 	"type": "String"}
	},
	 "businessKey" : "thisIsMyDefaultBusinessKey"
};
	
```

![ApplicationForm](https://github.com/DigiBP/digibp-spiez/blob/Swapna/documentation/Integration%201.png)




**For Additional Insurance, an email requesting additional health questions is sent. email is defined in Integromat**

https://hook.integromat.com/o73at2rbiaijc5ck5k9ia12j14rd2sqq

![ApplicationForm JSON](https://github.com/DigiBP/digibp-spiez/blob/master/documentation/expiration.png)

```
{
"sLastName": sLastName,
"eGender": eGender,
"sEmail": sEmail,
"sQuestionUrl": "http://root.chi-projects.ch/digibp-spiez-web/insurance-additional- questions.html?processInstanceId="+execution.processInstanceId+""
} 
```




**Sending answers of additional health questions from web form to waiting message trigger of a specific process instance done via:**

https://digibp-spiez.herokuapp.com/rest/message

```
{
	"messageName" : "Message_38tpcvo",
	"processInstanceId" : getUrlParameter("processInstanceId"),
	"processVariables" : {
		"bDisabilityOrBirthDefect" : 	{"value" : $("select[name=bDisabilityOrBirthDefect]" ).val()=="true", "type": "Boolean"},
		"bOngoingTreatmentOrSurgery" : 	{"value" : $("select[name=bOngoingTreatmentOrSurgery]" ).val()=="true", "type": "Boolean"},
		"bPastRejection" : 	{"value" :$("select[name=bPastRejection]" ).val()=="true", "type": "Boolean"},
		"bDrugTaker" : 	{"value": $("select[name=bDrugTaker]" ).val()=="true", "type": "Boolean"},
		"bHivInfected" : 	{"value" : $("select[name=bHivInfected]" ).val()=="true", "type": "Boolean"},
		"fHeight" : 	{"value" : $("input[name=fHeight]" ).val(), "type": "Long"},
		"fWeight" : 	{"value" : $("input[name=fWeight]" ).val(), "type": "Long"},
		"bBodybuilder" : 	{"value" : $("select[name=bBodybuilder]" ).val()=="true", "type": "Boolean"}
}
	
```




**When the assessment of the application is done, the accepted or rejected data is going to be saved in our database, google drive table sheet persistently via an integromat service. The integromat service is triggered by:**

https://hook.integromat.com/aulm3jmewet9rvlicpzzdr01aq40ce7n

```

{
	"sFirstName": sFirstName,
	"sLastName": sLastName,
	"eGender": eGender,
	"sEmail": sEmail,
	"sApplicationID": execution.processInstanceId,
	"sStatus": "accepted/rejected",
	"dBirthDate"	:	dBirthDate	,
	"eGender"	:	eGender	,
	"nAge"	:	nAge	,
	"eCitizenShip"	:	eCitizenShip	,
	"sStreet"	:	sStreet	,
	"nZipCode"	:	nZipCode	,
	"sCity"	:	sCity	,
	"sEmail"	:	sEmail	,
	"eBaseInsuranceType"	:	eBaseInsuranceType	,
	"eFranchise"	:	eFranchise	,
	"bAccidentCoverage"	:	bAccidentCoverage	,
	"bAlternativeInsurance"	:	bAlternativeInsurance	,
	"eAlternativeInsuranceType"	:	eAlternativeInsuranceType	,
	"bDentalTreatment"	:	bDentalTreatment	,
	"eDentalTreatmentCoverage"	:	eDentalTreatmentCoverage	,
	"bLifeInsurance"	:	bLifeInsurance	,
	"eLifeInsuranceCoverage"	:	eLifeInsuranceCoverage	,
	"bDisabilityOrBirthDefect"	:	bDisabilityOrBirthDefect	,
	"bOngoingTreatmentOrSurgery"	:	bOngoingTreatmentOrSurgery	,
	"bPastRejection"	:	bPastRejection	,
	"bDrugTaker"	:	bDrugTaker	,
	"bHivInfected"	:	bHivInfected	,
	"fHeight"	:	fHeight	,
	"fWeight"	:	fWeight	,
	"bBodybuilder"	:	bBodybuilder	,
	"fBMI"	:	fBMI	,
	"sAreaType"	:	sAreaType	, //if rejected this field is empty
	"nPersonFactor"	:	nPersonFactor	, //if rejected this field is empty
	"sPersonProfile"	:	sPersonProfile	, //if rejected this field is empty
	"nEndPriceDentalInsurance"	:	nEndPriceDentalInsurance	, //if rejected this field is empty
	"nEndPriceBasicInsurance"	:	nEndPriceBasicInsurance	, //if rejected this field is empty
	"nEndPriceAlternativeInsurance"	:	nEndPriceAlternativeInsurance	, //if rejected this field is empty
	"nEndPriceLifeInsurance"	:	nEndPriceLifeInsurance	, //if rejected this field is empty
	"nBasePriceBasicInsurance"	:	nBasePriceBasicInsurance	, //if rejected this field is empty
	"nBasePriceDentalInsurance"	:	nBasePriceDentalInsurance	, //if rejected this field is empty
	"nBasePriceLifeInsurance"	:	nBasePriceLifeInsurance	, //if rejected this field is empty
	"nBasePriceAlternativeInsurance"	:	nBasePriceAlternativeInsurance	,
	"dtCreated"	:	formatDate(new Date())	,
	"dtModified"	:	formatDate(new Date())	,
	"processVersion"	:	execution.version	
});


```
The output is row number: 

```

{
"nRowNumber: " 12
}} 

```
For our further procedure we add 9770000 to calculate the policy number:
nPolicyNumber=9770000+nRowNumber

![Database](https://github.com/DigiBP/digibp-spiez/blob/Swapna/documentation/integration2.png)




**Create PDF and save PDF-URL to database 
The following JSON element is sent to integromat to create a PDF via Eledo and send an update to our database with a url to the created pdf**

![Eledo JSON](https://github.com/DigiBP/digibp-spiez/blob/master/documentation/pdfeledo.png)

https://hook.integromat.com/cen1nmnjc8fl8rwa2fhhdjfs5s84d8rp

```
{
	"sFirstName": sFirstName,
	"sLastName": sLastName,
	"eGender": eGender,
	"sEmail": sEmail,
	"sApplicationID": execution.processInstanceId,
	"sStatus": "accepted",
	"dBirthDate"	:	dBirthDate	,
	"eGender"	:	eGender	,
	"nAge"	:	nAge	,
	"eCitizenShip"	:	eCitizenShip	,
	"sStreet"	:	sStreet	,
	"nZipCode"	:	nZipCode	,
	"sCity"	:	sCity	,
	"sEmail"	:	sEmail	,
	"eBaseInsuranceType"	:	eBaseInsuranceType	,
	"eFranchise"	:	eFranchise	,
	"bAccidentCoverage"	:	bAccidentCoverage	,
	"bAlternativeInsurance"	:	bAlternativeInsurance	,
	"eAlternativeInsuranceType"	:	eAlternativeInsuranceType	,
	"bDentalTreatment"	:	bDentalTreatment	,
	"eDentalTreatmentCoverage"	:	eDentalTreatmentCoverage	,
	"bLifeInsurance"	:	bLifeInsurance	,
	"eLifeInsuranceCoverage"	:	eLifeInsuranceCoverage	,
	"bDisabilityOrBirthDefect"	:	bDisabilityOrBirthDefect	,
	"bOngoingTreatmentOrSurgery"	:	bOngoingTreatmentOrSurgery	,
	"bPastRejection"	:	bPastRejection	,
	"bDrugTaker"	:	bDrugTaker	,
	"bHivInfected"	:	bHivInfected	,
	"fHeight"	:	fHeight	,
	"fWeight"	:	fWeight	,
	"bBodybuilder"	:	bBodybuilder	,
	"fBMI"	:	fBMI	,
	"sAreaType"	:	sAreaType	,
	"nPersonFactor"	:	nPersonFactor	,
	"sPersonProfile"	:	sPersonProfile	,
	"nEndPriceDentalInsurance"	:	nEndPriceDentalInsurance	,
	"nEndPriceBasicInsurance"	:	nEndPriceBasicInsurance	,
	"nEndPriceAlternativeInsurance"	:	nEndPriceAlternativeInsurance	,
	"nEndPriceLifeInsurance"	:	nEndPriceLifeInsurance	,
	"nBasePriceBasicInsurance"	:	nBasePriceBasicInsurance	,
	"nBasePriceDentalInsurance"	:	nBasePriceDentalInsurance	,
	"nBasePriceLifeInsurance"	:	nBasePriceLifeInsurance	,
	"nBasePriceAlternativeInsurance"	:	nBasePriceAlternativeInsurance	,
	"dtCreated"	:	formatDate(new Date())	,
	"dtModified"	:	formatDate(new Date())	,
	"processVersion"	:	execution.version,
	"nPolicyNumber": nPolicyNumber,
        "sYearMonthDay": formatDate2(new Date()),
	"dToday": formatDate3(new Date())
}

```
The output sends back the URL :


```
{
sContractUrl:
https://drive.google.com/uc?export=download&id=1d2FwjgLpgEUsTBobrsDVBqH6ACs5hH1b
} 

```




**The contract is sent to customer via:**

https://hook.integromat.com/9pok51uratqwjukfnswiy52wzcnby2w8

```
{
"sLastName": sLastName, "
"eGender": eGender,
"sEmail": sEmail,
"sQuestionUrl": "http://root.chi-projects.ch/digibp-spiez-web/insurance-confirm- contract.html?processInstanceId="+execution.processInstanceId+"", 
"sContractUrl": sContractUrl
} 

```




**Send contract signature to camunda:
Sending decision whether contract gets accepted to Camunda from web form to waiting message trigger of a specific process instance via:**

![contractsign](https://github.com/DigiBP/digibp-spiez/blob/master/documentation/contractsign.png)


https://digibp-spiez.herokuapp.com/rest/message

```
{
"messageName" : "Message_1eea03e", 
"processInstanceId" : getUrlParameter("processInstanceId"), 
"processVariables" : { 
"bContractSigned" : {"value" : $("#contractSigned").val()=="true", "type": "Boolean"}, 
     } 
}

```




**The following message is sent by integromat service to update application status of an already inserted data row in our application database. Currently it is only used to set for the stati: unsigned/signed/SignatureTimeExpired**

![Updating Database](https://github.com/DigiBP/digibp-spiez/blob/master/documentation/setnewstatus.png)

```
{
"processInstanceId": execution.processInstanceId, 
"sStatus": "unsigned/signed/SignatureTimeExpired" 
} 

```




**Send contract information to customer:**

![Contract](https://github.com/DigiBP/digibp-spiez/blob/master/documentation/expiration.png)

https://hook.integromat.com/127ydyn8b6ikfghacoxam8t4v9dft11u

input:

```
{"sLastName": sLastName, 
"eGender": eGender, 
"sEmail": sEmail

};

```




**Send application rejection to customer:**

![send rejection](https://github.com/DigiBP/digibp-spiez/blob/master/documentation/expiration.png)

https://hook.integromat.com/2hs8inluvcgsg79vvcsqtd70znhrs65t 

input:

```
{"sLastName": sLastName,
 "eGender": eGender, 
"sEmail": sEmail
};

```




**Send expiration email to customer:**

![send expiration](https://github.com/DigiBP/digibp-spiez/blob/master/documentation/expiration.png)

https://hook.integromat.com/nrxuk1b677b8fu8ui7i52t8y36rwwvck

input:

```
{"sLastName": sLastName, 
"eGender": eGender, 
"sEmail": sEmail
} 
```
