import appImg from "./images/app 3.jpg";

const servicesData = [
  {
    slug: "app 3",
    title: "APP MEMBRANE WATERPROOFING",
    category: "Waterproofing",
    description: `
Vala Waterproofing provides professional APP membrane waterproofing
solutions for industrial, commercial and residential projects.

We offer complete turnkey execution from inspection, surface preparation,
membrane application to final testing.
    `,
    includes: [
      "Surface cleaning & preparation",
      "APP membrane torch application",
      "Overlap sealing & joint treatment",
      "Leakage testing",
      "Work warranty available"
    ],
    images: [appImg, appImg, appImg]
  },

  {
    slug: "terrace-waterproofing",
    title: "TERRACE WATERPROOFING",
    category: "Waterproofing",
    description: `
Terrace waterproofing protects your building from rainwater seepage,
cracks and structural damage.

We use chemical, membrane and PU based systems depending on site condition.
    `,
    includes: [
      "Crack filling",
      "Chemical coating",
      "PU / membrane system",
      "Water pond testing",
      "Warranty support"
    ],
    images: [appImg, appImg, appImg]
  }
];

export default servicesData;
