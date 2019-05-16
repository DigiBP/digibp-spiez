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
