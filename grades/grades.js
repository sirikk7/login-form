function getGrade() {
  let marks = document.getElementById("marks").value;
  let total = document.getElementById("total-marks").value;

  const percentage = (marks / total) * 100;
  let grade;

  if (percentage >= 75) {
    grade = "A";
  } else if (percentage >= 60) {
    grade = "B";
  } else if (percentage >= 50) {
    grade = "C";
  } else if (percentage >= 38) {
    grade = "D";
  } else {
    grade = "FAIL 😭";
  }
  document.getElementById("percent").innerHTML = percentage;
  document.getElementById("grade").innerHTML = grade;
  const elements = document.querySelectorAll(".marks-box");

  for (let element of elements) {
    element.style.display = "block";
  }
  return false;
}
