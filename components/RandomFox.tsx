//Funcion genera numero random entre 1 y 123
const random =() => Math.floor(Math.random()*123)+1;

export const RandomFox = ():JSX.Element =>{
    const image = `https://randomfox.ca/images/${random()}.jpg`
    return <img  width={320} height="auto" src={image} className=" rounded"/>
}