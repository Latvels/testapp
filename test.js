let whoIsThisHouseToStarks = (firstName) => {
    let friend = ('Tally', 'Karstark');
    let wars = ('Lannister', 'Frey');
      if(firstName === friend) {
          console.log('friend')
    return 'friend'
      }else if (firstName === wars){
        console.log('enemy')
      return 'enemy'
      } else{
          console.log('neutral')
        return 'neutral'
      }
    }

whoIsThisHouseToStarks('Karstark'); // 'friend'
whoIsThisHouseToStarks('Frey');     // 'enemy'
whoIsThisHouseToStarks('Joar');     // 'neutral'
whoIsThisHouseToStarks('Ivanov'); 