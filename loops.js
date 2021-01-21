let floorlist = [];
		for (let i = 0; i < 10; i++){
			floorlist.push(i)
		}
		let direction = "";

function ElevatorMovement() {
			if (direction == "up") {
				for (let i = 0; i < floorlist.length; i++) {
					console.log(floorlist[i])
				}
			} else {
				for (let i = 10; i > -1; i--) {
					console.log(floorlist[i])
				}
			}			

		}