console.log("Soal Score");
newFunction = (subject, point, email) => {
    subject
    point
    email
    return {
        average() {
            average = [...point]
            return console.log(this.average)
        }
    }
}
newFunction("a", [1, 2, 3], "test@tes.com").average();







console.log("Soal View Score");
viewScore = () => {
    this.input = input;
    if (input.data[0][1]) {
        return input.data[1][1] + input.subject;

    }
    if (input.data[0][2]) {

    }
    if (input.data[0][2]) {

    }


}

var input {
    data: [
        ["email", "quiz-1", "quiz-2", "quiz-3"],
        ["abduh@mail.com", 78, 89, 90],
        ["khairun@mail.com", 95, 85, 88]
    ]

        subject: "quiz-1"
}











console.log("Soal Recap Score");
var input = [
    ["abduh@mail.com", 85.7],
    ["khairun@mail.com", 89.3],
    ["bondra@mail.com", 74.3],
    ["regi@mail.com", 91],

]


recapScores = (input) => {
    for (var i = 0; i < input.length; i++) {
        console.log((i + 1) + ". Email " + "\t\t:" + input[i][0]);
        console.log("Rata-rata " + "\t:" + input[i][1]);
        if (input[i][1] > 70.0 && input[i][1] < 80.0) {
            console.log("Predikat " + "\t\t:Participant");
        } else if (input[i][1] > 80.0 && input[i][1] < 90.0) {
            console.log("Predikat " + "\t\t:Graduate");
        } else if (input[i][1] > 90.0 && input[i][1] < 100.0) {
            console.log("Predikat " + "\t\t:Honour");
        }
        console.log();
    }
}

recapScores(input);