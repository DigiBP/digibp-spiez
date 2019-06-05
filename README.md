

 ```
   .aMMMMP     dMMMMb    .aMMMb    dMP dMP     dMMMMb        .dMMMb     dMMMMb     dMP     dMMMMMP     dMMMMMP 
  dMP"        dMP.dMP   dMP"dMP   dMP dMP     dMP.dMP       dMP" VP    dMP.dMP    amr     dMP           .dMP"  
 dMP MMP"    dMMMMK"   dMP dMP   dMP dMP     dMMMMP"        VMMMb     dMMMMP"    dMP     dMMMP        .dMP"    
dMP.dMP     dMP"AMF   dMP.aMP   dMP.aMP     dMP           dP .dMP    dMP        dMP     dMP         .dMP"      
VMMMP"     dMP dMP    VMMMP"    VMMMP"     dMP            VMMMP"    dMP        dMP     dMMMMMP     dMMMMMP    
```


| Summary | Quicklinks |
| ------------------ | - |
|This repository contains Health insurance process [Camunda BPM](https://docs.camunda.org). This repository is part of the group assignment of the Digitalization of the Business Processes (SS19) Module at the FHNW. Check out our [Presentation Slides](https://www.slideshare.net/DavidEmmenegger/we-careapp-sales-pitch) to get an overview of the process as well as the tools and technologies used. | [Camunda Health Insurance Offer Creator]( https://digibp-spiez.herokuapp.com/app/welcome/default/#/login) 

*Authors*
* Christopher Vogel, [christopher.vogel@students.fhnw.ch]
* David Emmenegger, [david.emmenegger@students.fhnw.ch]
* Shreeya Nema, [shreeya.nema@students.fhnw.ch]
* Swapna Chinta [swapna.chinta@students.fhnw.ch]


# Methodology and Approach 

Please be aware that the reader should be familiar with BPMN 3.0. The processes and their flows are not described or explained in this project. 

## Design Approach

After the first lesson, we were able to execute the first workflow by running the Camunda BPM Engine on Heroku. Although with a limited functionality. It was a valuable experience for the group as new technologies were used. Furthermore, documentation and design plans were crafted and some tests were conducted. We treated every lesson and the following development and adaptions to the product as one sprint.

## Process design approach
The team decided to go for a ‘rough-to-detail’ design approach keeping a working process model in the centre of attention. In detail this meant that the group decided for a very simple (but technically working) health insurance process at the beginning of the course and then added step by step more and more complexity to the process until it reached its final beauty with all features required from the team.
During the entire course the insurance process was always (technically) running.

## Application development
GitHub was used in order to work collaboratively on the project. For every team member an own branch was created to work ‘independently’ on everyone’s topic. 
The standard-features of GitHub fully served the purpose to collaborate effectively. Pull and merge requests (formerly not known by the team-members) were used to create a joint, final and working master repository.

## Project Management
For this small team an agile project management approach was chosen (weekly meetings with jointly defined goals). Each person was allocated to a specific domain:

- Christioph: Technical Area (Web-Frontend, Java Script)
- Shreeya: Testing and Process design
- David: Business Logic (decision tables, price engine)
- Swapna: Documentation


# We Care: Health Insurance Offering Services

![Process flow](https://github.com/DigiBP/digibp-spiez/blob/Swapna/documentation/Highlevel%20orocess%20flow.png)

The following chapter describes the basic idea behind the health insurance process.The fictitious company "We Care health insurance" offers basic and supplementary health insurance. Both models have  pre-defined  criteria, which need to be satisfied in order to be eligible for the insurance.The eligibilty criteria will be explained in detail in the chapter digitalized health insurance process. 

**Basic insurance:** The customer is eligible for basic insurance if he lives in switzerland. Depending on the zipcode,age and gender the price is calculated for every applicant. There are 4 different models that a customer can choose from: Telemedicine, General practitioner, Family doctor model and Standard model.

**Additional insurance:** If a customer wishes to apply for a supplementary insurance he can select from different models : Alterative, Dental and Life insurance by answering additional health questions.

Based on the type of insurance selected, the price is calculated and contract is sent to the customer. When the customer signs the contract and sends it back to the company through email, it is saved in the database and the application process is closed.


# AS-IS Process

 The following image shows a comprehensive visualization of AS-IS process. 

![alt text](https://github.com/DigiBP/digibp-spiez/blob/Swapna/documentation/As-is%20Process.png)

1. The customer sends a physical application form, which is checked for completeness manually by a customer agent. If the  form  is incomplete, additional information is requested. Otherwise the application will be forwarded to back office for assessment.

2. The back office assesses the application. If the application is accepted an offer is created by another employee and the offer is sent to the applicant via post. In case of rejection, the applicant is notified via email. 

3. If the customer accepts the offer, a contract is created by an employee and sent to the customer by post. As soon as the signed contract is received from the customer, a copy of the same is stored in the database.


# Overall Health Insurance Process
The figure below shows a simple visualization of our process. The following chapter is divided into two main main process branches (Basic insurance process and Additional insurance process) which will come together for application eligibility. Afterwards, the price of the health insurances get calculated, PDF document will be generated, the contract will be sent to the customer and he or she has to confirm it. The following figure shows a visualization of our overall process. 

| **BPMN 2.0 Diagramm of our overall process** | 
| ------------------ | 
| ![alt text](https://github.com/DigiBP/digibp-spiez/blob/Swapna/documentation/health%20insurance%20process.png) |

 ##  Business Cases

There are 11 business cases implemented through the process flow of We-Care:

**1. Basic Insurance Application Accepted:**
After the candidate has filled the form for basic insurance without selecting any additional insurances,the application is accepted and a mail is sent to the applicant with the contract. An entry with applicant information and contract status “accepted” is entered in We-Care Application database (Google Sheet)

**2. Basic Insurance Contract Signed:**
After the contract is accepted in the process for basic Insurance, an email containing contract as an attachment is sent to the applicant and a link to sign the contract. On clicking the link, when applicant selects “accept", the contract status is changed from “accepted” to “signed” in application database.

**3. Basic Insurance Contract Unsigned:**
After the contract is accepted in the process for basic Insurance, an email containing the contract as an attachment is sent to the applicant, along with a link to sign the contract. On clicking the link, when applicant selects “reject", the contract status is changed from “accepted” to “unsigned” in application database.

**4. Additional Insurance Application Applied:**
In case the candidate selects Basic and Additional insurances, an email  with a link is sent to the applicant. This link opens a new webform containing additional health questions. No database entry is created at this point of time.

**5. Additional insurance Application Accepted:**
After filling the additional health questions, the eligibility of the applicant for additional insurance will be checked. If the eligibility factor has value less than “3” then the applicant is eligible. In this case,  the application is accepted and an email is sent to the applicant with the contract. An entry with applicant information and contract status “accepted” is entered in We-Care application database.

**6. Additional insurance Application Non-Eligible:**
After filling the additional health questions, the eligibility of the applicant for additional insurance will be checked. If the eligibility factor has value greater than “3” then the applicant is non-eligible. In this case, the application is rejected and an email is sent to the applicant for rejection. An entry with applicant information and contract status “non-eligible” is created in We-Care application database.

**7. Additional Insurance Human Decide:**
After filling the additional health questions, the eligibility of the applicant for additional insurance will be checked. If the eligibility factor has exactly value  “3” then the manual task “Human-Decide" is invoked. Two user roles are defined Admin and "Hans Herbert” who can claim the process in Camunda and proceed with the execution to “accept” or “reject” the application. Depending on result of the assessment, an email with contract or a rejection email will be sent to the applicant and database entry with the corresponding contract status will be created in application database.

**8. Additional Insurance Contract Signed:**
After the contract is accepted in the process for additional insurance, an email containing contract as an attachment is sent to the applicant along with a link to sign the contract. On clicking the link, when applicant selects “accept", the contract status is changed from “accepted” to “signed” in application database.

**9. Additional Insurance Contract Unsigned:**
After the contract is accepted in the process for Additional insurance, an email containing contract as an attachment is sent to the applicant and a link to sign the contract. On clicking the link, when applicant selects reject, the contract status is changed from “accepted” to “unsigned” in application database.

**10. Application expiration after 14 days:**
Once the applicant gets an email with additional questions for additional insurance, he is given a period of 14 days to click on the link and answer the questions,after which the application expires. There is no entry created in database for the same.

**11. Unsigned Contract Expiration after 30 days:**
Once the applicant gets an email with contract for basic or additional insurance,he is required to accept or reject the offer by clicking on the link and confirming the contract within a period of 30 days, after which time the contract expires. when the contact expires, contract status is changed from “accepted” to “expired"  in the application database for the same.


# Descision Logic

## Eligiblity Logic

| **Assess case subprocess** | - |
| ------------------ | - |
|The following image shows a comprehensive visualization of our assess case sub process which checks the case for eligibility. | ![alt text](https://github.com/DigiBP/digibp-spiez/blob/Swapna/documentation/assess%20case%20subprocess.png) |


| **DRD to assess case used in sub process** | - |
| ------------------ | - |
|The following image shows a comprehensive visualization of DRD, decision tables & rules for assessing the eligibility of the applicant. Be aware that if no supplementary insurance has been selected the application is always accepted. | ![alt text]( https://github.com/DigiBP/digibp-spiez/blob/Swapna/documentation/supplementary%20insurance.png) |

## Calculate Price Logic

| **Calculate price subprocess** | - |
| ------------------ | - |
| The following image shows a comprehensive visualization of our Calculate price subprocess. | ![alt text]( https://github.com/DigiBP/digibp-spiez/blob/Swapna/documentation/Calculate.png) |


| **Calculation of Person Factor** | - |
| ------------------ | - |
|The following image shows a comprehensive visualization of decision tables for calculation of Person Factor used in calculating the price of basic and additional insurance.|![alt text]( https://github.com/DigiBP/digibp-spiez/blob/Swapna/documentation/basicinsuranced.png) |


| **Calculate price subprocess DRD, Decision table &Rules** | - |
| ------------------ | - |
| The following image shows a comprehensive visualization of our DRD, decision tables & rules to calculate the price for basic and additional insurance for individual customers. | ![alt text]( https://github.com/DigiBP/digibp-spiez/blob/Swapna/documentation/Calculate%20price.png) |


# Roles

| Role  | Camunda  | Description   | 
|--|--|--  |
| Agent | ApplicationAgent  | This human task role is in charge for deciding whether a applicant is eligible when our decision logic is not able to assess the application.  | 
| IT-System| - | The IT-System handles the whole process on its own as far as the eligibilty descision logic allows it.  | 

#  Document and Databases

## Contract PDF
to be done

## Database
The application run on the Heroku OpenSource platform.  Google Spreadsheet  is used as a database to save and read all customer data. The customer data is inserted into the database as soon the application is processed and the assessment is completed.

The business key in the database identifies the different customer applications and is the main key. 

All personal contact details of applicants are stored in the database columns:A-L. Type of insurance is stored in columns M-T The health status of customers is shown in the columns V-AG. The price fo the different options of health insurance selected for each applicant are stored in columns AH-AN. Every time the status of the application is updated it is stored in columns AO-AR and finally the policy number and the pdf of signed contract are stored in columns AR and AS respectively. 
[Link to Database](https://docs.google.com/spreadsheets/d/1vylyVyxa2TxJ6EUE9TZ10fDxG6PzmvdVn69UXdBo5j0/edit?usp=sharing) 


# Tools and Software
The following tools and software have been used for implementing the Health insurance process

| Tool / Software  | Description |
| ------------- | ------------------ |
| Camunda Modeler | The Camunda Modeler is used to create BPMN, CMMN and DMN models. The modeler is based on [bpmn.io] (http://bpmn.io/).  |
| GitHub| Github is used for collaboration and versioning of the programming code as well as the models. |
|Heroku|Heroku is a PaaS (Platform as a Services) which is used to quickly build, run, and operate the Camunda in the cloud. |
|Integromat | Integromat is a free tool to connect apps and automate workflows using a beautiful, no-code, visual builder.
|Eledo | Eledo helps in automating documents by mapping data to get PDF.  Once you save and activate your document template, you can load new fields in Integromat immediately. Eledo prepares Web Form and REST API automatically. 
|Gmail | Gmail is a free email service developed by Google. Users can access Gmail on the web and using third-party programs that synchronize email content through POP or IMAPprotocols. The service is notable among website developers for its early adoption of Ajax.  
|Google Drive & Google Spreadsheet | Google Drive and Google Spreadsheet were used to store health-insurance-application data (also see previous section 'Database'). 
|Visual Studio Code |  To create scripts and HTML-pages 'Visual Studio Code' was used.

## Data Integration
For a smooth process several tools were used to integrate Email, Webhooks, PDF-genereator etc. A complete documentation about the APIs and fields used you find in that link here:
[Link to Data Integration documentation](readme.integration.md)

## Automation
Automation techniques and languages used:  

**JavaScript, JSON-Object and HTML**: Used in Webforms and Service tasks in Camunda. 

## Reasons for no AI
1.	First of all a chat bot is relatively slow compared to filling a form in once. As a chat bot requires to process every question, it breaks the process flow, which could be frustrating for customer.
2.	Our process is divided in basic and supplementary insurance. The flow in basic insurance is straightforward and automatic. But in case of additional insurance we need to ask additional questions and depending on assessment may require human intervention. Here the  implementing AI would be over-engineering and does not make any sense.
3.	(Not objective but time critical) As you are aware about our group dynamics from our group of 3 involved in hands-on, the time is also not anymore realistic for us.


# Camunda step by step process  (example run-through)

 **Step 1: Application process** 

<p><img src="https://github.com/DigiBP/digibp-spiez/blob/Swapna/documentation/application%20form.png" alt="alt text" style="float: right">   

Customer applies for the health insurance by filling the web application form on the website:
[we care](https://root.chi-projects.ch/digibp-spiez-web/index.html).In case of Basic health insurance, the customer is required to fill personal data and select from any of the 4 standard models on the webpage before clicking send. For additional Insurance, the customer can select from the three additional insurance models. The customer can select either one, two or all the three additional insurances depending on their needs and preferences. The price of the insurance varies based on the type of insurance or the combination of insurances selected. As soon as the application is sent with all relevant variables to herokuapp, camunda executes the assess case subprocess to check for eligibility. </p>



**Step 2 : Basic Insurance process** 

<p><img src="https://github.com/DigiBP/digibp-spiez/blob/Swapna/documentation/basic%20insurance%20contract.png" alt="alt text" style="float: right">, 
 
Go to: [Heroku](https://digibp-spiez.herokuapp.com/app/welcome/default/#/login) Login with ID: demo, Password: demo, click on tasklist and select health insurance process. Camunda executes the sub process“Assess case”. For basic insurance, the input variables from the form (age, gender, zip code) are used to calculate a person factor, which is an eligibility score calculated based on output from two decision tables:calculate persondata(sPersonprofile), which assigns a value of highprice person, lowpriceperson or mediumpriceperson based on the age and gender and second decision table : calculate area(sAreatype) which assigns a value of lowpricearea, mediumprice area or highprice area based on the zipcode where a person lives. nPersonfactor is derived using sAreatype and spersonprofile as input to arrive at a value that is assigned to every Individual customer. This value is used to calculate the insurance price of basic as well as additional insurances for all customers.
                         
When the application is accepted, the price is calculated, and pdf of the contract is generated automatically via Eledo and an email with contract is sent through integromat to the customer. A time period of 30 days is given to the customer for signing the contract after which the contract expires. </p>


**Step 3: Additional insurance process** 


<p><img src="https://github.com/DigiBP/digibp-spiez/blob/Swapna/documentation/Additional%20health%20insurance%20process.png" alt="alt text" style="float: right"> In case of additional Insurance, the applicant selects the additional insurance option in the webpage. It is sent to digiherokuapp and camunda executes additional insurance process. An automatic email with a link is sent to the customer requesting additional details. A period of 14 days is given to fill the application. 
As soon as the customer fills the additional details on the webpage, it is sent to digibpherokuapp and camunda starts the assess case sub process. 

The assessment subprocess takes all the input variables provided such as disabilities, previous health issues, drug addictions, medical history etc.,Based on the height and weight of the applicant BMI is calculated and this is used as one of the parameters to calculate the eligibility score. A rule is used to calculate the eligibility for additional insurance.

**bDisabilityOrBirthDefect+bOngoingTreatmentOrSurgery+bPastRejection+bDrugTaker+bHivInfected+bObese**

A value is assigned to each of the parameter, “0” if it is true or “1” if it is false. An applicant with a score of greater than 3 is automatically rejected. If a person has a score of 3 then he is eligible for manual assessment done by an underwriter in the back office, which is shown as a human task in our process. A score of less than 3 makes an applicant eligible for additional insurance, in which case the price is calculated, and contract sent. A period of is 30 days is given to sign the document, after which the contract expires.The status in the database is updated and an email is sent to the customer informing him about the expired contract.  In case of rejection the same is notified.</p>

**Step 4: Calculate price**

**Basic Insurance:** The insurance premium depends on the basic insurance model selected and the preferred franchise. The end price is calculated by multiplying nPersonfactor to the nbasepricebasicInsurance selected. 

                                 nBasePriceBasicInsurance*nPersonfactor

**Additional insurance:** 

- Dental Insurance: A customer is eligible for dental insurance, if and only if he has had a previous dental insurance coverage. The cost of the Insurance depends on the insurance coverage of CHF 2000 or CHF5000 per year. The final cost is calculated using the rule 

                                  nBasePriceDentalInsurance*nPersonfactor

- Alternative Insurance: The customer can benefit from applying for 3 Alternative insurance offerings: Chinese, acupuncture & a combination of both. The cost is calculated based on the model selected. 

                                   nBasePriceAlternativeinsurance*nPersonfactor

- Life insurance: is based on the total coverage the customer wants to select for. Two options of a total coverage of 100000 & 50000 are offered to the customer. The final price is calculated using the rule

                                    nBasePriceLifeInsurance*nPersonfactor

The final premium is a sum total of all the insurances selected by the customer. A contract is prepared giving the breakup of all the costs of insurances selected and the total cost. The customer can accept or reject an offer within a period of 30 days. Insurance coverage starts from start date of the contract period mentioned in the policy document and is valid as soon as the customer accepts the offer and signs the contract.
 	


## License
- [Apache License, Version 2.0](https://github.com/DigiBP/digibp-archetype-camunda-boot/blob/master/LICENSE)
