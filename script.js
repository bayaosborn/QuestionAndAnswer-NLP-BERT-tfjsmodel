
function submitQuestion() {
  const question = document.getElementById('question').value
  const passage = document.getElementById('passage').value

  qna.load().then(model => {
    
    const answers = document.getElementById('answers');
    model.findAnswers(question, passage).then(result => {
      result.forEach(answer => {
        const ans = document.createElement('p');
        ans.textContent = answer.text;
        answers.appendChild(ans);
      });
    });

  });

}

submitQuestion()