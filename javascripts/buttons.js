$(document).ready(function () {
    $('#question-2-answer').hide()
    $('#question-3-answer').hide()

    $('#question-2-button').click(function () {
        showQuestionTwo()
    })

    $('#question-3-button').click(function () {
        showQuestionThree()
    })

    $('#question-1-button').click(function () {
        showQuestionOne()
    })
})

function showQuestionTwo () {
  $('#question-1-answer').hide()
  $('#question-3-answer').hide()
  
  $('#question-2-answer').show()
}

function showQuestionThree () {
  $('#question-1-answer').hide()
  $('#question-2-answer').hide()

  $('#question-3-answer').show()
}

function showQuestionOne () {
  $('#question-2-answer').hide()
  $('#question-3-answer').hide()

  $('#question-1-answer').show()
}
