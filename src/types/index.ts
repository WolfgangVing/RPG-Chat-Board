type TCharacter = {
    name: string,
    classLevel: [
        string, number
    ],
    race: string,
    experiencePoints: number,
    background: string,
    allignment: string,
    PlayerName: string,
    attributes: TAttributes,
    modifiers: TAttributes,
    proficiencyBonus: number,
    savingThrows: TSavethrows
    skills: TSkills
}

type TAttributes = {
    [key: string]: number,
    "strength": number,
    "dexterity": number,
    "constitution": number,
    "intelligence": number,
    "wisdom": number,
    "charisma": number
}

type TModifiers = {
    [key: string]: number,
    "strength": number,
    "dexterity": number,
    "constitution": number,
    "intelligence": number,
    "wisdom": number,
    "charisma": number
}

/**
 * First index [0] is a boolean representing if character is proeficient in that saving, the number should be the modifier + Proficiente Bonus
 */
type TSavethrows = {
    [key: string]: [boolean, number],
    "strength": [boolean, number],
    "dexterity": [boolean, number],
    "constitution": [boolean, number],
    "intelligence": [boolean, number],
    "wisdom": [boolean, number],
    "charisma": [boolean, number]
}

type TSkills = {
    [key: string]: [boolean, keyof TAttributes, number]
    "Acrobatics": [false, "dexterity", 0]
    "Animal Handling": [false, "wisdom", 0]
    "Arcana": [false, "intelligence", 0]
    "Athletics": [false, "strength", 0]
    "Deception": [false, "charisma", 0]
    "History": [false, "intelligence", 0]
    "Insight": [false, "wisdom", 0]
    "Intimidation": [false, "charisma", 0]
    "Investigation": [false, "intelligence", 0]
    "Medicine": [false, "wisdom", 0]
    "Nature": [false, "intelligence", 0]
    "Perception": [false, "wisdom", 0]
    "Performance": [false, "charisma", 0]
    "Persuasion": [false, "charisma", 0]
    "Religion": [false, "intelligence", 0]
    "Sleight of Hand": [false, "dexterity", 0]
    "Stealth": [false, "dexterity", 0]
    "Survival": [false, "wisdom", 0]
}

type TCharacterSheet = {
    attributes: TAttributes,
    modifiers: TAttributes //Follows the same grammar for key, and value is also number. In caso is needed to use shorted term just cut it.
}

type TDice = {
    [key: string]: number,
    "1d4": 4,
    "1d6": 6,
    "1d8": 8,
    "1d10": 10,
    "1d12": 12,
    "1d20": 20
}
type Dice = 4 | 6 | 8 | 10 | 12 | 20


export type { TAttributes, TModifiers, TCharacterSheet, TCharacter, TDice }