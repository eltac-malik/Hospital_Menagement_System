let doctorCards = document.getElementById("cards");

let doctors = [
  {
    doctorId: Math.random(),
    price: 100,
    isPopular: true,
    education: [
      {
        year: "1998 - 2003",
        university: "American Dental Medical University",
        field: "BDS",
      },
      {
        year: "2003 - 2005",
        university: "American Dental Medical University",
        field: "MDS",
      },
    ],
    experience: [
      {
        year: "2010 - Present (5 years)",
        hospital: "Massachusetts General Hospital",
      },
      {
        year: "2007 - 2010 (3 years)",
        hospital: "Cleveland Clinic",
      },
      {
        year: "2005 - 2007 (2 years)",
        hospital: "Stanford Health Care",
      },
    ],
    award: [
      {
        year: "July 2019",
        awardName: "Humanitarian Award",
        awardAbout: "Lorem ipsum dolor sit amet",
      },
      {
        year: "March 2011",
        awardName: "Certificate for International Volunteer Service",
        awardAbout: "Lorem ipsum dolor sit amet",
      },
      {
        year: "May 2008",
        awardName: "The Dental Professional of The Year Award",
        awardAbout: "Lorem ipsum dolor sit amet",
      },
    ],
    service: [
      "Tooth cleaning",
      "Root Canal Therapy",
      "Implants",
      "Composite Bonding",
      "Fissure Sealants",
      "Surgical Extractions",
    ],
    specialization: [
      "Children Care",
      "Dental Care",
      "Oral and Maxillofacial Surgery",
      "Orthodontist",
      "Periodontist",
      "Prosthodontics",
    ],
    overview: {
      about: "Lorem ipsum dolor sit amet",
    },
    name: "Dr. Ruby Perrin",
    hosp: "Massachusetts General Hospital",
    hospitalImage:
      "https://assets-varnish.triblive.com/2022/01/4688143_web1_vnd-acmh-012822.jpg",
    spec: "MDS - Periodontology and Oral Implantology, BDS",
    image:
      "https://doccure.dreamguystech.com/html/template/assets/img/doctors/doctor-thumb-01.jpg",
    depimg:
      "https://doccure.dreamguystech.com/html/template/assets/img/specialities/specialities-05.png",
    dep: "Dentist",
    location: " Florida, USA",
    wage: " $300 - $1000 ",
    feed: " 17 Feedback",
    pers: " 98%",
    procedure: "Dental Fillings",
    procedure2: "Whitening",
  },
  {
    doctorId: Math.random(),
    price: 125,
    isPopular: false,
    education: [
      {
        year: "2005 - 2011",
        university: "Johns Hopkins University School of Medicine",
        field: "MD",
      },
      {
        year: "2011 - 2014",
        university: "University of California, San Francisco",
        field: "Residency in Dermatology",
      },
    ],
    experience: [
      {
        year: "2016 - Present (7 years)",
        hospital: "Johns Hopkins Hospital",
      },
      {
        year: "2013 - 2016 (3 years)",
        hospital: "Mayo Clinic",
      },
    ],
    award: [
      {
        year: "July 2021",
        awardName: "Dermatologist of the Year Award",
        awardAbout: "Lorem ipsum dolor sit amet",
      },
      {
        year: "March 2014",
        awardName: "Certificate of Appreciation for Outstanding Patient Care",
        awardAbout: "Lorem ipsum dolor sit amet",
      },
    ],
    service: [
      "Acne Treatment",
      "Skin Allergies Treatment",
      "Botox Treatment",
      "Chemical Peel",
      "Dermal Fillers",
      "Laser Hair Removal",
    ],
    specialization: [
      "General Dermatology",
      "Cosmetic Dermatology",
      "Pediatric Dermatology",
      "Dermatopathology",
      "Mohs Surgery",
      "Immunodermatology",
    ],
    overview: {
      about: "Lorem ipsum dolor sit amet",
    },
    name: "Dr. Jessica Wong",
    hosp: "Johns Hopkins Hospital",
    hospitalImage:
      "https://www.stanfordchildrens.org/content-public/location/stanford-hospital/stanford-hospital-720x315.jpg",
    spec: "MD - Dermatology, MBBS",
    image:
      "https://doccure.dreamguystech.com/html/template/assets/img/doctors/doctor-thumb-03.jpg",
    depimg:
      "https://doccure.dreamguystech.com/html/template/assets/img/specialities/specialities-02.png",
    dep: "Dermatologist",
    location: "California, USA",
    wage: " $250 - $800 ",
    feed: " 24 Feedback",
    pers: " 97%",
    procedure: "Acne Treatment",
    procedure2: "Botox Injections",
  },
  {
    doctorId: Math.random(),
    price: 150,
    isPopular: true,
    education: [
      {
        year: "2004 - 2010",
        university: "Harvard Medical School",
        field: "MD",
      },
      {
        year: "2010 - 2013",
        university: "Johns Hopkins Hospital",
        field: "Residency in Internal Medicine",
      },
      {
        year: "2013 - 2016",
        university: "Mayo Clinic",
        field: "Fellowship in Cardiology",
      },
    ],
    experience: [
      {
        year: "2016 - Present (7 years)",
        hospital: "Duke University Hospital",
      },
      {
        year: "2013 - 2016 (3 years)",
        hospital: "University of California, San Francisco Medical Center",
      },
    ],
    award: [
      {
        year: "August 2021",
        awardName: "Cardiologist of the Year Award",
        awardAbout: "Lorem ipsum dolor sit amet",
      },
      {
        year: "May 2014",
        awardName: "Certificate of Achievement in Cardiovascular Research",
        awardAbout: "Lorem ipsum dolor sit amet",
      },
    ],
    service: [
      "Cardiac Catheterization",
      "Echocardiogram",
      "Electrocardiogram (ECG)",
      "Holter and Event Monitoring",
      "Pacemaker Implantation",
      "Stress Tests",
    ],
    specialization: [
      "Cardiac Electrophysiology",
      "Cardiac Imaging",
      "Interventional Cardiology",
      "Nuclear Cardiology",
      "Pediatric Cardiology",
      "Preventive Cardiology",
    ],
    overview: {
      about: "Lorem ipsum dolor sit amet",
    },
    name: "Dr. James Smith",
    hosp: "Duke University Hospital",
    hospitalImage:
      "https://www.stlukeshealth.org/content/dam/stlukeshealth/images/location-header/new-bslmc-day-2-0.jpg/jcr:content/renditions/cq5dam.web.1120.743.jpeg",

    spec: "MD - Cardiology, MBBS",
    image:
      "https://doccure.dreamguystech.com/html/template/assets/img/doctors/doctor-thumb-04.jpg",
    depimg:
      "https://doccure.dreamguystech.com/html/template/assets/img/specialities/specialities-04.png",
    dep: "Cardiologist",
    location: "Texas, USA",
    wage: " $500 - $1500 ",
    feed: " 12 Feedback",
    pers: " 96%",
    procedure: "Angiogram",
    procedure2: "Echocardiogram",
  },
  {
    doctorId: Math.random(),
    price: 80,
    isPopular: false,
    education: [
      {
        year: "2006 - 2010",
        university:
          "Columbia University Vagelos College of Physicians and Surgeons",
        field: "MD",
      },
      {
        year: "2010 - 2014",
        university: "New York-Presbyterian Hospital",
        field: "Residency in Obstetrics and Gynecology",
      },
      {
        year: "2014 - 2016",
        university: "Northwestern Memorial Hospital",
        field: "Fellowship in Maternal-Fetal Medicine",
      },
    ],
    experience: [
      {
        year: "2016 - Present (7 years)",
        hospital: "Mayo Clinic",
      },
      {
        year: "2013 - 2016 (3 years)",
        hospital: "NewYork-Presbyterian Hospital",
      },
    ],
    award: [
      {
        year: "June 2021",
        awardName: "Obstetrician of the Year Award",
        awardAbout: "Lorem ipsum dolor sit amet",
      },
      {
        year: "September 2015",
        awardName: "Certificate of Excellence in Gynecological Surgery",
        awardAbout: "Lorem ipsum dolor sit amet",
      },
    ],
    service: [
      "Prenatal Care",
      "Labor and Delivery",
      "Fertility Treatments",
      "Gynecologic Exams",
      "Contraception Management",
      "Menopause Management",
    ],
    specialization: [
      "General Obstetrics",
      "General Gynecology",
      "Gynecologic Oncology",
      "Maternal-Fetal Medicine",
      "Reproductive Endocrinology and Infertility",
      "Urogynecology",
    ],
    overview: {
      about: "Lorem ipsum dolor sit amet",
    },
    name: "Dr. Maria Rodriguez",
    hosp: "Mayo Clinic",
    hospitalImage:
      "https://images.squarespace-cdn.com/content/v1/58b72c843a04112a613d2251/1597326999218-V3KMZDILZMCPV2G7VZEN/Emory1.jpg?format=1500w",

    spec: "MD - Obstetrics and Gynecology, MBBS",
    image:
      "https://doccure.dreamguystech.com/html/template/assets/img/doctors/doctor-thumb-05.jpg",
    depimg:
      "https://doccure.dreamguystech.com/html/template/assets/img/specialities/specialities-01.png",
    dep: "Obstetrician and Gynecologist",
    location: "Florida, USA",
    wage: " $400 - $1200 ",
    feed: " 20 Feedback",
    pers: " 98%",
    procedure: "Pap Smear",
    procedure2: "Mammography",
  },
  {
    doctorId: Math.random(),
    price: 140,
    isPopular: true,
    education: [
      {
        year: "2007 - 2011",
        university: "Johns Hopkins University School of Medicine",
        field: "MD",
      },
      {
        year: "2011 - 2015",
        university:
          "Massachusetts General Hospital and Brigham and Women's Hospital",
        field: "Residency in Neurology",
      },
      {
        year: "2015 - 2016",
        university: "National Institutes of Health",
        field: "Fellowship in Neuroimmunology",
      },
    ],
    experience: [
      {
        year: "2017 - Present (6 years)",
        hospital: "Cleveland Clinic",
      },
      {
        year: "2015 - 2017 (2 years)",
        hospital: "Johns Hopkins Hospital",
      },
      {
        year: "2012 - 2015 (3 years)",
        hospital: "Massachusetts General Hospital",
      },
    ],
    award: [
      {
        year: "July 2022",
        awardName: "Neurologist of the Year Award",
        awardAbout: "Lorem ipsum dolor sit amet",
      },
      {
        year: "April 2016",
        awardName: "Certificate of Excellence in Neurological Research",
        awardAbout: "Lorem ipsum dolor sit amet",
      },
      {
        year: "January 2012",
        awardName:
          "The International Brain Mapping and Intraoperative Surgical Planning Society Award",
        awardAbout: "Lorem ipsum dolor sit amet",
      },
    ],
    service: [
      "Headache Management",
      "Epilepsy Management",
      "Multiple Sclerosis Management",
    ],
    specialization: [
      "Neuromuscular Medicine",
      "Neurocritical Care",
      "Neuro-oncology",
      "Neurodevelopmental Disabilities",
    ],
    overview: {
      about: "A neurologist is a medical doctor who specializes ..",
    },
    name: "Dr. David Kim",
    hosp: "Cleveland Clinic",
    hospitalImage:
      "https://npr.brightspotcdn.com/dims4/default/d2465fe/2147483647/strip/true/crop/1200x630+0+0/resize/1760x924!/format/webp/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Fb6%2Ffa%2F7fa96f134f41b7bfe00856755edc%2Fcleveland-clinic.jpg",

    spec: "MD - Neurology, MBBS",
    image:
      "https://doccure.dreamguystech.com/html/template/assets/img/doctors/doctor-thumb-06.jpg",
    depimg:
      "https://doccure.dreamguystech.com/html/template/assets/img/specialities/specialities-07.png",
    dep: "Neurologist",
    location: "Arizona, USA",
    wage: " $550 - $1300 ",
    feed: " 15 Feedback",
    pers: " 96%",
    procedure: "Electroencephalogram (EEG)",
    procedure2: "Magnetic Resonance Imaging (MRI)",
  },
  {
    doctorId: Math.random(),
    price: 200,
    isPopular: false,
    education: [
      {
        year: "2005 - 2011",
        university: "Stanford University School of Medicine",
        field: "MD",
      },
      {
        year: "2011 - 2014",
        university: "Johns Hopkins Hospital",
        field: "Residency in Internal Medicine",
      },
      {
        year: "2014 - 2017",
        university: "Memorial Sloan Kettering Cancer Center",
        field: "Fellowship in Medical Oncology",
      },
    ],
    experience: [
      {
        year: "2018 - Present (5 years)",
        hospital: "University of California, San Francisco Medical Center",
      },
      {
        year: "2015 - 2018 (3 years)",
        hospital: "Stanford Health Care",
      },
      {
        year: "2012 - 2015 (3 years)",
        hospital: "Johns Hopkins Hospital",
      },
    ],
    award: [
      {
        year: "June 2022",
        awardName: "Oncologist of the Year Award",
        awardAbout: "Lorem ipsum dolor sit amet",
      },
      {
        year: "March 2017",
        awardName: "Certificate of Achievement in Oncological Research",
        awardAbout: "Lorem ipsum dolor sit amet",
      },
    ],
    service: [
      "Cancer Diagnosis",
      "Cancer Treatment",
      "Cancer Management and Follow-up",
      "Palliative Care",
    ],
    specialization: [
      "Medical Oncology",
      "Surgical Oncology",
      "Radiation Oncology",
      "Gynecologic Oncology",
      "Pediatric Oncology",
      "Hematology-Oncology",
    ],
    overview: {
      about: "Lorem ipsum dolor sit amet",
    },
    name: "Dr. Jonathan Williams",
    hosp: "University of California, San Francisco Medical Center",
    hospitalImage:
      "https://www.usa.skanska.com/48ff5f/siteassets/what-we-deliver/projects/west-memorial-place-i-and-ii/image-gallery/west-memorial-place-01.jpg?w=944&h=531&mode=crop&scale=both",

    spec: "MD - Oncology, MBBS",
    image:
      "https://doccure.dreamguystech.com/html/template/assets/img/doctors/doctor-thumb-07.jpg",
    depimg:
      "https://doccure.dreamguystech.com/html/template/assets/img/specialities/specialities-08.png",
    dep: "Oncologist",
    location: "Washington, USA",
    wage: " $600 - $1500 ",
    feed: " 18 Feedback",
    pers: " 97%",
    procedure: "Chemotherapy",
    procedure2: "Radiation Therapy",
  },
  {
    doctorId: Math.random(),
    price: 85,
    isPopular: false,
    education: [
      {
        year: "2006 - 2010",
        university: "Yale School of Medicine",
        field: "MD",
      },
      {
        year: "2010 - 2013",
        university: "Boston Children's Hospital",
        field: "Residency in Pediatrics",
      },
      {
        year: "2013 - 2016",
        university: "Children's Hospital of Philadelphia",
        field: "Fellowship in Pediatric Hematology-Oncology",
      },
    ],
    experience: [
      {
        year: "2015 - Present (8 years)",
        hospital: "NewYork-Presbyterian Hospital",
      },
      {
        year: "2013 - 2015 (2 years)",
        hospital: "University of California, San Francisco Medical Center",
      },
      {
        year: "2010 - 2013 (3 years)",
        hospital: "Massachusetts General Hospital",
      },
    ],
    award: [
      {
        year: "August 2022",
        awardName: "Pediatrician of the Year Award",
        awardAbout: "Lorem ipsum dolor sit amet",
      },
    ],
    service: [
      "Newborn Care",
      "Infant and Child Wellness Visits",
      "Immunizations",
      "Developmental Assessments",
      "Behavioral and Mental Health Assessments",
      "Acute Illness and Injury Care",
      "Chronic Condition Management",
    ],
    specialization: [
      "General Pediatrics",
      "Pediatric Cardiology",
      "Pediatric Endocrinology",
      "Pediatric Gastroenterology",
      "Pediatric Hematology-Oncology",
      "Pediatric Infectious Diseases",
      "Pediatric Nephrology",
      "Pediatric Neurology",
      "Pediatric Pulmonology",
      "Adolescent Medicine",
    ],
    overview: {
      about: "Lorem ipsum dolor sit amet",
    },
    name: "Dr. Sarah Park",
    hosp: "NewYork-Presbyterian Hospital",
    hospitalImage:
      "https://www.universityofcalifornia.edu/sites/default/files/styles/article_default_banner/public/Jacobs-Medical-Center_hero.jpg?itok=OhwUy3X_",

    spec: "MD - Pediatrics, MBBS",
    image:
      "https://doccure.dreamguystech.com/html/template/assets/img/doctors/doctor-thumb-08.jpg",
    depimg:
      "https://doccure.dreamguystech.com/html/template/assets/img/specialities/specialities-03.png",
    dep: "Pediatrician",
    location: "New Jersey, USA",
    wage: " $250 - $800 ",
    feed: " 22 Feedback",
    pers: " 95%",
    procedure: "Vaccinations",
    procedure2: "Developmental Assessments",
  },
  {
    doctorId: Math.random(),
    price: 95,
    isPopular: true,
    education: [
      {
        year: "2004 - 2010",
        university: "University of California, San Francisco",
        field: "MD",
      },
      {
        year: "2010 - 2013",
        university: "Johns Hopkins Hospital",
        field: "Residency in Internal Medicine",
      },
    ],
    experience: [
      {
        year: "2015 - Present (6 years)",
        hospital: "Stanford Health Care",
      },
      {
        year: "2013 - 2015 (2 years)",
        hospital: "Duke University Hospital",
      },
    ],
    award: [
      {
        year: "July 2022",
        awardName: "Pulmonologist of the Year Award",
        awardAbout: "Lorem ipsum dolor sit amet",
      },
      {
        year: "May 2018",
        awardName: "Certificate of Excellence in Respiratory Research",
        awardAbout: "Lorem ipsum dolor sit amet",
      },
    ],
    service: [
      "Lung Function Testing",
      "Bronchoscopy",
      "Thoracentesis",
      "Pulmonary Rehabilitation",
      "Smoking Cessation",
    ],
    specialization: [
      "General Pulmonology",
      "Critical Care Medicine",
      "Interventional Pulmonology",
      "Sleep Medicine",
    ],
    overview: {
      about: "Lorem ipsum dolor sit amet",
    },
    name: "Dr. Michael Johnson",
    hosp: "Stanford Health Care",
    hospitalImage:
      "https://www.beckershospitalreview.com/images/2017-images/08/Oncology/University%20of%20Wisconsin%20Hospital%20and%20Clinics.jpg",

    spec: "MD - Pulmonology, MBBS",
    image:
      "https://doccure.dreamguystech.com/html/template/assets/img/doctors/doctor-thumb-09.jpg",
    depimg:
      "https://doccure.dreamguystech.com/html/template/assets/img/specialities/specialities-06.png",
    dep: "Pulmonologist",
    location: "Georgia, USA",
    wage: " $450 - $1200 ",
    feed: " 14 Feedback",
    pers: " 94%",
    procedure: "Spirometry",
    procedure2: "bronchoscopy",
  },
];

if (JSON.parse(localStorage.getItem("doctors")) === null) {
  localStorage.setItem("doctors", JSON.stringify(doctors));
}

if (localStorage.getItem("currentDoctor") !== null) {
  localStorage.removeItem("currentDoctor");
}

// Doctor object - dynamic adder to the page

function profileWriterforOneDoctor(doctor) {
  doctorCards.innerHTML += `    
        <div class="card">
        <div class="card-body">
        <div class="doctor-widget">
        <div class="doc-info-left">
        <div class="doctor-img">
        <a href="#">
        <img src="${doctor.image}" class="img-fluid" alt="User Image">
        </a>
        </div>
        <div class="doc-info-cont">
        <h4 class="doc-name"><a href="#" onclick='createDoctorProfile(${doctor.doctorId}); getDoctorProfile()'>${doctor.name}</a></h4>
        <p class="doc-hospital">${doctor.hosp}</p>
        <p class="doc-speciality">${doctor.spec}</p>
        <h5 class="doc-department"><img src="${doctor.depimg}" class="img-fluid" alt="Speciality">${doctor.dep}</h5>
        <div class="rating">
       <span class="star-light"> <i class="fas fa-star filled"></i>
        <i class="fas fa-star filled"></i>
        <i class="fas fa-star filled"></i>
        <i class="fas fa-star filled"></i> </span>
        <i class="text-light-grey fas fa-star"></i> 
        <span class="d-inline-block average-rating">(17)</span>
        </div>
        <div class="clinic-details">
        <p class="doc-location"><i class="fas fa-map-marker-alt"></i>${doctor.location}</p>
        <ul class="zb-clinic-gallery">
        <li>
          <a
            href="https://doccure.dreamguystech.com/html/template/assets/img/features/feature-03.jpg"
            data-fancybox="gallery"
          >
            <img
              src="https://doccure.dreamguystech.com/html/template/assets/img/features/feature-03.jpg"
              alt="Feature"
            />
          </a>
        </li>
        <li>
          <a
            href="https://doccure.dreamguystech.com/html/template/assets/img/features/feature-02.jpg"
            data-fancybox="gallery"
          >
            <img
              src="https://doccure.dreamguystech.com/html/template/assets/img/features/feature-02.jpg"
              alt="Feature"
            />
          </a>
        </li>
        <li>
          <a
            href="https://doccure.dreamguystech.com/html/template/assets/img/features/feature-01.jpg"
            data-fancybox="gallery"
          >
            <img
              src="https://doccure.dreamguystech.com/html/template/assets/img/features/feature-01.jpg"
              alt="Feature"
            />
          </a>
        </li>
        <li>
          <a
            href="https://doccure.dreamguystech.com/html/template/assets/img/features/feature-04.jpg"
            data-fancybox="gallery"
          >
            <img
              src="https://doccure.dreamguystech.com/html/template/assets/img/features/feature-04.jpg"
              alt="Feature"
            />
          </a>
        </li>
      </ul>
        </div>
        <div class="clinic-services">
        <span>${doctor.procedure}</span>
        <span>${doctor.procedure2}</span>
        </div>
        </div>
        </div>
        <div class="doc-info-right">
        <div class="clini-infos">
        <ul>
        <li><i class="far fa-thumbs-up"></i>${doctor.pers}</li>
        <li><i class="far fa-comment"></i>${doctor.feed}</li>
        <li><i class="fas fa-map-marker-alt"></i>${doctor.location}</li>
        <li><i class="far fa-money-bill-alt"></i>${doctor.wage}<i class="fas fa-info-circle" data-bs-toggle="tooltip" title="" data-bs-original-title="Lorem Ipsum" aria-label="Lorem Ipsum"></i> </li>
        </ul>
        </div>
        <div class="clinic-booking">
        <a class="view-pro-btn" style=" text-decoration: none;" href="#" onclick='createDoctorProfile(${doctor.doctorId}); getDoctorProfile()'>View Profile</a>
        <a class="apt-btn" style=" text-decoration: none;" href="#" onclick='createDoctorProfile(${doctor.doctorId}); getBooking()'>Book Appointment</a>
        </div>
        </div>
        </div>
        </div>
        </div>
        `;
}

function profileWriter() {
  let allDoctors = JSON.parse(localStorage.getItem("doctors"));
  allDoctors.forEach((e) => profileWriterforOneDoctor(e));
}
profileWriter();

// for Doctor view profile

function createDoctorProfile(id) {
  let allDoctors = JSON.parse(localStorage.getItem("doctors"));
  let currentDoctor = allDoctors.find((item) => item.doctorId === id);
  localStorage.setItem("currentDoctor", JSON.stringify(currentDoctor));
}

function getDoctorProfile() {
  window.location.href = "../doctor/doctor-view-profile.html";
}

function getBooking() {
  window.location.href = "../doctor/docor-book.html";
}

// Searchbar DOCTOR-LIST PAGE

// searchBar.addEventListener("keyup", (e)=>{
// const searchPerson = e.target.value;
// const filteredDoc = doctors.filter( person =>{
//  return ( person.name.toLowerCase().includes(searchPerson) ||
//  person.hosp.toLowerCase().includes(searchPerson)
//  );
// });
// console.log(filteredDoc)
// })

// let filteredDoc = []
// const searchBar = document.querySelector('#searchBar');
// if (searchBar) {
//   searchBar.addEventListener('keyup', (e) => {
//   doctorCards.innerHTML = "";
//     const searchPerson = e.target.value.toLowerCase().trim();
//     if (searchPerson.length > 0) {
//     filteredDoc = doctors.filter(person => {
//         return (person.name.toLowerCase().includes(searchPerson) || person.hosp.toLowerCase().includes(searchPerson));
//       });
//       console.log(filteredDoc)
//     } else {
//       console.log(doctors);
//     }
//     let sorted = filteredDoc
//     sorted.sort(function(a, b){return b - a});

//     profileWriter(sorted)
//   });
// }


const searchBar = document.querySelector("#searchBar");
searchBar.addEventListener("keyup", searchDoctor);

// According to doctor's name or hospital's name search
function searchDoctor() { 
  doctorCards.innerHTML = "";
  let allDoctors = JSON.parse(localStorage.getItem("doctors"));
  allDoctors.forEach((person) => {
    let searchPerson = searchBar.value.toLowerCase().trim();
    let personName = person.name.toLowerCase().includes(searchPerson);
    let personHospital = person.hosp.toLowerCase().includes(searchPerson);
    if (searchPerson.length > 0 && (personName || personHospital)) {
      localStorage.setItem("doctorSearch", JSON.stringify(person));
      let search = JSON.parse(localStorage.getItem("doctorSearch"));
      profileWriterforOneDoctor(search);
    }
  });

  if (searchBar.value === "") {
    localStorage.removeItem('doctorSearch');
    profileWriter();
  }
}
