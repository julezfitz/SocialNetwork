const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

// const biggestFollower = function (data) {
//   let biggestFollower = '';
//   let largestNumber = 0;
//   for (let key in data) {
//     let numFollows = (data[key]['follows'].length);
//     if (numFollows > largestNumber) {
//       largestNumber = numFollows;
//       biggestFollower = data[key]['name'];
//     }
//   }
//   return biggestFollower;
// };

// biggestFollower(data);

//Helper function to create an object to track follower counts for each person.
// const compileResults = function(data) {
//   let results = {};
//   for (let key in data) {
//     for (let person of data[key]['follows']) {
//       if (results[person]) {
//         results[person]['followerCount'] += 1;
//       } else {
//         results[person] = { ['followerCount']: 1 };
//       }
//     }
//   }
//   return results;
// };

// const mostPopular = function(data) {
//   let popular = [];
//   let bestFollowerCount = 0;
//   let follwerResults = compileResults(data);

//   for (let person in follwerResults) {
//     if (follwerResults[person]['followerCount'] > bestFollowerCount) {
//       popular = [data[person]['name']];
//       bestFollowerCount = follwerResults[person]['followerCount'];
//     } else if (follwerResults[person]['followerCount'] === bestFollowerCount) {
//       popular.push(data[person]['name']);
//     }
//   }
//   return popular;
// };

// mostPopular(data);

//a list of everyone and for each of them, the names of who they follow and who follows them
const printAll = function (data) {
  let results = {};
  for (let key in data) {
    results[data[key]['name']] = { 'followers': [], 'following': [] };
  }

  for (let key in data) {
    for (let personCode of data[key]['follows']) {
      if (results[data[key]['name']]) {
        results[data[key]['name']]['following'].push(data[personCode]['name']);
        results[data[personCode]['name']]['followers'].push(data[key]['name']);
      } else {
        results[data[key]['name']] = { 'followers': [data[key]['name']], 'following': [data[personCode]['name']] };
      }
    }
  }
  return results;
};

printAll(data);

//returns a list of names for those who follow someone that doesn't follow them back.
const unrequitedFollowers = function (data) {
  let results = {};
  let followerInfo = printAll(data);
  
  for (let person in followerInfo) {
    let unrequited = [];

    for (let i = 0; i < followerInfo[person]['following'].length; i++) {
      if (followerInfo[person]['followers'].includes(followerInfo[person]['following'][i]) === false) {
        unrequited.push(followerInfo[person]['following'][i]);
      }
    }
    results[person] = { 'unrequitedfollowers': unrequited };
  }
  return results;
};

unrequitedFollowers(data);
