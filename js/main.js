// general functions
function startTimer(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function countdown() {
        diff = duration - (((Date.now() - start) / 1000) | 0);
        // does the same job as parseInt truncates the float
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text( minutes + ":" + seconds);

        if (diff <= 0) 
        {
            clearInterval(interval);
            $('.container').empty();
            $('.container').append("<div class='end_of_game'>The end</div>");
            $('.end_of_game').append("<div>number of Correct answers - " + count_right_answers +"</div>");

        }
    }

    interval = setInterval(countdown, 1000);
    return interval;
}

// [min, max)
function rnd(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) 
    {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [ array[randomIndex], array[currentIndex]];
    }

    return array;
}
function set_to_storage(cur)
{
    if(cur > localStorage.getItem('max_level'))
        localStorage.setItem('max_level', cur);
}
// globals
var config = {
    DURATION: 30,
    TIMER: 5,
    ALPHABET: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    LEVELS: [
        { id: 1, label: 'Lvl 1', range: [1, 3] },
        { id: 2, label: 'Lvl 2', range: [1, 3] },
        { id: 3, label: 'Lvl 3', range: [1, 3] },
        { id: 4, label: 'Lvl 4', range: [2, 4] },
        { id: 5, label: 'Lvl 5', range: [2, 4] },
        { id: 6, label: 'Lvl 6', range: [2, 4] },
        { id: 7, label: 'Lvl 7', range: [3, 5] },
        { id: 8, label: 'Lvl 8', range: [3, 5] },
        { id: 9, label: 'Lvl 9', range: [3, 5] },
        { id: 10, label: 'Lvl 10', range: [3, 5] },
        { id: 11, label: 'Lvl 11', range: [3, 5] },
        { id: 12, label: 'Lvl 12', range: [4, 6] },
        { id: 13, label: 'Lvl 13', range: [4, 6] },
        { id: 14, label: 'Lvl 14', range: [4, 6] },
        { id: 15, label: 'Lvl 15', range: [4, 6] },
        { id: 16, label: 'Lvl 16', range: [4, 6] },
        { id: 17, label: 'Lvl 17', range: [5, 7] },
        { id: 18, label: 'Lvl 18', range: [5, 7] },
        { id: 19, label: 'Lvl 19', range: [5, 7] },
        { id: 20, label: 'Lvl 20', range: [5, 7] },
    ]
}

const MAX_SIZE = config.ALPHABET.length;
const MAX_LEVEL = config.LEVELS.length;
var right_answer;
var count_right_answers = 0;
var cur_level_index = 0;
var myTimer;
var display = $('#time');


//  custom functions
function get_question(cur_level_index) {
    if (cur_level_index > MAX_LEVEL - 1) 
        return 0;

    var letter_index = rnd(0, MAX_SIZE);
    var number = rnd(config.LEVELS[cur_level_index].range[0], config.LEVELS[cur_level_index].range[1]);

    return [letter_index, number]
}

function check_answer(input, right) {
    return input == right;
}


function ask_question(cur_level_index) {
    var question = get_question(cur_level_index);
    if (!question) return 0;
    $('#question').text(config.ALPHABET[question[0]] + " + " + question[1]);
    var answer_index = question[0] + question[1] + 1;
    if (answer_index >= MAX_SIZE)
        answer_index = question[1] - (MAX_SIZE - question[0]) + 1;

    right_answer = config.ALPHABET[answer_index];
    // TODO can be 2 same answers
    var answers = shuffle([config.ALPHABET[rnd(0, MAX_SIZE)], config.ALPHABET[rnd(0, MAX_SIZE)], config.ALPHABET[rnd(0, MAX_SIZE)], right_answer]);
    for (i = 0; i < 4; ++i) {
        $('#option' + i).text(answers[i]);
    }

    // console.log(question);
    console.log(right_answer);
}


// main
window.onload = function () {
    if($("#highestscore").length)
        $('#highestscore').text(localStorage.getItem('max_level'));

        
    myTimer = startTimer(config.DURATION, display);
    ask_question(cur_level_index);

};

$("#option0, #option1, #option2, #option3").on("click ", function () {
    if (cur_level_index + 1 == MAX_LEVEL) {
        $('.container').empty();
        $('.container').append("<div class='end_of_game'>YOU WIN</div>");
        $('.end_of_game').append("<div>number of Correct answers - " + count_right_answers +"</div>");
        clearInterval(myTimer);
    }
    if (check_answer($(this).text(), right_answer)) {
        ++count_right_answers;
        ++cur_level_index;
        set_to_storage(cur_level_index+1);
        $('#current_level').text(cur_level_index + 1);
        clearInterval(myTimer);
        var cur_secs = ( new Date('1995-12-17T00:'+ display.text()).getMinutes() * 60 + new Date('1995-12-17T00:'+ display.text()).getSeconds() | 0 ) + 5;
        myTimer = startTimer( cur_secs, display)
    }
    else{
        clearInterval(myTimer);
        var cur_secs = ( new Date('1995-12-17T00:'+ display.text()).getMinutes() * 60 + new Date('1995-12-17T00:'+ display.text()).getSeconds() | 0 ) - 5;
        myTimer = startTimer( cur_secs, display)
    }
    ask_question(cur_level_index);
});