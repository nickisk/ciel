import React, { Component } from 'react';
import './header.scss';
import { Link } from 'gatsby';
import Holder from '../../hoc/holder';
import menuBar from '../../assets/images/menu.svg';
import $ from 'jquery';
import AOS from 'aos';

class Header extends Component {
	state = {
		showNav: false
	}
	navHendler = () => {
		this.setState((prevstate) => ({
			showNav: !prevstate.showNav
		}))
	}
	componentDidMount() {
		AOS.init();
		$('.toggle-btn').click(function (e) {
			e.preventDefault();
			$('.navigation').fadeIn();
		});
		$('.close-btn').click(function (e) {
			e.preventDefault();
			$('.navigation').fadeOut();
		});
		if ($(window).width() >= 767) {
			$('.navigation .colmn-text li').hover(
				function () {
					$(this).addClass('active');
					$(this).parent().addClass('active');
					var getImg = $(this).children('a').attr('data-img');
					$(getImg).addClass('active').siblings().removeClass('active');
				},
				function () {
					$(this).removeClass('active');
					$(this).parent().removeClass('active')
					// $('.navigation .colmn-img img:first').addClass('active');

				}
			)
		}
		// tab sections
		$('.tab-section li a').click(function (e) {
			e.preventDefault();
			var getImage = $(this).attr('href');
			$(getImage).addClass('active').siblings().removeClass('active');
			$(this).parent().addClass('active');
			$(this).parent().siblings().removeClass('active');
		})
		$('.tab-section li:first,.tab-section figure img:first,.navigation .colmn-img img:first').addClass('active');
		$(window).scroll(function () {
			if ($(this).scrollTop() > $(this).height()) {
				$('header').addClass('header-fixed');
			}
			else {
				$('header').removeClass('header-fixed');
			}
		})
	}
	render() {
		console.log(this.props.headerData.navigationItems)
		return (
			<Holder>
				<header>
					<div className="container">
						<ul className="flex space-between items-align-center">
							<li><a href="" className="toggle-btn"><img src={menuBar} /></a></li>
							<li><a href="#" className="navbar-brand"><img src={this.props.headerData.logo.file.url} /></a></li>
							<li><a className="book-btn" href={this.props.headerData.rightNavigation.title}>{this.props.headerData.rightNavigation.title}</a></li>
						</ul>
					</div>
				</header>
				<div className="navigation">
					<div className="container">
						<a href="" className="close-btn">
							<span className="leftright"></span>
							<span className="rightleft"></span>
							<label className="close-label">close</label>
						</a>
						<div className="inner-wrapper">
							<div className="colmn-img">
								<figure>
									{this.props.headerData.navigationItems.map((navImg, key) => (
										<img key={key} id={navImg.navigationImage ? encodeURI('nav' + navImg.title) : ''} src={navImg.navigationImage ? navImg.navigationImage.fluid.src : ''} />
									))}
								</figure>
							</div>
							<div className="colmn-text">
								<ul className="navbar-tabs">
									{this.props.headerData.navigationItems.map((nav, key) => (
										<li key={key}><a href={nav.url} data-img={nav.navigationImage ? encodeURI('#nav' + nav.title) : ''} className={nav.extraClass ? nav.extraClass : null}>{nav.title}</a></li>
									))}

								</ul>
							</div>
						</div>
					</div>
				</div>
			</Holder>
		)
	}
}

export default Header;

