//Class build
public class Material {
  constructor(x_coordinate,y_coordinate,name,subarea_name,area_name){
    this.area_name = area_name;
    this.subarea_name = subarea_name;
    this.x_coordinate = x_coordinate;
    this.y_coordinate = y_coordinate;
    this.name = name;
  }
};

//Class populate
const Orthenglass = new NPC(1,1,"Orthenglass","Anachronia North Excavation Site","Anachronia");
