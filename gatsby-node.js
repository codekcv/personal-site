const path = require("path")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@reach/router": path.dirname(
          require.resolve(`@gatsbyjs/reach-router/package.json`)
        ),
      },
    },
  })
}
