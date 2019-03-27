console.log('Space Battle!!!!!!');

class AlienShips {
	constructor(){
		this.hull = Math.floor(Math.random() * (7 - 3)) + 3
		this.firepower = Math.floor(Math.random() * (4 - 2)) + 2
		this.accuracy = Math.floor(Math.random() * (0.8 - 0.6)) + 0.6
	}
}

class UserShip {
	constructor(hull, firepower, accuracy){
		this.hull = hull 
		this.firepower = firepower
		this.accuracy = accuracy
	}
}


const game = {
	ussAssembly: new UserShip(20, 5, 0.7),
	AlienShips: [],
	createAlienShip(num){
		for(let i = 0; i < num; i++){
			const alienShip = new AlienShips();
			console.log(alienShip);
			this.AlienShips.push(alienShip);
		}
	}

}

