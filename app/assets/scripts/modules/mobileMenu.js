import $ from "jquery";

class mobileMenu {
constructor(){
	this.menuIcon=$(".site-header__menu-icon");
	this.menuContent=$(".site-header__menucontent");
	this.siteHeader=$(".site-header");
	this.events();
}
	events(){
		this.menuIcon.click(this.toggleMenu.bind(this));
	}

	toggleMenu(){
		this.menuContent.toggleClass("site-header__menucontent--isVisible");
		this.siteHeader.toggleClass("site-header--isExpanded");
		this.menuIcon.toggleClass("site-header__menu-icon--close");
	}
}

export default mobileMenu;