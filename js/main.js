function aboutClick(){
    // hidding Home section and showing About section//
    document.querySelector("#homeSection").classList.add("hidden");
    document.querySelector("#aboutSection").classList.remove("hidden");
    document.querySelector("#contactSection").classList.add("hidden");
    document.querySelector("#workExperience").classList.add("hidden");
    document.querySelector("#trainingCourses").classList.add("hidden");
    document.querySelector("#languageClick").classList.add("hidden");

}

function contactClick(){
    // hidding Home section and showing Contact section//
    document.querySelector("#homeSection").classList.add("hidden");
    document.querySelector("#contactSection").classList.remove("hidden");
    document.querySelector("#aboutSection").classList.add("hidden");
    document.querySelector("#workExperience").classList.add("hidden");
    document.querySelector("#trainingCourses").classList.add("hidden");
    document.querySelector("#languageClick").classList.add("hidden");

    
}

function workExperience(){
    // hidding Home section and showing work Experience section//
    document.querySelector("#homeSection").classList.add("hidden");
    document.querySelector("#contactSection").classList.add("hidden");
    document.querySelector("#aboutSection").classList.add("hidden");
    document.querySelector("#workExperience").classList.remove("hidden");
    document.querySelector("#trainingCourses").classList.add("hidden");
    document.querySelector("#languageClick").classList.add("hidden");

}

function trainingCourses(){
    // hidding Home section and showing training Courses section//
    document.querySelector("#homeSection").classList.add("hidden");
    document.querySelector("#contactSection").classList.add("hidden");
    document.querySelector("#aboutSection").classList.add("hidden");
    document.querySelector("#workExperience").classList.add("hidden");
    document.querySelector("#trainingCourses").classList.remove("hidden");
    document.querySelector("#languageClick").classList.add("hidden");

}

function homeClick(){
    // hidding About & Contact & work Experience & training Courses & language sections and showing Home section //
    document.querySelector("#homeSection").classList.remove("hidden");
    document.querySelector("#contactSection").classList.add("hidden");
    document.querySelector("#aboutSection").classList.add("hidden");
    document.querySelector("#workExperience").classList.add("hidden");
    document.querySelector("#trainingCourses").classList.add("hidden");
    document.querySelector("#languageClick").classList.add("hidden");

}

function languageClick(){
    // hidding Home section and showing landuage section //
    document.querySelector("#homeSection").classList.add("hidden");
    document.querySelector("#contactSection").classList.add("hidden");
    document.querySelector("#aboutSection").classList.add("hidden");
    document.querySelector("#workExperience").classList.add("hidden");
    document.querySelector("#trainingCourses").classList.add("hidden");
    document.querySelector("#languageClick").classList.remove("hidden");

}
