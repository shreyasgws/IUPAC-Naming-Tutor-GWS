const questions = [
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub>',
        correct: 'Butane',
        options: ['Butane', 'Propane', 'Pentane', 'Hexane'],
        explanation: 'Introduction / Word Root: The longest continuous chain has 4 carbon atoms. The root word for 4 carbons is "but-", and since they are all single bonds, the primary suffix is "-ane". Thus, the name is butane.',
        difficulty: 'Easy'
    },
    {
        type: 'smiles',
        data: 'C1CCCC1',
        correct: 'Cyclopentane',
        options: ['Cyclohexane', 'Cyclopentane', 'Pentane', 'Benzene'],
        explanation: 'Naming of Cyclic Compounds (Cycloalkanes): A ring of 5 carbon atoms uses the "cyclo-" prefix before "pentane".',
        difficulty: 'Easy'
    },
    {
        type: 'smiles',
        data: 'c1ccccc1O',
        correct: 'Phenol',
        alternates: ['Hydroxybenzene'],
        options: ['Phenol', 'Aniline', 'Cyclohexanol', 'Benzenol'],
        explanation: 'Special Cases and Exceptions in Naming: IUPAC strictly prefers "Phenol" over systematic names like hydroxybenzene for this aromatic alcohol.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>CH(Br)CH<sub>2</sub>CH<sub>2</sub>OH',
        correct: '3-Bromobutan-1-ol',
        alternates: ['3-Bromo-1-butanol'],
        options: ['2-Bromobutan-4-ol', '3-Bromobutan-1-ol', '3-Bromobutanol', '4-Bromobutanol'],
        explanation: 'Components of IUPAC Name: Prefix (Bromo) + Root (butan) + Primary Suffix (an) + Secondary Suffix (ol). Alcohol has higher priority, so numbering starts from the right.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>C(CH<sub>3</sub>)<sub>2</sub>C(CH<sub>3</sub>)<sub>2</sub>CH<sub>3</sub>',
        correct: '2,2,3,3-Tetramethylbutane',
        alternates: ['Hexamethylethane'],
        options: ['2,3-Dimethylhexane', '2,2,3,3-Tetramethylbutane', 'Octane', '2,2-Dimethyl-3,3-dimethylbutane'],
        explanation: 'Use of Hyphens and Commas: Numbers are separated by commas (2,2,3,3). Numbers and words are separated by hyphens (3-Tetramethyl...).',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>2</sub>=CH-C&equiv;CH',
        correct: 'But-1-en-3-yne',
        alternates: ['1-Buten-3-yne'],
        options: ['But-3-en-1-yne', 'But-1-en-3-yne', 'But-2-en-3-yne', 'Pent-1-en-3-yne'],
        explanation: 'Alkenes and Alkynes together: The chain is numbered to give the lowest locant to double/triple bonds. If there is a tie, the double bond gets the lower number. Here, numbering from the left gives the double bond locant 1.',
        difficulty: 'Hard'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>CH<sub>2</sub>CN',
        correct: 'Propanenitrile',
        alternates: ['Ethyl cyanide', 'Propionitrile'],
        options: ['Ethyl cyanide', 'Propanenitrile', 'Ethanenitrile', 'Cyanoethane'],
        explanation: 'Naming Nitriles: The -CN carbon is included in the parent chain. Three carbons = propane + nitrile = propanenitrile.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'HCOOH',
        correct: 'Methanoic acid',
        alternates: ['Formic acid'],
        options: ['Ethanoic acid', 'Methanoic acid', 'Propanoic acid', 'Formaldehyde'],
        explanation: 'Word Root (1 Carbon Molecule): A single carbon acid is methanoic acid, though commonly known as formic acid.',
        difficulty: 'Easy'
    },
    {
        type: 'smiles',
        data: 'O=CC1=CC=CC=C1',
        correct: 'Benzaldehyde',
        alternates: ['Phenylmethanal'],
        options: ['Phenylmethanol', 'Benzaldehyde', 'Phenol', 'Benzoic acid'],
        explanation: 'Aromatic Aldehydes: The IUPAC name for an aldehyde attached directly to a benzene ring is benzaldehyde.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>CH(NH<sub>2</sub>)CH<sub>3</sub>',
        correct: 'Propan-2-amine',
        alternates: ['2-Aminopropane', 'Isopropylamine'],
        options: ['Propan-1-amine', 'Propan-2-amine', 'Butan-2-amine', 'Propan-3-amine'],
        explanation: 'Naming Amines: The amino group (-NH2) gives the suffix "-amine". Located on carbon 2, giving propan-2-amine.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>OCH<sub>2</sub>CH<sub>3</sub>',
        correct: 'Methoxyethane',
        alternates: ['Ethyl methyl ether'],
        options: ['Ethoxyethane', 'Methoxyethane', 'Dimethyl ether', 'Propan-1-ol'],
        explanation: 'Naming Ethers: Ethers are named as alkoxyalkanes. The shorter chain (methoxy) is the prefix, the longer is the parent (ethane).',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH<sub>2</sub>–C≡C–CH<sub>3</sub>',
        correct: 'Pent-2-yne',
        alternates: ['2-Pentyne'],
        options: ['Pent-2-yne', 'Pent-3-yne', 'Pent-1-yne', 'Pent-2-ene'],
        explanation: 'General Principles: The parent chain is 5 carbons. The alkyne triple bond starts at carbon 2 from the right. So 2-pentyne.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>CH<sub>2</sub>CH(CH<sub>3</sub>)CH(OH)CH<sub>3</sub>',
        correct: '3-Methylpentan-2-ol',
        alternates: ['3-Methyl-2-pentanol'],
        options: ['3-Methylpentan-2-ol', '2-Hydroxy-3-methylpentane', '3-Methylpentan-3-ol', '4-Methylpentan-2-ol'],
        explanation: 'Priority Rules: Number from right to left so the alcohol (higher priority) gets locant 2, and the methyl gets locant 3.',
        difficulty: 'Hard'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>CH(OH)CH<sub>3</sub>',
        correct: 'Propan-2-ol',
        alternates: ['Isopropyl alcohol', '2-Propanol'],
        options: ['Propan-2-ol', 'Propan-1-ol', 'Butan-2-ol', 'Pentan-2-ol'],
        explanation: 'Common Name: Isopropyl alcohol is the common name. IUPAC name is Propan-2-ol (or 2-propanol). The -OH group is at carbon 2.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>COCH<sub>3</sub>',
        correct: 'Propanone',
        alternates: ['Acetone', 'Propan-2-one'],
        options: ['Propanone', 'Butanone', 'Propanal', 'Propan-1-ol'],
        explanation: 'Common Name: Acetone is the common name. IUPAC name is Propanone. A 3-carbon ketone.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>COOH',
        correct: 'Ethanoic acid',
        alternates: ['Acetic acid'],
        options: ['Ethanoic acid', 'Methanoic acid', 'Propanoic acid', 'Acidic acid'],
        explanation: 'Common Name: Acetic acid is the common name (vinegar). IUPAC name is Ethanoic acid.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CHCl<sub>3</sub>',
        correct: 'Trichloromethane',
        alternates: ['Chloroform'],
        options: ['Trichloromethane', 'Dichloromethane', 'Methenyl chloride', 'Methyl chloride'],
        explanation: 'Common Name: Chloroform is the common name. IUPAC name is Trichloromethane (one carbon, three chlorines).',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH',
        correct: 'Propan-1-ol',
        alternates: ['Propanol', '1-Propanol'],
        options: ['Propan-1-ol', 'Propan-2-ol', 'Ethanol', 'Butan-1-ol'],
        explanation: 'Naming of Alcohols: The -OH group is the functional group. The parent chain is 3 carbons (propane), dropping the "e" and adding "-ol" gives propanol. Since the OH is at position 1, it is propan-1-ol.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>CH(CH<sub>3</sub>)CH<sub>2</sub>CH(CH<sub>3</sub>)CH<sub>3</sub>',
        correct: '2,4-Dimethylpentane',
        alternates: [],
        options: ['2,4-Dimethylpentane', '3,3-Dimethylpentane', '4-Methylhexane', '2,3-Dimethylpentane'],
        explanation: 'Multiple Substituents: Number the chain to give lowest locants. With methyl groups at positions 2 and 4, the name is 2,4-dimethylpentane.',
        difficulty: 'Hard'
    },
    {
        type: 'smiles',
        data: 'CC1CCCCC1',
        correct: 'Methylcyclohexane',
        alternates: ['1-Methylcyclohexane'],
        options: ['Methylcyclohexane', 'Ethylcyclohexane', 'Cyclohexylmethane', 'Hexylmethane'],
        explanation: 'Cyclic Compounds: A cyclohexane ring with a methyl substituent. The substituent is named first, then the cycloalkane.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'Cyclohexane with two methyl groups at 1,2 positions',
        correct: '1,2-Dimethylcyclohexane',
        alternates: ['o-Dimethylcyclohexane'],
        options: ['1,2-Dimethylcyclohexane', 'o-Dimethylcyclohexane', '1,2-Cyclohexadiene', '3,3-Dimethylcyclohexane'],
        explanation: 'Numbering Cycloalkanes: Number the ring to give lowest locants. With methyls at 1 and 2, it is 1,2-dimethylcyclohexane.',
        difficulty: 'Hard'
    },
    {
        type: 'smiles',
        data: 'Cc1ccc(C)cc1',
        correct: '1,4-Dimethylbenzene',
        alternates: ['p-Xylene'],
        options: ['1,4-Dimethylbenzene', '1,3-Dimethylbenzene', '4-Methylbenzene', 'Toluene'],
        explanation: 'Aromatic Compounds: Benzene with two methyl groups at para (1,4) positions. Commonly known as p-xylene.',
        difficulty: 'Medium'
    },
    {
        type: 'smiles',
        data: 'Cc1ccc(O)cc1',
        correct: '4-Methylphenol',
        alternates: ['p-Cresol'],
        options: ['4-Methylphenol', '3-Methylphenol', 'm-Cresol', 'o-Cresol'],
        explanation: 'p-Cresol: Benzene ring with OH and CH3 at para (1,4) positions. Numbering from OH gives methyl at position 4.',
        difficulty: 'Medium'
    },
    {
        type: 'smiles',
        data: 'Cc1ccccc1O',
        correct: '2-Methylphenol',
        alternates: ['o-Cresol'],
        options: ['2-Methylphenol', '3-Methylphenol', '4-Methylphenol', 'Hydroxytoluene'],
        explanation: 'o-Cresol: Benzene with OH and CH3 at ortho (1,2) positions. Numbering from OH gives methyl at position 2.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>CH(CH<sub>3</sub>)CH<sub>2</sub>CH<sub>2</sub>OH',
        correct: '3-Methylbutan-1-ol',
        alternates: ['Isopentyl alcohol', 'Isoamyl alcohol'],
        options: ['3-Methylbutan-1-ol', '2-Methylbutan-1-ol', '3-Methylbutan-2-ol', '2-Methylpropan-1-ol'],
        explanation: 'Numbering from the alcohol end gives methyl at position 3 and OH at position 1. Common name is Isobutanol.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'HOCH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>CHO',
        correct: '4-Hydroxybutanal',
        alternates: [],
        options: ['4-Hydroxybutanal', '3-Hydroxybutanal', '4-Hydroxypropanal', 'Butanal-4-ol'],
        explanation: 'Aldehyde (CHO) is C1. Count: C1=CHO, C2=CH<sub>2</sub>, C3=CH<sub>2</sub>, C4=CH<sub>2</sub>OH. OH is on C4, so the name is 4-Hydroxybutanal.',
        difficulty: 'Hard'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>COCH<sub>2</sub>CH<sub>2</sub>OH',
        correct: '4-Hydroxybutan-2-one',
        alternates: ['4-Hydroxy-2-butanone'],
        options: ['4-Hydroxybutan-2-one', '3-Hydroxybutan-2-one', 'Hydroxybutyric acid', 'Butanediol-4-one-2'],
        explanation: 'Ketone has higher priority than alcohol. Number from the ketone end to get OH at position 4.',
        difficulty: 'Hard'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>CH(Cl)CH<sub>2</sub>CH<sub>2</sub>OH',
        correct: '3-Chlorobutan-1-ol',
        alternates: ['3-Chloro-1-butanol'],
        options: ['3-Chlorobutan-1-ol', '4-Chlorobutan-1-ol', 'Chlorobutanol', '1-Chlorobutan-3-ol'],
        explanation: 'Numbering from the alcohol end: OH at position 1, Cl at position 3.',
        difficulty: 'Hard'
    },
    {
        type: 'condensed',
        data: 'HOCH<sub>2</sub>CH(CH<sub>3</sub>)COOH',
        correct: '3-Hydroxy-2-methylpropanoic acid',
        alternates: ['2-Methyl-3-hydroxypropanoic acid'],
        options: ['3-Hydroxy-2-methylpropanoic acid', '2-Hydroxy-3-methylpropanoic acid', 'Methylhydroxypropanoic acid', 'Hydroxyisopropanoic acid'],
        explanation: 'Carboxylic acid is the principal functional group. Number from COOH end: COOH is C1, CH(CH3) is C2, OH is at C3.',
        difficulty: 'Hard'
    },
    {
        type: 'smiles',
        data: 'Cc1cc(cc1)CC',
        correct: '1-Ethyl-3-methylbenzene',
        alternates: ['m-Ethyltoluene'],
        options: ['1-Ethyl-3-methylbenzene', '1-Ethyl-4-methylbenzene', '3-Ethyl-1-methylbenzene', '1,3-Diethylbenzene'],
        explanation: 'Alphabetical order: Ethyl comes before methyl. Lowest locants: 1 and 3.',
        difficulty: 'Hard'
    },
    {
        type: 'smiles',
        data: 'Cc1cc(Cl)ccc1',
        correct: '1-Chloro-3-methylbenzene',
        alternates: ['m-Chlorotoluene', '3-Chlorotoluene'],
        options: ['1-Chloro-3-methylbenzene', '1-Chloro-4-methylbenzene', '1-Chloro-2-methylbenzene', '3-Chlorobenzene'],
        explanation: 'Alphabetical order: Chloro comes before methyl. Methyl at 1, chloro at 3 (meta positions).',
        difficulty: 'Hard'
    },
    {
        type: 'smiles',
        data: 'Clc1ccccc1[N+](=O)[O-]',
        correct: '1-Chloro-2-nitrobenzene',
        alternates: ['o-Chloronitrobenzene'],
        options: ['1-Chloro-2-nitrobenzene', '1-Chloro-3-nitrobenzene', '2-Chloro-1-nitrobenzene', '1-Nitrochlorobenzene'],
        explanation: 'Alphabetical order: chloro comes before nitro. Chloro at 1, nitro at 2 (ortho positions).',
        difficulty: 'Hard'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>CH<sub>2</sub>CH(CH<sub>3</sub>)CH<sub>2</sub>CH<sub>3</sub>',
        correct: '3-Methylpentane',
        alternates: [],
        options: ['3-Methylpentane', '2-Methylpentane', '3,3-Methylpentane', 'Isohexane'],
        explanation: 'The longest chain is 5 carbons (pentane) with a methyl group at position 3.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>CH<sub>2</sub>CHOHCH<sub>3</sub>',
        correct: 'Butan-2-ol',
        alternates: ['2-Butanol', 'Sec-butanol'],
        options: ['Butan-2-ol', 'Butan-1-ol', 'Butan-3-ol', 'Pentan-2-ol'],
        explanation: 'The OH group is at carbon 2 of a 4-carbon chain. Common name is sec-butanol.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>2</sub>=CH-CH=CH<sub>2</sub>',
        correct: 'Buta-1,3-diene',
        alternates: ['1,3-Butadiene', 'Butadiene'],
        options: ['Buta-1,3-diene', 'Buta-1,2-diene', 'But-1-ene', 'Penta-1,3-diene'],
        explanation: 'Two double bonds at positions 1 and 3 in a 4-carbon chain.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: '2-Methylbutane',
        alternates: ['Isopentane'],
        options: ['2-Methylbutane', '3-Methylbutane', '3,3-Methylbutane', 'Pentane'],
        explanation: 'The longest chain is 4 carbons (butane) with a methyl group at position 2.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH(CH<sub>3</sub>)–CH(CH<sub>3</sub>)–CH<sub>3</sub>',
        correct: '2,3-Dimethylbutane',
        alternates: [],
        options: ['2,3-Dimethylbutane', '2-Methyl-3-methylbutane', '3,3-Dimethylbutane', 'Tetramethylethane'],
        explanation: 'The longest chain is 4 carbons (butane) with methyl groups at positions 2 and 3.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–C(CH<sub>3</sub>)<sub>2</sub>–CH<sub>3</sub>',
        correct: '2,2-Dimethylpropane',
        alternates: ['Neopentane'],
        options: ['2,2-Dimethylpropane', '2-Methylbutane', '2,2-Dimethylbutane', '2-Methylpropane'],
        explanation: 'The parent chain is 3 carbons (propane) with two methyl groups at position 2. Also known as neopentane.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–OH',
        correct: 'Butan-1-ol',
        alternates: ['1-Butanol', 'Butanol', 'n-Butanol'],
        options: ['Butan-1-ol', 'Butan-2-ol', 'Propan-1-ol', 'Pentan-1-ol'],
        explanation: 'The OH group is at carbon 1 of a 4-carbon chain. Alcohols use the suffix -ol.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CO–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: 'Butan-2-one',
        alternates: ['Butanone', 'Methyl ethyl ketone'],
        options: ['Butan-2-one', 'Butan-3-one', 'Pentan-2-one', 'Butanal'],
        explanation: 'A 4-carbon ketone with C=O at position 2. Also known as methyl ethyl ketone.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CHO',
        correct: 'Butanal',
        alternates: ['Butyraldehyde'],
        options: ['Butanal', 'Propanal', 'Butanoic acid', 'Pentanal'],
        explanation: 'An aldehyde (CHO) at the end of a 4-carbon chain. Aldehydes use the suffix -al.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–COOH',
        correct: 'Butanoic acid',
        alternates: ['Butyric acid'],
        options: ['Butanoic acid', 'Propanoic acid', 'Pentanoic acid', 'Butanal'],
        explanation: 'A carboxylic acid (-COOH) on a 4-carbon chain. Carboxylic acids use the suffix -oic acid.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>2</sub>=CH–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: 'But-1-ene',
        alternates: ['1-Butene', 'Butene'],
        options: ['But-1-ene', 'But-1-yne', 'But-2-ene', 'Butane'],
        explanation: 'A double bond at position 1 in a 4-carbon chain. Alkenes use the suffix -ene.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH=CH–CH<sub>3</sub>',
        correct: 'But-2-ene',
        alternates: ['2-Butene'],
        options: ['But-2-ene', 'But-2-yne', 'But-1-ene', 'Butane'],
        explanation: 'A double bond at position 2 in a 4-carbon chain.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH≡C–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: 'But-1-yne',
        alternates: ['1-Butyne', 'Ethylacetylene'],
        options: ['But-1-yne', 'But-1-ene', 'But-2-yne', 'Pent-1-yne'],
        explanation: 'A triple bond at position 1 in a 4-carbon chain. Alkynes use the suffix -yne.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–C≡C–CH<sub>3</sub>',
        correct: 'But-2-yne',
        alternates: ['2-Butyne', 'Dimethylacetylene'],
        options: ['But-2-yne', 'But-2-ene', 'But-1-yne', 'Pent-2-yne'],
        explanation: 'A triple bond at position 2 in a 4-carbon chain.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>2</sub>=CH–CH=CH–CH<sub>3</sub>',
        correct: 'Penta-1,3-diene',
        alternates: ['1,3-Pentadiene', 'Piperylene'],
        options: ['Penta-1,3-diene', 'Penta-1,4-diene', 'Penta-2,4-diene', 'Buta-1,3-diene'],
        explanation: 'Two double bonds at positions 1 and 3 in a 5-carbon chain. The suffix is -diene for two double bonds.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>2</sub>=CH–CH(CH<sub>3</sub>)–CH=CH<sub>2</sub>',
        correct: '3-Methylpenta-1,4-diene',
        alternates: ['3-Methyl-1,4-pentadiene'],
        options: ['3-Methylpenta-1,4-diene', '4-Methylpenta-1,3-diene', '3,3-Methylbutadiene', 'Penta-1,4-diene'],
        explanation: 'A 5-carbon chain with two double bonds at positions 1 and 4, plus a methyl group at position 3.',
        difficulty: 'Hard'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: '3-Methylhexane',
        alternates: [],
        options: ['3-Methylhexane', '2-Methylhexane', '4-Methylhexane', '3,3-Methylhexane'],
        explanation: 'The longest chain is 6 carbons (hexane) with a methyl group at position 3.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: '2,4-Dimethylhexane',
        alternates: [],
        options: ['2,4-Dimethylhexane', '3,5-Dimethylhexane', '2,3-Dimethylhexane', '3,3-Dimethylhexane'],
        explanation: 'The longest chain is 6 carbons (hexane) with methyl groups at positions 2 and 4.',
        difficulty: 'Hard'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CH<sub>3</sub>',
        correct: '2-Methylpentane',
        alternates: ['Isohexane'],
        options: ['2-Methylpentane', '3-Methylpentane', '4-Methylpentane', '3,3-Methylpentane'],
        explanation: 'The longest chain is 5 carbons (pentane) with a methyl group at position 2.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–C(CH<sub>3</sub>)<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: '2,2-Dimethylbutane',
        alternates: ['Neohexane'],
        options: ['2,2-Dimethylbutane', '3,3-Dimethylbutane', '2,3-Dimethylbutane', 'Neopentane'],
        explanation: 'The parent chain is 4 carbons (butane) with two methyl groups at position 2.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–OH',
        correct: 'Pentan-1-ol',
        alternates: ['1-Pentanol', 'Pentanol', 'Amyl alcohol', 'n-Pentanol'],
        options: ['Pentan-1-ol', 'Pentan-2-ol', 'Butan-1-ol', 'Hexan-1-ol'],
        explanation: 'The OH group is at carbon 1 of a 5-carbon chain. Alcohols use the suffix -ol.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH<sub>2</sub>–CH(OH)–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: 'Pentan-3-ol',
        alternates: ['3-Pentanol'],
        options: ['Pentan-3-ol', 'Pentan-1-ol', 'Pentan-2-ol', 'Hexan-3-ol'],
        explanation: 'The OH group is at carbon 3 of a 5-carbon chain. Numbering can be done from either end.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH<sub>2</sub>–CO–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: 'Pentan-3-one',
        alternates: ['Diethyl ketone', '3-Pentanone'],
        options: ['Pentan-3-one', 'Pentan-2-one', 'Hexan-3-one', 'Pentanal'],
        explanation: 'A 5-carbon ketone with C=O at position 3. Also known as diethyl ketone.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CHO',
        correct: 'Pentanal',
        alternates: ['Valeraldehyde'],
        options: ['Pentanal', 'Pentanoic acid', 'Butanal', 'Hexanal'],
        explanation: 'An aldehyde (CHO) at the end of a 5-carbon chain. Aldehydes use the suffix -al.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–COOH',
        correct: 'Pentanoic acid',
        alternates: ['Valeric acid'],
        options: ['Pentanoic acid', 'Pentanal', 'Butanoic acid', 'Hexanoic acid'],
        explanation: 'A carboxylic acid (-COOH) on a 5-carbon chain. Carboxylic acids use the suffix -oic acid.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>2</sub>=CH–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: 'Pent-1-ene',
        alternates: ['1-Pentene', 'Pentene'],
        options: ['Pent-1-ene', 'Pent-1-yne', 'Pent-2-ene', 'Pentane'],
        explanation: 'A double bond at position 1 in a 5-carbon chain. Alkenes use the suffix -ene.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>2</sub>=CH–CH=CH–CH=CH<sub>2</sub>',
        correct: 'Hexa-1,3,5-triene',
        alternates: ['1,3,5-Hexatriene'],
        options: ['Hexa-1,3,5-triene', 'Hexa-1,3-diene', 'Hexa-1,4,6-triene', 'Penta-1,3,5-triene'],
        explanation: 'Three double bonds at positions 1, 3, and 5 in a 6-carbon chain.',
        difficulty: 'Hard'
    },
    {
        type: 'condensed',
        data: 'CH<sub>2</sub>=CH–CH<sub>2</sub>–C≡CH',
        correct: 'Pent-1-en-4-yne',
        alternates: ['4-Penten-1-yne'],
        options: ['Pent-1-en-4-yne', 'Pent-4-en-1-yne', 'Pent-1-en-3-yne', 'But-1-en-3-yne'],
        explanation: 'A double bond at position 1 and triple bond at position 4 in a 5-carbon chain. Numbering gives double bond the lower locant.',
        difficulty: 'Hard'
    },
    {
        type: 'condensed',
        data: 'CH≡C–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: 'Pent-1-yne',
        alternates: ['1-Pentyne'],
        options: ['Pent-1-yne', 'Pent-1-ene', 'Pent-2-yne', 'Pent-3-yne'],
        explanation: 'A triple bond at position 1 in a 5-carbon chain. Alkynes use the suffix -yne.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'HO–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CHO',
        correct: '5-Hydroxypentanal',
        alternates: [],
        options: ['5-Hydroxypentanal', '4-Hydroxypentanal', '5-Hydroxypentanol', 'Pentanediol'],
        explanation: 'Aldehyde (CHO) is C1. Count: C1=CHO, C2, C3, C4, C5=CH<sub>2</sub>OH. OH is on C5, so the name is 5-Hydroxypentanal.',
        difficulty: 'Hard'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CO–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–OH',
        correct: '5-Hydroxypentan-2-one',
        alternates: ['5-Hydroxy-2-pentanone'],
        options: ['5-Hydroxypentan-2-one', '4-Hydroxypentan-2-one', 'Hydroxyketone', '5-Hydroxypentanal'],
        explanation: 'Ketone has higher priority than alcohol. The OH becomes the hydroxy prefix at position 5.',
        difficulty: 'Hard'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH(Cl)–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–OH',
        correct: '4-Chloropentan-1-ol',
        alternates: ['4-Chloro-1-pentanol'],
        options: ['4-Chloropentan-1-ol', '5-Chloropentan-1-ol', '1-Chloropentan-4-ol', '3,3-Chloropentanol'],
        explanation: 'Alcohol has higher priority than chloro. Number from the alcohol end to give OH position 1, Cl at position 4.',
        difficulty: 'Hard'
    },
    {
        type: 'condensed',
        data: 'Cyclohexane with methyl groups at positions 1 and 3',
        correct: '1,3-Dimethylcyclohexane',
        alternates: ['m-Dimethylcyclohexane'],
        options: ['1,3-Dimethylcyclohexane', '3,1-Dimethylcyclohexane', '1,3-Dimethylhexane', '3,3-Dimethylcyclohexane'],
        explanation: 'Number the ring to give lowest locants. Two methyl groups at positions 1 and 3.',
        difficulty: 'Medium'
    },
    {
        type: 'smiles',
        data: 'Cc1ccc([N+](=O)[O-])cc1',
        correct: '1-Methyl-4-nitrobenzene',
        alternates: ['p-Nitrotoluene', '4-Nitrotoluene'],
        options: ['1-Methyl-4-nitrobenzene', '1-Methyl-3-nitrobenzene', '1-Methyl-2-nitrobenzene', '4-Nitrobenzene'],
        difficulty: 'Hard',
        explanation: 'Alphabetical order: methyl before nitro. Positions 1 and 4 on the benzene ring.'
    },
    {
        type: 'smiles',
        data: 'CCCc1ccccc1',
        correct: 'Propylbenzene',
        alternates: ['1-Phenylpropane', 'Phenylpropane'],
        options: ['Propylbenzene', 'Ethylbenzene', 'Butylbenzene', 'Isopropylbenzene'],
        explanation: 'Benzene ring attached to a 3-carbon chain (propyl). IUPAC name is Propylbenzene.',
        difficulty: 'Medium'
    },
    {
        type: 'name-to-structure',
        data: '2,3-Dimethylpentane',
        correct: 'CH<sub>3</sub>–CH(CH<sub>3</sub>)–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>3</sub>',
        options: ['CH<sub>3</sub>–CH(CH<sub>3</sub>)–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>3</sub>', 'CH<sub>3</sub>–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>3</sub>', 'CH<sub>3</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>', 'CH<sub>3</sub>–C(CH<sub>3</sub>)<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>'],
        explanation: 'A 5-carbon chain (pentane) with methyl groups at positions 2 and 3.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CH(CH<sub>3</sub>)–CH<sub>3</sub>',
        correct: '2,4,5-Trimethylhexane',
        alternates: [],
        options: ['2,4,5-Trimethylhexane', '3,4,5-Trimethylhexane', '2,3,4-Trimethylhexane', '3,3-Trimethylhexane'],
        explanation: 'The longest chain is 6 carbons (hexane) with methyl groups at positions 2, 4, and 5.',
        difficulty: 'Hard'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH<sub>2</sub>–C(CH<sub>3</sub>)<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: '3,3-Dimethylpentane',
        alternates: [],
        options: ['3,3-Dimethylpentane', '2,2-Dimethylpentane', '2,3-Dimethylpentane', '3,3-Dimethylbutane'],
        explanation: 'The longest chain is 5 carbons (pentane) with two methyl groups at position 3.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>2</sub>=CH–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CH=CH<sub>2</sub>',
        correct: '4-Methylhexa-1,5-diene',
        alternates: [],
        options: ['4-Methylhexa-1,5-diene', '3-Methylhexa-1,5-diene', '4-Methylhexa-1,4-diene', '3,3-Methylhexadiene'],
        explanation: 'A 6-carbon chain with double bonds at positions 1 and 5, plus a methyl group at position 4.',
        difficulty: 'Hard'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CO–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CHO',
        correct: '2-Methyl-4-oxopentanal',
        alternates: ['4-Oxo-2-methylpentanal'],
        options: ['2-Methyl-4-oxopentanal', '4-Oxo-2-methylpentanal', '5-Methyl-3-oxopentanal', '4-Methylpentan-3-one'],
        explanation: 'Aldehyde has highest priority (C1). Count: C2 bears the methyl group, C4 is the ketone (oxo). Alphabetical: methyl before oxo. Name: 2-Methyl-4-oxopentanal.',
        difficulty: 'Hard'
    },
    {
        type: 'condensed',
        data: 'HO–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–COOH',
        correct: '4-Hydroxy-3-methylbutanoic acid',
        alternates: ['3-Methyl-4-hydroxybutanoic acid'],
        options: ['4-Hydroxy-3-methylbutanoic acid', '3-Hydroxy-2-methylbutanoic acid', '2-Methyl-3-hydroxybutanoic acid', '4-Hydroxybutanoic acid'],
        explanation: 'Carboxylic acid is the principal group. Number from COOH: COOH is C1, CH3 at C3, OH at C4.',
        difficulty: 'Hard'
    },
    {
        type: 'condensed',
        data: 'CH<sub>2</sub>=CH–CH(OH)–CH<sub>2</sub>–CHO',
        correct: '3-Hydroxypent-4-enal',
        alternates: ['3-Hydroxy-4-pentenal'],
        options: ['3-Hydroxypent-4-enal', '4-Hydroxypent-4-enal', '3-Hydroxypentanal', '3-Hydroxypent-3-enal'],
        explanation: 'Aldehyde has higher priority. OH becomes hydroxy prefix at position 3, double bond at position 4.',
        difficulty: 'Hard'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH(Cl)–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>2</sub>–OH',
        correct: '4-Chloro-3-methylpentan-1-ol',
        alternates: ['4-Chloro-3-methyl-1-pentanol'],
        options: ['4-Chloro-3-methylpentan-1-ol', '5-Chloro-4-methylpentan-1-ol', '1-Chloro-3-methylpentan-4-ol', 'Chloro-methyl-pentanol'],
        explanation: 'Number from alcohol end: OH at 1, Cl at 4, methyl at 3. Alphabetical: chloro before methyl.',
        difficulty: 'Hard'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH<sub>2</sub>–CH(CH<sub>2</sub>CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: '3-Ethylpentane',
        alternates: [],
        options: ['3-Ethylpentane', '3-Ethylhexane', '3,3-Ethylpentane', '3-Propylpentane'],
        explanation: 'The longest chain is 5 carbons (pentane) with an ethyl group at position 3.',
        difficulty: 'Medium'
    },
    {
        type: 'smiles',
        data: 'Cc1c(C)cc(C)cc1',
        correct: '1,2,4-Trimethylbenzene',
        alternates: ['Pseudocumene'],
        options: ['1,2,4-Trimethylbenzene', '1,3,5-Trimethylbenzene', '1,2,3-Trimethylbenzene', 'Mesitylene'],
        explanation: 'Three methyl groups at positions 1, 2, and 4 on the benzene ring. Also known as pseudocumene.',
        difficulty: 'Medium'
    },
    {
        type: 'smiles',
        data: 'CC1=CCCCC1',
        correct: '1-Methylcyclohexene',
        alternates: ['1-Methylcyclohex-1-ene'],
        options: ['1-Methylcyclohexene', '3-Methylcyclohexene', '4-Methylcyclohexene', '3,3-Methylcyclohexene'],
        explanation: 'The double bond is at C1–C2. The methyl substituent is on C1, giving lowest locant set. IUPAC name: 1-Methylcyclohexene.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH(Br)–CH<sub>3</sub>',
        correct: '2-Bromopropane',
        alternates: ['Isopropyl bromide'],
        options: ['2-Bromopropane', '1-Bromopropane', '2-Bromobutane', '2-Chloropropane'],
        explanation: 'A 3-carbon chain with bromine at position 2. Halogens are named as prefixes (bromo-).',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CH(CH<sub>3</sub>)–CH<sub>3</sub>',
        correct: '2,3-Dimethylpentane',
        alternates: [],
        options: ['2,3-Dimethylpentane', '3,4-Dimethylpentane', '2,4-Dimethylpentane', '3-Methylhexane'],
        explanation: 'Lowest locant rule: numbering from the right gives methyls at C2 and C3 (set {2,3}) which is lower than {3,4}. So the correct name is 2,3-Dimethylpentane.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–C(CH<sub>3</sub>)<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: '2,2-Dimethylpentane',
        alternates: [],
        options: ['2,2-Dimethylpentane', '3,3-Dimethylpentane', '2,2-Dimethylbutane', '2,3-Dimethylpentane'],
        explanation: 'The longest chain is 5 carbons (pentane) with two methyl groups at position 2.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH=CH–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: 'Pent-2-ene',
        alternates: ['2-Pentene'],
        options: ['Pent-2-ene', 'Pent-1-ene', 'Pent-3-ene', 'Pent-2-yne'],
        explanation: 'A double bond at position 2 in a 5-carbon chain.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CO–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CH<sub>3</sub>',
        correct: '4-Methylpentan-2-one',
        alternates: ['4-Methyl-2-pentanone', 'Methyl isopropyl ketone'],
        options: ['4-Methylpentan-2-one', '3-Methylpentan-2-one', '2-Methylpentan-4-one', 'Hexan-2-one'],
        explanation: 'Ketone with methyl substituent. Number from ketone end to give C=O position 2, methyl at position 4.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CHO',
        correct: '2-Methylpentanal',
        alternates: ['2-Methyl-1-pentanal'],
        options: ['2-Methylpentanal', '3-Methylpentanal', 'Methylbutanal', '2-Ethylbutanal'],
        explanation: 'An aldehyde with a 5-carbon chain and methyl at position 2.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>2</sub>=CH–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>2</sub>–CH=CH<sub>2</sub>',
        correct: '3-Methylhepta-1,6-diene',
        alternates: ['3-Methyl-1,6-heptadiene'],
        options: ['3-Methylhepta-1,6-diene', '4-Methylhepta-1,5-diene', '3-Methylhepta-1,5-diene', '3,3-Methylheptadiene'],
        explanation: '7-carbon chain with double bonds at 1 and 6, methyl at 3.',
        difficulty: 'Hard'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CO–CH<sub>2</sub>–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CHO',
        correct: '2-Methyl-5-oxohexanal',
        alternates: ['5-Oxo-2-methylhexanal'],
        options: ['2-Methyl-5-oxohexanal', '5-Oxo-2-methylhexanal', '5-Methylhexanal-4-one', '4-Keto-5-methylhexanal'],
        explanation: 'Aldehyde has highest priority (C1). Count: C1=CHO, C2=CH(CH<sub>3</sub>), C3=CH<sub>2</sub>, C4=CH<sub>2</sub>, C5=CO, C6=CH<sub>3</sub>. Ketone is oxo at C5, methyl at C2. Alphabetical: methyl before oxo.',
        difficulty: 'Hard'
    },
    {
        type: 'condensed',
        data: 'HO–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>2</sub>–COOH',
        correct: '4-Methyl-5-hydroxypentanoic acid',
        alternates: ['5-Hydroxy-4-methylpentanoic acid'],
        options: ['4-Methyl-5-hydroxypentanoic acid', '3-Methyl-4-hydroxypentanoic acid', '4-Methylpentanoic acid-5-ol', '5-Hydroxy-3-methylpentanoic acid'],
        explanation: 'Carboxylic acid priority. Number from COOH: OH at 5, methyl at 4.',
        difficulty: 'Hard'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH(Cl)–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–OH',
        correct: '4-Chloro-2-methylpentan-1-ol',
        alternates: ['4-Chloro-2-methyl-1-pentanol'],
        options: ['4-Chloro-2-methylpentan-1-ol', '5-Chloro-3-methylpentan-1-ol', '1-Chloro-3-methylpentan-4-ol', '2-Methyl-4-chloropentan-1-ol'],
        explanation: 'Alcohol has priority. Number from OH: OH at 1, Cl at 4, methyl at 2.',
        difficulty: 'Hard'
    },
    {
        type: 'condensed',
        data: 'CH<sub>2</sub>=CH–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH=CH<sub>2</sub>',
        correct: '4-Methylhepta-1,6-diene',
        alternates: [],
        options: ['4-Methylhepta-1,6-diene', '3-Methylhepta-1,6-diene', '4-Methylhepta-1,5-diene', '3,3-Methylheptadiene'],
        explanation: '7-carbon chain with double bonds at 1 and 6, methyl at position 4.',
        difficulty: 'Hard'
    },
    {
        type: 'smiles',
        data: 'Cc1cc(C)cc([N+](=O)[O-])c1',
        correct: '1,3-Dimethyl-5-nitrobenzene',
        alternates: ['5-Nitro-1,3-dimethylbenzene'],
        options: ['1,3-Dimethyl-5-nitrobenzene', '3,5-Dimethylnitrobenzene', 'm-Dimethyl-p-nitrobenzene', '1,3-Dimethyl-2-nitrobenzene'],
        explanation: 'Benzene with methyl groups at 1,3 and nitro at 5. Alphabetical: dimethyl before nitro.',
        difficulty: 'Hard'
    },
    {
        type: 'smiles',
        data: 'C1=CC(C)CC(Cl)C1',
        correct: '5-Chloro-3-methylcyclohexene',
        alternates: ['3-Methyl-5-chlorocyclohexene'],
        options: ['5-Chloro-3-methylcyclohexene', '3-Chloro-5-methylcyclohexene', '3-Methyl-5-chlorohexene', 'Chloro-methylcyclohexene'],
        explanation: 'Number from double bond end: double bond at 1, methyl at 3, chloro at 5.',
        difficulty: 'Hard'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: 'Pentane',
        options: ['Pentane', 'Butane', 'Propane', 'Hexane'],
        explanation: 'The longest chain has 5 carbon atoms. Root word for 5 carbons is "pent-" with single bonds, so "-ane".',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: 'Hexane',
        options: ['Hexane', 'Pentane', 'Heptane', 'Butane'],
        explanation: 'The longest chain has 6 carbon atoms. Root word for 6 carbons is "hex-" with single bonds, so "-ane".',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CO–CH<sub>3</sub>',
        correct: 'Pentan-2-one',
        alternates: ['2-Pentanone', 'Methyl propyl ketone'],
        options: ['Pentan-2-one', 'Pentan-3-one', 'Pentan-1-al', 'Butan-2-one'],
        explanation: 'A 5-carbon ketone with C=O at position 2.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CHO',
        correct: 'Hexanal',
        alternates: ['Hexan-1-al', 'Caproaldehyde'],
        options: ['Hexanal', 'Pentanal', 'Heptanal', 'Hexanoic acid'],
        explanation: 'An aldehyde at the end of a 6-carbon chain. Aldehydes use the suffix -al.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–COOH',
        correct: 'Hexanoic acid',
        alternates: ['Caproic acid'],
        options: ['Hexanoic acid', 'Pentanoic acid', 'Octanoic acid', 'Heptanoic acid'],
        explanation: 'A carboxylic acid (-COOH) on a 6-carbon chain.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>2</sub>=CH–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: 'Hex-1-ene',
        alternates: ['1-Hexene'],
        options: ['Hex-1-ene', 'Hex-1-yne', 'Hex-2-ene', 'Hexane'],
        explanation: 'A double bond at position 1 in a 6-carbon chain.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH≡C–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: 'Hex-1-yne',
        alternates: ['1-Hexyne'],
        options: ['Hex-1-yne', 'Hex-1-ene', 'Hex-2-yne', 'Hex-3-yne'],
        explanation: 'A triple bond at position 1 in a 6-carbon chain.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: '2-Methylhexane',
        alternates: [],
        options: ['2-Methylhexane', '3-Methylhexane', '4-Methylhexane', '3,3-Methylhexane'],
        explanation: '6-carbon chain (hexane) with methyl at position 2.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CH<sub>3</sub>',
        correct: '3,5-Dimethylhexane',
        alternates: [],
        options: ['3,5-Dimethylhexane', '2,4-Dimethylhexane', '3,4-Dimethylhexane', '3,3-Dimethylhexane'],
        explanation: '6-carbon chain with methyl groups at positions 3 and 5.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–C(CH<sub>3</sub>)<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: '2,2-Dimethylhexane',
        alternates: [],
        options: ['2,2-Dimethylhexane', '3,3-Dimethylhexane', '2,5-Dimethylhexane', '2,3-Dimethylhexane'],
        explanation: '6-carbon chain with two methyl groups at position 2.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH=CH–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: 'Hex-2-ene',
        alternates: ['2-Hexene'],
        options: ['Hex-2-ene', 'Hex-2-yne', 'Hex-1-ene', 'Hex-3-ene'],
        explanation: 'A double bond at position 2 in a 6-carbon chain.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>2</sub>=CH–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: '3-Methylhex-1-ene',
        alternates: ['3-Methyl-1-hexene'],
        options: ['3-Methylhex-1-ene', '4-Methylhex-1-ene', '3,3-Methylhexene', '3-Methylhex-2-ene'],
        explanation: '6-carbon chain with double bond at 1 and methyl at position 3.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH(Cl)–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: '2-Chlorohexane',
        alternates: ['Chlorohexane'],
        options: ['2-Chlorohexane', '1-Chlorohexane', '3-Chlorohexane', '2-Bromohexane'],
        explanation: '6-carbon chain with chlorine at position 2.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH<sub>2</sub>–CH(Br)–CH<sub>2</sub>–CH<sub>2</sub>–OH',
        correct: '3-Bromopentan-1-ol',
        alternates: ['3-Bromo-1-pentanol'],
        options: ['3-Bromopentan-1-ol', '5-Bromopentan-1-ol', '1-Bromopentan-3-ol', '3,3-Bromopentanol'],
        explanation: 'Alcohol priority. 5-carbon chain with OH at 1, Br at 3.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CO–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: 'Hexan-2-one',
        alternates: ['2-Hexanone', 'Methyl pentyl ketone'],
        options: ['Hexan-2-one', 'Hexan-3-one', 'Hexanal', 'Pentan-2-one'],
        explanation: 'A 6-carbon ketone with C=O at position 2.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CHO',
        correct: '3-Methylhexanal',
        alternates: ['3-Methyl-1-hexanal'],
        options: ['3-Methylhexanal', '2-Methylhexanal', '4-Methylhexanal', 'Methylpentanal'],
        explanation: '6-carbon chain aldehyde with methyl at position 3.',
        difficulty: 'Medium'
    },
    {
        type: 'smiles',
        data: 'Cc1ccccc1Cl',
        correct: '1-Chloro-2-methylbenzene',
        alternates: ['o-Chlorotoluene'],
        options: ['1-Chloro-2-methylbenzene', '2-Chloro-1-methylbenzene', 'Chloromethylbenzene', '1-Chloro-3-methylbenzene'],
        explanation: 'Alphabetical: chloro before methyl. Ortho positions.',
        difficulty: 'Medium'
    },
    {
        type: 'smiles',
        data: 'CCC1CCC(C)CC1',
        correct: '1-Ethyl-4-methylcyclohexane',
        alternates: ['4-Methyl-1-ethylcyclohexane'],
        options: ['1-Ethyl-4-methylcyclohexane', '4-Ethyl-1-methylcyclohexane', '1-Methyl-4-ethylcyclohexane', 'Ethylmethylcyclohexane'],
        explanation: 'Alphabetical: ethyl before methyl. Positions 1 and 4 on cyclohexane.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: 'Heptane',
        options: ['Heptane', 'Hexane', 'Octane', 'Pentane'],
        explanation: '7 carbon atoms in a straight chain. Root word "hept-" with suffix "-ane".',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CHO',
        correct: 'Heptanal',
        alternates: ['Heptan-1-al'],
        options: ['Heptanal', 'Hexanal', 'Heptanoic acid', 'Octanal'],
        explanation: '7-carbon chain aldehyde. Aldehydes use suffix -al.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–COOH',
        correct: 'Heptanoic acid',
        alternates: ['Enanthic acid'],
        options: ['Heptanoic acid', 'Hexanoic acid', 'Octanoic acid', 'Heptanoic aldehyde'],
        explanation: '7-carbon carboxylic acid.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>2</sub>=CH–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: 'Hept-1-ene',
        alternates: ['1-Heptene'],
        options: ['Hept-1-ene', 'Hept-1-yne', 'Hept-2-ene', 'Heptane'],
        explanation: 'Double bond at position 1 in a 7-carbon chain.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH≡C–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: 'Hept-1-yne',
        alternates: ['1-Heptyne'],
        options: ['Hept-1-yne', 'Hept-1-ene', 'Hept-2-yne', 'Hept-3-yne'],
        explanation: 'Triple bond at position 1 in a 7-carbon chain.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH(Cl)–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: '2-Chloropentane',
        options: ['2-Chloropentane', '1-Chloropentane', '3-Chloropentane', 'Chloropentane'],
        explanation: '5-carbon chain with chlorine at position 2.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH(Br)–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: '2-Bromohexane',
        alternates: ['Bromohexane'],
        options: ['2-Bromohexane', '1-Bromohexane', '3-Bromohexane', '2-Chlorohexane'],
        explanation: '6-carbon chain with bromine at position 2.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: '3-Methylheptane',
        alternates: [],
        options: ['3-Methylheptane', '2-Methylheptane', '4-Methylheptane', '3,3-Methylheptane'],
        explanation: '7-carbon chain with methyl at position 3.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: '2,4-Dimethylheptane',
        alternates: [],
        options: ['2,4-Dimethylheptane', '3,5-Dimethylheptane', '2,5-Dimethylheptane', '3,3-Dimethylheptane'],
        explanation: '7-carbon chain with methyl groups at positions 2 and 4.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–C(CH<sub>3</sub>)<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: '2,2-Dimethylheptane',
        alternates: [],
        options: ['2,2-Dimethylheptane', '3,3-Dimethylheptane', '2,7-Dimethylheptane', '2,3-Dimethylheptane'],
        explanation: '7-carbon chain with two methyl groups at position 2.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH=CH–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: 'Hept-2-ene',
        alternates: ['2-Heptene'],
        options: ['Hept-2-ene', 'Hept-2-yne', 'Hept-1-ene', 'Hept-3-ene'],
        explanation: 'Double bond at position 2 in a 7-carbon chain.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>2</sub>=CH–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: '3-Methylhept-1-ene',
        alternates: ['3-Methyl-1-heptene'],
        options: ['3-Methylhept-1-ene', '4-Methylhept-1-ene', '3,3-Methylheptene', '3-Methylhept-2-ene'],
        explanation: '7-carbon chain with double bond at 1 and methyl at 3.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH<sub>2</sub>–CH(OH)–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: 'Heptan-3-ol',
        alternates: ['3-Heptanol'],
        options: ['Heptan-3-ol', 'Heptan-2-ol', 'Heptan-4-ol', 'Hexan-3-ol'],
        explanation: '7-carbon chain with OH at position 3.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CO–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: 'Heptan-2-one',
        alternates: ['2-Heptanone', 'Methyl hexyl ketone'],
        options: ['Heptan-2-one', 'Heptan-3-one', 'Hexan-2-one', 'Heptanal'],
        explanation: '7-carbon ketone with C=O at position 2.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>2</sub>–CHO',
        correct: '4-Methylheptanal',
        alternates: ['4-Methyl-1-heptanal'],
        options: ['4-Methylheptanal', '3-Methylheptanal', '5-Methylheptanal', 'Methylheptanal'],
        explanation: '7-carbon aldehyde with methyl at position 4.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–COOH',
        correct: '3-Methylheptanoic acid',
        options: ['3-Methylheptanoic acid', '4-Methylheptanoic acid', '5-Methylheptanoic acid', 'Methylheptanoic acid'],
        explanation: '7-carbon carboxylic acid with methyl at position 3.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH(Cl)–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: '4-Chloro-2-methylhexane',
        alternates: ['2-Methyl-4-chlorohexane'],
        options: ['4-Chloro-2-methylhexane', '2-Chloro-4-methylhexane', '3-Chloro-5-methylhexane', 'Chloro-methylhexane'],
        explanation: '6-carbon chain. Number from methyl end: methyl at 2, chloro at 4.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>2</sub>=CH–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>2</sub>–CH=CH<sub>2</sub>',
        correct: '4-Methylocta-1,7-diene',
        alternates: ['4-Methyl-1,7-octadiene'],
        options: ['4-Methylocta-1,7-diene', '3-Methylocta-1,7-diene', '4-Methylocta-1,6-diene', '3,3-Methyloctadiene'],
        explanation: '8-carbon chain with double bonds at 1 and 7, methyl at 4.',
        difficulty: 'Hard'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: '2,4,5-Trimethylheptane',
        options: ['2,4,5-Trimethylheptane', '3,4,5-Trimethylheptane', '2,3,5-Trimethylheptane', '3,3-Trimethylheptane'],
        explanation: '7-carbon chain with methyl groups at positions 2, 4, and 5.',
        difficulty: 'Hard'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CO–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CHO',
        correct: '2-Methyl-6-oxoheptanal',
        alternates: ['6-Oxo-2-methylheptanal'],
        options: ['2-Methyl-6-oxoheptanal', '6-Oxo-2-methylheptanal', '2-Methyl-4-oxoheptanal', '5-Methyl-4-oxoheptanal'],
        explanation: 'Aldehyde highest priority (C1). Count: C1=CHO, C2=CH(CH<sub>3</sub>), C3=CH<sub>2</sub>, C4=CH<sub>2</sub>, C5=CH<sub>2</sub>, C6=CO, C7=CH<sub>3</sub>. Ketone is oxo at C6, methyl at C2. Alphabetical: methyl before oxo.',
        difficulty: 'Hard'
    },
    {
        type: 'condensed',
        data: 'HO–CH<sub>2</sub>–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>2</sub>–COOH',
        correct: '4-Methyl-6-hydroxyhexanoic acid',
        alternates: ['6-Hydroxy-4-methylhexanoic acid'],
        options: ['4-Methyl-6-hydroxyhexanoic acid', '3-Methyl-5-hydroxyhexanoic acid', 'Methyl-hydroxyhexanoic acid', '5-Hydroxy-3-methylhexanoic acid'],
        explanation: 'Carboxylic acid priority. OH at 6, methyl at 4.',
        difficulty: 'Hard'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH(Cl)–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>2</sub>–OH',
        correct: '5-Chloro-3-methylhexan-1-ol',
        alternates: ['5-Chloro-3-methyl-1-hexanol'],
        options: ['5-Chloro-3-methylhexan-1-ol', '6-Chloro-4-methylhexan-1-ol', '2-Chloro-4-methylhexan-1-ol', 'Chloro-methylhexanol'],
        explanation: 'Alcohol priority. OH at 1, Cl at 5, methyl at 3.',
        difficulty: 'Hard'
    },
    {
        type: 'condensed',
        data: 'CH<sub>2</sub>=CH–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH=CH<sub>2</sub>',
        correct: '3-Methylocta-1,7-diene',
        alternates: [],
        options: ['3-Methylocta-1,7-diene', '4-Methylocta-1,7-diene', '3-Methylocta-1,6-diene', '3,3-Methyloctadiene'],
        explanation: '8-carbon chain with double bonds at 1 and 7, methyl at 3.',
        difficulty: 'Hard'
    },
    {
        type: 'smiles',
        data: 'Cc1ccc(C)c(Cl)c1',
        correct: '1-Chloro-2,4-dimethylbenzene',
        alternates: ['2,4-Dimethylchlorobenzene', '4-Chloro-1,3-dimethylbenzene'],
        options: ['1-Chloro-2,4-dimethylbenzene', '3,3-Dimethylchlorobenzene', '1-Chloro-3,5-dimethylbenzene', '1-Bromo-2,4-dimethylbenzene'],
        explanation: 'Benzene with chloro at 1, methyl at 2 and 4.',
        difficulty: 'Hard'
    },
    {
        type: 'smiles',
        data: 'Oc1cccc([N+](=O)[O-])c1',
        correct: '3-Nitrophenol',
        alternates: ['m-Nitrophenol'],
        options: ['3-Nitrophenol', '2-Nitrophenol', '4-Nitrophenol', '3-Nitrobenzene'],
        explanation: 'Phenol with nitro group at meta (3) position.',
        difficulty: 'Hard'
    },
    {
        type: 'smiles',
        data: 'CCCCc1ccccc1',
        correct: 'Phenylbutane',
        alternates: ['Butylbenzene', '1-Phenylbutane'],
        options: ['Phenylbutane', 'Benzylpropane', 'Phenylpropane', 'Butylcyclohexane'],
        explanation: 'Benzene ring attached to a 4-carbon chain.',
        difficulty: 'Medium'
    },
    {
        type: 'smiles',
        data: 'CCC1CC=CC(C)C1',
        correct: '5-Ethyl-3-methylcyclohexene',
        alternates: ['3-Methyl-5-ethylcyclohexene'],
        options: ['5-Ethyl-3-methylcyclohexene', '3-Ethyl-5-methylcyclohexene', '5-Methyl-3-ethylcyclohexene', 'Ethyl-methylcyclohexene'],
        explanation: 'Number from double bond. Double bond at 1, methyl at 3, ethyl at 5.',
        difficulty: 'Hard'
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
    { section: 'A', marks: 1, data: 'CH₃–CH₂–CH₃', correct: 'Propane', options: ['Propane', 'Ethane', 'Butane', 'Methane'], difficulty: 'Easy' },
    { section: 'A', marks: 1, data: 'CH₃–CH(CH₃)–CH₃', correct: '2-Methylpropane', options: ['2-Methylpropane', 'Methylpropane', 'Propane', 'Butane'], alternates: [], difficulty: 'Easy' },
    { section: 'A', marks: 1, data: 'CH₂=CH–CH₃', correct: 'Propene', options: ['Propene', 'Propane', 'Methylmethane', 'Butene'], alternates: [], difficulty: 'Easy' },
    { section: 'A', marks: 1, data: 'CH₃–CH₂–OH', correct: 'Ethanol', options: ['Ethanol', 'Methanol', 'Propanol', 'Ethane'], difficulty: 'Easy' },
    { section: 'A', marks: 1, data: 'CH₃–CHO', correct: 'Ethanal', alternates: ['Acetaldehyde'], options: ['Ethanal', 'Propanal', 'Formaldehyde', 'Propenal'], difficulty: 'Easy' },
    // Section B – Intermediate (2 marks each)
    { section: 'B', marks: 2, data: 'CH₃–CH₂–CH₂–CH₃', correct: 'Butane', options: ['Butane', 'Propane', 'Pentane', 'Hexane'], difficulty: 'Easy' },
    { section: 'B', marks: 2, data: 'CH₃–CH(CH₃)–CH₂–CH₃', correct: '2-Methylbutane', options: ['2-Methylbutane', '3-Methylbutane', '3,3-Methylbutane', 'Pentane'], alternates: [], difficulty: 'Medium' },
    { section: 'B', marks: 2, data: 'CH₃–CH₂–CO–CH₃', correct: 'Butan-2-one', alternates: ['Butanone', 'Methyl ethyl ketone'], options: ['Butan-2-one', 'Butan-3-one', 'Pentan-2-one', 'Propanone'], difficulty: 'Medium' },
    { section: 'B', marks: 2, data: 'CH₃–CH₂–CH₂–CHO', correct: 'Butanal', options: ['Butanal', 'Propanal', 'Butyric aldehyde', 'Pentanal'], alternates: [], difficulty: 'Medium' },
    { section: 'B', marks: 2, data: 'CH₃–CH₂–CH₂–COOH', correct: 'Butanoic acid', alternates: ['Butyric acid'], options: ['Butanoic acid', 'Propanoic acid', 'Pentanoic acid', 'Butanal'], difficulty: 'Medium' },
    // Section C – Functional Groups & Priority (3 marks each)
    { section: 'C', marks: 3, data: 'HO–CH₂–CH₂–CHO', correct: '3-Hydroxypropanal', alternates: ['3-Hydroxy-1-propanal'], options: ['3-Hydroxypropanal', '2-Hydroxypropanal', '4-Hydroxybutanal', 'Hydroxy propanal'], difficulty: 'Hard' },
    { section: 'C', marks: 3, data: 'CH₃–CO–CH₂–CH₂–OH', correct: '4-Hydroxybutan-2-one', options: ['4-Hydroxybutan-2-one', '3-Hydroxybutan-2-one', 'Hydroxybutanone', 'Pentan-2-one'], alternates: [], difficulty: 'Hard' },
    { section: 'C', marks: 3, data: 'CH₃–CH(Cl)–CH₂–OH', correct: '2-Chloropropan-1-ol', options: ['2-Chloropropan-1-ol', '3-Chloropropan-1-ol', '3,3-Chloropropanol', 'Methylchloropropanol'], alternates: [], difficulty: 'Hard' },
    { section: 'C', marks: 3, data: 'HO–CH₂–CH(NH₂)–COOH', correct: '2-Amino-3-hydroxypropanoic acid', alternates: ['Serine'], options: ['2-Amino-3-hydroxypropanoic acid', 'Aminohydroxypropanoic acid', 'Threonine', '3-Amino-2-hydroxypropanoic acid'], difficulty: 'Hard' },
    // Section D – Multiple Bonds & Substituents (3 marks each)
    { section: 'D', marks: 3, data: 'CH₂=CH–CH=CH₂', correct: 'Buta-1,3-diene', alternates: ['1,3-Butadiene', 'Butadiene'], options: ['Buta-1,3-diene', 'Buta-1,2-diene', 'Pentadiene', 'Hexadiene'], difficulty: 'Medium' },
    { section: 'D', marks: 3, data: 'CH₂=CH–CH(CH₃)–CH=CH₂', correct: '3-Methylpenta-1,4-diene', options: ['3-Methylpenta-1,4-diene', '4-Methylpenta-1,3-diene', '3,3-Methylbutadiene', 'Pentadiene'], alternates: [], difficulty: 'Hard' },
    { section: 'D', marks: 3, data: 'CH≡C–CH₂–CH₃', correct: 'But-1-yne', alternates: ['1-Butyne', 'Ethylacetylene'], options: ['But-1-yne', 'But-1-ene', 'Butyne', 'Pent-1-yne'], difficulty: 'Medium' },
    { section: 'D', marks: 3, data: 'CH₂=CH–C≡CH', correct: 'But-1-en-3-yne', alternates: ['1-Buten-3-yne'], options: ['But-1-en-3-yne', 'But-1-en-2-yne', 'Vinylacetylene', 'Pent-1-en-3-yne'], difficulty: 'Hard' },
    // Section E – Cyclic & Aromatic (4 marks each)
    { section: 'E', marks: 4, data: 'Cyclohexane with one methyl group', correct: 'Methylcyclohexane', options: ['Methylcyclohexane', 'Cyclohexylmethane', 'Hexylmethane', '3,3-Dimethylcyclohexane'], alternates: [], difficulty: 'Medium' },
    { section: 'E', marks: 4, data: 'Benzene with two methyl groups at 1,3 position', correct: '1,3-Dimethylbenzene', alternates: ['m-Xylene'], options: ['1,3-Dimethylbenzene', '1,2-Dimethylbenzene', '1,4-Dimethylbenzene', 'Trimethylbenzene'], difficulty: 'Medium' },
    { section: 'E', marks: 4, data: 'Benzene with –OH and –CH₃ at 1,2 position', correct: '2-Methylphenol', alternates: ['o-Cresol', '1-Hydroxy-2-methylbenzene'], options: ['2-Methylphenol', '4-Methylphenol', 'Methylphenol', 'Hydroxy toluene'], difficulty: 'Medium' },
    { section: 'E', marks: 4, data: 'C₆H₅–CH₂–Cl', correct: 'Benzyl chloride', options: ['Benzyl chloride', 'Phenyl chloride', 'Chlorobenzene', 'Benzal chloride'], alternates: ['(Chloromethyl)benzene', 'Chloromethylbenzene'], difficulty: 'Medium' },
    // Section F – Tricky / Special Cases (5 marks each)
    { section: 'F', marks: 5, data: 'CH₃–CH(CH₃)–CH(CH₃)–CH₃', correct: '2,3-Dimethylbutane', options: ['2,3-Dimethylbutane', '2-Methyl-3-methylbutane', 'Hexane', 'Pentane'], alternates: [], difficulty: 'Hard' },
    { section: 'F', marks: 5, data: 'CH₃–CH₂–CH(CH₃)–CH₂–CH₃', correct: '3-Methylpentane', options: ['3-Methylpentane', '2-Methylpentane', '3,3-Methylpentane', 'Isohexane'], alternates: [], difficulty: 'Medium' },
    { section: 'F', marks: 5, data: 'CH₃–CO–CH₂–CHO', correct: '3-Oxobutanal', alternates: ['Acetoacetaldehyde'], options: ['3-Oxobutanal', '2-Oxobutanal', '4-Oxobutanal', 'Ketoacetaldehyde'], difficulty: 'Hard' },
    { section: 'F', marks: 5, data: 'CH₃–CH(CH₃)–CH₂–CH₂–OH', correct: '3-Methylbutan-1-ol', alternates: [], options: ['3-Methylbutan-1-ol', '4-Methylbutan-1-ol', '2-Methylbutan-1-ol', '2-Methylpropanol'], difficulty: 'Hard' },
    // Additional questions
    { section: 'F', marks: 5, data: 'CH₃–CH(CH₃)–CH₂–CH(CH₃)–CH₃', correct: '2,4-Dimethylpentane', options: ['2,4-Dimethylpentane', '3,3-Dimethylpentane', '4-Methylhexane', 'Pentane'], alternates: [], difficulty: 'Hard' },
    { section: 'D', marks: 3, data: 'CH₃–CH(CH₂CH₃)–CH₂–CH₃', correct: '3-Methylpentane', alternates: [], options: ['3-Methylpentane', '2-Methylpentane', '2-Ethylbutane', '3-Methylbutane'], difficulty: 'Medium' },
    { section: 'E', marks: 4, data: 'Cyclohexane with one ethyl group', correct: 'Ethylcyclohexane', alternates: ['1-Ethylcyclohexane'], options: ['Ethylcyclohexane', 'Methylcyclohexane', 'Cyclohexylethane', 'Diethylcyclohexane'], difficulty: 'Medium' },
    { section: 'E', marks: 4, data: 'Cyclohexane with two methyl groups at 1,2 positions', correct: '1,2-Dimethylcyclohexane', options: ['1,2-Dimethylcyclohexane', 'o-Dimethylcyclohexane', '1,2-Cyclohexadiene', '3,3-Dimethylcyclohexane'], alternates: [], difficulty: 'Hard' },
    { section: 'E', marks: 4, data: 'Benzene with two methyl groups at 1,4 positions', correct: '1,4-Dimethylbenzene', alternates: ['p-Xylene'], options: ['1,4-Dimethylbenzene', '1,3-Dimethylbenzene', '4-Methylbenzene', 'Toluene'], difficulty: 'Medium' },
    { section: 'E', marks: 4, data: 'Benzene with –OH and –CH₃ at 1,4 positions', correct: '4-Methylphenol', options: ['4-Methylphenol', 'p-Cresol', '1-Hydroxy-4-methylbenzene', 'Phenol'], alternates: [], difficulty: 'Medium' },
    { section: 'A', marks: 1, data: 'CH₃–CH₂–CH₂–OH', correct: 'Propan-1-ol', alternates: ['1-Propanol', 'Propanol'], options: ['Propan-1-ol', 'Butan-1-ol', 'Pentan-1-ol', 'Ethanol'], difficulty: 'Easy' },
    { section: 'A', marks: 1, data: 'CH₃–CO–CH₃', correct: 'Propanone', alternates: ['Acetone', 'Propan-2-one'], options: ['Propanone', 'Butanone', 'Propanal', 'Pentanone'], difficulty: 'Easy' },
    { section: 'A', marks: 1, data: 'CH₃–CH₂–CHO', correct: 'Propanal', alternates: ['Propionaldehyde'], options: ['Propanal', 'Propanoic acid', 'Propan-1-al', 'Acetaldehyde'], difficulty: 'Easy' },
    { section: 'A', marks: 1, data: 'CH₃–CH₂–COOH', correct: 'Propanoic acid', alternates: ['Propionic acid'], options: ['Propanoic acid', 'Propan-1-ol', 'Propanic acid', 'Carboxypropane'], difficulty: 'Easy' },
    { section: 'B', marks: 2, data: 'CH₃–CH(CH₃)–CH₃', correct: '2-Methylpropane', alternates: ['Isobutane'], options: ['2-Methylpropane', 'Methylpropane', 'Propane', 'Butane'], difficulty: 'Easy' },
    { section: 'A', marks: 1, data: 'Isopropyl alcohol', correct: 'Propan-2-ol', alternates: ['Isopropyl alcohol', '2-Propanol'], options: ['Propan-2-ol', 'Propan-1-ol', 'Butan-2-ol', 'Pentan-2-ol'], difficulty: 'Easy' },
    { section: 'A', marks: 1, data: 'Acetone', correct: 'Propanone', alternates: ['Acetone', 'Propan-2-one'], options: ['Propanone', 'Butanone', 'Propanal', 'Propan-1-ol'], difficulty: 'Easy' },
    { section: 'A', marks: 1, data: 'Acetic acid', correct: 'Ethanoic acid', alternates: ['Acetic acid'], options: ['Ethanoic acid', 'Butanoic acid', 'Methane carboxylic acid', 'Acidic acid'], difficulty: 'Easy' },
    { section: 'B', marks: 2, data: 'Chloroform', correct: 'Trichloromethane', alternates: ['Chloroform'], options: ['Trichloromethane', 'Dichloromethane', 'Methenyl chloride', 'Methyl chloride'], difficulty: 'Medium' },
    // New multiple substituents questions
    { section: 'F', marks: 5, data: 'CH₃–CH₂–CH(CH₃)–CH(CH₃)–CH₃', correct: '2,3-Dimethylpentane', alternates: [], options: ['2,3-Dimethylpentane', '3,4-Dimethylpentane', '2,4-Dimethylpentane', '3-Methylhexane'], difficulty: 'Hard' },
    { section: 'F', marks: 5, data: 'CH₃–CH(CH₃)–CH₂–CH(CH₃)–CH₂–CH₃', correct: '2,4-Dimethylhexane', alternates: [], options: ['2,4-Dimethylhexane', '3,5-Dimethylhexane', '2,5-Dimethylhexane', '3,4-Dimethylhexane'], difficulty: 'Hard' },
    // New cyclic compound questions
    { section: 'E', marks: 4, data: 'Cyclohexane with ethyl and methyl groups at 1,3 positions', correct: '1-Ethyl-3-methylcyclohexane', alternates: [], options: ['1-Ethyl-3-methylcyclohexane', '1-Ethyl-4-methylcyclohexane', '1-Ethyl-2-methylcyclohexane', '3-Ethylcyclohexane'], difficulty: 'Hard' },
    { section: 'E', marks: 4, data: 'Cyclohexene with methyl at position 3', correct: '3-Methylcyclohexene', options: ['3-Methylcyclohexene', '1-Methylcyclohexene', '3,3-Methylcyclohexene', '3-Methylcyclohex-1-ene'], alternates: [], difficulty: 'Medium' },
    // New benzene derivative questions
    { section: 'E', marks: 4, data: 'Benzene with methyl and chlorine at 1,3 positions', correct: '1-Chloro-3-methylbenzene', alternates: ['m-Chlorotoluene', '3-Chlorotoluene'], options: ['1-Chloro-3-methylbenzene', '1-Chloro-4-methylbenzene', '3-Chloro-1-methylbenzene', 'Benzyl chloride'], difficulty: 'Hard' },
    { section: 'E', marks: 4, data: 'Benzene with methyl and chlorine at 1,2 positions', correct: '1-Chloro-2-methylbenzene', alternates: ['o-Chlorotoluene', '2-Chlorotoluene'], options: ['1-Chloro-2-methylbenzene', '1-Chloro-3-methylbenzene', '2-Chloro-1-methylbenzene', 'Benzyl chloride'], difficulty: 'Medium' },
    { section: 'E', marks: 4, data: 'Benzene with nitro and chlorine at 1,2 positions', correct: '1-Chloro-2-nitrobenzene', alternates: ['o-Chloronitrobenzene'], options: ['1-Chloro-2-nitrobenzene', '1-Chloro-3-nitrobenzene', '2-Chloro-1-nitrobenzene', 'Nitrochlorobenzene'], difficulty: 'Hard' },
    { section: 'E', marks: 4, data: 'C₆H₅–CH₂–CH₃', correct: 'Ethylbenzene', alternates: ['Phenylethane'], options: ['Ethylbenzene', 'Propylbenzene', 'Toluene', 'Benzene'], difficulty: 'Medium' },
    // Structure to name (reverse)
    { section: 'B', marks: 2, data: 'CH₃–CH(CH₃)–CH₂–CH₃', correct: '2-Methylbutane', options: ['2-Methylbutane', '3-Methylbutane', '3,3-Methylbutane', 'Pentane'], alternates: [], difficulty: 'Easy' },
    { section: 'B', marks: 2, data: 'CH₃–CH₂–CH(OH)–CH₃', correct: 'Butan-2-ol', alternates: ['2-Butanol', 'sec-Butanol'], options: ['Butan-2-ol', 'Pentan-2-ol', 'Butan-1-ol', 'Hexanol'], difficulty: 'Medium' },
    { section: 'B', marks: 2, data: 'CH₃–CO–CH₂–CH₃', correct: 'Butan-2-one', alternates: ['Butanone', 'Methyl ethyl ketone'], options: ['Butan-2-one', 'Butan-3-one', 'Pentan-2-one', 'Propanone'], difficulty: 'Medium' },
    { section: 'F', marks: 5, data: 'CH₃–CH(Cl)–CH₂–CH₂–OH', correct: '3-Chlorobutan-1-ol', options: ['3-Chlorobutan-1-ol', '4-Chlorobutan-1-ol', 'Chlorobutanol', '1-Chlorobutan-3-ol'], alternates: [], difficulty: 'Hard' }
];

// Render counter to prevent stale async callbacks
let renderCounter = 0;

// Application State (solves Global State Pollution)
const AppState = {
    currentMode: 'home',
    currentQuestionIndex: 0,
    score: 0,
    selectedOption: null,
    isAnswered: false,
    selectedDifficulty: 'all',
    mcqStats: {
        totalAnswered: 0,
        correctAnswers: 0,
        totalPoints: 0,
        correctPoints: 0
    },
    manualStats: {
        totalAnswered: 0,
        correctAnswers: 0,
        totalPoints: 0,
        correctPoints: 0
    },
    filteredQuestions: [],

    // Mock test state
    mockCurrentIndex: 0,
    mockScore: 0,
    mockAnswered: false,
    mockSelectedOption: null,
    mockTestResults: [],
    filteredMockQuestions: [],

    // Reset quiz state
    resetQuiz() {
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.selectedOption = null;
        this.isAnswered = false;
        this.filteredQuestions = [];
    },

    // Reset mock test state
    resetMockTest() {
        this.mockCurrentIndex = 0;
        this.mockScore = 0;
        this.mockAnswered = false;
        this.mockSelectedOption = null;
        this.mockTestResults = [];
        this.filteredMockQuestions = [];
    },

    // Reset all stats
    resetStats() {
        this.mcqStats = { totalAnswered: 0, correctAnswers: 0, totalPoints: 0, correctPoints: 0 };
        this.manualStats = { totalAnswered: 0, correctAnswers: 0, totalPoints: 0, correctPoints: 0 };
    }
};

// Backward compatibility aliases (deprecated - use AppState instead)
let currentMode = AppState.currentMode;
let currentQuestionIndex = AppState.currentQuestionIndex;
let score = AppState.score;
let selectedOption = AppState.selectedOption;
let isAnswered = AppState.isAnswered;
let selectedDifficulty = AppState.selectedDifficulty;
let mcqStats = AppState.mcqStats;
let manualStats = AppState.manualStats;
let filteredQuestions = AppState.filteredQuestions;
let mockCurrentIndex = AppState.mockCurrentIndex;
let mockScore = AppState.mockScore;
let mockAnswered = AppState.mockAnswered;
let mockSelectedOption = AppState.mockSelectedOption;
let mockTestResults = AppState.mockTestResults;
let filteredMockQuestions = AppState.filteredMockQuestions;

// Error Boundary System (solves No Error Boundaries)
const ErrorBoundary = {
    libraries: {
        smilesDrawer: false,
        threeJS: false,
        vanta: false
    },

    checkAll() {
        return this.libraries.smilesDrawer && this.libraries.threeJS && this.libraries.vanta;
    },

    init() {
        // Check SmilesDrawer
        this.libraries.smilesDrawer = typeof SmilesDrawer !== 'undefined';
        
        // Check Three.js
        this.libraries.threeJS = typeof THREE != 'undefined';
        
        // Check Vanta - will be checked after initialization
        
        if (!this.libraries.smilesDrawer) {
            console.warn('SmilesDrawer not loaded - molecular rendering disabled');
        }
        if (!this.libraries.threeJS) {
            console.warn('Three.js not loaded - background effects disabled');
        }
    },

    showError(message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-banner';
        errorDiv.setAttribute('role', 'alert');
        errorDiv.setAttribute('aria-live', 'assertive');
        errorDiv.innerHTML = `<strong>Warning:</strong> ${message}`;
        document.body.insertBefore(errorDiv, document.body.firstChild);
        setTimeout(() => errorDiv.remove(), 5000);
    }
};

// Input Validation (solves No Input Validation)
const InputValidator = {
    sanitizeHTML(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    },

    validateIUPACName(input) {
        const sanitized = this.sanitizeHTML(input.trim());
        
        // Check for empty
        if (!sanitized) return { valid: false, error: 'Input cannot be empty' };
        
        // Check max length
        if (sanitized.length > 100) return { valid: false, error: 'Input too long (max 100 characters)' };
        
        // Check for potential script injection patterns
        const dangerous = /<script|javascript:|onerror|onclick|onload/i;
        if (dangerous.test(sanitized)) return { valid: false, error: 'Invalid characters in input' };
        
        return { valid: true, value: sanitized };
    }
};

// Tutorial Observer (fixes Event Listener Memory Leak)
let tutorialObserver = null;

function createTutorialObserver() {
    if (tutorialObserver) {
        tutorialObserver.disconnect();
    }

    const canvases = document.querySelectorAll('.tutorial-smiles:not(.rendered)');
    if (canvases.length === 0) return;

    let localDrawer = new SmilesDrawer.Drawer({
        width: 280,
        height: 100,
        bondThickness: 2.4,
        atomVisualization: 'default'
    });

    const renderCanvas = (canvas) => {
        const smiles = canvas.getAttribute('data-smiles');
        if (smiles) {
            const width = canvas.getAttribute('width') || 280;
            const height = canvas.getAttribute('height') || 100;
            canvas.width = parseInt(width);
            canvas.height = parseInt(height);

            SmilesDrawer.parse(smiles, function(tree) {
                localDrawer.draw(tree, canvas, 'dark', false);
                canvas.classList.add('rendered');
            }, function(err) {
                console.error('Error parsing tutorial smiles:', err);
            });
        }
    };

    tutorialObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                renderCanvas(entry.target);
                tutorialObserver.unobserve(entry.target);
            }
        });
    }, { rootMargin: '100px' });

    canvases.forEach(canvas => tutorialObserver.observe(canvas));
}

function destroyTutorialObserver() {
    if (tutorialObserver) {
        tutorialObserver.disconnect();
        tutorialObserver = null;
    }
}

// Accessibility Announcer (solves Accessibility Gap)
const AccessibilityAnnouncer = {
    announce(message, priority = 'polite') {
        const announcer = document.createElement('div');
        announcer.setAttribute('role', 'status');
        announcer.setAttribute('aria-live', priority);
        announcer.setAttribute('aria-atomic', 'true');
        announcer.className = 'sr-only';
        announcer.textContent = message;
        document.body.appendChild(announcer);
        setTimeout(() => announcer.remove(), 1000);
    },

    announceScore(points) {
        this.announce(`Score increased by ${points}. New score: ${AppState.score}`);
    },

    announceAccuracy(accuracy) {
        this.announce(`Accuracy is now ${accuracy} percent`);
    },

    announceQuestionNumber(current, total) {
        this.announce(`Question ${current + 1} of ${total}`);
    }
};

function saveStats() {
    localStorage.setItem('mcqStats', JSON.stringify(mcqStats));
    localStorage.setItem('manualStats', JSON.stringify(manualStats));
}

function loadStats() {
    try {
        const savedMcqStats = localStorage.getItem('mcqStats');
        const savedManualStats = localStorage.getItem('manualStats');
        if (savedMcqStats) {
            mcqStats = JSON.parse(savedMcqStats);
        }
        if (savedManualStats) {
            manualStats = JSON.parse(savedManualStats);
        }
    } catch (e) {
        console.warn('Could not load stats from localStorage:', e);
    }
}

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
const mockAccuracyDisplay = document.getElementById('mock-accuracy');
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
const bgMolecules = document.getElementById('bg-molecules');

// SmilesDrawer initialization
let smilesDrawer;

function init() {
    // Initialize Error Boundary - check all external libraries
    ErrorBoundary.init();
    
    // Check if SmilesDrawer loaded, if not show warning but continue
    if (!ErrorBoundary.libraries.smilesDrawer) {
        document.getElementById('quiz-view').classList.add('library-warning');
    }

    // Initialize SmilesDrawer setup (with error handling)
    try {
        smilesDrawer = new SmilesDrawer.Drawer({
            width: 400,
            height: 300,
            bondThickness: 2.4,
            atomVisualization: 'default'
        });
    } catch (e) {
        console.warn('Could not initialize SmilesDrawer:', e);
    }

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

    // Difficulty filter buttons
    document.querySelectorAll('.diff-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedDifficulty = btn.dataset.difficulty;
        });
    });

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
        const isExpanded = !revisionMockContent.classList.contains('hidden');
        revisionMockBtn.setAttribute('aria-expanded', isExpanded);
    });

    shortNotesBtn.addEventListener('click', () => {
        openRevisionNotes();
    });

    mockTestBtn.addEventListener('click', () => {
        mockTestBtn.classList.toggle('active');
        mockTestOptions.classList.toggle('hidden');
        const isExpanded = !mockTestOptions.classList.contains('hidden');
        mockTestBtn.setAttribute('aria-expanded', isExpanded);
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
    document.getElementById('back-to-basics-from-results').addEventListener('click', openBasics);
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
        createTutorialObserver();
    }, 150);
    
    // Accessibility: Manage focus
    manageFocus('basics-view');
}

function renderTutorialCanvases() {
    const canvases = document.querySelectorAll('.tutorial-smiles:not(.rendered)');
    
    if (canvases.length === 0) return;
    
    let localDrawer = new SmilesDrawer.Drawer({
        width: 280,
        height: 100,
        bondThickness: 2,
        atomVisualization: 'default'
    });

    const renderCanvas = (canvas) => {
        const smiles = canvas.getAttribute('data-smiles');
        if (smiles) {
            const width = canvas.getAttribute('width') || 280;
            const height = canvas.getAttribute('height') || 100;
            canvas.width = parseInt(width);
            canvas.height = parseInt(height);
            
            SmilesDrawer.parse(smiles, function(tree) {
                localDrawer.draw(tree, canvas, 'light', false);
                canvas.classList.add('rendered');
            }, function(err) {
                console.error('Error parsing tutorial smiles:', err);
            });
        }
    };

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    renderCanvas(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { rootMargin: '100px' });

        canvases.forEach(canvas => observer.observe(canvas));
    } else {
        canvases.forEach(canvas => renderCanvas(canvas));
    }
}

function updateBgMolecules() {
    const show = !quizView.classList.contains('hidden') ||
                 !mockTestView.classList.contains('hidden') ||
                 !mockResultsView.classList.contains('hidden');
    bgMolecules.style.display = show ? 'block' : 'none';
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
    updateStatsDisplay();
    updateBgMolecules();
    
    // Clean up tutorial observer to prevent memory leak
    destroyTutorialObserver();
    
    // Accessibility: Manage focus
    manageFocus('home-view');
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
    
    // Accessibility: Manage focus
    manageFocus('qa-view');
    
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
    
    // Accessibility: Manage focus
    manageFocus('revision-notes-view');
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
                <tr><td>7</td><td>hept</td></tr>
                <tr><td>8</td><td>oct</td></tr>
                <tr><td>9</td><td>non</td></tr>
                <tr><td>10</td><td>dec</td></tr>
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
                👉 COOH > –CN > CHO > CO > OH > NH₂ > C≡C > C=C > X (halogen)
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
            if (q.alternates) {
                displayAnswer = q.correct + ' / ' + q.alternates.join(' / ');
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
    updateBgMolecules();

    mockCurrentIndex = 0;
    mockScore = 0;
    mockAnswered = false;
    mockSelectedOption = null;
    mockTestResults = [];

    // Filter mock test questions by difficulty
    filteredMockQuestions = [];
    if (selectedDifficulty === 'all') {
        filteredMockQuestions = [...mockTestQuestions];
    } else {
        filteredMockQuestions = mockTestQuestions.filter(q => q.difficulty === selectedDifficulty);
    }

    // Shuffle questions within each section
    const sections = ['A', 'B', 'C', 'D', 'E', 'F'];
    const shuffledBySection = {};
    sections.forEach(sec => {
        const sectionQuestions = filteredMockQuestions.filter(q => q.section === sec);
        sectionQuestions.sort(() => Math.random() - 0.5);
        shuffledBySection[sec] = sectionQuestions;
    });

    // Rebuild mockTestQuestions in shuffled order
    filteredMockQuestions.length = 0;
    sections.forEach(sec => {
        shuffledBySection[sec].forEach(q => filteredMockQuestions.push(q));
    });

    filteredMockQuestions.forEach(q => {
        q.options.sort(() => Math.random() - 0.5);
    });

    renderMockQuestion(filteredMockQuestions);
    
    // Accessibility: Manage focus
    manageFocus('mock-test-view');
}

function renderMockQuestionStructure(q, canvas) {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const currentRender = ++renderCounter;
    const dataStr = q.structure || q.smiles || q.data;
    
    // Use explicit SMILES/structure field if available
    if (q.smiles || q.structure) {
        canvas.width = 400;
        canvas.height = 300;
        let mockDrawer = new SmilesDrawer.Drawer({
            width: 400, height: 300, bondThickness: 2.4, atomVisualization: 'default'
        });
        SmilesDrawer.parse(dataStr, function(tree) {
            if (currentRender !== renderCounter) return;
            mockDrawer.draw(tree, canvas, 'dark', false);
        }, function(err) {
            if (currentRender !== renderCounter) return;
            console.warn('Mock SMILES parse error:', err);
            drawMockFallback(ctx, canvas.width, canvas.height, dataStr);
        });
        return;
    }
    
    // Try convertToSmiles for text formula data
    const smiles = convertToSmiles(q.data);
    if (smiles) {
        canvas.width = 400;
        canvas.height = 300;
        let mockDrawer = new SmilesDrawer.Drawer({
            width: 400, height: 300, bondThickness: 2.4, atomVisualization: 'default'
        });
        SmilesDrawer.parse(smiles, function(tree) {
            if (currentRender !== renderCounter) return;
            mockDrawer.draw(tree, canvas, 'dark', false);
        }, function(err) {
            if (currentRender !== renderCounter) return;
            console.warn('Mock SMILES render error:', err);
            drawMockFallback(ctx, canvas.width, canvas.height, dataStr);
        });
        return;
    }
    
    // Fallback: check if data is a descriptive sentence or common name — show as text instead of placeholder
    if (dataStr.includes(' ') && /[a-z].*[a-z]/.test(dataStr) && (dataStr.includes('with') || dataStr.includes(' at ') || dataStr.includes(' and ') || dataStr.includes('group') || dataStr.includes('position'))) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'rgba(57, 255, 20, 0.08)';
        ctx.font = '18px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(dataStr, canvas.width / 2, canvas.height / 2);
        return;
    }
    
    // Fallback: draw safe placeholder
    drawMockFallback(ctx, canvas.width, canvas.height, dataStr);
}

function drawMockFallback(ctx, w, h, dataStr) {
    ctx.clearRect(0, 0, w, h);
    const cx = w / 2, cy = h / 2;
    const r = Math.min(w, h) * 0.3;
    
    // Check if aromatic
    if (dataStr.toLowerCase().includes('benzene') || dataStr.toLowerCase().includes('phenyl') || dataStr.toLowerCase().includes('phenol') || dataStr.toLowerCase().includes('xylene') || dataStr.toLowerCase().includes('toluene')) {
        ctx.strokeStyle = 'rgba(57, 255, 20, 0.35)';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
            const a = (i * 2 * Math.PI / 6) - Math.PI / 2;
            const x = cx + r * Math.cos(a);
            const y = cy + r * Math.sin(a);
            if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.stroke();
        ctx.strokeStyle = 'rgba(57, 255, 20, 0.15)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(cx, cy, r * 0.85, 0, Math.PI * 2);
        ctx.stroke();
        return;
    }
    
    // Check if cyclic
    if (dataStr.toLowerCase().includes('cyclo')) {
        ctx.strokeStyle = 'rgba(57, 255, 20, 0.25)';
        ctx.lineWidth = 2;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
        return;
    }
    
    // Common name or formula-like text — display as readable text
    if ((!/^[A-Z][a-z]?\d/.test(dataStr) && dataStr.length > 1) || dataStr.includes('--')) {
        ctx.fillStyle = 'rgba(57, 255, 20, 0.08)';
        ctx.font = '18px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(dataStr, cx, cy);
        return;
    }
    
    // Neutral placeholder — clean circle without text label
    ctx.strokeStyle = 'rgba(57, 255, 20, 0.20)';
    ctx.lineWidth = 2;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
}

function renderMockQuestion(filteredQuestions) {
    filteredMockQuestions = filteredQuestions;
    const q = filteredMockQuestions[mockCurrentIndex];
    
    mockScoreDisplay.textContent = mockScore;
    mockTotalDisplay.textContent = mockCurrentIndex + 1;

    // Calculate and display accuracy based on points
    const pointsMap = { 'Easy': 1, 'Medium': 2, 'Hard': 3 };
    let totalPoints = 0;
    let correctPoints = 0;
    for (let i = 0; i < mockTestResults.length; i++) {
        if (mockTestResults[i] !== undefined) {
            const q = filteredMockQuestions[i];
            const pts = pointsMap[q.difficulty] || 1;
            totalPoints += pts;
            if (mockTestResults[i]) correctPoints += pts;
        }
    }
    const accuracy = totalPoints > 0 ? Math.round((correctPoints / totalPoints) * 100) : 0;
    mockAccuracyDisplay.textContent = accuracy + '%';

    // Render progress dots
    mockProgress.innerHTML = '';
    for (let i = 0; i < filteredMockQuestions.length; i++) {
        const dot = document.createElement('div');
        dot.className = 'progress-dot';
        if (i === mockCurrentIndex) dot.classList.add('current');
        if (mockTestResults[i] === true) dot.classList.add('correct');
        if (mockTestResults[i] === false) dot.classList.add('wrong');
        mockProgress.appendChild(dot);
    }

    // Render question text
    mockQuestionText.innerHTML = q.data;

    // Draw structure using safe pipeline
    renderMockQuestionStructure(q, mockStructureCanvas);

    // Render options with accessibility attributes
    mockOptionsContainer.innerHTML = '';
    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt;
        btn.setAttribute('role', 'radio');
        btn.setAttribute('aria-label', `Option ${index + 1}: ${opt}`);
        btn.setAttribute('aria-checked', 'false');
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
        'HO–CH₂–CH(NH₂)–COOH': 'C(C(C(=O)O)N)O',
        'CH₂=CH–CH=CH₂': 'C=CC=C',
        'CH₂=CH–CH(CH₃)–CH=CH₂': 'C=CC(C)C=C',
        'CH≡C–CH₂–CH₃': 'C#CCC',
        'CH₂=CH–C≡CH': 'C=CC#C',
        'CH₃–CH(CH₃)–CH(CH₃)–CH₃': 'CC(C)C(C)C',
        'CH₃–CH₂–CH(CH₃)–CH₂–CH₃': 'CCC(C)CC',
        'CH₃–CO–CH₂–CHO': 'CC(=O)CC=O',
        'CH₃–CH(CH₃)–CH₂–CH₂–OH': 'CC(C)CCO',
        'CH₃–CH₂–CH₂–CH₂–CH₃': 'CCCCC',
        'CH₃–CH₂–CH₂–CH₂–CH₂–CH₃': 'CCCCCC',
        'CH₃–CH₂–CH₂–CH₂–CH₂–CH₂–CH₃': 'CCCCCCC',
        'CH₃–CH₂–CH₂–OH': 'CCCO',
        'CH₃–CO–CH₃': 'CC(=O)C',
        'CH₃–CH₂–CHO': 'CCC=O',
        'CH₃–CH₂–COOH': 'CCC(=O)O',
        'CH₂=CH–CH=CH–CH₃': 'C=CC=CC',
        'CH₃–CH₂–CH(OH)–CH₃': 'CCC(C)O',
        'CH₃–CO–CH₂–CH₂–CH₂–OH': 'CC(=O)CCCO',
        'CH₃–CH(Cl)–CH₂–CH₂–OH': 'CC(Cl)CCO',
        'CH₃–CH₂–CH₂–CH₂–CHO': 'CCCCC=O',
        'CH₃–CH₂–CH₂–CH₂–COOH': 'CCCCC(=O)O',
        'CH₂=CH–CH₂–CH₂–CH₂–CH₃': 'C=CCCCC',
        'CH≡C–CH₂–CH₂–CH₂–CH₃': 'C#CCCCC',
        'CH₃–CH(CH₃)–CH₂–CH₂–CH₃': 'CC(C)CCC',
        'CH₃–CH₂–CH(CH₃)–CH₂–CH₃': 'CCC(C)CC',
        'CH₃–CO–CH₂–CH₂–CH₂–CH₃': 'CC(=O)CCCC',
        'CH₃–CH₂–CH₂–CH₂–CO–CH₃': 'CCCCC(=O)C',
        'CH₃–CH₂–CH₂–CH₂–CH₂–CHO': 'CCCCCC=O',
        'CH₃–CH₂–CH₂–CH₂–CH₂–COOH': 'CCCCCC(=O)O',
        'CH₂=CH–CH₂–CH₂–CH₂–CH₂–CH₃': 'C=CCCCCC',
        'CH≡C–CH₂–CH₂–CH₂–CH₂–CH₃': 'C#CCCCCC',
        'CH₃–CH₂–C≡C–CH₃': 'CCC#CC',
        'CH₃–CH₂–CH₂–CH₂–CH₂–CO–CH₃': 'CCCCCC(=O)C'
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
        b.setAttribute('aria-checked', 'false');
    });
    btn.style.background = 'rgba(57, 255, 20, 0.15)';
    btn.style.borderColor = 'rgba(57, 255, 20, 0.8)';
    btn.setAttribute('aria-checked', 'true');
}

function handleMockAnswer() {
    if (!mockSelectedOption || mockAnswered) return;
    
    const q = filteredMockQuestions[mockCurrentIndex];
    // Only check exact match for mock test - no alternatives
    const isCorrect = mockSelectedOption === q.correct;
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
        if (btn.textContent === q.correct) {
            btn.classList.add('correct');
        }
        if (btn.textContent === mockSelectedOption && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });

    mockActionBtn.classList.add('hidden');
    mockNextBtn.classList.remove('hidden');
}

function nextMockQuestion() {
    mockCurrentIndex++;
    if (mockCurrentIndex >= filteredMockQuestions.length) {
        showMockResults();
    } else {
        mockActionBtn.classList.remove('hidden');
        renderMockQuestion(filteredMockQuestions);
    }
}

function showMockResults() {
    mockTestView.classList.add('hidden');
    mockResultsView.classList.remove('hidden');
    updateBgMolecules();
    
    // Accessibility: Manage focus
    manageFocus('mock-results-view');

    const totalMarks = filteredMockQuestions.reduce((sum, q) => sum + q.marks, 0);
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
            ${filteredMockQuestions.map((q, i) => {
                let correctDisplay = q.correct;
                if (q.alternates) {
                    correctDisplay = q.correct + ' / ' + q.alternates.join(' / ');
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

    // Filter questions by difficulty
    if (selectedDifficulty === 'all') {
        filteredQuestions = [...questions];
    } else {
        filteredQuestions = questions.filter(q => q.difficulty === selectedDifficulty);
    }
    
    // Reshuffle
    filteredQuestions.sort(() => Math.random() - 0.5);
    filteredQuestions.forEach(q => {
        q.options.sort(() => Math.random() - 0.5);
    });

    homeView.classList.add('hidden');
    quizView.classList.remove('hidden');
    document.body.classList.remove('theme-home');
    updateBgMolecules();

    loadQuestion();
    
    // Accessibility: Manage focus
    manageFocus('quiz-view');
}

function isChemicalName(str) {
    if (!str) return false;
    const namePatterns = [
        /^[A-Z][a-z]/, 'benzene', 'methyl', 'ethyl', 'propyl', 'butyl', 'pentyl',
        'hexyl', 'heptyl', 'octyl', 'cyclo', 'phenol', 'amine', 'acid',
        'chloro', 'bromo', 'iodo', 'fluoro', 'nitro', 'hydroxy', 'oxo',
        'phenyl', 'benzyl', 'methoxy', 'ethoxy'
    ];
    for (const p of namePatterns) {
        if (p instanceof RegExp && p.test(str)) return true;
        if (typeof p === 'string' && str.toLowerCase().includes(p)) return true;
    }
    return false;
}

function isCondensedFormula(str) {
    if (!str) return false;
    // Has HTML subscript tags (real condensed formula)
    if (str.includes('<sub>')) return true;
    // Contains triple bond symbol
    if (str.includes('&equiv;')) return true;
    // Starts with CH followed by subscript number or special chars (condensed pattern)
    if (/^CH[₃₂]/.test(str) || /^CH<sub>/.test(str)) return true;
    // Has chemical bond patterns like CH₃–CH₂ or CH=CH or CH≡CH
    if (/CH[₃₂]?[-–=≡]CH/.test(str)) return true;
    // Contains explicit condensed formula patterns (C followed by numbers in subscripts or sub)
    if (/C<sub>\d+/.test(str)) return true;
    // Unicode condensed formulas
    if (/^[CHON][₃₂₁]?[-–=≡]/.test(str)) return true;
    // Plain condensed formula like HCOOH, CH3OH, C2H5OH, CHCl3 (element symbols + digits, no spaces)
    if (/^[A-Z][a-z]?\d*([A-Z][a-z]?\d*)+\d*$/.test(str) && !isChemicalName(str) && !str.includes(' ')) return true;
    return false;
}

function drawNeutralPlaceholder(ctx, w, h, label) {
    ctx.clearRect(0, 0, w, h);
    const cx = w / 2, cy = h / 2;
    const r = Math.min(w, h) * 0.3;
    
    ctx.strokeStyle = 'rgba(57, 255, 20, 0.25)';
    ctx.lineWidth = 2;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
    
    ctx.fillStyle = 'rgba(57, 255, 20, 0.06)';
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = 'rgba(57, 255, 20, 0.15)';
    ctx.font = '14px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(label || 'Molecule', cx, cy);
}

function drawBenzeneRing(ctx, w, h) {
    ctx.clearRect(0, 0, w, h);
    const cx = w / 2, cy = h / 2;
    const r = Math.min(w, h) * 0.28;
    const sides = 6;
    const innerR = r * 0.85;
    
    ctx.strokeStyle = 'rgba(57, 255, 20, 0.35)';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    for (let i = 0; i < sides; i++) {
        const angle = (i * 2 * Math.PI / sides) - Math.PI / 2;
        const x = cx + r * Math.cos(angle);
        const y = cy + r * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.stroke();
    
    ctx.strokeStyle = 'rgba(57, 255, 20, 0.15)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(cx, cy, innerR, 0, Math.PI * 2);
    ctx.stroke();
}

function renderQuestionStructure(q, canvas, condensedDisplay) {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    condensedDisplay.classList.add('hidden');
    canvas.classList.remove('hidden');
    
    const currentRender = ++renderCounter;
    const dataStr = q.structure || q.smiles || q.data;
    
    // Name-to-structure: the name IS the question prompt, display it
    if (q.type === 'name-to-structure') {
        canvas.classList.add('hidden');
        condensedDisplay.classList.remove('hidden');
        condensedDisplay.innerHTML = `<span style="font-size:1.4rem;color:var(--text-chemical);">${q.data}</span>`;
        return;
    }
    
    // SMILES or explicit structure field
    if (q.type === 'smiles' || (q.structure && !q.structure.includes('<sub>'))) {
        canvas.classList.remove('hidden');
        condensedDisplay.classList.add('hidden');
        const smilesStr = q.smiles || q.structure || q.data;
        SmilesDrawer.parse(smilesStr, function (tree) {
            if (currentRender !== renderCounter) return;
            try {
                smilesDrawer.draw(tree, canvas, 'dark', false);
            } catch (e) {
                console.warn('SmilesDrawer draw failed:', e);
                drawNeutralPlaceholder(ctx, canvas.width, canvas.height, '');
            }
        }, function (err) {
            if (currentRender !== renderCounter) return;
            console.warn('Smiles parse error:', err);
            if (dataStr.toLowerCase().includes('benzene') || dataStr.toLowerCase().includes('phenyl') || dataStr.toLowerCase().includes('phenol')) {
                drawBenzeneRing(ctx, canvas.width, canvas.height);
            } else if (dataStr.includes('c1') || dataStr.includes('C1') || dataStr.includes('1')) {
                drawBenzeneRing(ctx, canvas.width, canvas.height);
            } else {
                drawNeutralPlaceholder(ctx, canvas.width, canvas.height, '');
            }
        });
        return;
    }
    
    // Condensed structure (real chemical formula with HTML subscripts)
    if (isCondensedFormula(q.data)) {
        canvas.classList.add('hidden');
        condensedDisplay.classList.remove('hidden');
        condensedDisplay.innerHTML = q.data;
        return;
    }
    
    // Data is a descriptive sentence (multi-word English description) — show as readable text
    if (dataStr.includes(' ') && /[a-z].*[a-z]/.test(dataStr) && (dataStr.includes('with') || dataStr.includes(' at ') || dataStr.includes(' and ') || dataStr.includes('group') || dataStr.includes('position'))) {
        canvas.classList.add('hidden');
        condensedDisplay.classList.remove('hidden');
        condensedDisplay.innerHTML = `<span style="font-size:1.2rem;color:var(--text-chemical);">${dataStr}</span>`;
        return;
    }
    
    // Data is a chemical name or description — show safe placeholder
    canvas.classList.remove('hidden');
    condensedDisplay.classList.add('hidden');
    if (dataStr.toLowerCase().includes('benzene') || dataStr.toLowerCase().includes('phenyl') || dataStr.toLowerCase().includes('phenol') || dataStr.toLowerCase().includes('xylene') || dataStr.toLowerCase().includes('toluene')) {
        drawBenzeneRing(ctx, canvas.width, canvas.height);
    } else if (dataStr.toLowerCase().includes('cyclo')) {
        drawNeutralPlaceholder(ctx, canvas.width, canvas.height, '');
    } else {
        drawNeutralPlaceholder(ctx, canvas.width, canvas.height, '');
    }
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
    
    const currentQuestion = filteredQuestions[currentQuestionIndex];
    
    // Render structure using safe pipeline
    renderQuestionStructure(currentQuestion, canvas, condensedDisplay);

    if (currentMode === 'mcq') {
        // Render options with accessibility attributes
        optionsContainer.innerHTML = '';
        currentQuestion.options.forEach((option, index) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerHTML = option;
            btn.setAttribute('role', 'radio');
            btn.setAttribute('aria-label', `Option ${index + 1}: ${option}`);
            btn.setAttribute('aria-checked', 'false');
            btn.addEventListener('click', () => selectOption(btn, option));
            optionsContainer.appendChild(btn);
        });
    }
}

function selectOption(btnElement, optionText) {
    if (isAnswered || currentMode !== 'mcq') return;

    // Deselect previously selected
    const allOptions = document.querySelectorAll('.option-btn');
    allOptions.forEach(btn => {
        btn.classList.remove('selected');
        btn.setAttribute('aria-checked', 'false');
    });

    // Select new
    btnElement.classList.add('selected');
    btnElement.setAttribute('aria-checked', 'true');
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
    const currentQuestion = filteredQuestions[currentQuestionIndex];
    isAnswered = true;
    
    let isCorrect = false;
    let customExplanationPrefix = '';

    if (currentMode === 'mcq') {
        const allOptions = document.querySelectorAll('.option-btn');
        const alternates = currentQuestion.alternates || [];
        allOptions.forEach(btn => {
            btn.disabled = true; // Disable further clicking
            const isCorrectAnswer = btn.textContent === currentQuestion.correct || alternates.includes(btn.textContent);
            const isWrongSelection = btn.textContent === selectedOption && !isCorrectAnswer;
            if (isCorrectAnswer) {
                btn.classList.add('correct');
            } else if (isWrongSelection) {
                btn.classList.add('incorrect');
            }
        });
        isCorrect = (selectedOption === currentQuestion.correct || alternates.includes(selectedOption));
    } else {
        manualInput.disabled = true;
        let userInput = manualInput.value.trim();
        
        // Validate and sanitize input
        const validation = InputValidator.validateIUPACName(userInput);
        if (!validation.valid) {
            feedbackContainer.classList.remove('hidden');
            feedbackContainer.className = 'feedback-container error';
            feedbackContainer.setAttribute('role', 'alert');
            document.getElementById('feedback-message').textContent = validation.error;
            document.getElementById('correct-answer-display').textContent = '';
            isAnswered = true;
            actionBtn.textContent = 'Next Question';
            actionBtn.setAttribute('aria-label', 'Next question');
            return;
        }
        userInput = validation.value;
        
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

    // Calculate points based on difficulty
    const pointsMap = { 'Easy': 1, 'Medium': 2, 'Hard': 3 };
    const points = pointsMap[currentQuestion.difficulty] || 1;

    // Update statistics based on mode
    if (currentMode === 'mcq') {
        mcqStats.totalAnswered++;
        mcqStats.totalPoints = (mcqStats.totalPoints || 0) + points;
        if (isCorrect) {
            mcqStats.correctAnswers++;
            mcqStats.correctPoints = (mcqStats.correctPoints || 0) + points;
        }
    } else {
        manualStats.totalAnswered++;
        manualStats.totalPoints = (manualStats.totalPoints || 0) + points;
        if (isCorrect) {
            manualStats.correctAnswers++;
            manualStats.correctPoints = (manualStats.correctPoints || 0) + points;
        }
    }
    updateStatsDisplay();
    saveStats();

    feedbackContainer.classList.remove('hidden');
    howBtn.classList.remove('hidden');

    if (isCorrect) {
        score += points;
        scoreDisplay.textContent = score;
        
        // Accessibility announcement for correct answer
        AccessibilityAnnouncer.announceScore(points);
        
        feedbackContainer.className = 'feedback-container success';
        feedbackContainer.setAttribute('role', 'alert');
        feedbackMessage.textContent = `Correct! (+${points} point${points > 1 ? 's' : ''})`;
        correctAnswerDisplay.textContent = '';
    } else {
        feedbackContainer.className = 'feedback-container error';
        feedbackContainer.setAttribute('role', 'alert');
        feedbackMessage.textContent = `Incorrect! (+0 points)`;
        correctAnswerDisplay.textContent = `The correct answer was: ${currentQuestion.correct}`;
        
        // Accessibility announcement for incorrect answer
        AccessibilityAnnouncer.announce(`Incorrect. The correct answer is ${currentQuestion.correct}`);
    }

    // Accessibility: Update button label
    actionBtn.setAttribute('aria-label', 'Next question');

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

function updateStatsDisplay() {
    // Update MCQ mode stats on homepage
    document.getElementById('mcq-answered').textContent = mcqStats.totalAnswered;
    const mcqAccuracy = mcqStats.totalPoints > 0 
        ? Math.round((mcqStats.correctPoints / mcqStats.totalPoints) * 100) 
        : 0;
    document.getElementById('mcq-accuracy').textContent = mcqAccuracy + '%';

    // Update Manual mode stats on homepage
    document.getElementById('manual-answered').textContent = manualStats.totalAnswered;
    const manualAccuracy = manualStats.totalPoints > 0 
        ? Math.round((manualStats.correctPoints / manualStats.totalPoints) * 100) 
        : 0;
    document.getElementById('manual-accuracy').textContent = manualAccuracy + '%';

    // Update quiz view accuracy (current session)
    const currentStats = currentMode === 'mcq' ? mcqStats : manualStats;
    const sessionAccuracy = currentStats.totalPoints > 0 
        ? Math.round((currentStats.correctPoints / currentStats.totalPoints) * 100) 
        : 0;
    const accuracyEl = document.getElementById('quiz-accuracy');
    if (accuracyEl) {
        accuracyEl.textContent = sessionAccuracy + '%';
        
        // Accessibility: Announce accuracy changes during quiz (not on initial page load)
        if (currentMode === 'mcq' || currentMode === 'manual') {
            AccessibilityAnnouncer.announceAccuracy(sessionAccuracy);
        }
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    
    // If we've reached the end of the question list, shuffle and loop back
    if (currentQuestionIndex >= filteredQuestions.length) {
        currentQuestionIndex = 0;
        filteredQuestions.sort(() => Math.random() - 0.5);
        filteredQuestions.forEach(q => {
            q.options.sort(() => Math.random() - 0.5);
        });
    }

    // Clear canvas
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    loadQuestion();
    
    // Accessibility: Focus the first option after loading new question
    setTimeout(() => {
        const firstOption = document.querySelector('.option-btn');
        if (firstOption) firstOption.focus();
    }, 100);
}

// Accessibility: Focus management for view changes
function manageFocus(viewId) {
    const mainContent = document.getElementById('main-content');
    
    // Announce view change for screen readers
    const viewNames = {
        'home-view': 'Home page',
        'basics-view': 'Complete Basics tutorial',
        'quiz-view': 'Quiz practice',
        'qa-view': 'Questions and Answers',
        'mock-test-view': 'Mock test',
        'mock-results-view': 'Test results',
        'revision-notes-view': 'Revision notes'
    };
    
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = `Navigated to ${viewNames[viewId] || 'new view'}`;
    mainContent.appendChild(announcement);
    
    // Remove announcement after screen reader has time to read it
    setTimeout(() => announcement.remove(), 1000);
    
    // Focus the first focusable element in the new view
    setTimeout(() => {
        const newView = document.getElementById(viewId);
        if (newView) {
            const focusable = newView.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            if (focusable) {
                focusable.focus();
            }
        }
    }, 100);
}

// Accessibility: Keyboard navigation for mode cards
function initKeyboardNavigation() {
    const modeCards = document.querySelectorAll('.mode-card');
    
    modeCards.forEach((card, index) => {
        card.addEventListener('keydown', (e) => {
            let targetIndex;
            
            switch (e.key) {
                case 'ArrowRight':
                case 'ArrowDown':
                    e.preventDefault();
                    targetIndex = (index + 1) % modeCards.length;
                    modeCards[targetIndex].focus();
                    break;
                case 'ArrowLeft':
                case 'ArrowUp':
                    e.preventDefault();
                    targetIndex = (index - 1 + modeCards.length) % modeCards.length;
                    modeCards[targetIndex].focus();
                    break;
                case 'Enter':
                case ' ':
                    e.preventDefault();
                    card.click();
                    break;
            }
        });
    });
    
    // Update aria-checked for difficulty filter
    const diffBtns = document.querySelectorAll('.diff-btn');
    diffBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            diffBtns.forEach(b => {
                b.setAttribute('aria-checked', b === btn ? 'true' : 'false');
                b.setAttribute('tabindex', b === btn ? '0' : '-1');
            });
        });
    });
}

// Start the app when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    loadStats();
    init();
    initKeyboardNavigation();
});
