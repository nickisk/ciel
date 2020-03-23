import React, { Component } from 'react';
import Slider from "react-slick";
import $ from 'jquery';
import slick from 'slick-carousel';
class sliderSection extends Component {
	settings = {
		dots: true,
		infinite: true,
		arrows: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};
	componentDidMount() {
		$('.slider-section').slick({
			dots: true,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 4000,
			fade: true
		});
		$('.slider-section').on('afterChange', function (event, slick, currentSlide, nextSlide) {
			// console.log(nextSlide);
			$('.slider-group .active-bar').css('left', $('.slider-group li.slick-active').offset().left);
		});
	}
	render() {
		return (
			<div className="event-section" data-aos="fade-in" data-aos-duration="2000">
				<div className="container">
					<div className="slider-group">
						<span className="active-bar"></span>
						<div className="slider-section">
							{this.props.sectionDetail.slides.map((slide, key) => (
								<div key={key}>
									<div className="slide-box">
										<div className="colmn-img">
											<figure>
												<img src={slide.image.file.url} />
											</figure>
										</div>
										<div className="colmn-text">
											<span className="tag"> {slide.tag}</span>
											<h2>{slide.title}</h2>
											<h4>{slide.subTitle} </h4>
											<div dangerouslySetInnerHTML={{
												__html: slide.content.childMarkdownRemark.html

											}}>
											</div>

											<ul>
												{slide.links.map((link, key) => (
													<li key={key}><a href={link.url} className="btn-underline">{link.title}</a></li>
												))}


											</ul>
										</div>
									</div>
								</div>
							))}


						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default sliderSection
