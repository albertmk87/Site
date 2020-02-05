import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class revealOnScroll {
	constructor(itemsToReveal,offset){

this.itemsToReveal=itemsToReveal;
this.offset=offset;
this.hideInitially();
this.createWayPoint();

	}
	hideInitially(){
		this.itemsToReveal.addClass("reveal-item");
	}
	createWayPoint(){
		var that=this;
		this.itemsToReveal.each(function(){
				var cur=this;
				new Waypoint({
					element:cur,
					handler:function(){
						$(cur).addClass("reveal-item--isVisible");
					},
					offset:that.offset
				});
		})
	}
}

export default revealOnScroll;