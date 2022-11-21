export const getPlanetsQuery = `
query {
    allPlanets {
      totalCount
      planets {
        id
        name
        diameter
        rotationPeriod
        orbitalPeriod
        gravity
        population
        climates
        terrains
        surfaceWater
        created
      }
    }
}
  `;


  export const getPlanetByIdQuery = `
  query($id: ID){
    planet(id: $id){
      id
      name
      diameter
      rotationPeriod
      orbitalPeriod
      gravity
      population
      climates
      terrains
      surfaceWater
      created
    }
  }
  `