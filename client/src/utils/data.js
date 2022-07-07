const cgData = [
    {
        team1: {
            name: 'Crystal Palace',
            shortName: 'Cry',
            logoUrl: 'https://resources.premierleague.com/premierleague/badges/25/t31.png'
        },
        team2: {
            name: 'Arsenal',
            shortName: 'Ars',
            logoUrl: 'https://resources.premierleague.com/premierleague/badges/25/t3.png'
        }
    },
    {
        team1: {
            name: 'Fulham',
            shortName: 'Ful',
            logoUrl: 'https://resources.premierleague.com/premierleague/badges/25/t54.png'
        },
        team2: {
            name: 'Liverpool',
            shortName: 'Liv',
            logoUrl: 'https://resources.premierleague.com/premierleague/badges/25/t14.png'
        }
    }
];


const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(cgData);
    }, 3000);
  });

export { myPromise, cgData }