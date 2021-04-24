var hr, mn, sec
var hrAngle, mnAngle, secAngle

function setup() {
  createCanvas(400,400);
angleMode(DEGREES)
}

function draw() {
  background(0);  
  translate(200, 200)
  rotate(-90)
  hr=hour()
  mn=minute()
  sec=second()
  hrAngle=map(hr% 12, 0, 12, 0, 360)
  mnAngle=map(mn, 0, 60, 0, 360)
  secAngle=map(sec, 0, 60, 0, 360)
  push()
  rotate(hrAngle)
  stroke("blue")
  strokeWeight(7)
  line(0, 0, 50, 0)
  pop()
  push()
  rotate(mnAngle)
  stroke("green")
  strokeWeight(7)
  line(0, 0, 75, 0)
  pop()
  push()
  rotate(secAngle)
  stroke("red")
  strokeWeight(7)
  line(0, 0, 100, 0)
  pop()
  point(0, 0)
  stroke(255, 0, 255)
  strokeWeight(10)
  noFill()
  stroke("blue")
  arc(0, 0, 260, 260, 0, hrAngle)
  stroke("green")
  arc(0, 0, 280, 280, 0, mnAngle)
  stroke("red")
  arc(0, 0, 300, 300, 0, secAngle)

}