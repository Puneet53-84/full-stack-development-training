document.addEventListener('DOMContentLoaded', function () {
    // DOM Elements
    const homePage = document.getElementById('home-page');
    const quizListingPage = document.getElementById('quiz-listing-page');
    const quizCreationPage = document.getElementById('quiz-creation-page');
    const quizTakingPage = document.getElementById('quiz-taking-page');
    const quizResultsPage = document.getElementById('quiz-results-page');

    // Navigation buttons
    const homeLink = document.getElementById('home-link');
    const browseLink = document.getElementById('browse-link');
    const createLink = document.getElementById('create-link');
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const createQuizBtn = document.getElementById('create-quiz-btn');
    const cancelQuizBtn = document.getElementById('cancel-quiz-btn');
    const saveQuizBtn = document.getElementById('save-quiz-btn');
    const browseMoreBtn = document.getElementById('browse-more-btn');

    // Auth elements
    const authBtn = document.getElementById('auth-btn');
    const authModal = document.getElementById('auth-modal');
    const closeAuthModal = document.getElementById('close-auth-modal');
    const loginTab = document.getElementById('login-tab');
    const registerTab = document.getElementById('register-tab');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const switchToRegister = document.getElementById('switch-to-register');
    const switchToLogin = document.getElementById('switch-to-login');
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');

    // Quiz creation elements
    const questionsContainer = document.getElementById('questions-container');
    const addQuestionBtn = document.getElementById('add-question-btn');
    const categorySelectBtns = document.querySelectorAll('.category-select-btn');
    const quizCategoryInput = document.getElementById('quiz-category');

    // Quiz taking elements
    const prevQuestionBtn = document.getElementById('prev-question-btn');
    const nextQuestionBtn = document.getElementById('next-question-btn');
    const submitQuizBtn = document.getElementById('submit-quiz-btn');
    const progressFill = document.getElementById('progress-fill');

    // Quiz results elements
    const retakeQuizBtn = document.getElementById('retake-quiz-btn');
    const downloadResultsBtn = document.getElementById('download-results-btn');

    // Mobile menu
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    // State variables
    let currentPage = 'home';
    let currentUser = null;
    let quizzes = [];
    let currentQuiz = null;
    let currentQuestionIndex = 0;
    let userAnswers = [];
    let quizStartTime = null;

    // Sample data for demonstration
    const sampleQuizzes = [
        {
            id: 1,
            title: "General Knowledge Challenge",
            description: "Test your knowledge on various topics with this fun quiz!",
            category: "General",
            creator: "QuizMaster",
            questions: [
                {
                    question: "What is the capital of France?",
                    options: ["London", "Berlin", "Paris", "Madrid"],
                    correctAnswer: 2
                },
                {
                    question: "Which planet is known as the Red Planet?",
                    options: ["Venus", "Mars", "Jupiter", "Saturn"],
                    correctAnswer: 1
                },
                {
                    question: "Who painted the Mona Lisa?",
                    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
                    correctAnswer: 2
                }
            ]
        },
        {
            id: 2,
            title: "Science Trivia",
            description: "How much do you know about science? Take this quiz to find out!",
            category: "Science",
            creator: "ScienceFan",
            questions: [
                {
                    question: "What is the chemical symbol for gold?",
                    options: ["Go", "Gd", "Au", "Ag"],
                    correctAnswer: 2
                },
                {
                    question: "What is the hardest natural substance on Earth?",
                    options: ["Gold", "Iron", "Diamond", "Quartz"],
                    correctAnswer: 2
                },
                {
                    question: "Which gas do plants absorb from the atmosphere?",
                    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
                    correctAnswer: 2
                }
            ]
        },
        {
            id: 3,
            title: "Movie Buff Quiz",
            description: "Are you a true movie expert? Prove it with this quiz!",
            category: "Movies",
            creator: "FilmCritic",
            questions: [
                {
                    question: "Who directed the movie 'Inception'?",
                    options: ["Steven Spielberg", "Christopher Nolan", "James Cameron", "Quentin Tarantino"],
                    correctAnswer: 1
                },
                {
                    question: "Which movie won the Academy Award for Best Picture in 2020?",
                    options: ["Parasite", "1917", "Joker", "The Irishman"],
                    correctAnswer: 0
                },
                {
                    question: "Who played the role of Tony Stark in the Marvel Cinematic Universe?",
                    options: ["Chris Evans", "Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"],
                    correctAnswer: 1
                }
            ]
        }
    ];

    // Initialize the app
    function init() {
        quizzes = sampleQuizzes;
        renderFeaturedQuizzes();
        setupEventListeners();
    }

    // Set up event listeners
    function setupEventListeners() {
        // Navigation
        homeLink.addEventListener('click', () => showPage('home'));
        browseLink.addEventListener('click', () => showPage('browse'));
        createLink.addEventListener('click', () => showPage('create'));
        startQuizBtn.addEventListener('click', () => showPage('browse'));
        createQuizBtn.addEventListener('click', () => showPage('create'));
        cancelQuizBtn.addEventListener('click', () => showPage('home'));
        saveQuizBtn.addEventListener('click', saveQuiz);
        browseMoreBtn.addEventListener('click', () => showPage('browse'));

        // Authentication
        authBtn.addEventListener('click', () => authModal.classList.remove('hidden'));
        closeAuthModal.addEventListener('click', () => authModal.classList.add('hidden'));
        loginTab.addEventListener('click', () => {
            loginTab.classList.add('text-purple-600', 'border-purple-600');
            loginTab
            registerTab.classList.remove('text-purple-600', 'border-purple-600');
            registerTab.classList.add('text-gray-500');
            loginForm.classList.remove('hidden');
            registerForm.classList.add('hidden');
        });
        registerTab.addEventListener('click', () => {
            registerTab.classList.add('text-purple-600', 'border-purple-600');
            loginTab.classList.remove('text-purple-600', 'border-purple-600');
            loginTab.classList.add('text-gray-500');
            registerForm.classList.remove('hidden');
            loginForm.classList.add('hidden');
        });
        switchToRegister.addEventListener('click', () => {
            loginTab.click();
            registerTab.click();
        });
        switchToLogin.addEventListener('click', () => loginTab.click());
        loginBtn.addEventListener('click', handleLogin);
        registerBtn.addEventListener('click', handleRegister);

        // Quiz creation
        addQuestionBtn.addEventListener('click', addQuestion);
        categorySelectBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                categorySelectBtns.forEach(b => b.classList.remove('bg-purple-100', 'text-purple-700'));
                btn.classList.add('bg-purple-100', 'text-purple-700');
                quizCategoryInput.value = btn.textContent;
            });
        });

        // Quiz taking
        prevQuestionBtn.addEventListener('click', showPreviousQuestion);
        nextQuestionBtn.addEventListener('click', showNextQuestion);
        submitQuizBtn.addEventListener('click', submitQuiz);

        // Quiz results
        retakeQuizBtn.addEventListener('click', retakeQuiz);
        downloadResultsBtn.addEventListener('click', downloadResults);

        // Mobile menu
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Show different pages
    function showPage(page) {
        currentPage = page;
        homePage.classList.add('hidden');
        quizListingPage.classList.add('hidden');
        quizCreationPage.classList.add('hidden');
        quizTakingPage.classList.add('hidden');
        quizResultsPage.classList.add('hidden');

        switch (page) {
            case 'home':
                homePage.classList.remove('hidden');
                break;
            case 'browse':
                quizListingPage.classList.remove('hidden');
                renderQuizListing();
                break;
            case 'create':
                quizCreationPage.classList.remove('hidden');
                resetQuizCreationForm();
                break;
            case 'take':
                quizTakingPage.classList.remove('hidden');
                break;
            case 'results':
                quizResultsPage.classList.remove('hidden');
                break;
        }
    }

    // Authentication functions
    function handleLogin() {
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        if (!email || !password) {
            alert('Please enter both email and password');
            return;
        }

        // In a real app, you would make an API call here
        currentUser = {
            name: "Demo User",
            email: email
        };

        authModal.classList.add('hidden');
        authBtn.textContent = currentUser.name;
        alert(`Welcome back, ${currentUser.name}!`);
    }

    function handleRegister() {
        const name = document.getElementById('register-name').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('register-confirm-password').value;

        if (!name || !email || !password || !confirmPassword) {
            alert('Please fill in all fields');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        // In a real app, you would make an API call here
        currentUser = {
            name: name,
            email: email
        };

        authModal.classList.add('hidden');
        authBtn.textContent = currentUser.name;
        alert(`Welcome to QuizMaster, ${currentUser.name}!`);
    }

    // Quiz creation functions
    function resetQuizCreationForm() {
        document.getElementById('quiz-title').value = '';
        document.getElementById('quiz-description').value = '';
        quizCategoryInput.value = '';
        questionsContainer.innerHTML = '';
        categorySelectBtns.forEach(btn => btn.classList.remove('bg-purple-100', 'text-purple-700'));
    }

    function addQuestion() {
        const questionId = Date.now();
        const questionHtml = `
            <div class="question-card mb-6 p-4 border border-gray-200 rounded-lg" data-id="${questionId}">
                <div class="flex justify-between items-center mb-3">
                    <h3 class="font-medium text-gray-700">Question</h3>
                    <button class="delete-question-btn text-red-500 hover:text-red-700">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
                <div class="mb-4">
                    <input type="text" class="question-input w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Enter question">
                </div>
                <div class="options-container mb-2">
                    <div class="option-item mb-2 flex items-center">
                        <input type="radio" name="correct-${questionId}" class="correct-option mr-2" checked>
                        <input type="text" class="option-input w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Option 1">
                    </div>
                    <div class="option-item mb-2 flex items-center">
                        <input type="radio" name="correct-${questionId}" class="correct-option mr-2">
                        <input type="text" class="option-input w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Option 2">
                    </div>
                </div>
                <button class="add-option-btn px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded text-sm">
                    <i class="fas fa-plus mr-1"></i>Add Option
                </button>
            </div>
        `;

        questionsContainer.insertAdjacentHTML('beforeend', questionHtml);

        // Add event listeners to the new question
        const questionCard = questionsContainer.querySelector(`[data-id="${questionId}"]`);
        const addOptionBtn = questionCard.querySelector('.add-option-btn');
        const deleteQuestionBtn = questionCard.querySelector('.delete-question-btn');

        addOptionBtn.addEventListener('click', () => addOption(questionId));
        deleteQuestionBtn.addEventListener('click', () => questionCard.remove());
    }

    function addOption(questionId) {
        const questionCard = questionsContainer.querySelector(`[data-id="${questionId}"]`);
        const optionsContainer = questionCard.querySelector('.options-container');
        const optionCount = optionsContainer.querySelectorAll('.option-item').length + 1;

        const optionHtml = `
            <div class="option-item mb-2 flex items-center">
                <input type="radio" name="correct-${questionId}" class="correct-option mr-2">
                <input type="text" class="option-input w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Option ${optionCount}">
            </div>
        `;

        optionsContainer.insertAdjacentHTML('beforeend', optionHtml);
    }

    function saveQuiz() {
        const title = document.getElementById('quiz-title').value;
        const description = document.getElementById('quiz-description').value;
        const category = quizCategoryInput.value;

        if (!title || !description || !category) {
            alert('Please fill in all quiz details');
            return;
        }

        const questionCards = questionsContainer.querySelectorAll('.question-card');
        if (questionCards.length === 0) {
            alert('Please add at least one question');
            return;
        }

        const questions = [];
        questionCards.forEach(card => {
            const questionInput = card.querySelector('.question-input').value;
            const optionInputs = card.querySelectorAll('.option-input');
            const correctOptionIndex = Array.from(card.querySelectorAll('.correct-option')).findIndex(radio => radio.checked);

            if (!questionInput) {
                alert('Please fill in all question texts');
                return;
            }

            const options = [];
            optionInputs.forEach(input => {
                if (!input.value) {
                    alert('Please fill in all option texts');
                    return;
                }
                options.push(input.value);
            });

            if (options.length < 2) {
                alert('Each question must have at least 2 options');
                return;
            }

            questions.push({
                question: questionInput,
                options: options,
                correctAnswer: correctOptionIndex
            });
        });

        // In a real app, you would save to a database
        const newQuiz = {
            id: quizzes.length + 1,
            title: title,
            description: description,
            category: category,
            creator: currentUser ? currentUser.name : 'Anonymous',
            questions: questions
        };

        quizzes.push(newQuiz);
        alert('Quiz saved successfully!');
        showPage('home');
    }

    // Quiz listing functions
    function renderFeaturedQuizzes() {
        const featuredContainer = homePage.querySelector('.grid-cols-1');
        featuredContainer.innerHTML = '';

        quizzes.slice(0, 3).forEach(quiz => {
            const quizHtml = `
                <div class="quiz-card rounded-lg overflow-hidden shadow-md">
                    <div class="p-6">
                        <div class="flex justify-between items-start mb-2">
                            <h3 class="text-xl font-bold text-gray-800">${quiz.title}</h3>
                            <span class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">${quiz.category}</span>
                        </div>
                        <p class="text-gray-600 mb-4">${quiz.description}</p>
                        <div class="flex justify-between items-center">
                            <span class="text-sm text-gray-500">By ${quiz.creator}</span>
                            <button class="take-quiz-btn px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm transition duration-300" data-id="${quiz.id}">
                                Take Quiz
                            </button>
                        </div>
                    </div>
                </div>
            `;
            featuredContainer.insertAdjacentHTML('beforeend', quizHtml);
        });

        // Add event listeners to take quiz buttons
        document.querySelectorAll('.take-quiz-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                const quizId = parseInt(this.getAttribute('data-id'));
                startQuiz(quizId);
            });
        });
    }

    function renderQuizListing() {
        const listingContainer = quizListingPage.querySelector('.grid-cols-1');
        listingContainer.innerHTML = '';

        quizzes.forEach(quiz => {
            const quizHtml = `
                <div class="quiz-card rounded-lg overflow-hidden shadow-md">
                    <div class="p-6">
                        <div class="flex justify-between items-start mb-2">
                            <h3 class="text-xl font-bold text-gray-800">${quiz.title}</h3>
                            <span class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">${quiz.category}</span>
                        </div>
                        <p class="text-gray-600 mb-4">${quiz.description}</p>
                        <div class="flex justify-between items-center">
                            <span class="text-sm text-gray-500">${quiz.questions.length} questions • By ${quiz.creator}</span>
                            <button class="take-quiz-btn px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm transition duration-300" data-id="${quiz.id}">
                                Take Quiz
                            </button>
                        </div>
                    </div>
                </div>
            `;
            listingContainer.insertAdjacentHTML('beforeend', quizHtml);
        });

        // Add event listeners to take quiz buttons
        document.querySelectorAll('.take-quiz-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                const quizId = parseInt(this.getAttribute('data-id'));
                startQuiz(quizId);
            });
        });
    }

    // Quiz taking functions
    function startQuiz(quizId) {
        currentQuiz = quizzes.find(q => q.id === quizId);
        if (!currentQuiz) return;

        currentQuestionIndex = 0;
        userAnswers = Array(currentQuiz.questions.length).fill(null);
        quizStartTime = new Date();

        document.getElementById('quiz-taking-title').textContent = currentQuiz.title;
        document.getElementById('quiz-taking-description').textContent = currentQuiz.description;
        document.getElementById('total-questions').textContent = currentQuiz.questions.length;

        showPage('take');
        showCurrentQuestion();
        updateProgressBar();
    }

    function showCurrentQuestion() {
        const questionContainer = document.getElementById('question-container');
        const currentQuestion = currentQuiz.questions[currentQuestionIndex];

        document.getElementById('current-question-num').textContent = currentQuestionIndex + 1;

        let optionsHtml = '';
        currentQuestion.options.forEach((option, index) => {
            const isChecked = userAnswers[currentQuestionIndex] === index ? 'checked' : '';
            optionsHtml += `
                <div class="option-card mb-3 p-4 border ${userAnswers[currentQuestionIndex] === index ? 'border-purple-500 bg-purple-50' : 'border-gray-200'} rounded-lg cursor-pointer">
                    <label class="flex items-center cursor-pointer">
                        <input type="radio" name="quiz-answer" value="${index}" class="mr-3" ${isChecked}>
                        <span>${option}</span>
                    </label>
                </div>
            `;
        });

        questionContainer.innerHTML = `
            <div class="mb-6">
                <h3 class="text-xl font-semibold text-gray-800">${currentQuestion.question}</h3>
            </div>
            <div class="options-container">
                ${optionsHtml}
            </div>
        `;

        // Add event listeners to option cards
        document.querySelectorAll('.option-card').forEach(card => {
            card.addEventListener('click', function () {
                const radio = this.querySelector('input[type="radio"]');
                radio.checked = true;

                // Update visual state
                document.querySelectorAll('.option-card').forEach(c => {
                    c.classList.remove('border-purple-500', 'bg-purple-50');
                });
                this.classList.add('border-purple-500', 'bg-purple-50');

                // Save answer
                userAnswers[currentQuestionIndex] = parseInt(radio.value);
            });
        });

        // Update navigation buttons
        prevQuestionBtn.classList.toggle('hidden', currentQuestionIndex === 0);
        nextQuestionBtn.classList.toggle('hidden', currentQuestionIndex === currentQuiz.questions.length - 1);
        submitQuizBtn.classList.toggle('hidden', currentQuestionIndex !== currentQuiz.questions.length - 1);
    }

    function showPreviousQuestion() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            showCurrentQuestion();
            updateProgressBar();
        }
    }

    function showNextQuestion() {
        if (currentQuestionIndex < currentQuiz.questions.length - 1) {
            currentQuestionIndex++;
            showCurrentQuestion();
            updateProgressBar();
        }
    }

    function updateProgressBar() {
        const progress = ((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100;
        progressFill.style.width = `${progress}%`;
    }

    function submitQuiz() {
        // Check if all questions are answered
        if (userAnswers.some(answer => answer === null)) {
            alert('Please answer all questions before submitting');
            return;
        }

        // Calculate score
        let correctCount = 0;
        currentQuiz.questions.forEach((question, index) => {
            if (userAnswers[index] === question.correctAnswer) {
                correctCount++;
            }
        });

        const scorePercent = Math.round((correctCount / currentQuiz.questions.length) * 100);
        const timeTaken = Math.floor((new Date() - quizStartTime) / 1000);
        const minutes = Math.floor(timeTaken / 60);
        const seconds = timeTaken % 60;
        const timeString = `${minutes}:${seconds.toString().padStart(2, '0')}`;

        // Determine performance level
        let performance;
        if (scorePercent >= 90) performance = "Excellent!";
        else if (scorePercent >= 70) performance = "Good";
        else if (scorePercent >= 50) performance = "Average";
        else performance = "Needs Improvement";

        // Display results
        document.getElementById('quiz-results-title').innerHTML = `You completed: <span class="font-semibold">${currentQuiz.title}</span>`;
        document.getElementById('score-percent').textContent = `${scorePercent}%`;
        document.getElementById('correct-answers').textContent = correctCount;
        document.getElementById('total-questions-result').textContent = currentQuiz.questions.length;
        document.getElementById('time-taken').textContent = timeString;
        document.getElementById('performance').textContent = performance;

        // Animate score circle
        const circle = document.getElementById('score-circle');
        const circumference = 2 * Math.PI * 40;
        const offset = circumference - (scorePercent / 100) * circumference;
        circle.style.strokeDashoffset = offset;

        // Display question review
        const questionsReview = document.getElementById('questions-review');
        questionsReview.innerHTML = '';

        currentQuiz.questions.forEach((question, index) => {
            const isCorrect = userAnswers[index] === question.correctAnswer;
            const userAnswer = question.options[userAnswers[index]];
            const correctAnswer = question.options[question.correctAnswer];

            const questionHtml = `
                <div class="mb-6 p-4 border ${isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'} rounded-lg">
                    <div class="flex justify-between items-start mb-2">
                        <h4 class="font-medium">Question ${index + 1}: ${question.question}</h4>
                        <span class="text-sm ${isCorrect ? 'text-green-600' : 'text-red-600'}">
                            ${isCorrect ? '✓ Correct' : '✗ Incorrect'}
                        </span>
                    </div>
                    ${!isCorrect ? `
                        <div class="mb-2">
                            <span class="text-sm text-gray-600">Your answer:</span>
                            <div class="text-red-600">${userAnswer}</div>
                        </div>
                    ` : ''}
                    <div>
                        <span class="text-sm text-gray-600">Correct answer:</span>
                        <div class="text-green-600">${correctAnswer}</div>
                    </div>
                </div>
            `;

            questionsReview.insertAdjacentHTML('beforeend', questionHtml);
        });

        showPage('results');
    }

    function retakeQuiz() {
        startQuiz(currentQuiz.id);
    }

    function downloadResults() {
        // In a real app, you would generate a PDF or text file
        alert('Results downloaded (simulated)');
    }

    // Initialize the app
    init();
});