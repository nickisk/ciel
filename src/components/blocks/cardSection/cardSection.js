import React from 'react';


const cardSection = (props) => {
	console.log(props)
	return (
		<div className="text-bg-section">
			<div className="container-sm">
				<div className="colmn-img">
					<figure data-aos="fade-right" data-aos-duration="1000">
						<img src={props.sectionDetail.backgroundImage.file.url} alt="" />
					</figure>
					<figure data-aos="fade-left" data-aos-duration="1000">
						<img src={props.sectionDetail.cardImage.file.url} />
					</figure>
				</div>
				<div className="colmn-text">
					<h4><span>
						{props.sectionDetail.title}
					</span>
					</h4>
					<div data-aos="fade-in" data-aos-duration="2000" dangerouslySetInnerHTML={{
						__html: props.sectionDetail.content.childMarkdownRemark.html

					}}>

					</div>

				</div>
			</div>
		</div>

	)
}


export default cardSection
