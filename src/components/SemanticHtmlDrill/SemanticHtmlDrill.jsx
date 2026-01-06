// Build a grid of really simple ‘info card’ components
// Do a simple array of data for the cards:
// [{species: “deer”, habitat: “woodlands”}, {}]
// Make sure the grid container and card containers are done in the most accessible/semantically correct way
// Make sure that grid cards are always the same margin width apart - i.e. the card itself will change size to fill the space,
// while maintaining the same pixel-perfect gap between the cards



// WRITE YOUR CODE HERE
























// WORKING BASIC SOLUTION:

// import styles from "./SemanticHtmlDrill.module.css"

// const constantAnimalData = [
//     {
//         species: "Fox",
//         latinName: "Vulpes Vulpes",
//     },
//     {
//         species: "Wolf",
//         latinName: "Canis Lupus",
//     },
//     {
//         species: "Fox",
//         latinName: "Vulpes Vulpes",
//     },
//     {
//         species: "Wolf",
//         latinName: "Canis Lupus",
//     },
//     {
//         species: "Fox",
//         latinName: "Vulpes Vulpes",
//     },
//     {
//         species: "Wolf",
//         latinName: "Canis Lupus",
//     },
//     {
//         species: "Fox",
//         latinName: "Vulpes Vulpes",
//     },
//     {
//         species: "Wolf",
//         latinName: "Canis Lupus",
//     },
//     {
//         species: "Fox",
//         latinName: "Vulpes Vulpes",
//     },
//     {
//         species: "Wolf",
//         latinName: "Canis Lupus",
//     },
//     {
//         species: "Fox",
//         latinName: "Vulpes Vulpes",
//     },
//     {
//         species: "Wolf",
//         latinName: "Canis Lupus",
//     },
// ]

// const listItems = constantAnimalData.map((data, i) => {
//     return (
//         <li key={i}>
//             {/* IMPORTANT NOTE: Using articles makes sense here because this is a block of standalone data that is self-contained and would makes sense on its own */}
//             <article>
//                 <h2>{data.species}</h2>
//                 <p>{data.latinName}</p>
//             </article>
//         </li>
//     )
// })

// export default function SemanticHtmlDrill() {
//     return (
//        <div>
//             <section aria-labelledby="animals-heading">
//                 <h1 id="animals-heading">Animals</h1>
//                 <ul className={styles['animal-list']}>
//                     {listItems}
//                 </ul>
//             </section>
//        </div>
//     )
// }