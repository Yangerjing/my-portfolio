const quizText1 = document.getElementById("quiz-text1")
const quizText2 = document.getElementById("quiz-text2")
const quizText3 = document.getElementById("quiz-text3")

const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const choice4 = document.getElementById("choice-4")
const choice5 = document.getElementById("choice-5")
const choice6 = document.getElementById("choice-6")
const choice7 = document.getElementById("choice-7")
const choice8 = document.getElementById("choice-8")
const choice9 = document.getElementById("choice-9")

const feedback1 = document.getElementById("feedback1")
const feedback2 = document.getElementById("feedback2")
const feedback3 = document.getElementById("feedback3")

const quiz1 = {
    text: "私の出身地はどこでしょう？",
    choices: [
        {
        text: "東京",
        feedback: "残念！少しだけ住んでいたけど…"
    },
    {
        text: "横浜",
        feedback: "正解！みなとみらいが近所です！"
    },
    {
        text: "大阪",
        feedback: "残念！一回も行ったことがありません！！"
    }
    ]
}

const reloadQuiz1 = function(){
    quizText1.textContent = "Q1" + quiz1.text
    choice1.textContent = quiz1.choices[0].text
    choice2.textContent = quiz1.choices[1].text
    choice3.textContent = quiz1.choices[2].text
}

const choose1 = function(choiceNumber){
    feedback1.textContent = quiz1.choices[choiceNumber].feedback
}

choice1.onclick = function(){
    choose1(0)
}
choice2.onclick = function(){
    choose1(1)
}
choice3.onclick = function(){
    choose1(2)
}

reloadQuiz1()


const quiz2 = {
    text: "私の好きなサッカーチームは何でしょう？？",
    choices: [
        {
        text: "バルセロナ",
        feedback: "残念！昔は好きだったな…"
    },
    {
        text: "バイエルンミュンヘン",
        feedback: "残念！でもレバンドフスキ選手は大好きです！"
    },
    {
        text: "マンチェスターシティ",
        feedback: "正解！グアルディオラ監督のサッカーが楽しい！"
    }
    ]
}

const reloadQuiz2 = function(){
    quizText2.textContent = "Q2" + quiz2.text
    choice4.textContent = quiz2.choices[0].text
    choice5.textContent = quiz2.choices[1].text
    choice6.textContent = quiz2.choices[2].text
}

const choose2 = function(choiceNumber){
    feedback2.textContent = quiz2.choices[choiceNumber].feedback
}

choice4.onclick = function(){
    choose2(0)
}
choice5.onclick = function(){
    choose2(1)
}
choice6.onclick = function(){
    choose2(2)
}

reloadQuiz2()


const quiz3 = {
    text: "私のバイト先はどこでしょう？？",
    choices: [
        {
        text: "スターバックス",
        feedback: "残念！ドトール派です！！"
    },
    {
        text: "ガソリンスタンド",
        feedback: "残念！似合ってるって言われます！"
    },
    {
        text: "ブライダル",
        feedback: "正解！最近は婚礼増えていて大変です！でも楽しい！"
    }
    ]
}

const reloadQuiz3 = function(){
    quizText3.textContent = "Q3" + quiz3.text
    choice7.textContent = quiz3.choices[0].text
    choice8.textContent = quiz3.choices[1].text
    choice9.textContent = quiz3.choices[2].text
}

const choose3 = function(choiceNumber){
    feedback3.textContent = quiz3.choices[choiceNumber].feedback
}

choice7.onclick = function(){
    choose3(0)
}
choice8.onclick = function(){
    choose3(1)
}
choice9.onclick = function(){
    choose3(2)
}

reloadQuiz3()