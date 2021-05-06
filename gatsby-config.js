module.exports = {
  siteMetadata: {
    title: `Software Engineer`,
		description: `Portfolio Website`,
    author: `Vasyl Semak`,
    image: `/images/a-default-site-image.jpg`,
    url: `https://www.vasylsemak.dev`
  },

  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require(`sass`),
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
    {
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#b8a28d`,
				theme_color: `#b8a28d`,
				display: `minimal-ui`,
				icon: `src/images/logo-icon.png`
			}
    },
    `gatsby-plugin-smoothscroll`
  ],
};
