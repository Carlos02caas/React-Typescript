import Image from 'next/image'
import { useState } from 'react';
import { RandomFox } from '../components/RandomFox'

//Funcion genera numero random entre 1 y 123
const random =() => Math.floor(Math.random()*123)+1;

export default function Home() {

  const [images, setImages] = useState<string[]/*Array<string>*/>([
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
  ])

  return (
    <main >
      <h1>Hola Platzi</h1>
      {images.map((image,index)=>(
        <div key={index} className="p-4">
          <RandomFox image={image}/>
        </div>
      ))}
      
    </main>
  )
}
