console.log('Space Battle!!!!!!');

class AlienShips {
	constructor(){
		this.hull = Math.floor(Math.random() * (7 - 3)) + 3
		this.firepower = Math.floor(Math.random() * (4 - 2)) + 2
		this.accuracy = Math.floor(Math.random() * (0.8 - 0.6)) + 0.6
	}
	attack(){
		// function to determine whether attack is a hit
		let hit = null;
		if(Math.random() < this.accuracy){
			hit = true;
			game.ussAssembly.hull -= this.firepower;
			console.log('Hit by alien ship!! Hull is now at ' + game.ussAssembly.hull);
		}else{
			hit = false;
			console.log('Alen ship missed!!!');
		}
	}
}

class UserShip {
	constructor(hull, firepower, accuracy){
		this.hull = hull 
		this.firepower = firepower
		this.accuracy = accuracy
	}
	attack(){
		// function to determine whether attack is a hit
		let hit = null;
		if(Math.random() < this.accuracy){
			hit = true;
			game.AlienShips[0].hull -= this.firepower;
			console.log('You hit the alien ship!! Hull is now at ' + game.AlienShips[0].hull);
		}else{
			hit = false;
			console.log('Alen ship missed!!!');
		}
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
	},
	startGame(num){
		this.createAlienShip(num);
		console.log(this.AlienShips);
		let i = 0;
		while(i < num){
			this.ussAssembly.attack();
			if(this.AlienShips[0].hull > 0){
				this.AlienShips[0].attack();
			}else{ 
				console.log('You destroyed the alien ship!!!');
				const attackOrRetreat = prompt('Continue? Y/N?')
				if(attackOrRetreat === "Y"){
					//reove from AlienShips array
				this.AlienShips = this.AlienShips.shift()
				console.log(this.AlienShips);
				i++
				}else{
					console.log('Game Over! You retreated.');
					break
				} 
	
			}
			
		}

	}
}
