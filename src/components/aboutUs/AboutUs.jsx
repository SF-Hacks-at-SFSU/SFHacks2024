import { ContentCollectionTypeMismatchError } from 'astro/dist/core/errors/errors-data'
import React from 'react'
import Person from './person'

export const AboutUs = () => {
    const peopleOfInterest = [{name:"Omar", position:"Director Of Tech", img:"public/frogs/frog1.png"}, {name:"Akim", position:"Emperor of SF Hacks", img:"public/frogs/frog2.png"}, {name:"OD", position:"President", img:"/Users/omardajani75/SFHacks2024/public/frogs/frog3.png"}]
  return (
    <div>AboutUs</div>
  )
}