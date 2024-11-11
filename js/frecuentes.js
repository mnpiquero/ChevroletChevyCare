document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const toggle = question.querySelector('.toggle');

        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            
        } else {
            answer.style.display = 'block';
            toggle.textContent = '-';
        }
    });
});