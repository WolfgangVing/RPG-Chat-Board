type TCharacter = {
    attributes: TModifiers
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

type TCharacterSheet = {
    attributes: TAttributes,
    modifiers: TAttributes //Follows the same grammar for key, and value is also number. In caso is needed to use shorted term just sanitazi.
}
export type {TAttributes, TModifiers, TCharacterSheet, TCharacter}