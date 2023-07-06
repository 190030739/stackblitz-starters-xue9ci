const testCase1 = [
  {
    name: "Leo Messi",
    dob: "31-12-1995",
    biology: 95,
    chemistry: 91,
  },
  {
    name: "Cristiano Ronaldo",
    dob: "31-05-1992",
    biology: 90,
    chemistry: 81,
  },
  {
    name: "Virat Kohli",
    dob: "31-12-1995",
    biology: 95,
    chemistry: 96,
  },
  {
    name: "Rohit Sharma",
    dob: "31-12-1995",
    biology: 85,
    chemistry: 86,
  },
  {
    name: "Viswanathan Anand",
    dob: "12-12-1994",
    biology: 99,
    chemistry: 10,
  },
];

function compareStudents(studentA, studentB) {
  if (studentA.biology + studentA.chemistry > studentB.biology + studentB.chemistry) {
    return -1;
  } else if (studentA.biology + studentA.chemistry < studentB.biology + studentB.chemistry) {
    return 1;
  }

  if (studentA.biology > studentB.biology) {
    return -1;
  } else if (studentA.biology < studentB.biology) {
    return 1;
  }

  const dateA = new Date(studentA.dob.split("-").reverse().join("-"));
  const dateB = new Date(studentB.dob.split("-").reverse().join("-"));

  if (dateA > dateB) {
    return -1;
  } else if (dateA < dateB) {
    return 1;
  }

  return 0;
}

testCase1.sort(compareStudents);

console.log(testCase1.map(student => student.name));
