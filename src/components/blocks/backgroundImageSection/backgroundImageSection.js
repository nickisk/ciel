import React from 'react';


const backgroundImageSection = (props) => {
	console.log(props)
	return (
		<div className="pardon-seciton bg-control" style={{ "backgroundImage": "url(" + props.sectionDetail.backgroundImage.file.url + ")" }}>
			<div className="section-text left">
				<h2 data-aos="fade-right" data-aos-duration="1000">{props.sectionDetail.textTop}</h2>
			</div>
			<div className="section-text right">
				<h2 data-aos="fade-left" data-aos-duration="1000">{props.sectionDetail.textCenter}</h2>
			</div>
			<div className="section-text bottom" >
				<h2 data-aos="fade-right" data-aos-duration="1000">{props.sectionDetail.textBottom}</h2>
			</div>
			<div className="text-box">
				<h4>{props.sectionDetail.title}</h4>
				<div dangerouslySetInnerHTML={{
					__html: props.sectionDetail.content.childMarkdownRemark.html

				}}>

				</div>

				<a href={props.sectionDetail.sectionLink.url} className="btn-underline">{props.sectionDetail.sectionLink.title}</a>
			</div>
		</div>

	)
}


export default backgroundImageSection
