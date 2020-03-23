import React from 'react';


const contentSection = (props) => {
	return (
		<div className={props.sectionDetail.sectionClass}>
			<div className="text-section">
				<div className="container">
					<div data-aos="fade-in" data-aos-duration="2000" dangerouslySetInnerHTML={{
						__html: props.sectionDetail.content.childMarkdownRemark.html

					}}>
					</div>
				</div>
			</div>
		</div>

	)
}


export default contentSection
