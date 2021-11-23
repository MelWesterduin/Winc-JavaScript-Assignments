const makeHomeWork = (course, callback) => { 
  console.log(`Ok, ok, I'm going to do my ${course} homework now`);
  setTimeout(callback, 3000);
};

const doneWithHomework = () => {
  console.log("Look Mom/Dad I'm done with my homework!");
};

makeHomeWork('math', doneWithHomework);