"use strict";
window.onload;

$(document).ready(function()

{
	document.querySelector('h1').classList.add('headClass');
	$('.headClass').on('click', function()
			{

				$('h1').slideToggle(900).text('>>>Golden State Warriors<<<')
			})
	

	var area = document.querySelectorAll('#puzzlearea div');





	
		//First four puzzle blocks (1 - 4)	

	let fCount = 0;
	let	fCount2 = 0;
		while(fCount <= 3)
			{
				area[fCount].style.top = "0px";
				area[fCount].style.left = fCount2 + 'px';
				area[fCount].style.position = "absolute";
				area[fCount].style.backgroundPositionX = '-' + fCount2 + 'px';
				fCount++;
				fCount2 += 100;
			}


		// Second four puzzle blocks (5 - 8)

	let sCount = 4;
	let	sCount2 = 0;
		while(sCount <= 7)
			{
				area[sCount].style.top = "100px";
				area[sCount].style.left = sCount2 + 'px';
				area[sCount].style.position = "absolute";
				area[sCount].style.backgroundPositionX = '-' + sCount2 + 'px'
				area[sCount].style.backgroundPositionY = '-100px'
				sCount++;
				sCount2 += 100;
			}

		// Third four puzzle blocks (9 - 12)

	let tCount = 8;
	let	tCount2 = 0;
		while(tCount <= 11)
			{
				area[tCount].style.top = "200px";
				area[tCount].style.left = tCount2 + 'px';
				area[tCount].style.position = "absolute";
				area[tCount].style.backgroundPositionX = '-' + tCount2 + 'px'
				area[tCount].style.backgroundPositionY = '-200px'
				tCount++;

				tCount2 += 100;
			}



	// Last three puzzle blocks (13 - 15)

	let lCount = 12;
	let	lCount2 = 0;
		while(lCount <= 14)
			{
				area[lCount].style.top = "300px";
				area[lCount].style.left = lCount2 + 'px';
				area[lCount].style.position = "absolute";
				area[lCount].style.backgroundPositionX = '-' + lCount2 + 'px'
				area[lCount].style.backgroundPositionY = '-300px'
				lCount++;
				lCount2 += 100;
			}

			
				//Adding puzzlepiece style to numbers
			for (var n = 0; n < area.length; n++)
				{

					area[n].classList.add('puzzlepiece')
					area[n].style.color = "yellow"
					area[n].style.fontFamily = "Copperplate Gothic"//Team Jersey Font
					area[n].style.fontSize = "bold"
					area[n].style.textShadow = "4px 4px 8px white"

					$('.puzzlepiece').on('mouseover', function()
					{
						$(area[n]).slideUp(500);
					})

				}

				
			
			

				

$('#shufflebutton').on('click', function()
		{

				function shuffle() //shuffle order functtion
			{
			area[0].style.top = "0px"
			area[0].style.left = "100px"
			area[1].style.top = "0px"
			area[1].style.left = "0px"
			area[2].style.top = "0px"
			area[2].style.left = "300px"
			area[3].style.top = "0px"
			area[3].style.left = "200px"

			area[4].style.top = "100px"
			area[4].style.left = "0px"
			area[5].style.top = "100px"
			area[5].style.left = "300px"
			area[6].style.top = "100px"
			area[6].style.left = "200px"
			area[7].style.top = "100px"
			area[7].style.left = "100px"

			area[8].style.top = "200px"
			area[8].style.left = "300px"
			area[9].style.top = "200px"
			area[9].style.left = "200px"
			area[10].style.top = "200px"
			area[10].style.left = "0px"
			area[11].style.top = "200px"
			area[11].style.left = "100px"

			area[12].style.top = "300px"
			area[12].style.left = "100px"
			area[13].style.top = "300px"
			area[13].style.left = "0px"
			area[14].style.top = "300px"
			area[14].style.left = "300px"
			}


			function shuffle1() //Shuffle order funtion
			{
			area[0].style.top = "100px"
			area[0].style.left = "100px"
			area[1].style.top = "100px"
			area[1].style.left = "0px"
			area[2].style.top = "100px"
			area[2].style.left = "300px"
			area[3].style.top = "100px"
			area[3].style.left = "200px"

			area[4].style.top = "0px"
			area[4].style.left = "0px"
			area[5].style.top = "0px"
			area[5].style.left = "300px"
			area[6].style.top = "0px"
			area[6].style.left = "200px"
			area[7].style.top = "0px"
			area[7].style.left = "100px"

			area[8].style.top = "300px"
			area[8].style.left = "300px"
			area[9].style.top = "300px"
			area[9].style.left = "200px"
			area[10].style.top = "300px"
			area[10].style.left = "0px"
			area[11].style.top = "300px"
			area[11].style.left = "100px"

			area[12].style.top = "200px"
			area[12].style.left = "100px"
			area[13].style.top = "200px"
			area[13].style.left = "0px"
			area[14].style.top = "200px"
			area[14].style.left = "300px"
			}

function shuffle2() //Shuffle order function
			{
			area[0].style.top = "200px"		
			area[0].style.left = "200px"
			area[1].style.top = "300px"
			area[1].style.left = "200px"
			area[2].style.top = "200px"
			area[2].style.left = "300px"
			area[3].style.top = "100px"
			area[3].style.left = "100px"

			area[4].style.top = "300px"
			area[4].style.left = "100px"
			area[5].style.top = "300px"
			area[5].style.left = "300px"
			area[6].style.top = "0px"
			area[6].style.left = "100px"
			area[7].style.top = "300px"
			area[7].style.left = "0px"

			area[8].style.top = "100px"
			area[8].style.left = "0px"
			area[9].style.top = "100px"
			area[9].style.left = "300px"
			area[10].style.top = "100px"
			area[10].style.left = "200px"
			area[11].style.top = "200px"
			area[11].style.left = "0px"

			area[12].style.top = "0px"
			area[12].style.left = "200px"
			area[13].style.top = "0px"
			area[13].style.left = "300px"
			area[14].style.top = "0px"
			area[14].style.left = "0px"
			}

			



				let shuffleArray= [shuffle, shuffle1, shuffle2] //shuffle orders

			shuffleArray[Math.floor(Math.random()*3) + 0]()// randomize the shuffle order




		})


// Create radio buttons for picture choice
		
		var newDiv = document.createElement('div')
		newDiv.setAttribute('id', 'picturechoice')
		newDiv.innerHTML = "<h1> Choose a picture you want to use </h1>";
		document.body.append(newDiv);
		newDiv.style.fontFamily = "Copperplate Gothic";
		newDiv.style.color = "yellow";
		newDiv.style.fontSize = "20px";
		newDiv.style.fontStyle = "bold"
		newDiv.style.textShadow = "8px 8px 12px blue"

		let picBtn = document.createElement('button') //Button Styling
		picBtn.setAttribute('id', 'picturechange')
		picBtn.setAttribute('name','Button')
		picBtn.textContent = 'Change Picture'
		picBtn.style.textAlign = 'center'
		picBtn.style.padding = "20px 100px 20px 100px"
		picBtn.style.background = "transparent"
		picBtn.style.fontFamily = "Copperplate Gothic"
		picBtn.style.position = 'absolute'
		picBtn.style.top = "200px"
		picBtn.style.fontSize = "20px"
		picBtn.style.color = '#DDDDDD'
		picBtn.style.borderRadius = "25px"
		picBtn.style.cursor = "pointer"
		
		$(picBtn).on('mouseenter', function()//Adds Color to button on mouseenter

		{
			$('#picturechange').css('color','#4169e1')
			$('#picturechange').css('background','#ffdf00')
		})

		$(picBtn).on('mouseleave', function()//when mouse leaves puts button to original styling

		{
			$('#picturechange').css('color','#DDDDDD')
			$('#picturechange').css('background','transparent')

		})

		$(picBtn).on('click', function() //Change picture on tiles
			{
				let imgArray = ['kevin.jpg', 'klay.jpg', 'logo.jpg', 'steph.jpg',
								 'stephkevin.jpg', 'steve.jpg', 'team.jpg']

				let randomImage = imgArray[Math.floor(Math.random()*7) + 0]

				for (var n = 0; n < area.length; n++)
				{
					let puzzlepiece = document.getElementsByClassName('puzzlepiece')
					puzzlepiece[n].style.backgroundImage = `url(${randomImage})`
				}


				//$('.puzzlepiece').css('background-image', 'randomImage')




			})


		document.body.append(picBtn)
	

		var body = document.querySelector('body')
		body.style.backgroundImage = 'url(warriorsbackground.jpg)';
		body.style.backgroundPositionX = "-100px";
		body.style.backgroundPositionY = "-250px"
	
			let shuffleButton = document.querySelector("#shufflebutton");
			shuffleButton.style.background = "none";
			shuffleButton.style.cursor = "pointer"; 
			shuffleButton.style.borderRadius = "25px";
			shuffleButton.style.fontFamily = "Arial";
			shuffleButton.style.fontSize = "18px"
			shuffleButton.style.padding = "0 50px 0 50px"
	




						

		
})
				

	

	