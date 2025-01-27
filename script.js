document.addEventListener("DOMContentLoaded", function () {
  // Hamburger
  const hamburger = document.getElementById("hamburger");
  const bars = document.getElementsByClassName("layer");
  const nav = document.getElementById("navbar");
  if (document.documentElement.clientWidth < 768) {
    nav.style.display = "none";
  }
  hamburger.addEventListener("click", function () {
    if (nav.style.display == "none") {
      nav.style.display = "block";
      bars[0].style.transform = "rotate(-45deg)";
      bars[1].style.opacity = 0;
      bars[2].style.transform = "rotate(45deg)";
    } else {
      nav.style.display = "none";
      bars[0].style.transform = "rotate(0deg)";
      bars[1].style.opacity = 100;
      bars[2].style.transform = "rotate(0deg)";
    }
  });

  //Navbar
  if (document.documentElement.clientWidth < 768) {
    const navLinks = nav.getElementsByTagName("a");
    for (var navLink of navLinks) {
      navLink.addEventListener("click", function () {
        nav.style.display = "none";
        bars[0].style.transform = "rotate(0deg)";
        bars[1].style.opacity = 100;
        bars[2].style.transform = "rotate(0deg)";
      });
    }
  }

  // Certificates
  const accomplishmentsSection = document.getElementById("accomplishments");
  var certificates = Array.from(new Array(27).keys());
  certificates = certificates.map((i) => {
    return `static/certificates/${i + 1}.jpg`;
  });
  for (var certificate of certificates) {
    var image = document.createElement("img");
    image.classList.add("certificate");
    image.setAttribute("src", certificate);
    accomplishmentsSection.appendChild(image);
  }

  // Projects
  const projects = [
    {
      title: "StockDash (an Interactive Stock Dashboard)",
      description:
        "A dashboard where you could choose stock from LQ45 index and view the interactive \
        graph up to 5 years stock price history. Besides, there is an LSTM model that predict \
        the next week's price based on previous weeks. You also could view 10 newest news of \
        corresponding stock.",
      image: "static/projects/1.png",
      url: "https://github.com/WilliamDevin23/Streamlit_StockDash",
    },
    {
      title: "M-Knows Consulting Company Profile Website with CMS",
      description:
        "My seventh semester project with my classmates. I coded the \
        reusable components, made dynamic pages, and debugging. \
        For the admin dashboard, I built both the front-end and the back-end.",
      image: "static/projects/2.png",
      url: "https://github.com/Tim4-4IA06-P3L/MKnows-FrontEnd",
    },
    {
      title: "Student Performance Analysis and Prediction with CRISP-DM",
      description:
        "Analysis of Student Performance using CRISP-DM methodology. Deployed dashboard to predict \
        student's Grade Class based on some parameters.",
      image: "static/projects/3.png",
      url: "https://github.com/WilliamDevin23/student-performance",
    },
    {
      title: "Book Recommendation System",
      description:
        "Create 2 recommender systems : Content-Based Filtering using Cosine Similarity and \
        Collaborative Filtering using Neural Network.",
      image: "static/projects/4.png",
      url: "https://colab.research.google.com/drive/1ykbqy_3Sw9Z1uimXQemFhWNNot2oslUP?usp=sharing",
    },
    {
      title: "E-Commerce Data Analysis",
      description:
        "Did Exploratory Data Analysis (EDA), Visualization, and deploy a dashboard with Streamlit.",
      image: "static/projects/5.png",
      url: "https://github.com/WilliamDevin23/Ecommerce-EDA-Dashboard",
    },
    {
      title: "Bike Sharing Data Analysis",
      description:
        "Did Exploratory Data Analysis (EDA), Visualization, and deploy a dashboard with Streamlit.",
      image: "static/projects/6.png",
      url: "https://github.com/WilliamDevin23/BikeSharing-WilliamDevin",
    },
  ];
  const projectSection = document.getElementById("projects-section");
  for (var project of projects) {
    var projectContainer = document.createElement("article");
    projectContainer.setAttribute("class", "project");

    var projectImage = document.createElement("img");
    projectImage.setAttribute("src", project.image);

    var textContainer = document.createElement("section");

    var projectTitle = document.createElement("h4");
    projectTitle.innerText = project.title;
    textContainer.appendChild(projectTitle);

    var projectDesc = document.createElement("p");
    projectDesc.innerText = project.description;
    textContainer.appendChild(projectDesc);

    var projectURL = document.createElement("a");
    projectURL.setAttribute("href", project.url);
    projectURL.setAttribute("target", "_blank");
    projectURL.innerText = "Link Project";
    textContainer.appendChild(projectURL);

    projectContainer.appendChild(projectImage);
    projectContainer.appendChild(textContainer);

    projectSection.append(projectContainer);
  }

  // Sidebar
  const sidebarButton = document.getElementById("sidebar-button");
  const sidebar = document.getElementById("sidebar");

  sidebar.style.translate = "100% 0%";
  sidebarButton.addEventListener("click", function () {
    if (sidebar.style.translate == "100% 0%") {
      sidebar.style.translate = "0% 0%";
    } else {
      sidebar.style.translate = "100% 0%";
    }
  });

  // Footer
  const footerCopyRight = document.getElementById("copyright");
  footerCopyRight.innerText =
    new Date().getFullYear() + " " + footerCopyRight.innerText;
});
