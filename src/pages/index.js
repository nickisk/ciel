import React, { Component } from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet';
import DefaultLayout from '../components/layouts/defaultLayout/defaultLayout';
import '../assets/scss/style.scss';
import BannerSection from '../components/blocks/bannerSection/bannerSection';
import ContentSection from '../components/blocks/contentSection/contentSection';
import TabSection from '../components/blocks/tabSection/tabSection';
import CardSection from '../components/blocks/cardSection/cardSection';
import BackgroundImageSection from '../components/blocks/backgroundImageSection/backgroundImageSection';
import SliderSection from '../components/blocks/sliderSection/sliderSection';
import JoinSection from '../components/blocks/joinSection/joinSection'

class RootIndex extends Component {
	render() {
		console.log(this.props.data)
		const sectionDetails = this.props.data.allContentfulNavigation.edges[0].node.page.blocks;
		const blocks = sectionDetails.map(detail => {
			switch (detail.internal.type) {
				case "ContentfulBannerSection":
					return <BannerSection sectionDetail={detail} />
				case "ContentfulContentSection":
					return <ContentSection sectionDetail={detail} />;
				case "ContentfulTabSection":
					return <TabSection sectionDetail={detail} />;
				case "ContentfulCardSection":
					return <CardSection sectionDetail={detail} />;
				case "ContentfulBackgroundImageSection":
					return <BackgroundImageSection sectionDetail={detail} />;
				case "ContentfulSliderSection":
					return <SliderSection sectionDetail={detail} />;
				case "ContentfulJoinSection":
					return <JoinSection sectionDetail={detail} />;
				default:
					return detail;
			}
		})
		return (
			<DefaultLayout headerData={this.props.data.allContentfulLayout.edges[0].node.header} footerData={this.props.data.allContentfulLayout.edges[0].node.footer}>
				{blocks}
			</DefaultLayout>
		)
	}
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
	}
	allContentfulLayout {
		edges {
		  node {
			footer {
			  logo {
				file {
				  url
				}
			  }
			  navigationGroups {
				title
				navigation {
				  ... on ContentfulNavigation {
				  
					title
					url
				  }
				  ... on ContentfulSeconderyNavigation {
				  
					title
					url
				  }
				}
			  }
			}
			header {
				rightNavigation {
				  title
				  url
				}
				navigationItems {
				  title
				  url
				  extraClass
				  navigationImage {
						fluid {
						src
						}
					}
				  }
				  logo {
					file {
					  url
					}
				  }
			  }
		  }
		}
	  }
	  allContentfulNavigation(filter: {url: {eq: "/"}}) {
		edges {
		  node {
			url
			page {
			  blocks {
				... on ContentfulBannerSection {
					id
					internal {
					  type
					}
					title
					subtitle
					logo {
					  file {
						url
					  }
					}
					imageVideo {
					  file {
						url
					  }
					}
				  }
				  ... on ContentfulContentSection {
					id
					internal {
					  type
					}
					content {
						childMarkdownRemark {
						  html
						}
					  }
					  title
					  sectionClass
				  }
				  ... on ContentfulTabSection {
					id
					internal {
					  type
					}
					tabs {
						title
						image {
						  file {
							url
						  }
						}
					  }
				  }
				  ... on ContentfulCardSection {
					title
					content {
					  childMarkdownRemark {
						html
					  }
					}
					backgroundImage {
					  file {
						url
					  }
					}
					cardImage {
					  file {
						url
					  }
					}
					internal {
					  type
					}
				  }
				  ... on ContentfulBackgroundImageSection {
					internal {
					  type
					}
					id
					title
					textCenter
					textTop
					textBottom
					backgroundImage {
					  file {
						url
					  }
					}
					sectionLink {
						title
						url
					  }
					content {
					  childMarkdownRemark {
						html
					  }
					}
				  }
				  ... on ContentfulSliderSection {
					internal {
					  type
					}
					title
					slides {
					  title
					  subTitle
					  content {
						childMarkdownRemark {
						  html
						}
					  }
					  image {
						file {
						  url
						}
					  }
					  tag
					  links {
						title
						url
					  }
					}
				  }
				  ... on ContentfulJoinSection {
					internal {
					  type
					}
					title
					content {
					  childMarkdownRemark {
						html
					  }
					}
					rightImage {
					  file {
						url
					  }
					}
					leftImage {
					  file {
						url
					  }
					}
					link {
					  url
					  title
					}
				  }
				
			  }
			}
		  }
		}
	  }
  }
`
