import mobileMenu from "./modules/mobileMenu";
import revealOnScroll from "./modules/revealOnScroll";
import $ from "jquery"

var mobileMenu1=new mobileMenu();
var revealOnScroll1=new revealOnScroll($(".feauture-item"),"85%");
var revealOnScroll2=new revealOnScroll($(".testimonial"),"60%");