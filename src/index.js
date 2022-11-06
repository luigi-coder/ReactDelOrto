import { getHeroeById } from "./bases/08-import-export";

console.log(getHeroeById(2));


const promesa = new Promise((resolve, reject) => {
 
  setTimeout(() => {
      const heroe = getHeroeById(2);
      // console.log(heroe);
      resolve(heroe);

  }, 3000);

});

promesa.then((heroe) => {
  console.log(heroe)

});





/* const promesa = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('2 segundos despues');
        const heroe = getHeroeById(2);
        resolve();
    }, 2000);
});

promesa.then(()=>{
    console.log('Terminé');
});
promesa.catch(()=>{
    console.log('Error');
});
promesa.finally(()=>{
    console.log('Finalmente');
}); */


