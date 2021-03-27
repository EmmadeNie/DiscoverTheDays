// const daysOfWeek = [
//     {dayIndex: 0,
//         dayOfWeek: "Sunday",
//         dayDescription:
//             'For Sundays: "Seven Days Looking" (Paang Tawai Netr ), the image is standing with hands held down in front of the body. The left hand is covered by the right. This attitude represents the period after the Buddha had realized Enlightenment. He achieved the enlightened state as he sat under a Bho tree for seven days in deep meditation. It is said he then stood for a longer period in deep meditation.',
//         image: "sun",
//         link: "",
//         styles: { color: "red" },
//     },
//     {dayIndex: 1,
//         dayOfWeek: "Monday",
//         dayDescription:
//             'For Mondays: one of three images could represent this day. "Pacifying the Relatives" (Paang Harm Samoot) is a standing image with right hand raised; this was the posture of Buddha when he persuaded disputing family members to peacefully compromise. "Forbidding the Sandalwood Image" refers to the time when Buddha halted a sandalwood image in his likeness from rising off an altar; it is a standing image with the left hand raised. The image representing "Mastery over Passions" is a standing image with both hands raised; this is from the parable of Buddha performing a miracle by calming the ocean.',
//         image: "moon",
//         link: "",
//         styles: { color: "#FFC74A" },
//     },
//     {
//         dayIndex: 2, dayOfWeek: "Tuesday",
//         dayDescription:
//             'For Tuesdays: "Realizing Nirvana" (Paang Saiyasna), the image, reclining on the right side, toes even, indicates his death. Religious texts state that the Buddha entered parinibbana on this day of the week. His final words to his disciples were, "As a flame blown out by the wind goes to rest and cannot be defined so the wise man freed from individuality goes to rest and cannot be defined. Gone beyond all images gone beyond the power of words", Sutta Nipata.',
//         image: "mars",
//         link: "",
//         styles: { color: "pink" },
//     },
//     {
//         dayIndex: 3, dayOfWeek: "Wednesday",
//         dayDescription:
//             'For Wednesdays: it is common to see two images. One is a standing Buddha image holding an alms bowl. After four years in his ministry, Buddha journeyed to visit his father, younger brother and son. His father was appalled when Buddha "begged" for food holding an alms bowl. Buddha calmed his father informing him that the lineage of Buddhas was to perform pindabat, (Paang Oombaat) that is, to be available to followers who devotedly bring food. Still today, the virtue of giving is strong among Buddhist followers Also for Wednesday, an image for the evening is displayed. When Buddha sought solitude to meditate undisturbed, the animals of the forest brought him sustenance. Thus it is usual to see in a temple garden, a seated Buddha image with an elephant offering a bowl of fruit and an approaching monkey offering a honeycomb.',
//         image: "mercury",
//         link: "",
//         styles: { color: "green" },
//     },
//     {
//         dayIndex: 4,dayOfWeek: "Thursday",
//         dayDescription:
//             'For Thursdays: "The Meditating Buddha" (Paang Nung Samadhi) in a sitting pose is a reminder of the classic posture for meditation. The full lotus with both soles upward and visible, the hands resting in the lap, right above left with all fingers extended, palms upward. In this position, some meditators feel the body is receptive to energy entering through the top of the head and through the open palms.',
//         image: "jupiter",
//         link: "",
//         styles: { color: "orange" },
//     },
//     {
//         dayIndex: 5,dayOfWeek: "Friday",
//         dayDescription:
//             'For Fridays: the "Contemplating Buddha" (Paang Rum Peung) stands with hands resting across the chest, the right hand covering the left. The pose implies a complete spiritual transformation. A benevolent tranquility expresses the equanimity obtained through Vipassana meditation. The meditative practice develops clear seeing by training the faculties through direct experience.',
//         image: "venus",
//         link: "",
//         styles: { color: "blue" },
//     },
//     {
//         dayIndex: 6,dayOfWeek: "Saturday",
//         dayDescription:
//             'For Saturdays: "Protected by the Naga King", (Paang Naga Prok) the Buddha image sits on a large coiled serpent which rises to protect him from a raging storm. The Buddha sits in profound meditation, unaware of the tumult, as he is lifted over the rising waves by the King of Nagas.',
//         image: "saturn",
//         link: "",
//         styles: { color: "purple" },
//     },
// ];

exports.createPages = async ({ actions, graphql }) => {
const {data} = await graphql(`
 {
    dataJson {
    daysOfWeek {
      dayDescription
      dayIndex
      dayOfWeek
      image
    }
  }
  site(siteMetadata: {}) {
    siteMetadata {
      description
      title
    }
  }
}
`)
   const daysOfWeek = data.dataJson.daysOfWeek;
const siteData = data.site.siteMetadata;
    actions.createPage({
        path: `/Home/`,
        component: require.resolve(`./src/templates/HomePage.js`),
        context: siteData,
    })
    daysOfWeek.forEach(day=> actions.createPage({
        path: `/${day.dayOfWeek}/`,
        component: require.resolve(`./src/templates/dayOfWeekPage.js`),
        context: day,
    }))

};
