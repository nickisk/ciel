import React from 'react';


const joinSection = (props) => {
	console.log(props);
	return (

		<div className="join-section" >
			<div className="flex">
				<div className="colmn-text">
					<figure>
						<img src={props.sectionDetail.leftImage.file.url} />
					</figure>
					<div className="text-box" data-aos="fade-in" data-aos-duration="2000">
						<div dangerouslySetInnerHTML={{
							__html: props.sectionDetail.content.childMarkdownRemark.html

						}}>

						</div>

						<a href={props.sectionDetail.link.url} className="btn-underline">{props.sectionDetail.link.title}</a>
					</div>
				</div>
				<div className="colmn-heading" data-aos="fade-in" data-aos-duration="2000">
					<h2>{props.sectionDetail.title}</h2>
					<figure>
						<img src={props.sectionDetail.rightImage.file.url} />
					</figure>
				</div>
			</div>
		</div>


	)
}


export default joinSection
