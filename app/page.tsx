'use client';
import Image from 'next/image'
import { useState } from 'react';
import { RandomFox } from '../components/RandomFox'

//Funcion genera numero random entre 1 y 123
const random =() => Math.floor(Math.random()*123)+1;

//generar id
const generateId = () => Math.random().toString(36).substr(2,9);

type ImageItems = {id:string,url:string};

export default function Home() {

  //const [images, setImages] = useState<string[]/*Array<string>*/>([
  const [images, setImages] = useState<Array<ImageItems>>([
    {id: generateId(),url:`https://randomfox.ca/images/${random()}.jpg`},
    {id: generateId(),url:`https://randomfox.ca/images/${random()}.jpg`},
    {id: generateId(),url:`https://randomfox.ca/images/${random()}.jpg`},
    {id: generateId(),url:`https://randomfox.ca/images/${random()}.jpg`},
  ])

  return (
    <main >
      <h1>Hola Platzi</h1>
      {images.map((item)=>(
        <div key={item.id} className="p-4">
          <RandomFox image={item.url}/>
        </div>
      ))}
      
    </main>
  )
}
