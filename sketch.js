var y,r = 0;

function setup() {
  createCanvas(900, 950);
	background(255);
	fill(0);
	strokeWeight(1);
	rect(0,447.5,900,5);
	rect(0,347.5,900,5);
	
	for (var i=0; i<10; i++){
		line(890-(i*15),2.5,890-(i*15),247.5-(i*20))
		line(10,125-(i*12.5),600-(i*57),125-(i*12.5))
		rect((i*100)-2.5,250,5,300);
		push();
		noFill();
		if (i==0){
			r=47.5
			rect(2.5+(i*100),652.5+(5*i),95,r);
		}else{
			r=r*0.8;
			if(i==1){rect(2.5+(i*100),652.5,95,r);}else{
				rect(2.5+(i*100),688.125,95,-r);
			}
		}
		rect(2.5+(i*100),852.5,r,95);
		rect(97.5+(i*100),752.5,-r,95);
		rect(2.5+(i*100),645,95,-r);
		line(r+5+(i*100),852.5,5+(i*100)+(2*r),947.5);
		line(2.5+(i*100),947.5,2.5+(i*100)+r,852.5);
		//line(97.5+(i*100),747.5,-r,95);
		line(2.5+(i*100),702.5,2.5+(i*100)+95,702.5+r);
		pop();
		//rect(600+(100/3),152.5,100/3, 95);
		for (var b=0; b<=i+2; b++){
			if (b == 0){
			y=0;
			}else{
			y+=100/(i+2);
			}
			line(i*100, 250+y, i*100+100, 250+y);
			line(y+(i*100), 350, y+(i*100), 450);
			line(i*100, 450+y, i*100+100, 450+y);
			line(y+(i*100), 450, y+(i*100), 550);
		}
	}
	push();
		noFill();
		rect(702.5,175,95,50);
		rect(625,152.5,50, 95);
		line(600+(100/3), 2.5, 600+(100/3), 135);
		line(600+(100/3)+10, 2.5, 600+(100/3)+10, 135);
		rect(502.5,152.5,95, 95);
		line(420, 225, 480, 225);
		line(450, 200, 450, 247.5);
		line(280, 247.5, 340, 247.5);
		line(180, 200, 240, 200);
		line(40, 200, 100, 200);
		line(300, 200, 300, 247.5);
		line(200, 200, 200, 247.5);
		line(100, 200, 100, 247.5);
		line(10,137.5,400,137.5);
		line(10,150,400,150)
	pop();
}


function draw() {
  
}