const Anime_heros = ["Naruto", "Itachi", "shikamaru"]
const cartoon_heros = ["shinchan", "tom&jerry", "perman"]

// Anime_heros.push(cartoon_heros)

// console.log(Anime_heros);
// console.log(Anime_heros [3][1]);

// const allHeros = Anime_heros.concat(cartoon_heros)
// console.log(allHeros);

const all_new_heros = [...Anime_heros, ...cartoon_heros]
// console.log(all_new_heros);


const another_arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_arr = another_arr.flat(Infinity)
// console.log(real_another_arr);



// console.log(Array.isArray("Prithvi"));
// console.log(Array.from("Prithvi"));
// console.log(Array.from({name:"prithvi"})); // intersting case 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));