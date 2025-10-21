import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should show the cover image
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the image's url that will be used as a background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "right", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastName: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); // print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${variables.name}${variables.lastName}</h1>
          <h2>${variables.role}</h2>
          <h3>${variables.city},${variables.country}</h3>
          <ul class=${variables.socialMediaPosition}>
            <li><a href=${variables.twitter}><i class="fab fa-twitter"></i></a></li>
            <li><a href=${variables.github}><i class="fab fa-github"></i></a></li>
            <li><a href=${variables.linkedin}><i class="fab fa-linkedin"></i></a></li>
            <li><a href=${variables.instagram}><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should show the cover image
    includeCover: true,
    // this is the image's url that will be used as a background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL:
      "data:image/jpeg;base64,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",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: null,
    linkedin: null,
    instagram: "https://www.instagram.com/fillaux_02/?__d=1",
    name: "Fillaux",
    lastName: "Gallardo",
    role: "Web Developer",
    country: "USA",
    city: "Miami"
  };
  render(window.variables); // render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new values
    });
  });
};
