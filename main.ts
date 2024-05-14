#! /usr/bin/env code
import inquirer from "inquirer"
import chalk from "chalk";

console.log(chalk.italic.bgRedBright("welcome to hooriya's student management"));


async function Course() {
  let payment = await inquirer.prompt({
    name: "payment",
    type: "list",
    message: chalk.bold.greenBright("Select your mode of payment."),
    choices: ["Bank account", "Mobile account", "Cash"],
  });
  if (payment.payment == "Bank account") {
    let bankName = await inquirer.prompt([
      {
        name: "bankName",
        type: "list",
        message: chalk.bold.greenBright("Select one of the bank."),
        choices: ["UBL", "HBL", "MEEZAN BANK", "NBP", "FAYSAL BANK"],
      },
      {
        name: "account no.",
        type: "input",
        message: chalk.bold.greenBright("Enter your Account no."),
      },
      {
        name: "amount",
        type: "list",
        message: chalk.bold.greenBright("Enter amount which you want to deposit"),
        choices: [
          "MS OFFICE: 2500/=",
          "WEB DEVELOPMENT: 10,000/=",
          "GRAPHIC DESIGNING: 5000/=",
          "E-COMMERCE: 15,000/=",
          "ARTIFICIAL INTELLIGENCE: 25,000/=",
          "WEB 3.0 & METAVERSE: 25000/="
        ]
      },
      {
        name: "pincode",
        type: "input",
        message: chalk.bold.greenBright("Kindly write transaction pin code. (pin code = 1234)"),
      },
    ]);
    if (bankName.amount !== 0) {
      console.log(chalk.bold.italic.blueBright("Sorry insufficient balance."));
    }
    if (bankName.pincode !== "1234") {
      console.log(chalk.bold.italic.blueBright("Kindly write valid pin code."));
    }
  } else if (payment.payment == "Mobile account") {
    let mobAcc = await inquirer.prompt([
      {
        name: "accountName",
        type: "list",
        message: chalk.bold.greenBright("Kindly select one of the account."),
        choices: ["Easypesa", "Jazzcash", "Omni"],
      },
      {
        name: "account no.",
        type: "input",
        message: chalk.bold.greenBright("Enter your Account no."),
      },
      {
        name: "amount",
        type: "input",
        message: chalk.bold.greenBright("Enter amount which you want to deposit."),
      },
      {
        name: "pincode",
        type: "input",
        message: chalk.bold.greenBright("Kindly write transaction pin code. (pin code = 1234)"),
      },
    ]);
    if (mobAcc.amount !== 0 && mobAcc.amount == Number) {
      console.log(chalk.bold.italic.blueBright("Sorry insufficient balance."));
    }
    if (mobAcc.pincode !== "1234") {
      console.log(chalk.bold.italic.blueBright("Kindly write valid pin code."));
    }
  } else {
    console.log(
      chalk.bold.italic.blueBright("Kindly submit cash on any physical branch or in our administrative office.")
    );
  }
  return payment;
}



let condition2 = true;
while (condition2 == true) {
  let courses = await inquirer.prompt({
    name: "selection",
    type: "list",
    message: chalk.bold.greenBright("Kindly select what you want."),
    choices: [
      "ALL COURSES",
      "ENROLL STUDENT",
      "EXAMS DETAILS",
      "FEE SUBMISSION",
      "EXIT",
    ],
  });
  if (courses.selection == "ALL COURSES") {
    let courseName = await inquirer.prompt({
      name: "selection",
      type: "list",
      message: chalk.bold.greenBright("Kindly select one of the course to view details."),
      choices: [
        "MS OFFICE",
        "WEB DEVELOPMENT",
        "GRAPHIC DESIGNING",
        "E-COMMERCE",
        "ARTIFICIAL INTELLIGENCE",
        "WEB 3.0 & METAVERSE",
      ],
    });
    if (courseName.selection == "MS OFFICE") {
      const course1 = {
        courseName: "MS Office",
        fee: "2500/=",
        timings: "9 to 12",
        duration: "3months",
        syllabus:
          "Computer Basics, MS Word, MS Excel, MS Powerpoint, Internet & Email",
      };
      console.log(course1);
    } else if (courseName.selection == "WEB DEVELOPMENT") {
      const course2 = {
        courseName: "Web Development",
        fee: "10,000/=",
        timings: "10 to 1",
        duration: "6months",
        syllabus:
          "HTML, CSS, Javascript, JQuery, Tailwind CSS, ReactJS, Mongo DB, Express JS, Python",
      };
      console.log(course2);
    } else if (courseName.selection == "GRAPHIC DESIGNING") {
      const course3 = {
        courseName: "Graphic Designing",
        fee: "5000/=",
        timing: "11 to 2",
        duration: "6months",
        syllabus:
          "Color theory, Adobe photoshop, video editing, different tools usage",
      };
      console.log(course3);
    } else if (courseName.selection == "E-COMMERCE") {
      const course4 = {
        courseName: "E-Commerce",
        fee: "15,000/=",
        timing: "2 to 5",
        duration: "8months",
        syllabus:
          "Facebook Marketing, Instagram Marketing, Amazon Business, Ebay, Daraz",
      };
      console.log(course4);
    } else if (courseName.selection == "ARTIFICIAL INTELLIGENCE") {
      const course5 = {
        courseName: "AI",
        fee: "25,000/=",
        timing: "3 to 6",
        duration: "12months",
        syllabus: "Probabilty of AI, Machine Learning, Apps development etc",
      };
      console.log(course5);
    } else {
      const course6 = {
        courseName: "WEB 3.0 & METAVERSE",
        fee: "25000/=",
        timing: "6 to 9",
        duration: "12months",
        syllabus:
          "Full stack web & app development, Advance level of deep learning etc",
      };
      console.log(course6);
    }
  } else if (courses.selection == "ENROLL STUDENT") {
    const input = await inquirer.prompt([
      { name: "name", type: "input", message: chalk.bold.greenBright("Enter your name.") },
      { name: "f.name", type: "input", message: chalk.bold.greenBright("Enter your father name.") },
      { name: "gender", type: "list", message: chalk.bold.greenBright("Enter your gender."), choices: ["Male", "Female"] },
      {
        name: "course",
        type: "list",
        message: chalk.bold.greenBright("Select course name in which you want to enroll."),
        choices: [
          "MS OFFICE",
          "WEB DEVELOPMENT",
          "GRAPHIC DESIGNING",
          "E-COMMERCE",
          "ARTIFICIAL INTELLIGENCE",
          "WEB 3.0 & METAVERSE",
        ],
      },
      {
        name: "feesPayment",
        type: "confirm",
        message: chalk.bold.greenBright("Do you want to pay fees now?"),
        default: true,
      },
    ]);
    console.log(
      chalk.bold.italic.blueBright(`Congratulations! You enrolled on ${input.course} successfully`)
    );
  if(input.feesPayment == true) {
    if (input.course == "MS OFFICE") {
      let course1 = await Course();
      console.log(course1);
    } else if (input.course == "WEB DEVELOPMENT") {
      let course2 = await Course();
      console.log(course2);
    } else if (input.course == "GRAPHIC DESIGNING") {
      let course3 = await Course();
      console.log(course3);
    } else if (input.course == "E-COMMERCE") {
      let course4 = await Course();
      console.log(course4);
    } else if (input.course == "ARTIFICIAL INTELLIGENCE") {
      let course5 = await Course();
      console.log(course5);
    } else if (input.course == "WEB 3.0 & METAVERSE") {
      let course3 = await Course();
      console.log(course3);
    }
  } else {
      console.log(chalk.bold.italic.blueBright("You can submit your fees later."));
    }
  } else if (courses.selection == "EXAMS DETAILS") {
    console.log(chalk.bold.italic.blueBright("Exams date not announced yet."));
  } else if (courses.selection == "FEE SUBMISSION") {
    const fees = await inquirer.prompt({
      name: "fee",
      type: "list",
      message: chalk.bold.greenBright("kindly select which fee you want to submit?"),
      choices: [
        "Admission fee",
        "Enrolment card fee",
        "Exams fee",
        "Admit card fee",
      ],
    });
    if (fees.fee == "Admission fee") {
      let fee1 = await Course();
      console.log(fee1);
    } else if (fees.fee == "Enrolment card fee") {
      let fee2 = await Course();
      console.log(fee2);
    } else if (fees.fee == "Exams fee") {
      let fee3 = await Course();
      console.log(fee3);
    } else if (fees.fee == "Admit card fee") {
      let fee4 = await Course();
      console.log(fee4);
    } else {
      console.log(chalk.bold.italic.blueBright("Kindly submit fee asap."));
    }
  }
  if (courses.selection === "EXIT") {
    condition2 = !condition2;
    console.log(chalk.bold.italic.bgRedBright("Good Luck"));
    
  }
}