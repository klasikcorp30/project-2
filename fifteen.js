window.onload;

$(document).ready(function()

{

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

			

			for (var n = 0; n < area.length; n++)
				{

					area[n].classList.add('puzzlepiece')

				}

			//document.getElementById('puzzlearea').classList.add('puzzlepiece');	

	

})




/*for (var i = 0, i < area.length, i++)

		{
			if (area[i].style.top === '0')
				{
					var add = 100;
					area[i].style.left = add += 100 + '';
				}
		}*/

	

	