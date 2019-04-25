 ```
   .aMMMMP     dMMMMb    .aMMMb    dMP dMP     dMMMMb        .dMMMb     dMMMMb     dMP     dMMMMMP     dMMMMMP 
  dMP"        dMP.dMP   dMP"dMP   dMP dMP     dMP.dMP       dMP" VP    dMP.dMP    amr     dMP           .dMP"  
 dMP MMP"    dMMMMK"   dMP dMP   dMP dMP     dMMMMP"        VMMMb     dMMMMP"    dMP     dMMMP        .dMP"    
dMP.dMP     dMP"AMF   dMP.aMP   dMP.aMP     dMP           dP .dMP    dMP        dMP     dMP         .dMP"      
VMMMP"     dMP dMP    VMMMP"    VMMMP"     dMP            VMMMP"    dMP        dMP     dMMMMMP     dMMMMMP    
```

# DigiBP Camunda Template

[![License](http://img.shields.io/:license-apache-blue.svg)](http://www.apache.org/licenses/LICENSE-2.0.html)
[![Deploy to Heroku](https://img.shields.io/badge/deploy%20to-Heroku-6762a6.svg?longCache=true)](https://heroku.com/deploy)

## Maintainer
- [Digitalisation of Business Processes](https://github.com/digibp)

## License

- [Apache License, Version 2.0](https://github.com/DigiBP/digibp-archetype-camunda-boot/blob/master/LICENSE)

# DigiBP Camunda Template
2
​
3
[![License](http://img.shields.io/:license-apache-blue.svg)](http://www.apache.org/licenses/LICENSE-2.0.html)
4
[![Deploy to Heroku](https://img.shields.io/badge/deploy%20to-Heroku-6762a6.svg?longCache=true)](https://heroku.com/deploy)
5
​
6
## Maintainer
7
- [Digitalisation of Business Processes](https://github.com/digibp)
8
​
9
## License
10
​
11
- [Apache License, Version 2.0](https://github.com/DigiBP/digibp-archetype-camunda-boot/blob/master/LICENSE)
12
​
13
# DigiBP Säntis Incident Management [![License](http://img.shields.io/:license-apache-blue.svg)](http://www.apache.org/licenses/LICENSE-2.0.html)
14
```
15

 
                                                                                                               

________  .__       .______________________    _________  _ _  __  .__        
16
\______ \ |__| ____ |__\______   \______   \  /   _____/ _____/  |_|__| ______
17
 |    |  \|  |/ ___\|  ||    |  _/|     ___/  \_____  \ /    \   __\  |/  ___/
18
 |    `   \  / /_/  >  ||    |   \|    |      /        \   |  \  | |  |\___ \ 
19
/_______  /__\___  /|__||______  /|____|     /_______  /___|  /__| |__/____  >
20
        \/  /_____/            \/                    \/     \/             \/ 
21
```                                                                       
22
                                                                          
23
| Summary | Quicklinks |
24
| ------------------ | - |
25
|This repository contains an incident management workflow running on [Camunda BPM](https://docs.camunda.org). This repository is part of the group assignment of the Digitalization of the Business Processes (SS18) Module at the FHNW. Check out our [Presentation Slides](https://speakerdeck.com/joelschmid91/santis-group-digitalisation-of-business-processes) to get an overview of the process as well as the tools and technologies used. | [Camunda BPN Incident Management]( https://saentisincident.herokuapp.com/ ) - [PHP Web Incident Management](https://saentisincident-php.herokuapp.com/) -  [Create an Issue by E-Mail](mailto:t700agmb@robot.zapier.com)|
26
​
27
*Authors*
28
* Jaime Ramirez, [jaime.ramirez@students.fhnw.ch](mailto:jaime.ramirez@students.fhnw.ch)
29
* Moritz Armingeon, [moritz.armingeon@students.fhnw.ch](mailto:moritz.armingeon@students.fhnw.ch)
30
* Joël Schmid, [joel.schmid@students.fhnw.ch](mailto:joel.schmid@students.fhnw.ch)
31
​
32
​
33
# Methodology and Approach
34
Please be aware that the reader should be familiar with BPMN 2.0. The processes and their flows are not described or explained in this project. 
35
​
36
This project was approached using the KISS (keep it simple, stupid) principle. With the KISS principle, a simple solution can be found to solve a complex problem. In addition to the KISS principle, the project team has chosen an agile approach to enable a high flexibility during the implementation and further to increase the success rate of the project.
37
​
38
## Design Approach
39
After the first lesson, we were able to execute the first workflow by running the Camunda BPM Engine on Heroku. Although with a limited functionality. It was a valuable experience for the group as new technologies were used. Furthermore, documentation and design plans were crafted and some tests were conducted. We treated every lesson and the following development and adaptions to the product as one sprint.
40
​
41
## Collaboration
42
Git Version control was used in order to work collaboratively on the project. GitHub was used for the versioning of the development increments, as well as to create the technical documentation.
43
​
44
We work with two Heroku instances and two GitHub Repositories. GitHub and Heroku can be seamlessly integrated with eachother, allowing a continous delivery of the implemented increment. 
45
- 1 Camunda / Tomcat: This instance holds the Camunda codebase. Camunda was firstly tested locally on the developer's machine and then  committed. Once committed, the repo is automatically deployed on Heroku.
46
- 2 Web Form / PHP: This instance contains the web-based components of our solution: The web-form to create new incidents, a status page to check the status of the tickets and an overview using the Tableau dashboards. 
47
​
48
## Testing
49
In order to minimalize defects, various functional tests were conducted. We created test-cases from an external view (black box). Furthermore, different decision paths were tested. Detected issues were tracked with the [Github issue management](https://github.com/DigiBP/digibp-saentis/issues) as well as with the tasks stored in the README.md file.
50
​
51
## Project Management
52
Tasks were tracked within this documentation and assigned to one of the team members. For such as small team, no designated project leader was chosen. Tasks were taken by the each teammember individually.
53
​
54
# Process Description (Incident Management)
55
The following chapter describes the basic idea behind the incident process we have selected. 
56
​
57
![Media Flows](https://github.com/DigiBP/digibp-saentis/blob/master/pics/BigPicture_v2.png)
58
We have implemented an incident management process. The incident management system runs for a fictional company called “Säntis Corporation”. Incidents are filed out by customer of the company as well as internal staff. The company has different incident managers which work on resolving these issues.
