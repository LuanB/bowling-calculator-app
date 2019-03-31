//exports.calculateScore = (ballScore) => {

// test cases:
let scoreArray1 = [10, 10, 10, 10, 10, 10, 10, 10, 10, 1, 9, 4]; //result 265

let scoreArray2 = [1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2]; //result 48

let scoreArray3 = [
  1,
  2,
  1,
  2,
  1,
  2,
  1,
  2,
  1,
  2,
  1,
  2,
  1,
  2,
  1,
  2,
  1,
  2,
  1,
  9,
  2
]; //result 39

let scoreArray4 = [1, 2, 1, 2, 30, 99]; //bad data

let scoreArray5 = []; // bad data

let scoreArray6 = ['a', 'b', 'c', 'd']; // bad data

const getSum = (total, num) => {
  return total + num;
};

exports.calculateScore = (ballScore) => {
  //initialise the value of each variable.
  let frame = 0;
  var scoreFrame = [];
  let throw1 = null;
  let throw2 = null;

  let currentFrameScore = 0;

  let totalscore = 0;

  // iterate though the array of ball scores.
  // at each ball score (pins knocked down), I check to see if it is a strike, spare or just normal case.

  for (let i = 0; i <= ballScore.length - 1; i++) {
    if (frame < 9) {
      // In frames 1 to 9th
      console.log('frame is ', frame);
      console.log('pins down at ', i);
      console.log('pins down is ', ballScore[i]);
      // check conditions

      // case of strike

      if (ballScore[i] === 10) {
        //currentFrameScore = 10;
        scoreFrame[frame] = 10 + ballScore[i + 1] + ballScore[i + 2];

        console.log('currentFrame Score is ', scoreFrame.reduce(getSum));

        frame++;
      } else if (!throw1) {
        // check what throw it is
        // case normal or spare need to check that throw1 does not exist
        throw1 = ballScore[i];
      } else if (throw1 + ballScore[i] === 10) {
        // then this will be the 2nd throw
        // case of spare in second throw

        scoreFrame[frame] = 10 + ballScore[i + 1];

        console.log('currentFrame Score is ', scoreFrame.reduce(getSum));

        frame++;
        throw1 = null;
      } else if (throw1 + ballScore[i] < 10) {
        // this is the case where it is a normal frame

        scoreFrame[frame] = throw1 + ballScore[i];

        console.log('currentFrame Score is ', scoreFrame.reduce(getSum));

        frame++;
        throw1 = null;
      } else {
        // catch all
        console.log('error in data');
        throw 'error in data';
      }
    } else {
      // in the 10th frame

      console.log('in 10th frame');
      console.log('frame is ', frame);
      console.log('i is ', i);
      console.log('ballscore is ', ballScore[i]);
      console.log('throw1 is ', throw1);

      if (ballScore[i] === 10) {
        scoreFrame[frame] = 10 + ballScore[i + 1] + ballScore[i + 2];
        console.log('finished calculating score Case X in 10th');
        console.log('scoreFrame is ', scoreFrame);

        console.log('currentFrame Score is ', scoreFrame.reduce(getSum));

        return scoreFrame;
      } else if (!throw1) {
        // case normal or spare need to check that throw1 does not exist
        throw1 = ballScore[i];
      } else if (throw1 + ballScore[i] === 10) {
        // then this will be the 2nd throw
        // case of spare in second throw, user would get a 3rd throw

        scoreFrame[frame] = 10 + ballScore[i + 1];

        console.log('finished calculating score Case spare in 10th');
        console.log('scoreFrame is ', scoreFrame);

        console.log('currentFrame Score is ', scoreFrame.reduce(getSum));

        return scoreFrame;
      } else if (throw1 + ballScore[i] < 10) {
        // this is the case where it is a normal frame. User would not get the 3rd throw

        scoreFrame[frame] = throw1 + ballScore[i];
        console.log('finished calculating score Case normal in 10th');
        console.log('scoreFrame is ', scoreFrame);

        console.log('currentFrame Score is ', scoreFrame.reduce(getSum));

        return scoreFrame;
      } else {
        // catch all
        console.log('error in data');
        throw 'error in data';
      }

      console.log('exiting 10th frame');
    }
  }

  // if there is no data than the for loop at the top is skipped and we get to here.
  console.log('no data');
  throw 'no data';
};

// module.export = calculateScore;
//calculateScore(scoreArray6);

//return scoreFrame;
