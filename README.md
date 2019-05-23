 ```
   .aMMMMP     dMMMMb    .aMMMb    dMP dMP     dMMMMb        .dMMMb     dMMMMb     dMP     dMMMMMP     dMMMMMP 
  dMP"        dMP.dMP   dMP"dMP   dMP dMP     dMP.dMP       dMP" VP    dMP.dMP    amr     dMP           .dMP"  
 dMP MMP"    dMMMMK"   dMP dMP   dMP dMP     dMMMMP"        VMMMb     dMMMMP"    dMP     dMMMP        .dMP"    
dMP.dMP     dMP"AMF   dMP.aMP   dMP.aMP     dMP           dP .dMP    dMP        dMP     dMP         .dMP"      
VMMMP"     dMP dMP    VMMMP"    VMMMP"     dMP            VMMMP"    dMP        dMP     dMMMMMP     dMMMMMP    
```


| Summary | Quicklinks |
| ------------------ | - |
|This repository contains an incident management workflow running on [Camunda BPM](https://docs.camunda.org). This repository is part of the group assignment of the Digitalization of the Business Processes (SS19) Module at the FHNW. Check out our [Presentation Slides](https://stillnotfinished.com) to get an overview of the process as well as the tools and technologies used. | [Camunda Health Insurance Offer Creator]( https://digibp-spiez.herokuapp.com) 

*Authors*
* Chris, [jaime.ramirez@students.fhnw.ch](mailto:xxx@students.fhnw.ch)
* David Emmenegger, [moritz.armingeon@students.fhnw.ch](mailto: david.emmenegger@students.fhnw.ch)
* Shreena, [xxx@students.fhnw.ch](mailto:xxx@students.fhnw.ch)
* Swapna, [xxx@students.fhnw.ch](mailto:xxx@students.fhnw.ch)


# Methodology and Approach
Please be aware that the reader should be familiar with BPMN 2.0. The processes and their flows are not described or explained in this project. 

This project was approached using the KISS (keep it simple, stupid) principle. With the KISS principle, a simple solution can be found to solve a complex problem. In addition to the KISS principle, the project team has chosen an agile approach to enable a high flexibility during the implementation and further to increase the success rate of the project.

## Design Approach
After the first lesson, we were able to execute the first workflow by running the Camunda BPM Engine on Heroku. Although with a limited functionality. It was a valuable experience for the group as new technologies were used. Furthermore, documentation and design plans were crafted and some tests were conducted. We treated every lesson and the following development and adaptions to the product as one sprint.

## Collaboration
Git Version control was used in order to work collaboratively on the project. GitHub was used for the versioning of the development increments, as well as to create the technical documentation.

We work with two Heroku instances and two GitHub Repositories. GitHub and Heroku can be seamlessly integrated with eachother, allowing a continous delivery of the implemented increment. 
- 1 Camunda / Tomcat: This instance holds the Camunda codebase. Camunda was firstly tested locally on the developer's machine and then  committed. Once committed, the repo is automatically deployed on Heroku.
- 2 Web Form / PHP: This instance contains the web-based components of our solution: The web-form to create new incidents, a status page to check the status of the tickets and an overview using the Tableau dashboards. 

## Testing
In order to minimalize defects, various functional tests were conducted. We created test-cases from an external view (black box). Furthermore, different decision paths were tested. Detected issues were tracked with the [Github issue management](https://github.com/DigiBP/digibp-saentis/issues) as well as with the tasks stored in the README.md file.

## Project Management
Tasks were tracked within this documentation and assigned to one of the team members. For such as small team, no designated project leader was chosen. Tasks were taken by the each teammember individually.

# Process Description (Health Insureance Offering Service)
The following chapter describes the basic idea behind the incident process we have selected. 

![Media Flows](https://github.com/DigiBP/digibp-saentis/blob/master/pics/BigPicture_v2.png)
We have implemented an incident management process. The incident management system runs for a fictional company called “Säntis Corporation”. Incidents are filed out by customer of the company as well as internal staff. The company has different incident managers which work on resolving these issues.

We have three main options to open a ticket:
* **e-Mail:** Send an e-Mail to the support address [t700agmb@robot.zapier.com] to automatically create a ticket
* **Web form:** Fill out the [web-form](https://saentisincident-php.herokuapp.com/views/createTicket.php) to create a new incident
* **Camunda:** Create the issue directly in [Camunda BPM](https://saentisincident.herokuapp.com/app/welcome/default/). For example, an issue received by phone can then directly recoreded.

Please be aware that all these channels are all using the REST API of Camunda. Therefore, further channels can be easiliy added in the future.

The **communication** with the incident creator is done by e-Mail. In case the identified incident is critical, the case manager gets informed. If the indicent has a impact for different customers a automatic tweet is generated to quickly inform other customers and to prevent the incident managers from further interruptions. Consequently, this should reduce the amount of similar issues received.

A **status report** of the ticket is provided by a reporting suite. Two general views were created: An [internal view](https://saentisincident-php.herokuapp.com/views/ticketDashboard.php), for incident managers and their supervisors, giving an overview of all tickets as well as a [external, personal view](https://saentisincident-php.herokuapp.com/views/ticketStatus.php) for the customer, where he may consult his ticket status.

### Process Description
xxx


## Overall Process
xxx



## Camunda Processes Step by Step Guide

### Issue Creation Process
xxx

![Media Flows](https://github.com/DigiBP/digibp-spiez/blob/master/Documentation/TestPrintScreen.png)

Example Picture



#### Create an Issue using Camunda


| **1 Step - Go to Camunda** | - |
| ------------------ | - |
|xxx |
| **2 Step - Incident Creation** | - |
|xxx|
| **3 Step - Incident Identification** | - |
|xxx |
| **4 Step - Add Incident Details** | - |
|xxxx|


## Automation
Different automation techniques and languages were used.
* **Groovy**: Quick changes to variables were realised in groovy. Mostly changes of the status-variable (State Machine)
* **JavaScript**: Slightly more complex requests were programmed in JavaScript. For example the Twitter integration.
* **Java**: More complex cases were programmed in Java. For example, the variable initialisation and the e-Mail interface was realized in Java.

## E-Mails
**E-Mail Outbound**
- Hook: https://hooks.zapier.com/hooks/catch/3017214/katznf/
- Test with:  curl -v -H "Accept: application/json"         -H "Content-Type: application/json"         -X POST         -d '{"email":"moritz.armingeon@gmail.com","msg":"This is a Test","title":"Incident Notification123"}'    https://hooks.zapier.com/hooks/catch/3017214/katznf/

**E-Mail Inbound**
- Hook: t700agmb@robot.zapier.com


## Instructions for Testing
xxxx

## License
- [Apache License, Version 2.0](https://github.com/DigiBP/digibp-archetype-camunda-boot/blob/master/LICENSE)
