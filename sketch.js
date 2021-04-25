//variables go up here
let img1;
let img2;
let img3;
let vid1
function preload(){
  img1 = loadImage('assets/maxresdefault.jpg');
  img2 = loadImage('assets/download.jpg');
  img3 = loadImage('assets/Lifecollege.jpg');
  vid1 = ceateVideo('assets/cgc.mp4');
  //stuff to prepare gets done here
}
function setup() {
  createCanvas(1920, 1080);
  vid1.position(100, 600)
//things to establish the "sandbox" go here
}
function draw() {
  background(255, 204, 0);
  rect(0,0,700, 500);
  image(img1, 0, 0);
  image(img2, 450, 300);
  image(img3, 1500, 100);
  //think of this area as a looping function that continuall puts things on screen, in order

  let p = createP('Should I invest and get a return of 8%? Or should I pay off my student loans at an interest rate of 3%?
  Down below are two videos that will give you perspectives and may influence your future decision. Go to Youtube
  and search https://www.youtube.com/watch?v=Y1_wGJfL_pA or https://www.youtube.com/watch?v=qR-onnF-VLE');
  p.style('font-size', '16px');
  p.position(10, 0);

}
function mousePressed() {
if(vid1.isPlaying()) {
  vid1.stop();
}
else {
  vid1.play();
