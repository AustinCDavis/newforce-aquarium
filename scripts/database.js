/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            image:"https://seatechaquariums.com/wp-content/uploads/2018/12/Coral-Beauty-Angelfish-_-81780681-768x512.jpeg",
            name: "Name: Tammy",
            species: "Species: Two-spinned Angelfish",
            length: "Length: 4 inches",
            location: "Harvest Location: Tanzania",
            food: "Food: marine algae and frozen shrimp",
            caretips:"Care Instructions: Temperature - 72 to 78 degrees, pH - 8.1 to 8.4, gallons - 55 to 77, lighting should be moderate, and no other coral fish unless the two-spinned angelfish grew up with them."
        },
        {
            image:"https://seatechaquariums.com/wp-content/uploads/2019/02/Betta-Fish-_-123286570-1024x706.jpeg",
            name: "Name: Bart",
            species: "Species: Betta",
            length: "Length: 2 inches",
            location: "Harvest Location: Thailand",
            food: "Food: dried bloodworms and brine shrimp",
            caretips:"Care Instructions: Temperature - 79 degrees, pH - 6.5 to 7.1, gallons - 1 to 2, and be cautious if you plan to have more than 1 betta in the same tank they tend to fight."
        },
        {
            image:"https://seatechaquariums.com/wp-content/uploads/2019/05/Discus-Fish-Facts-_-53919172-624x416.jpeg",
            name: "Name: Darrel",
            species: "Species: Discus",
            length: "Length: 10 inches",
            location: "Harvest Location: Amazon River",
            food: "Food: blood worms and shrimp",
            caretips: "Care Instructions: Temperature - 80 to 86 degrees, pH - 5 to 7, gallons - 15 to 20, and they generally get along well with other fish."
        },
        {
            image:"https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/8/1/e998f77c-019a-4e25-929c-28538836b901.jpg.webp?ect=4g",
            name: "Name: Peter",
            species: "Species: Dull-eyed Pleco",
            length: "Length: 20 inches",
            location: "Harvest Location: Venezuela",
            food: "Food: driftwood or sera catfish chips",
            caretips: "Care Instructions: Temperature - 71.6 to 86 degrees, pH - 6.5 to 7.5, gallons - 80, minimal lighting, and they are a very peaceful fish."
        },
        {
            image:"https://cdn.shopify.com/s/files/1/0575/5958/0867/products/endlicheri-bichir-polypterus-endlicherii-live-tropical-fish-sale-lone-star-rare-exotic-306_576x.jpg?v=1676784782",
            name: "Name: Eric",
            species: "Species: Polypterus Bichir",
            length: "Length: 30 inches",
            location: "Harvest Location: Mali",
            food: "Food: bloodworms, shrimp, earthworms, and small fish",
            caretips: "Care Instructions: Temperature - 75 to 86 degrees, pH - 6 to 8, gallons - 150, nocturnal, and peaceful tempermant."
        },
        {
            image:"http://reefsystemsinc.net/wp-content/uploads/2014/02/zebraMoray.jpg",
            name: "Name: Debra",
            species: "Species: Zebra Moray Eel",
            length: "Length: up to 5 feet",
            location: "Harvest Location: Hawaii",
            food: "Food: small fish, molluscs, squid, krill, and crstaceans",
            caretips:"Care Instructions: Temperature - 72 to 78 degrees, pH - 8.1 to 8.4, salinity - 1.022 to 1.025, gallons - 125, and manages well with other fish, but caution should be taken when introducing new fish."
        }
    ]
}
export const getFish = () => {
    return database.fish.map(copyOfSingleFishObject => ({...copyOfSingleFishObject}))
}