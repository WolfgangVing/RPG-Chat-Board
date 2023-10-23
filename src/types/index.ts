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
    [key: string]: [boolean, number] | null,
    "strength": [boolean, number] | null,
    "dexterity": [boolean, number] | null,
    "constitution": [boolean, number] | null,
    "intelligence": [boolean, number] | null,
    "wisdom": [boolean, number] | null,
    "charisma": [boolean, number] | null
}

type TCharacterSheet = {
    attributes: TAttributes,
    modifiers: TAttributes //Follows the same grammar for key, and value is also number. In caso is needed to use shorted term just cut it.
}
export type {TAttributes, TModifiers, TCharacterSheet, TCharacter}