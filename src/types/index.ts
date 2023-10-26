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


export type {TAttributes, TModifiers, TCharacterSheet, TCharacter, TDice}