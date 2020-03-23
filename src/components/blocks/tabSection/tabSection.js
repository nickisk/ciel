import React from 'react';


const tabSection = (props) => {
	console.log(props)
	return (
		<div className="tab-section">
			<div className="container">

				<div className="flex items-align-center">
					<div className="colmn-img">

						<figure>
							{props.sectionDetail.tabs.map((tab, key) => (
								<img key={key} id={encodeURI(tab.title)} src={tab.image.file.url} />
							))}

						</figure>
					</div>
					<div className="colmn-text">
						<ul>
							{props.sectionDetail.tabs.map((tab, key) => (

								<li key={key}><a href={encodeURI("#" + tab.title)}>{tab.title}</a></li>
							))}

						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}


export default tabSection
