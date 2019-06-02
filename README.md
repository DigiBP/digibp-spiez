
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
Please be aware that the reader should be familiar with BPMN 2.0. 

## Design Approach

After the first lesson, we were able to execute the first workflow by running the Camunda BPM Engine on Heroku. Although with a limited functionality. It was a valuable experience for the group as new technologies were used. Furthermore, documentation and design plans were crafted and some tests were conducted. We treated every lesson and the following development and adaptions to the product as one sprint.

## Collaboration
Git Version control was used in order to work collaboratively on the project. GitHub was used for the versioning of the development increments, as well as to create the technical documentation.

We work with two Heroku instances and two GitHub Repositories. GitHub and Heroku can be seamlessly integrated with eachother, allowing a continous delivery of the implemented increment. 
- 1 Camunda / Tomcat: This instance holds the Camunda codebase. Camunda was firstly tested locally on the developer's machine and then  committed. Once committed, the repo is automatically deployed on Heroku.
- 2 Web Form / PHP: This instance contains the web-based components of our solution: The web-form to apply for health insurance process.

## Testing
In order to minimalize defects and complete QA process successfully, various functional tests were conducted. The bug finding procedure included documenting the bugs and defect reporting and resolution. We created test-cases from an external view (black box).  Detected issues were tracked and documented in [Github test cases](https://github.com/DigiBP/digibp-spiez/blob/master/Bugs.docx).

## Project Management
Tasks were tracked within this documentation and assigned to one of the team members. For such as small team, no designated project leader was chosen. Tasks were taken by the each teammember individually.


# Process Description (We Care: Health Insurance Offering Service)

![Process flow](https://github.com/DigiBP/digibp-spiez/blob/Swapna/documentation/Highlevel%20orocess%20flow.png)

The following chapter describes the basic idea behind the health insurance process.The fictitious company "We Care health insurance" offers basic and supplementary health insurance. Both models have  pre-defined  criteria, which need to be satisfied in order to be eligible for the insurance.The eligibilty criteria will be explained in detail in the chapter digitalized health insurance process. 

**Basic insurance:** The customer is eligible for basic insurance if he lives in switzerland. Depending on the zipcode,age and gender the price is calculated for every applicant. There are 4 different models that a customer can choose from: Telemedicine, General practitioner, Family doctor model and Standard model.

**Additional insurance:** If a customer wishes to apply for a supplementary insurance he can select from different models : Alterative, Dental and Life insurance by answering additional health questions.

Based on the type of insurance selected, the price is calculated and contract is sent to the customer.when the customer signs the contract and sends it back to the company through email via integromat, it is saved in the database and the application process is closed.

In order to understand the current application process, a high level AS-IS process was first created using Camunda BPMN 2.0. The AS-IS process required a lot of human interaction as explained in the next section. To minimize the human tasks the process is digitalized, and every step of digitalization process is documented.



## AS-IS Process

 
The following image shows a comprehensive visualization of AS-IS process. 

|![alt text](https://github.com/DigiBP/digibp-spiez/blob/Swapna/documentation/As-is%20Process.png)|

1. The customer sends a physical application form, which is checked for completeness manually by a customer agent. If the  form  is incomplete, additional information is requested. Otherwise the application will be forwarded to back office for assessment.

2. The back office assesses the application. If the application is accepted an offer is created by another employee and the offer is sent to the applicant via post. In case of rejection, the applicant is notified via email. 

3. If the customer accepts the offer, a contract is created by an employee and sent to the customer by post. As soon as the signed contract is received from the customer, a copy of the same is stored in the database.


## Overall Health Insurance Process
The figure below shows a simple visualization of our overall process. The following chapter is divided into 3 sections to give a comprehensive visualization of the digitalized Health insurance process:
- Basic insurance process
- Additional insurance process
- Calculate price


## Overall Process
The following figure shows a visualization of our overall process. 

| **Overall Process** | 
| ------------------ | 
| ![alt text](https://github.com/DigiBP/digibp-spiez/blob/Swapna/documentation/health%20insurance%20process.png) |

### Basic Insurance process

| **Basic Insurance process** | - |
| ------------------ | - |
|The following image shows a comprehensive visualization of Basic Insurance process. |![alt text]( https://github.com/DigiBP/digibp-spiez/blob/Swapna/documentation/Basic%20insurance%20process.png) |

| **Basic Insurance decision tables** | - |
| ------------------ | - |
|The following image shows a comprehensive visualization of decision tables for eligibility check for basic insurance. |![alt text]( https://github.com/DigiBP/digibp-spiez/blob/Swapna/documentation/basicinsuranced.png) |


### Additional insurance process

| **Additional insurance process** | - |
| ------------------ | - |
|The following image shows a comprehensive visualization of our Additional insurance process and  the sub process- Assess case for checking eligibility. | ![alt text](https://github.com/DigiBP/digibp-spiez/blob/Swapna/documentation/assess%20case%20subprocess.png) |


| **Additional insurance: DRD, Decision tables & rules** | - |
| ------------------ | - |
|The following image shows a comprehensive visualization of DRD, decision tables & rules for assessing the eligibility of the applicant for Additional Insurance. | ![alt text]( https://github.com/DigiBP/digibp-spiez/blob/Swapna/documentation/supplementary%20insurance.png) |


### Calculate price subprocess

| **Calculate price subprocess** | - |
| ------------------ | - |
| The following image shows a comprehensive visualization of our Calculate price subprocess. | ![alt text]( https://github.com/DigiBP/digibp-spiez/blob/Swapna/documentation/Calculate.png) |


| **Calculate price subprocess DRD, Decision table &Rules** | - |
| ------------------ | - |
| The following image shows a comprehensive visualization of our DRD, decision tables & rules to calculate the price for individual customers. | ![alt text]( https://github.com/DigiBP/digibp-spiez/blob/Swapna/documentation/Calculate%20price.png) |


### Camunda step by step process

| **Step1: Application process** | - |
| ------------------ | - |
Customer applies for the health insurance by filling the web application form. In case of Basic health insurance, the customer is required to fill personal data and select from any of the 4 standard models on the webpage before clicking send. For additional Insurance, the customer can select from the three additional insurance models. The customer can select either one, two or all the three additional insurances depending on their needs and preferences. The price of the insurance varies based on the type of insurance or the combination of insurances selected. As soon as the application is sent with all relevant variables to herokuapp, camunda executes the assess case subprocess to check for eligibility. | ![alt text]( https://github.com/DigiBP/digibp-spiez/blob/Swapna/documentation/application%20form.png) |

| **Step 2 : Basic Insurance process** | - |
| ------------------ | - |
Camunda executes the sub process “Assess case”. For basic insurance, the input variables from the form (age, gender, zip code) are used to calculate a person factor, which is an eligibility score calculated based on output from two decision tables as seen in the previous section.the person factor is used to calculate. When the application is accepted, the price is calculated, and pdf of the contract is generated automatically via Eledo and an email with contract is sent through integromat to the customer. A time period of 30 days is given to the customer for signing the contract after which the contract expires. | ![alt text]( https://github.com/DigiBP/digibp-spiez/blob/Swapna/documentation/basic%20insurance%20contract.png) |

| **Step 3: Additional insurance process** | - |
| ------------------ | - |

<p><img src="https://github.com/DigiBP/digibp-spiez/blob/Swapna/documentation/Additional%20health%20insurance%20process.png" alt="alt text" style="float: right"> In case of additional Insurance, the applicant selects the additional insurance option in the webpage. It is sent to digiherokuapp and camunda executes additional insurance process. An automatic email with a link is sent to the customer requesting additional details. A period of 14 days is given to fill the application. 
As soon as the customer fills the additional details on the webpage, it is sent to digibpherokuapp and camunda starts the assess case sub process. 

The assessment subprocess takes all the input variables provided such as disabilities, previous health issues, drug addictions, medical history etc., BMI is calculated using the height and weight of the person which is used to determine if the person is obese or not. an eligibility check is performed using the variables. If the eligibility score <3 application is accepted, if the score is >3 the application is rejected and a score of 3 requires manual assessment, which is done by employee at the back office. 
If the assessment is complete and customer accepted, a contract is sent to the customer and a time period of 30 days is given. In case of rejection the same is notified.</p>|




 

##  Integrations

**The process starts with a web application form filled which is sent via AJAX sending JSON element to:**
![ApplicationForm JSON](https://github.com/DigiBP/digibp-spiez/blob/Swapna/documentation/startprocessjson.png)
![ApplicationForm](https://github.com/DigiBP/digibp-spiez/blob/Swapna/documentation/Integration%201.png)


**For Additional Insurance, an email requesting additional details sent. email is defined in Integromat**
![ApplicationForm JSON](https://github.com/DigiBP/digibp-spiez/blob/Swapna/documentation/Additonalquestionsjson.png)


**Sending answers of additional health questions from web form to waiting message trigger of a specific process instance done via:**
![Send answers JSON](https://github.com/DigiBP/digibp-spiez/blob/Swapna/documentation/Sending%20answersjson.png)


**When the assessment of the application is done, the accepted or rejected data is going to be saved in our database, google drive table sheet persistently via an integromat service. The integromat service is triggered by:**
![Database JSON](https://github.com/DigiBP/digibp-spiez/blob/Swapna/documentation/Savedataafterassessment.png)
![Output](https://github.com/DigiBP/digibp-spiez/blob/Swapna/documentation/output.com.png)
![Database](https://github.com/DigiBP/digibp-spiez/blob/Swapna/documentation/integration2.png)


**The following JSON element is sent to integromat to create a PDF via Eledo and send an update to our database with a url to the created pdf**
![Eledo JSON](https://github.com/DigiBP/digibp-spiez/blob/Swapna/documentation/pdfeledo.png)


**The contract is sent to customer via:**
![Send contract](https://github.com/DigiBP/digibp-spiez/blob/Swapna/documentation/sendcontract.png)


**Receiving a decision from the customer whether a contract is accepted or not is sent to Camunda from web form to waiting message trigger of a specific process instance is done via:**
![recieve mail](https://github.com/DigiBP/digibp-spiez/blob/Swapna/documentation/receivemail.png)


**The following message is sent by integromat service to update application status of an already inserted data row in our application database. Currently it is only used to set for the stati: unsigned/signed/SignatureTimeExpired**
![Updating Database](https://github.com/DigiBP/digibp-spiez/blob/Swapna/documentation/setnewstatus.png)


**Send contract information to customer**
![Contract](https://github.com/DigiBP/digibp-spiez/blob/Swapna/documentation/sendcontract12.png)


**Send rejection to customer**
![send rejection](https://github.com/DigiBP/digibp-spiez/blob/Swapna/documentation/send%20rejection.png)


**Send expiration email to customer**
![send expiration](https://github.com/DigiBP/digibp-spiez/blob/Swapna/documentation/expiration.png)


##  Database

The application run on the Heroku OpenSource platform.  Google Spreadsheet  is used as a database to save and read all customer data. The customer data is inserted into the database as soon the application is processed and the assessment is completed.

The business key in the database identifies the different customer applications and is the main key. 

All personal contact details of applicants are stored in the database columns (A-L). Type of insurance is stored in columns (M-T) The health status of customers is shown in the columns (V-AG) . The price fo the different options of health insurance selected for each applicant are stored in columns Ah-An. every time the status of the application is updated it is stored in colums Ao to Ar and finally the policy number and the pdf of signed contract are stored in columns Ar and As respectively 

![Database](https://github.com/DigiBP/digibp-spiez/blob/Swapna/documentation/Database.png) 


## Tools and Software
The following tools and software have been used for implementing the Health insurance process

| Tool / Software  | Description |
| ------------- | ------------------ |
| Camunda Modeler | The Camunda Modeler is used to create BPMN, CMMN and DMN models. The modeler is based on [bpmn.io] (http://bpmn.io/).  |
| GitHub| Github is used for collaboration and versioning of the programming code as well as the models. |
|Heroku|Heroku is a PaaS (Platform as a Services) which is used to quickly build, run, and operate the Camunda in the cloud. |
|Integromat | **<font color=red> Some text</font>** 
|Eledo | Eledo helps in automating documents by mapping data to get PDF.  Once you save and activate your document template, you can load new fields in Integromat immediately. Eledo prepares Web Form and REST API automatically.  

## Automation
Different automation techniques and languages were used.
**JavaScript**:  









## License
- [Apache License, Version 2.0](https://github.com/DigiBP/digibp-archetype-camunda-boot/blob/master/LICENSE)
