 ```
   .aMMMMP     dMMMMb    .aMMMb    dMP dMP     dMMMMb        .dMMMb     dMMMMb     dMP     dMMMMMP     dMMMMMP 
  dMP"        dMP.dMP   dMP"dMP   dMP dMP     dMP.dMP       dMP" VP    dMP.dMP    amr     dMP           .dMP"  
 dMP MMP"    dMMMMK"   dMP dMP   dMP dMP     dMMMMP"        VMMMb     dMMMMP"    dMP     dMMMP        .dMP"    
dMP.dMP     dMP"AMF   dMP.aMP   dMP.aMP     dMP           dP .dMP    dMP        dMP     dMP         .dMP"      
VMMMP"     dMP dMP    VMMMP"    VMMMP"     dMP            VMMMP"    dMP        dMP     dMMMMMP     dMMMMMP    
```


| Summary | Quicklinks |
| ------------------ | - |
|This repository contains Health insurance process [Camunda BPM](https://docs.camunda.org). This repository is part of the group assignment of the Digitalization of the Business Processes (SS19) Module at the FHNW. Check out our [Presentation Slides](https://stillnotfinished.com) to get an overview of the process as well as the tools and technologies used. | [Camunda Health Insurance Offer Creator]( https://digibp-spiez.herokuapp.com) 

*Authors*
* Christopher Vogel, [christopher.vogel@students.fhnw.ch]
* David Emmenegger, [david.emmenegger@students.fhnw.ch]
* Shreeya Nema, [shreeya.nema@students.fhnw.ch]
* Swapna Chinta [swapna.chinta@students.fhnw.ch]


# Methodology and Approach
Please be aware that the reader should be familiar with BPMN 3.0. The processes and their flows are not described or explained in this project. 

## Design Approach

After the first lesson, we were able to execute the first workflow by running the Camunda BPM Engine on Heroku. Although with a limited functionality. It was a valuable experience for the group as new technologies were used. Furthermore, documentation and design plans were crafted and some tests were conducted. We treated every lesson and the following development and adaptions to the product as one sprint.

## Collaboration
Git Version control was used in order to work collaboratively on the project. GitHub was used for the versioning of the development increments, as well as to create the technical documentation.

We work with two Heroku instances and two GitHub Repositories. GitHub and Heroku can be seamlessly integrated with eachother, allowing a continous delivery of the implemented increment. 
- 1 Camunda / Tomcat: This instance holds the Camunda codebase. Camunda was firstly tested locally on the developer's machine and then  committed. Once committed, the repo is automatically deployed on Heroku.
- 2 Web Form / PHP: This instance contains the web-based components of our solution: The web-form to, 

## Testing
In order to minimalize defects and complete QA process successfully, various functional tests were conducted. The bug finding procedure included documenting the bugs and defect reporting and resolution. We created test-cases from an external view (black box).  Detected issues were tracked and documented in [Github test cases](https://github.com/DigiBP/digibp-spiez/blob/master/Bugs.docx).

## Project Management
Tasks were tracked within this documentation and assigned to one of the team members. For such as small team, no designated project leader was chosen. Tasks were taken by the each teammember individually.


# Process Description (Health Insurance Offering Service)

![Process flow](https://github.com/DigiBP/digibp-spiez/blob/Swapna/documentation/High-level%20process%20flow.png)

The Following chapter describes the basic idea behind the health insurance process.The fictitious company "We Care Health insurance" offers Basic and supplementary health insurance. Both models have  pre-defined  criteria, which need to be satisfied in order to be eligible for the insurance.The eligibilty criteria will be explained in detail in the chapte- Digitalized health insurance process. 

**Basic insurance:** The customer is eligible for basic insurance if he lives in switzerland. Depending on the zipcode,age and gender the price is calculated for every applicant. there are 4 different models that a customer can choose from: Telemedicine, General practitioner, Family doctor model and Standard Model.

**Supplementary Insurance:** If a customer wishes to apply for a supplementary insurance he can select from different models : Alterative, dental and Life insurance by answering additional health questions.

Based on the type of Insurance selected, the price is calculated and contract is sent to the customer.when the customer signs the contract and sends it back to the company through email via integromat, it is saved in the database and the application process is closed.

In order to understand the current application process, a high level AS-IS process was first created using Camunda BPMN 3.0. The AS-IS process required a lot of human interaction as explained in the next section(AS-IS Process). To minimize the human tasks the process is digitalized, and every step of digitalization process is documented (TO-BE Digitalized).



## AS-IS Process

 
The following image shows a comprehensive visualization of AS-IS process. 

|![alt text](https://github.com/DigiBP/digibp-spiez/blob/Swapna/documentation/As-is%20Process.png)|

1. The customer sends a physical application form, which is checked for completeness manually by a customer agent. If the  form  is incomplete, additional information is requested. Otherwise the application will be forwarded to back office for assessment.

2. The back office assesses the application. If the application is accepted an offer is created by another employee and the offer is sent to the applicant via post. In the case of rejection, the applicant is notified via email. 

3. If the customer accepts the offer, a contract is created by an employee and sent to the customer by post. As soon as the signed contract is received from the customer, a copy of the same is filed and stored.


## Overall Health Insurance Process
The figure below shows a simple visualization of our overall process. The following chapter is divided into 4 sections to explain the digitalized Health Insurance process: 

- Basic Insurance process
- Supplementary Insurance process
- Decision tables for checking eligibility
- Pricing Models to calculate the 


| **Overall Health Insurance Process** | 
| ------------------ | 
| ![alt text]( https://github.com/DigiBP/digibp-spiez/blob/Swapna/documentation/health%20insurance%20process.png) |










### Basic Insurance

Customer applies for the basic health Insurance by filling the web application form. The submitted Webform is sent will be sent via Integromat (https://hook.integromat.com/9pok51uratqwjukfnswiy52wzcnby2w8) to herokuapp with all relevant variables.  Camunda executes the decision table “Assess case”.  The decision table uses input variables from the form (age, date of birth, zip code) to calculate a person factor, which is an eligibility score calculated based on output from two decision tables: 
1. Calculate area: Assigns a value of high, medium or low risk to a customer based on zip code and,

2. Person data: Assigns a value of high, medium or low-price to the applicant based on age and gender.

Person factor is an eligibility score between 0 and 2. If the score is less than 2 the application is accepted else rejected. When the application is accepted, the price is calculated based on the Basic insurance model selected multiplied by the person factor and a contract generated. A pdf of the contract is created and stored in the database.  An email is sent to the customer with the contract and the signed application should be returned by the customer within a period of 30 days or the contract expires. When the customer sends the signed contract, the status is updated automatically in the database, the pdf of the contract is stored, and a confirmation email is sent to the customer. 
 




#### Create an Issue using Camunda


| **1 Step - Go to Camunda** | - |
| ------------------ | - |
|xxx |
| **2 Step -  Creation** | - |
|xxx|
| **3 Step -  Identification** | - |
|xxx |
| **4 Step - Add Incident Details** | - |
|xxxx|







##  Integrations

The process starts with a Web application form filled out by a customer.

|![ApplicationForm](https://github.com/DigiBP/digibp-spiez/blob/Swapna/documentation/Integration%201.png)|

The data will then be stored in the customer database by submitting the application form.

|![Database](https://github.com/DigiBP/digibp-spiez/blob/Swapna/documentation/integration2.png)|

Afterwards it will be sent to Camunda’s engine (see scenario in belows figure) from Integromat as a post request containing all necessary data for the application process and then the process starts automatically.

|![CamundaSendData](https://github.com/DigiBP/digibp-spiez/blob/Swapna/documentation/Integration3.png)|

For sending request for additional questions,  offer mail and contract to the customer a service task triggers the Integromat’s scenario which receives email,  from the ongoing cases in Camunda and sends an email containing a link for a specific purpose that will trigger the next step of the process.

|![Additional details](https://github.com/DigiBP/digibp-spiez/blob/Swapna/documentation/integration8.png)|


To check whether email with  filled in details of additional questions, offer mail or signed contract is received, the data from the google form is first saved in the specific database and change in status regularly updated and a message is sent to Camunda in form of a post request by the following scenario to proceed with the process.

|![ Updating Database](https://github.com/DigiBP/digibp-spiez/blob/Swapna/documentation/integration5.png)|


When the customer's eligibilty criteria is satisfied and application is accepted, a pdf contract is generated automatically using eledo  and the copy of the PDF is stored in the database. 

|![Contract](https://github.com/DigiBP/digibp-spiez/blob/Swapna/documentation/Integration7.png)|


##  Database

The application run on the Heroku OpenSource plattform.  Google Spreadsheet  is used as a database to save and read all customer data. The customer data is inserted into the database as soon the application is processed by the insurance company. 

The business key in the database identifies the different customer applications and is the main key. It is used for communication with customers to realize instantions of the process. 

All personal contact details of applicants are stored in the database columns (A-L). Type of insurance is stored in columns (M-T) The health status of customers is shown in the columns (V-AG) . The price fo the different options of health insurance selected for each applicant are stored in columns Ah-An. every time the status of the application is updated it is stored in colums Ao to Ar and finally the policy number and the pdf of signed contract are stored in columns Ar and As respectively 
![Database](https://docs.google.com/spreadsheets/d/1vylyVyxa2TxJ6EUE9TZ10fDxG6PzmvdVn69UXdBo5j0/edit#gid=0) 









xxxx

## License
- [Apache License, Version 2.0](https://github.com/DigiBP/digibp-archetype-camunda-boot/blob/master/LICENSE)
