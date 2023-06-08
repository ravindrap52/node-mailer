import inquirer from "inquirer";

inquirer
  .prompt([
    {
      name: "stock",
      message: "Enter the stock symbol",
    },
    {
      name: "startDate",
      message: "Enter Start Date",
    },
    {
      name: "endDate",
      message: "Enter End Date",
    },
  ])
  .then(async (answers) => {
    console.info("Answers:", answers);
    if(!answers.stock) {
        throw new Error('stock symbol should not be empty')
    }
  });
