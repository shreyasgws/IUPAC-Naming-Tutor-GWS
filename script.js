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
        options: ['Hydroxybenzene', 'Phenol', 'Cyclohexanol', 'Benzenol'],
        explanation: 'Special Cases and Exceptions in Naming: IUPAC strictly prefers "Phenol" over systematic names like hydroxybenzene for this aromatic alcohol.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>CH(Br)CH<sub>2</sub>CH<sub>2</sub>OH',
        correct: '3-Bromobutan-1-ol',
        alternates: ['3-Bromo-1-butanol'],
        options: ['2-Bromobutan-4-ol', '3-Bromobutan-1-ol', '3-Bromobutanol', '1-Hydroxy-3-bromobutane'],
        explanation: 'Components of IUPAC Name: Prefix (Bromo) + Root (butan) + Primary Suffix (an) + Secondary Suffix (ol). Alcohol has higher priority, so numbering starts from the right.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>C(CH<sub>3</sub>)<sub>2</sub>C(CH<sub>3</sub>)<sub>2</sub>CH<sub>3</sub>',
        correct: '2,2,3,3-Tetramethylbutane',
        options: ['2,3-Dimethylhexane', '2,2,3,3-Tetramethylbutane', 'Octane', '2,2-Dimethyl-3,3-dimethylbutane'],
        explanation: 'Use of Hyphens and Commas: Numbers are separated by commas (2,2,3,3). Numbers and words are separated by hyphens (3-Tetramethyl...).',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>2</sub>=CH-C&equiv;CH',
        correct: 'But-1-en-3-yne',
        alternates: ['1-Buten-3-yne'],
        options: ['But-3-en-1-yne', 'But-1-en-3-yne', '1-Buten-3-yne', 'Butenyne'],
        explanation: 'Alkenes and Alkynes together: The chain is numbered to give the lowest locant to double/triple bonds. If there is a tie, the double bond gets the lower number. Here, numbering from the left gives the double bond locant 1.',
        difficulty: 'Hard'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>CH<sub>2</sub>CN',
        correct: 'Propanenitrile',
        options: ['Ethyl cyanide', 'Propanenitrile', 'Ethanenitrile', 'Cyanoethane'],
        explanation: 'Naming Nitriles: The -CN carbon is included in the parent chain. Three carbons = propane + nitrile = propanenitrile.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'HCOOH',
        correct: 'Methanoic acid',
        options: ['Ethanoic acid', 'Methanoic acid', 'Formic acid', 'Formaldehyde'],
        explanation: 'Word Root (1 Carbon Molecule): A single carbon acid is methanoic acid, though commonly known as formic acid.',
        difficulty: 'Easy'
    },
    {
        type: 'smiles',
        data: 'O=CC1=CC=CC=C1',
        correct: 'Benzaldehyde',
        options: ['Phenylmethanal', 'Benzaldehyde', 'Phenol', 'Benzoic acid'],
        explanation: 'Aromatic Aldehydes: The IUPAC name for an aldehyde attached directly to a benzene ring is benzaldehyde.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>CH(NH<sub>2</sub>)CH<sub>3</sub>',
        correct: 'Propan-2-amine',
        alternates: ['2-Propanamine'],
        options: ['Propan-1-amine', 'Propan-2-amine', '2-Aminopropane', 'Isopropylamine'],
        explanation: 'Naming Amines: The amino group (-NH2) gives the suffix "-amine". Located on carbon 2, giving propan-2-amine.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>OCH<sub>2</sub>CH<sub>3</sub>',
        correct: 'Methoxyethane',
        options: ['Ethoxyethane', 'Methoxyethane', 'Ethyl methyl ether', 'Propanol'],
        explanation: 'Naming Ethers: Ethers are named as alkoxyalkanes. The shorter chain (methoxy) is the prefix, the longer is the parent (ethane).',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>CH<sub>2</sub>CCCH<sub>3</sub>',
        correct: '2-Pentyne',
        alternates: ['Pent-2-yne'],
        options: ['2-Pentyne', '3-Pentyne', '1-Pentyne', 'Pentene'],
        explanation: 'General Principles: The parent chain is 5 carbons. The alkyne triple bond starts at carbon 2 from the right. So 2-pentyne.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>CH<sub>2</sub>CH(CH<sub>3</sub>)CH(OH)CH<sub>3</sub>',
        correct: '3-Methylpentan-2-ol',
        alternates: ['3-Methyl-2-pentanol'],
        options: ['3-Methylpentan-2-ol', '2-Hydroxy-3-methylpentane', '3-Methyl-2-pentanol', '4-Methylpentan-2-ol'],
        explanation: 'Priority Rules: Number from right to left so the alcohol (higher priority) gets locant 2, and the methyl gets locant 3.',
        difficulty: 'Hard'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>CH(OH)CH<sub>3</sub>',
        correct: 'Propan-2-ol',
        alternates: ['Isopropyl alcohol', '2-Propanol'],
        options: ['Propan-2-ol', 'Isopropyl alcohol', '2-Propanol', 'Propanol'],
        explanation: 'Common Name: Isopropyl alcohol is the common name. IUPAC name is Propan-2-ol (or 2-propanol). The -OH group is at carbon 2.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>COCH<sub>3</sub>',
        correct: 'Propanone',
        alternates: ['Acetone', 'Propan-2-one'],
        options: ['Propanone', 'Acetone', 'Propan-2-one', 'Dimethyl ketone'],
        explanation: 'Common Name: Acetone is the common name. IUPAC name is Propanone. A 3-carbon ketone.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>COOH',
        correct: 'Ethanoic acid',
        alternates: ['Acetic acid'],
        options: ['Ethanoic acid', 'Acetic acid', 'Methane carboxylic acid', 'Acidic acid'],
        explanation: 'Common Name: Acetic acid is the common name (vinegar). IUPAC name is Ethanoic acid.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CHCl<sub>3</sub>',
        correct: 'Trichloromethane',
        alternates: ['Chloroform'],
        options: ['Trichloromethane', 'Chloroform', 'Methenyl chloride', 'Methyl chloride'],
        explanation: 'Common Name: Chloroform is the common name. IUPAC name is Trichloromethane (one carbon, three chlorines).',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH',
        correct: 'Propan-1-ol',
        alternates: ['Propanol', '1-Propanol'],
        options: ['Propan-1-ol', 'Propanol', '1-Propanol', 'Ethanol'],
        explanation: 'Naming of Alcohols: The -OH group is the functional group. The parent chain is 3 carbons (propane), dropping the "e" and adding "-ol" gives propanol. Since the OH is at position 1, it is propan-1-ol.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>CH(CH<sub>3</sub>)CH<sub>2</sub>CH(CH<sub>3</sub>)CH<sub>3</sub>',
        correct: '2,4-Dimethylpentane',
        options: ['2,4-Dimethylpentane', '3,3-Dimethylpentane', '4-Methylhexane', 'Dimethylpentane'],
        explanation: 'Multiple Substituents: Number the chain to give lowest locants. With methyl groups at positions 2 and 4, the name is 2,4-dimethylpentane.',
        difficulty: 'Hard'
    },
    {
        type: 'smiles',
        data: 'CC1CCCCC1',
        correct: 'Methylcyclohexane',
        alternates: ['1-Methylcyclohexane'],
        options: ['Methylcyclohexane', '1-Methylcyclohexane', 'Cyclohexylmethane', 'Hexylmethane'],
        explanation: 'Cyclic Compounds: A cyclohexane ring with a methyl substituent. The substituent is named first, then the cycloalkane.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'Cyclohexane with two methyl groups at 1,2 positions',
        correct: '1,2-Dimethylcyclohexane',
        options: ['1,2-Dimethylcyclohexane', 'o-Dimethylcyclohexane', '1,2-Cyclohexadiene', 'Dimethylcyclohexane'],
        explanation: 'Numbering Cycloalkanes: Number the ring to give lowest locants. With methyls at 1 and 2, it is 1,2-dimethylcyclohexane.',
        difficulty: 'Hard'
    },
    {
        type: 'smiles',
        data: 'Cc1ccc(C)cc1',
        correct: '1,4-Dimethylbenzene',
        alternates: ['p-Xylene'],
        options: ['1,4-Dimethylbenzene', 'p-Xylene', '4-Methylbenzene', 'Toluene'],
        explanation: 'Aromatic Compounds: Benzene with two methyl groups at para (1,4) positions. Commonly known as p-xylene.',
        difficulty: 'Medium'
    },
    {
        type: 'smiles',
        data: 'Cc1ccc(O)cc1',
        correct: '4-Methylphenol',
        alternates: ['p-Cresol'],
        options: ['4-Methylphenol', 'p-Cresol', 'm-Cresol', 'o-Cresol'],
        explanation: 'p-Cresol: Benzene ring with OH and CH3 at para (1,4) positions. Numbering from OH gives methyl at position 4.',
        difficulty: 'Medium'
    },
    {
        type: 'smiles',
        data: 'Cc1ccccc1O',
        correct: '2-Methylphenol',
        alternates: ['o-Cresol', '1-Hydroxy-2-methylbenzene'],
        options: ['2-Methylphenol', 'o-Cresol', '1-Hydroxy-2-methylbenzene', 'Hydroxytoluene'],
        explanation: 'o-Cresol: Benzene with OH and CH3 at ortho (1,2) positions. Numbering from OH gives methyl at position 2.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>CH(CH<sub>3</sub>)CH<sub>2</sub>CH<sub>2</sub>OH',
        correct: '3-Methylbutan-1-ol',
        alternates: ['Isobutanol', '4-Methylbutan-1-ol'],
        options: ['3-Methylbutan-1-ol', '4-Methylbutan-1-ol', 'Isobutanol', '2-Methylpropan-1-ol'],
        explanation: 'Numbering from the alcohol end gives methyl at position 3 and OH at position 1. Common name is Isobutanol.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'HOCH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>CHO',
        correct: '3-Hydroxybutanal',
        alternates: ['4-Hydroxybutanal'],
        options: ['3-Hydroxybutanal', '4-Hydroxybutanal', 'Hydroxypropanal', 'Butanal-3-ol'],
        explanation: 'Functional Group Priority: Aldehyde has higher priority than alcohol, so aldehyde is the suffix. 4-carbon chain with OH at position 3.',
        difficulty: 'Hard'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>COCH<sub>2</sub>CH<sub>2</sub>OH',
        correct: '4-Hydroxybutan-2-one',
        alternates: ['4-Hydroxy-2-butanone', 'Hydroxybutanone'],
        options: ['4-Hydroxybutan-2-one', '3-Hydroxybutan-2-one', 'Hydroxybutyric acid', 'Butanediol-4-one-2'],
        explanation: 'Ketone has higher priority than alcohol. Number from the ketone end to get OH at position 4.',
        difficulty: 'Hard'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>CH(Cl)CH<sub>2</sub>CH<sub>2</sub>OH',
        correct: '3-Chlorobutan-1-ol',
        alternates: ['4-Chlorobutan-1-ol'],
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
        options: ['1-Ethyl-3-methylbenzene', 'm-Ethyltoluene', '3-Ethyl-1-methylbenzene', 'Ethylmethylbenzene'],
        explanation: 'Alphabetical order: Ethyl comes before methyl. Lowest locants: 1 and 3.',
        difficulty: 'Hard'
    },
    {
        type: 'smiles',
        data: 'Cc1cc(Cl)ccc1',
        correct: '1-Chloro-3-methylbenzene',
        alternates: ['m-Chlorotoluene', '3-Chlorotoluene'],
        options: ['1-Chloro-3-methylbenzene', 'm-Chlorotoluene', '3-Chlorotoluene', 'Chloromethylbenzene'],
        explanation: 'Alphabetical order: Chloro comes before methyl. Methyl at 1, chloro at 3 (meta positions).',
        difficulty: 'Hard'
    },
    {
        type: 'smiles',
        data: 'Clc1ccccc1[N+](=O)[O-]',
        correct: '1-Chloro-2-nitrobenzene',
        alternates: ['o-Chloronitrobenzene'],
        options: ['1-Chloro-2-nitrobenzene', 'o-Chloronitrobenzene', '2-Chloro-1-nitrobenzene', 'Nitrochlorobenzene'],
        explanation: 'Alphabetical order: chloro comes before nitro. Chloro at 1, nitro at 2 (ortho positions).',
        difficulty: 'Hard'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>CH<sub>2</sub>CH(CH<sub>3</sub>)CH<sub>2</sub>CH<sub>3</sub>',
        correct: '3-Methylpentane',
        alternates: ['3-Methylpentane', 'Diethylmethylmethane'],
        options: ['3-Methylpentane', '2-Methylpentane', 'Methylpentane', 'Isohexane'],
        explanation: 'The longest chain is 5 carbons (pentane) with a methyl group at position 3.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>CH<sub>2</sub>CHOHCH<sub>3</sub>',
        correct: 'Butan-2-ol',
        alternates: ['2-Butanol', 'Sec-butanol'],
        options: ['Butan-2-ol', '2-Butanol', 'Sec-butanol', 'Butanol'],
        explanation: 'The OH group is at carbon 2 of a 4-carbon chain. Common name is sec-butanol.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>2</sub>=CH-CH=CH<sub>2</sub>',
        correct: 'Buta-1,3-diene',
        alternates: ['Butadiene', '1,3-Butadiene'],
        options: ['Buta-1,3-diene', 'Butadiene', '1,3-Butadiene', 'But-1,3-diene'],
        explanation: 'Two double bonds at positions 1 and 3 in a 4-carbon chain.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: '2-Methylbutane',
        options: ['2-Methylbutane', '3-Methylbutane', 'Methylbutane', 'Pentane'],
        explanation: 'The longest chain is 4 carbons (butane) with a methyl group at position 2.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH(CH<sub>3</sub>)–CH(CH<sub>3</sub>)–CH<sub>3</sub>',
        correct: '2,3-Dimethylbutane',
        options: ['2,3-Dimethylbutane', '2-Methyl-3-methylbutane', 'Dimethylbutane', 'Tetramethylethane'],
        explanation: 'The longest chain is 4 carbons (butane) with methyl groups at positions 2 and 3.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–C(CH<sub>3</sub>)<sub>2</sub>–CH<sub>3</sub>',
        correct: '2,2-Dimethylpropane',
        options: ['2,2-Dimethylpropane', 'Neopentane', 'Dimethylpropane', 'Tetramethylmethane'],
        explanation: 'The parent chain is 3 carbons (propane) with two methyl groups at position 2. Also known as neopentane.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–OH',
        correct: 'Butan-1-ol',
        alternates: ['1-Butanol', 'Butanol'],
        options: ['Butan-1-ol', '1-Butanol', 'Butanol', 'Butan-2-ol'],
        explanation: 'The OH group is at carbon 1 of a 4-carbon chain. Alcohols use the suffix -ol.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CO–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: 'Butan-2-one',
        alternates: ['Butanone', 'Methyl ethyl ketone'],
        options: ['Butan-2-one', 'Butanone', 'Methyl ethyl ketone', 'Butanal'],
        explanation: 'A 4-carbon ketone with C=O at position 2. Also known as methyl ethyl ketone.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CHO',
        correct: 'Butanal',
        alternates: ['Butyraldehyde'],
        options: ['Butanal', 'Propanal', 'Butanaldehyde', 'Pentanal'],
        explanation: 'An aldehyde (CHO) at the end of a 4-carbon chain. Aldehydes use the suffix -al.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–COOH',
        correct: 'Butanoic acid',
        alternates: ['Butyric acid'],
        options: ['Butanoic acid', 'Propanoic acid', 'Pentanoic acid', 'Butyric acid'],
        explanation: 'A carboxylic acid (-COOH) on a 4-carbon chain. Carboxylic acids use the suffix -oic acid.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>2</sub>=CH–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: 'But-1-ene',
        alternates: ['1-Butene', 'Butene'],
        options: ['But-1-ene', '1-Butene', 'But-2-ene', 'Butane'],
        explanation: 'A double bond at position 1 in a 4-carbon chain. Alkenes use the suffix -ene.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH=CH–CH<sub>3</sub>',
        correct: 'But-2-ene',
        alternates: ['2-Butene'],
        options: ['But-2-ene', '2-Butene', 'But-1-ene', 'Butene'],
        explanation: 'A double bond at position 2 in a 4-carbon chain.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH≡C–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: 'But-1-yne',
        alternates: ['1-Butyne'],
        options: ['But-1-yne', '1-Butyne', 'But-2-yne', 'Butyne'],
        explanation: 'A triple bond at position 1 in a 4-carbon chain. Alkynes use the suffix -yne.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–C≡C–CH<sub>3</sub>',
        correct: 'But-2-yne',
        alternates: ['2-Butyne'],
        options: ['But-2-yne', '2-Butyne', 'But-1-yne', 'Butyne'],
        explanation: 'A triple bond at position 2 in a 4-carbon chain.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>2</sub>=CH–CH=CH–CH<sub>3</sub>',
        correct: 'Penta-1,3-diene',
        alternates: ['1,3-Pentadiene'],
        options: ['Penta-1,3-diene', '1,3-Pentadiene', 'Pentadiene', 'Penta-1,4-diene'],
        explanation: 'Two double bonds at positions 1 and 3 in a 5-carbon chain. The suffix is -diene for two double bonds.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>2</sub>=CH–CH(CH<sub>3</sub>)–CH=CH<sub>2</sub>',
        correct: '3-Methylpenta-1,4-diene',
        alternates: ['3-Methyl-1,4-pentadiene'],
        options: ['3-Methylpenta-1,4-diene', '4-Methylpenta-1,3-diene', 'Methylbutadiene', 'Penta-1,4-diene'],
        explanation: 'A 5-carbon chain with two double bonds at positions 1 and 4, plus a methyl group at position 3.',
        difficulty: 'Hard'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: '3-Methylhexane',
        options: ['3-Methylhexane', '2-Methylhexane', '4-Methylhexane', 'Methylhexane'],
        explanation: 'The longest chain is 6 carbons (hexane) with a methyl group at position 3.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: '2,4-Dimethylhexane',
        options: ['2,4-Dimethylhexane', '3,5-Dimethylhexane', '2,3-Dimethylhexane', 'Dimethylhexane'],
        explanation: 'The longest chain is 6 carbons (hexane) with methyl groups at positions 2 and 4.',
        difficulty: 'Hard'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CH<sub>3</sub>',
        correct: '2-Methylpentane',
        options: ['2-Methylpentane', '3-Methylpentane', '4-Methylpentane', 'Methylpentane'],
        explanation: 'The longest chain is 5 carbons (pentane) with a methyl group at position 2.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–C(CH<sub>3</sub>)<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: '2,2-Dimethylbutane',
        options: ['2,2-Dimethylbutane', '3,3-Dimethylbutane', 'Dimethylbutane', 'Neopentane'],
        explanation: 'The parent chain is 4 carbons (butane) with two methyl groups at position 2.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–OH',
        correct: 'Pentan-1-ol',
        alternates: ['1-Pentanol', 'Pentanol'],
        options: ['Pentan-1-ol', '1-Pentanol', 'Pentanol', 'Pentan-2-ol'],
        explanation: 'The OH group is at carbon 1 of a 5-carbon chain. Alcohols use the suffix -ol.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH<sub>2</sub>–CH(OH)–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: 'Pentan-3-ol',
        alternates: ['3-Pentanol'],
        options: ['Pentan-3-ol', '3-Pentanol', 'Pentan-2-ol', 'Pentan-1-ol'],
        explanation: 'The OH group is at carbon 3 of a 5-carbon chain. Numbering can be done from either end.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH<sub>2</sub>–CO–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: 'Pentan-3-one',
        alternates: ['Pentanone', 'Diethyl ketone'],
        options: ['Pentan-3-one', 'Pentanone', 'Diethyl ketone', 'Pentan-2-one'],
        explanation: 'A 5-carbon ketone with C=O at position 3. Also known as diethyl ketone.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CHO',
        correct: 'Pentanal',
        alternates: ['Valeraldehyde'],
        options: ['Pentanal', 'Valeraldehyde', 'Butanal', 'Hexanal'],
        explanation: 'An aldehyde (CHO) at the end of a 5-carbon chain. Aldehydes use the suffix -al.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–COOH',
        correct: 'Pentanoic acid',
        alternates: ['Valeric acid'],
        options: ['Pentanoic acid', 'Valeric acid', 'Butanoic acid', 'Hexanoic acid'],
        explanation: 'A carboxylic acid (-COOH) on a 5-carbon chain. Carboxylic acids use the suffix -oic acid.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>2</sub>=CH–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: 'Pent-1-ene',
        alternates: ['1-Pentene', 'Pentene'],
        options: ['Pent-1-ene', '1-Pentene', 'Pent-2-ene', 'Pentane'],
        explanation: 'A double bond at position 1 in a 5-carbon chain. Alkenes use the suffix -ene.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>2</sub>=CH–CH=CH–CH=CH<sub>2</sub>',
        correct: 'Hexa-1,3,5-triene',
        alternates: ['1,3,5-Hexatriene'],
        options: ['Hexa-1,3,5-triene', '1,3,5-Hexatriene', 'Hexatriene', 'Hexa-1,4,6-triene'],
        explanation: 'Three double bonds at positions 1, 3, and 5 in a 6-carbon chain.',
        difficulty: 'Hard'
    },
    {
        type: 'condensed',
        data: 'CH<sub>2</sub>=CH–CH<sub>2</sub>–C≡CH',
        correct: 'Pent-1-en-4-yne',
        alternates: ['4-Penten-1-yne', 'Pent-4-en-1-yne'],
        options: ['Pent-1-en-4-yne', '4-Penten-1-yne', 'Pent-4-en-1-yne', 'Penten-4-yne'],
        explanation: 'A double bond at position 1 and triple bond at position 4 in a 5-carbon chain. Numbering gives double bond the lower locant.',
        difficulty: 'Hard'
    },
    {
        type: 'condensed',
        data: 'CH≡C–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: 'Pent-1-yne',
        alternates: ['1-Pentyne'],
        options: ['Pent-1-yne', '1-Pentyne', 'Pent-2-yne', 'Pentyne'],
        explanation: 'A triple bond at position 1 in a 5-carbon chain. Alkynes use the suffix -yne.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'HO–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CHO',
        correct: '4-Hydroxypentanal',
        alternates: ['4-Hydroxy-1-oxopentane', '4-Hydroxypentan-1-al'],
        options: ['4-Hydroxypentanal', '5-Hydroxypentanal', 'Hydroxyvaleraldehyde', '4-Hydroxypentan-1-al'],
        explanation: 'Aldehyde has higher priority than alcohol. The OH becomes the hydroxy prefix at position 4.',
        difficulty: 'Hard'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CO–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–OH',
        correct: '5-Hydroxypentan-2-one',
        alternates: ['5-Hydroxy-2-pentanone', '2-Hydroxypentan-5-one'],
        options: ['5-Hydroxypentan-2-one', '2-Hydroxypentan-5-one', 'Hydroxyketone', '5-Hydroxy-2-pentanone'],
        explanation: 'Ketone has higher priority than alcohol. The OH becomes the hydroxy prefix at position 5.',
        difficulty: 'Hard'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH(Cl)–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–OH',
        correct: '4-Chloropentan-1-ol',
        alternates: ['4-Chloro-1-pentanol'],
        options: ['4-Chloropentan-1-ol', '5-Chloropentan-1-ol', '1-Chloropentan-4-ol', 'Chloropentanol'],
        explanation: 'Alcohol has higher priority than chloro. Number from the alcohol end to give OH position 1, Cl at position 4.',
        difficulty: 'Hard'
    },
    {
        type: 'condensed',
        data: 'Cyclohexane with methyl groups at positions 1 and 3',
        correct: '1,3-Dimethylcyclohexane',
        options: ['1,3-Dimethylcyclohexane', '3,1-Dimethylcyclohexane', '1,3-Dimethylhexane', 'Dimethylcyclohexane'],
        explanation: 'Number the ring to give lowest locants. Two methyl groups at positions 1 and 3.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: '1-Methyl-4-nitrobenzene',
        correct: '1-Methyl-4-nitrobenzene',
        alternates: ['p-Methylnitrobenzene', '4-Methylnitrobenzene'],
        options: ['1-Methyl-4-nitrobenzene', 'p-Methylnitrobenzene', '4-Methylnitrobenzene', 'Nitromethylbenzene'],
        difficulty: 'Hard',
        explanation: 'Alphabetical order: methyl before nitro. Positions 1 and 4 on the benzene ring.'
    },
    {
        type: 'condensed',
        data: 'Phenylpropane',
        correct: 'Phenylpropane',
        alternates: ['Propylbenzene', '1-Phenylpropane'],
        options: ['Phenylpropane', 'Propylbenzene', '1-Phenylpropane', 'Benzylpropane'],
        explanation: 'A benzene ring (phenyl) attached to a 3-carbon chain (propane). Also known as propylbenzene.',
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
        options: ['2,4,5-Trimethylhexane', '3,4,5-Trimethylhexane', '2,3,4-Trimethylhexane', 'Trimethylhexane'],
        explanation: 'The longest chain is 6 carbons (hexane) with methyl groups at positions 2, 4, and 5.',
        difficulty: 'Hard'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH<sub>2</sub>–C(CH<sub>3</sub>)<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: '3,3-Dimethylpentane',
        options: ['3,3-Dimethylpentane', '2,2-Dimethylpentane', '2,3-Dimethylpentane', 'Dimethylpentane'],
        explanation: 'The longest chain is 5 carbons (pentane) with two methyl groups at position 3.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>2</sub>=CH–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CH=CH<sub>2</sub>',
        correct: '4-Methylhexa-1,5-diene',
        options: ['4-Methylhexa-1,5-diene', '3-Methylhexa-1,5-diene', '4-Methylhexa-1,4-diene', 'Methylhexadiene'],
        explanation: 'A 6-carbon chain with double bonds at positions 1 and 5, plus a methyl group at position 4.',
        difficulty: 'Hard'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CO–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CHO',
        correct: '4-Methyl-3-oxopentanal',
        alternates: ['3-Oxo-4-methylpentanal'],
        options: ['4-Methyl-3-oxopentanal', '3-Oxo-4-methylpentanal', '5-Methyl-3-oxopentanal', '4-Methylpentan-3-one-1-al'],
        explanation: 'Aldehyde has higher priority. Ketone is named as oxo prefix at position 3, methyl at position 4.',
        difficulty: 'Hard'
    },
    {
        type: 'condensed',
        data: 'HO–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–COOH',
        correct: '3-Methyl-4-hydroxybutanoic acid',
        alternates: ['4-Hydroxy-3-methylbutanoic acid'],
        options: ['3-Methyl-4-hydroxybutanoic acid', '4-Hydroxy-3-methylbutanoic acid', '2-Methyl-3-hydroxybutanoic acid', '4-Hydroxybutanoic acid methyl ester'],
        explanation: 'Carboxylic acid is the principal group. Number from COOH: COOH is C1, CH3 at C3, OH at C4.',
        difficulty: 'Hard'
    },
    {
        type: 'condensed',
        data: 'CH<sub>2</sub>=CH–CH(OH)–CH<sub>2</sub>–CHO',
        correct: '3-Hydroxypent-4-enal',
        alternates: ['3-Hydroxy-4-pentenal', '4-Penten-3-ol-1-al'],
        options: ['3-Hydroxypent-4-enal', '3-Hydroxy-4-pentenal', '4-Penten-3-ol-1-al', '3-Hydroxypent-5-enal'],
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
        options: ['3-Ethylpentane', '3-Ethylhexane', 'Ethylpentane', '3-Propylpentane'],
        explanation: 'The longest chain is 5 carbons (pentane) with an ethyl group at position 3.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: '1,2,4-Trimethylbenzene',
        correct: '1,2,4-Trimethylbenzene',
        alternates: ['pseudocumene'],
        options: ['1,2,4-Trimethylbenzene', 'Pseudocumene', '1,3,5-Trimethylbenzene', 'Mesitylene'],
        explanation: 'Three methyl groups at positions 1, 2, and 4 on the benzene ring. Also known as pseudocumene.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'Cyclohexene with methyl group at position 3',
        correct: '3-Methylcyclohexene',
        options: ['3-Methylcyclohexene', '1-Methylcyclohexene', '4-Methylcyclohexene', 'Methylcyclohexene'],
        explanation: 'Number the ring to give the double bond the lowest locant, then the substituent.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH(Br)–CH<sub>3</sub>',
        correct: '2-Bromopropane',
        alternates: ['2-Bromopropane', 'Isopropyl bromide'],
        options: ['2-Bromopropane', '1-Bromopropane', 'Isopropyl bromide', 'Bromopropane'],
        explanation: 'A 3-carbon chain with bromine at position 2. Halogens are named as prefixes (bromo-).',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CH(CH<sub>3</sub>)–CH<sub>3</sub>',
        correct: '3,4-Dimethylpentane',
        options: ['3,4-Dimethylpentane', '2,3-Dimethylpentane', '3-Methylhexane', 'Dimethylpentane'],
        explanation: 'The longest chain is 5 carbons (pentane) with methyl groups at positions 3 and 4.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–C(CH<sub>3</sub>)<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: '2,2-Dimethylpentane',
        options: ['2,2-Dimethylpentane', '3,3-Dimethylpentane', '2,2-Dimethylbutane', 'Dimethylpentane'],
        explanation: 'The longest chain is 5 carbons (pentane) with two methyl groups at position 2.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH=CH–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: 'Pent-2-ene',
        alternates: ['2-Pentene'],
        options: ['Pent-2-ene', '2-Pentene', 'Pent-1-ene', 'Pent-3-ene'],
        explanation: 'A double bond at position 2 in a 5-carbon chain.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CO–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CH<sub>3</sub>',
        correct: '4-Methylpentan-2-one',
        alternates: ['4-Methyl-2-pentanone', 'Methyl isopropyl ketone'],
        options: ['4-Methylpentan-2-one', '4-Methyl-2-pentanone', '3-Methylpentan-2-one', '2-Methylpentan-4-one'],
        explanation: 'Ketone with methyl substituent. Number from ketone end to give C=O position 2, methyl at position 4.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CHO',
        correct: '2-Methylpentanal',
        alternates: ['2-Methyl-1-pentanal'],
        options: ['2-Methylpentanal', '3-Methylpentanal', '2-Methyl-1-pentanal', 'Methylbutanal'],
        explanation: 'An aldehyde with a 5-carbon chain and methyl at position 2.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>2</sub>=CH–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>2</sub>–CH=CH<sub>2</sub>',
        correct: '3-Methylhepta-1,6-diene',
        alternates: ['3-Methyl-1,6-heptadiene'],
        options: ['3-Methylhepta-1,6-diene', '4-Methylhepta-1,5-diene', '3-Methylhepta-1,5-diene', 'Methylheptadiene'],
        explanation: '7-carbon chain with double bonds at 1 and 6, methyl at 3.',
        difficulty: 'Hard'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CO–CH<sub>2</sub>–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CHO',
        correct: '5-Methyl-4-oxohexanal',
        alternates: ['5-Methyl-4-oxohexanal', '4-Oxo-5-methylhexanal'],
        options: ['5-Methyl-4-oxohexanal', '4-Oxo-5-methylhexanal', '5-Methylhexanal-4-one', '4-Keto-5-methylhexanal'],
        explanation: 'Aldehyde has priority. Ketone is oxo prefix at position 4, methyl at position 5.',
        difficulty: 'Hard'
    },
    {
        type: 'condensed',
        data: 'HO–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>2</sub>–COOH',
        correct: '4-Methyl-5-hydroxypentanoic acid',
        alternates: ['5-Hydroxy-4-methylpentanoic acid'],
        options: ['4-Methyl-5-hydroxypentanoic acid', '5-Hydroxy-4-methylpentanoic acid', '3-Methyl-4-hydroxypentanoic acid', '4-Methylpentanoic acid-5-ol'],
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
        options: ['4-Methylhepta-1,6-diene', '3-Methylhepta-1,6-diene', '4-Methylhepta-1,5-diene', 'Methylheptadiene'],
        explanation: '7-carbon chain with double bonds at 1 and 6, methyl at position 4.',
        difficulty: 'Hard'
    },
    {
        type: 'condensed',
        data: '1,3-Dimethyl-5-nitrobenzene',
        correct: '1,3-Dimethyl-5-nitrobenzene',
        alternates: ['5-Nitro-1,3-dimethylbenzene'],
        options: ['1,3-Dimethyl-5-nitrobenzene', '5-Nitro-1,3-dimethylbenzene', '3,5-Dimethylnitrobenzene', 'm-Dimethyl-p-nitrobenzene'],
        explanation: 'Benzene with methyl groups at 1,3 and nitro at 5. Alphabetical: dimethyl before nitro.',
        difficulty: 'Hard'
    },
    {
        type: 'condensed',
        data: 'Cyclohexene with CH<sub>3</sub> at position 3 and Cl at position 5',
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
        options: ['Pentan-2-one', '2-Pentanone', 'Pentan-3-one', 'Methyl propyl ketone'],
        explanation: 'A 5-carbon ketone with C=O at position 2.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CHO',
        correct: 'Hexanal',
        alternates: ['Hexan-1-al', 'Caproaldehyde'],
        options: ['Hexanal', 'Pentanal', 'Heptanal', 'Hexan-1-al'],
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
        options: ['Hex-1-ene', '1-Hexene', 'Hex-2-ene', 'Hexane'],
        explanation: 'A double bond at position 1 in a 6-carbon chain.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH≡C–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: 'Hex-1-yne',
        alternates: ['1-Hexyne'],
        options: ['Hex-1-yne', '1-Hexyne', 'Hex-2-yne', 'Hexyne'],
        explanation: 'A triple bond at position 1 in a 6-carbon chain.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: '2-Methylhexane',
        options: ['2-Methylhexane', '3-Methylhexane', '4-Methylhexane', 'Methylhexane'],
        explanation: '6-carbon chain (hexane) with methyl at position 2.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CH<sub>3</sub>',
        correct: '3,5-Dimethylhexane',
        options: ['3,5-Dimethylhexane', '2,4-Dimethylhexane', '3,4-Dimethylhexane', 'Dimethylhexane'],
        explanation: '6-carbon chain with methyl groups at positions 3 and 5.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–C(CH<sub>3</sub>)<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: '2,2-Dimethylhexane',
        options: ['2,2-Dimethylhexane', '3,3-Dimethylhexane', '2,5-Dimethylhexane', 'Dimethylhexane'],
        explanation: '6-carbon chain with two methyl groups at position 2.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH=CH–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: 'Hex-2-ene',
        alternates: ['2-Hexene'],
        options: ['Hex-2-ene', '2-Hexene', 'Hex-1-ene', 'Hex-3-ene'],
        explanation: 'A double bond at position 2 in a 6-carbon chain.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>2</sub>=CH–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: '3-Methylhex-1-ene',
        alternates: ['3-Methyl-1-hexene'],
        options: ['3-Methylhex-1-ene', '3-Methyl-1-hexene', '4-Methylhex-1-ene', 'Methylhexene'],
        explanation: '6-carbon chain with double bond at 1 and methyl at position 3.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH(Cl)–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: '2-Chlorohexane',
        options: ['2-Chlorohexane', '1-Chlorohexane', '3-Chlorohexane', 'Chlorohexane'],
        explanation: '6-carbon chain with chlorine at position 2.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH<sub>2</sub>–CH(Br)–CH<sub>2</sub>–CH<sub>2</sub>–OH',
        correct: '3-Bromopentan-1-ol',
        alternates: ['3-Bromo-1-pentanol'],
        options: ['3-Bromopentan-1-ol', '5-Bromopentan-1-ol', '1-Bromopentan-3-ol', 'Bromopentanol'],
        explanation: 'Alcohol priority. 5-carbon chain with OH at 1, Br at 3.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CO–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: 'Hexan-2-one',
        alternates: ['2-Hexanone', 'Methyl pentyl ketone'],
        options: ['Hexan-2-one', '2-Hexanone', 'Hexan-3-one', 'Methyl pentyl ketone'],
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
        type: 'condensed',
        data: 'Benzene with methyl and chlorine at 1,2 positions',
        correct: '1-Chloro-2-methylbenzene',
        alternates: ['o-Chlorotoluene'],
        options: ['1-Chloro-2-methylbenzene', '2-Chloro-1-methylbenzene', 'o-Chlorotoluene', 'Chloromethylbenzene'],
        explanation: 'Alphabetical: chloro before methyl. Ortho positions.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'Cyclohexane with CH<sub>3</sub> at 1 and C<sub>2</sub>H<sub>5</sub> at 4',
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
        options: ['Heptanal', 'Hexanal', 'Heptan-1-al', 'Heptanoic acid'],
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
        options: ['Hept-1-ene', '1-Heptene', 'Hept-2-ene', 'Heptane'],
        explanation: 'Double bond at position 1 in a 7-carbon chain.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH≡C–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: 'Hept-1-yne',
        alternates: ['1-Heptyne'],
        options: ['Hept-1-yne', '1-Heptyne', 'Hept-2-yne', 'Heptyne'],
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
        options: ['2-Bromohexane', '1-Bromohexane', '3-Bromohexane', 'Bromohexane'],
        explanation: '6-carbon chain with bromine at position 2.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: '3-Methylheptane',
        options: ['3-Methylheptane', '2-Methylheptane', '4-Methylheptane', 'Methylheptane'],
        explanation: '7-carbon chain with methyl at position 3.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: '2,4-Dimethylheptane',
        options: ['2,4-Dimethylheptane', '3,5-Dimethylheptane', '2,5-Dimethylheptane', 'Dimethylheptane'],
        explanation: '7-carbon chain with methyl groups at positions 2 and 4.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–C(CH<sub>3</sub>)<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: '2,2-Dimethylheptane',
        options: ['2,2-Dimethylheptane', '3,3-Dimethylheptane', '2,7-Dimethylheptane', 'Dimethylheptane'],
        explanation: '7-carbon chain with two methyl groups at position 2.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH=CH–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: 'Hept-2-ene',
        alternates: ['2-Heptene'],
        options: ['Hept-2-ene', '2-Heptene', 'Hept-1-ene', 'Hept-3-ene'],
        explanation: 'Double bond at position 2 in a 7-carbon chain.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>2</sub>=CH–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: '3-Methylhept-1-ene',
        alternates: ['3-Methyl-1-heptene'],
        options: ['3-Methylhept-1-ene', '3-Methyl-1-heptene', '4-Methylhept-1-ene', 'Methylheptene'],
        explanation: '7-carbon chain with double bond at 1 and methyl at 3.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH<sub>2</sub>–CH(OH)–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: 'Heptan-3-ol',
        alternates: ['3-Heptanol'],
        options: ['Heptan-3-ol', '3-Heptanol', 'Heptan-2-ol', 'Heptan-4-ol'],
        explanation: '7-carbon chain with OH at position 3.',
        difficulty: 'Easy'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CO–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: 'Heptan-2-one',
        alternates: ['2-Heptanone', 'Methyl hexyl ketone'],
        options: ['Heptan-2-one', '2-Heptanone', 'Heptan-3-one', 'Methyl hexyl ketone'],
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
        options: ['4-Methylocta-1,7-diene', '3-Methylocta-1,7-diene', '4-Methylocta-1,6-diene', 'Methyloctadiene'],
        explanation: '8-carbon chain with double bonds at 1 and 7, methyl at 4.',
        difficulty: 'Hard'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>3</sub>',
        correct: '2,4,5-Trimethylheptane',
        options: ['2,4,5-Trimethylheptane', '3,4,5-Trimethylheptane', '2,3,5-Trimethylheptane', 'Trimethylheptane'],
        explanation: '7-carbon chain with methyl groups at positions 2, 4, and 5.',
        difficulty: 'Hard'
    },
    {
        type: 'condensed',
        data: 'CH<sub>3</sub>–CO–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CHO',
        correct: '6-Methyl-5-oxoheptanal',
        alternates: ['5-Oxo-6-methylheptanal'],
        options: ['6-Methyl-5-oxoheptanal', '5-Oxo-6-methylheptanal', '2-Methyl-4-oxoheptanal', 'Methyl-oxoheptanal'],
        explanation: 'Aldehyde priority. Ketone is oxo at 5, methyl at 6.',
        difficulty: 'Hard'
    },
    {
        type: 'condensed',
        data: 'HO–CH<sub>2</sub>–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>2</sub>–COOH',
        correct: '4-Methyl-6-hydroxyhexanoic acid',
        alternates: ['6-Hydroxy-4-methylhexanoic acid'],
        options: ['4-Methyl-6-hydroxyhexanoic acid', '6-Hydroxy-4-methylhexanoic acid', '3-Methyl-5-hydroxyhexanoic acid', 'Methyl-hydroxyhexanoic acid'],
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
        options: ['3-Methylocta-1,7-diene', '4-Methylocta-1,7-diene', '3-Methylocta-1,6-diene', 'Methyloctadiene'],
        explanation: '8-carbon chain with double bonds at 1 and 7, methyl at 3.',
        difficulty: 'Hard'
    },
    {
        type: 'condensed',
        data: '1-Chloro-2,4-dimethylbenzene',
        correct: '1-Chloro-2,4-dimethylbenzene',
        alternates: ['2,4-Dimethylchlorobenzene'],
        options: ['1-Chloro-2,4-dimethylbenzene', '2,4-Dimethylchlorobenzene', '4-Chloro-1,3-dimethylbenzene', 'Dimethylchlorobenzene'],
        explanation: 'Benzene with chloro at 1, methyl at 2 and 4.',
        difficulty: 'Hard'
    },
    {
        type: 'condensed',
        data: '3-Nitrophenol',
        correct: '3-Nitrophenol',
        alternates: ['m-Nitrophenol'],
        options: ['3-Nitrophenol', 'm-Nitrophenol', '2-Nitrophenol', '4-Nitrophenol'],
        explanation: 'Phenol with nitro group at meta (3) position.',
        difficulty: 'Hard'
    },
    {
        type: 'condensed',
        data: 'Phenylbutane',
        correct: 'Phenylbutane',
        alternates: ['Butylbenzene', '1-Phenylbutane'],
        options: ['Phenylbutane', 'Butylbenzene', '1-Phenylbutane', 'Benzylpropane'],
        explanation: 'Benzene ring attached to a 4-carbon chain.',
        difficulty: 'Medium'
    },
    {
        type: 'condensed',
        data: 'Cyclohexene with CH<sub>3</sub> at 3 and C<sub>2</sub>H<sub>5</sub> at 5',
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
    { section: 'A', marks: 1, data: 'CH₃–CH(CH₃)–CH₃', correct: '2-Methylpropane', options: ['2-Methylpropane', 'Methylpropane', 'Propane', 'Butane'], difficulty: 'Easy' },
    { section: 'A', marks: 1, data: 'CH₂=CH–CH₃', correct: 'Propene', options: ['Propene', 'Prop-1-ene', 'Prop-2-ene', 'Propylene'], alternatives: ['Prop-1-ene'], difficulty: 'Easy' },
    { section: 'A', marks: 1, data: 'CH₃–CH₂–OH', correct: 'Ethanol', options: ['Ethanol', 'Methanol', 'Propanol', 'Ethane'], difficulty: 'Easy' },
    { section: 'A', marks: 1, data: 'CH₃–CHO', correct: 'Ethanal', options: ['Ethanal', 'Acetaldehyde', 'Formaldehyde', 'Propenal'], difficulty: 'Easy' },
    // Section B – Intermediate (2 marks each)
    { section: 'B', marks: 2, data: 'CH₃–CH₂–CH₂–CH₃', correct: 'Butane', options: ['Butane', 'Propane', 'Pentane', 'Hexane'], difficulty: 'Easy' },
    { section: 'B', marks: 2, data: 'CH₃–CH(CH₃)–CH₂–CH₃', correct: '2-Methylbutane', options: ['2-Methylbutane', '3-Methylbutane', 'Methylbutane', 'Pentane'], difficulty: 'Medium' },
    { section: 'B', marks: 2, data: 'CH₃–CH₂–CO–CH₃', correct: 'Butan-2-one', options: ['Butan-2-one', 'Butanone', 'Methyl ethyl ketone', 'Propanone'], alternatives: ['Butanone'], difficulty: 'Medium' },
    { section: 'B', marks: 2, data: 'CH₃–CH₂–CH₂–CHO', correct: 'Butanal', options: ['Butanal', 'Propanal', 'Butanaldehyde', 'Pentanal'], difficulty: 'Medium' },
    { section: 'B', marks: 2, data: 'CH₃–CH₂–CH₂–COOH', correct: 'Butanoic acid', options: ['Butanoic acid', 'Propanoic acid', 'Pentanoic acid', 'Butyric acid'], difficulty: 'Medium' },
    // Section C – Functional Groups & Priority (3 marks each)
    { section: 'C', marks: 3, data: 'HO–CH₂–CH₂–CHO', correct: '2-Hydroxyethanal', options: ['2-Hydroxyethanal', '3-Hydroxypropanal', 'Hydroxyacetaldehyde', 'Ethane-1-ol-2-al'], difficulty: 'Hard' },
    { section: 'C', marks: 3, data: 'CH₃–CO–CH₂–CH₂–OH', correct: '4-Hydroxybutan-2-one', options: ['4-Hydroxybutan-2-one', '3-Hydroxybutan-2-one', 'Hydroxybutanone', '4-Butanol-2-one'], difficulty: 'Hard' },
    { section: 'C', marks: 3, data: 'CH₃–CH(Cl)–CH₂–OH', correct: '2-Chloropropan-1-ol', options: ['2-Chloropropan-1-ol', '3-Chloropropan-1-ol', 'Chloropropanol', '1-Chloropropan-2-ol'], alternatives: ['3-Chloropropan-1-ol', '1-Chloropropan-2-ol'], difficulty: 'Hard' },
    { section: 'C', marks: 3, data: 'HO–CH₂–CH(NH₂)–COOH', correct: '2-Amino-3-hydroxypropanoic acid', options: ['2-Amino-3-hydroxypropanoic acid', 'Aminohydroxypropanoic acid', 'Serine', '3-Amino-2-hydroxypropanoic acid'], alternatives: ['Serine'], difficulty: 'Hard' },
    // Section D – Multiple Bonds & Substituents (3 marks each)
    { section: 'D', marks: 3, data: 'CH₂=CH–CH=CH₂', correct: 'Buta-1,3-diene', options: ['Buta-1,3-diene', 'Butadiene', '1,3-Butadiene', 'But-1,3-diene'], alternatives: ['Butadiene', '1,3-Butadiene', 'But-1,3-diene'], difficulty: 'Medium' },
    { section: 'D', marks: 3, data: 'CH₂=CH–CH(CH₃)–CH=CH₂', correct: '3-Methylpenta-1,4-diene', options: ['3-Methylpenta-1,4-diene', '4-Methylpenta-1,3-diene', 'Methylbutadiene', 'Penta-1,4-diene'], difficulty: 'Hard' },
    { section: 'D', marks: 3, data: 'CH≡C–CH₂–CH₃', correct: 'But-1-yne', options: ['But-1-yne', 'Butyne', '1-Butyne', 'Ethylacetylene'], alternatives: ['Butyne', '1-Butyne'], difficulty: 'Medium' },
    { section: 'D', marks: 3, data: 'CH₂=CH–C≡CH', correct: 'But-1-en-3-yne', options: ['But-1-en-3-yne', 'Butenyne', 'Vinylacetylene', '1-Buten-3-yne'], alternatives: ['Butenyne', '1-Buten-3-yne'], difficulty: 'Hard' },
    // Section E – Cyclic & Aromatic (4 marks each)
    { section: 'E', marks: 4, data: 'Cyclohexane with one methyl group', correct: 'Methylcyclohexane', options: ['Methylcyclohexane', 'Cyclohexylmethane', '1-Methylcyclohexane', 'Hexylmethane'], alternatives: ['1-Methylcyclohexane'], difficulty: 'Medium' },
    { section: 'E', marks: 4, data: 'Benzene with two methyl groups at 1,3 position', correct: 'm-Xylene', options: ['m-Xylene', 'p-Xylene', 'o-Xylene', '1,3-Dimethylbenzene'], alternatives: ['1,3-Dimethylbenzene'], difficulty: 'Medium' },
    { section: 'E', marks: 4, data: 'Benzene with –OH and –CH₃ at 1,2 position', correct: '2-Methylphenol', options: ['2-Methylphenol', 'o-Cresol', 'Methylphenol', '1-Hydroxy-2-methylbenzene'], alternatives: ['o-Cresol'], difficulty: 'Medium' },
    { section: 'E', marks: 4, data: 'C₆H₅–CH₂–Cl', correct: 'Benzyl chloride', options: ['Benzyl chloride', 'Phenyl chloride', 'Chlorobenzene', 'Chloromethylbenzene'], difficulty: 'Medium' },
    // Section F – Tricky / Special Cases (5 marks each)
    { section: 'F', marks: 5, data: 'CH₃–CH(CH₃)–CH(CH₃)–CH₃', correct: '2,3-Dimethylbutane', options: ['2,3-Dimethylbutane', '2-Methyl-3-methylbutane', 'Dimethylbutane', 'Tetramethylethane'], difficulty: 'Hard' },
    { section: 'F', marks: 5, data: 'CH₃–CH₂–CH(CH₃)–CH₂–CH₃', correct: '3-Methylpentane', options: ['3-Methylpentane', '2-Methylpentane', 'Methylpentane', 'Isohexane'], difficulty: 'Medium' },
    { section: 'F', marks: 5, data: 'CH₃–CO–CH₂–CHO', correct: '3-Oxobutanal', options: ['3-Oxobutanal', '2-Oxobutanal', 'Acetoacetaldehyde', 'Ketoacetaldehyde'], difficulty: 'Hard' },
    { section: 'F', marks: 5, data: 'CH₃–CH(CH₃)–CH₂–CH₂–OH', correct: '3-Methylbutan-1-ol', options: ['3-Methylbutan-1-ol', '4-Methylbutan-1-ol', 'Isobutanol', '2-Methylpropan-1-ol'], alternatives: ['4-Methylbutan-1-ol', 'Isobutanol'], difficulty: 'Hard' },
    // Additional questions
    { section: 'F', marks: 5, data: 'CH₃–CH(CH₃)–CH₂–CH(CH₃)–CH₃', correct: '2,4-Dimethylpentane', options: ['2,4-Dimethylpentane', '3,3-Dimethylpentane', '4-Methylhexane', 'Dimethylpentane'], difficulty: 'Hard' },
    { section: 'D', marks: 3, data: 'CH₃–CH(CH₂CH₃)–CH₂–CH₃', correct: '2-Ethylbutane', options: ['2-Ethylbutane', '3-Methylpentane', 'Ethylbutane', '2-Methylpentane'], alternatives: ['3-Methylpentane'], difficulty: 'Medium' },
    { section: 'E', marks: 4, data: 'Cyclohexane with methyl group at position 1', correct: 'Methylcyclohexane', options: ['Methylcyclohexane', '1-Methylcyclohexane', 'Cyclohexylmethane', 'Hexylmethane'], difficulty: 'Medium' },
    { section: 'E', marks: 4, data: 'Cyclohexane with two methyl groups at 1,2 positions', correct: '1,2-Dimethylcyclohexane', options: ['1,2-Dimethylcyclohexane', 'o-Dimethylcyclohexane', '1,2-Cyclohexadiene', 'Dimethylcyclohexane'], difficulty: 'Hard' },
    { section: 'E', marks: 4, data: 'Benzene with two methyl groups at 1,4 positions', correct: '1,4-Dimethylbenzene', options: ['1,4-Dimethylbenzene', 'p-Xylene', '4-Methylbenzene', 'Toluene'], alternatives: ['p-Xylene'], difficulty: 'Medium' },
    { section: 'E', marks: 4, data: 'Benzene with –OH and –CH₃ at 1,4 positions', correct: '4-Methylphenol', options: ['4-Methylphenol', 'p-Cresol', '1-Hydroxy-4-methylbenzene', 'Hydroxytoluene'], alternatives: ['p-Cresol'], difficulty: 'Medium' },
    { section: 'A', marks: 1, data: 'CH₃–CH₂–CH₂–OH', correct: 'Propan-1-ol', options: ['Propan-1-ol', 'Propanol', '1-Propanol', 'Ethanol'], alternatives: ['Propanol', '1-Propanol'], difficulty: 'Easy' },
    { section: 'A', marks: 1, data: 'CH₃–CO–CH₃', correct: 'Propanone', options: ['Propanone', 'Acetone', 'Propan-2-one', 'Dimethyl ketone'], alternatives: ['Acetone', 'Propan-2-one'], difficulty: 'Easy' },
    { section: 'A', marks: 1, data: 'CH₃–CH₂–CHO', correct: 'Propanal', options: ['Propanal', 'Propionaldehyde', 'Propan-1-al', 'Acetaldehyde'], alternatives: ['Propionaldehyde'], difficulty: 'Easy' },
    { section: 'A', marks: 1, data: 'CH₃–CH₂–COOH', correct: 'Propanoic acid', options: ['Propanoic acid', 'Propionic acid', 'Propanic acid', 'Carboxypropane'], alternatives: ['Propionic acid'], difficulty: 'Easy' },
    { section: 'B', marks: 2, data: 'CH₃–CH(CH₃)–CH₃', correct: '2-Methylpropane', options: ['2-Methylpropane', 'Methylpropane', 'Isobutane', 'Butane'], alternatives: ['Isobutane'], difficulty: 'Easy' },
    { section: 'A', marks: 1, data: 'Isopropyl alcohol', correct: 'Propan-2-ol', options: ['Propan-2-ol', 'Isopropyl alcohol', '2-Propanol', 'Propanol'], alternatives: ['Isopropyl alcohol', '2-Propanol'], difficulty: 'Easy' },
    { section: 'A', marks: 1, data: 'Acetone', correct: 'Propanone', options: ['Propanone', 'Acetone', 'Propan-2-one', 'Dimethyl ketone'], alternatives: ['Acetone', 'Propan-2-one'], difficulty: 'Easy' },
    { section: 'A', marks: 1, data: 'Acetic acid', correct: 'Ethanoic acid', options: ['Ethanoic acid', 'Acetic acid', 'Methane carboxylic acid', 'Acidic acid'], alternatives: ['Acetic acid'], difficulty: 'Easy' },
    { section: 'B', marks: 2, data: 'Chloroform', correct: 'Trichloromethane', options: ['Trichloromethane', 'Chloroform', 'Methenyl chloride', 'Methyl chloride'], alternatives: ['Chloroform'], difficulty: 'Medium' },
    // New multiple substituents questions
    { section: 'F', marks: 5, data: 'CH₃–CH₂–CH(CH₃)–CH(CH₃)–CH₃', correct: '3,4-Dimethylpentane', options: ['3,4-Dimethylpentane', '2,3-Dimethylpentane', '3-Methylhexane', 'Dimethylpentane'], difficulty: 'Hard' },
    { section: 'F', marks: 5, data: 'CH₃–CH(CH₃)–CH₂–CH₂–CH(CH₃)–CH₃', correct: '2,5-Dimethylhexane', options: ['2,5-Dimethylhexane', '3,4-Dimethylhexane', '2,4-Dimethylhexane', 'Dimethylhexane'], difficulty: 'Hard' },
    // New cyclic compound questions
    { section: 'E', marks: 4, data: 'Cyclohexane with ethyl and methyl groups at 1,3 positions', correct: '1-Ethyl-3-methylcyclohexane', options: ['1-Ethyl-3-methylcyclohexane', '3-Ethyl-1-methylcyclohexane', '1-Methyl-3-ethylcyclohexane', 'Ethylmethylcyclohexane'], difficulty: 'Hard' },
    { section: 'E', marks: 4, data: 'Cyclohexene with methyl at position 3', correct: '3-Methylcyclohexene', options: ['3-Methylcyclohexene', '1-Methylcyclohexene', 'Methylcyclohexene', '3-Methylcyclohex-1-ene'], difficulty: 'Medium' },
    // New benzene derivative questions
    { section: 'E', marks: 4, data: 'Benzene with methyl and chlorine at 1,3 positions', correct: '1-Chloro-3-methylbenzene', options: ['1-Chloro-3-methylbenzene', '3-Chloro-1-methylbenzene', 'm-Chlorotoluene', 'm-Methylchlorobenzene'], alternatives: ['m-Chlorotoluene'], difficulty: 'Hard' },
    { section: 'E', marks: 4, data: 'Benzene with methyl and chlorine at 1,2 positions', correct: '1-Chloro-2-methylbenzene', options: ['1-Chloro-2-methylbenzene', '2-Chloro-1-methylbenzene', 'o-Chlorotoluene', 'o-Methylchlorobenzene'], alternatives: ['o-Chlorotoluene'], difficulty: 'Medium' },
    { section: 'E', marks: 4, data: 'Benzene with nitro and chlorine at 1,2 positions', correct: '1-Chloro-2-nitrobenzene', options: ['1-Chloro-2-nitrobenzene', '2-Chloro-1-nitrobenzene', 'o-Chloronitrobenzene', 'o-Nitrochlorobenzene'], alternatives: ['o-Chloronitrobenzene'], difficulty: 'Hard' },
    { section: 'E', marks: 4, data: 'C₆H₅–CH₂–CH₃', correct: 'Phenylethane', options: ['Phenylethane', 'Ethylbenzene', 'Toluene', 'Methylbenzene'], alternatives: ['Ethylbenzene'], difficulty: 'Medium' },
    // Structure to name (reverse)
    { section: 'B', marks: 2, data: 'CH₃–CH(CH₃)–CH₂–CH₃', correct: '2-Methylbutane', options: ['2-Methylbutane', '3-Methylbutane', 'Methylbutane', 'Pentane'], difficulty: 'Easy' },
    { section: 'B', marks: 2, data: 'CH₃–CH₂–CH(OH)–CH₃', correct: 'Butan-2-ol', options: ['Butan-2-ol', '2-Butanol', 'Butanol', 'Sec-butanol'], alternatives: ['2-Butanol', 'Sec-butanol'], difficulty: 'Medium' },
    { section: 'B', marks: 2, data: 'CH₃–CO–CH₂–CH₃', correct: 'Butan-2-one', options: ['Butan-2-one', 'Butanone', 'Methyl ethyl ketone', '2-Butanone'], alternatives: ['Butanone', 'Methyl ethyl ketone'], difficulty: 'Medium' },
    { section: 'F', marks: 5, data: 'CH₃–CH(Cl)–CH₂–CH₂–OH', correct: '3-Chlorobutan-1-ol', options: ['3-Chlorobutan-1-ol', '4-Chlorobutan-1-ol', 'Chlorobutanol', '1-Chlorobutan-3-ol'], alternatives: ['4-Chlorobutan-1-ol'], difficulty: 'Hard' }
];

let mockCurrentIndex = 0;
let mockScore = 0;
let mockAnswered = false;
let mockSelectedOption = null;
let mockTestResults = [];
let filteredMockQuestions = [];

let currentMode = 'home'; // 'home', 'mcq', 'manual'
let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;
let isAnswered = false;
let selectedDifficulty = 'all';
let mcqStats = {
    totalAnswered: 0,
    correctAnswers: 0,
    totalPoints: 0,
    correctPoints: 0
};
let manualStats = {
    totalAnswered: 0,
    correctAnswers: 0,
    totalPoints: 0,
    correctPoints: 0
};
let filteredQuestions = [];

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
    updateStatsDisplay();
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

    // Filter mock test questions by difficulty
    let filteredMockQuestions;
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
    
    const q = filteredMockQuestions[mockCurrentIndex];
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
        let correctDisplay = q.correct;
        if (q.alternatives) {
            correctDisplay += ' / ' + q.alternatives.join(' / ');
        }
        mockFeedback.innerHTML = '<span>✗ Incorrect. The correct answer is: ' + correctDisplay + '</span>';
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
    
    const currentQuestion = filteredQuestions[currentQuestionIndex];
    
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
    const currentQuestion = filteredQuestions[currentQuestionIndex];
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

    feedbackContainer.classList.remove('hidden');
    howBtn.classList.remove('hidden');

    if (isCorrect) {
        score += points;
        scoreDisplay.textContent = score;
        feedbackContainer.className = 'feedback-container success';
        feedbackMessage.textContent = `Correct! (+${points} point${points > 1 ? 's' : ''})`;
        correctAnswerDisplay.textContent = '';
    } else {
        feedbackContainer.className = 'feedback-container error';
        feedbackMessage.textContent = `Incorrect! (+0 points)`;
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
}

// Start the app when DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);
