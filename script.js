const questions = [
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub>',
        correct: 'Butane',
        options: ['Butane', 'Propane', 'Pentane', 'Hexane'],
        explanation: 'Introduction / Word Root: The longest continuous chain has 4 carbon atoms. The root word for 4 carbons is "but-", and since they are all single bonds, the primary suffix is "-ane". Thus, the name is butane.'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>CH(CH<sub>3</sub>)CH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub>',
        correct: '2-Methylpentane',
        options: ['4-Methylpentane', '2-Methylpentane', 'Hexane', 'Isohexane'],
        explanation: 'Numbering of Carbon Chain (Locant Rule): We number the 5-carbon chain from left to right so that the methyl substituent gets the lowest possible locant (2 instead of 4).'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH(CH<sub>2</sub>CH<sub>3</sub>)CH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub>',
        correct: '4-Ethylheptane',
        options: ['3-Propylhexane', '4-Ethylheptane', '4-Propylheptane', 'Octane'],
        explanation: 'Selection of Parent Chain: The longest continuous carbon chain has 7 carbon atoms (heptane). Don\'t be fooled by the straight line having only 6; the longest path includes the bend.'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>CH<sub>2</sub>CH(CH<sub>3</sub>)CH(CH<sub>2</sub>CH<sub>3</sub>)CH<sub>2</sub>CH<sub>3</sub>',
        correct: '3-Ethyl-4-methylhexane',
        options: ['3-Ethyl-4-methylhexane', '4-Ethyl-3-methylhexane', '3-Methyl-4-ethylhexane', '4-Methyl-3-ethylhexane'],
        explanation: 'Alphabetical Order of Substituents: The substituents are ethyl and methyl. Since "e" comes before "m" alphabetically, the ethyl group is written first in the IUPAC name.'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>C(CH<sub>3</sub>)<sub>2</sub>CH<sub>2</sub>CH(CH<sub>3</sub>)CH<sub>3</sub>',
        correct: '2,2,4-Trimethylpentane',
        options: ['2,4,4-Trimethylpentane', '2,2,4-Trimethylpentane', 'Octane', 'Dimethylhexane'],
        explanation: 'Use of Prefixes (di-, tri-): There are three methyl groups, so we use the prefix "tri-". Locants are 2, 2, and 4 (which is a lower set than 2, 4, 4).'
    },
    {
        type: 'condensed',
        data: 'CH<sub>2</sub>=CHCH<sub>2</sub>CH<sub>3</sub>',
        correct: '1-Butene',
        alternates: ['But-1-ene'],
        options: ['2-Butene', '1-Butene', 'Butane', 'Butyne'],
        explanation: 'Primary Suffix (Type of Bond): The presence of a double bond changes the primary suffix from "-ane" to "-ene". It starts at carbon 1.'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>C&equiv;CCH<sub>3</sub>',
        correct: '2-Butyne',
        alternates: ['But-2-yne'],
        options: ['2-Butyne', '1-Butyne', 'Butene', 'Butane'],
        explanation: 'Naming of Alkynes: A triple bond gets the primary suffix "-yne". Numbering gives the locant 2.'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>CH<sub>2</sub>OH',
        correct: 'Ethanol',
        options: ['Ethane', 'Methanol', 'Ethanol', 'Ethanal'],
        explanation: 'Secondary Suffix (Functional Groups) / Naming Alcohols: The -OH group classifies it as an alcohol. The \'e\' of the primary suffix is dropped, adding "-ol".'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>CHO',
        correct: 'Ethanal',
        options: ['Ethanol', 'Ethanal', 'Propanal', 'Methanal'],
        explanation: 'Naming of Aldehydes: The -CHO group is an aldehyde. It always gets position 1 and uses the suffix "-al".'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>COCH<sub>3</sub>',
        correct: 'Propanone',
        options: ['Butanone', 'Propanal', 'Propanone', 'Ketopropane'],
        explanation: 'Naming of Ketones: The internal C=O group makes it a ketone. The suffix is "-one". The 3-carbon parent is propane, so propanone.'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>CH<sub>2</sub>COOH',
        correct: 'Propanoic acid',
        options: ['Ethanoic acid', 'Propanoic acid', 'Butanoic acid', 'Propanol'],
        explanation: 'Naming of Carboxylic Acids: The -COOH group makes it a carboxylic acid, requiring the suffix "-oic acid". The chain has 3 carbons.'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>CH(Cl)CH<sub>2</sub>CH<sub>3</sub>',
        correct: '2-Chlorobutane',
        options: ['3-Chlorobutane', '2-Chlorobutane', 'Chlorobutane', '1-Chlorobutane'],
        explanation: 'Naming of Alkyl Halides: Halogens are always treated as substituents, not principal functional groups. They use prefixes like "chloro-".'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>CH(OH)CH<sub>2</sub>COOH',
        correct: '3-Hydroxybutanoic acid',
        options: ['2-Hydroxybutanoic acid', '3-Hydroxybutanoic acid', 'Butan-3-ol-1-oic acid', '3-Carboxypropanol'],
        explanation: 'Functional Groups and Their Priority Order: Carboxylic acid has higher priority than alcohol. The alcohol becomes the "hydroxy-" prefix, while the acid provides the "-oic acid" suffix.'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>COCH<sub>2</sub>CHO',
        correct: '3-Oxobutanal',
        options: ['2-Oxobutanal', '3-Oxobutanal', 'Formylpropanone', 'Butanal-3-one'],
        explanation: 'Use of Functional Groups as Prefix and Suffix: Aldehyde (>C=O at end) has higher priority than ketone (>C=O in middle). The ketone is named as the prefix "oxo-".'
    },
    {
        type: 'condensed',
        data: 'HOCH<sub>2</sub>CH<sub>2</sub>OH',
        correct: 'Ethane-1,2-diol',
        alternates: ['1,2-Ethanediol'],
        options: ['Ethanol', 'Ethane-1,2-diol', '1,2-Dihydroxyethane', 'Ethenediol'],
        explanation: 'Compounds with Multiple Functional Groups: With two -OH groups, the suffix is "-diol". The \'e\' in ethane is retained.'
    },
    {
        type: 'smiles',
        data: 'C1CCCC1',
        correct: 'Cyclopentane',
        options: ['Cyclohexane', 'Cyclopentane', 'Pentane', 'Benzene'],
        explanation: 'Naming of Cyclic Compounds (Cycloalkanes): A ring of 5 carbon atoms uses the "cyclo-" prefix before "pentane".'
    },
    {
        type: 'smiles',
        data: 'CC1CCCCC1',
        correct: 'Methylcyclohexane',
        options: ['Methylcyclopentane', 'Toluene', 'Methylcyclohexane', '1-Methylcyclohexane'],
        explanation: 'Cyclic Compounds: The 6-membered ring is the parent (cyclohexane), and the -CH3 is the methyl substituent. The locant "1-" is usually omitted if there\'s only one substituent.'
    },
    {
        type: 'condensed',
        data: 'CH<sub>2</sub>=CH-CH=CH<sub>2</sub>',
        correct: '1,3-Butadiene',
        alternates: ['Buta-1,3-diene'],
        options: ['1,4-Butadiene', '1,3-Butadiene', 'Butene', 'Butadiene'],
        explanation: 'Position of Double Bonds: Two double bonds require the "diene" suffix and locants for both (1 and 3).'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>COOH',
        correct: 'Ethanoic acid',
        options: ['Acetic acid', 'Ethanoic acid', 'Methanoic acid', 'Formic acid'],
        explanation: 'Common Names vs IUPAC Names: While widely known as acetic acid (common name), its systematic IUPAC name based on 2 carbons is ethanoic acid.'
    },
    {
        type: 'smiles',
        data: 'c1ccccc1O',
        correct: 'Phenol',
        options: ['Hydroxybenzene', 'Phenol', 'Cyclohexanol', 'Benzenol'],
        explanation: 'Special Cases and Exceptions in Naming: IUPAC strictly prefers "Phenol" over systematic names like hydroxybenzene for this aromatic alcohol.'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>CH(Br)CH<sub>2</sub>CH<sub>2</sub>OH',
        correct: '3-Bromobutan-1-ol',
        alternates: ['3-Bromo-1-butanol'],
        options: ['2-Bromobutan-4-ol', '3-Bromobutan-1-ol', '3-Bromobutanol', '1-Hydroxy-3-bromobutane'],
        explanation: 'Components of IUPAC Name: Prefix (Bromo) + Root (butan) + Primary Suffix (an) + Secondary Suffix (ol). Alcohol has higher priority, so numbering starts from the right.'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>C(CH<sub>3</sub>)<sub>2</sub>C(CH<sub>3</sub>)<sub>2</sub>CH<sub>3</sub>',
        correct: '2,2,3,3-Tetramethylbutane',
        options: ['2,3-Dimethylhexane', '2,2,3,3-Tetramethylbutane', 'Octane', '2,2-Dimethyl-3,3-dimethylbutane'],
        explanation: 'Use of Hyphens and Commas: Numbers are separated by commas (2,2,3,3). Numbers and words are separated by hyphens (3-Tetramethyl...).'
    },
    {
        type: 'condensed',
        data: 'CH<sub>2</sub>=CH-C&equiv;CH',
        correct: 'But-1-en-3-yne',
        alternates: ['1-Buten-3-yne'],
        options: ['But-3-en-1-yne', 'But-1-en-3-yne', '1-Buten-3-yne', 'Butenyne'],
        explanation: 'Alkenes and Alkynes together: The chain is numbered to give the lowest locant to double/triple bonds. If there is a tie, the double bond gets the lower number. Here, numbering from the left gives the double bond locant 1.'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>CH<sub>2</sub>CN',
        correct: 'Propanenitrile',
        options: ['Ethyl cyanide', 'Propanenitrile', 'Ethanenitrile', 'Cyanoethane'],
        explanation: 'Naming Nitriles: The -CN carbon is included in the parent chain. Three carbons = propane + nitrile = propanenitrile.'
    },
    {
        type: 'condensed',
        data: 'HCOOH',
        correct: 'Methanoic acid',
        options: ['Ethanoic acid', 'Methanoic acid', 'Formic acid', 'Formaldehyde'],
        explanation: 'Word Root (1 Carbon Molecule): A single carbon acid is methanoic acid, though commonly known as formic acid.'
    },
    {
        type: 'smiles',
        data: 'c1ccccc1C(=O)H',
        correct: 'Benzaldehyde',
        options: ['Phenylmethanal', 'Benzaldehyde', 'Phenol', 'Benzoic acid'],
        explanation: 'Aromatic Aldehydes: The IUPAC name for an aldehyde attached directly to a benzene ring is benzaldehyde.'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>CH(NH<sub>2</sub>)CH<sub>3</sub>',
        correct: 'Propan-2-amine',
        alternates: ['2-Propanamine'],
        options: ['Propan-1-amine', 'Propan-2-amine', '2-Aminopropane', 'Isopropylamine'],
        explanation: 'Naming Amines: The amino group (-NH2) gives the suffix "-amine". Located on carbon 2, giving propan-2-amine.'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>OCH<sub>2</sub>CH<sub>3</sub>',
        correct: 'Methoxyethane',
        options: ['Ethoxyethane', 'Methoxyethane', 'Ethyl methyl ether', 'Propanol'],
        explanation: 'Naming Ethers: Ethers are named as alkoxyalkanes. The shorter chain (methoxy) is the prefix, the longer is the parent (ethane).'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>CH<sub>2</sub>CCCH<sub>3</sub>',
        correct: '2-Pentyne', // Made plain text to avoid unparseable HTML if any
        alternates: ['Pent-2-yne'],
        options: ['2-Pentyne', '3-Pentyne', '1-Pentyne', 'Pentene'],
        explanation: 'General Principles: The parent chain is 5 carbons. The alkyne triple bond starts at carbon 2 from the right. So 2-pentyne.'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>CH<sub>2</sub>CH(CH<sub>3</sub>)CH(OH)CH<sub>3</sub>',
        correct: '3-Methylpentan-2-ol',
        alternates: ['3-Methyl-2-pentanol'],
        options: ['3-Methylpentan-2-ol', '2-Hydroxy-3-methylpentane', '3-Methyl-2-pentanol', '4-Methylpentan-2-ol'],
        explanation: 'Priority Rules: Number from right to left so the alcohol (higher priority) gets locant 2, and the methyl gets locant 3.'
    }
];

// Shuffle questions
questions.sort(() => Math.random() - 0.5);

// Shuffle options for each question
questions.forEach(q => {
    q.options.sort(() => Math.random() - 0.5);
});

let currentMode = 'home'; // 'home', 'mcq', 'manual'
let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;
let isAnswered = false;

// DOM Elements
const homeView = document.getElementById('home-view');
const quizView = document.getElementById('quiz-view');
const basicsView = document.getElementById('basics-view');
const modeMcqBtn = document.getElementById('mode-mcq');
const modeManualBtn = document.getElementById('mode-manual');
const modeBasicsBtn = document.getElementById('mode-basics');
const homeBtn = document.getElementById('home-btn');
const homeBtnBasics = document.getElementById('home-btn-basics');

const canvas = document.getElementById('structure-canvas');
const condensedDisplay = document.getElementById('condensed-display');
const optionsContainer = document.getElementById('options-container');
const manualContainer = document.getElementById('manual-container');
const manualInput = document.getElementById('manual-input');

const actionBtn = document.getElementById('action-btn');
const howBtn = document.getElementById('how-btn');
const feedbackContainer = document.getElementById('feedback');
const feedbackMessage = document.getElementById('feedback-message');
const correctAnswerDisplay = document.getElementById('correct-answer-display');
const scoreDisplay = document.getElementById('score');
const explanationBox = document.getElementById('explanation-box');
const explanationText = document.getElementById('explanation-text');

// SmilesDrawer initialization
let smilesDrawer;

function init() {
    // Initialize SmilesDrawer setup
    smilesDrawer = new SmilesDrawer.Drawer({
        width: 400,
        height: 300,
        bondThickness: 2,
        atomVisualization: 'default'
    });

    // Event Listeners for Views
    modeMcqBtn.addEventListener('click', () => startQuiz('mcq'));
    modeManualBtn.addEventListener('click', () => startQuiz('manual'));
    modeBasicsBtn.addEventListener('click', openBasics);

    // Scroll-to-top button logic
    const scrollTopBtn = document.getElementById('scroll-top-btn');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    homeBtn.addEventListener('click', goHome);
    homeBtnBasics.addEventListener('click', goHome);

    actionBtn.addEventListener('click', handleAction);
    howBtn.addEventListener('click', showExplanation);

    // Event Listeners for Manual Input
    manualInput.addEventListener('input', () => {
        if (!isAnswered) {
            actionBtn.disabled = manualInput.value.trim().length === 0;
        }
    });

    manualInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !actionBtn.disabled) {
            handleAction();
        }
    });

    // Set initial home theme
    document.body.classList.add('theme-home');
}

function openBasics() {
    window.scrollTo(0, 0);
    document.body.classList.remove('theme-home');
    homeView.classList.add('hidden');
    quizView.classList.add('hidden');
    basicsView.classList.remove('hidden');
    currentMode = 'basics';

    setTimeout(() => {
        const canvases = document.querySelectorAll('.tutorial-smiles');
        canvases.forEach(canvas => {
            const smiles = canvas.getAttribute('data-smiles');
            if (smiles && !canvas.hasAttribute('data-rendered')) {
                canvas.width = 300;
                canvas.height = 150;
                
                let localDrawer = new SmilesDrawer.Drawer({
                    width: 300,
                    height: 150,
                    bondThickness: 2,
                    atomVisualization: 'default'
                });
                
                SmilesDrawer.parse(smiles, function(tree) {
                    localDrawer.draw(tree, canvas, 'light', false);
                }, function(err) {
                    console.error('Error parsing tutorial smiles:', err);
                });
                canvas.setAttribute('data-rendered', 'true');
            }
        });
    }, 100);
}

function goHome() {
    window.scrollTo(0, 0);
    document.body.classList.add('theme-home');
    homeView.classList.remove('hidden');
    quizView.classList.add('hidden');
    basicsView.classList.add('hidden');
    currentMode = 'home';
}

function startQuiz(mode) {
    window.scrollTo(0, 0);
    currentMode = mode;
    currentQuestionIndex = 0;
    score = 0;
    scoreDisplay.textContent = score;

    // Reshuffle
    questions.sort(() => Math.random() - 0.5);
    questions.forEach(q => {
        q.options.sort(() => Math.random() - 0.5);
    });

    homeView.classList.add('hidden');
    quizView.classList.remove('hidden');
    document.body.classList.remove('theme-home');

    loadQuestion();
}

function loadQuestion() {
    isAnswered = false;
    selectedOption = null;
    actionBtn.textContent = 'Enter';
    actionBtn.disabled = true;
    howBtn.classList.add('hidden');
    
    feedbackContainer.className = 'feedback-container hidden';
    explanationBox.classList.add('hidden');
    
    // Toggle input containers
    if (currentMode === 'mcq') {
        optionsContainer.classList.remove('hidden');
        manualContainer.classList.add('hidden');
    } else {
        optionsContainer.classList.add('hidden');
        manualContainer.classList.remove('hidden');
        manualInput.value = '';
        manualInput.disabled = false;
        setTimeout(() => manualInput.focus(), 100);
    }
    
    const currentQuestion = questions[currentQuestionIndex];
    
    // Render structure depending on type
    if (currentQuestion.type === 'smiles') {
        canvas.classList.remove('hidden');
        condensedDisplay.classList.add('hidden');
        
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        SmilesDrawer.parse(currentQuestion.data, function (tree) {
            smilesDrawer.draw(tree, 'structure-canvas', 'light', false);
        }, function (err) {
            console.error(err);
        });
    } else {
        canvas.classList.add('hidden');
        condensedDisplay.classList.remove('hidden');
        condensedDisplay.innerHTML = currentQuestion.data;
    }

    if (currentMode === 'mcq') {
        // Render options
        optionsContainer.innerHTML = '';
        currentQuestion.options.forEach(option => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerHTML = option; 
            btn.addEventListener('click', () => selectOption(btn, option));
            optionsContainer.appendChild(btn);
        });
    }
}

function selectOption(btnElement, optionText) {
    if (isAnswered || currentMode !== 'mcq') return;

    // Deselect previously selected
    const allOptions = document.querySelectorAll('.option-btn');
    allOptions.forEach(btn => btn.classList.remove('selected'));

    // Select new
    btnElement.classList.add('selected');
    selectedOption = optionText;
    actionBtn.disabled = false;
}

function handleAction() {
    if (!isAnswered) {
        checkAnswer();
    } else {
        nextQuestion();
    }
}

function checkAnswer() {
    const currentQuestion = questions[currentQuestionIndex];
    isAnswered = true;
    
    let isCorrect = false;
    let customExplanationPrefix = '';

    if (currentMode === 'mcq') {
        const allOptions = document.querySelectorAll('.option-btn');
        allOptions.forEach(btn => {
            btn.disabled = true; // Disable further clicking
            if (btn.textContent === currentQuestion.correct) {
                btn.classList.add('correct');
            } else if (btn.textContent === selectedOption && selectedOption !== currentQuestion.correct) {
                btn.classList.add('incorrect');
            }
        });
        isCorrect = (selectedOption === currentQuestion.correct);
    } else {
        manualInput.disabled = true;
        const userInput = manualInput.value.trim();
        const correctNorm = currentQuestion.correct.toLowerCase().replace(/[\s,-]/g, '');
        const userNorm = userInput.toLowerCase().replace(/[\s,-]/g, '');
        
        let isStrictMatch = (userInput.toLowerCase() === currentQuestion.correct.toLowerCase());
        let isLenientMatch = (correctNorm === userNorm);

        // Check against alternates (newer vs older IUPAC conventions)
        if (currentQuestion.alternates) {
            currentQuestion.alternates.forEach(alt => {
                const altNorm = alt.toLowerCase().replace(/[\s,-]/g, '');
                if (userInput.toLowerCase() === alt.toLowerCase()) isStrictMatch = true;
                if (userNorm === altNorm) isLenientMatch = true;
            });
        }

        isCorrect = isStrictMatch;

        if (!isCorrect) {
            // Rudimentary Typo Analysis
            if (isLenientMatch) {
                customExplanationPrefix = `<strong>Format Mistake:</strong> You typed exactly the right components, but watch your hyphens and commas. Remember IUPAC formats!<br><br>`;
            } else if ((userNorm.includes(correctNorm) || correctNorm.includes(userNorm)) && userNorm.length > Math.min(5, correctNorm.length / 2)) {
                customExplanationPrefix = `<strong>Partial Match:</strong> Your answer "<strong>${userInput}</strong>" was very close to "<strong>${currentQuestion.correct}</strong>". You might have made a small typo, missed a prefix/suffix, or miscounted a locant number.<br><br>`;
            } else {
                customExplanationPrefix = `<strong>Incorrect Name:</strong> You typed "<strong>${userInput}</strong>", but the correct name is "<strong>${currentQuestion.correct}</strong>". Look at the rule below to see where you went wrong.<br><br>`;
            }
        }
    }

    feedbackContainer.classList.remove('hidden');
    howBtn.classList.remove('hidden');

    if (isCorrect) {
        score++;
        scoreDisplay.textContent = score;
        feedbackContainer.className = 'feedback-container success';
        feedbackMessage.textContent = 'Correct!';
        correctAnswerDisplay.textContent = '';
    } else {
        feedbackContainer.className = 'feedback-container error';
        feedbackMessage.textContent = 'Incorrect!';
        correctAnswerDisplay.textContent = `The correct answer was: ${currentQuestion.correct}`;
    }

    // Attach custom prefix to explanation text for manual mode
    if (currentMode === 'manual' && !isCorrect) {
        explanationText.innerHTML = customExplanationPrefix + currentQuestion.explanation;
    } else {
        explanationText.innerHTML = currentQuestion.explanation;
    }

    // Change Enter button to Next Question
    actionBtn.textContent = 'Next Question';
}

function showExplanation() {
    explanationBox.classList.remove('hidden');
}

function nextQuestion() {
    currentQuestionIndex++;
    
    // If we've reached the end of the question list, shuffle and loop back
    if (currentQuestionIndex >= questions.length) {
        currentQuestionIndex = 0;
        questions.sort(() => Math.random() - 0.5);
        questions.forEach(q => {
            q.options.sort(() => Math.random() - 0.5);
        });
    }

    // Clear canvas
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    loadQuestion();
}

// Start the app when DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);
