let doctorCards = document.getElementById("cards")

let doctors = [
    {
        name: 'Dr. Ruby Perrin',
        spec: "MDS - Periodontology and Oral Implantology, BDS",
        image : 'https://doccure.dreamguystech.com/html/template/assets/img/doctors/doctor-thumb-01.jpg',
        depimg: "https://doccure.dreamguystech.com/html/template/assets/img/specialities/specialities-05.png",
        dep : "Dentist",
        location: " Florida, USA",
        wage : " $300 - $1000 ",
        feed :  " 17 Feedback",
        pers : " 98%",
        procedure :"Dental Fillings",
        procedure2:"Whitening"
    },
        {
        name: 'Dr. Jessica Wong',
        spec: "MD - Dermatology, MBBS",
        image : 'https://doccure.dreamguystech.com/html/template/assets/img/doctors/doctor-thumb-03.jpg',
        depimg: "https://doccure.dreamguystech.com/html/template/assets/img/specialities/specialities-02.png",
        dep : "Dermatologist",
        location: "California, USA",
        wage : " $250 - $800 ",
        feed : " 24 Feedback",
        pers : " 97%",
        procedure :"Acne Treatment",
        procedure2:"Botox Injections"
        },
        {
        name: 'Dr. James Smith',
        spec: "MD - Cardiology, MBBS",
        image : 'https://doccure.dreamguystech.com/html/template/assets/img/doctors/doctor-thumb-04.jpg',
        depimg: "https://doccure.dreamguystech.com/html/template/assets/img/specialities/specialities-04.png",
        dep : "Cardiologist",
        location: "Texas, USA",
        wage : " $500 - $1500 ",
        feed : " 12 Feedback",
        pers : " 96%",
        procedure :"Angiogram",
        procedure2:"Echocardiogram"
        },
        {
        name: 'Dr. Maria Rodriguez',
        spec: "MD - Obstetrics and Gynecology, MBBS",
        image : 'https://doccure.dreamguystech.com/html/template/assets/img/doctors/doctor-thumb-05.jpg',
        depimg: "https://doccure.dreamguystech.com/html/template/assets/img/specialities/specialities-01.png",
        dep : "Obstetrician and Gynecologist",
        location: "Florida, USA",
        wage : " $400 - $1200 ",
        feed : " 20 Feedback",
        pers : " 98%",
        procedure :"Pap Smear",
        procedure2:"Mammography"
        },
        {
        name: 'Dr. David Kim',
        spec: "MD - Neurology, MBBS",
        image : 'https://doccure.dreamguystech.com/html/template/assets/img/doctors/doctor-thumb-06.jpg',
        depimg: "https://doccure.dreamguystech.com/html/template/assets/img/specialities/specialities-07.png",
        dep : "Neurologist",
        location: "Arizona, USA",
        wage : " $550 - $1300 ",
        feed : " 15 Feedback",
        pers : " 96%",
        procedure :"Electroencephalogram (EEG)",
        procedure2:"Magnetic Resonance Imaging (MRI)"
        },
        {
            name: 'Dr. Jonathan Williams',
            spec: "MD - Oncology, MBBS",
            image : 'https://doccure.dreamguystech.com/html/template/assets/img/doctors/doctor-thumb-07.jpg',
            depimg: "https://doccure.dreamguystech.com/html/template/assets/img/specialities/specialities-08.png",
            dep : "Oncologist",
            location: "Washington, USA",
            wage : " $600 - $1500 ",
            feed : " 18 Feedback",
            pers : " 97%",
            procedure :"Chemotherapy",
            procedure2:"Radiation Therapy"
            },
            {
            name: 'Dr. Sarah Park',
            spec: "MD - Pediatrics, MBBS",
            image : 'https://doccure.dreamguystech.com/html/template/assets/img/doctors/doctor-thumb-08.jpg',
            depimg: "https://doccure.dreamguystech.com/html/template/assets/img/specialities/specialities-03.png",
            dep : "Pediatrician",
            location: "New Jersey, USA",
            wage : " $250 - $800 ",
            feed : " 22 Feedback",
            pers : " 95%",
            procedure :"Vaccinations",
            procedure2:"Developmental Assessments"
            },
            {
            name: 'Dr. Michael Johnson',
            spec: "MD - Pulmonology, MBBS",
            image : 'https://doccure.dreamguystech.com/html/template/assets/img/doctors/doctor-thumb-09.jpg',
            depimg: "https://doccure.dreamguystech.com/html/template/assets/img/specialities/specialities-06.png",
            dep : "Pulmonologist",
            location: "Georgia, USA",
            wage : " $450 - $1200 ",
            feed : " 14 Feedback",
            pers : " 94%",
            procedure :"Spirometry",
            procedure2:"bronchoscopy"
            }

]

function profileWriter(e){
    doctors.forEach(e=>{
        doctorCards.innerHTML += `    
        <div class="card">
        <div class="card-body">
        <div class="doctor-widget">
        <div class="doc-info-left">
        <div class="doctor-img">
        <a href="#">
        <img src="${e.image}" class="img-fluid" alt="User Image">
        </a>
        </div>
        <div class="doc-info-cont">
        <h4 class="doc-name"><a href="#">${e.name}</a></h4>
        <p class="doc-speciality">${e.spec}</p>
        <h5 class="doc-department"><img src="${e.depimg}" class="img-fluid" alt="Speciality">${e.dep}</h5>
        <div class="rating">
        <i class="fas fa-star filled"></i>
        <i class="fas fa-star filled"></i>
        <i class="fas fa-star filled"></i>
        <i class="fas fa-star filled"></i>
        <i class="fas fa-star"></i>
        <span class="d-inline-block average-rating">(17)</span>
        </div>
        <div class="clinic-details">
        <p class="doc-location"><i class="fas fa-map-marker-alt"></i>${e.location}</p>
        <ul class="clinic-gallery">
        <li>
        <a href="https://doccure.dreamguystech.com/html/template/assets/img/features/feature-03.jpg" data-fancybox="gallery">
        <img src="https://doccure.dreamguystech.com/html/template/assets/img/features/feature-03.jpg" alt="Feature">
        </a>
        </li>
        <li>
        <a href="https://doccure.dreamguystech.com/html/template/assets/img/features/feature-02.jpg" data-fancybox="gallery">
        <img src="https://doccure.dreamguystech.com/html/template/assets/img/features/feature-02.jpg" alt="Feature">
        </a>
        </li>
        <li>
        <a href="https://doccure.dreamguystech.com/html/template/assets/img/features/feature-01.jpg" data-fancybox="gallery">
        <img src="https://doccure.dreamguystech.com/html/template/assets/img/features/feature-01.jpg" alt="Feature">
        </a>
        </li>
        <li>
        <a href="https://doccure.dreamguystech.com/html/template/assets/img/features/feature-04.jpg" data-fancybox="gallery">
        <img src="https://doccure.dreamguystech.com/html/template/assets/img/features/feature-04.jpg" alt="Feature">
        </a>
        </li>
        </ul>
        </div>
        <div class="clinic-services">
        <span>${e.procedure}</span>
        <span>${e.procedure2}</span>
        </div>
        </div>
        </div>
        <div class="doc-info-right">
        <div class="clini-infos">
        <ul>
        <li><i class="far fa-thumbs-up"></i>${e.pers}</li>
        <li><i class="far fa-comment"></i>${e.feed}</li>
        <li><i class="fas fa-map-marker-alt"></i>${e.location}</li>
        <li><i class="far fa-money-bill-alt"></i>${e.wage}<i class="fas fa-info-circle" data-bs-toggle="tooltip" title="" data-bs-original-title="Lorem Ipsum" aria-label="Lorem Ipsum"></i> </li>
        </ul>
        </div>
        <div class="clinic-booking">
        <a class="view-pro-btn" style=" text-decoration: none;" href="#">View Profile</a>
        <a class="apt-btn" style=" text-decoration: none;" href="#">Book Appointment</a>
        </div>
        </div>
        </div>
        </div>
        </div>
        `
    })
}
profileWriter()




function searchDoctors() {
    const searchInput = document.getElementById("searcher");
    const namesList = document.getElementById("doctors");
  
    const filteredNames = names.filter(name => {
      return name.name.toLowerCase().includes(searchInput.value.toLowerCase());
    });
  
    namesList.innerHTML = "";
    filteredNames.forEach(name => {
      const li = document.createElement("li");
      li.textContent = name.name;
      namesList.appendChild(li);
    });
  }