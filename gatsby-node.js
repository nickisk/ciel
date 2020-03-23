const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions

	return new Promise((resolve, reject) => {
		const blogPost = path.resolve('./src/templates/page.js')
		resolve(
			graphql(
				`
        {
            allContentfulNavigation {
              edges {
                node {
                  title
				  url
				  page {
                    id
                  }
                }
              }
            }
          }
          
          `
			).then(result => {
				if (result.errors) {
					console.log(result.errors)
					reject(result.errors)
				}



				const pages = result.data.allContentfulNavigation.edges
				pages.forEach((page, index) => {
					if (page.node.page != null) {
						createPage({
							path: `${page.node.url}/`,
							component: blogPost,
							context: {
								slug: page.node.url
							},
						})
					}
				})
			})
		)
	})
}
