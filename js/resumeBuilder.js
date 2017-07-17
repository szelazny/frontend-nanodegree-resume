var bio = {
    "name": "Scott Zelazny",
    "role": "Database Developer",
    "contacts": {
        "mobile": "443-353-0939",
        "email": "scott_z_1@yahoo.com",
        "github": "szelazny",
        "location": "Baltimore, Maryland USA"
    },
    "biopic": "images/fry.jpg",
    "welcomeMessage": "Hi, Welcome to my resume. This is my second project for Udacity front end developer nanodegree course. I'm a database developer/DBA who wants to learn to code web pages.",
    "skills": ["PL/SQL", "DBA", "JavaScript", "HTML", "CSS", "Unix / Linux", "Oracle", "Oracle APEX"],
    "display": function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name),
            formattedheaderRole = HTMLheaderRole.replace("%data%", bio.role),
            formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile),
            formattedemail = HTMLemail.replace("%data%", bio.contacts.email),
            formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter),
            formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github),
            formattedblog = HTMLblog.replace("%data%", bio.contacts.blog),
            formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location),
            formattedContacts = formattedmobile + formattedemail + formattedtwitter + formattedgithub + formattedblog + formattedlocation;
        formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic),
            formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage),
            formattedSkills = "";

        $("#header").prepend(formattedName + formattedheaderRole);
        $("#topContacts").append(formattedContacts);
        $("#footerContacts").append(formattedContacts);
        $("#header").append(formattedbioPic + formattedwelcomeMsg);

        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for (var skill in bio.skills) {
                if (bio.skills.hasOwnProperty(skill)) {
                    formattedSkills += HTMLskills.replace("%data%", bio.skills[skill]);
                }
            }
            $("#skills").append(formattedSkills);
        }

    }
};

var education = {
    "schools": [{
            "name": "Georgia Institute of Technology",
            "degree": "Bachelor of Science",
            "dates": "1983 - 1988",
            "location": "Atlanta, Georgia",
            "majors": ["Electrical Engineering"],
            "url": "http://www.gatech.edu/"
        },
        {
            "name": "University of Maryland University College",
            "degree": "Bachelors",
            "dates": "1995 - 1998",
            "location": "College Park, Maryland",
            "majors": ["Computer and Information Science"],
            "url": "http://www.umuc.edu/"
        }
    ],
    "onlineCourses": [{
        "title": "Front End Web Development",
        "school": "Udacity",
        "dates": "2017",
        "url": "http://udacity.com"
    }],
    "display": function() {
        $("#education").append(HTMLschoolStart);
        for (var school in education.schools) {
            if (education.schools.hasOwnProperty(school)) {
                var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name),
                    formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree),
                    formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates),
                    formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location),
                    formattedschoolMajor = "";

                for (var majors in education.schools[school].majors) {
                    if (education.schools[school].majors.hasOwnProperty(majors)) {
                        formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[majors]);
                    }
                }

                var formattedEducation = formattedschoolName + formattedschoolDegree + formattedschoolDates + formattedschoolLocation + formattedschoolMajor;
                $(".education-entry").append(formattedEducation);
            }
        }

        for (var course in education.onlineCourses) {
            if (education.onlineCourses.hasOwnProperty(course)) {
                var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title),
                    formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school),
                    formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates),
                    formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url),
                    formattedonlineCourses = HTMLonlineClasses + formattedonlineTitle + formattedonlineSchool + formattedonlineDates + formattedonlineURL;

                $(".education-entry").append(formattedonlineCourses);
            }
        }
    }
};

var work = {
    "jobs": [{
            "employer": "AT&T",
            "title": "Gov Sr Spec Software Design",
            "dates": "2010 - present",
            "location": "Columbia, Maryland",
            "description": "Developer/DBA on database applications using Oracle APEX web development tool with an Oracle database.  Assignments have included everything from maintenance programming to developing entire new applications."
        },
        {
            "employer": "Wells Fargo",
            "title": "Apps Systems Engineer",
            "dates": "2001 - 2010",
            "location": "Greenbelt, Maryland",
            "description": "Programmer on a suite of several client/server database applications using a PowerBuilder front end and an Oracle back end.  Assignments have included everything from help desk/customer support, testing, debugging, to developing entire new applications."
        },
        {
            "employer": "Peace Technology",
            "title": "Sr Programmer",
            "dates": "1997 - 2001",
            "location": "Laurel, Maryland",
            "description": "Lead programmer on several client/server database applications using a PowerBuilder front end and Oracle or Sybase back end."
        },
        {
            "employer": "Electrical Engineer",
            "title": "",
            "dates": "1989 - 1997",
            "location": "various locations",
            "description": "Worked as an Electrical Engineer for Bethlehem Steel Corporation (1989-1990), Bechtel Power Corporation (1990-1993), Exide Electronics (1993-1994), and Peer Consultants/ ICF Kaiser Engineers (1994-1997).  Performed a wide range of duties, including the design, construction, and maintenance of electrical facilities for industrial facilities.  Projects included power plants, backup power systems, steel mills, and waste water treatment facilities.  Duties included writing specifications, evaluating bids, reviewing vendor drawings for specification compliance, performing calculations, designing electrical and control systems, witness testing, preparing change orders, defending claims, and resolving field problems."
        }
    ],
    "display": function() {
        $("#workExperience").append(HTMLworkStart);
        for (var job in work.jobs) {
            if (work.jobs.hasOwnProperty(job)) {
                var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer),
                    formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title),
                    formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates),
                    formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location),
                    formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
                var formattedWork = formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription;
                $(".work-entry").append(formattedWork);
            }
        }
    }
};

var projects = {
    "projects": [{

            "title": "Project 1",
            "dates": "1997 - 2017",
            "description": "I don't care to put project information in my resume.  It's irrelevant to my skills and achievements, and nothing that's available to the public.",
            "images": ["images/placekitten_01.jpg", "images/placekitten_02.jpg"]
        },
        {
            "title": "Project 2",
            "dates": "1997 - 2017",
            "description": "I don't care to put project information in my resume.  It's irrelevant to my skills and achievements, and nothing that's available to the public.",
            "images": ["images/placekitten_01.jpg", "images/placekitten_02.jpg"]
        },
        {
            "title": "Project 3",
            "dates": "1997 - 2017",
            "description": "I don't care to put project information in my resume.  It's irrelevant to my skills and achievements, and nothing that's available to the public.",
            "images": ["images/placekitten_01.jpg", "images/placekitten_02.jpg"]

        }
    ],
    "display": function() {
        $("#projects").append(HTMLprojectStart);
        for (var project in projects.projects) {
            if (projects.projects.hasOwnProperty(project)) {
                var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title),
                    formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates),
                    formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description),
                    formattedprojectImage = "";

                for (var image in projects.projects[project].images) {
                    if (projects.projects[project].images.hasOwnProperty(image)) {
                        formattedprojectImage += HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                    }
                }

                var formattedproject = formattedprojectTitle + formattedprojectDates + formattedprojectDescription + formattedprojectImage;
                $(".project-entry").append(formattedproject);
            }
        }
    }
};



//$("#main").append(internationalizeButton);
function inName(name) {
    if (!name) {
        name = bio.name;
    }
    var split = "",
        firstName = "",
        lastName = "",
        fullName = "";
    split = name.trim().split(" ");
    firstName = split[0].slice(0, 1).toUpperCase() + split[0].slice(1).toLowerCase();
    lastName = split[1].toUpperCase();
    fullName = firstName + " " + lastName;
    return fullName;
}

$("#mapDiv").append(googleMap);

bio.display();
work.display();
projects.display();
education.display();


function locationizer(work_obj) {
    var locationArray = [];
    for (var job in work_obj.jobs) {
        if (work_obj.jobs.hasOwnProperty(job)) {
            var newLocation = work_obj.jobs[job].location;
            locationArray.push(newLocation);
        }
    }
    return locationArray;
}
