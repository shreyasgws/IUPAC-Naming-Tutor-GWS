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
        data: 'O=CC1=CC=CC=C1',
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

// Mock Test Questions (Plus One)
const mockTestQuestions = [
    // Section A – Basic Naming (1 mark each)
    { section: 'A', marks: 1, data: 'CH₃–CH₂–CH₃', correct: 'Propane', options: ['Propane', 'Ethane', 'Butane', 'Methane'] },
    { section: 'A', marks: 1, data: 'CH₃–CH(CH₃)–CH₃', correct: '2-Methylpropane', options: ['2-Methylpropane', 'Methylpropane', 'Propane', 'Butane'] },
    { section: 'A', marks: 1, data: 'CH₂=CH–CH₃', correct: 'Propene', options: ['Propene', 'Prop-1-ene', 'Prop-2-ene', 'Propylene'] },
    { section: 'A', marks: 1, data: 'CH₃–CH₂–OH', correct: 'Ethanol', options: ['Ethanol', 'Methanol', 'Propanol', 'Ethane'] },
    { section: 'A', marks: 1, data: 'CH₃–CHO', correct: 'Ethanal', options: ['Ethanal', 'Acetaldehyde', 'Formaldehyde', 'Propenal'] },
    // Section B – Intermediate (2 marks each)
    { section: 'B', marks: 2, data: 'CH₃–CH₂–CH₂–CH₃', correct: 'Butane', options: ['Butane', 'Propane', 'Pentane', 'Hexane'] },
    { section: 'B', marks: 2, data: 'CH₃–CH(CH₃)–CH₂–CH₃', correct: '2-Methylbutane', options: ['2-Methylbutane', '3-Methylbutane', 'Methylbutane', 'Pentane'] },
    { section: 'B', marks: 2, data: 'CH₃–CH₂–CO–CH₃', correct: 'Butan-2-one', options: ['Butan-2-one', 'Butanone', 'Methyl ethyl ketone', 'Propanone'] },
    { section: 'B', marks: 2, data: 'CH₃–CH₂–CH₂–CHO', correct: 'Butanal', options: ['Butanal', 'Propanal', 'Butanaldehyde', 'Pentanal'] },
    { section: 'B', marks: 2, data: 'CH₃–CH₂–CH₂–COOH', correct: 'Butanoic acid', options: ['Butanoic acid', 'Propanoic acid', 'Pentanoic acid', 'Butyric acid'] },
    // Section C – Functional Groups & Priority (3 marks each)
    { section: 'C', marks: 3, data: 'HO–CH₂–CH₂–CHO', correct: '2-Hydroxyethanal', options: ['2-Hydroxyethanal', '3-Hydroxypropanal', 'Hydroxyacetaldehyde', 'Ethane-1-ol-2-al'] },
    { section: 'C', marks: 3, data: 'CH₃–CO–CH₂–CH₂–OH', correct: '4-Hydroxybutan-2-one', options: ['4-Hydroxybutan-2-one', '3-Hydroxybutan-2-one', 'Hydroxybutanone', '4-Butanol-2-one'] },
    { section: 'C', marks: 3, data: 'CH₃–CH(Cl)–CH₂–OH', correct: '2-Chloropropan-1-ol', options: ['2-Chloropropan-1-ol', '3-Chloropropan-1-ol', 'Chloropropanol', '1-Chloropropan-2-ol'], alternatives: ['3-Chloropropan-1-ol', '1-Chloropropan-2-ol'] },
    { section: 'C', marks: 3, data: 'HO–CH₂–CH(NH₂)–COOH', correct: '2-Amino-3-hydroxypropanoic acid', options: ['2-Amino-3-hydroxypropanoic acid', 'Aminohydroxypropanoic acid', 'Serine', '3-Amino-2-hydroxypropanoic acid'], alternatives: ['Serine'] },
    // Section D – Multiple Bonds & Substituents (3 marks each)
    { section: 'D', marks: 3, data: 'CH₂=CH–CH=CH₂', correct: 'Buta-1,3-diene', options: ['Buta-1,3-diene', 'Butadiene', '1,3-Butadiene', 'But-1,3-diene'], alternatives: ['Butadiene', '1,3-Butadiene', 'But-1,3-diene'] },
    { section: 'D', marks: 3, data: 'CH₂=CH–CH(CH₃)–CH=CH₂', correct: '3-Methylpenta-1,4-diene', options: ['3-Methylpenta-1,4-diene', '4-Methylpenta-1,3-diene', 'Methylbutadiene', 'Penta-1,4-diene'] },
    { section: 'D', marks: 3, data: 'CH≡C–CH₂–CH₃', correct: 'But-1-yne', options: ['But-1-yne', 'Butyne', '1-Butyne', 'Ethylacetylene'], alternatives: ['Butyne', '1-Butyne'] },
    { section: 'D', marks: 3, data: 'CH₂=CH–C≡CH', correct: 'But-1-en-3-yne', options: ['But-1-en-3-yne', 'Butenyne', 'Vinylacetylene', '1-Buten-3-yne'], alternatives: ['Butenyne', '1-Buten-3-yne'] },
    // Section E – Cyclic & Aromatic (4 marks each)
    { section: 'E', marks: 4, data: 'Cyclohexane with one methyl group', correct: 'Methylcyclohexane', options: ['Methylcyclohexane', 'Cyclohexylmethane', '1-Methylcyclohexane', 'Hexylmethane'], alternatives: ['1-Methylcyclohexane'] },
    { section: 'E', marks: 4, data: 'Benzene with two methyl groups at 1,3 position', correct: 'm-Xylene', options: ['m-Xylene', 'p-Xylene', 'o-Xylene', '1,3-Dimethylbenzene'], alternatives: ['1,3-Dimethylbenzene'] },
    { section: 'E', marks: 4, data: 'Benzene with –OH and –CH₃ at 1,2 position', correct: '2-Methylphenol', options: ['2-Methylphenol', 'o-Cresol', 'Methylphenol', '1-Hydroxy-2-methylbenzene'], alternatives: ['o-Cresol'] },
    { section: 'E', marks: 4, data: 'C₆H₅–CH₂–Cl', correct: 'Benzyl chloride', options: ['Benzyl chloride', 'Phenyl chloride', 'Chlorobenzene', 'Chloromethylbenzene'] },
    // Section F – Tricky / Special Cases (5 marks each)
    { section: 'F', marks: 5, data: 'CH₃–CH(CH₃)–CH(CH₃)–CH₃', correct: '2,3-Dimethylbutane', options: ['2,3-Dimethylbutane', '2-Methyl-3-methylbutane', 'Dimethylbutane', 'Tetramethylethane'] },
    { section: 'F', marks: 5, data: 'CH₃–CH₂–CH(CH₃)–CH₂–CH₃', correct: '3-Methylpentane', options: ['3-Methylpentane', '2-Methylpentane', 'Methylpentane', 'Isohexane'] },
    { section: 'F', marks: 5, data: 'CH₃–CO–CH₂–CHO', correct: '3-Oxobutanal', options: ['3-Oxobutanal', '2-Oxobutanal', 'Acetoacetaldehyde', 'Ketoacetaldehyde'] },
    { section: 'F', marks: 5, data: 'CH₃–CH(CH₃)–CH₂–CH₂–OH', correct: '3-Methylbutan-1-ol', options: ['3-Methylbutan-1-ol', '4-Methylbutan-1-ol', 'Isobutanol', '2-Methylpropan-1-ol'], alternatives: ['4-Methylbutan-1-ol', 'Isobutanol'] }
];

let mockCurrentIndex = 0;
let mockScore = 0;
let mockAnswered = false;
let mockSelectedOption = null;
let mockTestResults = [];

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

// Mock Test DOM Elements
const qaView = document.getElementById('qa-view');
const mockTestView = document.getElementById('mock-test-view');
const mockResultsView = document.getElementById('mock-results-view');
const backToBasicsQa = document.getElementById('back-to-basics-qa');
const backToBasicsMock = document.getElementById('back-to-basics-mock');
const mockScoreDisplay = document.getElementById('mock-score');
const mockTotalDisplay = document.getElementById('mock-total');
const mockProgress = document.getElementById('mock-progress');
const mockStructureCanvas = document.getElementById('mock-structure-canvas');
const mockQuestionText = document.getElementById('mock-question-text');
const mockOptionsContainer = document.getElementById('mock-options-container');
const mockActionBtn = document.getElementById('mock-action-btn');
const mockNextBtn = document.getElementById('mock-next-btn');
const mockFeedback = document.getElementById('mock-feedback');
const resultsContainer = document.getElementById('results-container');
const retryMockBtn = document.getElementById('retry-mock-btn');
const revisionNotesView = document.getElementById('revision-notes-view');
const backToBasicsRevision = document.getElementById('back-to-basics-revision');

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

    // Cursor glow functionality
    const cursorGlow = document.getElementById('cursor-glow');
    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
        cursorGlow.style.opacity = '1';
    });
    document.addEventListener('mouseleave', () => {
        cursorGlow.style.opacity = '0';
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

    // Revision and Mock Test button listeners
    const revisionMockBtn = document.getElementById('revision-mock-btn');
    const revisionMockContent = document.getElementById('revision-mock-content');
    const shortNotesBtn = document.getElementById('short-notes-btn');
    const mockTestBtn = document.getElementById('mock-test-btn');
    const mockTestOptions = document.getElementById('mock-test-options');
    const questionsAnswerBtn = document.getElementById('questions-answer-btn');
    const mcqTestBtn = document.getElementById('mcq-test-btn');

    revisionMockBtn.addEventListener('click', () => {
        revisionMockContent.classList.toggle('hidden');
    });

    shortNotesBtn.addEventListener('click', () => {
        openRevisionNotes();
    });

    mockTestBtn.addEventListener('click', () => {
        mockTestBtn.classList.toggle('active');
        mockTestOptions.classList.toggle('hidden');
    });

    questionsAnswerBtn.addEventListener('click', () => {
        openQAView();
    });

    backToBasicsRevision.addEventListener('click', openBasics);

    mcqTestBtn.addEventListener('click', () => {
        startMockTest();
    });

    // Mock Test navigation buttons
    backToBasicsQa.addEventListener('click', openBasics);
    backToBasicsMock.addEventListener('click', openBasics);
    retryMockBtn.addEventListener('click', startMockTest);
    
    mockActionBtn.addEventListener('click', handleMockAnswer);
    mockNextBtn.addEventListener('click', nextMockQuestion);
}

function openBasics() {
    window.scrollTo(0, 0);
    document.body.classList.remove('theme-home');
    homeView.classList.add('hidden');
    quizView.classList.add('hidden');
    basicsView.classList.remove('hidden');
    currentMode = 'basics';

    setTimeout(() => {
        renderTutorialCanvases();
    }, 150);
}

function renderTutorialCanvases() {
    const canvases = document.querySelectorAll('.tutorial-smiles');
    canvases.forEach(canvas => {
        const smiles = canvas.getAttribute('data-smiles');
        if (smiles) {
            canvas.width = 280;
            canvas.height = 100;
            
            let localDrawer = new SmilesDrawer.Drawer({
                width: 280,
                height: 100,
                bondThickness: 2,
                atomVisualization: 'default'
            });
            
            SmilesDrawer.parse(smiles, function(tree) {
                localDrawer.draw(tree, canvas, 'light', false);
            }, function(err) {
                console.error('Error parsing tutorial smiles:', err);
            });
        }
    });
}

function goHome() {
    window.scrollTo(0, 0);
    document.body.classList.add('theme-home');
    homeView.classList.remove('hidden');
    quizView.classList.add('hidden');
    basicsView.classList.add('hidden');
    qaView.classList.add('hidden');
    mockTestView.classList.add('hidden');
    mockResultsView.classList.add('hidden');
    revisionNotesView.classList.add('hidden');
    currentMode = 'home';
}

function openQAView() {
    window.scrollTo(0, 0);
    document.body.classList.remove('theme-home');
    homeView.classList.add('hidden');
    basicsView.classList.add('hidden');
    quizView.classList.add('hidden');
    qaView.classList.remove('hidden');
    mockTestView.classList.add('hidden');
    mockResultsView.classList.add('hidden');
    revisionNotesView.classList.add('hidden');

    renderQA();
}

function openRevisionNotes() {
    window.scrollTo(0, 0);
    document.body.classList.remove('theme-home');
    homeView.classList.add('hidden');
    basicsView.classList.add('hidden');
    quizView.classList.add('hidden');
    qaView.classList.add('hidden');
    mockTestView.classList.add('hidden');
    mockResultsView.classList.add('hidden');
    revisionNotesView.classList.remove('hidden');

    renderRevisionNotes();
}

function renderRevisionNotes() {
    const container = document.getElementById('revision-notes-container');
    container.innerHTML = `
        <div class="revision-section">
            <h3>🔹 1. BASIC STRUCTURE</h3>
            <p>👉 Prefix + Root + Primary Suffix + Secondary Suffix</p>
            <div class="revision-example">Example: 3-Methylbutan-1-ol</div>
        </div>

        <div class="revision-section">
            <h3>🔹 2. ROOT WORD (No. of Carbons)</h3>
            <table class="revision-table">
                <tr><th>C</th><th>Root</th></tr>
                <tr><td>1</td><td>meth</td></tr>
                <tr><td>2</td><td>eth</td></tr>
                <tr><td>3</td><td>prop</td></tr>
                <tr><td>4</td><td>but</td></tr>
                <tr><td>5</td><td>pent</td></tr>
                <tr><td>6</td><td>hex</td></tr>
            </table>
        </div>

        <div class="revision-section">
            <h3>🔹 3. PRIMARY SUFFIX (Bonds)</h3>
            <table class="revision-table">
                <tr><th>Bond</th><th>Suffix</th></tr>
                <tr><td>Single</td><td>-ane</td></tr>
                <tr><td>Double</td><td>-ene</td></tr>
                <tr><td>Triple</td><td>-yne</td></tr>
            </table>
        </div>

        <div class="revision-section">
            <h3>🔹 4. SECONDARY SUFFIX (Functional Group)</h3>
            <table class="revision-table">
                <tr><th>Group</th><th>Suffix</th></tr>
                <tr><td>–COOH</td><td>-oic acid</td></tr>
                <tr><td>–CHO</td><td>-al</td></tr>
                <tr><td>>C=O</td><td>-one</td></tr>
                <tr><td>–OH</td><td>-ol</td></tr>
                <tr><td>–NH₂</td><td>-amine</td></tr>
            </table>
        </div>

        <div class="revision-section">
            <h3>🔹 5. PREFIXES (Important)</h3>
            <table class="revision-table">
                <tr><th>Group</th><th>Prefix</th></tr>
                <tr><td>–OH</td><td>hydroxy</td></tr>
                <tr><td>>C=O</td><td>oxo</td></tr>
                <tr><td>–CHO</td><td>formyl</td></tr>
                <tr><td>–NH₂</td><td>amino</td></tr>
                <tr><td>–Cl</td><td>chloro</td></tr>
                <tr><td>–NO₂</td><td>nitro</td></tr>
                <tr><td>–OR</td><td>alkoxy</td></tr>
            </table>
        </div>

        <div class="revision-section">
            <h3>🔹 6. PRIORITY ORDER (🔥 MUST MEMORIZE)</h3>
            <div class="revision-highlight">
                👉 COOH > CHO > CO > OH > NH₂ > C=C > X
            </div>
        </div>

        <div class="revision-section">
            <h3>🔹 7. CORE STEPS</h3>
            <ol>
                <li>Longest chain</li>
                <li>Include functional group</li>
                <li>Number chain (lowest locant)</li>
                <li>Identify substituents</li>
                <li>Arrange alphabetically</li>
                <li>Add suffix</li>
            </ol>
        </div>

        <div class="revision-section">
            <h3>🔹 8. LOWEST LOCANT RULE</h3>
            <p>👉 Compare full set:</p>
            <ul>
                <li>✔ 2,3,4 < 3,4,5</li>
                <li>✔ 2,4 < 3,5</li>
            </ul>
        </div>

        <div class="revision-section">
            <h3>🔹 9. MULTIPLE BONDS</h3>
            <table class="revision-table">
                <tr><th>Bonds</th><th>Name</th></tr>
                <tr><td>2 double</td><td>diene</td></tr>
                <tr><td>3 double</td><td>triene</td></tr>
                <tr><td>2 triple</td><td>diyne</td></tr>
            </table>
            <div class="revision-example">Example: CH₂=CH–CH=CH₂ → Buta-1,3-diene</div>
        </div>

        <div class="revision-section">
            <h3>🔹 10. PREFIX ORDER</h3>
            <p>👉 Alphabetical (ignore di-, tri-)</p>
            <ul>
                <li>✔ ethyl before methyl</li>
                <li>✔ chloro before methyl</li>
            </ul>
        </div>

        <div class="revision-section">
            <h3>🔹 11. SPECIAL CASES</h3>
            <ul>
                <li>✔ Functional group priority → decides suffix + numbering</li>
                <li>✔ Double vs triple → double bond gets lower number</li>
                <li>✔ Same substituents → di-, tri-</li>
                <li>✔ Complex substituent → use brackets</li>
            </ul>
            <div class="revision-example">Example: 2-(Propan-2-yl)propane</div>
        </div>

        <div class="revision-section">
            <h3>🔹 12. CYCLIC COMPOUNDS</h3>
            <p>👉 Add cyclo-</p>
            <ul>
                <li>✔ Methylcyclohexane</li>
                <li>✔ 1,2-dimethylcyclohexane</li>
            </ul>
        </div>

        <div class="revision-section">
            <h3>🔹 13. BENZENE RULES</h3>
            <ul>
                <li><strong>Basic:</strong> Benzene</li>
                <li><strong>One substituent:</strong> Methylbenzene</li>
                <li><strong>Two substituents:</strong></li>
            </ul>
            <table class="revision-table">
                <tr><th>Position</th><th>Name</th></tr>
                <tr><td>1,2</td><td>ortho (o-)</td></tr>
                <tr><td>1,3</td><td>meta (m-)</td></tr>
                <tr><td>1,4</td><td>para (p-)</td></tr>
            </table>
            <ul>
                <li><strong>3+ substituents:</strong> Use numbers only</li>
                <li>✔ 1,3,5-trimethylbenzene</li>
            </ul>
        </div>

        <div class="revision-section">
            <h3>🔹 14. PHENYL vs BENZYL</h3>
            <table class="revision-table">
                <tr><th>Group</th><th>Name</th></tr>
                <tr><td>C₆H₅–</td><td>phenyl</td></tr>
                <tr><td>C₆H₅–CH₂–</td><td>benzyl</td></tr>
            </table>
        </div>

        <div class="revision-section">
            <h3>🔹 15. ETHER NAMING</h3>
            <p>👉 Smaller group = alkoxy</p>
            <div class="revision-example">✔ CH₃–O–C₂H₅ → Methoxyethane</div>
        </div>

        <div class="revision-section">
            <h3>🔹 16. COMMON → IUPAC</h3>
            <table class="revision-table">
                <tr><th>Common</th><th>IUPAC</th></tr>
                <tr><td>Isobutane</td><td>2-Methylpropane</td></tr>
                <tr><td>Acetone</td><td>Propanone</td></tr>
                <tr><td>Acetic acid</td><td>Ethanoic acid</td></tr>
            </table>
        </div>

        <div class="revision-section">
            <h3>🔹 17. FORMAT RULES</h3>
            <ul>
                <li>✔ Comma → between numbers</li>
                <li>✔ Hyphen → number & word</li>
                <li>✔ 2,3-dimethylbutane</li>
                <li>❌ 2 3 dimethyl butane</li>
            </ul>
        </div>

        <div class="revision-section">
            <h3>⚡ FINAL 5-SECOND CHECK</h3>
            <div class="revision-check">
                <p>Before writing answer:</p>
                <ul>
                    <li>✔ Correct chain?</li>
                    <li>✔ Correct numbering?</li>
                    <li>✔ Priority followed?</li>
                    <li>✔ Alphabetical order?</li>
                    <li>✔ Format correct?</li>
                </ul>
            </div>
        </div>
    `;
}

function renderQA() {
    const container = document.getElementById('qa-container');
    container.innerHTML = '';

    // Questions section
    const questionsDiv = document.createElement('div');
    questionsDiv.className = 'qa-questions-only';
    questionsDiv.innerHTML = '<h2>📝 Questions</h2>';

    const sections = {
        'A': { title: 'Section A – Basic Naming (1 mark each)', questions: [] },
        'B': { title: 'Section B – Intermediate (2 marks each)', questions: [] },
        'C': { title: 'Section C – Functional Groups & Priority (3 marks each)', questions: [] },
        'D': { title: 'Section D – Multiple Bonds & Substituents (3 marks each)', questions: [] },
        'E': { title: 'Section E – Cyclic & Aromatic (4 marks each)', questions: [] },
        'F': { title: 'Section F – Tricky / Special Cases (5 marks each)', questions: [] }
    };

    mockTestQuestions.forEach(q => {
        sections[q.section].questions.push(q);
    });

    let qNum = 1;
    for (const [section, data] of Object.entries(sections)) {
        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'qa-question-section';
        sectionDiv.innerHTML = `<h3>${data.title}</h3>`;

        data.questions.forEach(q => {
            const qDiv = document.createElement('div');
            qDiv.className = 'qa-question-row';
            qDiv.innerHTML = `<span class="qa-num">${qNum}.</span><span class="qa-text">${q.data}</span>`;
            sectionDiv.appendChild(qDiv);
            qNum++;
        });

        questionsDiv.appendChild(sectionDiv);
    }

    container.appendChild(questionsDiv);

    // Answers section
    const answersDiv = document.createElement('div');
    answersDiv.className = 'qa-answers-section';
    answersDiv.innerHTML = '<h2>✅ Answer Key</h2>';

    for (const [section, data] of Object.entries(sections)) {
        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'qa-section';
        sectionDiv.innerHTML = `<h3>${data.title.replace('–', '– Answers:')}</h3>`;

        data.questions.forEach(q => {
            const qDiv = document.createElement('div');
            qDiv.className = 'qa-answer-row';
            let displayAnswer = q.correct;
            if (q.alternatives) {
                displayAnswer = q.correct + ' / ' + q.alternatives.join(' / ');
            }
            qDiv.innerHTML = `<span class="qa-question-text">${q.data}</span><span class="qa-answer">${displayAnswer}</span>`;
            sectionDiv.appendChild(qDiv);
        });

        answersDiv.appendChild(sectionDiv);
    }

    container.appendChild(answersDiv);
}

function startMockTest() {
    window.scrollTo(0, 0);
    document.body.classList.remove('theme-home');
    homeView.classList.add('hidden');
    basicsView.classList.add('hidden');
    quizView.classList.add('hidden');
    qaView.classList.add('hidden');
    mockTestView.classList.remove('hidden');
    mockResultsView.classList.add('hidden');

    mockCurrentIndex = 0;
    mockScore = 0;
    mockAnswered = false;
    mockSelectedOption = null;
    mockTestResults = [];

    // Shuffle questions within each section
    const sections = ['A', 'B', 'C', 'D', 'E', 'F'];
    const shuffledBySection = {};
    sections.forEach(sec => {
        const sectionQuestions = mockTestQuestions.filter(q => q.section === sec);
        sectionQuestions.sort(() => Math.random() - 0.5);
        shuffledBySection[sec] = sectionQuestions;
    });

    // Rebuild mockTestQuestions in shuffled order
    mockTestQuestions.length = 0;
    sections.forEach(sec => {
        shuffledBySection[sec].forEach(q => mockTestQuestions.push(q));
    });

    mockTestQuestions.forEach(q => {
        q.options.sort(() => Math.random() - 0.5);
    });

    renderMockQuestion();
}

function renderMockQuestion() {
    const q = mockTestQuestions[mockCurrentIndex];
    
    mockScoreDisplay.textContent = mockScore;
    mockTotalDisplay.textContent = mockCurrentIndex + 1;

    // Render progress dots
    mockProgress.innerHTML = '';
    for (let i = 0; i < mockTestQuestions.length; i++) {
        const dot = document.createElement('div');
        dot.className = 'progress-dot';
        if (i === mockCurrentIndex) dot.classList.add('current');
        if (mockTestResults[i] === true) dot.classList.add('correct');
        if (mockTestResults[i] === false) dot.classList.add('wrong');
        mockProgress.appendChild(dot);
    }

    // Render question text
    mockQuestionText.textContent = q.data;

    // Draw structure if not text-based
    if (!q.data.includes('with') && !q.data.includes('Cyclo') && !q.data.includes('Benzene') && !q.data.includes('C₆')) {
        const smiles = convertToSmiles(q.data);
        if (smiles) {
            mockStructureCanvas.width = 400;
            mockStructureCanvas.height = 300;
            let mockDrawer = new SmilesDrawer.Drawer({
                width: 400,
                height: 300,
                bondThickness: 2,
                atomVisualization: 'default'
            });
            SmilesDrawer.parse(smiles, function(tree) {
                mockDrawer.draw(tree, mockStructureCanvas, 'light', false);
            }, function(err) {
                console.error('Error parsing SMILES:', err);
            });
        }
    }

    // Render options
    mockOptionsContainer.innerHTML = '';
    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt;
        btn.addEventListener('click', () => selectMockOption(opt, btn));
        mockOptionsContainer.appendChild(btn);
    });

    mockActionBtn.disabled = true;
    mockNextBtn.classList.add('hidden');
    mockFeedback.classList.add('hidden');
    mockAnswered = false;
    mockSelectedOption = null;
}

function convertToSmiles(data) {
    const map = {
        'CH₃–CH₂–CH₃': 'CCC',
        'CH₃–CH(CH₃)–CH₃': 'CC(C)C',
        'CH₂=CH–CH₃': 'C=CC',
        'CH₃–CH₂–OH': 'CCO',
        'CH₃–CHO': 'CC=O',
        'CH₃–CH₂–CH₂–CH₃': 'CCCC',
        'CH₃–CH(CH₃)–CH₂–CH₃': 'CCC(C)C',
        'CH₃–CH₂–CO–CH₃': 'CCC(=O)C',
        'CH₃–CH₂–CH₂–CHO': 'CCCC=O',
        'CH₃–CH₂–CH₂–COOH': 'CCCC(=O)O',
        'HO–CH₂–CH₂–CHO': 'OCC=O',
        'CH₃–CO–CH₂–CH₂–OH': 'CC(=O)CCO',
        'CH₃–CH(Cl)–CH₂–OH': 'CC(Cl)CO',
        'HO–CH₂–CH(NH₂)–COOH': 'NCC(O)CO',
        'CH₂=CH–CH=CH₂': 'C=CC=C',
        'CH₂=CH–CH(CH₃)–CH=CH₂': 'C=CC(C)C=C',
        'CH≡C–CH₂–CH₃': 'C#CCCC',
        'CH₂=CH–C≡CH': 'C=CC#C',
        'CH₃–CH(CH₃)–CH(CH₃)–CH₃': 'CC(C)C(C)C',
        'CH₃–CH₂–CH(CH₃)–CH₂–CH₃': 'CCC(C)CC',
        'CH₃–CO–CH₂–CHO': 'CC(=O)CC=O',
        'CH₃–CH(CH₃)–CH₂–CH₂–OH': 'CC(C)CCO'
    };
    return map[data] || null;
}

function selectMockOption(option, btn) {
    if (mockAnswered) return;
    mockSelectedOption = option;
    mockActionBtn.disabled = false;
    
    document.querySelectorAll('#mock-options-container .option-btn').forEach(b => {
        b.style.background = '';
        b.style.borderColor = '';
    });
    btn.style.background = '#e0e7ff';
    btn.style.borderColor = '#667eea';
}

function handleMockAnswer() {
    if (!mockSelectedOption || mockAnswered) return;
    
    const q = mockTestQuestions[mockCurrentIndex];
    const isCorrect = mockSelectedOption === q.correct || 
        (q.alternatives && q.alternatives.includes(mockSelectedOption));
    mockAnswered = true;

    if (isCorrect) {
        mockScore += q.marks;
        mockScoreDisplay.textContent = mockScore;
        mockTestResults[mockCurrentIndex] = true;
        mockFeedback.className = 'feedback correct';
        mockFeedback.innerHTML = '<span>✓ Correct! (+' + q.marks + ' marks)</span>';
    } else {
        mockTestResults[mockCurrentIndex] = false;
        mockFeedback.className = 'feedback wrong';
        mockFeedback.innerHTML = '<span>✗ Incorrect. The correct answer is: ' + q.correct + '</span>';
    }
    mockFeedback.classList.remove('hidden');

    document.querySelectorAll('#mock-options-container .option-btn').forEach(btn => {
        btn.disabled = true;
        const isCorrectOption = btn.textContent === q.correct || (q.alternatives && q.alternatives.includes(btn.textContent));
        if (isCorrectOption) {
            btn.style.background = '#d1fae5';
            btn.style.borderColor = '#10B981';
        }
        if (btn.textContent === mockSelectedOption && !isCorrect) {
            btn.style.background = '#fee2e2';
            btn.style.borderColor = '#ef4444';
        }
    });

    mockActionBtn.classList.add('hidden');
    mockNextBtn.classList.remove('hidden');
}

function nextMockQuestion() {
    mockCurrentIndex++;
    if (mockCurrentIndex >= mockTestQuestions.length) {
        showMockResults();
    } else {
        mockActionBtn.classList.remove('hidden');
        renderMockQuestion();
    }
}

function showMockResults() {
    mockTestView.classList.add('hidden');
    mockResultsView.classList.remove('hidden');

    const totalMarks = mockTestQuestions.reduce((sum, q) => sum + q.marks, 0);
    const percentage = (mockScore / totalMarks) * 100;

    let message, messageClass;
    if (percentage >= 90) {
        message = '🔥 Excellent (full concept clarity)';
        messageClass = 'excellent';
    } else if (percentage >= 65) {
        message = '👍 Good (revise special cases)';
        messageClass = 'good';
    } else if (percentage >= 45) {
        message = '⚠️ Need more practice';
        messageClass = 'needs-practice';
    } else {
        message = '❗ Relearn basics';
        messageClass = 'relearn';
    }

    resultsContainer.innerHTML = `
        <div class="results-score">${mockScore} / ${totalMarks}</div>
        <div class="results-message ${messageClass}">${message}</div>
        <div class="results-breakdown">
            ${mockTestQuestions.map((q, i) => {
                let correctDisplay = q.correct;
                if (q.alternatives) {
                    correctDisplay = q.correct + ' / ' + q.alternatives.join(' / ');
                }
                return `
                <div class="results-breakdown-item">
                    <span>${q.data}</span>
                    <span>${mockTestResults[i] ? '✓' : '✗'} ${correctDisplay}</span>
                </div>
            `}).join('')}
        </div>
    `;
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
            smilesDrawer.draw(tree, canvas, 'light', false);
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
