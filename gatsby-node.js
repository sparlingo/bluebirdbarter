exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions
 
  const hittersResult = await graphql(`
    query HittersQuery {
      allSanityHitter {
        edges {
          node {
            _id
            person {
              slug {
                current
              }
            }
          }
        }
      }
    }
  `)
  const pitchersResult = await graphql(`
    query PitchersQuery {
      allSanityPitcher {
        edges {
          node {
            _id
            person {
              slug {
                current
              }
            }
          }
        }
      }
    }
  `)
 
  if (hittersResult.errors) {
    throw hittersResult.errors
  }
  if (pitchersResult.errors) {
    throw pitchersResult.errors
  }
 
  const hitters = hittersResult.data.allSanityHitter.edges || []
  hitters.forEach((edge, index) => {
    const path = `/hitter/${edge.node.person.slug.current}`
 
    createPage({
      path,
      component: require.resolve('./src/templates/hitter.js'),
      context: {slug: edge.node.person.slug.current},
    })
  })

  const pitchers = pitchersResult.data.allSanityPitcher.edges || []
  pitchers.forEach((edge, index) => {
    const path = `/pitcher/${edge.node.person.slug.current}`

    createPage({
      path,
      component: require.resolve('./src/templates/pitcher.js'),
      context: {slug: edge.node.person.slug.current}
    })
  })
}
