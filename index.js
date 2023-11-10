propertyData = {
    Accra: [
      {
        PropertyID: "P001",
        PropertyType: "Condo",
        Size: "1200 sqft",
        Price: "$250,000",
      },
      {
        PropertyID: "P005",
        PropertyType: "House",
        Size: "1300 sqft",
        Price: "$270,000",
      },
      {
        PropertyID: "P009",
        PropertyType: "Apartment",
        Size: "1100 sqft",
        Price: "$230,000",
      },
      {
        PropertyID: "P013",
        PropertyType: "Condo",
        Size: "1400 sqft",
        Price: "$280,000",
      },
      {
        PropertyID: "P017",
        PropertyType: "Apartment",
        Size: "1000 sqft",
        Price: "$200,000",
      },
      {
        PropertyID: "P021",
        PropertyType: "House",
        Size: "1500 sqft",
        Price: "$300,000",
      },
      {
        PropertyID: "P025",
        PropertyType: "Apartment",
        Size: "1200 sqft",
        Price: "$250,000",
      },
      {
        PropertyID: "P029",
        PropertyType: "House",
        Size: "1600 sqft",
        Price: "$320,000",
      },
    ],
    Kumasi: [
      {
        PropertyID: "P002",
        PropertyType: "House",
        Size: "1800 sqft",
        Price: "$350,000",
      },
      {
        PropertyID: "P006",
        PropertyType: "Condo",
        Size: "1600 sqft",
        Price: "$320,000",
      },
      {
        PropertyID: "P010",
        PropertyType: "Apartment",
        Size: "2000 sqft",
        Price: "$400,000",
      },
      {
        PropertyID: "P014",
        PropertyType: "Condo",
        Size: "1500 sqft",
        Price: "$300,000",
      },
      {
        PropertyID: "P018",
        PropertyType: "Apartment",
        Size: "1400 sqft",
        Price: "$280,000",
      },
      {
        PropertyID: "P022",
        PropertyType: "Condo",
        Size: "1300 sqft",
        Price: "$270,000",
      },
      {
        PropertyID: "P026",
        PropertyType: "Apartment",
        Size: "1700 sqft",
        Price: "$330,000",
      },
    ],
    Tamale: [
      {
        PropertyID: "P003",
        PropertyType: "Apartment",
        Size: "1000 sqft",
        Price: "$200,000",
      },
      {
        PropertyID: "P007",
        PropertyType: "House",
        Size: "900 sqft",
        Price: "$180,000",
      },
      {
        PropertyID: "P011",
        PropertyType: "Condo",
        Size: "1200 sqft",
        Price: "$250,000",
      },
      {
        PropertyID: "P015",
        PropertyType: "Apartment",
        Size: "1100 sqft",
        Price: "$230,000",
      },
      {
        PropertyID: "P019",
        PropertyType: "Condo",
        Size: "1200 sqft",
        Price: "$250,000",
      },
      {
        PropertyID: "P023",
        PropertyType: "House",
        Size: "1000 sqft",
        Price: "$200,000",
      },
      {
        PropertyID: "P027",
        PropertyType: "Condo",
        Size: "1100 sqft",
        Price: "$230,000",
      },
    ],
  };
  
  const images = [
    'images/h-1.jpg',
    'images/h-2.jpg',
    'images/h-3.jpg',
    'images/h-4.jpg',
    'images/h-5.jpg',
    'images/h-6.jpg'
  ];
  
  function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  }
  
  const cardContainer = document.querySelector(".cards");
  const searchBar = document.getElementById("searchBar");
  const results = document.querySelector(".result");
  
  // Function to open the modal and fill in the content
  function openModal(location, propertyType, size, price, PropertyID) {
    const modal = document.getElementById("propertyModal");
    const modalLocation = document.getElementById("modalLocation");
    const modalType = document.getElementById("modalType");
    const modalSize = document.getElementById("modalSize");
    const modalPrice = document.getElementById("modalPrice");
    const modalImage = document.getElementById("modalImage");
    const modalIdentification = document.getElementById("modalId");
    modalImage.src = getRandomImage();
    modalLocation.textContent = `Location: ${location}`;
    modalType.textContent = `Type: ${propertyType}`;
    modalSize.textContent = `Size: ${size}`;
    modalPrice.textContent = `Price: ${price}`;
    modalIdentification.textContent = `PropertyID: ${PropertyID}`;
    modal.style.display = "block";
  }
  
  // Function to close the modal
  function closeModal() {
    const modal = document.getElementById("propertyModal");
    modal.style.display = "none";
  }
  
  for (const location in propertyData) {
    propertyData[location].forEach((property) => {
      cardContainer.innerHTML += `
      <div onclick="openModal('${location}', '${property.PropertyType}', '${property.Size}', '${property.Price}', '${property.PropertyID}')">
      <img src="${getRandomImage()}" alt="Property Image">
      <h1>Location: ${location}</h1>
      <p>Type: ${property.PropertyType}</p>
      <p>Price: ${property.Price}</p>
    </div>
        `;
    });
  }
  
  // search functionality
  function filterProperties(searchTerm) {
    results.innerHTML = "";
  
    if (searchTerm.trim() === "") {
      return;
    }
  
    for (const location in propertyData) {
      propertyData[location].forEach((property) => {
        // filter properties based on the search input
        if (
          location.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
          property.PropertyID.toLowerCase().includes(searchTerm.toLowerCase()) ||
          property.PropertyType.toLowerCase().includes(
            searchTerm.toLowerCase()
          ) ||
          property.Size.toLowerCase().includes(searchTerm.toLowerCase()) ||
          property.Price.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          results.innerHTML += `
              <div onclick="openModal('${location}', '${property.PropertyType}', '${property.Size}', '${property.Price}')">Type: ${property.PropertyType} Price: ${property.Price}</div>
          `;
        }
      });
    }
  }
  
  searchBar.addEventListener("input", (event) => {
    const searchTerm = event.target.value;
    filterProperties(searchTerm);
  });
  
  // navigation
  
  const primaryNav = document.querySelector('.primary-navigation');
  const navToggle = document.querySelector('.mobile-nav-toggle');
  
  navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');
    
    if (visibility === "false") {
      primaryNav.setAttribute('data-visible', true);
      navToggle.setAttribute('aria-expanded', true);
    } else if (visibility === "true") {
      primaryNav.setAttribute('data-visible', false);
      navToggle.setAttribute('aria-expanded', false);
    }
  });
  
  let alllinks = document.querySelectorAll('.links');
  
  
  const allLinks = document.querySelectorAll('.link');
  
  allLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const visibility = primaryNav.getAttribute('data-visible');
      
      if (visibility === "true") {
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
      }
    });
  });