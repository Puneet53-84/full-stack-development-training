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
                { question: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Brisbane"], correctAnswer: 2 },
                { question: "Which planet is closest to the Sun?", options: ["Venus", "Mercury", "Mars", "Earth"], correctAnswer: 1 },
                { question: "Who invented the telephone?", options: ["Thomas Edison", "Graham Bell", "Einstein", "Newton"], correctAnswer: 1 },
                { question: "How many continents are there?", options: ["5", "6", "7", "8"], correctAnswer: 2 },
                { question: "Which ocean is the largest?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], correctAnswer: 3 },
                { question: "When is Independence Day of India?", options: ["15th Aug", "26th Jan", "2nd Oct", "14th Nov"], correctAnswer: 0 },
                { question: "Which is the longest river?", options: ["Amazon", "Nile", "Ganga", "Yangtze"], correctAnswer: 1 },
                { question: "What currency is used in Japan?", options: ["Yen", "Won", "Ringgit", "Rupee"], correctAnswer: 0 },
                { question: "How many players in a cricket team?", options: ["10", "11", "12", "9"], correctAnswer: 1 },
                { question: "Largest desert in the world?", options: ["Gobi", "Sahara", "Arctic", "Thar"], correctAnswer: 1 },
                { question: "Which country is known as the Land of the Rising Sun?", options: ["China", "Japan", "Thailand", "South Korea"], correctAnswer: 1 },
                { question: "What is the square root of 64?", options: ["6", "7", "8", "9"], correctAnswer: 2 },
                { question: "What is H2O?", options: ["Hydrogen", "Oxygen", "Water", "Salt"], correctAnswer: 2 },
                { question: "Who was the first Indian PM?", options: ["Modi", "Indira", "Gandhi", "Nehru"], correctAnswer: 3 },
                { question: "Which year did WW2 end?", options: ["1945", "1939", "1918", "1965"], correctAnswer: 0 },
                { question: "Where is the Eiffel Tower?", options: ["London", "Paris", "Rome", "Berlin"], correctAnswer: 1 },
                { question: "Which blood group is universal donor?", options: ["A", "O-", "B", "AB+"], correctAnswer: 1 },
                { question: "Who discovered gravity?", options: ["Einstein", "Newton", "Tesla", "Darwin"], correctAnswer: 1 },
                { question: "What is the freezing point of water?", options: ["0°C", "100°C", "50°C", "32°C"], correctAnswer: 0 },
                { question: "Which sport uses a bat and ball?", options: ["Football", "Tennis", "Cricket", "Hockey"], correctAnswer: 2 }
            ]
        },
        {
            id: 2,
            title: "Science Trivia",
            description: "How much do you know about science? Take this quiz to find out!",
            category: "Science",
            creator: "ScienceFan",
            questions: [
                { question: "What is the chemical symbol for water?", options: ["O2", "H2O", "CO2", "NaCl"], correctAnswer: 1 },
                { question: "Which gas is essential for breathing?", options: ["Oxygen", "Nitrogen", "Hydrogen", "CO2"], correctAnswer: 0 },
                { question: "How many bones are in the human body?", options: ["206", "201", "210", "198"], correctAnswer: 0 },
                { question: "Speed of light?", options: ["3x10^8 m/s", "3x10^6 m/s", "3x10^5 m/s", "3x10^7 m/s"], correctAnswer: 0 },
                { question: "Which organ pumps blood?", options: ["Lungs", "Liver", "Heart", "Brain"], correctAnswer: 2 },
                { question: "Sun is a...?", options: ["Planet", "Asteroid", "Star", "Comet"], correctAnswer: 2 },
                { question: "Smallest unit of life?", options: ["Tissue", "Organ", "Cell", "Nucleus"], correctAnswer: 2 },
                { question: "DNA full form?", options: ["Digital Nucleic Acid", "Deoxyribonucleic Acid", "Double Nucleic Acid", "None"], correctAnswer: 1 },
                { question: "Which vitamin is made by sunlight?", options: ["A", "B", "C", "D"], correctAnswer: 3 },
                { question: "Which element is used in thermometers?", options: ["Lead", "Zinc", "Mercury", "Silver"], correctAnswer: 2 },
                { question: "Earth's gravitational force?", options: ["9.8 m/s²", "10 m/s²", "8.9 m/s²", "9 m/s²"], correctAnswer: 0 },
                { question: "Gas used in balloons?", options: ["O2", "Hydrogen", "Helium", "Nitrogen"], correctAnswer: 2 },
                { question: "Boiling point of water?", options: ["90°C", "95°C", "100°C", "110°C"], correctAnswer: 2 },
                { question: "Electricity is measured in?", options: ["Volts", "Amps", "Watts", "Joules"], correctAnswer: 2 },
                { question: "Which acid is in lemon?", options: ["Hydrochloric", "Sulphuric", "Citric", "Nitric"], correctAnswer: 2 },
                { question: "Brain part for memory?", options: ["Cerebellum", "Cerebrum", "Medulla", "Pons"], correctAnswer: 1 },
                { question: "Insects have how many legs?", options: ["4", "6", "8", "10"], correctAnswer: 1 },
                { question: "Atomic number of oxygen?", options: ["6", "8", "10", "12"], correctAnswer: 1 },
                { question: "Fossil fuels are?", options: ["Renewable", "Non-renewable", "Organic", "Synthetic"], correctAnswer: 1 },
                { question: "Which is not a planet?", options: ["Earth", "Sun", "Mars", "Jupiter"], correctAnswer: 1 }
            ]
        },

        {
            id: 3,
            title: "Movie Buff Quiz",
            description: "Are you a true movie expert? Prove it with this quiz!",
            category: "Movies",
            creator: "FilmCritic",
            questions: [
                { question: "Who directed 'Inception'?", options: ["Spielberg", "Nolan", "Cameron", "Tarantino"], correctAnswer: 1 },
                { question: "Which movie won Best Picture Oscar in 2020?", options: ["Parasite", "1917", "Joker", "The Irishman"], correctAnswer: 0 },
                { question: "Tony Stark was played by?", options: ["Chris Evans", "RDJ", "Chris Hemsworth", "Mark Ruffalo"], correctAnswer: 1 },
                { question: "Hogwarts belongs to?", options: ["LOTR", "Hunger Games", "Harry Potter", "Narnia"], correctAnswer: 2 },
                { question: "Main character in Titanic?", options: ["Jack", "James", "John", "Jordan"], correctAnswer: 0 },
                { question: "Which movie has 'Wakanda Forever'?", options: ["Iron Man", "Thor", "Black Panther", "Avengers"], correctAnswer: 2 },
                { question: "Which actor is 'Deadpool'?", options: ["Ryan Gosling", "Ryan Reynolds", "Tom Holland", "Chris Pratt"], correctAnswer: 1 },
                { question: "Who directed 'Avatar'?", options: ["Nolan", "Cameron", "Jackson", "Bay"], correctAnswer: 1 },
                { question: "‘I’ll be back’ is from?", options: ["Die Hard", "Matrix", "Terminator", "Rambo"], correctAnswer: 2 },
                { question: "First Marvel movie?", options: ["Iron Man", "Thor", "Captain America", "Hulk"], correctAnswer: 0 },
                { question: "Name of Batman’s city?", options: ["Metropolis", "Gotham", "Star City", "Central City"], correctAnswer: 1 },
                { question: "In which movie is Elsa?", options: ["Moana", "Frozen", "Encanto", "Tangled"], correctAnswer: 1 },
                { question: "Al Pacino starred in?", options: ["Scarface", "Titanic", "Avatar", "Gladiator"], correctAnswer: 0 },
                { question: "‘Why so serious?’ is from?", options: ["Joker", "Dark Knight", "Suicide Squad", "Batman Begins"], correctAnswer: 1 },
                { question: "Which actor played Spider-Man in No Way Home?", options: ["Tobey", "Andrew", "Tom", "All 3"], correctAnswer: 3 },
                { question: "Which movie features a talking tree?", options: ["Shrek", "Frozen", "Guardians of Galaxy", "Brave"], correctAnswer: 2 },
                { question: "Pixar's first movie?", options: ["Nemo", "Cars", "Toy Story", "Up"], correctAnswer: 2 },
                { question: "Which is not an Avenger?", options: ["Iron Man", "Hulk", "Superman", "Black Widow"], correctAnswer: 2 },
                { question: "Name of the wizard in LOTR?", options: ["Gandalf", "Dumbledore", "Merlin", "Saruman"], correctAnswer: 0 },
                { question: "‘Run Forrest, run!’ is from?", options: ["Castaway", "Green Mile", "Forrest Gump", "Big"], correctAnswer: 2 }
            ]
        }, {
            id: 4,
            title: "World Geography Quiz",
            description: "Test your knowledge of countries, capitals, and geography facts!",
            category: "Geography",
            creator: "QuizMaster",
            questions: [
                { question: "Which is the largest continent?", options: ["Africa", "Europe", "Asia", "Antarctica"], correctAnswer: 2 },
                { question: "Capital of Canada?", options: ["Toronto", "Ottawa", "Vancouver", "Montreal"], correctAnswer: 1 },
                { question: "Which country has the most islands?", options: ["Canada", "Indonesia", "Sweden", "Philippines"], correctAnswer: 2 },
                { question: "River that flows through Egypt?", options: ["Amazon", "Nile", "Ganges", "Yangtze"], correctAnswer: 1 },
                { question: "Mount Everest is in?", options: ["India", "Nepal", "China", "Pakistan"], correctAnswer: 1 },
                { question: "Sahara Desert is in which continent?", options: ["Asia", "South America", "Africa", "Australia"], correctAnswer: 2 },
                { question: "Which is the smallest country?", options: ["Malta", "Vatican City", "Monaco", "Andorra"], correctAnswer: 1 },
                { question: "Which US state has the Grand Canyon?", options: ["Nevada", "Utah", "Arizona", "Colorado"], correctAnswer: 2 },
                { question: "Which line divides Earth into North and South?", options: ["Equator", "Prime Meridian", "Tropic of Cancer", "Tropic of Capricorn"], correctAnswer: 0 },
                { question: "Which ocean is west of India?", options: ["Arctic", "Atlantic", "Pacific", "Indian"], correctAnswer: 3 },
                { question: "Country with most time zones?", options: ["Russia", "USA", "France", "China"], correctAnswer: 2 },
                { question: "Which country has a maple leaf on its flag?", options: ["USA", "Canada", "UK", "Germany"], correctAnswer: 1 },
                { question: "Which city is known as the 'Big Apple'?", options: ["Los Angeles", "New York", "Chicago", "Boston"], correctAnswer: 1 },
                { question: "Which continent is the Amazon rainforest in?", options: ["Asia", "South America", "Africa", "Europe"], correctAnswer: 1 },
                { question: "Which mountain range is in Europe?", options: ["Rockies", "Andes", "Alps", "Himalayas"], correctAnswer: 2 },
                { question: "Which island is the largest in the world?", options: ["Greenland", "Australia", "Borneo", "New Guinea"], correctAnswer: 0 },
                { question: "What is the capital of Brazil?", options: ["Rio", "São Paulo", "Brasília", "Salvador"], correctAnswer: 2 },
                { question: "Which country shares a border with 14 nations?", options: ["China", "Russia", "India", "Germany"], correctAnswer: 1 },
                { question: "Which sea separates Europe and Africa?", options: ["Baltic", "Caribbean", "Mediterranean", "Arabian"], correctAnswer: 2 },
                { question: "Which country lies on two continents?", options: ["Turkey", "Japan", "Egypt", "Mexico"], correctAnswer: 0 }
            ]
        }, {
            id: 5,
            title: "World History Quiz",
            description: "Explore major historical events, people, and empires.",
            category: "History",
            creator: "QuizMaster",
            questions: [
                { question: "Who was the first President of the USA?", options: ["Abraham Lincoln", "Thomas Jefferson", "George Washington", "John Adams"], correctAnswer: 2 },
                { question: "In which year did World War II end?", options: ["1940", "1943", "1945", "1950"], correctAnswer: 2 },
                { question: "Mahatma Gandhi led which movement?", options: ["Quit India", "Non-Cooperation", "Salt March", "All of these"], correctAnswer: 3 },
                { question: "Who discovered America?", options: ["Vasco da Gama", "Columbus", "Magellan", "Cook"], correctAnswer: 1 },
                { question: "Where was the Indus Valley Civilization located?", options: ["China", "India", "Egypt", "Greece"], correctAnswer: 1 },
                { question: "First man on the moon?", options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Michael Collins"], correctAnswer: 2 },
                { question: "Taj Mahal was built by?", options: ["Akbar", "Shah Jahan", "Babur", "Aurangzeb"], correctAnswer: 1 },
                { question: "Cold War was between?", options: ["India & Pakistan", "US & USSR", "UK & Germany", "China & Japan"], correctAnswer: 1 },
                { question: "Who was Hitler?", options: ["Artist", "Scientist", "Dictator", "Explorer"], correctAnswer: 2 },
                { question: "Who invented printing press?", options: ["Newton", "Galileo", "Gutenberg", "Da Vinci"], correctAnswer: 2 },
                { question: "When was the French Revolution?", options: ["1789", "1857", "1815", "1700"], correctAnswer: 0 },
                { question: "Which empire built the Colosseum?", options: ["Greek", "Roman", "Ottoman", "British"], correctAnswer: 1 },
                { question: "Who was the Iron Lady?", options: ["Angela Merkel", "Margaret Thatcher", "Indira Gandhi", "Benazir Bhutto"], correctAnswer: 1 },
                { question: "Partition of India happened in?", options: ["1945", "1946", "1947", "1948"], correctAnswer: 2 },
                { question: "Who gave the slogan 'Jai Jawan Jai Kisan'?", options: ["Gandhi", "Shastri", "Nehru", "Patel"], correctAnswer: 1 },
                { question: "Who abolished slavery in USA?", options: ["Washington", "Lincoln", "Roosevelt", "Kennedy"], correctAnswer: 1 },
                { question: "Which war used atomic bombs?", options: ["WW1", "Vietnam", "WW2", "Cold War"], correctAnswer: 2 },
                { question: "The Berlin Wall fell in?", options: ["1987", "1989", "1991", "1993"], correctAnswer: 1 },
                { question: "Who was Cleopatra?", options: ["Queen of India", "Queen of Egypt", "Goddess", "Roman senator"], correctAnswer: 1 },
                { question: "Which event began in 2020 globally?", options: ["War", "Depression", "Pandemic", "Recession"], correctAnswer: 2 }
            ]
        }, {
            id: 6,
            title: "Music Mastery Quiz",
            description: "Test your knowledge of music theory, artists, and genres.",
            category: "Music",
            creator: "QuizMaster",
            questions: [
                { question: "Who is known as the 'King of Pop'?", options: ["Elvis Presley", "Michael Jackson", "Prince", "Justin Bieber"], correctAnswer: 1 },
                { question: "Which instrument has 88 keys?", options: ["Guitar", "Harmonium", "Piano", "Violin"], correctAnswer: 2 },
                { question: "What is the national instrument of India?", options: ["Sitar", "Tabla", "Veena", "Shehnai"], correctAnswer: 3 },
                { question: "Which singer is known for 'Shape of You'?", options: ["Drake", "Ed Sheeran", "Shawn Mendes", "Post Malone"], correctAnswer: 1 },
                { question: "Which band sang 'Bohemian Rhapsody'?", options: ["Queen", "Beatles", "Coldplay", "Nirvana"], correctAnswer: 0 },
                { question: "Who composed Beethoven’s 5th Symphony?", options: ["Mozart", "Beethoven", "Bach", "Chopin"], correctAnswer: 1 },
                { question: "Which Indian singer is known as 'Nightingale of India'?", options: ["Alka Yagnik", "Sunidhi Chauhan", "Lata Mangeshkar", "Shreya Ghoshal"], correctAnswer: 2 },
                { question: "A group of 4 musicians is called a?", options: ["Duo", "Trio", "Quartet", "Ensemble"], correctAnswer: 2 },
                { question: "Which genre is BTS famous for?", options: ["Pop", "K-Pop", "Hip Hop", "Rock"], correctAnswer: 1 },
                { question: "Which musical note is the highest?", options: ["A", "G", "B", "C"], correctAnswer: 2 },
                { question: "Instrument Ravi Shankar was famous for?", options: ["Flute", "Sitar", "Tabla", "Sarangi"], correctAnswer: 1 },
                { question: "Who sang 'Rolling in the Deep'?", options: ["Adele", "Taylor Swift", "Katy Perry", "Selena Gomez"], correctAnswer: 0 },
                { question: "Which band was John Lennon part of?", options: ["Queen", "Rolling Stones", "The Beatles", "Linkin Park"], correctAnswer: 2 },
                { question: "Which Indian singer holds a Guinness Record?", options: ["Lata Mangeshkar", "Kishore Kumar", "Asha Bhosale", "Sonu Nigam"], correctAnswer: 2 },
                { question: "‘Raag Bhairavi’ is a part of?", options: ["Western Jazz", "Indian Classical", "Pop", "Folk"], correctAnswer: 1 },
                { question: "First Indian to win an Oscar for music?", options: ["Ilaiyaraaja", "R.D. Burman", "A.R. Rahman", "Anu Malik"], correctAnswer: 2 },
                { question: "The 'Tabla' is played using?", options: ["Sticks", "Fingers", "Bow", "Foot"], correctAnswer: 1 },
                { question: "Which part of music defines its speed?", options: ["Melody", "Rhythm", "Tempo", "Pitch"], correctAnswer: 2 },
                { question: "What’s the symbol for a sharp note?", options: ["b", "#", "&", "%"], correctAnswer: 1 },
                { question: "Which singer is called the 'Queen of Pop'?", options: ["Beyoncé", "Lady Gaga", "Madonna", "Rihanna"], correctAnswer: 2 }
            ]
        }, {
            id: 7,
            title: "Ultimate Gaming Quiz",
            description: "For the gamers! Test your knowledge of video games and board games.",
            category: "Games",
            creator: "QuizMaster",
            questions: [
                { question: "Which company created PlayStation?", options: ["Microsoft", "Sony", "Nintendo", "Sega"], correctAnswer: 1 },
                { question: "What is the highest-selling video game of all time?", options: ["Minecraft", "GTA V", "Tetris", "Fortnite"], correctAnswer: 0 },
                { question: "Which game has the character 'Link'?", options: ["Final Fantasy", "Zelda", "Halo", "Mario"], correctAnswer: 1 },
                { question: "What game is known for building blocks?", options: ["Tetris", "Roblox", "Minecraft", "Sims"], correctAnswer: 2 },
                { question: "Which color is worth the most in Ludo?", options: ["Red", "Green", "Blue", "None"], correctAnswer: 3 },
                { question: "Famous mobile game with birds?", options: ["Clash Royale", "Angry Birds", "Temple Run", "Jetpack Joyride"], correctAnswer: 1 },
                { question: "In chess, what piece moves in L-shape?", options: ["Bishop", "Knight", "Rook", "Pawn"], correctAnswer: 1 },
                { question: "Which game has 'Victory Royale'?", options: ["Free Fire", "COD", "Fortnite", "Valorant"], correctAnswer: 2 },
                { question: "Classic board game with hotels?", options: ["Risk", "Scrabble", "Cluedo", "Monopoly"], correctAnswer: 3 },
                { question: "What is the name of Mario's brother?", options: ["Wario", "Luigi", "Toad", "Yoshi"], correctAnswer: 1 },
                { question: "Which company owns Xbox?", options: ["Sony", "Microsoft", "Google", "Apple"], correctAnswer: 1 },
                { question: "What is the genre of FIFA?", options: ["Racing", "Strategy", "Sports", "Adventure"], correctAnswer: 2 },
                { question: "PUBG is short for?", options: ["Players Underground", "Battle Zone", "PlayerUnknown’s Battlegrounds", "Power Up Battle Game"], correctAnswer: 2 },
                { question: "Which game uses 'Pokeballs'?", options: ["Mario", "Zelda", "Pokemon", "Clash of Clans"], correctAnswer: 2 },
                { question: "Scrabble involves making what?", options: ["Numbers", "Sentences", "Words", "Diagrams"], correctAnswer: 2 },
                { question: "Which game has characters like Sub-Zero?", options: ["Street Fighter", "Tekken", "Mortal Kombat", "WWE"], correctAnswer: 2 },
                { question: "Valorant is a?", options: ["FPS", "RPG", "Puzzle", "Card Game"], correctAnswer: 0 },
                { question: "Which board game has snakes?", options: ["Monopoly", "Chess", "Snakes and Ladders", "Carrom"], correctAnswer: 2 },
                { question: "Name of popular farming game?", options: ["Farmville", "Minecraft", "Rust", "Hay Day"], correctAnswer: 0 },
                { question: "The word 'GG' in gaming means?", options: ["Game Gone", "Great Gig", "Good Game", "Game Game"], correctAnswer: 2 }
            ]
        }, {
            id: 8,
            title: "Maths Challenge Quiz",
            description: "Sharpen your math skills with these brain-teasing questions.",
            category: "Maths",
            creator: "QuizMaster",
            questions: [
                { question: "What is 7 × 8?", options: ["56", "48", "64", "58"], correctAnswer: 0 },
                { question: "Square root of 144?", options: ["10", "11", "12", "13"], correctAnswer: 2 },
                { question: "Value of π (approx)?", options: ["3.14", "2.17", "1.41", "3.33"], correctAnswer: 0 },
                { question: "100 ÷ 5 = ?", options: ["15", "20", "25", "30"], correctAnswer: 1 },
                { question: "What is 9²?", options: ["72", "81", "91", "89"], correctAnswer: 1 },
                { question: "5³ = ?", options: ["125", "100", "225", "75"], correctAnswer: 0 },
                { question: "What is a triangle’s angle sum?", options: ["90°", "180°", "270°", "360°"], correctAnswer: 1 },
                { question: "Which is a prime number?", options: ["4", "6", "9", "11"], correctAnswer: 3 },
                { question: "Binary of 5?", options: ["101", "100", "110", "111"], correctAnswer: 0 },
                { question: "Simplify: 2 + 3 × 4", options: ["20", "14", "24", "18"], correctAnswer: 1 },
                { question: "Which shape has 4 equal sides?", options: ["Rectangle", "Square", "Trapezium", "Rhombus"], correctAnswer: 1 },
                { question: "Perimeter formula of square?", options: ["4a", "a²", "2a", "a+4"], correctAnswer: 0 },
                { question: "Area of circle: π × r × ?", options: ["h", "r", "2", "r"], correctAnswer: 3 },
                { question: "Which is an even number?", options: ["13", "7", "22", "19"], correctAnswer: 2 },
                { question: "0 factorial (0!) equals?", options: ["1", "0", "Undefined", "Infinity"], correctAnswer: 0 },
                { question: "What is 25% of 200?", options: ["40", "50", "60", "25"], correctAnswer: 1 },
                { question: "Roman numeral for 50?", options: ["V", "L", "X", "C"], correctAnswer: 1 },
                { question: "What is 9 + (-3)?", options: ["6", "12", "0", "3"], correctAnswer: 0 },
                { question: "HCF of 12 and 18?", options: ["3", "6", "12", "18"], correctAnswer: 1 },
                { question: "LCM of 3 and 5?", options: ["8", "10", "15", "20"], correctAnswer: 2 }
            ]
        }, {
            id: 9,
            title: "Technology Trivia",
            description: "Explore your knowledge of modern and past technology trends.",
            category: "Technology",
            creator: "QuizMaster",
            questions: [
                { question: "What does 'CPU' stand for?", options: ["Central Process Unit", "Central Processing Unit", "Computer Power Unit", "Control Panel Unit"], correctAnswer: 1 },
                { question: "HTML is used to create?", options: ["Apps", "Websites", "Games", "Databases"], correctAnswer: 1 },
                { question: "What is the full form of USB?", options: ["Universal System Bus", "Universal Serial Bus", "Unique Service Block", "User Select Bus"], correctAnswer: 1 },
                { question: "First computer virus was called?", options: ["Creeper", "ILOVEYOU", "Trojan", "Blaster"], correctAnswer: 0 },
                { question: "Founder of Microsoft?", options: ["Elon Musk", "Steve Jobs", "Bill Gates", "Mark Zuckerberg"], correctAnswer: 2 },
                { question: "Google Chrome is a?", options: ["Search Engine", "Web Browser", "App", "Software"], correctAnswer: 1 },
                { question: "Which is not an OS?", options: ["Windows", "Linux", "Excel", "macOS"], correctAnswer: 2 },
                { question: "Which company makes iPhones?", options: ["Samsung", "Apple", "Nokia", "Huawei"], correctAnswer: 1 },
                { question: "Binary uses which numbers?", options: ["0 and 1", "1 and 2", "2 and 3", "0 and 9"], correctAnswer: 0 },
                { question: "What does Wi-Fi stand for?", options: ["Wireless Fidelity", "Wide Fiber", "Wave Finder", "Web File"], correctAnswer: 0 },
                { question: "Email stands for?", options: ["Electronic Mail", "Easy Mail", "Error Mail", "Engine Mail"], correctAnswer: 0 },
                { question: "Which of these is a programming language?", options: ["Python", "Puma", "Ping", "Pixel"], correctAnswer: 0 },
                { question: "Shortcut to copy on Windows?", options: ["Ctrl+C", "Ctrl+X", "Ctrl+V", "Ctrl+Z"], correctAnswer: 0 },
                { question: "App used for video calls?", options: ["Google Docs", "Zoom", "Photoshop", "VS Code"], correctAnswer: 1 },
                { question: "Inventor of the World Wide Web?", options: ["Tim Berners-Lee", "Steve Jobs", "Larry Page", "Elon Musk"], correctAnswer: 0 },
                { question: "Tech brand with a bitten apple logo?", options: ["Samsung", "Microsoft", "Apple", "Sony"], correctAnswer: 2 },
                { question: "Android is developed by?", options: ["Apple", "Google", "Samsung", "Huawei"], correctAnswer: 1 },
                { question: "Which company owns YouTube?", options: ["Facebook", "Twitter", "Microsoft", "Google"], correctAnswer: 3 },
                { question: "Cloud storage by Google?", options: ["Dropbox", "OneDrive", "Google Drive", "iCloud"], correctAnswer: 2 },
                { question: "Which is an AI tool?", options: ["Photoshop", "ChatGPT", "Zoom", "YouTube"], correctAnswer: 1 }
            ]
        }, {
            id: 10,
            title: "Sports IQ Quiz",
            description: "How well do you know your sports and athletes?",
            category: "Sports",
            creator: "QuizMaster",
            questions: [
                { question: "How many players in a football team?", options: ["9", "10", "11", "12"], correctAnswer: 2 },
                { question: "Which country won FIFA 2022?", options: ["Brazil", "Argentina", "France", "Germany"], correctAnswer: 1 },
                { question: "Sachin Tendulkar played which sport?", options: ["Hockey", "Football", "Cricket", "Badminton"], correctAnswer: 2 },
                { question: "Olympics are held every ___ years?", options: ["2", "3", "4", "5"], correctAnswer: 2 },
                { question: "Which sport uses a puck?", options: ["Basketball", "Ice Hockey", "Tennis", "Boxing"], correctAnswer: 1 },
                { question: "First Indian to win Olympic gold?", options: ["Abhinav Bindra", "Neeraj Chopra", "Sushil Kumar", "Milkha Singh"], correctAnswer: 0 },
                { question: "How many rings in Olympic symbol?", options: ["4", "5", "6", "7"], correctAnswer: 1 },
                { question: "Who is known as 'The GOAT' in tennis?", options: ["Nadal", "Federer", "Djokovic", "All"], correctAnswer: 3 },
                { question: "Which sport has wickets?", options: ["Cricket", "Baseball", "Hockey", "Rugby"], correctAnswer: 0 },
                { question: "Host of Cricket World Cup 2023?", options: ["India", "Australia", "UK", "South Africa"], correctAnswer: 0 },
                { question: "Who holds 100m sprint world record?", options: ["Tyson Gay", "Usain Bolt", "Carl Lewis", "Yohan Blake"], correctAnswer: 1 },
                { question: "NBA is associated with?", options: ["Baseball", "Hockey", "Basketball", "Tennis"], correctAnswer: 2 },
                { question: "Dronacharya award is given to?", options: ["Players", "Coaches", "Captains", "Teams"], correctAnswer: 1 },
                { question: "What is the national game of India?", options: ["Cricket", "Hockey", "Kabaddi", "Football"], correctAnswer: 1 },
                { question: "Ronaldo is famous for which sport?", options: ["Tennis", "Basketball", "Football", "Baseball"], correctAnswer: 2 },
                { question: "Where was IPL 2020 held?", options: ["India", "UAE", "Australia", "South Africa"], correctAnswer: 1 },
                { question: "How many sets to win a tennis match?", options: ["2 or 3", "4", "5", "Depends"], correctAnswer: 0 },
                { question: "What sport is played at Wimbledon?", options: ["Golf", "Tennis", "Rugby", "Football"], correctAnswer: 1 },
                { question: "Which sport is Mary Kom associated with?", options: ["Wrestling", "Boxing", "Badminton", "Judo"], correctAnswer: 1 },
                { question: "Which Indian is famous for chess?", options: ["Anand", "Kohli", "Dhoni", "Sindhu"], correctAnswer: 0 }
            ]
        }, {
            id: 11,
            title: "Literary Legends Quiz",
            description: "Test your knowledge of books, authors, and literary works.",
            category: "Literature",
            creator: "QuizMaster",
            questions: [
                { question: "Who wrote 'Hamlet'?", options: ["Shakespeare", "Dickens", "Homer", "Milton"], correctAnswer: 0 },
                { question: "Author of 'Harry Potter' series?", options: ["Rowling", "Collins", "Riordan", "Meyer"], correctAnswer: 0 },
                { question: "Who wrote 'Pride and Prejudice'?", options: ["Austen", "Bronte", "Woolf", "Eliot"], correctAnswer: 0 },
                { question: "'Animal Farm' is written by?", options: ["Orwell", "Huxley", "Bradbury", "Golding"], correctAnswer: 0 },
                { question: "Indian epic with Krishna?", options: ["Ramayana", "Mahabharata", "Vedas", "Upanishads"], correctAnswer: 1 },
                { question: "‘Gitanjali’ is by?", options: ["Vivekananda", "Kalidas", "Tagore", "Premchand"], correctAnswer: 2 },
                { question: "'The Alchemist' author?", options: ["Coelho", "Brown", "Morrison", "Atwood"], correctAnswer: 0 },
                { question: "Poet of 'Daffodils'?", options: ["Keats", "Shelley", "Wordsworth", "Byron"], correctAnswer: 2 },
                { question: "Book with 'Big Brother'?", options: ["Brave New World", "1984", "Fahrenheit 451", "Utopia"], correctAnswer: 1 },
                { question: "'To Kill a Mockingbird' writer?", options: ["Harper Lee", "J.D. Salinger", "Hemingway", "Steinbeck"], correctAnswer: 0 },
                { question: "'The Hobbit' was written by?", options: ["Tolkien", "Rowling", "Lewis", "Martin"], correctAnswer: 0 },
                { question: "Who is the bard of Avon?", options: ["Milton", "Shakespeare", "Wordsworth", "Pope"], correctAnswer: 1 },
                { question: "'Devdas' was written by?", options: ["Tagore", "Sarat Chandra", "Premchand", "Munsi"], correctAnswer: 1 },
                { question: "Book by APJ Abdul Kalam?", options: ["Wings of Fire", "Ignited Minds", "India 2020", "All of these"], correctAnswer: 3 },
                { question: "Author of 'A Brief History of Time'?", options: ["Hawking", "Einstein", "Sagan", "Feynman"], correctAnswer: 0 },
                { question: "Which book is a satire?", options: ["Animal Farm", "Hobbit", "1984", "Twilight"], correctAnswer: 0 },
                { question: "'Romeo and Juliet' is a ___?", options: ["Comedy", "Tragedy", "Epic", "Satire"], correctAnswer: 1 },
                { question: "Who wrote 'The Guide'?", options: ["Premchand", "R.K. Narayan", "Tagore", "Mulk Raj Anand"], correctAnswer: 1 },
                { question: "‘Midnight’s Children’ author?", options: ["Rushdie", "Arundhati Roy", "Vikram Seth", "Jhumpa Lahiri"], correctAnswer: 0 },
                { question: "'Sherlock Holmes' was created by?", options: ["Agatha Christie", "Doyle", "Rowling", "Nesbo"], correctAnswer: 1 }
            ]
        }, {
            id: 12,
            title: "Political Knowledge Quiz",
            description: "Test your awareness of Indian and global political systems.",
            category: "Politics",
            creator: "QuizMaster",
            questions: [
                { question: "Who is the current Prime Minister of India (2024)?", options: ["Rahul Gandhi", "Narendra Modi", "Amit Shah", "Manmohan Singh"], correctAnswer: 1 },
                { question: "What is the upper house of Indian Parliament called?", options: ["Lok Sabha", "Rajya Sabha", "Vidhan Sabha", "Council"], correctAnswer: 1 },
                { question: "Who was the first female PM of India?", options: ["Sonia Gandhi", "Indira Gandhi", "Pratibha Patil", "Mayawati"], correctAnswer: 1 },
                { question: "The President of India is elected for how many years?", options: ["4", "5", "6", "7"], correctAnswer: 1 },
                { question: "Which party uses the lotus symbol?", options: ["INC", "BJP", "AAP", "CPI"], correctAnswer: 1 },
                { question: "UNO headquarters is located in?", options: ["London", "New York", "Geneva", "Paris"], correctAnswer: 1 },
                { question: "Which Article grants Right to Equality?", options: ["14", "21", "32", "19"], correctAnswer: 0 },
                { question: "Who is head of the state government?", options: ["President", "CM", "Governor", "PM"], correctAnswer: 1 },
                { question: "Lok Sabha elections occur every ___ years?", options: ["3", "4", "5", "6"], correctAnswer: 2 },
                { question: "Who appoints the Chief Justice of India?", options: ["PM", "President", "CM", "Lok Sabha"], correctAnswer: 1 },
                { question: "Which country has a one-party rule?", options: ["USA", "India", "China", "UK"], correctAnswer: 2 },
                { question: "Which PM gave slogan 'Garibi Hatao'?", options: ["Modi", "Shastri", "Indira Gandhi", "Nehru"], correctAnswer: 2 },
                { question: "What does EVM stand for?", options: ["Electronic Voting Machine", "Election Value Monitor", "Elected Voter Model", "Easy Vote Mechanism"], correctAnswer: 0 },
                { question: "Who can dissolve Lok Sabha?", options: ["Speaker", "PM", "President", "Supreme Court"], correctAnswer: 2 },
                { question: "Which body conducts elections in India?", options: ["Supreme Court", "President", "Election Commission", "Parliament"], correctAnswer: 2 },
                { question: "What is the minimum age for PM of India?", options: ["25", "30", "35", "40"], correctAnswer: 2 },
                { question: "Who is the head of Indian Army?", options: ["Air Marshal", "Navy Chief", "Chief of Army Staff", "President"], correctAnswer: 2 },
                { question: "Which house is known as the 'House of People'?", options: ["Rajya Sabha", "Lok Sabha", "Vidhan Parishad", "Assembly"], correctAnswer: 1 },
                { question: "Which party was founded by Arvind Kejriwal?", options: ["BJP", "AAP", "INC", "SP"], correctAnswer: 1 },
                { question: "The emergency in India was declared in?", options: ["1975", "1992", "1962", "1984"], correctAnswer: 0 }
            ]
        }, {
            id: 13,
            title: "Art & Artists Quiz",
            description: "Discover your knowledge of painting, sculpture, and visual arts.",
            category: "Art",
            creator: "QuizMaster",
            questions: [
                { question: "Who painted the Mona Lisa?", options: ["Van Gogh", "Da Vinci", "Picasso", "Michelangelo"], correctAnswer: 1 },
                { question: "Which artist cut off his ear?", options: ["Monet", "Dali", "Van Gogh", "Rembrandt"], correctAnswer: 2 },
                { question: "What is the art of paper folding?", options: ["Papercraft", "Origami", "Kirigami", "Mandala"], correctAnswer: 1 },
                { question: "What is the main medium in watercolor painting?", options: ["Oil", "Water", "Acrylic", "Charcoal"], correctAnswer: 1 },
                { question: "Which Indian is known for abstract art?", options: ["Amrita Sher-Gil", "M.F. Husain", "Raja Ravi Varma", "Jamini Roy"], correctAnswer: 1 },
                { question: "Which museum holds the Mona Lisa?", options: ["British Museum", "Louvre", "MET", "Vatican"], correctAnswer: 1 },
                { question: "The ‘Last Supper’ was painted by?", options: ["Michelangelo", "Raphael", "Da Vinci", "Titian"], correctAnswer: 2 },
                { question: "What color is formed by mixing red and blue?", options: ["Green", "Purple", "Orange", "Pink"], correctAnswer: 1 },
                { question: "Which style is Picasso known for?", options: ["Cubism", "Impressionism", "Surrealism", "Realism"], correctAnswer: 0 },
                { question: "Which material is used in sculpture?", options: ["Marble", "Canvas", "Paper", "Chalk"], correctAnswer: 0 },
                { question: "What is the art of beautiful handwriting?", options: ["Typography", "Calligraphy", "Illustration", "Brushwork"], correctAnswer: 1 },
                { question: "Who painted 'Starry Night'?", options: ["Monet", "Van Gogh", "Matisse", "Gauguin"], correctAnswer: 1 },
                { question: "Ajanta caves are famous for?", options: ["Dance", "Carvings", "Paintings", "Textiles"], correctAnswer: 2 },
                { question: "Which art form uses sand?", options: ["Pottery", "Rangoli", "Embroidery", "Fresco"], correctAnswer: 1 },
                { question: "Which country invented Manga?", options: ["India", "USA", "China", "Japan"], correctAnswer: 3 },
                { question: "Which artist is known for melting clocks?", options: ["Dali", "Klimt", "Pollock", "Miro"], correctAnswer: 0 },
                { question: "Raja Ravi Varma is famous for?", options: ["Portraits", "Landscapes", "Temples", "Abstract"], correctAnswer: 0 },
                { question: "What is 'Fresco' painting done on?", options: ["Paper", "Wood", "Wet wall", "Glass"], correctAnswer: 2 },
                { question: "Traditional Madhubani painting is from?", options: ["Rajasthan", "Maharashtra", "Bihar", "Odisha"], correctAnswer: 2 },
                { question: "Who painted 'The Persistence of Memory'?", options: ["Dali", "Monet", "Picasso", "Cézanne"], correctAnswer: 0 }
            ]
        }, {
            id: 14,
            title: "Business Basics Quiz",
            description: "Check your knowledge of companies, CEOs, and business terms.",
            category: "Business",
            creator: "QuizMaster",
            questions: [
                { question: "CEO of Tesla?", options: ["Sundar Pichai", "Elon Musk", "Tim Cook", "Jeff Bezos"], correctAnswer: 1 },
                { question: "Which company owns WhatsApp?", options: ["Google", "Apple", "Meta", "Microsoft"], correctAnswer: 2 },
                { question: "What does IPO stand for?", options: ["Initial Price Offer", "Investor Public Option", "Initial Public Offering", "Instant Profit Option"], correctAnswer: 2 },
                { question: "Founder of Amazon?", options: ["Gates", "Zuckerberg", "Bezos", "Jobs"], correctAnswer: 2 },
                { question: "Which is a payment app?", options: ["Google Pay", "Gmail", "Snapchat", "Spotify"], correctAnswer: 0 },
                { question: "Stock exchange in India?", options: ["NYSE", "BSE", "NASDAQ", "LSE"], correctAnswer: 1 },
                { question: "Apple’s first product?", options: ["iPod", "iMac", "iPhone", "Apple I"], correctAnswer: 3 },
                { question: "CEO of Google (2024)?", options: ["Satya Nadella", "Sundar Pichai", "Tim Cook", "Bezos"], correctAnswer: 1 },
                { question: "Currency of Japan?", options: ["Yen", "Won", "Dollar", "Rupee"], correctAnswer: 0 },
                { question: "Which company makes iPhones?", options: ["Samsung", "Google", "Apple", "Huawei"], correctAnswer: 2 },
                { question: "Tata Group was founded in?", options: ["1800", "1868", "1901", "1950"], correctAnswer: 1 },
                { question: "What is GDP?", options: ["Gross Development Product", "Gross Domestic Product", "Global Domestic Product", "General Development Plan"], correctAnswer: 1 },
                { question: "Which Indian startup became a unicorn first?", options: ["Flipkart", "Oyo", "Zomato", "Paytm"], correctAnswer: 0 },
                { question: "Who is Warren Buffett?", options: ["Inventor", "Investor", "Athlete", "Writer"], correctAnswer: 1 },
                { question: "Which company owns YouTube?", options: ["Meta", "Twitter", "Google", "Apple"], correctAnswer: 2 },
                { question: "What is the symbol of Indian Rupee?", options: ["$", "₹", "€", "¥"], correctAnswer: 1 },
                { question: "Which Indian is CEO of Microsoft?", options: ["Pichai", "Adani", "Nadella", "Ambani"], correctAnswer: 2 },
                { question: "Which industry is Infosys in?", options: ["Automobile", "IT Services", "Pharma", "Textile"], correctAnswer: 1 },
                { question: "Which bank is nationalized?", options: ["ICICI", "HDFC", "SBI", "Kotak"], correctAnswer: 2 },
                { question: "Which logo is a blue bird?", options: ["Facebook", "Twitter", "LinkedIn", "Pinterest"], correctAnswer: 1 }
            ]
        }, {
            id: 15,
            title: "Programming Fundamentals",
            description: "Test your skills in basic programming concepts and languages.",
            category: "Programming",
            creator: "QuizMaster",
            questions: [
                { question: "Which language is used for web pages?", options: ["HTML", "Python", "C++", "Java"], correctAnswer: 0 },
                { question: "What does CSS stand for?", options: ["Color Style Sheet", "Cascading Style Sheets", "Computer Style Sheet", "Code Syntax Sheet"], correctAnswer: 1 },
                { question: "Which symbol is used for comments in JavaScript?", options: ["//", "#", "/*", "--"], correctAnswer: 0 },
                { question: "Which company developed Python?", options: ["Microsoft", "Google", "None", "Python Software Foundation"], correctAnswer: 3 },
                { question: "What is the output of 2 + '2' in JavaScript?", options: ["4", "22", "NaN", "Error"], correctAnswer: 1 },
                { question: "Python is a ___ typed language.", options: ["Statically", "Dynamically", "Strongly", "Loosely"], correctAnswer: 1 },
                { question: "Which tag is used to link JS in HTML?", options: ["<js>", "<script>", "<link>", "<code>"], correctAnswer: 1 },
                { question: "Which language is best for Data Science?", options: ["C", "Java", "Python", "PHP"], correctAnswer: 2 },
                { question: "What does SQL do?", options: ["Style pages", "Design games", "Manage databases", "Create apps"], correctAnswer: 2 },
                { question: "What is a loop?", options: ["Data type", "Condition", "Repetition structure", "Class"], correctAnswer: 2 },
                { question: "Which is not a programming language?", options: ["HTML", "Ruby", "C#", "Python"], correctAnswer: 0 },
                { question: "What is Git used for?", options: ["Photo Editing", "Video Rendering", "Version Control", "Web Hosting"], correctAnswer: 2 },
                { question: "Which keyword defines a function in JS?", options: ["func", "function", "def", "method"], correctAnswer: 1 },
                { question: "What is React?", options: ["Library", "Language", "Framework", "CMS"], correctAnswer: 0 },
                { question: "Which one is not backend?", options: ["Node.js", "Django", "Flask", "Bootstrap"], correctAnswer: 3 },
                { question: "What is the extension of a Python file?", options: [".py", ".java", ".html", ".txt"], correctAnswer: 0 },
                { question: "Which language uses 'print'?", options: ["C++", "Python", "Java", "PHP"], correctAnswer: 1 },
                { question: "What is a variable?", options: ["Function", "Value container", "Class", "None"], correctAnswer: 1 },
                { question: "What does JSON stand for?", options: ["Java Source", "JavaScript Object Notation", "Java Syntax", "Jumbled Syntax Object Notation"], correctAnswer: 1 },
                { question: "Which method adds an item to an array in JS?", options: ["add()", "push()", "insert()", "append()"], correctAnswer: 1 }
            ]
        }, {
            id: 16,
            title: "Space & Astronomy Quiz",
            description: "Explore the universe with these fun and factual space questions!",
            category: "Space",
            creator: "QuizMaster",
            questions: [
                { question: "What is the hottest planet in our solar system?", options: ["Mercury", "Venus", "Mars", "Jupiter"], correctAnswer: 1 },
                { question: "Which planet has rings?", options: ["Earth", "Mars", "Saturn", "Uranus"], correctAnswer: 2 },
                { question: "Which galaxy do we live in?", options: ["Andromeda", "Whirlpool", "Milky Way", "Black Eye"], correctAnswer: 2 },
                { question: "Who was the first person in space?", options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Kalpana Chawla"], correctAnswer: 2 },
                { question: "Which planet is red?", options: ["Jupiter", "Mars", "Neptune", "Venus"], correctAnswer: 1 },
                { question: "What is the largest planet?", options: ["Earth", "Mars", "Jupiter", "Saturn"], correctAnswer: 2 },
                { question: "Which is not a dwarf planet?", options: ["Pluto", "Ceres", "Eris", "Neptune"], correctAnswer: 3 },
                { question: "What does NASA stand for?", options: ["National Aero Space Agency", "NASA", "National Aeronautics and Space Administration", "None"], correctAnswer: 2 },
                { question: "What is a black hole?", options: ["Star", "Hole in space", "Gravity region", "Gas cloud"], correctAnswer: 2 },
                { question: "What planet is closest to the Sun?", options: ["Venus", "Earth", "Mercury", "Mars"], correctAnswer: 2 },
                { question: "First man on the Moon?", options: ["Yuri", "Buzz", "Neil", "Elon"], correctAnswer: 2 },
                { question: "Which Indian satellite reached Mars?", options: ["INSAT", "Chandrayaan", "Mangalyaan", "Aryabhata"], correctAnswer: 2 },
                { question: "What is the Sun?", options: ["Planet", "Star", "Comet", "Asteroid"], correctAnswer: 1 },
                { question: "Which planet is icy and blue?", options: ["Uranus", "Mars", "Saturn", "Mercury"], correctAnswer: 0 },
                { question: "ISRO is India’s ___ agency.", options: ["Space", "Defense", "Cyber", "Atomic"], correctAnswer: 0 },
                { question: "Which gas makes stars shine?", options: ["Nitrogen", "Hydrogen", "Oxygen", "Methane"], correctAnswer: 1 },
                { question: "Which planet is tilted on its side?", options: ["Earth", "Jupiter", "Uranus", "Venus"], correctAnswer: 2 },
                { question: "Which Indian woman went to space?", options: ["Kalpana Chawla", "Indira Gandhi", "Sunita Williams", "Saina Nehwal"], correctAnswer: 0 },
                { question: "What is the Moon's gravity compared to Earth?", options: ["Same", "1/2", "1/6", "Double"], correctAnswer: 2 },
                { question: "Which telescope was recently launched by NASA?", options: ["Hubble", "Kepler", "James Webb", "Apollo"], correctAnswer: 2 }
            ]
        }, {
            id: 17,
            title: "Current Affairs Quiz",
            description: "Stay updated! Test your knowledge of recent events & news.",
            category: "Current Affairs",
            creator: "QuizMaster",
            questions: [
                { question: "Who won the Lok Sabha Elections 2024?", options: ["BJP", "Congress", "AAP", "None"], correctAnswer: 0 },
                { question: "India's first AI law was passed in?", options: ["2022", "2023", "2024", "2025"], correctAnswer: 2 },
                { question: "Which country hosted G20 in 2023?", options: ["India", "USA", "UK", "Japan"], correctAnswer: 0 },
                { question: "New Parliament building inaugurated in?", options: ["2022", "2023", "2024", "2021"], correctAnswer: 1 },
                { question: "India’s Chandrayaan-3 landed on?", options: ["Moon", "Mars", "Venus", "None"], correctAnswer: 0 },
                { question: "2024 Cricket T20 World Cup winner?", options: ["India", "Australia", "England", "Pakistan"], correctAnswer: 0 },
                { question: "Which tech CEO visited India in 2023?", options: ["Elon Musk", "Sundar Pichai", "Mark Zuckerberg", "Satya Nadella"], correctAnswer: 0 },
                { question: "Which country launched digital rupee?", options: ["USA", "India", "China", "UK"], correctAnswer: 1 },
                { question: "Which country won Miss World 2024?", options: ["India", "USA", "Venezuela", "France"], correctAnswer: 0 },
                { question: "Apple launched Vision Pro in?", options: ["2022", "2023", "2024", "2025"], correctAnswer: 1 },
                { question: "Which city hosted the BRICS 2024 summit?", options: ["Delhi", "Moscow", "Rio", "Cape Town"], correctAnswer: 1 },
                { question: "India’s 15th President is?", options: ["Ramnath Kovind", "Droupadi Murmu", "Venkaiah Naidu", "Modi"], correctAnswer: 1 },
                { question: "Which country launched Artemis II mission?", options: ["Russia", "India", "USA", "China"], correctAnswer: 2 },
                { question: "Which Indian city topped Smart City Index 2024?", options: ["Mumbai", "Bangalore", "Indore", "Chennai"], correctAnswer: 2 },
                { question: "Who became UK PM in 2024?", options: ["Rishi Sunak", "Keir Starmer", "Boris Johnson", "Jeremy Hunt"], correctAnswer: 1 },
                { question: "Which IPL team won in 2024?", options: ["CSK", "MI", "KKR", "RCB"], correctAnswer: 2 },
                { question: "Which Indian state launched AI classrooms in 2024?", options: ["Kerala", "Karnataka", "Maharashtra", "UP"], correctAnswer: 0 },
                { question: "Which is India’s fastest train (2024)?", options: ["Shatabdi", "Vande Bharat", "Rajdhani", "Duronto"], correctAnswer: 1 },
                { question: "Which social media app was banned in India (2024)?", options: ["Facebook", "TikTok", "Telegram", "Threads"], correctAnswer: 1 },
                { question: "Where were the Olympics 2024 held?", options: ["Tokyo", "Paris", "Los Angeles", "London"], correctAnswer: 1 }
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