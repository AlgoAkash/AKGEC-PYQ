const questionList = document.querySelector('.question-list');
const semesterSelect = document.getElementById('semester');
const quoteElement = document.getElementById('quote');

const questions = {
    1: [
        { title: 'Electronics ST1', link: 'Electronics st1.pdf' },
        { title: 'Chemistry ST1', link: 'Chemistry st1.pdf' },
        { title: 'Maths ST1', link: 'Maths st1.pdf' },
        { title: 'Mechanical ST1', link: 'Mechanical st1.pdf' },
        { title: 'Softskills ST1', link: 'Softskills st1.pdf' }
    ],
    // 2: [
    //     { title: 'Mathematics II', link: 'path/to/mathematics2.pdf' },
    //     { title: 'Chemistry', link: 'path/to/chemistry.pdf' }
    // ],
    // Add other semesters
};

const quotes = [
    "The future belongs to those who prepare for it today.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Education is the most powerful weapon which you can use to change the world.",
    "Don’t watch the clock; do what it does. Keep going."
];

function renderQuestions(semester) {
    questionList.innerHTML = '';
    if (questions[semester]) {
        questions[semester].forEach(q => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${q.title}</span>
                <button class="download-button" onclick="location.href='${q.link}'">Download</button>
            `;
            questionList.appendChild(li);
        });
    } else {
        questionList.innerHTML = '<p>No question papers available for this semester.</p>';
    }
}

function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
}

semesterSelect.addEventListener('change', (e) => {
    renderQuestions(e.target.value);
});

// Initial render
renderQuestions(semesterSelect.value);
showRandomQuote();

// Update quote every 10 seconds
setInterval(showRandomQuote, 10000);