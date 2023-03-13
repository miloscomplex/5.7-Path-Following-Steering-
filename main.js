let vehicle;
let path;

function setup() {
  createCanvas(800, 400);
  vehicle = new Vehicle(100, 100);
  vehicle.vel.x = 2;
  path = new Path(0, 200, 800, 200);
}


function draw() {
  background(50);

  path.end.y = mouseY;

  let force = vehicle.follow(path);
  vehicle.applyForce(force)

  vehicle.update();
  vehicle.edges();
  vehicle.show();

  path.show();

}