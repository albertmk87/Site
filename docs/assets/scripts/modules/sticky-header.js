import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class stickyHeader {
	constructor(){
		this.siteHeader=$(".site-header");
		this.headerTrigger=$(".large-hero__title");
		this.createHeaderWayPoint();
		this.pageSections=$(".page-section");
		this.createPageSectionWaypoint();
	}

	createHeaderWayPoint(){
		var that=this;
		new waypoint({
			element:this.headerTrigger[0],
			handler:function(){
			that.siteHeader.addClass("site-header--darker");
		}
		})

		
	}

	createPageSectionWaypoint(){
		this.pageSections.each(function(){
			var cur=this;
			new Waypoint({
				element:cur,
				handler:function(){
					var matchingLink=cur.getAttribute("data-matching-link");
					$(matchingLink).addClass("current-link");
				}
			})
		})
	}
}

export default stickyHeader;