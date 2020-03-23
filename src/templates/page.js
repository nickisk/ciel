import React from 'react'
import { graphql } from 'gatsby'
// import DefaultLayout from '../components/layouts/defaultLayout/defaultLayout'
// import BannerSection from '../components/blocks/bannerSection/bannerSection';
// import TeamSection from '../components/blocks/teamSection/teamSection';
// import PillarSection from '../components/blocks/pillarSection/pillarSection';
// import FounderSection from '../components/blocks/founderSection/founderSection';
// import AccordionSection from '../components/blocks/accordionSection/accordionSection';
// import PropertiesSection from '../components/blocks/propertiesSection/propertiesSection';
// import ContactSection from '../components/blocks/contactSection/contactSection';



class PageTemplate extends React.Component {
	componentDidMount() {

	}
	render() {
		console.log(this.props.data)
		// const sectionDetails = this.props.data.allContentfulNavigation.edges[0].node.page.blocks;


		return (
			<div>

				{/* <DefaultLayout headerData={this.props.data.allContentfulLayout.edges[0].node.header} footerData={this.props.data.allContentfulLayout.edges[0].node.footer}>
					{blocks}
				</DefaultLayout> */}
				<h2>inner page</h2>
			</div>
		)
	}
}

export default PageTemplate

