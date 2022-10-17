// Challenge 02

let students = [
  {
    name: "Maria",
    gradeExam_1: 6.5,
    gradeExam_2: 8,
  },

  {
    name: "José",
    gradeExam_1: 5.8,
    gradeExam_2: 7.2,
  },

  {
    name: "Aparecida",
    gradeExam_1: 4.8,
    gradeExam_2: 8.4,
  },

  {
    name: "Ivan",
    gradeExam_1: 10,
    gradeExam_2: 3.7,
  },

  {
    name: "Cláudia",
    gradeExam_1: 6.6,
    gradeExam_2: 10,
  },

  {
    name: "Robert",
    gradeExam_1: 10,
    gradeExam_2: 9,
  },
];

function average(gradeExam_1, gradeExam_2) {
  return (gradeExam_1 + gradeExam_2) / 2;
}

let message = "";

for (let student of students) {
  message = `A média do(a) aluno(a) ${student.name} é: ${average(
    student.gradeExam_1,
    student.gradeExam_2
  )}.\n`;
  if (average(student.gradeExam_1, student.gradeExam_2) < 7) {
    message += `Não foi dessa vez, ${student.name}. Tente novamente!`;
  } else {
    message += `Parabéns, ${student.name}. Você foi aprovado(a) no concurso!`;
  }
  alert(message);
}
