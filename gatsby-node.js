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
    }
    `, { limit: 1000 }).then(result => {
        if (result.errors) {
            throw result.errors
        }

        result.data.films.edges[0].node.results.forEach(item => {

            createPage({
                path: `films/${item.episode_id}`,
                component: filmTemplate,
                context: item
            })
        })
    });
}