let CoursAnglaisEcts = 15;
let CoursProgrammationEcts = 25;
let CoursInitPcEcts = 20;
let matriculeEtudiant = "veuillez inserez votre matricule étudiant"
let coursAnglaisEcts = "veuillez inserez votre cote d'anglais"
let coursProgrammationEcts = "veuillez inserez votre cote de programmation"
let coursInitPcEcts = "veuillez inserez votre cote de initiation Pc"

let matricule = prompt(matriculeEtudiant)
let coteA = +prompt(coursAnglaisEcts)
let coteB = +prompt(coursProgrammationEcts)
let coteC = +prompt(coursInitPcEcts)

let coteD = coteA + coteB + coteC

let message = "La moyenne vaut " + coteD / 4 + "%"

console.log(message)
