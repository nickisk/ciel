import React from 'react';
import imageHolder from '../components/blocks/imageHolder/imageHolder';
import textBlock from '../components/blocks/textBlock/textBlock';
import sectionImage from './blocks/sectionImage/sectionImage';
import accordionSection from './blocks/accordionSection/accordionSection';
import cardBox from './blocks/cardBox/cardBox';
import contentBox from './blocks/contentBox/contentBox';
import contactDetailBox from './blocks/contactDetailBox/contactDetailBox';
import sliderSection from './blocks/sliderSection/sliderSection';

const components = {
	ContentfulImageHolder: imageHolder,
	ContentfulTextBlock: textBlock,
	ContentfulBannerTitle: function (title) {
		return <div className="section-heading"><h2>{title.data.title}</h2></div>
	},
	ContentfulSectionTitle: function (title) {
		return <h4 className="line-heading">{title.data.title}</h4>
	},
	ContentfulAccordionBox: accordionSection,
	ContentfulSectionImage: sectionImage,
	ContentfulCardBox: cardBox,
	ContentfulContentBox: contentBox,
	ContentfulContactDetailBox: contactDetailBox,
	ContentfulSliderSection: sliderSection
}

class Renderer extends React.Component {
	render() {
		var views = this.props.views.map((view, key) => {
			if (components[view.internal.type] != undefined) {
				let View = components[view.internal.type]
				return <View key={key} data={view}></View>
			}

		})
		return views
	}


}
export default Renderer;
