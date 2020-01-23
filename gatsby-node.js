const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    const filmTemplate = path.resolve(`src/templates/film-details.js`);

    return graphql(`
    {
        films: allRestApiApiFilms {
          edges {
            node {
              results {
                title
                release_date
                episode_id
                opening_crawl
                director
                producer
                characters
                species
                planets
              }
            }
          }
        }

        people: allRestApiApiPeople {
            edges {
              node {
                results {
                  url
                  name
                }
              }
            }
          }

          species: allRestApiApiSpecies {
            edges {
              node {
                results {
                  name
                  url
                }
              }
            }
          }

          planets: allRestApiApiPlanets {
            edges {
              node {
                results {
                  name
                  url
                }
              }
            }
          }
    }
    `, { limit: 1000 }).then(result => {
        if (result.errors) {
            throw result.errors
        }

        const peopleData = result.data.people.edges[0].node.results;
        const speciesData = result.data.species.edges[0].node.results;
        const planetData = result.data.planets.edges[0].node.results;

        result.data.films.edges[0].node.results.forEach(item => {

            // Cross check people
            let ppData = [];
            item.characters.forEach(person => (
              ppData.push(peopleData.find(a => a.url == person))
            ))
            ppData.sort(a => a != null ? 1 : -1);

            // Cross check species
            let spData = [];
            item.species.forEach(specie => (
              spData.push(speciesData.find(a => a.url == specie))
            ))
            spData.sort(a => a != null ? 1 : -1);

            // Cross check planet
            let pData = [];
            item.planets.forEach(planet => (
              pData.push(planetData.find(a => a.url == planet))
            ))
            pData.sort(a => a != null ? 1 : -1);

            createPage({
                path: `films/${item.episode_id}`,
                component: filmTemplate,
                context: {
                  item,
                  ppData,
                  spData,
                  pData
                }
            })
        })
    });
}