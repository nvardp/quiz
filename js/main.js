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
    TIMER: 3,
    ALPHABET: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    LEVELS: [
        { id: 1, label: 'Lvl 1', range: [1, 3], roundTrip: false, negativeOffset: false },
        { id: 2, label: 'Lvl 2', range: [1, 3], roundTrip: false, negativeOffset: false },
        { id: 3, label: 'Lvl 3', range: [1, 3], roundTrip: false, negativeOffset: false },
        { id: 4, label: 'Lvl 4', range: [2, 4], roundTrip: false, negativeOffset: false },
        { id: 5, label: 'Lvl 5', range: [2, 4], roundTrip: false, negativeOffset: false },
        { id: 6, label: 'Lvl 6', range: [2, 4], roundTrip: false, negativeOffset: false },
        { id: 7, label: 'Lvl 7', range: [3, 5], roundTrip: true, negativeOffset: false },
        { id: 8, label: 'Lvl 8', range: [3, 5], roundTrip: true, negativeOffset: false },
        { id: 9, label: 'Lvl 9', range: [3, 5], roundTrip: true, negativeOffset: false },
        { id: 10, label: 'Lvl 10', range: [3, 5], roundTrip: true, negativeOffset: false },
        { id: 11, label: 'Lvl 11', range: [3, 5], roundTrip: true, negativeOffset: false },
        { id: 12, label: 'Lvl 12', range: [4, 6], roundTrip: true, negativeOffset: false },
        { id: 13, label: 'Lvl 13', range: [4, 6], roundTrip: true, negativeOffset: false },
        { id: 14, label: 'Lvl 14', range: [4, 6], roundTrip: true, negativeOffset: false },
        { id: 15, label: 'Lvl 15', range: [4, 6], roundTrip: true, negativeOffset: false },
        { id: 16, label: 'Lvl 16', range: [4, 6], roundTrip: true, negativeOffset: false },
        { id: 17, label: 'Lvl 17', range: [5, 7], roundTrip: true, negativeOffset: false },
        { id: 18, label: 'Lvl 18', range: [5, 7], roundTrip: true, negativeOffset: false },
        { id: 19, label: 'Lvl 19', range: [5, 7], roundTrip: true, negativeOffset: false },
        { id: 20, label: 'Lvl 20', range: [5, 7], roundTrip: true, negativeOffset: false },
        { id: 21, label: 'Lvl 21', range: [5, 7], roundTrip: true, negativeOffset: false },
        { id: 22, label: 'Lvl 22', range: [5, 7], roundTrip: true, negativeOffset: false },
        { id: 23, label: 'Lvl 23', range: [6, 8], roundTrip: true, negativeOffset: false },
        { id: 24, label: 'Lvl 24', range: [6, 8], roundTrip: true, negativeOffset: false },
        { id: 25, label: 'Lvl 25', range: [6, 8], roundTrip: true, negativeOffset: false },
        { id: 26, label: 'Lvl 26', range: [6, 8], roundTrip: true, negativeOffset: false },
        { id: 27, label: 'Lvl 27', range: [6, 8], roundTrip: true, negativeOffset: false },
        { id: 28, label: 'Lvl 28', range: [6, 8], roundTrip: true, negativeOffset: false },
        { id: 29, label: 'Lvl 29', range: [7, 9], roundTrip: false, negativeOffset: [1, 3] },
        { id: 30, label: 'Lvl 30', range: [7, 9], roundTrip: false, negativeOffset: [1, 3] },
        { id: 31, label: 'Lvl 31', range: [7, 9], roundTrip: false, negativeOffset: [1, 3] },
        { id: 32, label: 'Lvl 32', range: [7, 9], roundTrip: false, negativeOffset: [1, 3] },
        { id: 33, label: 'Lvl 33', range: [7, 9], roundTrip: false, negativeOffset: [1, 3] },
        { id: 34, label: 'Lvl 34', range: [7, 9], roundTrip: false, negativeOffset: [1, 3] },
        { id: 35, label: 'Lvl 35', range: [8, 10], roundTrip: false, negativeOffset: [3, 5] },
        { id: 36, label: 'Lvl 36', range: [8, 10], roundTrip: false, negativeOffset: [3, 5] },
        { id: 37, label: 'Lvl 37', range: [8, 10], roundTrip: false, negativeOffset: [3, 5] },
        { id: 38, label: 'Lvl 38', range: [8, 10], roundTrip: false, negativeOffset: [3, 5] },
        { id: 39, label: 'Lvl 39', range: [8, 10], roundTrip: false, negativeOffset: [3, 5] },
        { id: 40, label: 'Lvl 40', range: [8, 10], roundTrip: false, negativeOffset: [3, 5] },
        { id: 41, label: 'Lvl 41', range: [9, 11], roundTrip: true, negativeOffset: [5, 7] },
        { id: 42, label: 'Lvl 42', range: [9, 11], roundTrip: true, negativeOffset: [5, 7] },
        { id: 43, label: 'Lvl 43', range: [9, 11], roundTrip: true, negativeOffset: [5, 7] },
        { id: 44, label: 'Lvl 44', range: [9, 11], roundTrip: true, negativeOffset: [5, 7] },
        { id: 45, label: 'Lvl 45', range: [9, 11], roundTrip: true, negativeOffset: [5, 7] },
        { id: 46, label: 'Lvl 46', range: [9, 11], roundTrip: true, negativeOffset: [5, 7] },
        { id: 47, label: 'Lvl 47', range: [10, 12], roundTrip: true, negativeOffset: [7, 9] },
        { id: 48, label: 'Lvl 47', range: [10, 12], roundTrip: true, negativeOffset: [7, 9] },
        { id: 49, label: 'Lvl 47', range: [10, 12], roundTrip: true, negativeOffset: [7, 9] },
        { id: 50, label: 'Lvl 50', range: [10, 12], roundTrip: true, negativeOffset: [7, 9] },
        { id: 51, label: 'Lvl 51', range: [10, 12], roundTrip: true, negativeOffset: [7, 9] },
        { id: 52, label: 'Lvl 52', range: [10, 12], roundTrip: true, negativeOffset: [7, 9] },
        { id: 53, label: 'Lvl 53', range: [10, 12], roundTrip: true, negativeOffset: [7, 9] },
        { id: 54, label: 'Lvl 54', range: [10, 12], roundTrip: true, negativeOffset: [7, 9] },
        { id: 55, label: 'Lvl 55', range: [11, 13], roundTrip: true, negativeOffset: [9, 11] },
        { id: 56, label: 'Lvl 56', range: [11, 13], roundTrip: true, negativeOffset: [9, 11] },
        { id: 57, label: 'Lvl 57', range: [11, 13], roundTrip: true, negativeOffset: [9, 11] },
        { id: 58, label: 'Lvl 58', range: [11, 13], roundTrip: true, negativeOffset: [9, 11] },
        { id: 59, label: 'Lvl 59', range: [11, 13], roundTrip: true, negativeOffset: [9, 11] },
        { id: 60, label: 'Lvl 60', range: [11, 13], roundTrip: true, negativeOffset: [9, 11] },
        { id: 61, label: 'Lvl 61', range: [11, 13], roundTrip: true, negativeOffset: [9, 11] },
        { id: 62, label: 'Lvl 62', range: [11, 13], roundTrip: true, negativeOffset: [9, 11] },
        { id: 63, label: 'Lvl 63', range: [12, 14], roundTrip: true, negativeOffset: [11, 13] },
        { id: 64, label: 'Lvl 64', range: [12, 14], roundTrip: true, negativeOffset: [11, 13] },
        { id: 65, label: 'Lvl 65', range: [12, 14], roundTrip: true, negativeOffset: [11, 13] },
        { id: 66, label: 'Lvl 66', range: [12, 14], roundTrip: true, negativeOffset: [11, 13] },
        { id: 67, label: 'Lvl 67', range: [12, 14], roundTrip: true, negativeOffset: [11, 13] },
        { id: 68, label: 'Lvl 68', range: [12, 14], roundTrip: true, negativeOffset: [11, 13] },
        { id: 69, label: 'Lvl 69', range: [12, 14], roundTrip: true, negativeOffset: [11, 13] },
        { id: 70, label: 'Lvl 70', range: [12, 14], roundTrip: true, negativeOffset: [11, 13] },
    ]
}

const MAX_SIZE = config.ALPHABET.length;
const MAX_LEVEL = config.LEVELS.length;
var actions = ["+", "-"];

var right_answer;
var count_right_answers = 0;
var cur_level_index = 0;
var myTimer;
var display = $('#time');


//  custom functions
function get_question(cur_level_index) {
    if (cur_level_index > MAX_LEVEL - 1) 
        return 0;

    var max = MAX_SIZE; 
    var number = rnd(config.LEVELS[cur_level_index].range[0], config.LEVELS[cur_level_index].range[1]);
    
    if(config.LEVELS[cur_level_index].roundTrip == false)
        max = MAX_SIZE - config.LEVELS[cur_level_index].range[1]

    return [rnd(0, max), number] // letter_index, number
}

function check_answer(input, right) {
    return input == right;
}

function get_right_answer_index(action_index, question)
{
    var answer_index;
    if(actions[action_index] == "+")
    {
        answer_index = question[0] + question[1] + 1;
        if (answer_index >= MAX_SIZE)
            answer_index = question[1] - (MAX_SIZE - question[0]) + 1;
        return answer_index;
    }
    // case of "-"
    answer_index = question[0] - question[1] - 1;
    if (answer_index < 0)
        answer_index = MAX_SIZE - (question[0] - question[1]);
    return answer_index;

}

function ask_question(cur_level_index) {
    var question = get_question(cur_level_index);
    if (!question) return 0;

    action_index = 0;
    
    if(config.LEVELS[cur_level_index].negativeOffset)
    {
        action_index = rnd(0, 2);
        console.log(action_index);

    }

    $('#question').text(config.ALPHABET[question[0]] + actions[action_index] + question[1]);
    
    right_answer = config.ALPHABET[get_right_answer_index(action_index, question)];
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