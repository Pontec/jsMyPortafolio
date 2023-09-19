const header = document.querySelector(".header"),
    sections = document.querySelectorAll("section[id]"),
    skillsContainer = document.querySelector(".skills__items"),
    eduContainer = document.querySelector("#edu.timeline__items"),
    expContainer = document.querySelector("#exp.timeline__items"),
    services = document.querySelectorAll(".service"),
    formInputs = document.querySelectorAll(".form__input"),
    scrollUpBtn = document.querySelector(".scroll-up"),
    colorThemeBtn = document.querySelector(".color-theme"),
    mobileLinksContainer = document.querySelector(".header__links-mobile"),
    mobileLinks = document.querySelectorAll(".header__link-mobile a"),
    contactForm = document.getElementById("contact-form"),
    statusBox = document.querySelector(".form__status-box p");

/* ============== Header ============== */

function ChangeHeaderBg() {
    const scroll = window.scroll;
    header.style.transition = "all var(--default-duration) ease"
    if (scrollY >50){
        header.style.background = "var(--body-bg)";
        header.style.height = "calc(var(--header-height) - 15px)";
        header.style.boxShadow = "0 0 5px var(--black-100-alpha-20)";
    }else{
        header.style.background = "transparent";
        header.style.height = "var(--header-height)";
        header.style.boxShadow = "";
    }
}
let lastScrollY;
function hideMobNavbar(){
    const scrollY = windows.scrollY
    if (scrollY > lastScrollY){
        mobileLinksContainer.classList.add("hide")
    } else if(scrollY < lastScrollY ){
        mobileLinksContainer.classList.remove("hide");
    }
    lastScrollY = scrollY;
}


/* ============== Skills Section ============== */
// Skills & Tools
let skills = [
    {
        skillTitle: "Title",
        skillText: "Text",
        icon: "ri-code-s-slash-fill",
        tools: [{ toolName: "Tool name", toolValue: 90 }],
    },
];

function skillComponent({ skillTitle, skillText, icon, tools }) {
    return ``;
}

function renderSkills() {}
// Education & Experience
let educations = [
    {
        type: "education",
        title: "Title",
        position: "Position",
        date: {
            startDate: "Oct 10, 2014",
            endDate: "2018",
        },
        desc: "Lorem Ipsum Commodo Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam",
    },
    {
        type: "experience",
        title: "Title",
        position: "Position",
        date: {
            startDate: "Mar 10, 2018",
            endDate: "2021",
        },
        desc: "Lorem Ipsum Commodo Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam",
    },
];

function timelineComponent({ title, position, date, desc }) {
    return ``;
}

function renderEducations() {}

/* ============== Services Section ============== */

/* ============== Testimonials Section ============== */

/* ============== Contact Section ============== */

formInputs.forEach((input) =>{
    input.addEventListener("focus", ()=>{
        let targetLabel = document.querySelector(`.form__label[for=${input.id}]`);
        targetLabel.classList.add("focus");
    })

    input.addEventListener("blur", ()=>{
        let targetLabel = document.querySelector(`.form__label[for=${input.id}]`);
        if (input.value.length ===0)targetLabel.classList.remove("focus");
    })
})  

/* ============== Active Scroll ============== */

/* ============== ScrollUp Button ============== */



/* ============== Dark / Light Theme ============== */

/* ============== Send Email By EmailJS ============== */

/* ============== scrollRevealJS ============== */

window.addEventListener("scroll", () => {
    ChangeHeaderBg();
});

window.addEventListener("load", () => {});
