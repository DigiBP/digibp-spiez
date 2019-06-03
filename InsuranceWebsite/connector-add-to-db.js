function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}


out=JSON.stringify(
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
	"processVersion"	:	execution.version	
});




/* <camunda:in source="dBirthDate" target="dBirthDate" />
        <camunda:in source="eGender" target="eGender" />
        <camunda:in source="nAge" target="nAge" />
        <camunda:in source="nZipCode" target="nZipCode" />
        <camunda:in source="eBaseInsuranceType" target="eBaseInsuranceType" />
        <camunda:in source="bBasicInsuranceOnly" target="bBasicInsuranceOnly" />
        <camunda:in source="eFranchise" target="eFranchise" />
        <camunda:in source="bAccidentCoverage" target="bAccidentCoverage" />
        <camunda:in source="bAlternativeInsurance" target="bAlternativeInsurance" />
        <camunda:in source="eAlternativeInsuranceType" target="eAlternativeInsuranceType" />
        <camunda:in source="bDentalTreatment" target="bDentalTreatment" />
        <camunda:in source="eDentalTreatmentCoverage" target="eDentalTreatmentCoverage" />
        <camunda:in source="bLifeInsurance" target="bLifeInsurance" />
        <camunda:in source="eLifeInsuranceCoverage" target="eLifeInsuranceCoverage" />
        <camunda:out source="sPersonProfile" target="sPersonProfile" />
        <camunda:out source="sAreaType" target="sAreaType" />
        <camunda:out source="nPersonFactor" target="nPersonFactor" />
        <camunda:out source="nEndPriceDentalInsurance" target="nEndPriceDentalInsurance" />
        <camunda:out source="nEndPriceBasicInsurance" target="nEndPriceBasicInsurance" />
        <camunda:out source="nEndPriceAlternativeInsurance" target="nEndPriceAlternativeInsurance" />
        <camunda:out source="nEndPriceLifeInsurance" target="nEndPriceLifeInsurance" />
        <camunda:out source="nBasePriceBasicInsurance" target="nBasePriceBasicInsurance" />
        <camunda:out source="nBasePriceDentalInsurance" target="nBasePriceDentalInsurance" />
        <camunda:out source="nBasePriceLifeInsurance" target="nBasePriceLifeInsurance" />
        <camunda:out source="nBasePriceAlternativeInsurance" target="nBasePriceAlternativeInsurance" />*/
