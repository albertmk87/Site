import mobileMenu from "./modules/mobileMenu";
import revealOnScroll from "./modules/revealOnScroll";
import stickyHeader from "./modules/stickyHeader";
import Modal from "./modules/modal";
import $ from "jquery"

var mobileMenu1=new mobileMenu();
var revealOnScroll1=new revealOnScroll($(".feauture-item"),"85%");
var revealOnScroll2=new revealOnScroll($(".testimonial"),"60%");

var stickyHeader1=new stickyHeader();

var modal=new Modal();