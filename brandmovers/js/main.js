'use strict';
var app = angular.module('ajinkya', []);

app.controller('People', function ($scope) {
    $scope.buddies = [
	    {
	    	"name" : "Prajakta",
	    	"content" : "Straight on face, No two faces; that's why I like you most at Brandmovers. I admire your designs and clean layouts.",
	    	"pic" : "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/t1/c69.0.160.160/p160x160/1504094_10152175095914203_1874150730_n.jpg"
	    },
	    {
	    	"name" : "Nigel",
	    	"content" : "Dude, tu Brandmovers ka favorite hain and Bewdaa. And I will never forget you getting Shy and that Vendeta wala smile.",
	    	"pic" : "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/t1/c0.58.554.554/s160x160/430997_10151393077865585_285587508_n.jpg"
	    },
	    {
	    	"name" : "Amogh",
	    	"content" : "He is the man to go to, you have problem tell him directly. He is the most calm temper guy I seen. And coolest boss.",
	    	"pic" : "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn1/t1/c16.16.194.194/s160x160/296452_2334456153249_1489332074_n.jpg"
	    },
	    {
	    	"name" : "Chetan",
	    	"content" : "He looks calm, but he is not. Btw he likes to read tech blogs too.",
	    	"pic" : "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/t1/c27.0.160.160/p160x160/1010413_650274918370534_1661595047_n.jpg"
	    },
	    {
	    	"name" : "Manoj",
	    	"content" : "He tought me how to control my Temper. Btw Congrats again for ur marriage. And pleeeease JavaScript is better than PHP.",
	    	"pic" : "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-frc1/t1/c36.0.362.362/s160x160/995403_650458578316683_942002797_n.jpg"
	    },
	    {
	    	"name" : "Branel",
	    	"content" : "Our Bruno Mars, He sings alone while walking down stairs. He is very good person, he loves problem solving in programming and a deep thinker ^-^",
	    	"pic": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-frc1/t1/c178.0.604.604/s160x160/252231_1002029915278_1941483569_n.jpg"
	    },
	    {
	    	"name" : "Jaspal",
	    	"content" : "I like your mom's food. And you gotta start cycling again.",
	    	"pic" : "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-frc1/t1/c44.44.552.552/s160x160/390263_4739331838094_1341602138_n.jpg"
	    },
	    {
	    	"name" : "Shekhar",
	    	"content" : "Yeh bhai sahab, he can speak if you dont know. Very calm and cool guy. He loves music and got a damm sexy bike.",
	    	"pic" : "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/t1/p160x160/1622826_10152263203925962_647603275_n.jpg"
	    },
	    {
	    	"name" : "Devyani",
	    	"content" : "I hope I wrote your name correctly. Fun loving, bholi bhali ladki (I dont wana mess with her). And kabhi kabhi hume bhi Good morning bol diya karo.. not only to Nigel :P",
	    	"pic" : "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn2/t1/c0.0.160.160/p160x160/1504563_10153703676845287_541058192_n.jpg"
	    },
	    {
	    	"name" : "Ninsang",
	    	"content" : "Ningu I wana visit your Native place man, and please learn to make TEA. I hate ur noodles, but like you nature.",
	    	"pic" : "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn1/t1/c25.25.310.310/s160x160/150852_1697776848758_5901546_n.jpg"
	    },
	    {
	    	"name" : "Narrutam",
	    	"content" : "Ok I know you gonna kill me Achowe. No body knows your name. And I know you deeply love Prajakta. I really like your UX designs.",
	    	"pic" : "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-frc1/t1/c302.25.302.302/s160x160/304000_2397746989085_1164321521_n.jpg"
	    },
	    {
	    	"name" : "Abhirup",
	    	"content" : "You are my first friend at Brandmovers, I hope tuze yaad hoga. I like ur nature and ur PJ.. Phaltu jokes. Keep smiling, Rasogoola's are still pending.",
	    	"pic" : "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/t1/p160x160/1471876_3668245800472_668927428_n.jpg"
	    },
	    {
	    	"name" : "Adrijaa.in",
	    	"content" : "Please teach me Bengolie language. She loves to sleep, write poems and gets scared quickly. As far I know you I Love your attitude, behaviour AND You are damm cute.",
	    	"pic" : "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-frc3/t1/c2.0.609.609/s160x160/1609902_609991082402703_238619429_n.jpg"
	    },
	    {
	    	"name" : "Tista",
	    	"content" : "Hardworking girl. Hey, dont take things seriously when I tease you. And I feel every girl should have guts like you, Bravo.",
	    	"pic" : "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-frc3/t1/c0.0.160.160/p160x160/1453263_10152157030456147_900355073_n.jpg"
	    },
	    {
	    	"name" : "Sneha",
	    	"content" : "Hey BIBA girl. Keep smiling and Stop breaking stuff :P",
	    	"pic" : "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-frc1/t1/c184.42.528.528/s160x160/308853_311954525485883_1485486238_n.jpg"
	    },
	    {
	    	"name" : "Pooja",
	    	"content" : "She loves MTS, she is the RED MIST. Im damm jealous of her MAC. Very soft spoken girl.",
	    	"pic" : "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/t1/c29.0.287.287/s160x160/541866_4115309767664_1763100457_n.jpg"
	    },
	    {
	    	"name" : "Monish",
	    	"content" : "Meet the Bengali Gujju. He hides his tiffen in the deepest of corners and troubles new girls with hes PJ's. Very enthusiast about his work and digital.",
	    	"pic" : "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn2/t1/c41.41.513.513/s160x160/954875_10201364314688224_1524428983_n.jpg"
	    },
	    {
	    	"name" : "Hershey",
	    	"content" : "Sorry, I dont know much about you. But I think you love to play Dota2, and take shoots for his sister FB pics. He is kinda design centric.",
	    	"pic" : "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn2/t1/c0.19.160.160/p160x160/1959891_10151861773381008_1251752117_n.jpg"
	    },
	    {
	    	"name" : "Shefali",
	    	"content" : "She got a movie library of her own, dont belive me!! Ask her.",
	    	"pic" : "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn1/t1/p160x160/1780682_10152275259077625_1672037342_n.jpg"
	    },
	    {
	    	"name" : "Raashi",
	    	"content" : "Hey whats your Rashi."
	    },
	    {
	    	"name" : "Linh",
	    	"content" : "Hey Linh. I know you like to say Hindi bad words :P haha Good luck, I wish u'll join us again after 30th March.",
	    	"pic" : "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn2/t1/p160x160/1504568_10152180265162418_4993697_n.jpg"
	    },
	    {
	    	"name" : "Suva",
	    	"content" : "We talk only in meetings, we gotta add more parties. Do you like Manchester UTD.?? Where is our Xbox and fuseball!",
	    	"pic" : "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-frc3/t1/p160x160/1900036_10153854160895397_657230473_n.jpg"
	    }
	];
});

window.onload = function(){
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	
	//Lets make the canvas occupy the full page
	var W = window.innerWidth, H = window.innerHeight;
	canvas.width = W;
	canvas.height = H;
	
	//Lets make some particles
	var particles = [];
	for(var i = 0; i < 25; i++)
	{
		particles.push(new particle());
	}
	
	function particle()
	{
		//location on the canvas
		this.location = {x: Math.random()*W, y: Math.random()*H};
		//radius - lets make this 0
		this.radius = 0;
		//speed
		this.speed = 3;
		//steering angle in degrees range = 0 to 360
		this.angle = Math.random()*360;
		//colors
		var r = Math.round(Math.random()*255);
		var g = Math.round(Math.random()*255);
		var b = Math.round(Math.random()*255);
		var a = Math.random();
		this.rgba = "rgba("+r+", "+g+", "+b+", "+a+")";
	}
	
	//Lets draw the particles
	function draw()
	{
		//re-paint the BG
		//Lets fill the canvas black
		//reduce opacity of bg fill.
		//blending time
		ctx.globalCompositeOperation = "source-over";
		ctx.fillStyle = "rgba(131,246,149, 0.02)";
		ctx.fillRect(0, 0, W, H);
		ctx.globalCompositeOperation = "lighter";
		
		for(var i = 0; i < particles.length; i++)
		{
			var p = particles[i];
			ctx.fillStyle = "white";
			ctx.fillRect(p.location.x, p.location.y, p.radius, p.radius);
			
			//Lets move the particles
			//So we basically created a set of particles moving in random direction
			//at the same speed
			//Time to add ribbon effect
			for(var n = 0; n < particles.length; n++)
			{
				var p2 = particles[n];
				//calculating distance of particle with all other particles
				var yd = p2.location.y - p.location.y;
				var xd = p2.location.x - p.location.x;
				var distance = Math.sqrt(xd*xd + yd*yd);
				//draw a line between both particles if they are in 200px range
				if(distance < 200)
				{
					ctx.beginPath();
					ctx.lineWidth = 1;
					ctx.moveTo(p.location.x, p.location.y);
					ctx.lineTo(p2.location.x, p2.location.y);
					ctx.strokeStyle = p.rgba;
					ctx.stroke();
					//The ribbons appear now.
				}
			}
			
			//We are using simple vectors here
			//New x = old x + speed * cos(angle)
			p.location.x = p.location.x + p.speed*Math.cos(p.angle*Math.PI/180);
			//New y = old y + speed * sin(angle)
			p.location.y = p.location.y + p.speed*Math.sin(p.angle*Math.PI/180);
			//You can read about vectors here:
			//http://physics.about.com/od/mathematics/a/VectorMath.htm
			
			if(p.location.x < 0) p.location.x = W;
			if(p.location.x > W) p.location.x = 0;
			if(p.location.y < 0) p.location.y = H;
			if(p.location.y > H) p.location.y = 0;
		}
	}
	
	setInterval(draw, 30);
}