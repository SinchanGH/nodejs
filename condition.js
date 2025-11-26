/* Types of conditions:-
if
if else
if else if
switch */

/* function isEligible(value) {
  if (value >= 18) {
    console.log("Eligible to vote");
  } else {
    console.log("NOt eligile to vote");
  }
}
isEligible(18); */

/* function Company(type) {
  if (type == "Tier1") {
    console.log("I will get a package of 10 Lpa");
  } else if (type == "Tier2") {
    console.log("I will get a package of 7 Lpa");
  } else if (type == "Tier3") {
    console.log("I will get a package of 5 Lpa");
  } else {
    console.log("No JOB...!");
  }
}
Company("Tier3"); */

let type = "tier3";
switch (type) {
  case "tier1":
    console.log("I will get a package of 10 Lpa");
    break;
  case "tier2":
    console.log("I will get a package of 7 Lpa");
    break;
  case "tier3":
    console.log("I will get a package of 5 Lpa");
    break;
  default:
    console.log("No Job");
}
