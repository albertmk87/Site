import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class stickyHeader {
	constructor(){
		this.siteHeader=$(".site-header");
		this.headerTrigger=$(".large-hero__title");
		this.createHeaderWayPoint();
	}

	createHeaderWayPoint(){
		var that=this;
		new Waypoint({
			element:this.headerTrigger[0],
			handler:function(direction){
				if(direction=="down"){
					that.siteHeader.addClass("site-header--darker");
				}else{
					that.siteHeader.removeClass("site-header--darker");	
				}
			
		}
		})

		
	}
}

export default stickyHeader;