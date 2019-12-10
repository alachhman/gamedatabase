module.exports = {
    units: [
        {
            name: 'Delphi',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-09/110336_01_r05.png?itok=hdkZ31Va',
            description: 'A young man from the tribe of the Tutelaries, who served the Alberian royal family by watching over ancient ruins. After losing his parents in childhood, his only remaining relative is a young brother whom he loves with blind devotion.',
            cv: ['Aidan Drummond', 'Daiki Yamashita'],
            title: 'Tutelary Successor',
            rarity: '5',
            element: 'Shadow',
            weapon: 'Dagger',
            role: 'Support',
            atk: '477',
            hp: '797',
            coability: {
                name: 'Critical Rate +5%',
                baseEffect: 'Increases critical rate by 5%. Benefits your whole team.',
                upgrades: [
                    'Increases critical rate by 6%. Benefits your whole team.',
                    'Increases critical rate by 7%. Benefits your whole team.',
                    'Increases critical rate by 8%. Benefits your whole team.',
                    'Increases critical rate by 10%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Poisonous Cage I',
                        effect: `The user's strength is lowered by 70% during quests. Using Ruination Cage grants the user the "Poisonous Cage" effect. When this effect is active, the user's next force strike will inflict poison. This effect cannot stack, and will be consumed on use.`
                    },
                    {
                        name: 'Poisonous Cage II',
                        effect: `The user's strength is lowered by 60% during quests. Using Ruination Cage grants the user the "Poisonous Cage" effect. When this effect is active, the user's next force strike will inflict poison. This effect cannot stack, and will be consumed on use.`
                    }
                ],
                [
                    {
                        name: 'Paralysis Res +50%',
                        effect: 'Reduces susceptibility to paralysis by 50%.'
                    },
                    {
                        name: 'Paralysis Res +100%',
                        effect: 'Reduces susceptibility to paralysis by 100%.'
                    }
                ],
                [
                    {
                        name: 'Flurry Poison Edge +50%',
                        effect: 'Increases chances of inflicting poison by 50% when the combo count is 15 or higher.'
                    },
                    {
                        name: 'Flurry Poison Edge +60%',
                        effect: 'Increases chances of inflicting poison by 60% when the combo count is 15 or higher.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Ruination Cage',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals shadow damage to the target and nearby enemies, and creates a debuff zone that lasts for 10 seconds and reduces the defense of enemies inside it by 10%. The skill gauge for this skill can be filled by attacking enemies, but it will also gradually fill automatically. Abilities that increase skill gauge fill rate will not affect this automatic increase.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals shadow damage to the target and nearby enemies, and creates a debuff zone that lasts for 10 seconds and reduces the defense of enemies inside it by 15%. The skill gauge for this skill can be filled by attacking enemies, but it will also gradually fill automatically. Abilities that increase skill gauge fill rate will not affect this automatic increase.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals shadow damage to the target and nearby enemies, and creates a debuff zone that lasts for 10 seconds and reduces the defense of enemies inside it by 15%. The skill gauge for this skill can be filled by attacking enemies, but it will also gradually fill automatically. Abilities that increase skill gauge fill rate will not affect this automatic increase.'
                        }
                    ],
                    cost: '999999',
                    regen: 'None',
                    iframe: 'Long'
                },
                {
                    name: 'Corrosive Cage',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: `Summons "Heaven's Cage," then deals shadow damage to the target and nearby enemies, inflicts poison, and reduces the strength of light-attuned enemies by 10% for 15 seconds. This strength reduction effect will not stack. Additional bonus damage will be dealt relative to the damage taken while "Heaven's Cage" is active. The skill gauge for this skill can be filled by attacking enemies, but it will also gradually fill automatically. Abilities that increase skill gauge fill rate will not affect this automatic increase.`
                        },
                        {
                            level: 'Lvl 2',
                            description: `Summons "Heaven's Cage," then deals shadow damage to the target and nearby enemies, inflicts poison, and reduces the strength of light-attuned enemies by 15% for 15 seconds. This strength reduction effect will not stack. Additional bonus damage will be dealt relative to the damage taken while "Heaven's Cage" is active. The skill gauge for this skill can be filled by attacking enemies, but it will also gradually fill automatically. Abilities that increase skill gauge fill rate will not affect this automatic increase.`
                        }
                    ],
                    cost: '999999',
                    regen: 'None',
                    iframe: 'Long'
                }
            ]
        }
        ,
        {
            name: 'Halloween Elisanne',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Halloween%20Elisanne-5-star_0.png?itok=WVMEvtjK',
            description: ' - ',
            cv: ['Ava Lindstrom', 'Saori Hayami'],
            title: 'Vampaladyn',
            rarity: '5',
            element: 'Light',
            weapon: 'Lance',
            role: 'Support',
            atk: '483',
            hp: '793',
            coability: {
                name: 'HP +9%',
                baseEffect: 'Increases HP by 9%. Benefits your whole team.',
                upgrades: [
                    'Increases HP by 10%. Benefits your whole team.',
                    'Increases HP by 12%. Benefits your whole team.',
                    'Increases HP by 13%. Benefits your whole team.',
                    'Increases HP by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Skill Damage +25%',
                        effect: 'Increases attack skill damage by 25%.'
                    },
                    {
                        name: 'Skill Damage +30%',
                        effect: 'Increases attack skill damage by 30%.'
                    }
                ],
                [
                    {
                        name: 'Curse Res +50%',
                        effect: 'Reduces susceptibility to curses by 50%.'
                    },
                    {
                        name: 'Curse Res +100%',
                        effect: 'Reduces susceptibility to curses by 100%.'
                    }
                ],
                [
                    {
                        name: 'Gauge Accelerator +30%',
                        effect: 'Speeds the rate the mode gauge decreases by 30%.'
                    },
                    {
                        name: 'Gauge Accelerator +35%',
                        effect: 'Speeds the rate the mode gauge decreases by 35%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Sacred Maiden',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: `Deals light damage to enemies directly ahead, and activates "Skill Shift" if the attack connects. Phase II increases the entire team's strength, while Phase III adds health restoration. Skill Shift ends when you connect again during Phase III.`
                        },
                        {
                            level: 'Lvl 2',
                            description: `Deals light damage to enemies directly ahead, and activates "Skill Shift" if the attack connects. Phase II increases the entire team's strength, while Phase III adds health restoration. Skill Shift ends when you connect again during Phase III.`
                        },
                        {
                            level: 'Lvl 3',
                            description: `Deals light damage to enemies directly ahead, and activates "Skill Shift" if the attack connects. Phase II increases the entire team's strength, while Phase III adds health restoration. Skill Shift ends when you connect again during Phase III.`
                        }
                    ],
                    cost: '2450',
                    regen: 'None',
                    iframe: 'Long'
                },
                {
                    name: 'Mischief Maker',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Deals light damage to enemies directly ahead, and fills the user's skill gauges if the attack connects."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Deals light damage to enemies directly ahead, and fills the user's skill gauges if the attack connects."
                        }
                    ],
                    cost: '5252',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Victor',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-08/110307_01_r05.png?itok=lZH0-fWM',
            description: 'The commander of a mercenary band called the Shadewolves who were betrayed and annihilated by the Empire. This left him a shell of a man who gave up everything in the name of revenge. Where he goes, dark rumors follow.',
            cv: ['-', 'Tessyo Genda'],
            title: 'Vengeful Commander',
            rarity: '5',
            element: 'Wind',
            weapon: 'Blade',
            role: 'Support',
            atk: '494',
            hp: '781',
            coability: {
                name: 'Strength +5%',
                baseEffect: 'Increases strength by 5%. Benefits your whole team.',
                upgrades: [
                    'Increases strength by 6%. Benefits your whole team.',
                    'Increases strength by 7%. Benefits your whole team.',
                    'Increases strength by 8%. Benefits your whole team.',
                    'Increases strength by 10%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'HP 70% = Strength +10%',
                        effect: 'Increases strength by 10% when HP is 70% or above.'
                    },
                    {
                        name: 'HP 70% = Strength +13%',
                        effect: 'Increases strength by 13% when HP is 70% or above.'
                    }
                ],
                [
                    {
                        name: 'Bog Res +50%',
                        effect: 'Reduces susceptibility to bog by 50%.'
                    },
                    {
                        name: 'Bog Res +100%',
                        effect: 'Reduces susceptibility to bog by 100%.'
                    }
                ],
                [
                    {
                        name: 'Buff Time +25%',
                        effect: 'Increases duration of buff skills by 25%.'
                    },
                    {
                        name: 'Buff Time +30%',
                        effect: 'Increases duration of buff skills by 30%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Steel Formation',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: `Deals wind damage to the target and nearby enemies, inflicts bleeding, and activates "Skill Shift" if the attack connects. Phase II adds an additional 3% increase to the entire team's water resistance for 20 seconds, while Phase III also grants all teammates a one-use shield that nullifies damage less than 20% of the user's maximum HP. This does not stack with any other shields.`
                        },
                        {
                            level: 'Lvl 2',
                            description: `Deals wind damage to the target and nearby enemies, inflicts bleeding, and activates "Skill Shift" if the attack connects. Phase II adds an additional 3% increase to the entire team's water resistance for 20 seconds, while Phase III also grants all teammates a one-use shield that nullifies damage less than 20% of the user's maximum HP. This does not stack with any other shields.`
                        },
                        {
                            level: 'Lvl 3',
                            description: `Deals wind damage to the target and nearby enemies, inflicts bleeding, and activates "Skill Shift" if the attack connects. Phase II adds an additional 3% increase to the entire team's water resistance for 20 seconds, while Phase III also grants all teammates a one-use shield that nullifies damage less than 20% of the user's maximum HP. This does not stack with any other shields.`
                        }
                    ],
                    cost: '2838',
                    regen: 'None',
                    iframe: 'Long'
                },
                {
                    name: 'Lethal Stratagem',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals wind damage to the target and nearby enemies, and grants all teammates immunity to knockback for 10 seconds.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals wind damage to the target and nearby enemies, and grants all teammates immunity to knockback for 15 seconds.'
                        }
                    ],
                    cost: '7500',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Mega Man',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-11/110354_01_r05_0.png?itok=20qiSUSI',
            description: ' - ',
            cv: ['', ''],
            title: 'Kindly Android',
            rarity: '5',
            element: 'Flame',
            weapon: 'Wand',
            role: 'Attack',
            atk: '472',
            hp: '688',
            coability: {
                name: 'Overdrive Punisher & Gauge Accelerator IV',
                baseEffect: 'Increases damage to enemies in overdrive state by 11% and the rate the mode gauge decreases by 10%.',
                upgrades: ['', '', '', '']
            },
            abilities: [
                [
                    {
                        name: 'L.S. Reactor I',
                        effect: 'Boosts damage dealt to boss enemies in "Mega Man: Chaos Protocol" quests by 25%. When shapeshifting, Mega Man will jump onto Rush regardless of what dragon he is equipped with.'
                    },
                    {
                        name: 'L.S. Reactor II',
                        effect: 'Boosts damage dealt to boss enemies in "Mega Man: Chaos Protocol" quests by 30%. When shapeshifting, Mega Man will jump onto Rush regardless of what dragon he is equipped with.'
                    }
                ],
                [
                    {
                        name: 'Stun Res +50%',
                        effect: 'Reduces susceptibility to stun by 50%.'
                    },
                    {
                        name: 'Stun Res +100%',
                        effect: 'Reduces susceptibility to stun by 100%.'
                    }
                ],
                [
                    {
                        name: 'Gauge Accelerator +30%',
                        effect: 'Speeds the rate the mode gauge decreases by 30%.'
                    },
                    {
                        name: 'Gauge Accelerator +35%',
                        effect: 'Speeds the rate the mode gauge decreases by 35%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Metal Blade',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: `Equips Mega Man with the special "Metal Blade" weapon, allowing him to shoot blades by tapping the screen. Metal Blade deals flame damage to enemies in a line, and inflicts bleeding. While this weapon is equipped, Mega Man's attacks will consume the weapon gauge until it is exhausted, at which point the weapon will be unequipped. While this skill is active, tapping the icon again will switch Mega Man's weapon back to the Mega Buster. This skill is not affected by Skill Prep, Skill Haste, Energy, and Skill Damage.`
                        },
                        {level: 'Lvl 2', description: ''},
                        {level: 'Lvl 3', description: ''}
                    ],
                    cost: '2000',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Leaf Shield',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: `Equips Mega Man with the special "Leaf Shield" weapon, allowing him to create a Leaf Shield by tapping the screen once. After a Leaf Shield has been created, tapping the screen again will shoot it in the direction of enemies, or it will be shot automatically after enough time has passed. Leaf Shield deals flame damage to surrounding enemies. While this weapon is equipped, Mega Man's attacks will consume the weapon gauge until it is exhausted, at which point the weapon will be unequipped. While this skill is active, tapping the icon again will switch Mega Man's weapon back to the Mega Buster. This skill is not affected by Skill Prep, Skill Haste, Energy, and Skill Damage.`
                        },
                        {level: 'Lvl 2', description: ''}
                    ],
                    cost: '4000',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Natalie',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-06/110326_01_r05.png?itok=hkCoXufN',
            description: 'A traveling festival planner who aids Yaten as a capable and hard-working apprentice. Her rough manner of speech betrays a kind, big-sister persona.',
            cv: ['Pippa McGuire', 'Ayana Taketatsu'],
            title: 'Devoted Festival Protégé',
            rarity: '5',
            element: 'Shadow',
            weapon: 'Blade',
            role: 'Attack',
            atk: '521',
            hp: '739',
            coability: {
                name: 'Strength +5%',
                baseEffect: 'Increases strength by 5%. Benefits your whole team.',
                upgrades: [
                    'Increases strength by 6%. Benefits your whole team.',
                    'Increases strength by 7%. Benefits your whole team.',
                    'Increases strength by 8%. Benefits your whole team.',
                    'Increases strength by 10%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Extra Energy II',
                        effect: "Grants a 50% chance that a user's energy level will increase by an additional stage upon being increased."
                    },
                    {
                        name: 'Extra Energy III',
                        effect: "Grants an 80% chance that a user's energy level will increase by an additional stage upon being increased."
                    }
                ],
                [
                    {
                        name: 'Paralysis Res +50%',
                        effect: 'Reduces susceptibility to paralysis by 50%.'
                    },
                    {
                        name: 'Paralysis Res +100%',
                        effect: 'Reduces susceptibility to paralysis by 100%.'
                    }
                ],
                [
                    {
                        name: 'HP Below 30% = Strength & Attack Rate II',
                        effect: 'Increases strength by 15% and attack rate by 10% when HP is 30% or below.'
                    },
                    {
                        name: 'HP Below 30% = Strength & Attack Rate III',
                        effect: 'Increases strength by 20% and attack rate by 10% when HP is 30% or below.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Defiant Dance',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Deals shadow damage to enemies directly ahead, and increases the user's energy level by one stage. Damage will be increased as the user's HP decreases. When an adventurer's energy level reaches level five, they will become energized, and their next attack or recovery skill will be upgraded. At this point, using any applicable skill will reset that adventurer's energy level to zero."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Deals shadow damage to enemies directly ahead, and increases the user's energy level by one stage. Damage will be increased as the user's HP decreases. When an adventurer's energy level reaches level five, they will become energized, and their next attack or recovery skill will be upgraded. At this point, using any applicable skill will reset that adventurer's energy level to zero."
                        },
                        {
                            level: 'Lvl 3',
                            description: "Deals shadow damage to enemies directly ahead, and increases the user's energy level by one stage. Damage will be increased as the user's HP decreases. When an adventurer's energy level reaches level five, they will become energized, and their next attack or recovery skill will be upgraded. At this point, using any applicable skill will reset that adventurer's energy level to zero. "
                        }
                    ],
                    cost: '3247',
                    regen: 'None',
                    iframe: 'Short'
                },
                {
                    name: 'Clean Slate',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Removes all debuffs from the user. If the user's HP is below 30% of max HP when using this skill, increases the user's strength by 10% for 10 seconds. If the user's HP is above or equal to 30% of max HP, reduces their HP to 20% of max HP and grants them a one-use divergent shield that nullifies damage less than 70% of the user's maximum HP. Divergent shields can stack with ordinary shields."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Removes all debuffs from the user. If the user's HP is below 30% of max HP when using this skill, increases the user's strength by 15% for 10 seconds. If the user's HP is above or equal to 30% of max HP, reduces their HP to 20% of max HP and grants them a one-use divergent shield that nullifies damage less than 80% of the user's maximum HP. Divergent shields can stack with ordinary shields."
                        }
                    ],
                    cost: '6000',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Gala Mym',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-05/Gala%20Mym-5-star.png?itok=_LuyYEK9',
            description: 'The Flamewyrm Brunhilda, who assumed a human form to be closer to her darling, the prince. Her love knows no bounds, and burns hotter than even her own fierce blazes.',
            cv: ['Kelly Marie', 'Aya Endo'],
            title: 'Lovestruck Dragon',
            rarity: '5',
            element: 'Flame',
            weapon: 'Lance',
            role: 'Attack',
            atk: '510',
            hp: '749',
            coability: {
                name: 'HP +9%',
                baseEffect: 'Increases HP by 9%. Benefits your whole team.',
                upgrades: [
                    'Increases HP by 10%. Benefits your whole team.',
                    'Increases HP by 12%. Benefits your whole team.',
                    'Increases HP by 13%. Benefits your whole team.',
                    'Increases HP by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: "Flamewyrm's Nature I",
                        effect: 'Reduces susceptibility to burning by 100%. When shapeshifting for the first time, Mym will transform into Brunhilda regardless of what dragon she is equipped with, and her strength will increase by 15% for the remainder of the quest. The second time onwards, she will transform into High Brunhilda instead, and her attack rate while shapeshifted will increase by 15%.'
                    },
                    {
                        name: "Flamewyrm's Nature II",
                        effect: 'Reduces susceptibility to burning by 100%. When shapeshifting for the first time, Mym will transform into Brunhilda regardless of what dragon she is equipped with, her strength will increase by 15% for the remainder of the quest, and the skill Flames of Passion will be powered up for the remainder of the quest. The second time onwards, she will transform into High Brunhilda instead, and her attack rate while shapeshifted will increase by 15%.'
                    }
                ],
                [
                    {
                        name: "Flamewyrm's Defiance I",
                        effect: 'Reduces susceptibility to stun by 50%. When Mym is hit by an attack that would have stunned her, the skill gauge for the Dragon Claw skill fills by 25%. After activating, this gauge-filling effect will not activate again for 15 seconds.'
                    },
                    {
                        name: "Flamewyrm's Defiance II",
                        effect: 'Reduces susceptibility to stun by 100%. When Mym is hit by an attack that would have stunned her, the skill gauge for the Dragon Claw skill fills by 50%. After activating, this gauge-filling effect will not activate again for 15 seconds.'
                    }
                ],
                [
                    {
                        name: 'Dragon Time +15%',
                        effect: 'Extends shapeshift time by 15%.'
                    },
                    {
                        name: 'Dragon Time +20%',
                        effect: 'Extends shapeshift time by 20%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Dragon Claw',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals flame damage to enemies directly ahead, and raises the dragon gauge if the attack connects.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals flame damage to enemies directly ahead, and raises the dragon gauge if the attack connects.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals flame damage to enemies directly ahead, and raises the dragon gauge if the attack connects.'
                        }
                    ],
                    cost: '2914',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Flames of Passion',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals flame damage to enemies in a line.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals flame damage to enemies in a line.'
                        }
                    ],
                    cost: '5736',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Gala Sarisse',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-01/Sarisse-5-star.png?itok=LZ2UA0sL',
            description: 'An archer from Woodhaven whose skills are equal to her brother, Luca. Rowdy and loud, her special move is a crushing punch that Luca has experienced more than once. She left her village to fight fiends and provide aid to all in need.',
            cv: ['Molly James Hall', 'Ayaka Asai'],
            title: 'The Crimson Star',
            rarity: '5',
            element: 'Flame',
            weapon: 'Bow',
            role: 'Support',
            atk: '485',
            hp: '843',
            coability: {
                name: 'Skill Haste +8%',
                baseEffect: 'Increases skill gauge fill rate by 8%. Benefits your whole team.',
                upgrades: [
                    'Increases skill gauge fill rate by 9%. Benefits your whole team.',
                    'Increases skill gauge fill rate by 11%. Benefits your whole team.',
                    'Increases skill gauge fill rate by 12%. Benefits your whole team.',
                    'Increases skill gauge fill rate by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Sylvan Strength I',
                        effect: "Increases the user's strength by 2% and critical rate by 1% for 15 seconds for every 25-hit combo."
                    },
                    {
                        name: 'Sylvan Strength II',
                        effect: "Increases the user's strength by 2% and critical rate by 1% for 15 seconds for every 20-hit combo."
                    }
                ],
                [
                    {
                        name: 'Woodland Blessing I',
                        effect: 'Reduces susceptibility to stun and sleep by 50%.'
                    },
                    {
                        name: 'Woodland Blessing II',
                        effect: 'Reduces susceptibility to stun and sleep by 100%.'
                    }
                ],
                [
                    {
                        name: 'Buff Time +25%',
                        effect: 'Increases duration of buff skills by 25%.'
                    },
                    {
                        name: 'Buff Time +30%',
                        effect: 'Increases duration of buff skills by 30%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Brilliant Bolt',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals flame damage to enemies directly ahead, and fires extra shots equal to the number of buffs the user has. A maximum of seven additional shots can be fired.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals flame damage to enemies directly ahead, and fires extra shots equal to the number of buffs the user has. A maximum of seven additional shots can be fired.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals flame damage to enemies directly ahead, and fires extra shots equal to the number of buffs the user has. A maximum of seven additional shots can be fired.'
                        }
                    ],
                    cost: '2803',
                    regen: 'None',
                    iframe: 'Long'
                },
                {
                    name: 'Cheerful Assist',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Increases the entire team's strength by 15% for 10 seconds. If used again, the skill will increase the entire team's defense by 15% for 15 seconds instead, after which the skill will revert to its initial effect."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Increases the entire team's strength by 20% for 10 seconds. If used again, the skill will increase the entire team's defense by 20% for 15 seconds instead, after which the skill will revert to its initial effect."
                        }
                    ],
                    cost: '8534',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Yachiyo',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-05/Yachiyo-4-star_0.png?itok=_kDHypTm',
            description: 'A glory-seeking samurai who speaks an old dialect. Based on advice from her grandfather, she seeks to achieve greatness by challenging a thousand warriors, but is now so skilled that none dare face her in combat.',
            cv: ['Caitlyn Bairstow', 'Sayuri Hara'],
            title: 'Peerless Duelist',
            rarity: '4',
            element: 'Light',
            weapon: 'Blade',
            role: 'Attack',
            atk: '501',
            hp: '722',
            coability: {
                name: 'Strength +3%',
                baseEffect: 'Increases strength by 3%. Benefits your whole team.',
                upgrades: [
                    'Increases strength by 4%. Benefits your whole team.',
                    'Increases strength by 5%. Benefits your whole team.',
                    'Increases strength by 7%. Benefits your whole team.',
                    'Increases strength by 10%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Paralysis = User Strength +10%',
                        effect: "Buffs the user's strength by 10% for 10 seconds upon successfully paralyzing an enemy. After activating, this ability will not activate again for five seconds."
                    },
                    {
                        name: 'Paralysis = User Strength +15%',
                        effect: "Buffs the user's strength by 15% for 10 seconds upon successfully paralyzing an enemy. After activating, this ability will not activate again for five seconds."
                    }
                ],
                [
                    {
                        name: 'Curse Res +50%',
                        effect: 'Reduces susceptibility to curses by 50%.'
                    },
                    {
                        name: 'Curse Res +100%',
                        effect: 'Reduces susceptibility to curses by 100%.'
                    }
                ],
                [
                    {
                        name: 'Paralyzed Punisher +20%',
                        effect: 'Increases damage to paralyzed enemies by 20%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Blossom Flash',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals light damage to enemies in a line.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals light damage to enemies in a line, and inflicts paralysis.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals light damage to enemies in a line, and inflicts paralysis.'
                        }
                    ],
                    cost: '2567',
                    regen: 'None',
                    iframe: 'Long'
                },
                {
                    name: 'Peerless Heart',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: `Activates "Dauntless Spirit." The user's next force strike will deal extra damage.`
                        },
                        {
                            level: 'Lvl 2',
                            description: `Activates "Dauntless Spirit." The user's next force strike will deal extra damage.`
                        }
                    ],
                    cost: '4139',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Veronica',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-04/Veronica-5-star.png?itok=gADSGaLi',
            description: "A taciturn girl from another world, and the princess of the Emblian Empire. She's cold by nature and does not believe in showing mercy to her enemies, but also cares deeply for her brother, whom she has missed for some time.",
            cv: ['Wendee Lee', 'Rina Hidaka'],
            title: 'Emblian Princess',
            rarity: '5',
            element: 'Shadow',
            weapon: 'Wand',
            role: 'Attack',
            atk: '514',
            hp: '745',
            coability: {
                name: 'Skill Damage +8%',
                baseEffect: 'Increases attack skill damage by 8%. Benefits your whole team.',
                upgrades: [
                    'Increases attack skill damage by 9%. Benefits your whole team.',
                    'Increases attack skill damage by 11%. Benefits your whole team.',
                    'Increases attack skill damage by 12%. Benefits your whole team.',
                    'Increases attack skill damage by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Last Destruction I',
                        effect: "Increases the damage of the next attack skill used by each team member by 30% when the user's HP drops to 30% (once per quest)."
                    },
                    {
                        name: 'Last Destruction II',
                        effect: "Increases the damage of the next attack skill used by each team member by 40% when the user's HP drops to 30% (once per quest)."
                    }
                ],
                [
                    {
                        name: 'Paralysis Res +50%',
                        effect: 'Reduces susceptibility to paralysis by 50%.'
                    },
                    {
                        name: 'Paralysis Res +100%',
                        effect: 'Reduces susceptibility to paralysis by 100%.'
                    }
                ],
                [
                    {
                        name: 'Skill Prep +75%',
                        effect: 'Fills 75% of skill gauges at the start of quests.'
                    },
                    {
                        name: 'Skill Prep +100%',
                        effect: 'Fills 100% of skill gauges at the start of quests.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Gespenst',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Deals shadow damage to the target and nearby enemies. The lower the user's HP, the more damage this skill deals."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Deals shadow damage to the target and nearby enemies. The lower the user's HP, the more damage this skill deals."
                        },
                        {
                            level: 'Lvl 3',
                            description: "Deals shadow damage to the target and nearby enemies. The lower the user's HP, the more damage this skill deals."
                        }
                    ],
                    cost: '3291',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Nosferatu',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals shadow damage to surrounding enemies, and restores 5% of the damage inflicted as HP to the user. This recovery caps at 15% of their maximum HP.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals shadow damage to surrounding enemies, and restores 5% of the damage inflicted as HP to the user. This recovery caps at 15% of their maximum HP.'
                        }
                    ],
                    cost: '6186',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Verica',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Verica-4-star.png?itok=qZ0DwfO2',
            description: 'A beautiful fortune-teller with an ability to read the future. Her demeanor is gentle, but her spirit is strong—and with her belief that fortune-tellers have a duty to fight against fate, she has resolved to rise above destiny with the prince.',
            cv: ['Kelly Marie', 'Chiaki Takahashi'],
            title: 'Guiding Seer',
            rarity: '4',
            element: 'Flame',
            weapon: 'Staff',
            role: 'Healing',
            atk: '454',
            hp: '781',
            coability: {
                name: 'Recovery Potency +6%',
                baseEffect: 'Increases the potency of recovery skills by 6%. Benefits your whole team.',
                upgrades: [
                    'Increases the potency of recovery skills by 8%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 10%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 14%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 20%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Full HP = Healing +13%',
                        effect: 'Increases the potency of recovery skills by 13% when HP is full.'
                    },
                    {
                        name: 'Full HP = Healing +15%',
                        effect: 'Increases the potency of recovery skills by 15% when HP is full.'
                    }
                ],
                [
                    {
                        name: 'Stun Res +50%',
                        effect: 'Reduces susceptibility to stun by 50%.'
                    },
                    {
                        name: 'Stun Res +100%',
                        effect: 'Reduces susceptibility to stun by 100%.'
                    }
                ],
                [
                    {
                        name: 'Recovery Potency +8%',
                        effect: 'Increases the potency of recovery skills by 8%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Blessings of Destiny',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Restores HP to all allies and continues healing over the next 15 seconds.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Restores HP to all allies and removes stun, then continues healing over the next 15 seconds.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Restores HP to all allies and removes stun, then continues healing over the next 15 seconds.'
                        }
                    ],
                    cost: '5916',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: "Time's Respite",
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Restores HP to the team member most in need.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Restores HP to the team member most in need.'
                        }
                    ],
                    cost: '11832',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Summer Verica',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-08/110269_02_r05.png?itok=d78_kt7H',
            description: "Verica has donned a swimsuit and stepped out onto the beach, and her presence is like a cool breeze on the sun-soaked landscape. The eyes of others tend to find their way to her, and if you aren't careful, she might just capture your heart.",
            cv: ['Kelly Marie', 'Chiaki Takahashi'],
            title: 'Beach Beauty',
            rarity: '5',
            element: 'Shadow',
            weapon: 'Staff',
            role: 'Healing',
            atk: '470',
            hp: '804',
            coability: {
                name: 'Recovery Potency +10%',
                baseEffect: 'Increases the potency of recovery skills by 10%. Benefits your whole team.',
                upgrades: [
                    'Increases the potency of recovery skills by 12%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 14%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 16%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 20%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Full HP = Healing +15%',
                        effect: 'Increases the potency of recovery skills by 15% when HP is full.'
                    },
                    {
                        name: 'Full HP = Healing +20%',
                        effect: 'Increases the potency of recovery skills by 20% when HP is full.'
                    }
                ],
                [
                    {
                        name: 'Blindness Res +50%',
                        effect: 'Reduces susceptibility to blindness by 50%.'
                    },
                    {
                        name: 'Blindness Res +100%',
                        effect: 'Reduces susceptibility to blindness by 100%.'
                    }
                ],
                [
                    {
                        name: 'Recovery Potency +10%',
                        effect: 'Increases the potency of recovery skills by 10%.'
                    },
                    {
                        name: 'Recovery Potency +13%',
                        effect: 'Increases the potency of recovery skills by 13%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Everlasting Summer',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Restores HP to all allies and continues healing over the next 15 seconds.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Restores HP to all allies and removes blindness, then continues healing over the next 15 seconds.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Restores HP to all allies and removes blindness, then continues healing over the next 15 seconds.'
                        }
                    ],
                    cost: '5916',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Moment of Passion',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Grants all teammates a buff which restores their HP by 3% of damage inflicted for 30 seconds. When Everlasting Summer is not available for use, the gauge for this skill will fill gradually. Abilities that increase skill gauge fill rate will not affect this skill.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Grants all teammates a buff which restores their HP by 5% of damage inflicted for 30 seconds. When Everlasting Summer is not available for use, the gauge for this skill will fill gradually. Abilities that increase skill gauge fill rate will not affect this skill.'
                        }
                    ],
                    cost: '63104',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Laranoa',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-03/Laranoa-5-star.png?itok=XnyY5p9V',
            description: 'A sylvan from the west forest, and childhood friend of Luca and Sylas. She was nominated as the next chief of her village on account of her strength, hunting skills, and popularity. Her hunting dog, Rolf, has been with her since birth.',
            cv: ['Cobra Ramone', 'Sumire Morohoshi'],
            title: 'Lighthearted Leader',
            rarity: '5',
            element: 'Water',
            weapon: 'Bow',
            role: 'Support',
            atk: '469',
            hp: '806',
            coability: {
                name: 'Skill Haste +8%',
                baseEffect: 'Increases skill gauge fill rate by 8%. Benefits your whole team.',
                upgrades: [
                    'Increases skill gauge fill rate by 9%. Benefits your whole team.',
                    'Increases skill gauge fill rate by 11%. Benefits your whole team.',
                    'Increases skill gauge fill rate by 12%. Benefits your whole team.',
                    'Increases skill gauge fill rate by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: '25 Hits = Critical Damage +10%',
                        effect: 'Adds % to the modifier applied to critical damage for 20 seconds for every 25-hit combo.'
                    },
                    {
                        name: '20 Hits = Critical Damage +10%',
                        effect: 'Adds % to the modifier applied to critical damage for 20 seconds for every 20-hit combo.'
                    }
                ],
                [
                    {
                        name: 'Stun Res +50%',
                        effect: 'Reduces susceptibility to stun by 50%.'
                    },
                    {
                        name: 'Stun Res +100%',
                        effect: 'Reduces susceptibility to stun by 100%.'
                    }
                ],
                [
                    {
                        name: 'Skill Damage +25%',
                        effect: 'Increases attack skill damage by 25%.'
                    },
                    {
                        name: 'Skill Damage +30%',
                        effect: 'Increases attack skill damage by 30%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Vivid Volley',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals water damage to enemies in a line.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals water damage to enemies in a line.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals water damage to enemies in a line.'
                        }
                    ],
                    cost: '2567',
                    regen: 'None',
                    iframe: 'Long'
                },
                {
                    name: "Hunter's Intuition",
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "For 10 seconds, increases the user and nearby allies' strength by 10% and skill gauge fill rate by 15%."
                        },
                        {
                            level: 'Lvl 2',
                            description: "For 10 seconds, increases the user and nearby allies' strength by 10% and skill gauge fill rate by 20%."
                        }
                    ],
                    cost: '8534',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Hildegarde',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Hildegarde-5-star.png?itok=T88k17c9',
            description: 'While head of an abbey, an oracle compelled her on a mission to the castle to aid the prince. Her austere personality reinforces her faith and helps her impose teachings of the Church on others. She has an abnormal hatred of lies.',
            cv: ['Mavis Ada', 'Maaya Sakamoto'],
            title: 'Devout Oracle',
            rarity: '5',
            element: 'Light',
            weapon: 'Staff',
            role: 'Healing',
            atk: '466',
            hp: '810',
            coability: {
                name: 'Recovery Potency +10%',
                baseEffect: 'Increases the potency of recovery skills by 10%. Benefits your whole team.',
                upgrades: [
                    'Increases the potency of recovery skills by 12%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 14%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 16%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 20%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Skill Prep +75%',
                        effect: 'Fills 75% of skill gauges at the start of quests.'
                    },
                    {
                        name: 'Skill Prep +100%',
                        effect: 'Fills 100% of skill gauges at the start of quests.'
                    }
                ],
                [
                    {
                        name: 'Curse Res +50%',
                        effect: 'Reduces susceptibility to curses by 50%.'
                    },
                    {
                        name: 'Curse Res +100%',
                        effect: 'Reduces susceptibility to curses by 100%.'
                    }
                ],
                [
                    {
                        name: 'HP 70% = Healing +13%',
                        effect: 'Increases the potency of recovery skills by 13% when HP is 70% or above.'
                    },
                    {
                        name: 'HP 70% = Healing +15%',
                        effect: 'Increases the potency of recovery skills by 15% when HP is 70% or above.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Radiant Savior',
                    levels: [
                        {level: 'Lvl 1', description: 'Restores HP to all allies.'},
                        {
                            level: 'Lvl 2',
                            description: 'Restores HP to all allies and removes curses.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Restores HP to all allies and removes curses.'
                        }
                    ],
                    cost: '5916',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Sacred Guardian',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Grants all teammates a one-use shield that nullifies damage less than 20% of the user's maximum HP, and gradually recovers their HP for 15 seconds. This does not stack with any other shields."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Grants all teammates a one-use shield that nullifies damage less than 30% of the user's maximum HP, and gradually recovers their HP for 15 seconds. Does not stack with any other shields."
                        }
                    ],
                    cost: '11832',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Gala Ranzal',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-03/Gala%20Ranzal-5-star.png?itok=KKV-bU4P',
            description: "Ranzal has been appointed a commander in the New Alberian army. He wears armor made by his friends, and has traded the axe of his mercenary days for a sword. He's still as boisterous as ever, but now has the dignity and presence of a leader.",
            cv: ['Will Williams', 'Katsuyuki Konishi'],
            title: 'Seasoned Tactician',
            rarity: '5',
            element: 'Wind',
            weapon: 'Sword',
            role: 'Attack',
            atk: '504',
            hp: '755',
            coability: {
                name: 'Dragon Haste +8%',
                baseEffect: 'Increases dragon gauge fill rate by 8%. Benefits your whole team.',
                upgrades: [
                    'Increases dragon gauge fill rate by 9%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 11%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 12%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: "Experience's Boon I",
                        effect: "Grants the user an Attack Gauge and a Burst Gauge. The Attack Gauge fills when regular attacks connect with enemies, while the Burst Gauge is filled when force strikes successfully connect. For every completely filled gauge, the user's defense is increased. Any filled gauges are consumed when using the Cyclone Blade skill, increasing its power."
                    },
                    {
                        name: "Experience's Boon II",
                        effect: "Grants the user an Attack Gauge and a Burst Gauge. The Attack Gauge fills when regular attacks connect with enemies, while the Burst Gauge is filled when force strikes successfully connect. For every completely filled gauge, the user's defense is increased. Any filled gauges are consumed when using the Cyclone Blade skill, increasing its power."
                    }
                ],
                [
                    {
                        name: 'Relentless Spirit I',
                        effect: 'Reduces susceptibility to freeze and bog by 50%.'
                    },
                    {
                        name: 'Relentless Spirit II',
                        effect: 'Reduces susceptibility to freeze and bog by 100%.'
                    }
                ],
                [
                    {
                        name: 'Skill Damage +25%',
                        effect: 'Increases attack skill damage by 25%.'
                    },
                    {
                        name: 'Skill Damage +30%',
                        effect: 'Increases attack skill damage by 30%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Cyclone Blade',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals wind damage to the target and nearby enemies.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals wind damage to the target and nearby enemies.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals wind damage to the target and nearby enemies.'
                        }
                    ],
                    cost: '2661',
                    regen: 'None',
                    iframe: 'Long'
                },
                {
                    name: 'Wind Tactics',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: `Activates "Gale-Clad Sword." The user's next three force strikes are powered up, and can damage far-away enemies. Also increases the entire team's defense by 8% for 10 seconds.`
                        },
                        {
                            level: 'Lvl 2',
                            description: `Activates "Gale-Clad Sword." The user's next three force strikes are powered up, and can damage far-away enemies. Also increases the entire team's defense by 10% for 10 seconds.`
                        }
                    ],
                    cost: '5800',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Sinoa',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Sinoa-4-star_0.png?itok=UKREOtLf',
            description: 'A scholar dedicated to science and magic. Explosions always seem to accompany her experiments, which got her expelled from the magic academy. Her work continues at the Halidom, where her hobby is staring at clocks.',
            cv: ['Mae Matchett', 'Rina Sato'],
            title: 'Intrepid Scholar',
            rarity: '4',
            element: 'Flame',
            weapon: 'Wand',
            role: 'Support',
            atk: '473',
            hp: '762',
            coability: {
                name: 'Skill Damage +5%',
                baseEffect: 'Increases attack skill damage by 5%. Benefits your whole team.',
                upgrades: [
                    'Increases attack skill damage by 6%. Benefits your whole team.',
                    'Increases attack skill damage by 8%. Benefits your whole team.',
                    'Increases attack skill damage by 11%. Benefits your whole team.',
                    'Increases attack skill damage by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Full HP = Strength +10%',
                        effect: 'Increases strength by 10% when HP is full.'
                    },
                    {
                        name: 'Full HP = Strength +13%',
                        effect: 'Increases strength by 13% when HP is full.'
                    }
                ],
                [
                    {
                        name: 'Sleep Res +50%',
                        effect: 'Reduces susceptibility to sleep by 50%.'
                    },
                    {
                        name: 'Sleep Res +100%',
                        effect: 'Reduces susceptibility to sleep by 100%.'
                    }
                ],
                [
                    {
                        name: 'Buff Time +20%',
                        effect: 'Increases duration of buff skills by 20%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Custom Concoction',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Applies one of the following at random to the entire team: Increases strength by 15% for 15 seconds Increases defense by 15% for 15 seconds Increases critical rate by 15% for 10 seconds Increases max HP by 5% for the remainder of the quest.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Applies one of the following at random to the entire team: Increases strength by 20% for 15 seconds Increases defense by 20% for 15 seconds Increases critical rate by 20% for 10 seconds Increases max HP by 10% for the remainder of the quest.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Applies one of the following at random to the entire team: Increases strength by 25% for 15 seconds Increases defense by 25% for 15 seconds Increases critical rate by 25% for 10 seconds Increases max HP by 15% for the remainder of the quest.'
                        }
                    ],
                    cost: '3817',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Blundering Bomber',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals flame damage to the target and nearby enemies.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals flame damage to the target and nearby enemies.'
                        }
                    ],
                    cost: '5422',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Ku Hai',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-01/Ku%20Hai-4-star.png?itok=bOmidO_K',
            description: 'A wandering swordsman from the east who avoids involvement with others. He has a cool personality, but also harbors a burning rage for acts of injustice, standing up for the persecuted wherever his travels take him.',
            cv: ['Victor Williams', 'Kazuyuki Okitsu'],
            title: 'Rambling Blade',
            rarity: '4',
            element: 'Wind',
            weapon: 'Sword',
            role: 'Attack',
            atk: '488',
            hp: '732',
            coability: {
                name: 'Dragon Haste +5%',
                baseEffect: 'Increases dragon gauge fill rate by 5%. Benefits your whole team.',
                upgrades: [
                    'Increases dragon gauge fill rate by 6%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 8%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 11%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Critical Damage +13%',
                        effect: 'Adds 13% to the modifier applied to critical damage.'
                    },
                    {
                        name: 'Critical Damage +15%',
                        effect: 'Adds 15% to the modifier applied to critical damage.'
                    }
                ],
                [
                    {
                        name: 'Bog Res +50%',
                        effect: 'Reduces susceptibility to bog by 50%.'
                    },
                    {
                        name: 'Bog Res +100%',
                        effect: 'Reduces susceptibility to bog by 100%.'
                    }
                ],
                [
                    {
                        name: 'HP 70% = Critical Damage +15%',
                        effect: 'Adds 15% to the modifier applied to critical damage when HP is 70% or above.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Soaring Flicker',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals wind damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals wind damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals wind damage to enemies directly ahead.'
                        }
                    ],
                    cost: '2296',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Keen Blade',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: `Activates "Apsaras Formation" for 10 seconds. During Apsaras Formation, the user's critical rate is increased by 8%, and their force strikes are powered up.`
                        },
                        {
                            level: 'Lvl 2',
                            description: `Activates "Apsaras Formation" for 10 seconds. During Apsaras Formation, the user's critical rate is increased by 10%, and their force strikes are powered up.`
                        }
                    ],
                    cost: '2913',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Lin You',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-01/Lin%20You-5-star.png?itok=P3eQqbQ-',
            description: 'A young woman who trained with the Qilin tribe of Taiwu. She can be a little naive, but has firm beliefs when it comes to competitions and improving her martial-arts skills, and burns with a desire to become as strong as possible.',
            cv: ['Shannon Chan-Kent', 'Ayane Sakura'],
            title: 'Kung-Fu Apprentice',
            rarity: '5',
            element: 'Wind',
            weapon: 'Axe',
            role: 'Attack',
            atk: '517',
            hp: '744',
            coability: {
                name: 'Defense +9%',
                baseEffect: 'Increases defense by 9%. Benefits your whole team.',
                upgrades: [
                    'Increases defense by 10%. Benefits your whole team.',
                    'Increases defense by 11%. Benefits your whole team.',
                    'Increases defense by 12%. Benefits your whole team.',
                    'Increases defense by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'HP 70% = Critical Rate +8%',
                        effect: 'Increases critical rate by 8% when HP is 70% or above.'
                    },
                    {
                        name: 'HP 70% = Critical Rate +10%',
                        effect: 'Increases critical rate by 10% when HP is 70% or above.'
                    }
                ],
                [
                    {
                        name: 'Bog Res +50%',
                        effect: 'Reduces susceptibility to bog by 50%.'
                    },
                    {
                        name: 'Bog Res +100%',
                        effect: 'Reduces susceptibility to bog by 100%.'
                    }
                ],
                [
                    {
                        name: 'Skill Haste +6%',
                        effect: 'Increases skill gauge fill rate by 6%.'
                    },
                    {
                        name: 'Skill Haste +8%',
                        effect: 'Increases skill gauge fill rate by 8%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Typhoon Fist',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals wind damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals wind damage to enemies directly ahead, and inflicts sleep.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals wind damage to enemies directly ahead, and inflicts sleep.'
                        }
                    ],
                    cost: '2969',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: "Heaven's Breath",
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: `Restores the user's HP, and activates "Heaven's Breath" for 10 seconds. During Heaven's Breath, the user's attack rate is increased by 15%, and the Typhoon Fist skill is powered up. `
                        },
                        {
                            level: 'Lvl 2',
                            description: `Restores the user's HP, and activates "Heaven's Breath" for 10 seconds. During Heaven's Breath, the user's attack rate is increased by 20%, and the Typhoon Fist skill is powered up. `
                        }
                    ],
                    cost: '8014',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Ricardt',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Ricardt-3-star.png?itok=o-1-ld3P',
            description: "A priest who's not good with people or blood. Although he wants to be of use and has the talent to back it up, his personality prevents it. He knows this and actively tries to better himself, but it's all to little avail.",
            cv: ['Brian Joseph Benedict', 'Daiki Yamashita'],
            title: 'Kindly Coward',
            rarity: '3',
            element: 'Water',
            weapon: 'Staff',
            role: 'Healing',
            atk: '444',
            hp: '768',
            coability: {
                name: 'Recovery Potency +2%',
                baseEffect: 'Increases the potency of recovery skills by 2%. Benefits your whole team.',
                upgrades: [
                    'Increases the potency of recovery skills by 6%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 10%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 14%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 20%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Full HP = Defense +15%',
                        effect: 'Increases defense by 15% when HP is full.'
                    },
                    {
                        name: 'Full HP = Defense +20%',
                        effect: 'Increases defense by 20% when HP is full.'
                    }
                ],
                [
                    {
                        name: 'Stun Res +25%',
                        effect: 'Reduces susceptibility to stun by 25%.'
                    },
                    {
                        name: 'Stun Res +50%',
                        effect: 'Reduces susceptibility to stun by 50%.'
                    }
                ],
                [
                    {
                        name: 'Stun Res +25%',
                        effect: 'Reduces susceptibility to stun by 25%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Measure of Mercy',
                    levels: [
                        {level: 'Lvl 1', description: 'Restores HP to all allies.'},
                        {level: 'Lvl 2', description: 'Restores HP to all allies.'},
                        {level: 'Lvl 3', description: 'Restores HP to all allies.'}
                    ],
                    cost: '7888',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Holy Water',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Restores HP to all allies and continues healing over the next 15 seconds.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Restores HP to all allies and continues healing over the next 15 seconds.'
                        }
                    ],
                    cost: '11832',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Xander',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Xander-5-star.png?itok=5pgoaS4r',
            description: 'A brash king from another land who showed up one day claiming he should rule the castle. The care he shows for his subjects has led others to accept him—though not to the extent of actually calling him their king.',
            cv: ['Arneham Keefe', 'Yuichi Nakamura'],
            title: 'Born Ruler',
            rarity: '5',
            element: 'Water',
            weapon: 'Sword',
            role: 'Attack',
            atk: '503',
            hp: '757',
            coability: {
                name: 'Dragon Haste +8%',
                baseEffect: 'Increases dragon gauge fill rate by 8%. Benefits your whole team.',
                upgrades: [
                    'Increases dragon gauge fill rate by 9%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 11%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 12%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: "Striker's Strength +5%",
                        effect: 'Increases strength by 5% for every three enemies defeated with force strikes (up to five times per quest).'
                    },
                    {
                        name: "Striker's Strength +6%",
                        effect: 'Increases strength by 6% for every three enemies defeated with force strikes (up to five times per quest).'
                    }
                ],
                [
                    {
                        name: 'Stun Res +50%',
                        effect: 'Reduces susceptibility to stun by 50%.'
                    },
                    {
                        name: 'Stun Res +100%',
                        effect: 'Reduces susceptibility to stun by 100%.'
                    }
                ],
                [
                    {
                        name: 'Force Strike +40%',
                        effect: 'Increases force strike damage by 40%.'
                    },
                    {
                        name: 'Force Strike +50%',
                        effect: 'Increases force strike damage by 50%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Majestic Tide',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals water damage to enemies in a line. The more buffs the user has, the higher the skill boost received and the higher the damage dealt.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals water damage to enemies in a line. The more buffs the user has, the higher the skill boost received and the higher the damage dealt.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals water damage to enemies in a line. The more buffs the user has, the higher the skill boost received and the higher the damage dealt.'
                        }
                    ],
                    cost: '2714',
                    regen: 'None',
                    iframe: 'Short'
                },
                {
                    name: 'Royal Maelstrom',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals water damage to surrounding enemies.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals water damage to surrounding enemies.'
                        }
                    ],
                    cost: '4817',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Mikoto',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Mikoto-5-star.png?itok=pFpGPCJy',
            description: 'A warrior enlightened through extensive meditation, his mental strength gives him the ability to rend the earth asunder. He joined up on the condition he receives help finding his missing cat, who he views as a true friend.',
            cv: ['John Bradford', 'Kenjiro Tsuda'],
            title: "Nature's Avatar",
            rarity: '5',
            element: 'Flame',
            weapon: 'Blade',
            role: 'Attack',
            atk: '520',
            hp: '740',
            coability: {
                name: 'Strength +5%',
                baseEffect: 'Increases strength by 5%. Benefits your whole team.',
                upgrades: [
                    'Increases strength by 6%. Benefits your whole team.',
                    'Increases strength by 7%. Benefits your whole team.',
                    'Increases strength by 8%. Benefits your whole team.',
                    'Increases strength by 10%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'HP 70% = Critical Rate +8%',
                        effect: 'Increases critical rate by 8% when HP is 70% or above.'
                    },
                    {
                        name: 'HP 70% = Critical Rate +10%',
                        effect: 'Increases critical rate by 10% when HP is 70% or above.'
                    }
                ],
                [
                    {
                        name: 'Stun Res +50%',
                        effect: 'Reduces susceptibility to stun by 50%.'
                    },
                    {
                        name: 'Stun Res +100%',
                        effect: 'Reduces susceptibility to stun by 100%.'
                    }
                ],
                [
                    {
                        name: 'Critical Rate +6%',
                        effect: 'Increases critical rate by 6%.'
                    },
                    {
                        name: 'Critical Rate +8%',
                        effect: 'Increases critical rate by 8%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Ravenous Fire',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Deals flame damage to enemies directly ahead, and activates Stance if the attack connects. During Stance, the user's strength is increased and skills are powered up. Stance ends after a set period of time or after landing a powered-up skill attack."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Deals flame damage to enemies directly ahead, and activates Stance if the attack connects. During Stance, the user's strength is increased and skills are powered up. Stance ends after a set period of time or after landing a powered-up skill attack."
                        },
                        {
                            level: 'Lvl 3',
                            description: "Deals flame damage to enemies directly ahead, and activates Stance if the attack connects. During Stance, the user's strength is increased and skills are powered up. Stance ends after a set period of time or after landing a powered-up skill attack."
                        }
                    ],
                    cost: '4500',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Kindled Heart',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Increases the user's attack rate by 15% for 10 seconds."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Increases the user's attack rate by 20% for 10 seconds."
                        }
                    ],
                    cost: '4500',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Gala Cleo',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-07/100004_10_r05.png?itok=66L3ZrM5',
            description: 'After discovering an ancient wand in the castle, Cleo has gained new power and taken her place on the front lines. Her tactical acumen more than makes up for her questionable stamina, and she intends to do much more than heal the wounded.',
            cv: ['Siobhan Rebecca', 'Yumi Uchiyama'],
            title: 'Supreme Sorcerer',
            rarity: '5',
            element: 'Shadow',
            weapon: 'Wand',
            role: 'Support',
            atk: '489',
            hp: '785',
            coability: {
                name: 'Skill Damage +8%',
                baseEffect: 'Increases attack skill damage by 8%. Benefits your whole team.',
                upgrades: [
                    'Increases attack skill damage by 9%. Benefits your whole team.',
                    'Increases attack skill damage by 11%. Benefits your whole team.',
                    'Increases attack skill damage by 12%. Benefits your whole team.',
                    'Increases attack skill damage by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Magical Modification I',
                        effect: `Using Ancient Ray grants the user the "Altered Strike" effect. When this effect is active, the user's next force strike will create a buff zone that lasts for 10 seconds and increases the strength of adventurers inside it by 20%. This effect cannot stack, and will be consumed on use.`
                    },
                    {
                        name: 'Magical Modification II',
                        effect: `Using Ancient Ray grants the user the "Altered Strike" effect. When this effect is active, the user's next force strike will create a buff zone that lasts for 10 seconds and increases the strength of adventurers inside it by 25%. This effect cannot stack, and will be consumed on use.`
                    }
                ],
                [
                    {
                        name: 'Perpetual Protection I',
                        effect: 'Reduces susceptibility to blindness and paralysis by 50%.'
                    },
                    {
                        name: 'Perpetual Protection II',
                        effect: 'Reduces susceptibility to blindness and paralysis by 100%.'
                    }
                ],
                [
                    {
                        name: 'Skill Prep +75%',
                        effect: 'Fills 75% of skill gauges at the start of quests.'
                    },
                    {
                        name: 'Skill Prep +100%',
                        effect: 'Fills 100% of skill gauges at the start of quests.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Ancient Ray',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: `Deals shadow damage to multiple targets and enemies near those targets, and activates "Skill Shift" if the attack connects. Initially, this skill will target three enemies. Phase II will target four enemies, while Phase III will target five enemies. Targets will be chosen by their proximity to the user, and if the number of enemies available to target is fewer than the skill's number of hits, this selection process will be repeated for the remaining hits.`
                        },
                        {
                            level: 'Lvl 2',
                            description: `Deals shadow damage to multiple targets and enemies near those targets, and activates "Skill Shift" if the attack connects. Initially, this skill will target three enemies. Phase II will target four enemies, while Phase III will target five enemies. Targets will be chosen by their proximity to the user, and if the number of enemies available to target is fewer than the skill's number of hits, this selection process will be repeated for the remaining hits.`
                        },
                        {
                            level: 'Lvl 3',
                            description: `Deals shadow damage to multiple targets and enemies near those targets, and activates "Skill Shift" if the attack connects. Initially, this skill will target three enemies. Phase II will target four enemies, while Phase III will target five enemies. Targets will be chosen by their proximity to the user, and if the number of enemies available to target is fewer than the skill's number of hits, this selection process will be repeated for the remaining hits.`
                        }
                    ],
                    cost: '2814',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Faith of the Elders',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: `Deals shadow damage to the target and nearby enemies, reduces their defense by 8% for 20 seconds, and activates "Skill Shift" if the attack connects. Phase II adds an additional 3% decrease to enemies' strength, while Phase III also restores HP to all allies and continues healing over the next 15 seconds.`
                        },
                        {
                            level: 'Lvl 2',
                            description: `Deals shadow damage to the target and nearby enemies, reduces their defense by 10% for 20 seconds, and activates "Skill Shift" if the attack connects. Phase II adds an additional 5% decrease to enemies' strength, while Phase III also restores HP to all allies and continues healing over the next 15 seconds.`
                        }
                    ],
                    cost: '6000',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Lathna',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-10/110349_01_r05.png?itok=qGW5zPml',
            description: ' - ',
            cv: ['Bethany Brown', 'Maria Naganawa'],
            title: 'Chaos Child',
            rarity: '5',
            element: 'Shadow',
            weapon: 'Lance',
            role: 'Attack',
            atk: '511',
            hp: '748',
            coability: {
                name: 'HP +9%',
                baseEffect: 'Increases HP by 9%. Benefits your whole team.',
                upgrades: [
                    'Increases HP by 10%. Benefits your whole team.',
                    'Increases HP by 12%. Benefits your whole team.',
                    'Increases HP by 13%. Benefits your whole team.',
                    'Increases HP by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'The Faceless God I',
                        effect: 'When shapeshifting, Lathna will transform into Nyarlathotep regardless of what dragon she is equipped with. Grants an HP regen buff for 20 seconds each time she shapeshifts.'
                    },
                    {
                        name: 'The Faceless God II',
                        effect: 'When shapeshifting, Lathna will transform into Nyarlathotep regardless of what dragon she is equipped with. Grants an HP regen buff for 20 seconds each time she shapeshifts.'
                    }
                ],
                [
                    {
                        name: 'Paralysis Res +50%',
                        effect: 'Reduces susceptibility to paralysis by 50%.'
                    },
                    {
                        name: 'Paralysis Res +100%',
                        effect: 'Reduces susceptibility to paralysis by 100%.'
                    }
                ],
                [
                    {
                        name: 'Dragon Time +15%',
                        effect: 'Extends shapeshift time by 15%.'
                    },
                    {
                        name: 'Dragon Time +20%',
                        effect: 'Extends shapeshift time by 20%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Chaos Gift',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals shadow damage to the target and nearby enemies. Poisoned foes take extra damage. Continually tapping the screen during the attack will unleash additional blows, with up to a maximum of four. '
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals shadow damage to the target and nearby enemies. Poisoned foes take extra damage. Continually tapping the screen during the attack will unleash additional blows, with up to a maximum of four. '
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals shadow damage to the target and nearby enemies. Poisoned foes take extra damage. Continually tapping the screen during the attack will unleash additional blows, with up to a maximum of four. '
                        }
                    ],
                    cost: '2854',
                    regen: 'None',
                    iframe: 'Long'
                },
                {
                    name: 'Sundering Shadow',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals shadow damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals shadow damage to enemies directly ahead.'
                        }
                    ],
                    cost: '5499',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Louise',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-11/Louise-5-star.png?itok=QKgnII4A',
            description: "A girl who came to the castle with her brother Lowen, she handles everything from housework to battle with grace. She can be overprotective of her younger brother, but that's only a side effect of her courageous and generous spirit.",
            cv: ['Arlow Laker', 'Sora Amamiya'],
            title: 'Doting Sister',
            rarity: '5',
            element: 'Wind',
            weapon: 'Bow',
            role: 'Support',
            atk: '470',
            hp: '805',
            coability: {
                name: 'Skill Haste +8%',
                baseEffect: 'Increases skill gauge fill rate by 8%. Benefits your whole team.',
                upgrades: [
                    'Increases skill gauge fill rate by 9%. Benefits your whole team.',
                    'Increases skill gauge fill rate by 11%. Benefits your whole team.',
                    'Increases skill gauge fill rate by 12%. Benefits your whole team.',
                    'Increases skill gauge fill rate by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Overdrive Punisher +10%',
                        effect: 'Increases damage to enemies in overdrive state by 10%.'
                    },
                    {
                        name: 'Overdrive Punisher +13%',
                        effect: 'Increases damage to enemies in overdrive state by 13%.'
                    }
                ],
                [
                    {
                        name: 'Bog Res +50%',
                        effect: 'Reduces susceptibility to bog by 50%.'
                    },
                    {
                        name: 'Bog Res +100%',
                        effect: 'Reduces susceptibility to bog by 100%.'
                    }
                ],
                [
                    {
                        name: 'Strength Doublebuff +10%',
                        effect: 'Increases strength by 10% for 15 seconds each time a defense up buff is received.'
                    },
                    {
                        name: 'Strength Doublebuff +13%',
                        effect: 'Increases strength by 13% for 15 seconds each time a defense up buff is received.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Piercing Wind',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals wind damage to enemies in a line, and inflicts poison.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals wind damage to enemies in a line, and inflicts poison.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals wind damage to enemies in a line, and inflicts poison.'
                        }
                    ],
                    cost: '2896',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Arrow Shower',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals wind damage to enemies in a line. Poisoned foes take extra damage.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals wind damage to enemies in a line. Poisoned foes take extra damage.'
                        }
                    ],
                    cost: '5001',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Dragonyule Cleo',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-12/Dragonyule%20Cleo-5-star.png?itok=ZqT01bxS',
            description: "Cleo has donned a Saint Starfall outfit in order to hand out presents for Dragonyule. She's also in charge of cooking, decorating, and planning the festivities, but seeing everyone happy is reward enough for all her hard work.",
            cv: ['Siobhan Rebecca', 'Yumi Uchiyama'],
            title: 'Belle Bestower',
            rarity: '5',
            element: 'Water',
            weapon: 'Dagger',
            role: 'Support',
            atk: '474',
            hp: '801',
            coability: {
                name: 'Critical Rate +5%',
                baseEffect: 'Increases critical rate by 5%. Benefits your whole team.',
                upgrades: [
                    'Increases critical rate by 6%. Benefits your whole team.',
                    'Increases critical rate by 7%. Benefits your whole team.',
                    'Increases critical rate by 8%. Benefits your whole team.',
                    'Increases critical rate by 10%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'HP 70% = Strength +10%',
                        effect: 'Increases strength by 10% when HP is 70% or above.'
                    },
                    {
                        name: 'HP 70% = Strength +13%',
                        effect: 'Increases strength by 13% when HP is 70% or above.'
                    }
                ],
                [
                    {
                        name: 'Stun Res +50%',
                        effect: 'Reduces susceptibility to stun by 50%.'
                    },
                    {
                        name: 'Stun Res +100%',
                        effect: 'Reduces susceptibility to stun by 100%.'
                    }
                ],
                [
                    {
                        name: '35 Hits = Energy Level Up',
                        effect: "Increases the user's energy level by one stage for every 35-hit combo."
                    },
                    {
                        name: '30 Hits = Energy Level Up',
                        effect: "Increases the user's energy level by one stage for every 30-hit combo."
                    }
                ]
            ],
            skills: [
                {
                    name: 'Starlit Gift',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: `Deals water damage to enemies directly ahead, inflicts freeze, and increases the energy levels of the user and nearby allies by one stage. This skill activates "Skill Shift" if the attack connects. Phase II increases the strength of the user and nearby allies, while Phase III increases their critical rate. Skill Shift ends when you connect again during Phase III. When an adventurer's energy level reaches level five, they will become energized, and their next attack or recovery skill will be upgraded. At this point, using any applicable skill will reset that adventurer's energy level to zero.`
                        },
                        {
                            level: 'Lvl 2',
                            description: `Deals water damage to enemies directly ahead, inflicts freeze, and increases the energy levels of the user and nearby allies by one stage. This skill activates "Skill Shift" if the attack connects. Phase II increases the strength of the user and nearby allies, while Phase III increases their critical rate. Skill Shift ends when you connect again during Phase III. When an adventurer's energy level reaches level five, they will become energized, and their next attack or recovery skill will be upgraded. At this point, using any applicable skill will reset that adventurer's energy level to zero.`
                        },
                        {
                            level: 'Lvl 3',
                            description: `Deals water damage to enemies directly ahead, inflicts freeze, and increases the energy levels of the user and nearby allies by one stage. This skill activates "Skill Shift" if the attack connects. Phase II increases the strength of the user and nearby allies, while Phase III increases their critical rate. Skill Shift ends when you connect again during Phase III. When an adventurer's energy level reaches level five, they will become energized, and their next attack or recovery skill will be upgraded. At this point, using any applicable skill will reset that adventurer's energy level to zero.`
                        }
                    ],
                    cost: '3136',
                    regen: 'None',
                    iframe: 'Long'
                },
                {
                    name: 'Empyrean Grace',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals water damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals water damage to enemies directly ahead.'
                        }
                    ],
                    cost: '4882',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Chelsea',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-11/110342_01_r05.png?itok=YxqX5wav',
            description: ' - ',
            cv: ['Becky Hachey', 'Misato Fukuen'],
            title: 'Obvious Admirer',
            rarity: '5',
            element: 'Flame',
            weapon: 'Bow',
            role: 'Attack',
            atk: '495',
            hp: '763',
            coability: {
                name: 'Skill Haste +8%',
                baseEffect: 'Increases skill gauge fill rate by 8%. Benefits your whole team.',
                upgrades: [
                    'Increases skill gauge fill rate by 9%. Benefits your whole team.',
                    'Increases skill gauge fill rate by 11%. Benefits your whole team.',
                    'Increases skill gauge fill rate by 12%. Benefits your whole team.',
                    'Increases skill gauge fill rate by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'HP Below 30% = Strength & Attack Rate II',
                        effect: 'Increases strength by 15% and attack rate by 10% when HP is 30% or below.'
                    },
                    {
                        name: 'HP Below 30% = Strength & Attack Rate III',
                        effect: 'Increases strength by 20% and attack rate by 10% when HP is 30% or below.'
                    }
                ],
                [
                    {
                        name: 'Stun Res +50%',
                        effect: 'Reduces susceptibility to stun by 50%.'
                    },
                    {
                        name: 'Stun Res +100%',
                        effect: 'Reduces susceptibility to stun by 100%.'
                    }
                ],
                [
                    {
                        name: 'Obsessive Love I',
                        effect: 'When the "Obsession" effect is active, increases strength by 20%, and decreases defense by 20%.'
                    },
                    {
                        name: 'Obsessive Love II',
                        effect: 'When the "Obsession" effect is active, increases strength by 30%, and decreases defense by 20%.'
                    }
                ]
            ],
            skills: [
                {
                    name: "Love's Liberation",
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals flame damage to the target.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals flame damage to the target.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals flame damage to the target.'
                        }
                    ],
                    cost: '2910',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Bruiser Bliss',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: `Activates "Obsession" for 60 seconds. During Obsession, the user's strength is increased by 25%, and they will take damage equal to 3% of their maximum HP every time they attack or use a skill. Furthermore, their HP will be restored by 5% of the damage inflicted by Love's Liberation, up to a maximum of 49% of the user's maximum HP. The effects of Obsession will be removed upon shapeshifting.`
                        },
                        {
                            level: 'Lvl 2',
                            description: `Activates "Obsession" for 60 seconds. During Obsession, the user's strength is increased by 30%, and they will take damage equal to 3% of their maximum HP every time they attack or use a skill. Furthermore, their HP will be restored by 5% of the damage inflicted by Love's Liberation, up to a maximum of 49% of the user's maximum HP. The effects of Obsession will be removed upon shapeshifting.`
                        }
                    ],
                    cost: '7000',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Lily',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Lily-5-star_0.png?itok=pguvD9NH',
            description: ' - ',
            cv: ['Lizzie Freeman', 'Yuka Iguchi'],
            title: 'Crystalian Princess',
            rarity: '5',
            element: 'Water',
            weapon: 'Wand',
            role: 'Attack',
            atk: '511',
            hp: '750',
            coability: {
                name: 'Skill Damage +8%',
                baseEffect: 'Increases attack skill damage by 8%. Benefits your whole team.',
                upgrades: [
                    'Increases attack skill damage by 9%. Benefits your whole team.',
                    'Increases attack skill damage by 11%. Benefits your whole team.',
                    'Increases attack skill damage by 12%. Benefits your whole team.',
                    'Increases attack skill damage by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Full HP = Strength +13%',
                        effect: 'Increases strength by 13% when HP is full.'
                    },
                    {
                        name: 'Full HP = Strength +15%',
                        effect: 'Increases strength by 15% when HP is full.'
                    }
                ],
                [
                    {
                        name: 'Burn Res +50%',
                        effect: 'Reduces susceptibility to burning by 50%.'
                    },
                    {
                        name: 'Burn Res +100%',
                        effect: 'Reduces susceptibility to burning by 100%.'
                    }
                ],
                [
                    {
                        name: 'Skill Prep +75%',
                        effect: 'Fills 75% of skill gauges at the start of quests.'
                    },
                    {
                        name: 'Skill Prep +100%',
                        effect: 'Fills 100% of skill gauges at the start of quests.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Glacial Blossom',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals water damage to the target and nearby enemies, and inflicts freeze.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals water damage to the target and nearby enemies, and inflicts freeze.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals water damage to the target and nearby enemies, and inflicts freeze.'
                        }
                    ],
                    cost: '2490',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Frozen Gale',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals water damage to surrounding enemies.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals water damage to surrounding enemies.'
                        }
                    ],
                    cost: '5909',
                    regen: 'None',
                    iframe: 'Long'
                }
            ]
        }
        ,
        {
            name: 'Rena',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-07/110264_01_r05.png?itok=hRUzbp7z',
            description: ' - ',
            cv: ['Joy Frender', 'Mai Nakahara'],
            title: 'Mana Infuser',
            rarity: '5',
            element: 'Flame',
            weapon: 'Blade',
            role: 'Defense',
            atk: '471',
            hp: '818',
            coability: {
                name: 'Strength +5%',
                baseEffect: 'Increases strength by 5%. Benefits your whole team.',
                upgrades: [
                    'Increases strength by 6%. Benefits your whole team.',
                    'Increases strength by 7%. Benefits your whole team.',
                    'Increases strength by 8%. Benefits your whole team.',
                    'Increases strength by 10%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Primed Defense +10%',
                        effect: 'Increases the defense of the adventurer you are currently controlling by 10% for 10 seconds every time their initial skill, displayed at the top of their skill list, becomes available for use. After activating, this ability will not activate again for 15 seconds.'
                    },
                    {
                        name: 'Primed Defense +15%',
                        effect: 'Increases the defense of the adventurer you are currently controlling by 15% for 10 seconds every time their initial skill, displayed at the top of their skill list, becomes available for use. After activating, this ability will not activate again for 15 seconds.'
                    }
                ],
                [
                    {
                        name: 'Sleep Res +50%',
                        effect: 'Reduces susceptibility to sleep by 50%.'
                    },
                    {
                        name: 'Sleep Res +100%',
                        effect: 'Reduces susceptibility to sleep by 100%.'
                    }
                ],
                [
                    {
                        name: 'Healing Doublebuff III',
                        effect: 'Grants an HP regen buff for 20 seconds each time a defense up buff is received.'
                    },
                    {
                        name: 'Healing Doublebuff IV',
                        effect: 'Grants an HP regen buff for 20 seconds each time a defense up buff is received.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Roaring Furnace',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: `Deals flame damage to enemies in a line, and inflicts burn. Activates "Skill Shift" if the attack connects. Phase II adds an additional 5% increase to the user's critical rate for 15 seconds, while Phase III increases damage to burning enemies.`
                        },
                        {
                            level: 'Lvl 2',
                            description: `Deals flame damage to enemies in a line, and inflicts burn. Activates "Skill Shift" if the attack connects. Phase II adds an additional 8% increase to the user's critical rate for 15 seconds, while Phase III increases damage to burning enemies.`
                        },
                        {
                            level: 'Lvl 3',
                            description: `Deals flame damage to enemies in a line, and inflicts burn. Activates "Skill Shift" if the attack connects. Phase II adds an additional 10% increase to the user's critical rate for 15 seconds, while Phase III increases damage to burning enemies.`
                        }
                    ],
                    cost: '3303',
                    regen: 'None',
                    iframe: 'Long'
                },
                {
                    name: 'Brazier Boost',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Immediately readies the Roaring Furnace skill for use, and adds 30% to the modifier applied to critical damage for 20 seconds.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Immediately readies the Roaring Furnace skill for use, and adds 50% to the modifier applied to critical damage for 20 seconds.'
                        }
                    ],
                    cost: '6582',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Gala Elisanne',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-11/100002_13_r05.png?itok=1kIof94F',
            description: ' - ',
            cv: ['Alison Wandzura', 'Saori Hayami'],
            title: 'Godly Guide',
            rarity: '5',
            element: 'Water',
            weapon: 'Axe',
            role: 'Attack',
            atk: '516',
            hp: '745',
            coability: {
                name: 'Defense +9%',
                baseEffect: 'Increases defense by 9%. Benefits your whole team.',
                upgrades: [
                    'Increases defense by 10%. Benefits your whole team.',
                    'Increases defense by 11%. Benefits your whole team.',
                    'Increases defense by 12%. Benefits your whole team.',
                    'Increases defense by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Divine Oath I',
                        effect: 'Elisanne will gain the "Divine Revelation" effect for 12 seconds if any of the following occurs: her force strike connects, she uses a skill, or she executes a 10-hit combo. This effect cannot stack, and when it is active, Elisanne will be immune to knockback.'
                    },
                    {
                        name: 'Divine Oath II',
                        effect: 'Elisanne will gain the "Divine Revelation" effect for 13 seconds if any of the following occur: her force strike connects, she uses a skill, or she executes a 10-hit combo. This effect cannot stack, and when it is active, Elisanne will be immune to knockback.'
                    }
                ],
                [
                    {
                        name: "Heaven's Shield I",
                        effect: 'Reduces susceptibility to burning and stun by 50%.'
                    },
                    {
                        name: "Heaven's Shield II",
                        effect: 'Reduces susceptibility to burning and stun by 100%.'
                    }
                ],
                [
                    {
                        name: 'Primed Strength +8%',
                        effect: 'Increases the strength of the adventurer you are currently controlling by 8% for 10 seconds every time their initial skill, displayed at the top of their skill list, becomes available for use. After activating, this ability will not activate again for 15 seconds.'
                    },
                    {
                        name: 'Primed Strength +10%',
                        effect: 'Increases the strength of the adventurer you are currently controlling by 10% for 10 seconds every time their initial skill, displayed at the top of their skill list, becomes available for use. After activating, this ability will not activate again for 15 seconds.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Holy Accord',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Increases the strength of water-attuned adventurers in the team by 20% for 15 seconds.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Increases the strength of water-attuned adventurers in the team by 25% for 15 seconds.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Increases the strength of water-attuned adventurers in the team by 30% for 15 seconds.'
                        }
                    ],
                    cost: '4377',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Celestial Ascent',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Deals water damage to enemies directly ahead, increases the user's energy level by two stages, increases the entire team's flame resistance by 20% for 30 seconds, and grants all teammates a one-use shield that nullifies damage less than 15% of the user's maximum HP. Neither this shield nor the increase in flame resistance stacks. The skill gauge for this skill can be filled by attacking enemies, but it will also gradually fill automatically during Divine Revelation. Abilities that increase skill gauge fill rate will not affect this automatic increase. When the user is not under the effects of Divine Revelation, attacking enemies will still fill the gauge, but it will decrease automatically over time unless the gauge is already completely filled. When an adventurer's energy level reaches level five, they will become energized, and their next attack or recovery skill will be upgraded. At this point, using any applicable skill will reset that adventurer's energy level to zero."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Deals water damage to enemies directly ahead, increases the user's energy level by three stages, increases the entire team's flame resistance by 25% for 30 seconds, and grants all teammates a one-use shield that nullifies damage less than 20% of the user's maximum HP. Neither this shield nor the increase in flame resistance stacks. The skill gauge for this skill can be filled by attacking enemies, but it will also gradually fill automatically during Divine Revelation. Abilities that increase skill gauge fill rate will not affect this automatic increase. When the user is not under the effects of Divine Revelation, attacking enemies will still fill the gauge, but it will decrease automatically over time unless the gauge is already completely filled. When an adventurer's energy level reaches level five, they will become energized, and their next attack or recovery skill will be upgraded. At this point, using any applicable skill will reset that adventurer's energy level to zero."
                        }
                    ],
                    cost: '38400',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Jiang Ziya',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-11/110351_01_r05.png?itok=C3Y1F-j_',
            description: ' - ',
            cv: ['Leah Fong', 'Satomi Korogi'],
            title: 'Quirky Qilin',
            rarity: '5',
            element: 'Water',
            weapon: 'Staff',
            role: 'Healing',
            atk: '467',
            hp: '809',
            coability: {
                name: 'Recovery Potency +10%',
                baseEffect: 'Increases the potency of recovery skills by 10%. Benefits your whole team.',
                upgrades: [
                    'Increases the potency of recovery skills by 12%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 14%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 16%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 20%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Skill Prep +75%',
                        effect: 'Fills 75% of skill gauges at the start of quests.'
                    },
                    {
                        name: 'Skill Prep +100%',
                        effect: 'Fills 100% of skill gauges at the start of quests.'
                    }
                ],
                [
                    {
                        name: 'Burn Res +50%',
                        effect: 'Reduces susceptibility to burning by 50%.'
                    },
                    {
                        name: 'Burn Res +100%',
                        effect: 'Reduces susceptibility to burning by 100%.'
                    }
                ],
                [
                    {
                        name: 'HP 70% = Healing +13%',
                        effect: 'Increases the potency of recovery skills by 13% when HP is 70% or above.'
                    },
                    {
                        name: 'HP 70% = Healing +15%',
                        effect: 'Increases the potency of recovery skills by 15% when HP is 70% or above.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Curative Catch',
                    levels: [
                        {level: 'Lvl 1', description: 'Restores HP to all allies.'},
                        {
                            level: 'Lvl 2',
                            description: 'Restores HP to all allies, and removes burning.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Restores HP to all allies, and removes burning.'
                        }
                    ],
                    cost: '5916',
                    regen: 'None',
                    iframe: 'Long'
                },
                {
                    name: 'Provident Protection',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Increases the entire team's defense by 15% for 15 seconds, and gradually recovers their HP for 15 seconds."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Increases the entire team's defense by 20% for 15 seconds, and gradually recovers their HP for 15 seconds."
                        }
                    ],
                    cost: '11832',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Akasha',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-11/110341_01_r05.png?itok=B1EseczY',
            description: ' - ',
            cv: ['France Perras', 'Shizuka Itoh'],
            title: 'Pursuer of Knowledge',
            rarity: '5',
            element: 'Wind',
            weapon: 'Staff',
            role: 'Healing',
            atk: '468',
            hp: '807',
            coability: {
                name: 'Recovery Potency +10%',
                baseEffect: 'Increases the potency of recovery skills by 10%. Benefits your whole team.',
                upgrades: [
                    'Increases the potency of recovery skills by 12%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 14%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 16%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 20%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Skill Prep +75%',
                        effect: 'Fills 75% of skill gauges at the start of quests.'
                    },
                    {
                        name: 'Skill Prep +100%',
                        effect: 'Fills 100% of skill gauges at the start of quests.'
                    }
                ],
                [
                    {
                        name: 'Bog Res +50%',
                        effect: 'Reduces susceptibility to bog by 50%.'
                    },
                    {
                        name: 'Bog Res +100%',
                        effect: 'Reduces susceptibility to bog by 100%.'
                    }
                ],
                [
                    {
                        name: 'HP 70% = Healing +13%',
                        effect: 'Increases the potency of recovery skills by 13% when HP is 70% or above.'
                    },
                    {
                        name: 'HP 70% = Healing +15%',
                        effect: 'Increases the potency of recovery skills by 15% when HP is 70% or above.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Akashic Repose',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Restores HP to all allies and continues healing over the next 15 seconds.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Restores HP to all allies and continues healing over the next 15 seconds.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Restores HP to all allies and continues healing over the next 15 seconds.'
                        }
                    ],
                    cost: '5916',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Vital Gate',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Creates a buff zone that lasts for 10 seconds and gradually fills the skill gauges of adventurers inside it.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Creates a buff zone that lasts for 10 seconds and gradually fills the skill gauges of adventurers inside it.'
                        }
                    ],
                    cost: '20000',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Sylas',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-04/Sylas-5-star.png?itok=9fHUvdBG',
            description: "A sylvan aromatics expert, tirelessly working to create new scents and applications. He's known Luca since childhood, and both despairs at his immaturities and envies his grit.",
            cv: ['Connor Baymax', 'Natsuki Hanae'],
            title: 'Adept Aromatherapist',
            rarity: '5',
            element: 'Wind',
            weapon: 'Lance',
            role: 'Support',
            atk: '485',
            hp: '790',
            coability: {
                name: 'HP +9%',
                baseEffect: 'Increases HP by 9%. Benefits your whole team.',
                upgrades: [
                    'Increases HP by 10%. Benefits your whole team.',
                    'Increases HP by 12%. Benefits your whole team.',
                    'Increases HP by 13%. Benefits your whole team.',
                    'Increases HP by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Last Recovery III',
                        effect: 'Grants an HP regen buff for 20 seconds when HP drops to 30% (once per quest).'
                    },
                    {
                        name: 'Last Recovery IV',
                        effect: 'Grants an HP regen buff for 20 seconds when HP drops to 30% (once per quest).'
                    }
                ],
                [
                    {
                        name: 'Freeze Res +50%',
                        effect: 'Reduces susceptibility to freezing by 50%.'
                    },
                    {
                        name: 'Freeze Res +100%',
                        effect: 'Reduces susceptibility to freezing by 100%.'
                    }
                ],
                [
                    {
                        name: 'HP 70% = Strength +10%',
                        effect: 'Increases strength by 10% when HP is 70% or above.'
                    },
                    {
                        name: 'HP 70% = Strength +13%',
                        effect: 'Increases strength by 13% when HP is 70% or above.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Woodland Spear',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals wind damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals wind damage to enemies directly ahead, reduces their strength by 10%, and inflicts poison.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals wind damage to enemies directly ahead, reduces their strength by 10%, and inflicts poison.'
                        }
                    ],
                    cost: '3120',
                    regen: 'None',
                    iframe: 'Long'
                },
                {
                    name: 'Inspiriting Scent',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Increases the entire team's skill gauge fill rate by 15% for 15 seconds, and applies one of the following at random: Increases strength by 15% for 15 seconds Increases defense by 15% for 15 seconds Increases max HP by 10% for the remainder of the quest."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Increases the entire team's skill gauge fill rate by 20% for 15 seconds, and applies one of the following at random: Increases strength by 20% for 15 seconds Increases defense by 20% for 15 seconds Increases max HP by 15% for the remainder of the quest."
                        }
                    ],
                    cost: '12000',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Yaten',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-06/110325_01_r05.png?itok=spvL6V8Z',
            description: 'A master at festival planning who left his homeland to hone his craft. Despite his love of napping and unkempt appearance, his passion for festivals has brought joy to many a sad and lonely town.',
            cv: ['Will Williams', 'Hiroyuki Yoshino'],
            title: 'Wandering Festival Planner',
            rarity: '5',
            element: 'Shadow',
            weapon: 'Sword',
            role: 'Attack',
            atk: '506',
            hp: '752',
            coability: {
                name: 'Dragon Haste +8%',
                baseEffect: 'Increases dragon gauge fill rate by 8%. Benefits your whole team.',
                upgrades: [
                    'Increases dragon gauge fill rate by 9%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 11%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 12%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Energy = Strength & Critical Rate II',
                        effect: "Increases the user's strength and critical rate as their energy level increases. The maximum bonus, given when the user is energized, is strength +15% and critical rate +6%."
                    },
                    {
                        name: 'Energy = Strength & Critical Rate III',
                        effect: "Increases the user's strength and critical rate as theirenergy level increases. The maximum bonus, given\n" +
                            'when the user is energized, is strength +20% and\n' +
                            'critical rate +8%.\n'
                    }
                ],
                [
                    {
                        name: 'Paralysis Res +50%',
                        effect: 'Reduces susceptibility to paralysis by 50%.'
                    },
                    {
                        name: 'Paralysis Res +100%',
                        effect: 'Reduces susceptibility to paralysis by 100%.'
                    }
                ],
                [
                    {
                        name: 'Energized: Strength +15%',
                        effect: 'Increases strength by 15% for 15 seconds each time the user is energized.'
                    },
                    {
                        name: 'Energized: Strength +20%',
                        effect: 'Increases strength by 20% for 15 seconds each time the user is energized.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Festival Rush',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Deals shadow damage to enemies directly ahead, and increases the user's energy level by one stage. When an adventurer's energy level reaches level five, they will become energized, and their next attack or recovery skill will be upgraded. At this point, using any applicable skill will reset that adventurer's energy level to zero. If this skill is used when the user is energized, a variant called Festival Dance will be used instead, dealing additional damage."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Deals shadow damage to enemies directly ahead, and increases the user's energy level by one stage. When an adventurer's energy level reaches level five, they will become energized, and their next attack or recovery skill will be upgraded. At this point, using any applicable skill will reset that adventurer's energy level to zero. If this skill is used when the user is energized, a variant called Festival Dance will be used instead, dealing additional damage."
                        },
                        {
                            level: 'Lvl 3',
                            description: "Deals shadow damage to enemies directly ahead, and increases the user's energy level by one stage. When an adventurer's energy level reaches level five, they will become energized, and their next attack or recovery skill will be upgraded. At this point, using any applicable skill will reset that adventurer's energy level to zero. If this skill is used when the user is energized, a variant called Festival Dance will be used instead, dealing additional damage."
                        }
                    ],
                    cost: '2818',
                    regen: 'None',
                    iframe: 'Long'
                },
                {
                    name: 'Bold Blade',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Increases the entire team's energy levels by one stage. When an adventurer's energy level reaches level five, they will become energized, and their next attack or recovery skill will be upgraded. At this point, using any applicable skill will reset that adventurer's energy level to zero."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Increases the entire team's energy levels by two stages. When an adventurer's energy level reaches level five, they will become energized, and their next attack or recovery skill will be upgraded. At this point, using any applicable skill will reset that adventurer's energy level to zero."
                        }
                    ],
                    cost: '3636',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Marth',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-04/Marth-5-star.png?itok=matf2UAL',
            description: "The popular and kind prince of Altea, who cares deeply for his friends. He has the blood of the hero Anri in his veins, and wields the divine sword Falchion. Despite having saved his entire country, he's personable and down-to-earth.",
            cv: ['Yuri Lowenthal', 'Hikaru Midorikawa'],
            title: 'Altean Prince',
            rarity: '5',
            element: 'Flame',
            weapon: 'Sword',
            role: 'Attack',
            atk: '505',
            hp: '754',
            coability: {
                name: 'Dragon Haste +8%',
                baseEffect: 'Increases dragon gauge fill rate by 8%. Benefits your whole team.',
                upgrades: [
                    'Increases dragon gauge fill rate by 9%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 11%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 12%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Last Boost I',
                        effect: "Fills 50% of the entire team's skill gauges when the user's HP drops to 30% (once per quest). This does not fill the skill gauges of dragons."
                    },
                    {
                        name: 'Last Boost II',
                        effect: "Fills 100% of the entire team's skill gauges when the user's HP drops to 30% (once per quest). This does not fill the skill gauges of dragons."
                    }
                ],
                [
                    {
                        name: 'Stun Res +50%',
                        effect: 'Reduces susceptibility to stun by 50%.'
                    },
                    {
                        name: 'Stun Res +100%',
                        effect: 'Reduces susceptibility to stun by 100%.'
                    }
                ],
                [
                    {
                        name: 'Flurry Devastation +10%',
                        effect: 'Increases critical rate by 10% when the combo count is 15 or higher.'
                    },
                    {
                        name: 'Flurry Devastation +13%',
                        effect: 'Increases critical rate by 13% when the combo count is 15 or higher.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Flickering Flames',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Deals flame damage to enemies directly ahead, and gradually recovers the user's HP for 15 seconds."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Deals flame damage to enemies directly ahead, and gradually recovers the user's HP for 15 seconds."
                        },
                        {
                            level: 'Lvl 3',
                            description: "Deals flame damage to enemies directly ahead, and gradually recovers the user's HP for 15 seconds."
                        }
                    ],
                    cost: '2875',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Fire Emblem',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: `Deals flame damage to enemies in a line, and activates "Skill Shift" if the attack connects. Phase I increases the user's strength by 10% for 10 seconds. Phase II increases the entire team's strength by 10% for 10 seconds. Phase III increases the entire team's strength by 10% and their attack rate by 20% for 10 seconds.`
                        },
                        {
                            level: 'Lvl 2',
                            description: `Deals flame damage to enemies in a line, and activates "Skill Shift" if the attack connects. Phase I increases the user's strength by 10% for 10 seconds. Phase II increases the entire team's strength by 10% for 10 seconds. Phase III increases the entire team's strength by 10% and their attack rate by 30% for 10 seconds.`
                        }
                    ],
                    cost: '5700',
                    regen: 'None',
                    iframe: 'Short'
                }
            ]
        }
        ,
        {
            name: 'Ramona',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-07/110263_01_r05.png?itok=cuBKN8L-',
            description: "The middle child of the blacksmith sisters, blessed with the ability to manipulate the temperature of flames. Gruff yet responsible, she leads her sisters in honoring their father's legacy with unyielding passion.",
            cv: ['Harley Mae', 'Aki Toyosaki'],
            title: 'Impassioned Blacksmith',
            rarity: '5',
            element: 'Flame',
            weapon: 'Axe',
            role: 'Attack',
            atk: '518',
            hp: '742',
            coability: {
                name: 'Defense +9%',
                baseEffect: 'Increases defense by 9%. Benefits your whole team.',
                upgrades: [
                    'Increases defense by 10%. Benefits your whole team.',
                    'Increases defense by 11%. Benefits your whole team.',
                    'Increases defense by 12%. Benefits your whole team.',
                    'Increases defense by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Primed Strength +8%',
                        effect: 'Increases the strength of the adventurer you are currently controlling by 8% for 10 seconds every time their initial skill, displayed at the top of their skill list, becomes available for use. After activating, this ability will not activate again for 15 seconds.'
                    },
                    {
                        name: 'Primed Strength +10%',
                        effect: 'Increases the strength of the adventurer you are currently controlling by 10% for 10 seconds every time their initial skill, displayed at the top of their skill list, becomes available for use. After activating, this ability will not activate again for 15 seconds.'
                    }
                ],
                [
                    {
                        name: 'Sleep Res +50%',
                        effect: 'Reduces susceptibility to sleep by 50%.'
                    },
                    {
                        name: 'Sleep Res +100%',
                        effect: 'Reduces susceptibility to sleep by 100%.'
                    }
                ],
                [
                    {
                        name: 'Strength Doublebuff +10%',
                        effect: 'Increases strength by 10% for 15 seconds each time a defense up buff is received.'
                    },
                    {
                        name: 'Strength Doublebuff +13%',
                        effect: 'Increases strength by 13% for 15 seconds each time a defense up buff is received.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Forge Buster',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals flame damage to surrounding enemies. Continually tapping the screen during the attack will unleash additional blows, with up to a maximum of six. Changing direction is possible during these additional blows.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals flame damage to surrounding enemies. Continually tapping the screen during the attack will unleash additional blows, with up to a maximum of six. Changing direction is possible during these additional blows.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals flame damage to surrounding enemies. Continually tapping the screen during the attack will unleash additional blows, with up to a maximum of six. Changing direction is possible during these additional blows.'
                        }
                    ],
                    cost: '3033',
                    regen: 'None',
                    iframe: 'Long'
                },
                {
                    name: 'Smith Shield',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Increases the entire team's defense by 20% for 15 seconds."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Increases the entire team's defense by 25% for 15 seconds."
                        }
                    ],
                    cost: '9154',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Dragonyule Xander',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-12/Dragonyule%20Xander-4-star.png?itok=YmBTlmx9',
            description: 'A former king dressed as Saint Starfall. While his love for his vassals and people is genuine, his arrogance is equally so—despite the festive season. Alas, this causes all those around him nothing but endless headaches.',
            cv: ['Arneham Keefe', 'Yuichi Nakamura'],
            title: 'King Starfall',
            rarity: '4',
            element: 'Water',
            weapon: 'Wand',
            role: 'Attack',
            atk: '505',
            hp: '742',
            coability: {
                name: 'Skill Damage +5%',
                baseEffect: 'Increases attack skill damage by 5%. Benefits your whole team.',
                upgrades: [
                    'Increases attack skill damage by 6%. Benefits your whole team.',
                    'Increases attack skill damage by 8%. Benefits your whole team.',
                    'Increases attack skill damage by 11%. Benefits your whole team.',
                    'Increases attack skill damage by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: "Striker's Energy I",
                        effect: 'Increases energy level by one stage for every three enemies defeated with force strikes.'
                    },
                    {
                        name: "Striker's Energy II",
                        effect: 'Increases energy level by two stages for every three enemies defeated with force strikes.'
                    }
                ],
                [
                    {
                        name: 'Stun Res +50%',
                        effect: 'Reduces susceptibility to stun by 50%.'
                    },
                    {
                        name: 'Stun Res +100%',
                        effect: 'Reduces susceptibility to stun by 100%.'
                    }
                ],
                [
                    {
                        name: 'Skill Haste +5%',
                        effect: 'Increases skill gauge fill rate by 5%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Starfrost Swell',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals water damage to the target and nearby enemies, and inflicts freeze.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals water damage to the target and nearby enemies, and inflicts freeze.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals water damage to the target and nearby enemies, and inflicts freeze.'
                        }
                    ],
                    cost: '2563',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: "Monarch's Boon",
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Increases the user and nearby allies' strength by 10% for 10 seconds, and increases their energy levels by one stage. When an adventurer's energy level reaches level five, they will become energized, and their next attack or recovery skill will be upgraded. At this point, using any applicable skill will reset that adventurer’s energy level to zero."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Increases the user and nearby allies' strength by 15% for 10 seconds, and increases their energy levels by one stage. When an adventurer's energy level reaches level five, they will become energized, and their next attack or recovery skill will be upgraded. At this point, using any applicable skill will reset that adventurer’s energy level to zero."
                        }
                    ],
                    cost: '9609',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Audric',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-09/110334_01_r04.png?itok=s4U9YKzo',
            description: "A mysterious man who stands in the prince's way at every turn and claims to know a great truth. He seems to know the prince quite well, and his eyes glitter with a warm, intense light when he looks upon the boy.",
            cv: ['Adam Trask', 'Yoshimasa Hosoya'],
            title: 'Atoning King',
            rarity: '4',
            element: 'Shadow',
            weapon: 'Sword',
            role: 'Attack',
            atk: '481',
            hp: '714',
            coability: {
                name: 'Dragon Haste +5%',
                baseEffect: 'Increases dragon gauge fill rate by 5%. Benefits your whole team.',
                upgrades: [
                    'Increases dragon gauge fill rate by 6%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 8%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 11%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Shapeshift Prep +8%',
                        effect: 'Fills 8% of the dragon gauge at the start of quests.'
                    },
                    {
                        name: 'Shapeshift Prep +10%',
                        effect: 'Fills 10% of the dragon gauge at the start of quests.'
                    }
                ],
                [
                    {
                        name: 'Paralysis Res +25%',
                        effect: 'Reduces susceptibility to paralysis by 25%.'
                    },
                    {
                        name: 'Paralysis Res +50%',
                        effect: 'Reduces susceptibility to paralysis by 50%.'
                    }
                ],
                [
                    {
                        name: 'Cursed Blood',
                        effect: 'When in dragon form, increases critical rate by 30% but reduces defense by 30%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Exaltation Terminus',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals shadow damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals shadow damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals shadow damage to enemies directly ahead, and raises the dragon gauge if the attack connects.'
                        }
                    ],
                    cost: '2503',
                    regen: 'None',
                    iframe: 'Short'
                },
                {
                    name: 'Circlet Denouement',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals shadow damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals shadow damage to enemies directly ahead.'
                        }
                    ],
                    cost: '4593',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Elisanne',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Elisanne-4-star_0.png?itok=PZGLQ-j5',
            description: "A knight of the Ilian Church, and a prodigy whose skill gained her the rank of Paladyn. However, she's currently been branded a heretic and is being actively pursued. Though tough, she secretly has some softer interests.",
            cv: ['Ava Lindstrom', 'Saori Hayami'],
            title: 'Anointed Lance',
            rarity: '4',
            element: 'Water',
            weapon: 'Lance',
            role: 'Support',
            atk: '460',
            hp: '752',
            coability: {
                name: 'HP +7%',
                baseEffect: 'Increases HP by 7%. Benefits your whole team.',
                upgrades: [
                    'Increases HP by 8%. Benefits your whole team.',
                    'Increases HP by 9%. Benefits your whole team.',
                    'Increases HP by 12%. Benefits your whole team.',
                    'Increases HP by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Buff Time +20%',
                        effect: 'Increases duration of buff skills by 20%.'
                    },
                    {
                        name: 'Buff Time +25%',
                        effect: 'Increases duration of buff skills by 25%.'
                    }
                ],
                [
                    {
                        name: 'Burn Res +25%',
                        effect: 'Reduces susceptibility to burning by 25%.'
                    },
                    {
                        name: 'Burn Res +50%',
                        effect: 'Reduces susceptibility to burning by 50%.'
                    }
                ],
                [
                    {
                        name: 'Stun Res +25%',
                        effect: 'Reduces susceptibility to stun by 25%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Brave Bastion',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Increases the entire team's strength by 10% for 15 seconds."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Increases the entire team's strength by 15% for 15 seconds."
                        },
                        {
                            level: 'Lvl 3',
                            description: "Increases the entire team's strength by 20% for 15 seconds."
                        }
                    ],
                    cost: '3817',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Hallowed Waters',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals water damage to the target and nearby enemies.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals water damage to the target and nearby enemies.'
                        }
                    ],
                    cost: '5158',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Karl',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Karl-4-star.png?itok=BcSUlCVB',
            description: 'A passionate youth with sights set firmly on justice, he disposes of evil with extreme prejudice. While he strives to serve a higher good, he also dreams of the day when the name "Karlsplosion" echoes across the land.',
            cv: ['Brian Davidson', 'KENN'],
            title: 'Hero of Justice',
            rarity: '4',
            element: 'Flame',
            weapon: 'Sword',
            role: 'Support',
            atk: '466',
            hp: '769',
            coability: {
                name: 'Dragon Haste +5%',
                baseEffect: 'Increases dragon gauge fill rate by 5%. Benefits your whole team.',
                upgrades: [
                    'Increases dragon gauge fill rate by 6%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 8%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 11%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: "Slayer's Strength +4%",
                        effect: 'Increases strength by 4% for every five enemies defeated (up to five times per quest).'
                    },
                    {
                        name: "Slayer's Strength +5%",
                        effect: 'Increases strength by 5% for every five enemies defeated (up to five times per quest).'
                    }
                ],
                [
                    {
                        name: 'Sleep Res +50%',
                        effect: 'Reduces susceptibility to sleep by 50%.'
                    },
                    {
                        name: 'Sleep Res +100%',
                        effect: 'Reduces susceptibility to sleep by 100%.'
                    }
                ],
                [
                    {
                        name: 'HP 70% = Strength +8%',
                        effect: 'Increases strength by 8% when HP is 70% or above.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Vanquishing Flame',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals flame damage to surrounding enemies.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals flame damage to surrounding enemies.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals flame damage to surrounding enemies.'
                        }
                    ],
                    cost: '2376',
                    regen: 'None',
                    iframe: 'Short'
                },
                {
                    name: 'Soul Ignition',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Increases the entire team's strength by 10% for 15 seconds."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Increases the entire team's strength by 15% for 15 seconds."
                        }
                    ],
                    cost: '6610',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Beautician Zardin',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-05/Beautician%20Zardin-5-star_0.png?itok=39ODprbC',
            description: 'Zardin has taken up a new job as a beautician, with the aim of bringing out the beauty in others. Far from altruistic, however, he hopes his efforts will serve to amplify his own beauty as well.',
            cv: ['Sam Vincent', 'Wataru Hatano'],
            title: 'Brilliant Beautician',
            rarity: '5',
            element: 'Light',
            weapon: 'Blade',
            role: 'Attack',
            atk: '517',
            hp: '745',
            coability: {
                name: 'Strength +5%',
                baseEffect: 'Increases strength by 5%. Benefits your whole team.',
                upgrades: [
                    'Increases strength by 6%. Benefits your whole team.',
                    'Increases strength by 7%. Benefits your whole team.',
                    'Increases strength by 8%. Benefits your whole team.',
                    'Increases strength by 10%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: "Striker's Energy II",
                        effect: 'Increases energy level by two stages for every three enemies defeated with force strikes.'
                    },
                    {
                        name: "Striker's Energy III",
                        effect: 'Increases energy level by three stages for every three enemies defeated with force strikes.'
                    }
                ],
                [
                    {
                        name: 'Poison Res +50%',
                        effect: 'Reduces susceptibility to poison by 50%.'
                    },
                    {
                        name: 'Poison Res +100%',
                        effect: 'Reduces susceptibility to poison by 100%.'
                    }
                ],
                [
                    {
                        name: 'HP 70% = Skill Damage +30%',
                        effect: 'Increases attack skill damage by 30% when HP is 70% or above.'
                    },
                    {
                        name: 'HP 70% = Skill Damage +35%',
                        effect: 'Increases attack skill damage by 35% when HP is 70% or above.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Ravishing Rainbow',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Deals light damage to enemies directly ahead, reduces their strength and defense by 5%, and increases the user's energy level by one stage. When an adventurer's energy level reaches level five, they will become energized, and their next attack or recovery skill will be upgraded. At this point, using any applicable skill will reset that adventurer's energy level to zero."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Deals light damage to enemies directly ahead, reduces their strength and defense by 5%, and increases the user's energy level by one stage. When an adventurer's energy level reaches level five, they will become energized, and their next attack or recovery skill will be upgraded. At this point, using any applicable skill will reset that adventurer's energy level to zero."
                        },
                        {
                            level: 'Lvl 3',
                            description: "Deals light damage to enemies directly ahead, reduces their strength and defense by 5%, and increases the user's energy level by one stage. When an adventurer's energy level reaches level five, they will become energized, and their next attack or recovery skill will be upgraded. At this point, using any applicable skill will reset that adventurer's energy level to zero."
                        }
                    ],
                    cost: '3080',
                    regen: 'None',
                    iframe: 'Long'
                },
                {
                    name: 'Stunning Visage',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: `Activates "Stunning Beauty" for 15 seconds and increases the user's energy level by one stage. During Stunning Beauty, the user's normal attacks may inflict stun. When an adventurer's energy level reaches level five, they will become energized, and their next attack or recovery skill will be upgraded. Using any applicable skill resets that adventurer's energy level to zero.`
                        },
                        {
                            level: 'Lvl 2',
                            description: `Activates "Stunning Beauty" for 15 seconds and increases the user's energy level by two stages. During Stunning Beauty, the user's normal attacks may inflict stun. When an adventurer's energy level reaches level five, they will become energized, and their next attack or recovery skill will be upgraded. Using any applicable skill resets that adventurer's energy level to zero.`
                        }
                    ],
                    cost: '5000',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Noelle',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-08/110340_01_r04.png?itok=Nx7Ch8Ad',
            description: 'A courageous messenger from a northern nation. She pushes herself harder than most—and has a strong emotional attachment to her job—but tries so hard to accurately get her words across that she often ends up saying nothing at all.',
            cv: ['Jacki Gunn', 'Akemi Kanda'],
            title: 'Meek Messenger',
            rarity: '4',
            element: 'Wind',
            weapon: 'Wand',
            role: 'Support',
            atk: '472',
            hp: '764',
            coability: {
                name: 'Skill Damage +5%',
                baseEffect: 'Increases attack skill damage by 5%. Benefits your whole team.',
                upgrades: [
                    'Increases attack skill damage by 6%. Benefits your whole team.',
                    'Increases attack skill damage by 8%. Benefits your whole team.',
                    'Increases attack skill damage by 11%. Benefits your whole team.',
                    'Increases attack skill damage by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Buff Time +20%',
                        effect: 'Increases duration of buff skills by 20%.'
                    },
                    {
                        name: 'Buff Time +25%',
                        effect: 'Increases duration of buff skills by 25%.'
                    }
                ],
                [
                    {
                        name: 'Bog Res +50%',
                        effect: 'Reduces susceptibility to bog by 50%.'
                    },
                    {
                        name: 'Bog Res +100%',
                        effect: 'Reduces susceptibility to bog by 100%.'
                    }
                ],
                [
                    {
                        name: 'Primed Defense +8%',
                        effect: 'Increases the defense of the adventurer you are currently controlling by 8% for 10 seconds every time their initial skill, displayed at the top of their skill list, becomes available for use. After activating, this ability will not activate again for 15 seconds.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Best Regards',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Increases the strength of wind-attuned adventurers in the team by 15% for 15 seconds.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Increases the strength of wind-attuned adventurers in the team by 20% for 15 seconds.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Increases the strength of wind-attuned adventurers in the team by 25% for 15 seconds.'
                        }
                    ],
                    cost: '3817',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Sincerely Yours',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals wind damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals wind damage to enemies directly ahead.'
                        }
                    ],
                    cost: '6237',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Albert',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-02/Albert-5-star.png?itok=fspfHhZy',
            description: `Known as the "Thunderswift Lord" for his ability to wield thunder, he also leads the Knights of Levin. He's on a quest to find the seeds of the abyss that nearly decimated his homeland. His calm determination makes him respected by all.`,
            cv: ['Jesse Inocalla', 'Hikaru Midorikawa'],
            title: 'Thunderswift Lord',
            rarity: '5',
            element: 'Light',
            weapon: 'Sword',
            role: 'Attack',
            atk: '502',
            hp: '758',
            coability: {
                name: 'Dragon Haste +8%',
                baseEffect: 'Increases dragon gauge fill rate by 8%. Benefits your whole team.',
                upgrades: [
                    'Increases dragon gauge fill rate by 9%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 11%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 12%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Force Strike +40%',
                        effect: 'Increases force strike damage by 40%.'
                    },
                    {
                        name: 'Force Strike +50%',
                        effect: 'Increases force strike damage by 50%.'
                    }
                ],
                [
                    {
                        name: 'Poison Res +50%',
                        effect: 'Reduces susceptibility to poison by 50%.'
                    },
                    {
                        name: 'Poison Res +100%',
                        effect: 'Reduces susceptibility to poison by 100%.'
                    }
                ],
                [
                    {
                        name: 'Electrically Charged I',
                        effect: 'Increases strength by 20% when electrified.'
                    },
                    {
                        name: 'Electrically Charged II',
                        effect: 'Increases strength by 25% when electrified.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Lightning Burst',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals light damage to the target and nearby enemies.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals light damage to the target and nearby enemies.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals light damage to the target and nearby enemies.'
                        }
                    ],
                    cost: '2351',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Thunderous Impulse',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Electrifies the user for 15 seconds. When electrified, the user's force strikes may inflict paralysis, and the Lightning Burst skill is powered up. When not electrified, the gauge for this skill will fill gradually. Abilities that increase skill gauge fill rate will not affect this skill."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Electrifies the user for 20 seconds. When electrified, the user's force strikes may inflict paralysis, and the Lightning Burst skill is powered up. When not electrified, the gauge for this skill will fill gradually. Abilities that increase skill gauge fill rate will not affect this skill."
                        }
                    ],
                    cost: '160000',
                    regen: '4,000 per second, 40 seconds to full',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Durant',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-11/110343_01_r04.png?itok=rW7WDBag',
            description: ' - ',
            cv: ['Deven Mack', 'Daisuke Hirose'],
            title: 'Blood-Covered Mad Dog',
            rarity: '4',
            element: 'Shadow',
            weapon: 'Blade',
            role: 'Attack',
            atk: '505',
            hp: '716',
            coability: {
                name: 'Strength +3%',
                baseEffect: 'Increases strength by 3%. Benefits your whole team.',
                upgrades: [
                    'Increases strength by 4%. Benefits your whole team.',
                    'Increases strength by 5%. Benefits your whole team.',
                    'Increases strength by 7%. Benefits your whole team.',
                    'Increases strength by 10%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Full HP = Strength +10%',
                        effect: 'Increases strength by 10% when HP is full.'
                    },
                    {
                        name: 'Full HP = Strength +13%',
                        effect: 'Increases strength by 13% when HP is full.'
                    }
                ],
                [
                    {
                        name: 'Paralysis Res +50%',
                        effect: 'Reduces susceptibility to paralysis by 50%.'
                    },
                    {
                        name: 'Paralysis Res +100%',
                        effect: 'Reduces susceptibility to paralysis by 100%.'
                    }
                ],
                [
                    {
                        name: 'Full HP = Critical Damage +17%',
                        effect: 'Adds 17% to the modifier applied to critical damage when HP is full.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Biting Revenge',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "For 20 seconds, increases the user's strength by 30%, but decreases their defense by 25%."
                        },
                        {
                            level: 'Lvl 2',
                            description: "For 20 seconds, increases the user's strength by 35%, but decreases their defense by 25%."
                        },
                        {
                            level: 'Lvl 3',
                            description: "For 20 seconds, increases the user's strength by 40%, but decreases their defense by 25%."
                        }
                    ],
                    cost: '2987',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Unchained Rage',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "For 20 seconds, increases the user's critical rate by 25%, but decreases their defense by 25%."
                        },
                        {
                            level: 'Lvl 2',
                            description: "For 20 seconds, increases the user's critical rate by 30%, but decreases their defense by 25%."
                        }
                    ],
                    cost: '4139',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Thaniel',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Thaniel-4-star.png?itok=spC8hpAF',
            description: 'A serious-minded former soldier of the sea who excels at swimming, fishing, and laundry. He left the navy and came to the castle to work under Euden, but he seems to have a secret he wants to reveal to him.',
            cv: ['Brian Davidson', 'Kenichi Suzumura'],
            title: 'Shifty Sailor',
            rarity: '4',
            element: 'Water',
            weapon: 'Staff',
            role: 'Healing',
            atk: '452',
            hp: '784',
            coability: {
                name: 'Recovery Potency +6%',
                baseEffect: 'Increases the potency of recovery skills by 6%. Benefits your whole team.',
                upgrades: [
                    'Increases the potency of recovery skills by 8%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 10%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 14%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 20%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Gauge Inhibitor +25%',
                        effect: 'Slows the rate the mode gauge increases by 25%.'
                    },
                    {
                        name: 'Gauge Inhibitor +30%',
                        effect: 'Slows the rate the mode gauge increases by 30%.'
                    }
                ],
                [
                    {
                        name: 'Burn Res +50%',
                        effect: 'Reduces susceptibility to burning by 50%.'
                    },
                    {
                        name: 'Burn Res +100%',
                        effect: 'Reduces susceptibility to burning by 100%.'
                    }
                ],
                [
                    {
                        name: 'Recovery Potency +8%',
                        effect: 'Increases the potency of recovery skills by 8%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Healing Wave',
                    levels: [
                        {level: 'Lvl 1', description: 'Restores HP to all allies.'},
                        {
                            level: 'Lvl 2',
                            description: 'Restores HP to all allies and removes burning.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Restores HP to all allies and removes burning.'
                        }
                    ],
                    cost: '5916',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: "Seafarer's Pride",
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Increases the entire team's defense by 15% for 15 seconds."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Increases the entire team's defense by 20% for 15 seconds."
                        }
                    ],
                    cost: '8534',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Fleur',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-03/Fleur-4-star.png?itok=OAKMDe82',
            description: 'A sylvan girl who loves to paint. Endlessly curious, she aspires to leave the forest to further her artistic studies, and ultimately dreams of pioneering a new style of art that fuses human and sylvan culture.',
            cv: ['Christine Ivsak', 'Yumiri Hanamori'],
            title: 'Budding Artist',
            rarity: '4',
            element: 'Light',
            weapon: 'Dagger',
            role: 'Attack',
            atk: '481',
            hp: '740',
            coability: {
                name: 'Critical Rate +3%',
                baseEffect: 'Increases critical rate by 3%. Benefits your whole team.',
                upgrades: [
                    'Increases critical rate by 4%. Benefits your whole team.',
                    'Increases critical rate by 5%. Benefits your whole team.',
                    'Increases critical rate by 7%. Benefits your whole team.',
                    'Increases critical rate by 10%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'HP 70% = Skill Haste +6%',
                        effect: 'Increases skill gauge fill rate by 6% when HP is 70% or above.'
                    },
                    {
                        name: 'HP 70% = Skill Haste +8%',
                        effect: 'Increases skill gauge fill rate by 8% when HP is 70% or above.'
                    }
                ],
                [
                    {
                        name: 'Curse Res +50%',
                        effect: 'Reduces susceptibility to curses by 50%.'
                    },
                    {
                        name: 'Curse Res +100%',
                        effect: 'Reduces susceptibility to curses by 100%.'
                    }
                ],
                [
                    {
                        name: 'Paralyzed Punisher +20%',
                        effect: 'Increases damage to paralyzed enemies by 20%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Captivating Canvas',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: `Deals light damage to enemies directly ahead, and inflicts paralysis. Paralyzed foes take extra damage. Activates "Skill Shift" if the attack connects. Phase II increases paralysis's success rate, while Phase III restores HP to all allies.`
                        },
                        {
                            level: 'Lvl 2',
                            description: `Deals light damage to enemies directly ahead, and inflicts paralysis. Paralyzed foes take extra damage. Activates "Skill Shift" if the attack connects. Phase II increases paralysis's success rate, while Phase III restores HP to all allies.`
                        },
                        {
                            level: 'Lvl 3',
                            description: `Deals light damage to enemies directly ahead, and inflicts paralysis. Paralyzed foes take extra damage. Activates "Skill Shift" if the attack connects. Phase II increases paralysis's success rate, while Phase III restores HP to all allies.`
                        }
                    ],
                    cost: '3478',
                    regen: 'None',
                    iframe: 'Long'
                },
                {
                    name: 'Palette Punch',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Immediately readies the Captivating Canvas skill for use, and increases the user's strength by 20% for 5 seconds."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Immediately readies the Captivating Canvas skill for use, and increases the user's strength by 25% for 5 seconds."
                        }
                    ],
                    cost: '5934',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Julietta',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Julietta-5-star.png?itok=3lo4Yeyg',
            description: 'A holy knight with the power to slay a hundred men—yet who cries at the drop of a hat. Raised in wealth, she often comes off as snobby, which pushes her away from others. She tends to get terrible stomachaches when nervous.',
            cv: ['Kelly Davidson', 'Ai Kayano'],
            title: 'Timorous Paladyn',
            rarity: '5',
            element: 'Light',
            weapon: 'Axe',
            role: 'Defense',
            atk: '466',
            hp: '825',
            coability: {
                name: 'Defense +9%',
                baseEffect: 'Increases defense by 9%. Benefits your whole team.',
                upgrades: [
                    'Increases defense by 10%. Benefits your whole team.',
                    'Increases defense by 11%. Benefits your whole team.',
                    'Increases defense by 12%. Benefits your whole team.',
                    'Increases defense by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: "Slayer's Strength +5%",
                        effect: 'Increases strength by 5% for every five enemies defeated (up to five times per quest).'
                    },
                    {
                        name: "Slayer's Strength +6%",
                        effect: 'Increases strength by 6% for every five enemies defeated (up to five times per quest).'
                    }
                ],
                [
                    {
                        name: 'Poison Res +50%',
                        effect: 'Reduces susceptibility to poison by 50%.'
                    },
                    {
                        name: 'Poison Res +100%',
                        effect: 'Reduces susceptibility to poison by 100%.'
                    }
                ],
                [
                    {
                        name: 'Last Recovery III',
                        effect: 'Grants an HP regen buff for 20 seconds when HP drops to 30% (once per quest).'
                    },
                    {
                        name: 'Last Recovery IV',
                        effect: 'Grants an HP regen buff for 20 seconds when HP drops to 30% (once per quest).'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Impending Sky',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals light damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals light damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals light damage to enemies directly ahead.'
                        }
                    ],
                    cost: '3130',
                    regen: 'None',
                    iframe: 'Short'
                },
                {
                    name: 'Glorious Guard',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Increases the user's defense by 50% for 10 seconds."
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Activates "Indomitable Spirit" for 10 seconds. The user gains a defense increase of 50% and immunity to knockback.'
                        }
                    ],
                    cost: '6296',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Lowen',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-11/Lowen-4-star.png?itok=2-GZQloA',
            description: 'A boy who came to the castle with his sister Louise. Sheltered and protected his whole life, he desires to mature into an adult capable of protecting his beloved sibling. His cute and honest demeanor earns the affection of all.',
            cv: ['Rae Hall', 'Sanae Kobayashi'],
            title: 'Dependable Brother',
            rarity: '4',
            element: 'Wind',
            weapon: 'Staff',
            role: 'Healing',
            atk: '453',
            hp: '783',
            coability: {
                name: 'Recovery Potency +6%',
                baseEffect: 'Increases the potency of recovery skills by 6%. Benefits your whole team.',
                upgrades: [
                    'Increases the potency of recovery skills by 8%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 10%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 14%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 20%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Skill Prep +50%',
                        effect: 'Fills 50% of skill gauges at the start of quests.'
                    },
                    {
                        name: 'Skill Prep +75%',
                        effect: 'Fills 75% of skill gauges at the start of quests.'
                    }
                ],
                [
                    {
                        name: 'Bog Res +50%',
                        effect: 'Reduces susceptibility to bog by 50%.'
                    },
                    {
                        name: 'Bog Res +100%',
                        effect: 'Reduces susceptibility to bog by 100%.'
                    }
                ],
                [
                    {
                        name: 'Recovery Potency +8%',
                        effect: 'Increases the potency of recovery skills by 8%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Winds, Heal Us!',
                    levels: [
                        {level: 'Lvl 1', description: 'Restores HP to all allies.'},
                        {
                            level: 'Lvl 2',
                            description: 'Restores HP to all allies and removes bog.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Restores HP to all allies and removes bog.'
                        }
                    ],
                    cost: '5916',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Winds, Protect Us!',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Increases the entire team's defense by 15% for 15 seconds, and increases each adventurer's max HP by 5% for the remainder of the quest. Once HP buffs reach the limit, an HP recovery effect is granted instead."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Increases the entire team's defense by 20% for 15 seconds, and increases each adventurer's max HP by 10% for the remainder of the quest. Once HP buffs reach the limit, an HP recovery effect is granted instead."
                        }
                    ],
                    cost: '11449',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Halloween Lowen',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-10/110257_02_r04_1.png?itok=xzMMnj6x',
            description: ' - ',
            cv: ['Erin Mathews', 'Sanae Kobayashi'],
            title: 'Halloween Prankster',
            rarity: '4',
            element: 'Flame',
            weapon: 'Staff',
            role: 'Healing',
            atk: '454',
            hp: '781',
            coability: {
                name: 'Recovery Potency +6%',
                baseEffect: 'Increases the potency of recovery skills by 6%. Benefits your whole team.',
                upgrades: [
                    'Increases the potency of recovery skills by 8%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 10%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 14%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 20%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Skill Prep +50%',
                        effect: 'Fills 50% of skill gauges at the start of quests.'
                    },
                    {
                        name: 'Skill Prep +75%',
                        effect: 'Fills 75% of skill gauges at the start of quests.'
                    }
                ],
                [
                    {
                        name: 'Sleep Res +50%',
                        effect: 'Reduces susceptibility to sleep by 50%.'
                    },
                    {
                        name: 'Sleep Res +100%',
                        effect: 'Reduces susceptibility to sleep by 100%.'
                    }
                ],
                [
                    {
                        name: 'Force Charge III',
                        effect: "Fills 25% of skill gauges when the user's force strikes connect (up to three times per quest)."
                    }
                ]
            ],
            skills: [
                {
                    name: "You won't trick me!",
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Restores HP to all allies and continues healing over the next 15 seconds.'
                        },
                        {
                            level: 'Lvl 2',
                            description: "Restores HP to all allies, continues healing over the next 15 seconds, and increases the entire team's defense by 8% for 5 seconds."
                        },
                        {
                            level: 'Lvl 3',
                            description: "Restores HP to all allies, continues healing over the next 15 seconds, and increases the entire team's defense by 10% for 5 seconds."
                        }
                    ],
                    cost: '5916',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: "Here's a treat for you!",
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Restores HP to all allies, and increases the entire team's max HP by 5% for the remainder of the quest. Once HP buffs reach the limit, an HP recovery effect is granted instead."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Restores HP to all allies, and increases the entire team's max HP by 10% for the remainder of the quest. Once HP buffs reach the limit, an HP recovery effect is granted instead."
                        }
                    ],
                    cost: '11832',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Ryozen',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Ryozen-4-star.png?itok=IGg93IJZ',
            description: "An ethical monk with a love for peace. His sharp senses and premonitions show he's no normal abbot, but his background is unknown. While often filling the comical role of grandpa, he has serious moments that suggest another side.",
            cv: ['Conor Hogan', 'Hidekatsu Shibata'],
            title: 'Dormant Demon',
            rarity: '4',
            element: 'Light',
            weapon: 'Lance',
            role: 'Defense',
            atk: '444',
            hp: '808',
            coability: {
                name: 'HP +7%',
                baseEffect: 'Increases HP by 7%. Benefits your whole team.',
                upgrades: [
                    'Increases HP by 8%. Benefits your whole team.',
                    'Increases HP by 9%. Benefits your whole team.',
                    'Increases HP by 12%. Benefits your whole team.',
                    'Increases HP by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Healing Doublebuff II',
                        effect: 'Grants an HP regen buff for 20 seconds each time a defense up buff is received.'
                    },
                    {
                        name: 'Healing Doublebuff III',
                        effect: 'Grants an HP regen buff for 20 seconds each time a defense up buff is received.'
                    }
                ],
                [
                    {
                        name: 'Curse Res +50%',
                        effect: 'Reduces susceptibility to curses by 50%.'
                    },
                    {
                        name: 'Curse Res +100%',
                        effect: 'Reduces susceptibility to curses by 100%.'
                    }
                ],
                [
                    {
                        name: 'Overdrive Punisher +8%',
                        effect: 'Increases damage to enemies in overdrive state by 8%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Celestial Citadel',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Increases the entire team's defense by 15% for 15 seconds."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Increases the entire team's defense by 20% for 15 seconds."
                        },
                        {
                            level: 'Lvl 3',
                            description: "Increases the entire team's defense by 25% for 15 seconds."
                        }
                    ],
                    cost: '4367',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Lotus Lance',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals light damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals light damage to enemies directly ahead.'
                        }
                    ],
                    cost: '4855',
                    regen: 'None',
                    iframe: 'Long'
                }
            ]
        }
        ,
        {
            name: 'Halloween Odetta',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-10/110301_02_r04_2.png?itok=wXyrcVoP',
            description: ' - ',
            cv: ['Samantha Hum', 'Madoka Yonezawa'],
            title: 'Wandering Spider',
            rarity: '4',
            element: 'Water',
            weapon: 'Sword',
            role: 'Support',
            atk: '464',
            hp: '773',
            coability: {
                name: 'Dragon Haste +5%',
                baseEffect: 'Increases dragon gauge fill rate by 5%. Benefits your whole team.',
                upgrades: [
                    'Increases dragon gauge fill rate by 6%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 8%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 11%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Primed Defense +8%',
                        effect: 'Increases the defense of the adventurer you are currently controlling by 8% for 10 seconds every time their initial skill, displayed at the top of their skill list, becomes available for use. After activating, this ability will not activate again for 15 seconds.'
                    },
                    {
                        name: 'Primed Defense +10%',
                        effect: 'Increases the defense of the adventurer you are currently controlling by 10% for 10 seconds every time their initial skill, displayed at the top of their skill list, becomes available for use. After activating, this ability will not activate again for 15 seconds.'
                    }
                ],
                [
                    {
                        name: 'Stun Res +50%',
                        effect: 'Reduces susceptibility to stun by 50%.'
                    },
                    {
                        name: 'Stun Res +100%',
                        effect: 'Reduces susceptibility to stun by 100%.'
                    }
                ],
                [
                    {
                        name: 'Buff Time +20%',
                        effect: 'Increases duration of buff skills by 20%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Envoy of the End',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals water damage to enemies in a line.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals water damage to enemies in a line, and reduces their defense by 5%.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals water damage to enemies in a line, and reduces their defense by 5%.'
                        }
                    ],
                    cost: '2503',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Wonderful World',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Increases the user and nearby allies' strength by 15% for 15 seconds."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Increases the user and nearby allies' strength by 20% for 15 seconds."
                        }
                    ],
                    cost: '6424',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Emma',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-09/110260_01_r04.png?itok=CygpPenV',
            description: "A sunny cheerleader who rallies the competitors in Apollonia. She sees cheering as her life's work, and travels the world carrying it out. Anytime she's unable to cheer, she tends to feel rather low.",
            cv: ['Rachel McFly', 'Aoi Yuki'],
            title: 'Encouraging Cheerleader',
            rarity: '4',
            element: 'Flame',
            weapon: 'Lance',
            role: 'Support',
            atk: '471',
            hp: '765',
            coability: {
                name: 'HP +7%',
                baseEffect: 'Increases HP by 7%. Benefits your whole team.',
                upgrades: [
                    'Increases HP by 8%. Benefits your whole team.',
                    'Increases HP by 9%. Benefits your whole team.',
                    'Increases HP by 12%. Benefits your whole team.',
                    'Increases HP by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Buff Time +20%',
                        effect: 'Increases duration of buff skills by 20%.'
                    },
                    {
                        name: 'Buff Time +25%',
                        effect: 'Increases duration of buff skills by 25%.'
                    }
                ],
                [
                    {
                        name: 'Sleep Res +50%',
                        effect: 'Reduces susceptibility to sleep by 50%.'
                    },
                    {
                        name: 'Sleep Res +100%',
                        effect: 'Reduces susceptibility to sleep by 100%.'
                    }
                ],
                [
                    {
                        name: 'Primed Strength +5%',
                        effect: 'Increases the strength of the adventurer you are currently controlling by 5% for 10 seconds every time their initial skill, displayed at the top of their skill list, becomes available for use. After activating, this ability will not activate again for 15 seconds.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Pom-pom Pump',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Increases the strength of flame-attuned adventurers in the team by 15% for 15 seconds.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Increases the strength of flame-attuned adventurers in the team by 20% for 15 seconds.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Increases the strength of flame-attuned adventurers in the team by 25% for 15 seconds.'
                        }
                    ],
                    cost: '3817',
                    regen: 'None',
                    iframe: 'Long'
                },
                {
                    name: 'Vigorous Defense',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Increases the defense of flame-attuned adventurers in the team by 10% for 15 seconds, and grants them a one-use shield that nullifies damage less than 20% of the user's maximum HP. This does not stack with any other shields."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Increases the defense of flame-attuned adventurers in the team by 15% for 15 seconds, and grants them a one-use shield that nullifies damage less than 25% of the user's maximum HP. This does not stack with any other shields."
                        }
                    ],
                    cost: '9154',
                    regen: 'None',
                    iframe: 'Long'
                }
            ]
        }
        ,
        {
            name: 'Musashi',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Musashi-4-star.png?itok=rrVLCWV2',
            description: 'A samurai from the east. His legendary skill meant no one in his homeland would challenge him, which led to a life of unending boredom. He came to the castle after hearing rumors of a place brimming with talented, deadly fighters.',
            cv: ['Chip Bailey', 'Daisuke Ono'],
            title: 'Wandering Samurai',
            rarity: '4',
            element: 'Wind',
            weapon: 'Blade',
            role: 'Attack',
            atk: '503',
            hp: '719',
            coability: {
                name: 'Strength +3%',
                baseEffect: 'Increases strength by 3%. Benefits your whole team.',
                upgrades: [
                    'Increases strength by 4%. Benefits your whole team.',
                    'Increases strength by 5%. Benefits your whole team.',
                    'Increases strength by 7%. Benefits your whole team.',
                    'Increases strength by 10%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Last Offense +30%',
                        effect: 'Buffs strength by 30% for 15 seconds when HP drops to 30% (once per quest).'
                    },
                    {
                        name: 'Last Offense +40%',
                        effect: 'Buffs strength by 40% for 15 seconds when HP drops to 30% (once per quest).'
                    }
                ],
                [
                    {
                        name: 'Bog Res +50%',
                        effect: 'Reduces susceptibility to bog by 50%.'
                    },
                    {
                        name: 'Bog Res +100%',
                        effect: 'Reduces susceptibility to bog by 100%.'
                    }
                ],
                [
                    {
                        name: 'Overdrive Punisher +8%',
                        effect: 'Increases damage to enemies in overdrive state by 8%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Belching Dragon',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals wind damage to enemies in a line, and inflicts poison.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals wind damage to enemies in a line, and inflicts poison.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals wind damage to enemies in a line, and inflicts poison.'
                        }
                    ],
                    cost: '2567',
                    regen: 'None',
                    iframe: 'Short'
                },
                {
                    name: 'Force of the Wind',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Increases the user's strength by 25% for 5 seconds."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Increases the user's strength by 30% for 5 seconds."
                        }
                    ],
                    cost: '4430',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Summer Ranzal',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-07/100003_02_r04.png?itok=6zM6K5An',
            description: "Ranzal is doing what he does best at the beach— barbecuing! Using the finest ingredients and his own unique seasoning, his food must be tasted to be believed. Thankfully, there's nothing he likes better than filling the bellies of friends.",
            cv: ['Will Williams', 'Katsuyuki Konishi'],
            title: 'Grillmaster',
            rarity: '4',
            element: 'Water',
            weapon: 'Blade',
            role: 'Defense',
            atk: '454',
            hp: '796',
            coability: {
                name: 'Strength +3%',
                baseEffect: 'Increases strength by 3%. Benefits your whole team.',
                upgrades: [
                    'Increases strength by 4%. Benefits your whole team.',
                    'Increases strength by 5%. Benefits your whole team.',
                    'Increases strength by 7%. Benefits your whole team.',
                    'Increases strength by 10%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Last Offense +30%',
                        effect: 'Buffs strength by 30% for 15 seconds when HP drops to 30% (once per quest).'
                    },
                    {
                        name: 'Last Offense +40%',
                        effect: 'Buffs strength by 40% for 15 seconds when HP drops to 30% (once per quest).'
                    }
                ],
                [
                    {
                        name: 'Stun Res +50%',
                        effect: 'Reduces susceptibility to stun by 50%.'
                    },
                    {
                        name: 'Stun Res +100%',
                        effect: 'Reduces susceptibility to stun by 100%.'
                    }
                ],
                [
                    {
                        name: 'Primed Defense +8%',
                        effect: 'Increases the defense of the adventurer you are currently controlling by 8% for 10 seconds every time their initial skill, displayed at the top of their skill list, becomes available for use. After activating, this ability will not activate again for 15 seconds.'
                    }
                ]
            ],
            skills: [
                {
                    name: "Surf's Up",
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals water damage to enemies directly ahead. Changing direction is possible during the attack.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals water damage to enemies directly ahead, and inflicts bog. Changing direction is possible during the attack.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals water damage to enemies directly ahead, and inflicts bog. Changing direction is possible during the attack.'
                        }
                    ],
                    cost: '2489',
                    regen: 'None',
                    iframe: 'Long'
                },
                {
                    name: 'Barbecue Bonanza',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Increases the user and nearby allies' strength by 8% for 15 seconds, and gradually recovers their HP for 15 seconds."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Increases the user and nearby allies' strength by 10% for 15 seconds, and gradually recovers their HP for 15 seconds."
                        }
                    ],
                    cost: '7383',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Aoi',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Aoi-3-star.png?itok=nAdJfovJ',
            description: "A cheerful and devoted ninja from another land. Such joy is unusual for one in her line of work, but she also carries deep emotional wounds. Per her master's last request, she's come to the castle in search of a new person to serve.",
            cv: ['Kelly Davidson', 'Reina Ueda'],
            title: 'Impassioned Ninja',
            rarity: '3',
            element: 'Flame',
            weapon: 'Blade',
            role: 'Attack',
            atk: '494',
            hp: '703',
            coability: {
                name: 'Strength +1%',
                baseEffect: 'Increases strength by 1%. Benefits your whole team.',
                upgrades: [
                    'Increases strength by 3%. Benefits your whole team.',
                    'Increases strength by 5%. Benefits your whole team.',
                    'Increases strength by 7%. Benefits your whole team.',
                    'Increases strength by 10%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Overdrive Punisher +5%',
                        effect: 'Increases damage to enemies in overdrive state by 5%.'
                    },
                    {
                        name: 'Overdrive Punisher +8%',
                        effect: 'Increases damage to enemies in overdrive state by 8%.'
                    }
                ],
                [
                    {
                        name: 'Sleep Res +25%',
                        effect: 'Reduces susceptibility to sleep by 25%.'
                    },
                    {
                        name: 'Sleep Res +50%',
                        effect: 'Reduces susceptibility to sleep by 50%.'
                    }
                ],
                [
                    {
                        name: 'Sleep Res +25%',
                        effect: 'Reduces susceptibility to sleep by 25%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Searing Chakram',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals flame damage to surrounding enemies.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals flame damage to surrounding enemies.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals flame damage to surrounding enemies.'
                        }
                    ],
                    cost: '2630',
                    regen: 'None',
                    iframe: 'Short'
                },
                {
                    name: 'Foliage Flare',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals flame damage to enemies in a line.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals flame damage to enemies in a line.'
                        }
                    ],
                    cost: '5280',
                    regen: 'None',
                    iframe: 'Short'
                }
            ]
        }
        ,
        {
            name: 'Odetta',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-02/Odetta-4-star.png?itok=svccPkAg',
            description: "A traveler in search of new worlds. Proud of a forward-thinking attitude that sees her always moving forward, she's not terribly worried if others get her. Though she sports a classy appearance, she knows her way around a fight.",
            cv: ['Cassandra Fan', 'Madoka Yonezawa'],
            title: 'Wanderlust Incarnate',
            rarity: '4',
            element: 'Light',
            weapon: 'Sword',
            role: 'Attack',
            atk: '486',
            hp: '735',
            coability: {
                name: 'Dragon Haste +5%',
                baseEffect: 'Increases dragon gauge fill rate by 5%. Benefits your whole team.',
                upgrades: [
                    'Increases dragon gauge fill rate by 6%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 8%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 11%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'HP 70% = Strength +8%',
                        effect: 'Increases strength by 8% when HP is 70% or above.'
                    },
                    {
                        name: 'HP 70% = Strength +10%',
                        effect: 'Increases strength by 10% when HP is 70% or above.'
                    }
                ],
                [
                    {
                        name: 'Poison Res +50%',
                        effect: 'Reduces susceptibility to poison by 50%.'
                    },
                    {
                        name: 'Poison Res +100%',
                        effect: 'Reduces susceptibility to poison by 100%.'
                    }
                ],
                [
                    {
                        name: 'Buff Time +20%',
                        effect: 'Increases duration of buff skills by 20%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Liberty Slash',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals light damage to enemies in a line.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals light damage to enemies in a line, and reduces their defense by 5%.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals light damage to enemies in a line, and reduces their defense by 5%.'
                        }
                    ],
                    cost: '2503',
                    regen: 'None',
                    iframe: 'Short'
                },
                {
                    name: 'Freedom Ring',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Restores HP to the user and nearby allies, and increases their strength by 10% for 15 seconds.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Restores HP to the user and nearby allies, and increases their strength by 15% for 15 seconds.'
                        }
                    ],
                    cost: '6424',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Pietro',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-11/Pietro-3-star.png?itok=zTdcRYPy',
            description: 'An adventurer in search of a fabled frozen city. As this city is thought to only exist in faerie tales, he is often the subject of mockery. Some, however, find inspiration in his perseverance.',
            cv: ['James Higuchi', 'Yuto Uemura'],
            title: 'Visionary Adventurer',
            rarity: '3',
            element: 'Water',
            weapon: 'Axe',
            role: 'Defense',
            atk: '443',
            hp: '782',
            coability: {
                name: 'Defense +5%',
                baseEffect: 'Increases defense by 5%. Benefits your whole team.',
                upgrades: [
                    'Increases defense by 7%. Benefits your whole team.',
                    'Increases defense by 9%. Benefits your whole team.',
                    'Increases defense by 11%. Benefits your whole team.',
                    'Increases defense by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Critical Damage +10%',
                        effect: 'Adds 10% to the modifier applied to critical damage.'
                    },
                    {
                        name: 'Critical Damage +13%',
                        effect: 'Adds 13% to the modifier applied to critical damage.'
                    }
                ],
                [
                    {
                        name: 'Blindness Res +25%',
                        effect: 'Reduces susceptibility to blindness by 25%.'
                    },
                    {
                        name: 'Blindness Res +50%',
                        effect: 'Reduces susceptibility to blindness by 50%.'
                    }
                ],
                [
                    {
                        name: 'Blindness Res +25%',
                        effect: 'Reduces susceptibility to blindness by 25%.'
                    }
                ]
            ],
            skills: [
                {
                    name: "Quester's Best",
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals water damage to surrounding enemies and draws them toward the user.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals water damage to surrounding enemies and draws them toward the user.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals water damage to surrounding enemies and draws them toward the user.'
                        }
                    ],
                    cost: '2868',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Indomitable Will',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Grants all teammates a one-use shield that nullifies damage less than 15% of the user's maximum HP. This does not stack with any other shields."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Grants all teammates a one-use shield that nullifies damage less than 20% of the user's maximum HP. This does not stack with any other shields."
                        }
                    ],
                    cost: '5840',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Erik',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Erik-3-star.png?itok=bbmPHRHk',
            description: "After surviving 10 years on a deserted island through sheer tyranny of will, he's now deeply appreciative of any place with a roof. Of noble descent, his conduct and knowledge hint at the high-class education he received.",
            cv: ['Michael Richards', 'Toshiki Masuda'],
            title: 'Feral Noble',
            rarity: '3',
            element: 'Shadow',
            weapon: 'Axe',
            role: 'Attack',
            atk: '493',
            hp: '704',
            coability: {
                name: 'Defense +5%',
                baseEffect: 'Increases defense by 5%. Benefits your whole team.',
                upgrades: [
                    'Increases defense by 7%. Benefits your whole team.',
                    'Increases defense by 9%. Benefits your whole team.',
                    'Increases defense by 11%. Benefits your whole team.',
                    'Increases defense by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Force Strike +20%',
                        effect: 'Increases force strike damage by 20%.'
                    },
                    {
                        name: 'Force Strike +30%',
                        effect: 'Increases force strike damage by 30%.'
                    }
                ],
                [
                    {
                        name: 'Blindness Res +25%',
                        effect: 'Reduces susceptibility to blindness by 25%.'
                    },
                    {
                        name: 'Blindness Res +50%',
                        effect: 'Reduces susceptibility to blindness by 50%.'
                    }
                ],
                [
                    {
                        name: 'Blindness Res +25%',
                        effect: 'Reduces susceptibility to blindness by 25%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Tenacious Swing',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals shadow damage to surrounding enemies and draws them toward the user.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals shadow damage to surrounding enemies and draws them toward the user.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals shadow damage to surrounding enemies and draws them toward the user.'
                        }
                    ],
                    cost: '2868',
                    regen: 'None',
                    iframe: 'Short'
                },
                {
                    name: 'Wild Strike',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals shadow damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals shadow damage to enemies directly ahead.'
                        }
                    ],
                    cost: '5883',
                    regen: 'None',
                    iframe: 'Short'
                }
            ]
        }
        ,
        {
            name: 'Curran',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-03/Curran-5-star.png?itok=SmI2iLCV',
            description: ' - ',
            cv: ['Graeme Davies', 'Kenta Miyake'],
            title: 'Dogged Inquisitor',
            rarity: '5',
            element: 'Shadow',
            weapon: 'Axe',
            role: 'Attack',
            atk: '519',
            hp: '741',
            coability: {
                name: 'Defense +9%',
                baseEffect: 'Increases defense by 9%. Benefits your whole team.',
                upgrades: [
                    'Increases defense by 10%. Benefits your whole team.',
                    'Increases defense by 11%. Benefits your whole team.',
                    'Increases defense by 12%. Benefits your whole team.',
                    'Increases defense by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Overdrive Punisher +10%',
                        effect: 'Increases damage to enemies in overdrive state by 10%.'
                    },
                    {
                        name: 'Overdrive Punisher +13%',
                        effect: 'Increases damage to enemies in overdrive state by 13%.'
                    }
                ],
                [
                    {
                        name: 'Paralysis Res +50%',
                        effect: 'Reduces susceptibility to paralysis by 50%.'
                    },
                    {
                        name: 'Paralysis Res +100%',
                        effect: 'Reduces susceptibility to paralysis by 100%.'
                    }
                ],
                [
                    {
                        name: 'Last Offense +40%',
                        effect: 'Buffs strength by 40% for 15 seconds when HP drops to 30% (once per quest).'
                    },
                    {
                        name: 'Last Offense +50%',
                        effect: 'Buffs strength by 50% for 15 seconds when HP drops to 30% (once per quest).'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Circular Judgment',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals shadow damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals shadow damage to enemies directly ahead, and reduces their defense by 5%.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals shadow damage to enemies directly ahead, and reduces their defense by 5%.'
                        }
                    ],
                    cost: '3083',
                    regen: 'None',
                    iframe: 'Long'
                },
                {
                    name: 'Merciless Blow',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals shadow damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals shadow damage to enemies directly ahead.'
                        }
                    ],
                    cost: '6017',
                    regen: 'None',
                    iframe: 'Long'
                }
            ]
        }
        ,
        {
            name: 'Zardin',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Zardin-3-star_0.png?itok=apUBH9us',
            description: 'A knight so vain, he carries a mirror into battle. His antics often make those around him cringe, but he never seems to notice. His expression sometimes turns serene when gazing into his mirror—what DOES he see in there?',
            cv: ['Sam Vincent', 'Wataru Hatano'],
            title: 'Hopeless Narcissist',
            rarity: '3',
            element: 'Water',
            weapon: 'Sword',
            role: 'Defense',
            atk: '432',
            hp: '794',
            coability: {
                name: 'Dragon Haste +2%',
                baseEffect: 'Increases dragon gauge fill rate by 2%. Benefits your whole team.',
                upgrades: [
                    'Increases dragon gauge fill rate by 5%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 8%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 11%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Full HP = Strength +8%',
                        effect: 'Increases strength by 8% when HP is full.'
                    },
                    {
                        name: 'Full HP = Strength +10%',
                        effect: 'Increases strength by 10% when HP is full.'
                    }
                ],
                [
                    {
                        name: 'Burn Res +25%',
                        effect: 'Reduces susceptibility to burning by 25%.'
                    },
                    {
                        name: 'Burn Res +50%',
                        effect: 'Reduces susceptibility to burning by 50%.'
                    }
                ],
                [
                    {
                        name: 'Burn Res +25%',
                        effect: 'Reduces susceptibility to burning by 25%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Zardin Blade',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals water damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals water damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals water damage to enemies directly ahead.'
                        }
                    ],
                    cost: '2443',
                    regen: 'None',
                    iframe: 'Short'
                },
                {
                    name: "Zardin's Wrath",
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals water damage to enemies in a line.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals water damage to enemies in a line.'
                        }
                    ],
                    cost: '5225',
                    regen: 'None',
                    iframe: 'Short'
                }
            ]
        }
        ,
        {
            name: 'Waike',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Waike-3-star.png?itok=J5AwfhpH',
            description: 'A self-proclaimed "noble thief" who was driven from his homeland. His demeanor is usually lax, but his manners suggest a proper upbringing. He has stern conviction in his heart, which is why he gets emotional from time to time.',
            cv: ['Graham Hamilton', 'Satoshi Hino'],
            title: 'Noble Thief',
            rarity: '3',
            element: 'Water',
            weapon: 'Bow',
            role: 'Support',
            atk: '446',
            hp: '766',
            coability: {
                name: 'Skill Haste +2%',
                baseEffect: 'Increases skill gauge fill rate by 2%. Benefits your whole team.',
                upgrades: [
                    'Increases skill gauge fill rate by 5%. Benefits your whole team.',
                    'Increases skill gauge fill rate by 8%. Benefits your whole team.',
                    'Increases skill gauge fill rate by 11%. Benefits your whole team.',
                    'Increases skill gauge fill rate by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Full HP = Bog +30%',
                        effect: 'Increases the chances of inflicting bog by 30% when HP is full.'
                    },
                    {
                        name: 'Full HP = Bog +40%',
                        effect: 'Increases the chances of inflicting bog by 40% when HP is full.'
                    }
                ],
                [
                    {
                        name: 'Burn Res +25%',
                        effect: 'Reduces susceptibility to burning by 25%.'
                    },
                    {
                        name: 'Burn Res +50%',
                        effect: 'Reduces susceptibility to burning by 50%.'
                    }
                ],
                [
                    {
                        name: 'Burn Res +25%',
                        effect: 'Reduces susceptibility to burning by 25%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Noble Hunter',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals water damage to enemies in a line.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals water damage to enemies in a line.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals water damage to enemies in a line.'
                        }
                    ],
                    cost: '2395',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Cascade Shot',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals water damage to the target.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals water damage to the target, and inflicts bog.'
                        }
                    ],
                    cost: '4989',
                    regen: 'None',
                    iframe: 'Short'
                }
            ]
        }
        ,
        {
            name: 'Linus',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Linus-3-star.png?itok=8iiwFzju',
            description: "A pint-sized, spirited mercenary who keeps the peace in a corrupt city. As he's simply doing what he feels to be right, he's uncomfortable with the seemingly endless praise he gets.",
            cv: ['Arneham Keefe', 'Yuma Uchida'],
            title: 'Bantam Hero',
            rarity: '3',
            element: 'Light',
            weapon: 'Axe',
            role: 'Defense',
            atk: '442',
            hp: '784',
            coability: {
                name: 'Defense +5%',
                baseEffect: 'Increases defense by 5%. Benefits your whole team.',
                upgrades: [
                    'Increases defense by 7%. Benefits your whole team.',
                    'Increases defense by 9%. Benefits your whole team.',
                    'Increases defense by 11%. Benefits your whole team.',
                    'Increases defense by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'HP 70% = Defense +5%',
                        effect: 'Increases defense by 5% when HP is 70% or above.'
                    },
                    {
                        name: 'HP 70% = Defense +8%',
                        effect: 'Increases defense by 8% when HP is 70% or above.'
                    }
                ],
                [
                    {
                        name: 'Curse Res +25%',
                        effect: 'Reduces susceptibility to curses by 25%.'
                    },
                    {
                        name: 'Curse Res +50%',
                        effect: 'Reduces susceptibility to curses by 50%.'
                    }
                ],
                [
                    {
                        name: 'Curse Res +25%',
                        effect: 'Reduces susceptibility to curses by 25%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Valiant Axe',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals light damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals light damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals light damage to enemies directly ahead.'
                        }
                    ],
                    cost: '2942',
                    regen: 'None',
                    iframe: 'Short'
                },
                {
                    name: 'Shining Vanguard',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals light damage to surrounding enemies and draws them toward the user.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals light damage to surrounding enemies and draws them toward the user.'
                        }
                    ],
                    cost: '5735',
                    regen: 'None',
                    iframe: 'Short'
                }
            ]
        }
        ,
        {
            name: 'Dragonyule Nefaria',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-12/Dragonyule%20Nefaria-4-star.png?itok=YncR1dIh',
            description: 'A former queen from a foreign land who delivers Dragonyule gifts while dressed as Saint Starfall. The earnestness of her delivery—as well as the love and consideration she showed her people— makes her the epitome of the character.',
            cv: ['Julie Muise', 'Yukana'],
            title: 'Queen of Smiles',
            rarity: '4',
            element: 'Water',
            weapon: 'Bow',
            role: 'Support',
            atk: '465',
            hp: '798',
            coability: {
                name: 'Skill Haste +5%',
                baseEffect: 'Increases skill gauge fill rate by 5%. Benefits your whole team.',
                upgrades: [
                    'Increases skill gauge fill rate by 6%. Benefits your whole team.',
                    'Increases skill gauge fill rate by 8%. Benefits your whole team.',
                    'Increases skill gauge fill rate by 11%. Benefits your whole team.',
                    'Increases skill gauge fill rate by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Skill Damage +20%',
                        effect: 'Increases attack skill damage by 20%.'
                    },
                    {
                        name: 'Skill Damage +25%',
                        effect: 'Increases attack skill damage by 25%.'
                    }
                ],
                [
                    {
                        name: 'Burn Res +50%',
                        effect: 'Reduces susceptibility to burning by 50%.'
                    },
                    {
                        name: 'Burn Res +100%',
                        effect: 'Reduces susceptibility to burning by 100%.'
                    }
                ],
                [
                    {
                        name: 'Flurry Freezer I',
                        effect: 'When the combo count is 15 or higher, grants a 6-second buff that gives standard attacks a 10% chance of inflicting freeze.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Starsquall Shot',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals water damage to enemies in a line.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals water damage to enemies in a line.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals water damage to enemies in a line.'
                        }
                    ],
                    cost: '2359',
                    regen: 'None',
                    iframe: 'Long'
                },
                {
                    name: 'Special Delivery',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: `Activates "Gifts Ready," preparing two gifts. While this skill is active, the user can distribute gifts by using their force strike. These gifts grant nearby allies a one-use shield that nullifies damage less than 10% of the user's maximum HP, and increase their energy levels by one stage. When an adventurer's energy level reaches level five, they will become energized, and their next attack or recovery skill will be upgraded. At this point, using any applicable skill will reset that adventurer’s energy level to zero.`
                        },
                        {
                            level: 'Lvl 2',
                            description: `Activates "Gifts Ready," preparing two gifts. While this skill is active, the user can distribute gifts by using their force strike. These gifts grant nearby allies a one-use shield that nullifies damage less than 15% of the user's maximum HP, and increase their energy levels by one stage. When an adventurer's energy level reaches level five, they will become energized, and their next attack or recovery skill will be upgraded. At this point, using any applicable skill will reset that adventurer’s energy level to zero.`
                        }
                    ],
                    cost: '9476',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Student Maribelle',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-05/Student%20Maribelle-5-star.png?itok=8IAcmpQj',
            description: 'A wand-wielding girl from the forest, decked out in a new uniform and ready for school. She can bring her bunnies and squirrels along, but the bears have to stay home.',
            cv: ['Julie Muise', 'Kana Hanazawa'],
            title: 'Outgoing Student',
            rarity: '5',
            element: 'Flame',
            weapon: 'Wand',
            role: 'Attack',
            atk: '513',
            hp: '747',
            coability: {
                name: 'Skill Damage +8%',
                baseEffect: 'Increases attack skill damage by 8%. Benefits your whole team.',
                upgrades: [
                    'Increases attack skill damage by 9%. Benefits your whole team.',
                    'Increases attack skill damage by 11%. Benefits your whole team.',
                    'Increases attack skill damage by 12%. Benefits your whole team.',
                    'Increases attack skill damage by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Full HP = Skill Damage +35%',
                        effect: 'Increases attack skill damage by 35% when HP is full.'
                    },
                    {
                        name: 'Full HP = Skill Damage +40%',
                        effect: 'Increases attack skill damage by 40% when HP is full.'
                    }
                ],
                [
                    {
                        name: 'Stun Res +50%',
                        effect: 'Reduces susceptibility to stun by 50%.'
                    },
                    {
                        name: 'Stun Res +100%',
                        effect: 'Reduces susceptibility to stun by 100%.'
                    }
                ],
                [
                    {
                        name: 'Broken Punisher +25%',
                        effect: 'Increases damage to enemies in break state by 25%.'
                    },
                    {
                        name: 'Broken Punisher +30%',
                        effect: 'Increases damage to enemies in break state by 30%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Study Break',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals flame damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals flame damage to enemies directly ahead, and reduces their defense by 5%.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals flame damage to enemies directly ahead, and reduces their defense by 5%.'
                        }
                    ],
                    cost: '2649',
                    regen: 'None',
                    iframe: 'Long'
                },
                {
                    name: 'Happy Memories',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals flame damage to surrounding enemies.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals flame damage to surrounding enemies.'
                        }
                    ],
                    cost: '8300',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Gala Prince',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-09/100001_08_r05.png?itok=hN3YIBn0',
            description: ' - ',
            cv: ['Victor Hunter', 'Koki Uchiyama'],
            title: 'Bearer of Dragonlight',
            rarity: '5',
            element: 'Light',
            weapon: 'Sword',
            role: 'Attack',
            atk: '502',
            hp: '758',
            coability: {
                name: 'Shapeshifting Boost IV',
                baseEffect: 'When in dragon form, adds 6% to the damage modifier and extends shapeshift time by 10%.',
                upgrades: [
                    'When in dragon form, adds 7% to the damage modifier and extends shapeshift time by 10%.',
                    'When in dragon form, adds 8% to the damage modifier and extends shapeshift time by 15%.',
                    'When in dragon form, adds 9% to the damage modifier and extends shapeshift time by 15%.',
                    'When in dragon form, adds 10% to the damage modifier and extends shapeshift time by 20%.'
                ]
            },
            abilities: [
                [
                    {
                        name: "Dragonlight's Resolve I",
                        effect: 'Reduces dragon gauge depletion over time by 20%, and increases attack rate when shapeshifted by 10%.'
                    },
                    {
                        name: "Dragonlight's Resolve II",
                        effect: 'Reduces dragon gauge depletion over time by 30%, and increases attack rate when shapeshifted by 10%.'
                    }
                ],
                [
                    {
                        name: 'Sacred Shield I',
                        effect: 'Reduces susceptibility to poison and curses by 50%.'
                    },
                    {
                        name: 'Sacred Shield II',
                        effect: 'Reduces susceptibility to poison and curses by 100%.'
                    }
                ],
                [
                    {
                        name: 'Draconic Charge I',
                        effect: "Fills 25% of the user's dragon gauge when their HP drops to 30% (once per quest)."
                    },
                    {
                        name: 'Draconic Charge II',
                        effect: "Fills 50% of the user's dragon gauge when their HP drops to 30% (once per quest)."
                    }
                ]
            ],
            skills: [
                {
                    name: 'Rising Circlet',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals light damage to surrounding enemies, and creates a buff zone that lasts for 10 seconds and increases the strength of adventurers inside it by 10%.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals light damage to surrounding enemies, and creates a buff zone that lasts for 10 seconds and increases the strength of adventurers inside it by 15%.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals light damage to surrounding enemies, and creates a buff zone that lasts for 10 seconds and increases the strength of adventurers inside it by 20%.'
                        }
                    ],
                    cost: '3817',
                    regen: 'None',
                    iframe: 'Long'
                },
                {
                    name: 'Exalted Glory',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Deals light damage to enemies directly ahead, inflicts paralysis, increases the entire team's strength and defense by 10% for 15 seconds, and grants all teammates a one-use shield that nullifies damage less than 15% of the user's maximum HP. This does not stack with any other shields. The skill gauge for this skill can be filled by attacking enemies, but it will also gradually fill automatically. Abilities that increase skill gauge fill rate will not affect this automatic increase."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Deals light damage to enemies directly ahead, inflicts paralysis, increases the entire team's strength and defense by 15% for 15 seconds, and grants all teammates a one-use shield that nullifies damage less than 20% of the user's maximum HP. This does not stack with any other shields. The skill gauge for this skill can be filled by attacking enemies, but it will also gradually fill automatically. Abilities that increase skill gauge fill rate will not affect this automatic increase."
                        }
                    ],
                    cost: '999999',
                    regen: '16,000 per second, 62 seconds to full',
                    iframe: 'Long'
                }
            ]
        }
        ,
        {
            name: 'Wedding Elisanne',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-06/100002_06_r05_0.png?itok=b6IIkpwC',
            description: 'The mighty Paladyn dons a white wedding dress and takes up her place at the front line to secure peace and victory for her land—as well as to remain with the man she secretly loves.',
            cv: ['Ava Lindstrom', 'Saori Hayami'],
            title: 'Battling Bride',
            rarity: '5',
            element: 'Wind',
            weapon: 'Sword',
            role: 'Support',
            atk: '480',
            hp: '795',
            coability: {
                name: 'Dragon Haste +8%',
                baseEffect: 'Increases dragon gauge fill rate by 8%. Benefits your whole team.',
                upgrades: [
                    'Increases dragon gauge fill rate by 9%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 11%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 12%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Skill Haste +6%',
                        effect: 'Increases skill gauge fill rate by 6%.'
                    },
                    {
                        name: 'Skill Haste +8%',
                        effect: 'Increases skill gauge fill rate by 8%.'
                    }
                ],
                [
                    {
                        name: 'Bog Res +50%',
                        effect: 'Reduces susceptibility to bog by 50%.'
                    },
                    {
                        name: 'Bog Res +100%',
                        effect: 'Reduces susceptibility to bog by 100%.'
                    }
                ],
                [
                    {
                        name: 'Strength Doublebuff +10%',
                        effect: 'Increases strength by 10% for 15 seconds each time a defense up buff is received.'
                    },
                    {
                        name: 'Strength Doublebuff +13%',
                        effect: 'Increases strength by 13% for 15 seconds each time a defense up buff is received.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Sacred Union',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals wind damage to enemies directly ahead, and creates a buff zone that lasts for 10 seconds and gradually heals the HP of adventurers inside it.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals wind damage to enemies directly ahead, and creates a buff zone that lasts for 10 seconds and gradually heals the HP of adventurers inside it.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals wind damage to enemies directly ahead, and creates a buff zone that lasts for 10 seconds and gradually heals the HP of adventurers inside it.'
                        }
                    ],
                    cost: '2902',
                    regen: 'None',
                    iframe: 'Long'
                },
                {
                    name: 'Wedding Bell',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals wind damage to enemies directly ahead, and creates a debuff zone that lasts for 10 seconds and reduces the defense of enemies inside it by 10%.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals wind damage to enemies directly ahead, and creates a debuff zone that lasts for 10 seconds and reduces the defense of enemies inside it by 15%.'
                        }
                    ],
                    cost: '6243',
                    regen: 'None',
                    iframe: 'Long'
                }
            ]
        }
        ,
        {
            name: 'Halloween Mym',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-10/100010_07_r05_0.png?itok=AL0Gb5oC',
            description: ' - ',
            cv: ['Tabitha St Germain', 'Aya Endo'],
            title: 'Dragon Temptress',
            rarity: '5',
            element: 'Flame',
            weapon: 'Axe',
            role: 'Support',
            atk: '493',
            hp: '781',
            coability: {
                name: 'Critical Damage +17%',
                baseEffect: 'Adds 17% to the modifier applied to critical damage. Benefits your whole team.',
                upgrades: [
                    'Adds 20% to the modifier applied to critical damage. Benefits your whole team.',
                    'Adds 23% to the modifier applied to critical damage. Benefits your whole team.',
                    'Adds 26% to the modifier applied to critical damage. Benefits your whole team.',
                    'Adds 30% to the modifier applied to critical damage. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: "Flamewyrm's Sweet Nature I",
                        effect: 'Reduces susceptibility to burning by 100%. When shapeshifting, Mym will transform into Brunhilda regardless of what dragon she is equipped with, and her attack rate while shapeshifted will increase by 10%.'
                    },
                    {
                        name: "Flamewyrm's Sweet Nature II",
                        effect: 'Reduces susceptibility to burning by 100%. When shapeshifting, Mym will transform into Brunhilda regardless of what dragon she is equipped with, and her attack rate while shapeshifted will increase by 15%.'
                    }
                ],
                [
                    {
                        name: 'Stun Res +50%',
                        effect: 'Reduces susceptibility to stun by 50%.'
                    },
                    {
                        name: 'Stun Res +100%',
                        effect: 'Reduces susceptibility to stun by 100%.'
                    }
                ],
                [
                    {
                        name: 'Draconic Dream I',
                        effect: 'Increases defense while shapeshifted by 80%. When the "Dream Boost" effect is active, adds 15% to the modifier applied to damage when in dragon form.'
                    },
                    {
                        name: 'Draconic Dream II',
                        effect: 'Increases defense while shapeshifted by 100%. When the "Dream Boost" effect is active, adds 20% to the modifier applied to damage when in dragon form.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Charming Trick',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals flame damage to enemies directly ahead, and creates a debuff zone that lasts for 10 seconds and reduces the defense of enemies inside it by 10%.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals flame damage to enemies directly ahead, and creates a debuff zone that lasts for 10 seconds and reduces the defense of enemies inside it by 15%.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals flame damage to enemies directly ahead, and creates a debuff zone that lasts for 10 seconds and reduces the defense of enemies inside it by 15%.'
                        }
                    ],
                    cost: '3849',
                    regen: 'None',
                    iframe: 'Long'
                },
                {
                    name: 'Tempering Fancy',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: `Increases the strength of flame-attuned adventurers in the team by 15% for 15 seconds, and activates "Dream Boost" for 15 seconds. During Dream Boost, the user's critical rate is increased by 3%.`
                        },
                        {
                            level: 'Lvl 2',
                            description: `Increases the strength of flame-attuned adventurers in the team by 20% for 15 seconds, and activates "Dream Boost" for 15 seconds. During Dream Boost, the user's critical rate is increased by 5%.`
                        }
                    ],
                    cost: '8534',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Zethia',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-09/Zethia-5-star.png?itok=xgmjiXKz',
            description: "The twin sister of Euden, and one of the few maidens of the Church. Quick to cry as a child, she became more stoic after the passing of her mother. She's now a strong-willed young woman who cherishes her older brother.",
            cv: ['Shannon Chan-Kent', 'Ai Kayano'],
            title: ' - ',
            rarity: '5',
            element: 'Light',
            weapon: 'Staff',
            role: 'Healing',
            atk: '466',
            hp: '810',
            coability: {name: '', baseEffect: '', upgrades: []},
            abilities: [
                [{name: '', effect: ''}, {name: '', effect: ''}],
                [{name: '', effect: ''}, {name: '', effect: ''}],
                [{name: '', effect: ''}]
            ],
            skills: [
                {
                    name: 'Divine Healing',
                    levels: [
                        {level: 'Lvl 1', description: 'Restores HP to all allies.'},
                        {level: 'Lvl 2', description: 'Restores HP to all allies.'},
                        {level: 'Lvl 3', description: 'Restores HP to all allies.'}
                    ],
                    cost: '2785',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: '',
                    levels: [
                        {level: 'Lvl 1', description: ''},
                        {level: 'Lvl 2', description: ''}
                    ],
                    cost: '',
                    regen: 'None',
                    iframe: ''
                }
            ]
        }
        ,
        {
            name: 'Aurien',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Aurien-3-star.png?itok=eJG8x6-v',
            description: `A gambler who's always got it under control. His lax confidence makes it hard to know when he's lying, which is just how he likes it. He says things like "I come from royalty" and "I never lose," but who knows if that's true or not?`,
            cv: ['Vincent Tong', 'Show Hayami'],
            title: 'Elegant Gambler',
            rarity: '3',
            element: 'Flame',
            weapon: 'Staff',
            role: 'Healing',
            atk: '445',
            hp: '765',
            coability: {
                name: 'Recovery Potency +2%',
                baseEffect: 'Increases the potency of recovery skills by 2%. Benefits your whole team.',
                upgrades: [
                    'Increases the potency of recovery skills by 6%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 10%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 14%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 20%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'HP 70% = Skill Damage +20%',
                        effect: 'Increases attack skill damage by 20% when HP is 70% or above.'
                    },
                    {
                        name: 'HP 70% = Skill Damage +25%',
                        effect: 'Increases attack skill damage by 25% when HP is 70% or above.'
                    }
                ],
                [
                    {
                        name: 'Sleep Res +25%',
                        effect: 'Reduces susceptibility to sleep by 25%.'
                    },
                    {
                        name: 'Sleep Res +50%',
                        effect: 'Reduces susceptibility to sleep by 50%.'
                    }
                ],
                [
                    {
                        name: 'Sleep Res +25%',
                        effect: 'Reduces susceptibility to sleep by 25%.'
                    }
                ]
            ],
            skills: [
                {
                    name: "Healer's Luck",
                    levels: [
                        {level: 'Lvl 1', description: 'Restores HP to all allies.'},
                        {level: 'Lvl 2', description: 'Restores HP to all allies.'},
                        {level: 'Lvl 3', description: 'Restores HP to all allies.'}
                    ],
                    cost: '5916',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Red Hot Jackpot',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals flame damage to surrounding enemies.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals flame damage to surrounding enemies.'
                        }
                    ],
                    cost: '9214',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Nicolas',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Nicolas-3-star.png?itok=55nb2vJa',
            description: "A student of the Caldia Magic Academy with a knack for study who sits at the top of his class. Once something snares his interest, he quickly becomes obsessed. He located the castle during field research and claims it's a valuable find.",
            cv: ['Dave Rochford', 'Ayumu Murase'],
            title: 'Walking Encyclopedia',
            rarity: '3',
            element: 'Wind',
            weapon: 'Wand',
            role: 'Attack',
            atk: '486',
            hp: '711',
            coability: {
                name: 'Skill Damage +2%',
                baseEffect: 'Increases attack skill damage by 2%. Benefits your whole team.',
                upgrades: [
                    'Increases attack skill damage by 5%. Benefits your whole team.',
                    'Increases attack skill damage by 8%. Benefits your whole team.',
                    'Increases attack skill damage by 11%. Benefits your whole team.',
                    'Increases attack skill damage by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Healing Doublebuff I',
                        effect: 'Grants an HP regen buff for 20 seconds each time a defense up buff is received.'
                    },
                    {
                        name: 'Healing Doublebuff II',
                        effect: 'Grants an HP regen buff for 20 seconds each time a defense up buff is received.'
                    }
                ],
                [
                    {
                        name: 'Freeze Res +25%',
                        effect: 'Reduces susceptibility to freezing by 25%.'
                    },
                    {
                        name: 'Freeze Res +50%',
                        effect: 'Reduces susceptibility to freezing by 50%.'
                    }
                ],
                [
                    {
                        name: 'Freeze Res +25%',
                        effect: 'Reduces susceptibility to freezing by 25%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Wind Spell',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals wind damage to the target and nearby enemies.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals wind damage to the target and nearby enemies.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals wind damage to the target and nearby enemies.'
                        }
                    ],
                    cost: '2785',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Storm Spell',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals wind damage to enemies in a line.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals wind damage to enemies in a line, and inflicts stun.'
                        }
                    ],
                    cost: '5518',
                    regen: 'None',
                    iframe: 'Short'
                }
            ]
        }
        ,
        {
            name: 'Jakob',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-02/Jakob-3-star.png?itok=2kqjncxD',
            description: 'Always putting his friends first, this mercenary is awkward with words, but expressive in action. He trains relentlessly for battle each day, but is currently torn by a new emotion—love.',
            cv: ['Connor Mackenzie', 'Toshiki Masuda'],
            title: 'Quiet Mercenary',
            rarity: '3',
            element: 'Water',
            weapon: 'Lance',
            role: 'Defense',
            atk: '437',
            hp: '790',
            coability: {
                name: 'HP +5%',
                baseEffect: 'Increases HP by 5%. Benefits your whole team.',
                upgrades: [
                    'Increases HP by 7%. Benefits your whole team.',
                    'Increases HP by 9%. Benefits your whole team.',
                    'Increases HP by 12%. Benefits your whole team.',
                    'Increases HP by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Skill Prep +25%',
                        effect: 'Fills 25% of skill gauges at the start of quests.'
                    },
                    {
                        name: 'Skill Prep +50%',
                        effect: 'Fills 50% of skill gauges at the start of quests.'
                    }
                ],
                [
                    {
                        name: 'Burn Res +25%',
                        effect: 'Reduces susceptibility to burning by 25%.'
                    },
                    {
                        name: 'Burn Res +50%',
                        effect: 'Reduces susceptibility to burning by 50%.'
                    }
                ],
                [
                    {
                        name: 'Burn Res +25%',
                        effect: 'Reduces susceptibility to burning by 25%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Chain Sting',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals water damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals water damage to enemies directly ahead, and inflicts bog.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals water damage to enemies directly ahead, and inflicts bog.'
                        }
                    ],
                    cost: '2581',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Mercenary Guard',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Increases the entire team's defense by 10% for 15 seconds."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Increases the entire team's defense by 15% for 15 seconds."
                        }
                    ],
                    cost: '7633',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Celliera',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Celliera-4-star_0.png?itok=eCQrZC1c',
            description: "A woman who trains nobles in the way of the blade. Though thought of as a kind older sister, her ferocity is unleashed once lessons begin. But that's just another side of her sisterly love, as she desires her students to become strong.",
            cv: ['Michelle Schloff', 'Yoko Hikasa'],
            title: 'Hot-Blooded Instructor',
            rarity: '4',
            element: 'Water',
            weapon: 'Blade',
            role: 'Attack',
            atk: '492',
            hp: '706',
            coability: {
                name: 'Strength +3%',
                baseEffect: 'Increases strength by 3%. Benefits your whole team.',
                upgrades: [
                    'Increases strength by 4%. Benefits your whole team.',
                    'Increases strength by 5%. Benefits your whole team.',
                    'Increases strength by 7%. Benefits your whole team.',
                    'Increases strength by 10%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: "Thaumian's Bane +20%",
                        effect: 'Increases damage to thaumians by 20%.'
                    },
                    {
                        name: "Thaumian's Bane +25%",
                        effect: 'Increases damage to thaumians by 25%.'
                    }
                ],
                [
                    {
                        name: 'Burn Res +25%',
                        effect: 'Reduces susceptibility to burning by 25%.'
                    },
                    {
                        name: 'Burn Res +50%',
                        effect: 'Reduces susceptibility to burning by 50%.'
                    }
                ],
                [
                    {
                        name: 'HP 70% = Strength +8%',
                        effect: 'Increases strength by 8% when HP is 70% or above.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Ardent Stream',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals water damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals water damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals water damage to enemies directly ahead.'
                        }
                    ],
                    cost: '2537',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: "Winter's Blade",
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: `Increases the user's strength by 20%, and causes the "Ardent Stream" skill to inflict freeze for 10 seconds.`
                        },
                        {
                            level: 'Lvl 2',
                            description: `Increases the user's strength by 25%, and causes the "Ardent Stream" skill to inflict freeze for 10 seconds.`
                        }
                    ],
                    cost: '4877',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Althemia',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Althemia-3-star.png?itok=Z80BIY3A',
            description: "A young woman who's shy around new people. She speaks at length about her research but is otherwise inarticulate, and she often acts snooty to hide her embarrassment. Though passionate about her research, she lacks social skills.",
            cv: ['Tabitha St. Germain', 'Kana Ueda'],
            title: 'Timid Researcher',
            rarity: '3',
            element: 'Shadow',
            weapon: 'Wand',
            role: 'Support',
            atk: '465',
            hp: '745',
            coability: {
                name: 'Skill Damage +2%',
                baseEffect: 'Increases attack skill damage by 2%. Benefits your whole team.',
                upgrades: [
                    'Increases attack skill damage by 5%. Benefits your whole team.',
                    'Increases attack skill damage by 8%. Benefits your whole team.',
                    'Increases attack skill damage by 11%. Benefits your whole team.',
                    'Increases attack skill damage by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Full HP = Skill Damage +25%',
                        effect: 'Increases attack skill damage by 25% when HP is full.'
                    },
                    {
                        name: 'Full HP = Skill Damage +30%',
                        effect: 'Increases attack skill damage by 30% when HP is full.'
                    }
                ],
                [
                    {
                        name: 'Paralysis Res +25%',
                        effect: 'Reduces susceptibility to paralysis by 25%.'
                    },
                    {
                        name: 'Paralysis Res +50%',
                        effect: 'Reduces susceptibility to paralysis by 50%.'
                    }
                ],
                [
                    {
                        name: 'Paralysis Res +25%',
                        effect: 'Reduces susceptibility to paralysis by 25%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Endless Nightmare',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals shadow damage to enemies in a line.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals shadow damage to enemies in a line.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals shadow damage to enemies in a line.'
                        }
                    ],
                    cost: '2759',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Dark Abyss',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals shadow damage to the target and nearby enemies.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals shadow damage to the target and nearby enemies.'
                        }
                    ],
                    cost: '5570',
                    regen: 'None',
                    iframe: 'Short'
                }
            ]
        }
        ,
        {
            name: 'Xuan Zang',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-05/Xuan%20Zang-4-star.png?itok=FNCvPF6T',
            description: 'A Qilin sealer on a journey to seal dangerous ancient relics. Though generally kind, her anger can be fearsome—something her student Wu Kong knows better than most.',
            cv: ['Kitana Belle Pavlik', 'Haruka Tomatsu'],
            title: 'Erudite Sealer',
            rarity: '4',
            element: 'Flame',
            weapon: 'Lance',
            role: 'Support',
            atk: '461',
            hp: '749',
            coability: {
                name: 'HP +7%',
                baseEffect: 'Increases HP by 7%. Benefits your whole team.',
                upgrades: [
                    'Increases HP by 8%. Benefits your whole team.',
                    'Increases HP by 9%. Benefits your whole team.',
                    'Increases HP by 12%. Benefits your whole team.',
                    'Increases HP by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: "Demihuman's Bane +20%",
                        effect: 'Increases damage to demihumans by 20%.'
                    },
                    {
                        name: "Demihuman's Bane +25%",
                        effect: 'Increases damage to demihumans by 25%.'
                    }
                ],
                [
                    {
                        name: 'Stun Res +25%',
                        effect: 'Reduces susceptibility to stun by 25%.'
                    },
                    {
                        name: 'Stun Res +50%',
                        effect: 'Reduces susceptibility to stun by 50%.'
                    }
                ],
                [
                    {
                        name: 'HP 70% = Critical Rate +6%',
                        effect: 'Increases critical rate by 6% when HP is 70% or above.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Flame Incursion',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals flame damage to enemies directly ahead. Debuffed foes take extra damage.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals flame damage to enemies directly ahead. Debuffed foes take extra damage.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals flame damage to enemies directly ahead. Debuffed foes take extra damage.'
                        }
                    ],
                    cost: '2707',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: "Heaven's Binding",
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Reduces the strength of the target and nearby enemies by 3%, and their defense by 8%, for 20 seconds.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Reduces the strength of the target and nearby enemies by 5%, and their defense by 10%, for 20 seconds.'
                        }
                    ],
                    cost: '6000',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Vida',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Vida-3-star_0.png?itok=KEvLG77F',
            description: "A greenhorn thief and master lockpicker in search of a storied knife. She's infatuated with legends, and demanded to explore the Windwyrm's castle because it resembles a citadel from an ancient tale.",
            cv: ['Arlow Laker', 'Ayumi Fujimura'],
            title: 'Knife Fanatic',
            rarity: '3',
            element: 'Shadow',
            weapon: 'Dagger',
            role: 'Support',
            atk: '453',
            hp: '757',
            coability: {
                name: 'Critical Rate +1%',
                baseEffect: 'Increases critical rate by 1%. Benefits your whole team.',
                upgrades: [
                    'Increases critical rate by 3%. Benefits your whole team.',
                    'Increases critical rate by 5%. Benefits your whole team.',
                    'Increases critical rate by 7%. Benefits your whole team.',
                    'Increases critical rate by 10%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Force Strike +20%',
                        effect: 'Increases force strike damage by 20%.'
                    },
                    {
                        name: 'Force Strike +30%',
                        effect: 'Increases force strike damage by 30%.'
                    }
                ],
                [
                    {
                        name: 'Stun Res +25%',
                        effect: 'Reduces susceptibility to stun by 25%.'
                    },
                    {
                        name: 'Stun Res +50%',
                        effect: 'Reduces susceptibility to stun by 50%.'
                    }
                ],
                [
                    {
                        name: 'Stun Res +25%',
                        effect: 'Reduces susceptibility to stun by 25%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Shadow Slash',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals shadow damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals shadow damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals shadow damage to enemies directly ahead.'
                        }
                    ],
                    cost: '2446',
                    regen: 'None',
                    iframe: 'Short'
                },
                {
                    name: 'Scheming Slice',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Activates "Blinding Knives." For the next three force strikes, the user will throw special knives that deal damage and may inflict blindness.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Activates "Blinding Knives." For the next three force strikes, the user will throw special knives that deal damage and may inflict blindness.'
                        }
                    ],
                    cost: '5315',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Vice',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Vice-3-star.png?itok=7PjkVLzC',
            description: "An assassin who lives in darkness and markets himself as a tool of death. He's recently been worried about a lack of jobs—although he learned to cook in order to poison targets and would probably make a fantastic chef.",
            cv: ['Don Mathews', 'Kenichi Suzumura'],
            title: 'Eager Assassin',
            rarity: '3',
            element: 'Shadow',
            weapon: 'Dagger',
            role: 'Support',
            atk: '453',
            hp: '757',
            coability: {
                name: 'Critical Rate +1%',
                baseEffect: 'Increases critical rate by 1%. Benefits your whole team.',
                upgrades: [
                    'Increases critical rate by 3%. Benefits your whole team.',
                    'Increases critical rate by 5%. Benefits your whole team.',
                    'Increases critical rate by 7%. Benefits your whole team.',
                    'Increases critical rate by 10%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Broken Punisher +15%',
                        effect: 'Increases damage to enemies in break state by 15%.'
                    },
                    {
                        name: 'Broken Punisher +20%',
                        effect: 'Increases damage to enemies in break state by 20%.'
                    }
                ],
                [
                    {
                        name: 'Blindness Res +25%',
                        effect: 'Reduces susceptibility to blindness by 25%.'
                    },
                    {
                        name: 'Blindness Res +50%',
                        effect: 'Reduces susceptibility to blindness by 50%.'
                    }
                ],
                [
                    {
                        name: 'Blindness Res +25%',
                        effect: 'Reduces susceptibility to blindness by 25%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Fatal Blow',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals shadow damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals shadow damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals shadow damage to enemies directly ahead.'
                        }
                    ],
                    cost: '2257',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Lethal Edge',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals shadow damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals shadow damage to enemies directly ahead, and inflicts sleep.'
                        }
                    ],
                    cost: '4892',
                    regen: 'None',
                    iframe: 'Short'
                }
            ]
        }
        ,
        {
            name: 'Patia',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-09/110335_01_r04.png?itok=LrC1F2ZO',
            description: "A young woman who serves as Vice Captain of the Kingdom of Alberia's White Sparrow Corps, and the right-hand woman of Captain Leif. She specializes in nimble attacks, but her sense of justice often makes her charge into the fray.",
            cv: ['Sarah Troyer', 'Miyuki Satou'],
            title: 'Spirited Swallow',
            rarity: '4',
            element: 'Shadow',
            weapon: 'Lance',
            role: 'Defense',
            atk: '448',
            hp: '801',
            coability: {
                name: 'HP +7%',
                baseEffect: 'Increases HP by 7%. Benefits your whole team.',
                upgrades: [
                    'Increases HP by 8%. Benefits your whole team.',
                    'Increases HP by 9%. Benefits your whole team.',
                    'Increases HP by 12%. Benefits your whole team.',
                    'Increases HP by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Buff Time +20%',
                        effect: 'Increases duration of buff skills by 20%.'
                    },
                    {
                        name: 'Buff Time +25%',
                        effect: 'Increases duration of buff skills by 25%.'
                    }
                ],
                [
                    {
                        name: 'Paralysis Res +50%',
                        effect: 'Reduces susceptibility to paralysis by 50%.'
                    },
                    {
                        name: 'Paralysis Res +100%',
                        effect: 'Reduces susceptibility to paralysis by 100%.'
                    }
                ],
                [
                    {
                        name: 'Primed Devastation +5%',
                        effect: 'Increases the critical rate of the adventurer you are currently controlling by 5% for 5 seconds every time their initial skill, displayed at the top of their skill list, becomes available for use. After activating, this ability will not activate again for 15 seconds.'
                    }
                ]
            ],
            skills: [
                {
                    name: "Sparrow's Guard",
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Increases the entire team's defense by 15% for 15 seconds."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Increases the entire team's defense by 20% for 15 seconds."
                        },
                        {
                            level: 'Lvl 3',
                            description: "Increases the entire team's defense by 25% for 15 seconds."
                        }
                    ],
                    cost: '4367',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Swift Skewer',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals shadow damage to the target and nearby enemies, and inflicts bleeding.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals shadow damage to the target and nearby enemies, and inflicts bleeding.'
                        }
                    ],
                    cost: '5157',
                    regen: 'None',
                    iframe: 'Long'
                }
            ]
        }
        ,
        {
            name: 'Nurse Aeleen',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-05/Nurse%20Aeleen-4-star.png?itok=i9BXptAa',
            description: 'A knight who, at long last, has overcome her fears and taken on a new role as a nurse. Her bedside manner and knowledge of herbs are impeccable—but can she keep her other personality at bay?',
            cv: ['Brittney Boni', 'Ayumi Fujimura'],
            title: 'Battle-Tested Nurse',
            rarity: '4',
            element: 'Water',
            weapon: 'Staff',
            role: 'Healing',
            atk: '452',
            hp: '784',
            coability: {
                name: 'Recovery Potency +6%',
                baseEffect: 'Increases the potency of recovery skills by 6%. Benefits your whole team.',
                upgrades: [
                    'Increases the potency of recovery skills by 8%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 10%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 14%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 20%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Skill Prep +50%',
                        effect: 'Fills 50% of skill gauges at the start of quests.'
                    },
                    {
                        name: 'Skill Prep +75%',
                        effect: 'Fills 75% of skill gauges at the start of quests.'
                    }
                ],
                [
                    {
                        name: 'Stun Res +50%',
                        effect: 'Reduces susceptibility to stun by 50%.'
                    },
                    {
                        name: 'Stun Res +100%',
                        effect: 'Reduces susceptibility to stun by 100%.'
                    }
                ],
                [
                    {
                        name: 'United Haste I',
                        effect: 'Increases skill gauge fill rate relative to the number of active team members. The more active members, the greater the increase will be.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Medicinal Cure',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: `Restores HP to all allies, continues healing over the next 15 seconds, and activates "Skill Shift." Phase II adds an additional 8% increase to the entire team's defense for 5 seconds, while Phase III adds an additional 5% increase to the team's strength for 10 seconds.`
                        },
                        {
                            level: 'Lvl 2',
                            description: `Restores HP to all allies, continues healing over the next 15 seconds, and activates "Skill Shift." Phase II adds an additional 10% increase to the entire team's defense for 5 seconds, while Phase III adds an additional 8% increase to the team's strength for 10 seconds.`
                        },
                        {
                            level: 'Lvl 3',
                            description: `Restores HP to all allies, continues healing over the next 15 seconds, and activates "Skill Shift." Phase II adds an additional 15% increase to the entire team's defense for 5 seconds, while Phase III adds an additional 10% increase to the team's strength for 10 seconds.`
                        }
                    ],
                    cost: '7888',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Naturopathy',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Restores HP to the user and nearby allies, and removes stun.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Restores HP to the user and nearby allies, and removes stun.'
                        }
                    ],
                    cost: '11832',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Summer Luca',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-08/100006_03_r04.png?itok=m15_uY7i',
            description: "Coming to the beach with his friends has Luca more amped than ever—and no one is going to slow him down. Whether it's ball games, playing in the water, or building sandcastles, he's intent on having the most fun possible.",
            cv: ['Will Weldon', 'Shintaro Asanuma'],
            title: 'Prankster in Paradise',
            rarity: '4',
            element: 'Light',
            weapon: 'Axe',
            role: 'Attack',
            atk: '498',
            hp: '724',
            coability: {
                name: 'Defense +7%',
                baseEffect: 'Increases defense by 7%. Benefits your whole team.',
                upgrades: [
                    'Increases defense by 8%. Benefits your whole team.',
                    'Increases defense by 9%. Benefits your whole team.',
                    'Increases defense by 11%. Benefits your whole team.',
                    'Increases defense by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'HP 70% = Strength +8%',
                        effect: 'Increases strength by 8% when HP is 70% or above.'
                    },
                    {
                        name: 'HP 70% = Strength +10%',
                        effect: 'Increases strength by 10% when HP is 70% or above.'
                    }
                ],
                [
                    {
                        name: 'Curse Res +50%',
                        effect: 'Reduces susceptibility to curses by 50%.'
                    },
                    {
                        name: 'Curse Res +100%',
                        effect: 'Reduces susceptibility to curses by 100%.'
                    }
                ],
                [
                    {
                        name: 'Extra Energy I',
                        effect: "Grants a 40% chance that a user's energy level will increase by an additional stage upon being increased."
                    }
                ]
            ],
            skills: [
                {
                    name: 'Floatie Spin',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals light damage to enemies in a line.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals light damage to enemies in a line.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals light damage to enemies in a line.'
                        }
                    ],
                    cost: '3072',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Summer Spirit',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Increases the user's energy level by one stage, and attack rate by 15% for 10 seconds. When an adventurer's energy level reaches level five, they will become energized, and their next attack or recovery skill will be upgraded. At this point, using any applicable skill will reset that adventurer's energy level to zero."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Increases the user's energy level by one stage, and attack rate by 20% for 10 seconds. When an adventurer's energy level reaches level five, they will become energized, and their next attack or recovery skill will be upgraded. At this point, using any applicable skill will reset that adventurer's energy level to zero."
                        }
                    ],
                    cost: '4638',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Wedding Aoi',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-06/110002_02_r05.png?itok=42Q3DUVC',
            description: `Aoi is practicing so-called "ninja bride" skills in a Hinomoto-style wedding dress. Her new outfit isn't ideal for living in the shadows, but it opens up a number of intriguing possibilities. She's set on wearing a similar dress at her own wedding.`,
            cv: ['Kelly Davidson', 'Reina Ueda'],
            title: 'Ninja Bride',
            rarity: '5',
            element: 'Wind',
            weapon: 'Dagger',
            role: 'Support',
            atk: '475',
            hp: '800',
            coability: {
                name: 'Critical Rate +5%',
                baseEffect: 'Increases critical rate by 5%. Benefits your whole team.',
                upgrades: [
                    'Increases critical rate by 6%. Benefits your whole team.',
                    'Increases critical rate by 7%. Benefits your whole team.',
                    'Increases critical rate by 8%. Benefits your whole team.',
                    'Increases critical rate by 10%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Sleep = Team Strength +10%',
                        effect: "Buffs the entire team's strength by 10% for 10 seconds upon successfully putting an enemy to sleep. After activating, this ability will not activate again for five seconds."
                    },
                    {
                        name: 'Sleep = Team Strength +15%',
                        effect: "Buffs the entire team's strength by 15% for 10 seconds upon successfully putting an enemy to sleep. After activating, this ability will not activate again for five seconds."
                    }
                ],
                [
                    {
                        name: 'Freeze Res +50%',
                        effect: 'Reduces susceptibility to freezing by 50%.'
                    },
                    {
                        name: 'Freeze Res +100%',
                        effect: 'Reduces susceptibility to freezing by 100%.'
                    }
                ],
                [
                    {
                        name: 'Striking Haste +10%',
                        effect: "Increases skill gauge fill rate by 10% when the user's force strikes connect."
                    },
                    {
                        name: 'Striking Haste +12%',
                        effect: "Increases skill gauge fill rate by 12% when the user's force strikes connect."
                    }
                ]
            ],
            skills: [
                {
                    name: 'Ninja Bride Sweep',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals wind damage to enemies directly ahead, draws them toward the user, and inflicts sleep.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals wind damage to enemies directly ahead, draws them toward the user, and inflicts sleep.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals wind damage to enemies directly ahead, draws them toward the user, and inflicts sleep.'
                        }
                    ],
                    cost: '2401',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Ninja Bride Sunshower',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals wind damage to enemies directly ahead, and restores HP to all allies. Sleeping foes take extra damage.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals wind damage to enemies directly ahead, and restores HP to all allies. Sleeping foes take extra damage.'
                        }
                    ],
                    cost: '4400',
                    regen: 'None',
                    iframe: 'Short'
                }
            ]
        }
        ,
        {
            name: 'Kleimann',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Kleimann-4-star.png?itok=wdLSWjna',
            description: "A magic scholar fixated on research who has no interest in what others have to say. This disinterest—combined with the mask he wears— makes his true nature a mystery. However, he's always quick to act when necessary.",
            cv: ['Eddie Dean', 'Unsho Ishizuka'],
            title: 'Mad Scientist',
            rarity: '4',
            element: 'Shadow',
            weapon: 'Wand',
            role: 'Support',
            atk: '474',
            hp: '761',
            coability: {
                name: 'Skill Damage +5%',
                baseEffect: 'Increases attack skill damage by 5%. Benefits your whole team.',
                upgrades: [
                    'Increases attack skill damage by 6%. Benefits your whole team.',
                    'Increases attack skill damage by 8%. Benefits your whole team.',
                    'Increases attack skill damage by 11%. Benefits your whole team.',
                    'Increases attack skill damage by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Force Strike +30%',
                        effect: 'Increases force strike damage by 30%.'
                    },
                    {
                        name: 'Force Strike +40%',
                        effect: 'Increases force strike damage by 40%.'
                    }
                ],
                [
                    {
                        name: 'Blindness Res +50%',
                        effect: 'Reduces susceptibility to blindness by 50%.'
                    },
                    {
                        name: 'Blindness Res +100%',
                        effect: 'Reduces susceptibility to blindness by 100%.'
                    }
                ],
                [
                    {
                        name: 'Skill Damage +20%',
                        effect: 'Increases attack skill damage by 20%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Shadowshackle',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals shadow damage to enemies in a line.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals shadow damage to enemies in a line.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals shadow damage to enemies in a line.'
                        }
                    ],
                    cost: '2854',
                    regen: 'None',
                    iframe: 'Short'
                },
                {
                    name: 'Forbidden Sphere',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals shadow damage to the target and nearby enemies.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals shadow damage to the target and nearby enemies, and inflicts sleep.'
                        }
                    ],
                    cost: '7090',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Francesca',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Francesca-3-star.png?itok=flpM91Oi',
            description: 'A competent delivery girl who travels the world on her own terms dispensing impeccable intel— all while wearing a trademark hat that covers her sylvan ears. Each day is a journey that adds a bold new chapter to her travel diary.',
            cv: ['Kazumi Evans', 'Maaya Sakamoto'],
            title: 'Cheerful Merchant',
            rarity: '3',
            element: 'Wind',
            weapon: 'Dagger',
            role: 'Support',
            atk: '451',
            hp: '760',
            coability: {
                name: 'Critical Rate +1%',
                baseEffect: 'Increases critical rate by 1%. Benefits your whole team.',
                upgrades: [
                    'Increases critical rate by 3%. Benefits your whole team.',
                    'Increases critical rate by 5%. Benefits your whole team.',
                    'Increases critical rate by 7%. Benefits your whole team.',
                    'Increases critical rate by 10%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Force Strike +20%',
                        effect: 'Increases force strike damage by 20%.'
                    },
                    {
                        name: 'Force Strike +30%',
                        effect: 'Increases force strike damage by 30%.'
                    }
                ],
                [
                    {
                        name: 'Bog Res +25%',
                        effect: 'Reduces susceptibility to bog by 25%.'
                    },
                    {
                        name: 'Bog Res +50%',
                        effect: 'Reduces susceptibility to bog by 50%.'
                    }
                ],
                [
                    {
                        name: 'Bog Res +25%',
                        effect: 'Reduces susceptibility to bog by 25%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Peregrine Blade',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals wind damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals wind damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals wind damage to enemies directly ahead.'
                        }
                    ],
                    cost: '2257',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Windwhistler',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals wind damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals wind damage to enemies directly ahead, and reduces their defense by 5%.'
                        }
                    ],
                    cost: '4892',
                    regen: 'None',
                    iframe: 'Short'
                }
            ]
        }
        ,
        {
            name: 'Yuya',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-11/110344_01_r04.png?itok=22QGcS14',
            description: ' - ',
            cv: ['Aidan Drummond', 'Mutsumi Tamura'],
            title: 'Rebellious Rider',
            rarity: '4',
            element: 'Flame',
            weapon: 'Dagger',
            role: 'Support',
            atk: '461',
            hp: '774',
            coability: {
                name: 'Critical Rate +3%',
                baseEffect: 'Increases critical rate by 3%. Benefits your whole team.',
                upgrades: [
                    'Increases critical rate by 4%. Benefits your whole team.',
                    'Increases critical rate by 5%. Benefits your whole team.',
                    'Increases critical rate by 7%. Benefits your whole team.',
                    'Increases critical rate by 10%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Chicken at Heart I',
                        effect: 'Increases strength by 15% when HP is 60% or above, but decreases strength by 20% when HP is less than 60%.'
                    },
                    {
                        name: 'Chicken at Heart II',
                        effect: 'Increases strength by 20% when HP is 60% or above, but decreases strength by 20% when HP is less than 60%.'
                    }
                ],
                [
                    {
                        name: 'Stun Res +50%',
                        effect: 'Reduces susceptibility to stun by 50%.'
                    },
                    {
                        name: 'Stun Res +100%',
                        effect: 'Reduces susceptibility to stun by 100%.'
                    }
                ],
                [
                    {
                        name: 'Primed Devastation +5%',
                        effect: 'Increases the critical rate of the adventurer you are currently controlling by 5% for 5 seconds every time their initial skill, displayed at the top of their skill list, becomes available for use. After activating, this ability will not activate again for 15 seconds.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Deadly Joyride',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Deals flame damage to enemies directly ahead, and increases the user's attack rate by 10% for 10 seconds. Changing direction is possible during the attack."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Deals flame damage to enemies directly ahead, and increases the user's attack rate by 15% for 10 seconds. Changing direction is possible during the attack."
                        },
                        {
                            level: 'Lvl 3',
                            description: "Deals flame damage to enemies directly ahead, and increases the user's attack rate by 20% for 10 seconds. Changing direction is possible during the attack."
                        }
                    ],
                    cost: '4192',
                    regen: 'None',
                    iframe: 'Long'
                },
                {
                    name: 'Rowdy Rumbler',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Increases the entire team's defense by 10% for 15 seconds, and grants all teammates a one-use shield that nullifies damage less than 15% of the user's maximum HP. This does not stack with any other shields."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Increases the entire team's defense by 10% for 15 seconds, and grants all teammates a one-use shield that nullifies damage less than 20% of the user's maximum HP. This does not stack with any other shields."
                        }
                    ],
                    cost: '10894',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Leif',
            image: 'https://gamepress.ggundefined',
            description: 'The decorated captain of the Alberian Royal Knights, otherwise known as the White Sparrow. After his beloved country became an empire, he was left unsure how to best serve it. Often advised Euden.',
            cv: ["William O'Keeffe", 'Takahiro Sakurai'],
            title: ' - ',
            rarity: '5',
            element: 'Light',
            weapon: 'Sword',
            role: 'Support',
            atk: '478',
            hp: '798',
            coability: {name: '', baseEffect: '', upgrades: []},
            abilities: [
                [{name: '', effect: ''}, {name: '', effect: ''}],
                [{name: '', effect: ''}, {name: '', effect: ''}],
                [{name: '', effect: ''}]
            ],
            skills: [
                {
                    name: 'Defensive Formation',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Increases the entire team's defense by 10% for 15 seconds."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Increases the entire team's defense by 15% for 15 seconds."
                        },
                        {level: 'Lvl 3', description: ''}
                    ],
                    cost: '7633',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: '',
                    levels: [
                        {level: 'Lvl 1', description: ''},
                        {level: 'Lvl 2', description: ''}
                    ],
                    cost: '',
                    regen: 'None',
                    iframe: ''
                }
            ]
        }
        ,
        {
            name: 'Jurota',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Jurota-3-star.png?itok=Lv-JQQWA',
            description: 'A nonchalant ninja from a foreign land whose loyalty is absolute. He views such loyalty as a measure of his own willpower and has been known to strike down traitors without hesitation.',
            cv: ['Will Weldon', 'Kengo Kawanishi'],
            title: 'Solemn Stalwart',
            rarity: '3',
            element: 'Water',
            weapon: 'Blade',
            role: 'Attack',
            atk: '492',
            hp: '706',
            coability: {
                name: 'Strength +1%',
                baseEffect: 'Increases strength by 1%. Benefits your whole team.',
                upgrades: [
                    'Increases strength by 3%. Benefits your whole team.',
                    'Increases strength by 5%. Benefits your whole team.',
                    'Increases strength by 7%. Benefits your whole team.',
                    'Increases strength by 10%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Broken Punisher +15%',
                        effect: 'Increases damage to enemies in break state by 15%.'
                    },
                    {
                        name: 'Broken Punisher +20%',
                        effect: 'Increases damage to enemies in break state by 20%.'
                    }
                ],
                [
                    {
                        name: 'Stun Res +25%',
                        effect: 'Reduces susceptibility to stun by 25%.'
                    },
                    {
                        name: 'Stun Res +50%',
                        effect: 'Reduces susceptibility to stun by 50%.'
                    }
                ],
                [
                    {
                        name: 'Stun Res +25%',
                        effect: 'Reduces susceptibility to stun by 25%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Avalanche Blade',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals water damage to enemies in a line.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals water damage to enemies in a line.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals water damage to enemies in a line.'
                        }
                    ],
                    cost: '2640',
                    regen: 'None',
                    iframe: 'Short'
                },
                {
                    name: "Yasha's Brand",
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Increases the user's strength by 20% for 5 seconds."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Increases the user's strength by 25% for 5 seconds."
                        }
                    ],
                    cost: '4101',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Cassandra',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-09/110337_01_r05.png?itok=jPtyVowY',
            description: "A former royal court sorceress with a carefree personality who served Aurelius from the time of his childhood in both an official and personal capacity. Her greatest concern is now the prince. While she looks young, she's actually over 60.",
            cv: ['Cherilynn Fulbright', 'Ryoka Yuzuki'],
            title: 'Sorrowful Royal Magician',
            rarity: '5',
            element: 'Shadow',
            weapon: 'Wand',
            role: 'Attack',
            atk: '514',
            hp: '745',
            coability: {
                name: 'Skill Damage +8%',
                baseEffect: 'Increases attack skill damage by 8%. Benefits your whole team.',
                upgrades: [
                    'Increases attack skill damage by 9%. Benefits your whole team.',
                    'Increases attack skill damage by 11%. Benefits your whole team.',
                    'Increases attack skill damage by 12%. Benefits your whole team.',
                    'Increases attack skill damage by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Skill Prep +75%',
                        effect: 'Fills 75% of skill gauges at the start of quests.'
                    },
                    {
                        name: 'Skill Prep +100%',
                        effect: 'Fills 100% of skill gauges at the start of quests.'
                    }
                ],
                [
                    {
                        name: 'Paralysis Res +50%',
                        effect: 'Reduces susceptibility to paralysis by 50%.'
                    },
                    {
                        name: 'Paralysis Res +100%',
                        effect: 'Reduces susceptibility to paralysis by 100%.'
                    }
                ],
                [
                    {
                        name: 'Resilient Offense +8%',
                        effect: "Increases strength by 8% for the remainder of the quest when the user's HP drops to 30% (three times per quest)."
                    },
                    {
                        name: 'Resilient Offense +10%',
                        effect: "Increases strength by 10% for the remainder of the quest when the user's HP drops to 30% (three times per quest)."
                    }
                ]
            ],
            skills: [
                {
                    name: 'Umbral Assault',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Deals shadow damage to enemies directly ahead, and increases the user's max HP by 5% for the remainder of the quest. Once HP buffs reach the limit, an HP recovery effect is granted instead."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Deals shadow damage to enemies directly ahead, and increases the user's max HP by 5% for the remainder of the quest. Once HP buffs reach the limit, an HP recovery effect is granted instead."
                        },
                        {
                            level: 'Lvl 3',
                            description: "Deals shadow damage to enemies directly ahead, and increases the user's max HP by 5% for the remainder of the quest. Once HP buffs reach the limit, an HP recovery effect is granted instead."
                        }
                    ],
                    cost: '2919',
                    regen: 'None',
                    iframe: 'Short'
                },
                {
                    name: 'Violet Uproar',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Summons "Twilight Wreath," then deals shadow damage to the target and nearby enemies. Additional bonus damage will be dealt relative to the damage taken while "Twilight Wreath" is active.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Summons "Twilight Wreath," then deals shadow damage to the target and nearby enemies. Additional bonus damage will be dealt relative to the damage taken while "Twilight Wreath" is active.'
                        }
                    ],
                    cost: '4935',
                    regen: 'None',
                    iframe: 'Long'
                }
            ]
        }
        ,
        {
            name: 'Norwin',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-05/Norwin-4-star_1.png?itok=SN1zjvcc',
            description: 'A traveling picture-book author who loves reading stories to children. Despite his best efforts, though, all of his stories have bad endings. What sort of past trauma could be responsible?',
            cv: ['Adrian Petriw', 'Yuki Kaji'],
            title: 'Anguished Author',
            rarity: '4',
            element: 'Shadow',
            weapon: 'Bow',
            role: 'Attack',
            atk: '480',
            hp: '738',
            coability: {
                name: 'Skill Haste +5%',
                baseEffect: 'Increases skill gauge fill rate by 5%. Benefits your whole team.',
                upgrades: [
                    'Increases skill gauge fill rate by 6%. Benefits your whole team.',
                    'Increases skill gauge fill rate by 8%. Benefits your whole team.',
                    'Increases skill gauge fill rate by 11%. Benefits your whole team.',
                    'Increases skill gauge fill rate by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Blindness = Team Strength +8%',
                        effect: "Buffs the entire team's strength by 8% for 10 seconds upon successfully blinding an enemy. After activating, this ability will not activate again for five seconds."
                    },
                    {
                        name: 'Blindness = Team Strength +10%',
                        effect: "Buffs the entire team's strength by 10% for 10 seconds upon successfully blinding an enemy. After activating, this ability will not activate again for five seconds."
                    }
                ],
                [
                    {
                        name: 'Blindness Res +50%',
                        effect: 'Reduces susceptibility to blindness by 50%.'
                    },
                    {
                        name: 'Blindness Res +100%',
                        effect: 'Reduces susceptibility to blindness by 100%.'
                    }
                ],
                [
                    {
                        name: 'Blinded Punisher +20%',
                        effect: 'Increases damage to blinded enemies by 20%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Storybook Ending',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals shadow damage to the target.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals shadow damage to the target, and inflicts blindness.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals shadow damage to the target, and inflicts blindness.'
                        }
                    ],
                    cost: '2503',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Tragic Farce',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals shadow damage to enemies in a line.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals shadow damage to enemies in a line. Blinded foes take extra damage.'
                        }
                    ],
                    cost: '4716',
                    regen: 'None',
                    iframe: 'Long'
                }
            ]
        }
        ,
        {
            name: 'Summer Julietta',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-07/110042_02_r05.png?itok=Gb98E9B2',
            description: "Julietta has hit the sand in a swimsuit that matches her elegant aura, and she's now taking the beach by storm. Though many a gaze is focused on her, the only one she's concerned about belongs to...Elisanne?",
            cv: ['Kelly Davidson', 'Ai Kayano'],
            title: 'Paladyn in Paradise',
            rarity: '5',
            element: 'Water',
            weapon: 'Axe',
            role: 'Attack',
            atk: '516',
            hp: '745',
            coability: {
                name: 'Defense +9%',
                baseEffect: 'Increases defense by 9%. Benefits your whole team.',
                upgrades: [
                    'Increases defense by 10%. Benefits your whole team.',
                    'Increases defense by 11%. Benefits your whole team.',
                    'Increases defense by 12%. Benefits your whole team.',
                    'Increases defense by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Bog = Team Strength +8%',
                        effect: "Buffs the entire team's strength by 8% for 10 seconds upon successfully inflicting an enemy with bog. After activating, this ability will not activate again for five seconds."
                    },
                    {
                        name: 'Bog = Team Strength +10%',
                        effect: "Buffs the entire team's strength by 10% for 10 seconds upon successfully inflicting an enemy with bog. After activating, this ability will not activate again for five seconds."
                    }
                ],
                [
                    {
                        name: 'Stun Res +50%',
                        effect: 'Reduces susceptibility to stun by 50%.'
                    },
                    {
                        name: 'Stun Res +100%',
                        effect: 'Reduces susceptibility to stun by 100%.'
                    }
                ],
                [
                    {
                        name: 'Primed Strength +8%',
                        effect: 'Increases the strength of the adventurer you are currently controlling by 8% for 10 seconds every time their initial skill, displayed at the top of their skill list, becomes available for use. After activating, this ability will not activate again for 15 seconds.'
                    },
                    {
                        name: 'Primed Strength +10%',
                        effect: 'Increases the strength of the adventurer you are currently controlling by 10% for 10 seconds every time their initial skill, displayed at the top of their skill list, becomes available for use. After activating, this ability will not activate again for 15 seconds.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Sunny Flash',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals water damage to the target and nearby enemies, and inflicts bog.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals water damage to the target and nearby enemies, and inflicts bog.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals water damage to the target and nearby enemies, and inflicts bog.'
                        }
                    ],
                    cost: '3194',
                    regen: 'None',
                    iframe: 'Long'
                },
                {
                    name: 'Vacation Vigor',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: `Increases the user and nearby allies' strength by 15% for 15 seconds, and activates "Skill Shift." Phase II adds an additional 8% increase to the user and nearby allies' critical rate for 15 seconds, while Phase III also grants the user and nearby allies a one-use shield that nullifies damage less than 20% of the user's maximum HP. This does not stack with any other shields.`
                        },
                        {
                            level: 'Lvl 2',
                            description: `Increases the user and nearby allies' strength by 15% for 15 seconds, and activates "Skill Shift." Phase II adds an additional 10% increase to the user and nearby allies' critical rate for 15 seconds, while Phase III also grants the user and nearby allies a one-use shield that nullifies damage less than 30% of the user's maximum HP. This does not stack with any other shields.`
                        }
                    ],
                    cost: '7475',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Summer Estelle',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-07/110063_02_r04.png?itok=H3ppLbE1',
            description: 'She might have donned a cute swimsuit, but Estelle the preacher is still a stickler for rules. She patrols the beach with a custom-made megaphone, yelling at any who think being there is an excuse to run wild.',
            cv: ['Tabitha St. Germain', 'Minami Tanaka'],
            title: 'Beachside Preacher',
            rarity: '4',
            element: 'Water',
            weapon: 'Wand',
            role: 'Support',
            atk: '471',
            hp: '766',
            coability: {
                name: 'Skill Damage +5%',
                baseEffect: 'Increases attack skill damage by 5%. Benefits your whole team.',
                upgrades: [
                    'Increases attack skill damage by 6%. Benefits your whole team.',
                    'Increases attack skill damage by 8%. Benefits your whole team.',
                    'Increases attack skill damage by 11%. Benefits your whole team.',
                    'Increases attack skill damage by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: "Demihuman's Bane +20%",
                        effect: 'Increases damage to demihumans by 20%.'
                    },
                    {
                        name: "Demihuman's Bane +25%",
                        effect: 'Increases damage to demihumans by 25%.'
                    }
                ],
                [
                    {
                        name: 'Stun Res +25%',
                        effect: 'Reduces susceptibility to stun by 25%.'
                    },
                    {
                        name: 'Stun Res +50%',
                        effect: 'Reduces susceptibility to stun by 50%.'
                    }
                ],
                [
                    {
                        name: 'Buff Time +20%',
                        effect: 'Increases duration of buff skills by 20%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Seaside Punisher',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals water damage to target and nearby enemies, and reduces their defense by 5%.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals water damage to target and nearby enemies, and reduces their defense by 5%.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals water damage to target and nearby enemies, and reduces their defense by 5%.'
                        }
                    ],
                    cost: '2649',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Lifeguard Lift',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Increases the strength of water-attuned adventurers in the team by 10% for 15 seconds, and removes stun.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Increases the strength of water-attuned adventurers in the team by 15% for 15 seconds, and removes stun.'
                        }
                    ],
                    cost: '7634',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Summer Celliera',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-07/110255_02_r05.png?itok=_VRSqgYJ',
            description: "The armsmaster may have taken the beach by storm in a fashionable swimsuit, but she hasn't forgotten any of her fiery instructor's spirit. No amount of heat will interfere with her need to train—that's just how she enjoys her vacations!",
            cv: ['Michelle Schloff', 'Yoko Hikasa'],
            title: 'Avid Armsmaster',
            rarity: '5',
            element: 'Water',
            weapon: 'Sword',
            role: 'Support',
            atk: '479',
            hp: '797',
            coability: {
                name: 'Dragon Haste +8%',
                baseEffect: 'Increases dragon gauge fill rate by 8%. Benefits your whole team.',
                upgrades: [
                    'Increases dragon gauge fill rate by 9%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 11%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 12%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Strength Doublebuff +10%',
                        effect: 'Increases strength by 10% for 15 seconds each time a defense up buff is received.'
                    },
                    {
                        name: 'Strength Doublebuff +13%',
                        effect: 'Increases strength by 13% for 15 seconds each time a defense up buff is received.'
                    }
                ],
                [
                    {
                        name: 'Burn Res +50%',
                        effect: 'Reduces susceptibility to burning by 50%.'
                    },
                    {
                        name: 'Burn Res +100%',
                        effect: 'Reduces susceptibility to burning by 100%.'
                    }
                ],
                [
                    {
                        name: 'Buff Time +25%',
                        effect: 'Increases duration of buff skills by 25%.'
                    },
                    {
                        name: 'Buff Time +30%',
                        effect: 'Increases duration of buff skills by 30%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Ocean Fury',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals water damage to enemies directly ahead, and inflicts bog.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals water damage to enemies directly ahead, and inflicts bog.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals water damage to enemies directly ahead, and inflicts bog.'
                        }
                    ],
                    cost: '2649',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Pep Talk',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: `Deals water damage to surrounding enemies, increases the entire team's defense by 8% for 10 seconds, and activates "Skill Shift." Phase II adds an additional 8% increase to the entire team's strength for 10 seconds, while Phase III adds an additional 15% increase to the team's attack rate for 10 seconds.`
                        },
                        {
                            level: 'Lvl 2',
                            description: `Deals water damage to surrounding enemies, increases the entire team's defense by 10% for 10 seconds, and activates "Skill Shift." Phase II adds an additional 10% increase to the entire team's strength for 10 seconds, while Phase III adds an additional 20% increase to the team's attack rate for 10 seconds.`
                        }
                    ],
                    cost: '7641',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Wedding Xania',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-06/110004_02_r04.png?itok=ODl1JPjO',
            description: 'A young mage who has always longed to wear a wedding dress. She spends her time pondering the meaning of life and love, but keeps moving ever onward, believing the answers lie at the end of the road.',
            cv: ['Kelly Marie', 'Megumi Toyoguchi'],
            title: 'Magical Bride',
            rarity: '4',
            element: 'Wind',
            weapon: 'Staff',
            role: 'Healing',
            atk: '453',
            hp: '783',
            coability: {
                name: 'Recovery Potency +6%',
                baseEffect: 'Increases the potency of recovery skills by 6%. Benefits your whole team.',
                upgrades: [
                    'Increases the potency of recovery skills by 8%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 10%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 14%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 20%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Full HP = Healing +13%',
                        effect: 'Increases the potency of recovery skills by 13% when HP is full.'
                    },
                    {
                        name: 'Full HP = Healing +15%',
                        effect: 'Increases the potency of recovery skills by 15% when HP is full.'
                    }
                ],
                [
                    {
                        name: 'Freeze Res +50%',
                        effect: 'Reduces susceptibility to freezing by 50%.'
                    },
                    {
                        name: 'Freeze Res +100%',
                        effect: 'Reduces susceptibility to freezing by 100%.'
                    }
                ],
                [
                    {
                        name: 'Skill Prep +50%',
                        effect: 'Fills 50% of skill gauges at the start of quests.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Dream Wedding',
                    levels: [
                        {level: 'Lvl 1', description: 'Restores HP to all allies.'},
                        {
                            level: 'Lvl 2',
                            description: 'Restores HP to all allies, and removes freeze.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Restores HP to all allies, and removes freeze.'
                        }
                    ],
                    cost: '7888',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: "Love's Protection",
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Gradually recovers the entire team's HP for 15 seconds."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Increases the entire team's defense by 10% for 15 seconds, and gradually recovers their HP for 15 seconds."
                        }
                    ],
                    cost: '13804',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Irfan',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Irfan-3-star.png?itok=1WTOwPoB',
            description: "A skilled mercenary seemingly obsessed with cashing in—though the way he talks makes some believe he's actually NOT in it for the money. Perhaps one day he will reveal his true purpose.",
            cv: ['Chip Bailey', 'Ayumu Murase'],
            title: 'Mammonist Mercenary',
            rarity: '3',
            element: 'Light',
            weapon: 'Dagger',
            role: 'Support',
            atk: '450',
            hp: '763',
            coability: {
                name: 'Critical Rate +1%',
                baseEffect: 'Increases critical rate by 1%. Benefits your whole team.',
                upgrades: [
                    'Increases critical rate by 3%. Benefits your whole team.',
                    'Increases critical rate by 5%. Benefits your whole team.',
                    'Increases critical rate by 7%. Benefits your whole team.',
                    'Increases critical rate by 10%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Strength Doublebuff +5%',
                        effect: 'Increases strength by 5% for 15 seconds each time a defense up buff is received.'
                    },
                    {
                        name: 'Strength Doublebuff +8%',
                        effect: 'Increases strength by 8% for 15 seconds each time a defense up buff is received.'
                    }
                ],
                [
                    {
                        name: 'Curse Res +25%',
                        effect: 'Reduces susceptibility to curses by 25%.'
                    },
                    {
                        name: 'Curse Res +50%',
                        effect: 'Reduces susceptibility to curses by 50%.'
                    }
                ],
                [
                    {
                        name: 'Curse Res +25%',
                        effect: 'Reduces susceptibility to curses by 25%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Gleaming Talons',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals light damage to surrounding enemies.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals light damage to surrounding enemies.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals light damage to surrounding enemies.'
                        }
                    ],
                    cost: '2318',
                    regen: 'None',
                    iframe: 'Short'
                },
                {
                    name: 'Hungry Fang',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals light damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals light damage to enemies directly ahead, and reduces their strength by 5%.'
                        }
                    ],
                    cost: '4892',
                    regen: 'None',
                    iframe: 'Short'
                }
            ]
        }
        ,
        {
            name: 'Raemond',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Raemond-3-star.png?itok=M7dggfJE',
            description: "The veteran of all combat veterans, he served for years as a royal knight under King Aurelius. While he can't ignore his aging body, he's still a force in battle. Many wonder what he sees when he looks upon what became of his king...",
            cv: ['Sam Vincent', 'Fumihiko Tachiki'],
            title: 'Loyal Servant',
            rarity: '3',
            element: 'Light',
            weapon: 'Sword',
            role: 'Attack',
            atk: '477',
            hp: '720',
            coability: {
                name: 'Dragon Haste +2%',
                baseEffect: 'Increases dragon gauge fill rate by 2%. Benefits your whole team.',
                upgrades: [
                    'Increases dragon gauge fill rate by 5%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 8%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 11%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Last Defense +40%',
                        effect: 'Buffs defense by 40% for 15 seconds when HP drops to 30% (once per quest).'
                    },
                    {
                        name: 'Last Defense +50%',
                        effect: 'Buffs defense by 50% for 15 seconds when HP drops to 30% (once per quest).'
                    }
                ],
                [
                    {
                        name: 'Poison Res +25%',
                        effect: 'Reduces susceptibility to poison by 25%.'
                    },
                    {
                        name: 'Poison Res +50%',
                        effect: 'Reduces susceptibility to poison by 50%.'
                    }
                ],
                [
                    {
                        name: 'Poison Res +25%',
                        effect: 'Reduces susceptibility to poison by 25%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Alberian Cleave',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals light damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals light damage to enemies directly ahead, and inflicts stun.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals light damage to enemies directly ahead, and inflicts stun.'
                        }
                    ],
                    cost: '2443',
                    regen: 'None',
                    iframe: 'Short'
                },
                {
                    name: 'Alberian Majesty',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals light damage to surrounding enemies.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals light damage to surrounding enemies.'
                        }
                    ],
                    cost: '4817',
                    regen: 'None',
                    iframe: 'Short'
                }
            ]
        }
        ,
        {
            name: 'Rodrigo',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Rodrigo-3-star.png?itok=rG1cOIh8',
            description: 'Known for sending fiend corpses as gifts, one might say Rodrigo is...unskilled at expressing appreciation. This misunderstood man just wants his feelings heard, but unfortunately, no one can quite seem to grasp what those are.',
            cv: ['Brian Davidson', 'Yuma Uchida'],
            title: 'Sincere Giver',
            rarity: '3',
            element: 'Shadow',
            weapon: 'Sword',
            role: 'Attack',
            atk: '481',
            hp: '714',
            coability: {
                name: 'Dragon Haste +2%',
                baseEffect: 'Increases dragon gauge fill rate by 2%. Benefits your whole team.',
                upgrades: [
                    'Increases dragon gauge fill rate by 5%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 8%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 11%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'HP 70% = Strength +5%',
                        effect: 'Increases strength by 5% when HP is 70% or above.'
                    },
                    {
                        name: 'HP 70% = Strength +8%',
                        effect: 'Increases strength by 8% when HP is 70% or above.'
                    }
                ],
                [
                    {
                        name: 'Paralysis Res +25%',
                        effect: 'Reduces susceptibility to paralysis by 25%.'
                    },
                    {
                        name: 'Paralysis Res +50%',
                        effect: 'Reduces susceptibility to paralysis by 50%.'
                    }
                ],
                [
                    {
                        name: 'Paralysis Res +25%',
                        effect: 'Reduces susceptibility to paralysis by 25%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Bonecrusher',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals shadow damage to enemies in a line.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals shadow damage to enemies in a line.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals shadow damage to enemies in a line.'
                        }
                    ],
                    cost: '2613',
                    regen: 'None',
                    iframe: 'Short'
                },
                {
                    name: 'Shadowpiercer',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals shadow damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals shadow damage to enemies directly ahead.'
                        }
                    ],
                    cost: '4886',
                    regen: 'None',
                    iframe: 'Short'
                }
            ]
        }
        ,
        {
            name: 'Renee',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-07/110265_01_r04.png?itok=-ic-LZji',
            description: 'The youngest of the three blacksmith sisters, responsible for cooling steel and tempering the weapons they make. Often seen running round with a bucket in each hand, she dreams of becoming as skilled as her sister Ramona.',
            cv: ['Devyn Andrea', 'Marika Kouno'],
            title: 'Future Smithing Genius',
            rarity: '4',
            element: 'Water',
            weapon: 'Dagger',
            role: 'Support',
            atk: '459',
            hp: '777',
            coability: {
                name: 'Critical Rate +3%',
                baseEffect: 'Increases critical rate by 3%. Benefits your whole team.',
                upgrades: [
                    'Increases critical rate by 4%. Benefits your whole team.',
                    'Increases critical rate by 5%. Benefits your whole team.',
                    'Increases critical rate by 7%. Benefits your whole team.',
                    'Increases critical rate by 10%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Primed Devastation +5%',
                        effect: 'Increases the critical rate of the adventurer you are currently controlling by 5% for 5 seconds every time their initial skill, displayed at the top of their skill list, becomes available for use. After activating, this ability will not activate again for 15 seconds.'
                    },
                    {
                        name: 'Primed Devastation +6%',
                        effect: 'Increases the critical rate of the adventurer you are currently controlling by 6% for 5 seconds every time their initial skill, displayed at the top of their skill list, becomes available for use. After activating, this ability will not activate again for 15 seconds.'
                    }
                ],
                [
                    {
                        name: 'Stun Res +50%',
                        effect: 'Reduces susceptibility to stun by 50%.'
                    },
                    {
                        name: 'Stun Res +100%',
                        effect: 'Reduces susceptibility to stun by 100%.'
                    }
                ],
                [
                    {
                        name: 'Healing Doublebuff (Team)',
                        effect: 'Grants an HP regen buff to the entire team for 20 seconds each time a defense up buff is received.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Droplet Slash',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals water damage to enemies directly ahead, and inflicts bog.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals water damage to enemies directly ahead, and inflicts bog.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals water damage to enemies directly ahead, and inflicts bog.'
                        }
                    ],
                    cost: '2311',
                    regen: 'None',
                    iframe: 'Long'
                },
                {
                    name: 'Drenching Strike',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Deals water damage to surrounding enemies, and increases the user's defense by 10% for 5 seconds."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Deals water damage to surrounding enemies, and increases the user's defense by 10% for 5 seconds."
                        }
                    ],
                    cost: '5846',
                    regen: 'None',
                    iframe: 'Long'
                }
            ]
        }
        ,
        {
            name: 'Hope',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Hope-3-star.png?itok=5nmVfp8s',
            description: "A priest in training who admires swordsmen. He reluctantly departed to an apprenticeship under the orders of his father and often thinks he shouldn't let his parents decide his future— however, he still yearns to protect others.",
            cv: ['Don Mathews', 'Yoshitsugu Matsuoka'],
            title: 'Knight at Heart',
            rarity: '3',
            element: 'Light',
            weapon: 'Staff',
            role: 'Healing',
            atk: '443',
            hp: '769',
            coability: {
                name: 'Recovery Potency +2%',
                baseEffect: 'Increases the potency of recovery skills by 2%. Benefits your whole team.',
                upgrades: [
                    'Increases the potency of recovery skills by 6%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 10%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 14%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 20%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Full HP = Healing +10%',
                        effect: 'Increases the potency of recovery skills by 10% when HP is full.'
                    },
                    {
                        name: 'Full HP = Healing +13%',
                        effect: 'Increases the potency of recovery skills by 13% when HP is full.'
                    }
                ],
                [
                    {
                        name: 'Poison Res +25%',
                        effect: 'Reduces susceptibility to poison by 25%.'
                    },
                    {
                        name: 'Poison Res +50%',
                        effect: 'Reduces susceptibility to poison by 50%.'
                    }
                ],
                [
                    {
                        name: 'Poison Res +25%',
                        effect: 'Reduces susceptibility to poison by 25%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Healing Hand',
                    levels: [
                        {level: 'Lvl 1', description: 'Restores HP to all allies.'},
                        {level: 'Lvl 2', description: 'Restores HP to all allies.'},
                        {level: 'Lvl 3', description: 'Restores HP to all allies.'}
                    ],
                    cost: '5916',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Blessed Wall',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Increases the entire team's defense by 10% for 15 seconds."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Increases the entire team's defense by 15% for 15 seconds."
                        }
                    ],
                    cost: '7633',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Summer Cleo',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-08/100004_04_r05.png?itok=Bij2uU-t',
            description: "Even the Halidom's most capable retainer has taken to the beach, and, armed with an umbrella and clad in a lovely swimsuit, she's as sweet as any summer flower—though she hasn't fully warmed to her new attire.",
            cv: ['Siobhan Rebecca', 'Yumi Uchiyama'],
            title: 'Beach Belle',
            rarity: '5',
            element: 'Light',
            weapon: 'Bow',
            role: 'Support',
            atk: '469',
            hp: '808',
            coability: {
                name: 'Skill Haste +8%',
                baseEffect: 'Increases skill gauge fill rate by 8%. Benefits your whole team.',
                upgrades: [
                    'Increases skill gauge fill rate by 9%. Benefits your whole team.',
                    'Increases skill gauge fill rate by 11%. Benefits your whole team.',
                    'Increases skill gauge fill rate by 12%. Benefits your whole team.',
                    'Increases skill gauge fill rate by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Paralysis = Skill Haste +8%',
                        effect: 'Increases skill gauge fill rate by 8% for 20 seconds upon successfully paralyzing an enemy. After activating, this ability will not activate again for five seconds.'
                    },
                    {
                        name: 'Paralysis = Skill Haste +10%',
                        effect: 'Increases skill gauge fill rate by 10% for 20 seconds upon successfully paralyzing an enemy. After activating, this ability will not activate again for five seconds.'
                    }
                ],
                [
                    {
                        name: 'Curse Res +50%',
                        effect: 'Reduces susceptibility to curses by 50%.'
                    },
                    {
                        name: 'Curse Res +100%',
                        effect: 'Reduces susceptibility to curses by 100%.'
                    }
                ],
                [
                    {
                        name: 'Paralyzed Punisher +25%',
                        effect: 'Increases damage to paralyzed enemies by 25%.'
                    },
                    {
                        name: 'Paralyzed Punisher +30%',
                        effect: 'Increases damage to paralyzed enemies by 30%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Parasol Shot',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals light damage to and inflicts paralysis on the target and nearby enemies, and fires extra shots equal to the number of buffs the user has. A maximum of four additional shots can be fired.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals light damage to and inflicts paralysis on the target and nearby enemies, and fires extra shots equal to the number of buffs the user has. A maximum of four additional shots can be fired.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals light damage to and inflicts paralysis on the target and nearby enemies, and fires extra shots equal to the number of buffs the user has. A maximum of four additional shots can be fired.'
                        }
                    ],
                    cost: '2841',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Tropical Breeze',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "For 10 seconds, increases the user and nearby allies' strength by 3%, critical rate by 2%, skill damage by 10%, and skill gauge fill rate by 10%."
                        },
                        {
                            level: 'Lvl 2',
                            description: "For 10 seconds, increases the user and nearby allies' strength by 5%, critical rate by 3%, skill damage by 10%, and skill gauge fill rate by 10%."
                        }
                    ],
                    cost: '6737',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Edward',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Edward-3-star.png?itok=bN7UZa5o',
            description: "A butler almost off-putting in his refinement who micromanages his master's schedule. His yearning for perfection is so strong, few can keep up with it. His hobby is patchwork.",
            cv: ['Graham Hamilton', 'Takuma Terashima'],
            title: 'Perfect Butler',
            rarity: '3',
            element: 'Shadow',
            weapon: 'Staff',
            role: 'Healing',
            atk: '446',
            hp: '763',
            coability: {
                name: 'Recovery Potency +2%',
                baseEffect: 'Increases the potency of recovery skills by 2%. Benefits your whole team.',
                upgrades: [
                    'Increases the potency of recovery skills by 6%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 10%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 14%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 20%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Full HP = Healing +10%',
                        effect: 'Increases the potency of recovery skills by 10% when HP is full.'
                    },
                    {
                        name: 'Full HP = Healing +13%',
                        effect: 'Increases the potency of recovery skills by 13% when HP is full.'
                    }
                ],
                [
                    {
                        name: 'Blindness Res +25%',
                        effect: 'Reduces susceptibility to blindness by 25%.'
                    },
                    {
                        name: 'Blindness Res +50%',
                        effect: 'Reduces susceptibility to blindness by 50%.'
                    }
                ],
                [
                    {
                        name: 'Blindness Res +25%',
                        effect: 'Reduces susceptibility to blindness by 25%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Impeccable Service',
                    levels: [
                        {level: 'Lvl 1', description: 'Restores HP to all allies.'},
                        {level: 'Lvl 2', description: 'Restores HP to all allies.'},
                        {level: 'Lvl 3', description: 'Restores HP to all allies.'}
                    ],
                    cost: '5916',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: "Butler's Guard",
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Grants all teammates a one-use shield that nullifies damage less than 15% of the user's maximum HP. This does not stack with any other shields."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Grants all teammates a one-use shield that nullifies damage less than 20% of the user's maximum HP. This does not stack with any other shields."
                        }
                    ],
                    cost: '5840',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Melody',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Melody-3-star.png?itok=C_i7qM_b',
            description: "A devoted maid in perpetual training due to her clumsy nature. There's no way to count how many plates she's dropped or aprons she's burned. Will she ever be able to call herself a maid for true?",
            cv: ['Sabrina Pitre', 'Ayaka Ohashi'],
            title: 'Menace of a Maid',
            rarity: '3',
            element: 'Wind',
            weapon: 'Blade',
            role: 'Support',
            atk: '470',
            hp: '741',
            coability: {
                name: 'Strength +1%',
                baseEffect: 'Increases strength by 1%. Benefits your whole team.',
                upgrades: [
                    'Increases strength by 3%. Benefits your whole team.',
                    'Increases strength by 5%. Benefits your whole team.',
                    'Increases strength by 7%. Benefits your whole team.',
                    'Increases strength by 10%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Full HP = Critical Rate +6%',
                        effect: 'Increases critical rate by 6% when HP is full.'
                    },
                    {
                        name: 'Full HP = Critical Rate +8%',
                        effect: 'Increases critical rate by 8% when HP is full.'
                    }
                ],
                [
                    {
                        name: 'Freeze Res +25%',
                        effect: 'Reduces susceptibility to freezing by 25%.'
                    },
                    {
                        name: 'Freeze Res +50%',
                        effect: 'Reduces susceptibility to freezing by 50%.'
                    }
                ],
                [
                    {
                        name: 'Freeze Res +25%',
                        effect: 'Reduces susceptibility to freezing by 25%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Maid for Mayhem',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Increases the entire team's strength by 8% for 15 seconds."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Increases the entire team's strength by 10% for 15 seconds."
                        },
                        {
                            level: 'Lvl 3',
                            description: "Increases the entire team's strength by 15% for 15 seconds."
                        }
                    ],
                    cost: '2987',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: "Tyro's Gyre",
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals wind damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals wind damage to enemies directly ahead.'
                        }
                    ],
                    cost: '4784',
                    regen: 'None',
                    iframe: 'Short'
                }
            ]
        }
        ,
        {
            name: 'Cibella',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Cibella-3-star.png?itok=5uiX9i0T',
            description: "A woman of the Church hell-bent on revenge who has cast aside prayer in favor of weapons. Though she's sworn to walk this path, she's been unable to completely harden her heart. Will retribution truly save her soul?",
            cv: ['AJ Vasquez', 'Fukuhara Ayaka'],
            title: 'Staunch Avenger',
            rarity: '3',
            element: 'Water',
            weapon: 'Lance',
            role: 'Defense',
            atk: '437',
            hp: '790',
            coability: {
                name: 'HP +5%',
                baseEffect: 'Increases HP by 5%. Benefits your whole team.',
                upgrades: [
                    'Increases HP by 7%. Benefits your whole team.',
                    'Increases HP by 9%. Benefits your whole team.',
                    'Increases HP by 12%. Benefits your whole team.',
                    'Increases HP by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Last Recovery I',
                        effect: 'Grants an HP regen buff for 20 seconds when HP drops to 30% (once per quest).'
                    },
                    {
                        name: 'Last Recovery II',
                        effect: 'Grants an HP regen buff for 20 seconds when HP drops to 30% (once per quest).'
                    }
                ],
                [
                    {
                        name: 'Stun Res +25%',
                        effect: 'Reduces susceptibility to stun by 25%.'
                    },
                    {
                        name: 'Stun Res +50%',
                        effect: 'Reduces susceptibility to stun by 50%.'
                    }
                ],
                [
                    {
                        name: 'Stun Res +25%',
                        effect: 'Reduces susceptibility to stun by 25%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Virtuous Guard',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Grants all teammates a one-use shield that nullifies damage less than 15% of the user's maximum HP. This does not stack with any other shields."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Grants all teammates a one-use shield that nullifies damage less than 20% of the user's maximum HP. This does not stack with any other shields."
                        },
                        {
                            level: 'Lvl 3',
                            description: "Grants all teammates a one-use shield that nullifies damage less than 30% of the user's maximum HP. This does not stack with any other shields."
                        }
                    ],
                    cost: '2920',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Holy Wreath',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals water damage to surrounding enemies.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals water damage to surrounding enemies.'
                        }
                    ],
                    cost: '5000',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Philia',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Philia-3-star.png?itok=sprjZaB8',
            description: "A traveler who believes in fate, she journeys in search of a soul mate that destiny will send back to her no matter how often they're pulled apart. The instant she met Euden, she fell madly in love.",
            cv: ['Michelle Schloff', 'Sayuri Hara'],
            title: 'Love Seeker',
            rarity: '3',
            element: 'Wind',
            weapon: 'Bow',
            role: 'Attack',
            atk: '469',
            hp: '726',
            coability: {
                name: 'Skill Haste +2%',
                baseEffect: 'Increases skill gauge fill rate by 2%. Benefits your whole team.',
                upgrades: [
                    'Increases skill gauge fill rate by 5%. Benefits your whole team.',
                    'Increases skill gauge fill rate by 8%. Benefits your whole team.',
                    'Increases skill gauge fill rate by 11%. Benefits your whole team.',
                    'Increases skill gauge fill rate by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Full HP = Strength +8%',
                        effect: 'Increases strength by 8% when HP is full.'
                    },
                    {
                        name: 'Full HP = Strength +10%',
                        effect: 'Increases strength by 10% when HP is full.'
                    }
                ],
                [
                    {
                        name: 'Paralysis Res +25%',
                        effect: 'Reduces susceptibility to paralysis by 25%.'
                    },
                    {
                        name: 'Paralysis Res +50%',
                        effect: 'Reduces susceptibility to paralysis by 50%.'
                    }
                ],
                [
                    {
                        name: 'Paralysis Res +25%',
                        effect: 'Reduces susceptibility to paralysis by 25%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Scattershot',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals wind damage to enemies in a line.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals wind damage to enemies in a line.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals wind damage to enemies in a line.'
                        }
                    ],
                    cost: '2395',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Lovelorn Arrow',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals wind damage to enemies in a line.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals wind damage to enemies in a line, and inflicts paralysis.'
                        }
                    ],
                    cost: '5051',
                    regen: 'None',
                    iframe: 'Short'
                }
            ]
        }
        ,
        {
            name: 'Sophie',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Sophie-3-star.png?itok=rtf7rjXt',
            description: "An observer of mana with a love for wind. She has keen judgment and powers of observation, and she can detect even the slightest change in mana. Lamenting how many in the castle know nothing of her hobby, she's happy to teach them.",
            cv: ['Sabrina Pitre', 'Ami Koshimizu'],
            title: 'Mana Observer',
            rarity: '3',
            element: 'Wind',
            weapon: 'Staff',
            role: 'Healing',
            atk: '445',
            hp: '766',
            coability: {
                name: 'Recovery Potency +2%',
                baseEffect: 'Increases the potency of recovery skills by 2%. Benefits your whole team.',
                upgrades: [
                    'Increases the potency of recovery skills by 6%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 10%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 14%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 20%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Recovery Potency +5%',
                        effect: 'Increases the potency of recovery skills by 5%.'
                    },
                    {
                        name: 'Recovery Potency +8%',
                        effect: 'Increases the potency of recovery skills by 8%.'
                    }
                ],
                [
                    {
                        name: 'Freeze Res +25%',
                        effect: 'Reduces susceptibility to freezing by 25%.'
                    },
                    {
                        name: 'Freeze Res +50%',
                        effect: 'Reduces susceptibility to freezing by 50%.'
                    }
                ],
                [
                    {
                        name: 'Freeze Res +25%',
                        effect: 'Reduces susceptibility to freezing by 25%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Aspen Balm',
                    levels: [
                        {level: 'Lvl 1', description: 'Restores HP to all allies.'},
                        {level: 'Lvl 2', description: 'Restores HP to all allies.'},
                        {level: 'Lvl 3', description: 'Restores HP to all allies.'}
                    ],
                    cost: '5916',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Angry Gale',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals wind damage to surrounding enemies.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals wind damage to surrounding enemies.'
                        }
                    ],
                    cost: '9214',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Aeleen',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Aeleen-4-star.png?itok=F_dWglC6',
            description: 'A kind, mild-mannered knight whose bloodlust breaks free on the battlefield. While her skills are unrivaled, she tries to avoid fighting as she fears the "other" that emerges. She now needs only the courage to face herself.',
            cv: ['Brittney Boni', 'Ayumi Fujimura'],
            title: 'Mercurial Lancer',
            rarity: '4',
            element: 'Wind',
            weapon: 'Lance',
            role: 'Support',
            atk: '470',
            hp: '766',
            coability: {
                name: 'HP +7%',
                baseEffect: 'Increases HP by 7%. Benefits your whole team.',
                upgrades: [
                    'Increases HP by 8%. Benefits your whole team.',
                    'Increases HP by 9%. Benefits your whole team.',
                    'Increases HP by 12%. Benefits your whole team.',
                    'Increases HP by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Buff Time +20%',
                        effect: 'Increases duration of buff skills by 20%.'
                    },
                    {
                        name: 'Buff Time +25%',
                        effect: 'Increases duration of buff skills by 25%.'
                    }
                ],
                [
                    {
                        name: 'Freeze Res +50%',
                        effect: 'Reduces susceptibility to freezing by 50%.'
                    },
                    {
                        name: 'Freeze Res +100%',
                        effect: 'Reduces susceptibility to freezing by 100%.'
                    }
                ],
                [
                    {
                        name: "Slayer's Strength +4%",
                        effect: 'Increases strength by 4% for every five enemies defeated (up to five times per quest).'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Valkyrie Blast',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals wind damage to the target and nearby enemies.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals wind damage to the target and nearby enemies.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals wind damage to the target and nearby enemies.'
                        }
                    ],
                    cost: '2579',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Valhallan Ballad',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Increases the entire team's defense by 15% for 15 seconds."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Increases the entire team's defense by 20% for 15 seconds."
                        }
                    ],
                    cost: '8534',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Maribelle',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Maribelle-5-star.png?itok=lOR3AdNS',
            description: 'A sprightly girl of the forest whose innocent cheer is a breath of fresh air in any situation. She wants to be taken seriously and gets angry when treated like a child—although anyone can befriend her with a sweet or two.',
            cv: ['Julie Muise', 'Kana Hanazawa'],
            title: 'Child of the Forest',
            rarity: '5',
            element: 'Wind',
            weapon: 'Wand',
            role: 'Attack',
            atk: '512',
            hp: '748',
            coability: {
                name: 'Skill Damage +8%',
                baseEffect: 'Increases attack skill damage by 8%. Benefits your whole team.',
                upgrades: [
                    'Increases attack skill damage by 9%. Benefits your whole team.',
                    'Increases attack skill damage by 11%. Benefits your whole team.',
                    'Increases attack skill damage by 12%. Benefits your whole team.',
                    'Increases attack skill damage by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Full HP = Skill Damage +35%',
                        effect: 'Increases attack skill damage by 35% when HP is full.'
                    },
                    {
                        name: 'Full HP = Skill Damage +40%',
                        effect: 'Increases attack skill damage by 40% when HP is full.'
                    }
                ],
                [
                    {
                        name: 'Bog Res +50%',
                        effect: 'Reduces susceptibility to bog by 50%.'
                    },
                    {
                        name: 'Bog Res +100%',
                        effect: 'Reduces susceptibility to bog by 100%.'
                    }
                ],
                [
                    {
                        name: 'Skill Prep +75%',
                        effect: 'Fills 75% of skill gauges at the start of quests.'
                    },
                    {
                        name: 'Skill Prep +100%',
                        effect: 'Fills 100% of skill gauges at the start of quests.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Save the Day!',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals wind damage to the target and nearby enemies.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals wind damage to the target and nearby enemies, and reduces their defense by 5%.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals wind damage to the target and nearby enemies, and reduces their defense by 5%.'
                        }
                    ],
                    cost: '2648',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Not One Step Closer!',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals wind damage to enemies in a line.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals wind damage to enemies in a line.'
                        }
                    ],
                    cost: '5838',
                    regen: 'None',
                    iframe: 'Short'
                }
            ]
        }
        ,
        {
            name: 'Ranzal',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Ranzal-4-star_0.png?itok=Y33Nhpv7',
            description: "A skilled mercenary whose sloppy appearance and careless tongue can make for a sour first impression—although he always acts with honor and conviction in the end. He's been known to occasionally cut a little TOO loose at banquets.",
            cv: ['Will Williams', 'Katsuyuki Konishi'],
            title: 'Arc in the Storm',
            rarity: '4',
            element: 'Wind',
            weapon: 'Axe',
            role: 'Defense',
            atk: '444',
            hp: '781',
            coability: {
                name: 'Defense +7%',
                baseEffect: 'Increases defense by 7%. Benefits your whole team.',
                upgrades: [
                    'Increases defense by 8%. Benefits your whole team.',
                    'Increases defense by 9%. Benefits your whole team.',
                    'Increases defense by 11%. Benefits your whole team.',
                    'Increases defense by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: "Slayer's Strength +4%",
                        effect: 'Increases strength by 4% for every five enemies defeated (up to five times per quest).'
                    },
                    {
                        name: "Slayer's Strength +5%",
                        effect: 'Increases strength by 5% for every five enemies defeated (up to five times per quest).'
                    }
                ],
                [
                    {
                        name: 'Bog Res +50%',
                        effect: 'Reduces susceptibility to bog by 50%.'
                    },
                    {
                        name: 'Bog Res +100%',
                        effect: 'Reduces susceptibility to bog by 100%.'
                    }
                ],
                [
                    {
                        name: 'Last Defense +50%',
                        effect: 'Buffs defense by 50% for 15 seconds when HP drops to 30% (once per quest).'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Tornado Bash',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals wind damage to surrounding enemies and draws them toward the user.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals wind damage to surrounding enemies and draws them toward the user.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals wind damage to surrounding enemies and draws them toward the user.'
                        }
                    ],
                    cost: '2805',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Storm Wall',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Grants all teammates a one-use shield that nullifies damage less than 20% of the user's maximum HP. This does not stack with any other shields."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Grants all teammates a one-use shield that nullifies damage less than 30% of the user's maximum HP. Does not stack with any other shields."
                        }
                    ],
                    cost: '7288',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Taro',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Taro-3-star.png?itok=_r1nj0YC',
            description: 'A cowardly novice samurai. His armor implies experience but was actually a gift from his father. Regardless, he refuses to let anyone lay a finger on it. Though quite green, he hopes to someday make a name for himself in battle.',
            cv: ['Conor Hogan', 'Soma Saito'],
            title: 'Greenhorn Samurai',
            rarity: '3',
            element: 'Shadow',
            weapon: 'Blade',
            role: 'Attack',
            atk: '495',
            hp: '701',
            coability: {
                name: 'Strength +1%',
                baseEffect: 'Increases strength by 1%. Benefits your whole team.',
                upgrades: [
                    'Increases strength by 3%. Benefits your whole team.',
                    'Increases strength by 5%. Benefits your whole team.',
                    'Increases strength by 7%. Benefits your whole team.',
                    'Increases strength by 10%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Last Defense +40%',
                        effect: 'Buffs defense by 40% for 15 seconds when HP drops to 30% (once per quest).'
                    },
                    {
                        name: 'Last Defense +50%',
                        effect: 'Buffs defense by 50% for 15 seconds when HP drops to 30% (once per quest).'
                    }
                ],
                [
                    {
                        name: 'Paralysis Res +25%',
                        effect: 'Reduces susceptibility to paralysis by 25%.'
                    },
                    {
                        name: 'Paralysis Res +50%',
                        effect: 'Reduces susceptibility to paralysis by 50%.'
                    }
                ],
                [
                    {
                        name: 'Paralysis Res +25%',
                        effect: 'Reduces susceptibility to paralysis by 25%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Shadowslicer',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals shadow damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals shadow damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals shadow damage to enemies directly ahead.'
                        }
                    ],
                    cost: '2392',
                    regen: 'None',
                    iframe: 'Short'
                },
                {
                    name: 'Evilsbane',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals shadow damage to surrounding enemies.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals shadow damage to surrounding enemies.'
                        }
                    ],
                    cost: '5259',
                    regen: 'None',
                    iframe: 'Short'
                }
            ]
        }
        ,
        {
            name: 'Pia',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-11/Pia-4-star.png?itok=EKH2xbKL',
            description: 'A girl from the Harmonia Choir who loves to sing. Though shy and easily frightened, she yearns to become someone who can share her opinions freely. She often consults with her best pal, Mr. Mouse, about her various problems.',
            cv: ['Claire Corlett', 'Manaka Iwami'],
            title: 'Budding Vocalist',
            rarity: '4',
            element: 'Wind',
            weapon: 'Lance',
            role: 'Defense',
            atk: '446',
            hp: '805',
            coability: {
                name: 'HP +7%',
                baseEffect: 'Increases HP by 7%. Benefits your whole team.',
                upgrades: [
                    'Increases HP by 8%. Benefits your whole team.',
                    'Increases HP by 9%. Benefits your whole team.',
                    'Increases HP by 12%. Benefits your whole team.',
                    'Increases HP by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'HP 70% = Defense +8%',
                        effect: 'Increases defense by 8% when HP is 70% or above.'
                    },
                    {
                        name: 'HP 70% = Defense +10%',
                        effect: 'Increases defense by 10% when HP is 70% or above.'
                    }
                ],
                [
                    {
                        name: 'Bog Res +50%',
                        effect: 'Reduces susceptibility to bog by 50%.'
                    },
                    {
                        name: 'Bog Res +100%',
                        effect: 'Reduces susceptibility to bog by 100%.'
                    }
                ],
                [
                    {
                        name: 'Energy Doublebuff I',
                        effect: 'Increases energy level by one stage each time a defense up buff is received.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Ka-boom!',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals wind damage to the target and nearby enemies.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals wind damage to the target and nearby enemies.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals wind damage to the target and nearby enemies.'
                        }
                    ],
                    cost: '2579',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Cheer up, chums!',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Increases the entire team's energy levels by one stage. When an adventurer's energy level reaches level five, they will become energized, and their next attack or recovery skill will be upgraded. Using any applicable skill resets that adventurer's energy level to zero."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Increases the entire team's energy levels by one stage. When an adventurer's energy level reaches level five, they will become energized, and their next attack or recovery skill will be upgraded. Using any applicable skill resets that adventurer's energy level to zero."
                        }
                    ],
                    cost: '\nLevel 1: 4000\nLevel 2: 3636\n',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Sazanka',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-12/Sazanka-4-star.png?itok=Z7uqbF9m',
            description: 'An attendant from the eastern land of Hinomoto. She was born into a family of warriors who serve the Twelve Wyrmclans, and swears loyalty to the head of one, Ieyasu. Well-versed in Hinomoto tradition, she also serves as a cultural liaison.',
            cv: ['Danielle Ashton', 'Risa Taneda'],
            title: 'Cultured Flower',
            rarity: '4',
            element: 'Shadow',
            weapon: 'Axe',
            role: 'Defense',
            atk: '460',
            hp: '802',
            coability: {
                name: 'Defense +7%',
                baseEffect: 'Increases defense by 7%. Benefits your whole team.',
                upgrades: [
                    'Increases defense by 8%. Benefits your whole team.',
                    'Increases defense by 9%. Benefits your whole team.',
                    'Increases defense by 11%. Benefits your whole team.',
                    'Increases defense by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Gauge Accelerator +25%',
                        effect: 'Speeds the rate the mode gauge decreases by 25%.'
                    },
                    {
                        name: 'Gauge Accelerator +30%',
                        effect: 'Speeds the rate the mode gauge decreases by 30%.'
                    }
                ],
                [
                    {
                        name: 'Paralysis Res +50%',
                        effect: 'Reduces susceptibility to paralysis by 50%.'
                    },
                    {
                        name: 'Paralysis Res +100%',
                        effect: 'Reduces susceptibility to paralysis by 100%.'
                    }
                ],
                [
                    {
                        name: 'Sleeping Punisher +20%',
                        effect: 'Increases damage to sleeping enemies by 20%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Dancing Blossoms',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals shadow damage to surrounding enemies, draws them toward the user, and inflicts bleeding.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals shadow damage to surrounding enemies, draws them toward the user, and inflicts bleeding.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals shadow damage to surrounding enemies, draws them toward the user, and inflicts bleeding.'
                        }
                    ],
                    cost: '2805',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Blooming Cradle',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Activates "Slumber Strike Stance." For the next three force strikes, the user will deal extra damage and inflict sleep.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Activates "Slumber Strike Stance." For the next three force strikes, the user will deal extra damage and inflict sleep.'
                        }
                    ],
                    cost: '6400',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Vanessa',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Vanessa-4-star.png?itok=vdwMjH85',
            description: "A warrior who fights to become the strongest in the land. Never having known defeat, she feels she must experience it in order to grow further. She claims to have come to the castle to fight an incredible female knight she's met before.",
            cv: ['Ava Lindstrom', 'Ami Koshimizu'],
            title: 'Red-Haired Warrior',
            rarity: '4',
            element: 'Flame',
            weapon: 'Axe',
            role: 'Attack',
            atk: '501',
            hp: '720',
            coability: {
                name: 'Defense +7%',
                baseEffect: 'Increases defense by 7%. Benefits your whole team.',
                upgrades: [
                    'Increases defense by 8%. Benefits your whole team.',
                    'Increases defense by 9%. Benefits your whole team.',
                    'Increases defense by 11%. Benefits your whole team.',
                    'Increases defense by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Force Strike +30%',
                        effect: 'Increases force strike damage by 30%.'
                    },
                    {
                        name: 'Force Strike +40%',
                        effect: 'Increases force strike damage by 40%.'
                    }
                ],
                [
                    {
                        name: 'Stun Res +50%',
                        effect: 'Reduces susceptibility to stun by 50%.'
                    },
                    {
                        name: 'Stun Res +100%',
                        effect: 'Reduces susceptibility to stun by 100%.'
                    }
                ],
                [
                    {
                        name: 'Last Offense +30%',
                        effect: 'Buffs strength by 30% for 15 seconds when HP drops to 30% (once per quest).'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Scarlet Geyser',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals flame damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals flame damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals flame damage to enemies directly ahead.'
                        }
                    ],
                    cost: '3033',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Crimson Impact',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals flame damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals flame damage to enemies directly ahead, and reduces their defense by 5%.'
                        }
                    ],
                    cost: '6016',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Fritz',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-01/Fritz-4-star.png?itok=xY3guJeV',
            description: "A dagger wielder from a circus troupe. Although he wows crowds with his dazzling blade skills, he also carries a shadow of his past with him. In both battle and life, he lives by a performer's code of letting no prey escape.",
            cv: ['Daniel Doheny', 'Ryohei Kimura'],
            title: 'Dagger Magnificence',
            rarity: '4',
            element: 'Light',
            weapon: 'Dagger',
            role: 'Support',
            atk: '459',
            hp: '779',
            coability: {
                name: 'Critical Rate +3%',
                baseEffect: 'Increases critical rate by 3%. Benefits your whole team.',
                upgrades: [
                    'Increases critical rate by 4%. Benefits your whole team.',
                    'Increases critical rate by 5%. Benefits your whole team.',
                    'Increases critical rate by 7%. Benefits your whole team.',
                    'Increases critical rate by 10%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: "Striker's Skill +6%",
                        effect: 'Increases attack skill damage by 6% for every three enemies defeated with force strikes (up to five times per quest).'
                    },
                    {
                        name: "Striker's Skill +8%",
                        effect: 'Increases attack skill damage by 8% for every three enemies defeated with force strikes (up to five times per quest).'
                    }
                ],
                [
                    {
                        name: 'Poison Res +50%',
                        effect: 'Reduces susceptibility to poison by 50%.'
                    },
                    {
                        name: 'Poison Res +100%',
                        effect: 'Reduces susceptibility to poison by 100%.'
                    }
                ],
                [
                    {
                        name: 'Strength Doublebuff +8%',
                        effect: 'Increases strength by 8% for 15 seconds each time a defense up buff is received.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Acrobatic Dagger',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals light damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals light damage to enemies directly ahead, and reduces their defense by 5%.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals light damage to enemies directly ahead, and reduces their defense by 5%.'
                        }
                    ],
                    cost: '2452',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Dazzling Show',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Activates "Stunning Knives." For the next three force strikes, the user will throw special knives that deal damage and may inflict stun.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Activates "Stunning Knives." For the next three force strikes, the user will throw special knives that deal damage and may inflict stun.'
                        }
                    ],
                    cost: '5315',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Serena',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-05/Serena-4-star.png?itok=hWuLm0lT',
            description: 'A young knight with a pure heart. Her upbeat personality is infectious, but her naivety and honesty make her an easy target for swindlers. Though she cried often as a child, she has sworn to never again weep in the face of hardship.',
            cv: ['Margery Davis', 'Maaya Uchida'],
            title: 'Purehearted Warrior',
            rarity: '4',
            element: 'Flame',
            weapon: 'Sword',
            role: 'Defense',
            atk: '443',
            hp: '808',
            coability: {
                name: 'Dragon Haste +5%',
                baseEffect: 'Increases dragon gauge fill rate by 5%. Benefits your whole team.',
                upgrades: [
                    'Increases dragon gauge fill rate by 6%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 8%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 11%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Barrage Obliteration +5%',
                        effect: 'Adds 5% to the modifier applied to critical damage for every 20-hit combo (up to three times per quest).'
                    },
                    {
                        name: 'Barrage Obliteration +6%',
                        effect: 'Adds 6% to the modifier applied to critical damage for every 20-hit combo (up to three times per quest).'
                    }
                ],
                [
                    {
                        name: 'Stun Res +50%',
                        effect: 'Reduces susceptibility to stun by 50%.'
                    },
                    {
                        name: 'Stun Res +100%',
                        effect: 'Reduces susceptibility to stun by 100%.'
                    }
                ],
                [
                    {
                        name: 'Barrage Devastation +3%',
                        effect: 'Increases critical rate by 3% for every 30-hit combo (up to three times per quest).'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Assault Flame',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals flame damage to enemies in a line.'
                        },
                        {
                            level: 'Lvl 2',
                            description: "Deals flame damage to enemies in a line, and increases the user's critical rate by 10% for 5 seconds."
                        },
                        {
                            level: 'Lvl 3',
                            description: "Deals flame damage to enemies in a line, and increases the user's critical rate by 10% for 5 seconds."
                        }
                    ],
                    cost: '2500',
                    regen: 'None',
                    iframe: 'Long'
                },
                {
                    name: 'Blazing Pain',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals flame damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals flame damage to enemies directly ahead.'
                        }
                    ],
                    cost: '4593',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Alain',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Alain-3-star.png?itok=8Ss3JX2a',
            description: 'A strangely determined knight who specializes in retreating through detailed preparation and planning. He views fleeing not as cowardice but rather his own unique approach to war.',
            cv: ['Brian Joseph Benedict', 'Soma Saito'],
            title: 'Captain Craven',
            rarity: '3',
            element: 'Flame',
            weapon: 'Lance',
            role: 'Defense',
            atk: '438',
            hp: '786',
            coability: {
                name: 'HP +5%',
                baseEffect: 'Increases HP by 5%. Benefits your whole team.',
                upgrades: [
                    'Increases HP by 7%. Benefits your whole team.',
                    'Increases HP by 9%. Benefits your whole team.',
                    'Increases HP by 12%. Benefits your whole team.',
                    'Increases HP by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Last Defense +40%',
                        effect: 'Buffs defense by 40% for 15 seconds when HP drops to 30% (once per quest).'
                    },
                    {
                        name: 'Last Defense +50%',
                        effect: 'Buffs defense by 50% for 15 seconds when HP drops to 30% (once per quest).'
                    }
                ],
                [
                    {
                        name: 'Stun Res +25%',
                        effect: 'Reduces susceptibility to stun by 25%.'
                    },
                    {
                        name: 'Stun Res +50%',
                        effect: 'Reduces susceptibility to stun by 50%.'
                    }
                ],
                [
                    {
                        name: 'Stun Res +25%',
                        effect: 'Reduces susceptibility to stun by 25%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Noble Flame',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals flame damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals flame damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals flame damage to enemies directly ahead.'
                        }
                    ],
                    cost: '2581',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Blazing Rondel',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals flame damage to surrounding enemies.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals flame damage to surrounding enemies.'
                        }
                    ],
                    cost: '5112',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Lea',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-09/110259_01_r05.png?itok=_GvB13iH',
            description: 'A knight who served the Kingdom of Alberia. She bears an intense hatred for fiends due to an event in her past, and fights them with any means necessary. While she has a dignified presence, she also adores cute things.',
            cv: ['-', 'Marina Inoue'],
            title: 'Sublime Swordsman',
            rarity: '5',
            element: 'Flame',
            weapon: 'Sword',
            role: 'Attack',
            atk: '505',
            hp: '754',
            coability: {
                name: 'Dragon Haste +8%',
                baseEffect: 'Increases dragon gauge fill rate by 8%. Benefits your whole team.',
                upgrades: [
                    'Increases dragon gauge fill rate by 9%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 11%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 12%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Force Strike +40%',
                        effect: 'Increases force strike damage by 40%.'
                    },
                    {
                        name: 'Force Strike +50%',
                        effect: 'Increases force strike damage by 50%.'
                    }
                ],
                [
                    {
                        name: 'Stun Res +50%',
                        effect: 'Reduces susceptibility to stun by 50%.'
                    },
                    {
                        name: 'Stun Res +100%',
                        effect: 'Reduces susceptibility to stun by 100%.'
                    }
                ],
                [
                    {
                        name: 'Striking Haste +10%',
                        effect: "Increases skill gauge fill rate by 10% when the user's force strikes connect."
                    },
                    {
                        name: 'Striking Haste +12%',
                        effect: "Increases skill gauge fill rate by 12% when the user's force strikes connect."
                    }
                ]
            ],
            skills: [
                {
                    name: 'Road to Glory',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals flame damage to enemies directly ahead, and inflicts burn.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals flame damage to enemies directly ahead, and inflicts burn.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals flame damage to enemies directly ahead, and inflicts burn.'
                        }
                    ],
                    cost: '2325',
                    regen: 'None',
                    iframe: 'Long'
                },
                {
                    name: 'Floral Revolution',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Summons "Crimson Garden," then deals flame damage to enemies directly ahead. Additional bonus damage will be dealt relative to the damage taken while "Crimson Garden" is active.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Summons "Crimson Garden," then deals flame damage to enemies directly ahead. Additional bonus damage will be dealt relative to the damage taken while "Crimson Garden" is active.'
                        }
                    ],
                    cost: '4730',
                    regen: 'None',
                    iframe: 'Long'
                }
            ]
        }
        ,
        {
            name: 'Halloween Althemia',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Halloween%20Althemia-4-star_0.png?itok=ZHJbeHsW',
            description: "A passionate researcher of black magic, Althemia had always longed to wear a vampire's garb, and spent many a night sewing this costume. It seems no change of outfit can hide her tendency to go all in on her passions.",
            cv: ['Tabitha St. Germain', 'Kana Ueda'],
            title: 'Diametric Vampire',
            rarity: '4',
            element: 'Light',
            weapon: 'Staff',
            role: 'Healing',
            atk: '452',
            hp: '786',
            coability: {
                name: 'Recovery Potency +6%',
                baseEffect: 'Increases the potency of recovery skills by 6%. Benefits your whole team.',
                upgrades: [
                    'Increases the potency of recovery skills by 8%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 10%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 14%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 20%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Skill Prep +50%',
                        effect: 'Fills 50% of skill gauges at the start of quests.'
                    },
                    {
                        name: 'Skill Prep +75%',
                        effect: 'Fills 75% of skill gauges at the start of quests.'
                    }
                ],
                [
                    {
                        name: 'Curse Res +50%',
                        effect: 'Reduces susceptibility to curses by 50%.'
                    },
                    {
                        name: 'Curse Res +100%',
                        effect: 'Reduces susceptibility to curses by 100%.'
                    }
                ],
                [
                    {
                        name: 'Full HP = Strength +10%',
                        effect: 'Increases strength by 10% when HP is full.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Sweet Treat',
                    levels: [
                        {level: 'Lvl 1', description: 'Restores HP to all allies.'},
                        {level: 'Lvl 2', description: 'Restores HP to all allies.'},
                        {level: 'Lvl 3', description: 'Restores HP to all allies.'}
                    ],
                    cost: '5916',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Bitter Trick',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Deals light damage to surrounding enemies, and restores the user's HP by 4% of damage inflicted."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Deals light damage to surrounding enemies, and restores the user's HP by 5% of damage inflicted."
                        }
                    ],
                    cost: '9662',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Alfonse',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-04/Alfonse-5-star.png?itok=iNvMnpvx',
            description: 'The young prince of the Askran Kingdom who was sucked through a rift between worlds and deposited in Alberia. Kind and dedicated, he seeks to protect peace along with all the other members of the Order of Heroes.',
            cv: ['Ray Chase', 'Tatsuhisa Suzuki'],
            title: 'Prince of Askr',
            rarity: '5',
            element: 'Light',
            weapon: 'Sword',
            role: 'Attack',
            atk: '487',
            hp: '736',
            coability: {
                name: 'Dragon Haste +8%',
                baseEffect: 'Increases dragon gauge fill rate by 8%. Benefits your whole team.',
                upgrades: [
                    'Increases dragon gauge fill rate by 9%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 11%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 12%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Last Burst I',
                        effect: 'Buffs strength by 40% for 10 seconds when HP drops to 30% (once per quest).'
                    },
                    {
                        name: 'Last Burst II',
                        effect: 'Buffs strength by 50% for 10 seconds when HP drops to 30% (once per quest).'
                    }
                ],
                [
                    {
                        name: 'Curse Res +50%',
                        effect: 'Reduces susceptibility to curses by 50%.'
                    },
                    {
                        name: 'Curse Res +100%',
                        effect: 'Reduces susceptibility to curses by 100%.'
                    }
                ],
                [
                    {
                        name: 'Skill Haste +6%',
                        effect: 'Increases skill gauge fill rate by 6%.'
                    },
                    {
                        name: 'Skill Haste +8%',
                        effect: 'Increases skill gauge fill rate by 8%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Blue Radiance',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals light damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 2',
                            description: "Increases the user's strength by 10% for 10 seconds, and deals light damage to enemies directly ahead."
                        },
                        {
                            level: 'Lvl 3',
                            description: "Increases the user's strength by 15% for 10 seconds, and deals light damage to enemies directly ahead."
                        }
                    ],
                    cost: '3500',
                    regen: 'None',
                    iframe: 'Long'
                },
                {
                    name: 'Sol',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals light damage to surrounding enemies, and restores 3% of the damage inflicted as HP to the user. This recovery caps at 15% of their maximum HP.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals light damage to surrounding enemies, and restores 3% of the damage inflicted as HP to the user. This recovery caps at 15% of their maximum HP.'
                        }
                    ],
                    cost: '4983',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Cleo',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Cleo-4-star_0.png?itok=pWzHPFG9',
            description: 'A girl who defended the Halidom for ages while it was sealed in mist and always has control of her emotions. She now aids the new master of the Halidom, Euden, and is known for her intense housework skills.',
            cv: ['Siobhan Rebecca', 'Yumi Uchiyama'],
            title: 'Belle Healer',
            rarity: '4',
            element: 'Shadow',
            weapon: 'Staff',
            role: 'Healing',
            atk: '446',
            hp: '763',
            coability: {
                name: 'Recovery Potency +6%',
                baseEffect: 'Increases the potency of recovery skills by 6%. Benefits your whole team.',
                upgrades: [
                    'Increases the potency of recovery skills by 8%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 10%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 14%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 20%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Skill Prep +50%',
                        effect: 'Fills 50% of skill gauges at the start of quests.'
                    },
                    {
                        name: 'Skill Prep +75%',
                        effect: 'Fills 75% of skill gauges at the start of quests.'
                    }
                ],
                [
                    {
                        name: 'Paralysis Res +50%',
                        effect: 'Reduces susceptibility to paralysis by 50%.'
                    },
                    {
                        name: 'Paralysis Res +100%',
                        effect: 'Reduces susceptibility to paralysis by 100%.'
                    }
                ],
                [
                    {
                        name: 'HP 70% = Defense +8%',
                        effect: 'Increases defense by 8% when HP is 70% or above.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Elder Cure',
                    levels: [
                        {level: 'Lvl 1', description: 'Restores HP to all allies.'},
                        {
                            level: 'Lvl 2',
                            description: 'Restores HP to all allies and removes paralysis.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Restores HP to all allies and removes paralysis.'
                        }
                    ],
                    cost: '5916',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Ancient Aegis',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Increases the entire team's defense by 15% for 15 seconds."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Increases the entire team's defense by 20% for 15 seconds."
                        }
                    ],
                    cost: '8534',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Xania',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Xania-3-star.png?itok=5waBoYPW',
            description: `A determined young woman who seeks to finish the book of magic her father left her. She thinks she'll understand the meaning of her life once she comprehends the words he wrote in the book: "Life is the endless struggle for peace.`,
            cv: ['Kelly Marie', 'Megumi Toyoguchi'],
            title: 'Meandering Mage',
            rarity: '3',
            element: 'Flame',
            weapon: 'Wand',
            role: 'Attack',
            atk: '487',
            hp: '709',
            coability: {
                name: 'Skill Damage +2%',
                baseEffect: 'Increases attack skill damage by 2%. Benefits your whole team.',
                upgrades: [
                    'Increases attack skill damage by 5%. Benefits your whole team.',
                    'Increases attack skill damage by 8%. Benefits your whole team.',
                    'Increases attack skill damage by 11%. Benefits your whole team.',
                    'Increases attack skill damage by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Skill Damage +15%',
                        effect: 'Increases attack skill damage by 15%.'
                    },
                    {
                        name: 'Skill Damage +20%',
                        effect: 'Increases attack skill damage by 20%.'
                    }
                ],
                [
                    {
                        name: 'Stun Res +25%',
                        effect: 'Reduces susceptibility to stun by 25%.'
                    },
                    {
                        name: 'Stun Res +50%',
                        effect: 'Reduces susceptibility to stun by 50%.'
                    }
                ],
                [
                    {
                        name: 'Stun Res +25%',
                        effect: 'Reduces susceptibility to stun by 25%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Ivyblaze',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals flame damage to enemies in a line.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals flame damage to enemies in a line.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals flame damage to enemies in a line.'
                        }
                    ],
                    cost: '2759',
                    regen: 'None',
                    iframe: 'Short'
                },
                {
                    name: 'Pyreblossom',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals flame damage to the target and nearby enemies.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals flame damage to the target and nearby enemies.'
                        }
                    ],
                    cost: '5570',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Amane',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Amane-4-star.png?itok=mKYUF5Zt',
            description: `A "child of miracles" from a distant country. She hates dragons and desires to eliminate them. Her reckless efforts are often misguided, but her earnestness moves others to action. Though she looks young, she's actually an adult.`,
            cv: ['Kazumi Evans', 'Yukari Tamura'],
            title: 'Child of Miracles',
            rarity: '4',
            element: 'Light',
            weapon: 'Wand',
            role: 'Attack',
            atk: '494',
            hp: '729',
            coability: {
                name: 'Skill Damage +5%',
                baseEffect: 'Increases attack skill damage by 5%. Benefits your whole team.',
                upgrades: [
                    'Increases attack skill damage by 6%. Benefits your whole team.',
                    'Increases attack skill damage by 8%. Benefits your whole team.',
                    'Increases attack skill damage by 11%. Benefits your whole team.',
                    'Increases attack skill damage by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Skill Prep +50%',
                        effect: 'Fills 50% of skill gauges at the start of quests.'
                    },
                    {
                        name: 'Skill Prep +75%',
                        effect: 'Fills 75% of skill gauges at the start of quests.'
                    }
                ],
                [
                    {
                        name: 'Curse Res +50%',
                        effect: 'Reduces susceptibility to curses by 50%.'
                    },
                    {
                        name: 'Curse Res +100%',
                        effect: 'Reduces susceptibility to curses by 100%.'
                    }
                ],
                [
                    {
                        name: 'Broken Punisher +20%',
                        effect: 'Increases damage to enemies in break state by 20%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Empyreal Levin',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals light damage to the target and nearby enemies.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals light damage to the target and nearby enemies.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals light damage to the target and nearby enemies.'
                        }
                    ],
                    cost: '2711',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Hallowed Raiments',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Increases the user's strength by 10% for 10 seconds, and increases max HP by 5% for the remainder of the quest. Once HP buffs reach the limit, an HP recovery effect is granted instead."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Increases the user's strength by 15% for 10 seconds, and increases max HP by 10% for the remainder of the quest. Once HP buffs reach the limit, an HP recovery effect is granted instead."
                        }
                    ],
                    cost: '11449',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Orion',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Orion-4-star.png?itok=kOBYdP0a',
            description: "A bodyguard, but only for females. He's quick to chat up women he likes, which often lands him in a world of trouble—a situation he oddly seems to enjoy. He claims to suffer from a curse that can only be broken by his future soul mate.",
            cv: ['Justin Dominic', 'Takahiro Sakurai'],
            title: 'Maiden Protector',
            rarity: '4',
            element: 'Shadow',
            weapon: 'Dagger',
            role: 'Support',
            atk: '462',
            hp: '773',
            coability: {
                name: 'Critical Rate +3%',
                baseEffect: 'Increases critical rate by 3%. Benefits your whole team.',
                upgrades: [
                    'Increases critical rate by 4%. Benefits your whole team.',
                    'Increases critical rate by 5%. Benefits your whole team.',
                    'Increases critical rate by 7%. Benefits your whole team.',
                    'Increases critical rate by 10%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Flurry Devastation +8%',
                        effect: 'Increases critical rate by 8% when the combo count is 15 or higher.'
                    },
                    {
                        name: 'Flurry Devastation +10%',
                        effect: 'Increases critical rate by 10% when the combo count is 15 or higher.'
                    }
                ],
                [
                    {
                        name: 'Paralysis Res +50%',
                        effect: 'Reduces susceptibility to paralysis by 50%.'
                    },
                    {
                        name: 'Paralysis Res +100%',
                        effect: 'Reduces susceptibility to paralysis by 100%.'
                    }
                ],
                [
                    {
                        name: 'Skill Prep +50%',
                        effect: 'Fills 50% of skill gauges at the start of quests.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Love Goes Round',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals shadow damage to surrounding enemies.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals shadow damage to surrounding enemies, and inflicts blindness.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals shadow damage to surrounding enemies, and inflicts blindness.'
                        }
                    ],
                    cost: '2213',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Twilight Tryst',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals shadow damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals shadow damage to enemies directly ahead.'
                        }
                    ],
                    cost: '4904',
                    regen: 'None',
                    iframe: 'Short'
                }
            ]
        }
        ,
        {
            name: 'Johanna',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Johanna-3-star.png?itok=-cddoeO1',
            description: 'A warrior who found her purpose in combat, casting aside thoughts of winning or losing in place of pure enjoyment. Her looks can kill, but woe be the person who points this out, as she prefers the battlefield to the ballroom.',
            cv: ['Siobhan Rebecca', 'Rina Sato'],
            title: 'Untamed Warrioress',
            rarity: '3',
            element: 'Wind',
            weapon: 'Axe',
            role: 'Defense',
            atk: '444',
            hp: '781',
            coability: {
                name: 'Defense +5%',
                baseEffect: 'Increases defense by 5%. Benefits your whole team.',
                upgrades: [
                    'Increases defense by 7%. Benefits your whole team.',
                    'Increases defense by 9%. Benefits your whole team.',
                    'Increases defense by 11%. Benefits your whole team.',
                    'Increases defense by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: "Slayer's Strength +3%",
                        effect: 'Increases strength by 3% for every five enemies defeated (up to five times per quest).'
                    },
                    {
                        name: "Slayer's Strength +4%",
                        effect: 'Increases strength by 4% for every five enemies defeated (up to five times per quest).'
                    }
                ],
                [
                    {
                        name: 'Freeze Res +25%',
                        effect: 'Reduces susceptibility to freezing by 25%.'
                    },
                    {
                        name: 'Freeze Res +50%',
                        effect: 'Reduces susceptibility to freezing by 50%.'
                    }
                ],
                [
                    {
                        name: 'Poison Res +25%',
                        effect: 'Reduces susceptibility to poison by 25%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Unbridled Rage',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals wind damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals wind damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals wind damage to enemies directly ahead.'
                        }
                    ],
                    cost: '2904',
                    regen: 'None',
                    iframe: 'Short'
                },
                {
                    name: 'Cyclone Axe',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals wind damage to surrounding enemies and draws them toward the user.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals wind damage to surrounding enemies and draws them toward the user.'
                        }
                    ],
                    cost: '5735',
                    regen: 'None',
                    iframe: 'Short'
                }
            ]
        }
        ,
        {
            name: 'Orsem',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Orsem-4-star.png?itok=-3Hst9Kc',
            description: 'A young man from a northern land of ice and snow. The blades in his shoes house ice mana that freezes the ground before him, allowing him to display his immaculate skating ability. He seeks to spread word of his beloved hobby to all.',
            cv: ['Jason McKinnon', 'Nobuhiko Okamoto'],
            title: 'Dreamer on Ice',
            rarity: '4',
            element: 'Water',
            weapon: 'Dagger',
            role: 'Attack',
            atk: '482',
            hp: '738',
            coability: {
                name: 'Critical Rate +3%',
                baseEffect: 'Increases critical rate by 3%. Benefits your whole team.',
                upgrades: [
                    'Increases critical rate by 4%. Benefits your whole team.',
                    'Increases critical rate by 5%. Benefits your whole team.',
                    'Increases critical rate by 7%. Benefits your whole team.',
                    'Increases critical rate by 10%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Flurry Devastation +8%',
                        effect: 'Increases critical rate by 8% when the combo count is 15 or higher.'
                    },
                    {
                        name: 'Flurry Devastation +10%',
                        effect: 'Increases critical rate by 10% when the combo count is 15 or higher.'
                    }
                ],
                [
                    {
                        name: 'Burn Res +50%',
                        effect: 'Reduces susceptibility to burning by 50%.'
                    },
                    {
                        name: 'Burn Res +100%',
                        effect: 'Reduces susceptibility to burning by 100%.'
                    }
                ],
                [
                    {
                        name: 'HP 70% = Critical Rate +6%',
                        effect: 'Increases critical rate by 6% when HP is 70% or above.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Flurry Edge',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals water damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals water damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals water damage to enemies directly ahead.'
                        }
                    ],
                    cost: '2311',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Triple Salchow',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals water damage to surrounding enemies.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals water damage to surrounding enemies, and inflicts freeze.'
                        }
                    ],
                    cost: '4685',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Karina',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Karina-4-star.png?itok=8vwCoQsO',
            description: "A pirate captain who loves freedom as much as the sea. She's stern with her subordinates but also takes good care of them. She loves how the sea allows her to not be tied down, as that was once a problem in her past.",
            cv: ['Mavis Ada', 'Megumi Toyoguchi'],
            title: 'Free-Spirited Pirate',
            rarity: '4',
            element: 'Water',
            weapon: 'Axe',
            role: 'Defense',
            atk: '452',
            hp: '799',
            coability: {
                name: 'Defense +7%',
                baseEffect: 'Increases defense by 7%. Benefits your whole team.',
                upgrades: [
                    'Increases defense by 8%. Benefits your whole team.',
                    'Increases defense by 9%. Benefits your whole team.',
                    'Increases defense by 11%. Benefits your whole team.',
                    'Increases defense by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Healing Doublebuff II',
                        effect: 'Grants an HP regen buff for 20 seconds each time a defense up buff is received.'
                    },
                    {
                        name: 'Healing Doublebuff III',
                        effect: 'Grants an HP regen buff for 20 seconds each time a defense up buff is received.'
                    }
                ],
                [
                    {
                        name: 'Stun Res +50%',
                        effect: 'Reduces susceptibility to stun by 50%.'
                    },
                    {
                        name: 'Stun Res +100%',
                        effect: 'Reduces susceptibility to stun by 100%.'
                    }
                ],
                [
                    {
                        name: 'Skill Prep +50%',
                        effect: 'Fills 50% of skill gauges at the start of quests.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Raging Tide',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals water damage to enemies directly ahead. The more buffs the user has, the higher the skill boost received and the higher the damage dealt.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals water damage to enemies directly ahead. The more buffs the user has, the higher the skill boost received and the higher the damage dealt.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals water damage to enemies directly ahead. The more buffs the user has, the higher the skill boost received and the higher the damage dealt.'
                        }
                    ],
                    cost: '3033',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Black Flag',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals water damage to surrounding enemies and draws them toward the user.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals water damage to surrounding enemies and draws them toward the user.'
                        }
                    ],
                    cost: '5610',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Ezelith',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Ezelith-5-star.png?itok=Ld8i8eEn',
            description: "A young prodigy—as she'll be happy to tell you—who excels in the use of both weapons and mana. Reckless and rather troublesome, her cockiness is rivaled only by her actual skill.",
            cv: ['Sabrina Pitre', 'Kana Ueda'],
            title: 'Genius of the Century',
            rarity: '5',
            element: 'Flame',
            weapon: 'Dagger',
            role: 'Support',
            atk: '476',
            hp: '798',
            coability: {
                name: 'Critical Rate +5%',
                baseEffect: 'Increases critical rate by 5%. Benefits your whole team.',
                upgrades: [
                    'Increases critical rate by 6%. Benefits your whole team.',
                    'Increases critical rate by 7%. Benefits your whole team.',
                    'Increases critical rate by 8%. Benefits your whole team.',
                    'Increases critical rate by 10%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Flurry Debilitator +15%',
                        effect: 'Increases the chances of inflicting debuffs by 15% when the combo count is 15 or higher.'
                    },
                    {
                        name: 'Flurry Debilitator +20%',
                        effect: 'Increases the chances of inflicting debuffs by 20% when the combo count is 15 or higher.'
                    }
                ],
                [
                    {
                        name: 'Sleep Res +50%',
                        effect: 'Reduces susceptibility to sleep by 50%.'
                    },
                    {
                        name: 'Sleep Res +100%',
                        effect: 'Reduces susceptibility to sleep by 100%.'
                    }
                ],
                [
                    {
                        name: 'Broken Punisher +25%',
                        effect: 'Increases damage to enemies in break state by 25%.'
                    },
                    {
                        name: 'Broken Punisher +30%',
                        effect: 'Increases damage to enemies in break state by 30%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Howling Meteor',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals flame damage to enemies directly ahead. Movement is possible during the attack.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals flame damage to enemies directly ahead. Movement is possible during the attack.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals flame damage to enemies directly ahead. Movement is possible during the attack.'
                        }
                    ],
                    cost: '2400',
                    regen: 'None',
                    iframe: 'Long'
                },
                {
                    name: 'Brilliant Inferno',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Activates "Inferno Mode" for 15 seconds. The user gains a strength increase of 10%, and their normal attacks reduce enemy defense.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Activates "Inferno Mode" for 15 seconds. The user gains a strength increase of 15%, and their normal attacks reduce enemy defense.'
                        }
                    ],
                    cost: '8940',
                    regen: 'None',
                    iframe: 'Short'
                }
            ]
        }
        ,
        {
            name: 'Eleonora',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Eleonora-4-star.png?itok=gria06n-',
            description: 'A former tribal leader, this woman places her vengeful resolve in each arrow she lets loose. While she seeks vengeance for her massacred village, her curiosity about humans and overall cute nature contrast with her calm resolve.',
            cv: ['Raynn Eastwood', 'Ayako Kawasumi'],
            title: 'Curious Archer',
            rarity: '4',
            element: 'Wind',
            weapon: 'Bow',
            role: 'Attack',
            atk: '478',
            hp: '741',
            coability: {
                name: 'Skill Haste +5%',
                baseEffect: 'Increases skill gauge fill rate by 5%. Benefits your whole team.',
                upgrades: [
                    'Increases skill gauge fill rate by 6%. Benefits your whole team.',
                    'Increases skill gauge fill rate by 8%. Benefits your whole team.',
                    'Increases skill gauge fill rate by 11%. Benefits your whole team.',
                    'Increases skill gauge fill rate by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Full HP = Poison +40%',
                        effect: 'Increases the chances of inflicting poison by 40% when HP is full.'
                    },
                    {
                        name: 'Full HP = Poison +50%',
                        effect: 'Increases the chances of inflicting poison by 50% when HP is full.'
                    }
                ],
                [
                    {
                        name: 'Bog Res +50%',
                        effect: 'Reduces susceptibility to bog by 50%.'
                    },
                    {
                        name: 'Bog Res +100%',
                        effect: 'Reduces susceptibility to bog by 100%.'
                    }
                ],
                [
                    {
                        name: 'Skill Prep +50%',
                        effect: 'Fills 50% of skill gauges at the start of quests.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Viper Bolt',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals wind damage to the target.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals wind damage to the target, and inflicts poison.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals wind damage to the target, and inflicts poison.'
                        }
                    ],
                    cost: '2504',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Vendetta Arrow',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals wind damage to enemies in a line.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals wind damage to enemies in a line, and inflicts poison.'
                        }
                    ],
                    cost: '5115',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Vixel',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-11/Vixel-4-star.png?itok=JgkbKIXm',
            description: 'An up-and-coming conductor who graduated from a noted choir and now travels the land leading various orchestras. He is mature and tolerant, deeply passionate when it comes to music, and quite proud of his body of work.',
            cv: ['Peter New', 'Kaito Ishikawa'],
            title: 'Musical Maestro',
            rarity: '4',
            element: 'Light',
            weapon: 'Staff',
            role: 'Healing',
            atk: '452',
            hp: '786',
            coability: {
                name: 'Recovery Potency +6%',
                baseEffect: 'Increases the potency of recovery skills by 6%. Benefits your whole team.',
                upgrades: [
                    'Increases the potency of recovery skills by 8%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 10%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 14%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 20%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Full HP = Healing +13%',
                        effect: 'Increases the potency of recovery skills by 13% when HP is full.'
                    },
                    {
                        name: 'Full HP = Healing +15%',
                        effect: 'Increases the potency of recovery skills by 15% when HP is full.'
                    }
                ],
                [
                    {
                        name: 'Sleep Res +50%',
                        effect: 'Reduces susceptibility to sleep by 50%.'
                    },
                    {
                        name: 'Sleep Res +100%',
                        effect: 'Reduces susceptibility to sleep by 100%.'
                    }
                ],
                [
                    {
                        name: 'Skill Prep +50%',
                        effect: 'Fills 50% of skill gauges at the start of quests.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Spirited Song',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Restores HP to all allies and continues healing over the next 15 seconds.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Restores HP to all allies and continues healing over the next 15 seconds.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Restores HP to all allies and continues healing over the next 15 seconds.'
                        }
                    ],
                    cost: '5916',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Agitato Assault',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Increases the potency of the entire team's recovery skills by 5% for 10 seconds, and increases their energy levels by one stage. When an adventurer's energy level reaches level five, they will become energized, and their next attack or recovery skill will be upgraded. Using any applicable skill resets that adventurer's energy level to zero."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Increases the potency of the entire team's recovery skills by 10% for 10 seconds, and increases their energy level by one stage. When an adventurer's energy level reaches level five, they will become energized, and their next attack or recovery skill will be upgraded. Using any applicable skill resets that adventurer's energy level to zero."
                        }
                    ],
                    cost: '4819',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: "Valentine's Ezelith",
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-02/Valentine%26%23039%3Bs%20Ezelith-4-star_0.png?itok=Qzk7umhu',
            description: "Even the Halidom's resident genius has to dress up for a cute event like Valentine's. Though she's still as snarky and confident as ever, the spirit of the event has caused feelings of gratefulness and love to take hold within her as well.",
            cv: ['Sabrina Pitre', 'Kana Ueda'],
            title: 'Stunning Sweetheart',
            rarity: '4',
            element: 'Flame',
            weapon: 'Bow',
            role: 'Support',
            atk: '462',
            hp: '787',
            coability: {
                name: 'Skill Haste +5%',
                baseEffect: 'Increases skill gauge fill rate by 5%. Benefits your whole team.',
                upgrades: [
                    'Increases skill gauge fill rate by 6%. Benefits your whole team.',
                    'Increases skill gauge fill rate by 8%. Benefits your whole team.',
                    'Increases skill gauge fill rate by 11%. Benefits your whole team.',
                    'Increases skill gauge fill rate by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: '40 Hits = Energy Level Up',
                        effect: "Increases the user's energy level by one stage for every 40-hit combo."
                    },
                    {
                        name: '35 Hits = Energy Level Up',
                        effect: "Increases the user's energy level by one stage for every 35-hit combo."
                    }
                ],
                [
                    {
                        name: 'Stun Res +50%',
                        effect: 'Reduces susceptibility to stun by 50%.'
                    },
                    {
                        name: 'Stun Res +100%',
                        effect: 'Reduces susceptibility to stun by 100%.'
                    }
                ],
                [
                    {
                        name: 'Broken Punisher +20%',
                        effect: 'Increases damage to enemies in break state by 20%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Floral Explosion',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals flame damage to the target and nearby enemies.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals flame damage to enemies directly ahead, and inflicts burn.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals flame damage to enemies directly ahead, and inflicts burn.'
                        }
                    ],
                    cost: '2708',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Piercing Rose',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals flame damage to enemies in a line.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals flame damage to enemies in a line, and reduces their defense by 10%.'
                        }
                    ],
                    cost: '5115',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Renelle',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Renelle-3-star.png?itok=pWo25-rS',
            description: 'An outspoken, confident treasure hunter who takes pride in her work and has the skills to back it up. She seeks a partner who treats her as an equal and loves the thrill of the hunt just as much as she does.',
            cv: ['Brittney Boni', 'Megumi Han'],
            title: 'Honorable Treasure Hunter',
            rarity: '3',
            element: 'Flame',
            weapon: 'Dagger',
            role: 'Support',
            atk: '452',
            hp: '758',
            coability: {
                name: 'Critical Rate +1%',
                baseEffect: 'Increases critical rate by 1%. Benefits your whole team.',
                upgrades: [
                    'Increases critical rate by 3%. Benefits your whole team.',
                    'Increases critical rate by 5%. Benefits your whole team.',
                    'Increases critical rate by 7%. Benefits your whole team.',
                    'Increases critical rate by 10%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Flurry Devastation +5%',
                        effect: 'Increases critical rate by 5% when the combo count is 15 or higher.'
                    },
                    {
                        name: 'Flurry Devastation +8%',
                        effect: 'Increases critical rate by 8% when the combo count is 15 or higher.'
                    }
                ],
                [
                    {
                        name: 'Curse Res +25%',
                        effect: 'Reduces susceptibility to curses by 25%.'
                    },
                    {
                        name: 'Curse Res +50%',
                        effect: 'Reduces susceptibility to curses by 50%.'
                    }
                ],
                [
                    {
                        name: 'Curse Res +25%',
                        effect: 'Reduces susceptibility to curses by 25%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Flamewhorl',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals flame damage to surrounding enemies.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals flame damage to surrounding enemies.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals flame damage to surrounding enemies.'
                        }
                    ],
                    cost: '2318',
                    regen: 'None',
                    iframe: 'Short'
                },
                {
                    name: 'Subterfuge',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals flame damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals flame damage to enemies directly ahead, and reduces their defense by 5%.'
                        }
                    ],
                    cost: '4892',
                    regen: 'None',
                    iframe: 'Short'
                }
            ]
        }
        ,
        {
            name: "Valentine's Orion",
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-02/Valentine%26%23039%3Bs%20Orion-3-star.png?itok=DEXx2pGR',
            description: "Orion's preparations for Valentine's are perfect. He had an outfit custom made, and even grew the rose on his chest himself. Now he's ready to escort ladies who dream of a wonderful day!",
            cv: ['Justin Dominic', 'Takahiro Sakurai'],
            title: "Valentine's Guardian",
            rarity: '3',
            element: 'Flame',
            weapon: 'Sword',
            role: 'Support',
            atk: '471',
            hp: '778',
            coability: {
                name: 'Dragon Haste +2%',
                baseEffect: 'Increases dragon gauge fill rate by 2%. Benefits your whole team.',
                upgrades: [
                    'Increases dragon gauge fill rate by 5%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 8%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 11%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Strength Doublebuff +5%',
                        effect: 'Increases strength by 5% for 15 seconds each time a defense up buff is received.'
                    },
                    {
                        name: 'Strength Doublebuff +8%',
                        effect: 'Increases strength by 8% for 15 seconds each time a defense up buff is received.'
                    }
                ],
                [
                    {
                        name: 'Curse Res +25%',
                        effect: 'Reduces susceptibility to curses by 25%.'
                    },
                    {
                        name: 'Curse Res +50%',
                        effect: 'Reduces susceptibility to curses by 50%.'
                    }
                ],
                [
                    {
                        name: 'Curse Res +25%',
                        effect: 'Reduces susceptibility to curses by 25%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Spinning Brûlée',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals flame damage to surrounding enemies.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals flame damage to surrounding enemies, and inflicts burn.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals flame damage to surrounding enemies, and inflicts burn.'
                        }
                    ],
                    cost: '2409',
                    regen: 'None',
                    iframe: 'Long'
                },
                {
                    name: 'Sweet Protection',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Increases the entire team's defense by 10% for 15 seconds."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Increases the entire team's defense by 15% for 15 seconds."
                        }
                    ],
                    cost: '7633',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Malora',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Malora-3-star.png?itok=FB-XDpsF',
            description: 'Her voluptuousness and flirtatious speech make men an easy target for this charming sniper. Stringing people along is just a game to her, however, and those who fall for her charms always regret it in the end.',
            cv: ['Mavis Ada', 'Ayako Kawasumi'],
            title: 'Alluring Sniper',
            rarity: '3',
            element: 'Light',
            weapon: 'Bow',
            role: 'Support',
            atk: '445',
            hp: '767',
            coability: {
                name: 'Skill Haste +2%',
                baseEffect: 'Increases skill gauge fill rate by 2%. Benefits your whole team.',
                upgrades: [
                    'Increases skill gauge fill rate by 5%. Benefits your whole team.',
                    'Increases skill gauge fill rate by 8%. Benefits your whole team.',
                    'Increases skill gauge fill rate by 11%. Benefits your whole team.',
                    'Increases skill gauge fill rate by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Broken Punisher +15%',
                        effect: 'Increases damage to enemies in break state by 15%.'
                    },
                    {
                        name: 'Broken Punisher +20%',
                        effect: 'Increases damage to enemies in break state by 20%.'
                    }
                ],
                [
                    {
                        name: 'Curse Res +25%',
                        effect: 'Reduces susceptibility to curses by 25%.'
                    },
                    {
                        name: 'Curse Res +50%',
                        effect: 'Reduces susceptibility to curses by 50%.'
                    }
                ],
                [
                    {
                        name: 'Curse Res +25%',
                        effect: 'Reduces susceptibility to curses by 25%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Morning Glow',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals light damage to enemies in a line.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals light damage to enemies in a line.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals light damage to enemies in a line.'
                        }
                    ],
                    cost: '2395',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Provocative Shot',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals light damage to enemies in a line.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals light damage to enemies in a line, and reduces their defense by 5%.'
                        }
                    ],
                    cost: '5051',
                    regen: 'None',
                    iframe: 'Short'
                }
            ]
        }
        ,
        {
            name: 'Botan',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-12/Botan-4-star.png?itok=bG0-Vn6F',
            description: "A young naginata user from Hinomoto. Quite reckless, she will go to any lengths to achieve a goal once she's set her mind on it—such as leaving her home for a foreign land in order to pursue her old friend Ieyasu.",
            cv: ['Caitlyn Bairstow', 'Aya Hirano'],
            title: 'Naginata Cutie',
            rarity: '4',
            element: 'Shadow',
            weapon: 'Lance',
            role: 'Defense',
            atk: '439',
            hp: '785',
            coability: {
                name: 'HP +7%',
                baseEffect: 'Increases HP by 7%. Benefits your whole team.',
                upgrades: [
                    'Increases HP by 8%. Benefits your whole team.',
                    'Increases HP by 9%. Benefits your whole team.',
                    'Increases HP by 12%. Benefits your whole team.',
                    'Increases HP by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: "Thaumian's Bane +20%",
                        effect: 'Increases damage to thaumians by 20%.'
                    },
                    {
                        name: "Thaumian's Bane +25%",
                        effect: 'Increases damage to thaumians by 25%.'
                    }
                ],
                [
                    {
                        name: 'Paralysis Res +25%',
                        effect: 'Reduces susceptibility to paralysis by 25%.'
                    },
                    {
                        name: 'Paralysis Res +50%',
                        effect: 'Reduces susceptibility to paralysis by 50%.'
                    }
                ],
                [
                    {
                        name: 'Skill Prep +50%',
                        effect: 'Fills 50% of skill gauges at the start of quests.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Petal Piercer',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals shadow damage to enemies directly ahead, and inflicts bleeding.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals shadow damage to enemies directly ahead, and inflicts bleeding.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals shadow damage to enemies directly ahead, and inflicts bleeding.'
                        }
                    ],
                    cost: '2427',
                    regen: 'None',
                    iframe: 'Long'
                },
                {
                    name: 'Perennial Grace',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Increases the entire team's strength by 10% for 15 seconds."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Increases the entire team's strength by 15% for 15 seconds."
                        }
                    ],
                    cost: '7634',
                    regen: 'None',
                    iframe: 'Long'
                }
            ]
        }
        ,
        {
            name: 'Luther',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Luther-4-star.png?itok=CH-5T3J7',
            description: 'Twisting his troubles away, this youth exudes passion and fervor and seeks only to empower others through the power of dance. Those who are captivated by his moves tend to find their problems magically washed away.',
            cv: ['Vincent Tong', 'Katsuyuki Konishi'],
            title: 'Passionate Dancer',
            rarity: '4',
            element: 'Water',
            weapon: 'Dagger',
            role: 'Support',
            atk: '459',
            hp: '777',
            coability: {
                name: 'Critical Rate +3%',
                baseEffect: 'Increases critical rate by 3%. Benefits your whole team.',
                upgrades: [
                    'Increases critical rate by 4%. Benefits your whole team.',
                    'Increases critical rate by 5%. Benefits your whole team.',
                    'Increases critical rate by 7%. Benefits your whole team.',
                    'Increases critical rate by 10%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Flurry Devastation +8%',
                        effect: 'Increases critical rate by 8% when the combo count is 15 or higher.'
                    },
                    {
                        name: 'Flurry Devastation +10%',
                        effect: 'Increases critical rate by 10% when the combo count is 15 or higher.'
                    }
                ],
                [
                    {
                        name: 'Stun Res +50%',
                        effect: 'Reduces susceptibility to stun by 50%.'
                    },
                    {
                        name: 'Stun Res +100%',
                        effect: 'Reduces susceptibility to stun by 100%.'
                    }
                ],
                [
                    {
                        name: "Striker's Strength +4%",
                        effect: 'Increases strength by 4% for every three enemies defeated with force strikes (up to five times per quest).'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Legato Step',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals water damage to surrounding enemies.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals water damage to surrounding enemies.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals water damage to surrounding enemies.'
                        }
                    ],
                    cost: '2343',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Terpsichore',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals water damage to enemies directly ahead, and reduces their strength by 5%.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals water damage to enemies directly ahead, and reduces their strength and defense by 5%.'
                        }
                    ],
                    cost: '4904',
                    regen: 'None',
                    iframe: 'Short'
                }
            ]
        }
        ,
        {
            name: 'Ieyasu',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-12/Ieyasu-5-star.png?itok=MriO_qcy',
            description: 'The head of one of the Twelve Wyrmclans who rule the island nation of Hinomoto. He represents the boar, and formed a pact with the dragon Marishiten. Though a master swordsman, he has a soft heart and despises war in all its forms.',
            cv: ['Lee Majdoub', 'Jun Fukuyama'],
            title: 'Leader of the Boar Clan',
            rarity: '5',
            element: 'Shadow',
            weapon: 'Blade',
            role: 'Attack',
            atk: '521',
            hp: '739',
            coability: {
                name: 'Strength +5%',
                baseEffect: 'Increases strength by 5%. Benefits your whole team.',
                upgrades: [
                    'Increases strength by 6%. Benefits your whole team.',
                    'Increases strength by 7%. Benefits your whole team.',
                    'Increases strength by 8%. Benefits your whole team.',
                    'Increases strength by 10%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'HP 70% = Critical Rate +8%',
                        effect: 'Increases critical rate by 8% when HP is 70% or above.'
                    },
                    {
                        name: 'HP 70% = Critical Rate +10%',
                        effect: 'Increases critical rate by 10% when HP is 70% or above.'
                    }
                ],
                [
                    {
                        name: 'Paralysis Res +50%',
                        effect: 'Reduces susceptibility to paralysis by 50%.'
                    },
                    {
                        name: 'Paralysis Res +100%',
                        effect: 'Reduces susceptibility to paralysis by 100%.'
                    }
                ],
                [
                    {
                        name: 'Critical Damage +15%',
                        effect: 'Adds 15% to the modifier applied to critical damage.'
                    },
                    {
                        name: 'Critical Damage +20%',
                        effect: 'Adds 20% to the modifier applied to critical damage.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Sakura Flurry',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals shadow damage to enemies directly ahead, and inflicts bleeding.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals shadow damage to enemies directly ahead, and inflicts bleeding.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals shadow damage to enemies directly ahead, and inflicts bleeding.'
                        }
                    ],
                    cost: '2467',
                    regen: 'None',
                    iframe: 'Long'
                },
                {
                    name: 'Blade Formation',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: `Activates "Blade Formation" for 15 seconds. During Blade Formation, the user's HP gradually recovers, and their critical rate against bleeding enemies is increased by 10%.`
                        },
                        {
                            level: 'Lvl 2',
                            description: `Activates "Blade Formation" for 15 seconds. During Blade Formation, the user's HP gradually recovers, and their critical rate against bleeding enemies is increased by 15%.`
                        }
                    ],
                    cost: '7913',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Malka',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Malka-3-star.png?itok=O_OP1sBI',
            description: "A master craftsman who adorns himself in gold armor. Some think he did so to show off his wealth, but there's a deeper reason for it. His fervor for armor burns hotter than a furnace, and his need to save lives is stronger than steel.",
            cv: ['John Bradford', 'Masakazu Morita'],
            title: 'Golden Armorer',
            rarity: '3',
            element: 'Light',
            weapon: 'Lance',
            role: 'Support',
            atk: '459',
            hp: '753',
            coability: {
                name: 'HP +5%',
                baseEffect: 'Increases HP by 5%. Benefits your whole team.',
                upgrades: [
                    'Increases HP by 7%. Benefits your whole team.',
                    'Increases HP by 9%. Benefits your whole team.',
                    'Increases HP by 12%. Benefits your whole team.',
                    'Increases HP by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Full HP = Defense +15%',
                        effect: 'Increases defense by 15% when HP is full.'
                    },
                    {
                        name: 'Full HP = Defense +20%',
                        effect: 'Increases defense by 20% when HP is full.'
                    }
                ],
                [
                    {
                        name: 'Poison Res +25%',
                        effect: 'Reduces susceptibility to poison by 25%.'
                    },
                    {
                        name: 'Poison Res +50%',
                        effect: 'Reduces susceptibility to poison by 50%.'
                    }
                ],
                [
                    {
                        name: 'Poison Res +25%',
                        effect: 'Reduces susceptibility to poison by 25%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Blaze of Gold',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals light damage to surrounding enemies.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals light damage to surrounding enemies.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals light damage to surrounding enemies.'
                        }
                    ],
                    cost: '2556',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Pride of the Forge',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Increases the entire team's strength by 8% for 15 seconds."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Increases the entire team's strength by 10% for 15 seconds."
                        }
                    ],
                    cost: '6610',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Halloween Edward',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Halloween%20Edward-3-star_0.png?itok=SDuQfAZS',
            description: ' - ',
            cv: ['Graham Hamilton', 'Takuma Terashima'],
            title: 'Bloodsucking Butler',
            rarity: '3',
            element: 'Light',
            weapon: 'Blade',
            role: 'Attack',
            atk: '491',
            hp: '707',
            coability: {
                name: 'Strength +1%',
                baseEffect: 'Increases strength by 1%. Benefits your whole team.',
                upgrades: [
                    'Increases strength by 3%. Benefits your whole team.',
                    'Increases strength by 5%. Benefits your whole team.',
                    'Increases strength by 7%. Benefits your whole team.',
                    'Increases strength by 10%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Full HP = Strength +8%',
                        effect: 'Increases strength by 8% when HP is full.'
                    },
                    {
                        name: 'Full HP = Strength +10%',
                        effect: 'Increases strength by 10% when HP is full.'
                    }
                ],
                [
                    {
                        name: 'Curse Res +25%',
                        effect: 'Reduces susceptibility to curses by 25%.'
                    },
                    {
                        name: 'Curse Res +50%',
                        effect: 'Reduces susceptibility to curses by 50%.'
                    }
                ],
                [
                    {
                        name: 'Curse Res +25%',
                        effect: 'Reduces susceptibility to curses by 25%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Vampire Slash',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals light damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals light damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals light damage to enemies directly ahead.'
                        }
                    ],
                    cost: '2392',
                    regen: 'None',
                    iframe: 'Short'
                },
                {
                    name: 'Nightmare Waltz',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Deals light damage to surrounding enemies, and restores the user's HP by 1% of damage inflicted."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Deals light damage to surrounding enemies, and restores the user's HP by 2% of damage inflicted."
                        }
                    ],
                    cost: '5346',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Alex',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-04/Alex-4-star.png?itok=_6xlyIYG',
            description: 'An assassin dispatched by the Ilian Church to dispose of Elisanne. The cold-hearted Alex normally carries out missions with machine-like precision, but personal feelings may well get in the way of this one.',
            cv: ['Olivia Howard', 'Ayaka Suwa'],
            title: 'Shadow Assassin',
            rarity: '4',
            element: 'Shadow',
            weapon: 'Dagger',
            role: 'Attack',
            atk: '476',
            hp: '719',
            coability: {
                name: 'Critical Rate +3%',
                baseEffect: 'Increases critical rate by 3%. Benefits your whole team.',
                upgrades: [
                    'Increases critical rate by 4%. Benefits your whole team.',
                    'Increases critical rate by 5%. Benefits your whole team.',
                    'Increases critical rate by 7%. Benefits your whole team.',
                    'Increases critical rate by 10%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Full HP = Skill Damage +30%',
                        effect: 'Increases attack skill damage by 30% when HP is full.'
                    },
                    {
                        name: 'Full HP = Skill Damage +35%',
                        effect: 'Increases attack skill damage by 35% when HP is full.'
                    }
                ],
                [
                    {
                        name: 'Blindness Res +50%',
                        effect: 'Reduces susceptibility to blindness by 50%.'
                    },
                    {
                        name: 'Blindness Res +100%',
                        effect: 'Reduces susceptibility to blindness by 100%.'
                    }
                ],
                [
                    {
                        name: 'Skill Haste +5%',
                        effect: 'Increases skill gauge fill rate by 5%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Shadow Weaver',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals shadow damage to surrounding enemies.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals shadow damage to surrounding enemies, and reduces their defense by 5%.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals shadow damage to surrounding enemies, and reduces their defense by 5%.'
                        }
                    ],
                    cost: '2243',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Silent Reaper',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals shadow damage to the target and nearby enemies. Enemies in break state take extra damage.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals shadow damage to the target and nearby enemies. Enemies in break state take extra damage.'
                        }
                    ],
                    cost: '4925',
                    regen: 'None',
                    iframe: 'Long'
                }
            ]
        }
        ,
        {
            name: 'Rex',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Rex-3-star.png?itok=1dobhg9-',
            description: 'A jaunty, personable lumberjack. The textbook example of a mountain man, he always returns equally anything given to him. His naivety of the sinister workings of the world—along with a trusting nature—makes him an easy mark.',
            cv: ['Will Williams', 'Kenjiro Tsuda'],
            title: 'Charitable Lumberjack',
            rarity: '3',
            element: 'Water',
            weapon: 'Axe',
            role: 'Attack',
            atk: '490',
            hp: '708',
            coability: {
                name: 'Defense +5%',
                baseEffect: 'Increases defense by 5%. Benefits your whole team.',
                upgrades: [
                    'Increases defense by 7%. Benefits your whole team.',
                    'Increases defense by 9%. Benefits your whole team.',
                    'Increases defense by 11%. Benefits your whole team.',
                    'Increases defense by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Gauge Inhibitor +20%',
                        effect: 'Slows the rate the mode gauge increases by 20%.'
                    },
                    {
                        name: 'Gauge Inhibitor +25%',
                        effect: 'Slows the rate the mode gauge increases by 25%.'
                    }
                ],
                [
                    {
                        name: 'Burn Res +25%',
                        effect: 'Reduces susceptibility to burning by 25%.'
                    },
                    {
                        name: 'Burn Res +50%',
                        effect: 'Reduces susceptibility to burning by 50%.'
                    }
                ],
                [
                    {
                        name: 'Burn Res +25%',
                        effect: 'Reduces susceptibility to burning by 25%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Smash Hit',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals water damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals water damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals water damage to enemies directly ahead.'
                        }
                    ],
                    cost: '2942',
                    regen: 'None',
                    iframe: 'Short'
                },
                {
                    name: 'Full Woodcutter',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals water damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals water damage to enemies directly ahead.'
                        }
                    ],
                    cost: '5807',
                    regen: 'None',
                    iframe: 'Short'
                }
            ]
        }
        ,
        {
            name: 'Luca',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Luca-4-star_0.png?itok=7xEURdVq',
            description: 'A boy who loves his home village of Woodhaven. He puts no airs on his honest nature and is more prone to quick action than deliberation. His love of pranks is often met with punches from his little sister, but he cares for her greatly.',
            cv: ['Will Weldon', 'Shintaro Asanuma'],
            title: 'Woodland Archer',
            rarity: '4',
            element: 'Light',
            weapon: 'Bow',
            role: 'Support',
            atk: '445',
            hp: '767',
            coability: {
                name: 'Skill Haste +5%',
                baseEffect: 'Increases skill gauge fill rate by 5%. Benefits your whole team.',
                upgrades: [
                    'Increases skill gauge fill rate by 6%. Benefits your whole team.',
                    'Increases skill gauge fill rate by 8%. Benefits your whole team.',
                    'Increases skill gauge fill rate by 11%. Benefits your whole team.',
                    'Increases skill gauge fill rate by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Full HP = Strength +10%',
                        effect: 'Increases strength by 10% when HP is full.'
                    },
                    {
                        name: 'Full HP = Strength +13%',
                        effect: 'Increases strength by 13% when HP is full.'
                    }
                ],
                [
                    {
                        name: 'Curse Res +25%',
                        effect: 'Reduces susceptibility to curses by 25%.'
                    },
                    {
                        name: 'Curse Res +50%',
                        effect: 'Reduces susceptibility to curses by 50%.'
                    }
                ],
                [
                    {
                        name: 'Poison Res +25%',
                        effect: 'Reduces susceptibility to poison by 25%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Radiant Bonds',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals light damage to the target.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals light damage to the target, and inflicts paralysis.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals light damage to the target, and inflicts paralysis.'
                        }
                    ],
                    cost: '2504',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Bolt of Light',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals light damage to enemies in a line.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals light damage to enemies in a line.'
                        }
                    ],
                    cost: '5115',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Fjorm',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-04/Fjorm-5-star.png?itok=pq6molZ9',
            description: "One of the princesses of the Ice Kingdom Nifl. She met Alfonse when fleeing her country after it was conquered. She's kind-hearted, loves her family, and believes in honoring debts—but she also despises those who ruined her home.",
            cv: ['Heather Watson', 'Rie Takahashi'],
            title: 'Princess of Ice',
            rarity: '5',
            element: 'Water',
            weapon: 'Lance',
            role: 'Attack',
            atk: '508',
            hp: '752',
            coability: {
                name: 'HP +9%',
                baseEffect: 'Increases HP by 9%. Benefits your whole team.',
                upgrades: [
                    'Increases HP by 10%. Benefits your whole team.',
                    'Increases HP by 12%. Benefits your whole team.',
                    'Increases HP by 13%. Benefits your whole team.',
                    'Increases HP by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Last Bravery I',
                        effect: "Increases the entire team's strength by 20% and defense by 30% for 15 seconds when the user's HP drops to 30% (once per quest)."
                    },
                    {
                        name: 'Last Bravery II',
                        effect: "Increases the entire team's strength by 30% and defense by 40% for 15 seconds when the user's HP drops to 30% (once per quest)."
                    }
                ],
                [
                    {
                        name: 'Burn Res +50%',
                        effect: 'Reduces susceptibility to burning by 50%.'
                    },
                    {
                        name: 'Burn Res +100%',
                        effect: 'Reduces susceptibility to burning by 100%.'
                    }
                ],
                [
                    {
                        name: 'Skill Prep +75%',
                        effect: 'Fills 75% of skill gauges at the start of quests.'
                    },
                    {
                        name: 'Skill Prep +100%',
                        effect: 'Fills 100% of skill gauges at the start of quests.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Frigid Smash',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals water damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals water damage to enemies directly ahead, and inflicts freeze.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals water damage to enemies directly ahead, and inflicts freeze.'
                        }
                    ],
                    cost: '2738',
                    regen: 'None',
                    iframe: 'Long'
                },
                {
                    name: 'Ice Mirror',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Summons "Ice Mirror," then deals water damage to the target and nearby enemies. Additional bonus damage will be dealt relative to the damage taken while "Ice Mirror" is active.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Summons "Ice Mirror," then deals water damage to the target and nearby enemies. Additional bonus damage will be dealt relative to the damage taken while "Ice Mirror" is active.'
                        }
                    ],
                    cost: '4548',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Xainfried',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Xainfried-5-star.png?itok=KIybXsXP',
            description: "A member of the Aegis tribe, he's currently on a journey with two young dragons, seeking a place where they can live in peace. Though usually calm, he grows enraged if his charges are threatened.",
            cv: ['Michael Richards', 'Tomokazu Seki'],
            title: 'Dragon Guardian',
            rarity: '5',
            element: 'Water',
            weapon: 'Lance',
            role: 'Support',
            atk: '484',
            hp: '792',
            coability: {
                name: 'HP +9%',
                baseEffect: 'Increases HP by 9%. Benefits your whole team.',
                upgrades: [
                    'Increases HP by 10%. Benefits your whole team.',
                    'Increases HP by 12%. Benefits your whole team.',
                    'Increases HP by 13%. Benefits your whole team.',
                    'Increases HP by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: "Dragon's Claws II",
                        effect: 'Each shapeshift increases strength (up to three times per quest).'
                    },
                    {
                        name: "Dragon's Claws III",
                        effect: 'Each shapeshift increases strength (up to three times per quest).'
                    }
                ],
                [
                    {
                        name: 'Burn Res +50%',
                        effect: 'Reduces susceptibility to burning by 50%.'
                    },
                    {
                        name: 'Burn Res +100%',
                        effect: 'Reduces susceptibility to burning by 100%.'
                    }
                ],
                [
                    {
                        name: 'Dragon Time +15%',
                        effect: 'Extends shapeshift time by 15%.'
                    },
                    {
                        name: 'Dragon Time +20%',
                        effect: 'Extends shapeshift time by 20%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Dragon Frostfang',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals water damage to the target and nearby enemies.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals water damage to the target and nearby enemies.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals water damage to the target and nearby enemies.'
                        }
                    ],
                    cost: '2450',
                    regen: 'None',
                    iframe: 'Long'
                },
                {
                    name: "Guardian's Fury",
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Increases the entire team's strength by 15% for 15 seconds."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Increases the entire team's strength by 20% for 15 seconds."
                        }
                    ],
                    cost: '8534',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Su Fang',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-01/Su%20Fang-4-star.png?itok=Fu_4eGAg',
            description: 'A pyroblossom firework technician from the town of Peng Lai. A kind young man with a deep love for his home, he trains endlessly to create the finest displays possible. His talent also gives him the ability to manipulate the flow of mana.',
            cv: ['Jerome Yoo', 'Taku Yashiro'],
            title: 'Pyroblossom Artisan',
            rarity: '4',
            element: 'Wind',
            weapon: 'Dagger',
            role: 'Attack',
            atk: '474',
            hp: '722',
            coability: {
                name: 'Critical Rate +3%',
                baseEffect: 'Increases critical rate by 3%. Benefits your whole team.',
                upgrades: [
                    'Increases critical rate by 4%. Benefits your whole team.',
                    'Increases critical rate by 5%. Benefits your whole team.',
                    'Increases critical rate by 7%. Benefits your whole team.',
                    'Increases critical rate by 10%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: "Therion's Bane +20%",
                        effect: 'Increases damage to therions by 20%.'
                    },
                    {
                        name: "Therion's Bane +25%",
                        effect: 'Increases damage to therions by 25%.'
                    }
                ],
                [
                    {
                        name: 'Bog Res +25%',
                        effect: 'Reduces susceptibility to bog by 25%.'
                    },
                    {
                        name: 'Bog Res +50%',
                        effect: 'Reduces susceptibility to bog by 50%.'
                    }
                ],
                [
                    {
                        name: 'Skill Damage +20%',
                        effect: 'Increases attack skill damage by 20%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Gale Slice',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals wind damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals wind damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals wind damage to enemies directly ahead.'
                        }
                    ],
                    cost: '2462',
                    regen: 'None',
                    iframe: 'Long'
                },
                {
                    name: 'Crackling Pyroblossom',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Increases the user's strength by 20% for 10 seconds. While this skill is active, Gale Slice may inflict stun."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Increases the user's strength by 25% for 10 seconds. While this skill is active, Gale Slice may inflict stun."
                        }
                    ],
                    cost: '4877',
                    regen: 'None',
                    iframe: 'Short'
                }
            ]
        }
        ,
        {
            name: 'Naveed',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Naveed-5-star_0.png?itok=HXb2YVAK',
            description: "A youth on a journey from a foreign land. He's an apt student of swords and lithomancy—a magic that uses the mana contained in gems. His modest and easy-going nature makes him popular, but he's oddly awkward with women.",
            cv: ['Hampton Green', 'Junichi Suwabe'],
            title: 'Suave Lithomancer',
            rarity: '5',
            element: 'Flame',
            weapon: 'Sword',
            role: 'Attack',
            atk: '505',
            hp: '754',
            coability: {
                name: 'Dragon Haste +8%',
                baseEffect: 'Increases dragon gauge fill rate by 8%. Benefits your whole team.',
                upgrades: [
                    'Increases dragon gauge fill rate by 9%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 11%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 12%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: "Slayer's Strength +5%",
                        effect: 'Increases strength by 5% for every five enemies defeated (up to five times per quest).'
                    },
                    {
                        name: "Slayer's Strength +6%",
                        effect: 'Increases strength by 6% for every five enemies defeated (up to five times per quest).'
                    }
                ],
                [
                    {
                        name: 'Sleep Res +50%',
                        effect: 'Reduces susceptibility to sleep by 50%.'
                    },
                    {
                        name: 'Sleep Res +100%',
                        effect: 'Reduces susceptibility to sleep by 100%.'
                    }
                ],
                [
                    {
                        name: 'Skill Prep +75%',
                        effect: 'Fills 75% of skill gauges at the start of quests.'
                    },
                    {
                        name: 'Skill Prep +100%',
                        effect: 'Fills 100% of skill gauges at the start of quests.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Crystalline Blades',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals flame damage to enemies directly ahead, and shoots flame blades relative to the number of times "Radiant Bauble" has been used. This skill can be enhanced up to five times.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals flame damage to enemies directly ahead, and shoots flame blades relative to the number of times "Radiant Bauble" has been used. This skill can be enhanced up to five times.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals flame damage to enemies directly ahead, and shoots flame blades relative to the number of times "Radiant Bauble" has been used. This skill can be enhanced up to five times.'
                        }
                    ],
                    cost: '2590',
                    regen: 'None',
                    iframe: 'Long'
                },
                {
                    name: 'Radiant Bauble',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: `Activates "Crystalline Blades Buffed." Increases the user's defense by 10% for 10 seconds, and enhances the skill "Crystalline Blades" for the remainder of the quest. The skill can be enhanced up to five times.`
                        },
                        {
                            level: 'Lvl 2',
                            description: `Activates "Crystalline Blades Buffed." Increases the user's defense by 15% for 10 seconds, and enhances the skill "Crystalline Blades" for the remainder of the quest. The skill can be enhanced up to five times.`
                        }
                    ],
                    cost: '3544',
                    regen: 'None',
                    iframe: 'Long'
                }
            ]
        }
        ,
        {
            name: 'Hawk',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Hawk-5-star.png?itok=-hBYv7C7',
            description: `A knowledgeable and skilled hunter whose keen eyesight and technique make escape all but impossible. He's infamously known in the underworld as "the Reaper" due to his work as an assassin.`,
            cv: ['Justin Dominic', 'Rikiya Koyama'],
            title: 'Twilight Hunter',
            rarity: '5',
            element: 'Wind',
            weapon: 'Bow',
            role: 'Attack',
            atk: '494',
            hp: '764',
            coability: {
                name: 'Skill Haste +8%',
                baseEffect: 'Increases skill gauge fill rate by 8%. Benefits your whole team.',
                upgrades: [
                    'Increases skill gauge fill rate by 9%. Benefits your whole team.',
                    'Increases skill gauge fill rate by 11%. Benefits your whole team.',
                    'Increases skill gauge fill rate by 12%. Benefits your whole team.',
                    'Increases skill gauge fill rate by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Full HP = Stun +50%',
                        effect: 'Increases the chances of inflicting stun by 50% when HP is full.'
                    },
                    {
                        name: 'Full HP = Stun +60%',
                        effect: 'Increases the chances of inflicting stun by 60% when HP is full.'
                    }
                ],
                [
                    {
                        name: 'Freeze Res +50%',
                        effect: 'Reduces susceptibility to freezing by 50%.'
                    },
                    {
                        name: 'Freeze Res +100%',
                        effect: 'Reduces susceptibility to freezing by 100%.'
                    }
                ],
                [
                    {
                        name: 'Stunned Punisher +25%',
                        effect: 'Increases damage to stunned enemies by 25%.'
                    },
                    {
                        name: 'Stunned Punisher +30%',
                        effect: 'Increases damage to stunned enemies by 30%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Savage Hawk',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals wind damage to enemies in a line.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals wind damage to enemies in a line. Stunned foes take extra damage.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals wind damage to enemies in a line. Stunned foes take extra damage.'
                        }
                    ],
                    cost: '2723',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: "Hunter's Creed",
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Activates "Shackling Arrows." For the next three force strikes, the user will shoot special arrows that deal extra damage and inflict stun.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Activates "Shackling Arrows." For the next three force strikes, the user will shoot special arrows that deal extra damage and inflict stun.'
                        }
                    ],
                    cost: '5315',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Heinwald',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-03/Heinwald-5-star.png?itok=8KG9MPmS',
            description: ' - ',
            cv: ['Brick Stone', 'Show Hayami'],
            title: 'Seeker of Truth',
            rarity: '5',
            element: 'Shadow',
            weapon: 'Staff',
            role: 'Healing',
            atk: '470',
            hp: '804',
            coability: {
                name: 'Recovery Potency +10%',
                baseEffect: 'Increases the potency of recovery skills by 10%. Benefits your whole team.',
                upgrades: [
                    'Increases the potency of recovery skills by 12%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 14%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 16%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 20%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'HP 70% = Skill Damage +30%',
                        effect: 'Increases attack skill damage by 30% when HP is 70% or above.'
                    },
                    {
                        name: 'HP 70% = Skill Damage +35%',
                        effect: 'Increases attack skill damage by 35% when HP is 70% or above.'
                    }
                ],
                [
                    {
                        name: 'Paralysis Res +50%',
                        effect: 'Reduces susceptibility to paralysis by 50%.'
                    },
                    {
                        name: 'Paralysis Res +100%',
                        effect: 'Reduces susceptibility to paralysis by 100%.'
                    }
                ],
                [
                    {
                        name: 'Skill Prep +75%',
                        effect: 'Fills 75% of skill gauges at the start of quests.'
                    },
                    {
                        name: 'Skill Prep +100%',
                        effect: 'Fills 100% of skill gauges at the start of quests.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Call of Chaos',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals shadow damage to the target and nearby enemies, and restores HP to all allies. If the attack connects, restores an additional 3% of the damage inflicted as HP to all allies. This recovery caps at 8% of their maximum HP.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals shadow damage to the target and nearby enemies, and restores HP to all allies. If the attack connects, restores an additional 3% of the damage inflicted as HP to all allies. This recovery caps at 8% of their maximum HP.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals shadow damage to the target and nearby enemies, and restores HP to all allies. If the attack connects, restores an additional 3% of the damage inflicted as HP to all allies. This recovery caps at 8% of their maximum HP.'
                        }
                    ],
                    cost: '3352',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Abyssal Connection',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: `Activates "Abyssal Connection" for 10 seconds. During Abyssal Connection, the user's strength is increased by 15%, and the Call of Chaos skill is powered up. Also increases the strength of nearby allies by 5%.`
                        },
                        {
                            level: 'Lvl 2',
                            description: `Activates "Abyssal Connection" for 10 seconds. During Abyssal Connection, the user's strength is increased by 20%, and the Call of Chaos skill is powered up. Also increases the strength of nearby allies by 10%.`
                        }
                    ],
                    cost: '4202',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Yue',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-04/Yue-4-star.png?itok=XBUFBpEQ',
            description: 'An unsophisticated, meat-loving young girl. She grew up in a village of hunters, so her skills in that area are top-notch. Though cheerful and not one to sweat details, Yue is also something of a glutton—and ALWAYS hungry.',
            cv: ['Ely Jackson', 'Natsumi Hioka'],
            title: 'Hungry Hunter',
            rarity: '4',
            element: 'Flame',
            weapon: 'Axe',
            role: 'Defense',
            atk: '454',
            hp: '796',
            coability: {
                name: 'Defense +7%',
                baseEffect: 'Increases defense by 7%. Benefits your whole team.',
                upgrades: [
                    'Increases defense by 8%. Benefits your whole team.',
                    'Increases defense by 9%. Benefits your whole team.',
                    'Increases defense by 11%. Benefits your whole team.',
                    'Increases defense by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Last Defense +50%',
                        effect: 'Buffs defense by 50% for 15 seconds when HP drops to 30% (once per quest).'
                    },
                    {
                        name: 'Last Defense +60%',
                        effect: 'Buffs defense by 60% for 15 seconds when HP drops to 30% (once per quest).'
                    }
                ],
                [
                    {
                        name: 'Sleep Res +50%',
                        effect: 'Reduces susceptibility to sleep by 50%.'
                    },
                    {
                        name: 'Sleep Res +100%',
                        effect: 'Reduces susceptibility to sleep by 100%.'
                    }
                ],
                [
                    {
                        name: 'Recovery Potency +8%',
                        effect: 'Increases the potency of recovery skills by 8%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Knockout Blow',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals flame damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals flame damage to enemies directly ahead, and inflicts stun.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals flame damage to enemies directly ahead, and inflicts stun.'
                        }
                    ],
                    cost: '3033',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Wild Instinct',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: `Activates "Wild Child" for 20 seconds. During Wild Child, the user's critical rate is increased by 15%, their HP is restored by 2% of damage inflicted, and their defense is reduced by 40%.`
                        },
                        {
                            level: 'Lvl 2',
                            description: `Activates "Wild Child" for 20 seconds. During Wild Child, the user's critical rate is increased by 20%, their HP is restored by 3% of damage inflicted, and their defense is reduced by 40%.`
                        }
                    ],
                    cost: '8000',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Elias',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-11/Elias-4-star.png?itok=xpObA0cz',
            description: 'A young boy from the Harmonia Choir. He boasts a heavenly voice, and expects the best from both himself and others when it comes to singing. He likes sweet things a great deal, but fears this makes him seem a bit childish.',
            cv: ['Cassandra Fan', 'Yuki Nakashima'],
            title: 'Divine Voice',
            rarity: '4',
            element: 'Light',
            weapon: 'Bow',
            role: 'Defense',
            atk: '423',
            hp: '806',
            coability: {
                name: 'Skill Haste +5%',
                baseEffect: 'Increases skill gauge fill rate by 5%. Benefits your whole team.',
                upgrades: [
                    'Increases skill gauge fill rate by 6%. Benefits your whole team.',
                    'Increases skill gauge fill rate by 8%. Benefits your whole team.',
                    'Increases skill gauge fill rate by 11%. Benefits your whole team.',
                    'Increases skill gauge fill rate by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: "Demon's Bane +20%",
                        effect: 'Increases damage to demons by 20%.'
                    },
                    {
                        name: "Demon's Bane +25%",
                        effect: 'Increases damage to demons by 25%.'
                    }
                ],
                [
                    {
                        name: 'Curse Res +25%',
                        effect: 'Reduces susceptibility to curses by 25%.'
                    },
                    {
                        name: 'Curse Res +50%',
                        effect: 'Reduces susceptibility to curses by 50%.'
                    }
                ],
                [
                    {
                        name: 'Last Offense +30%',
                        effect: 'Buffs strength by 30% for 15 seconds when HP drops to 30% (once per quest).'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Uptempo Chord',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals light damage to enemies in a line.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals light damage to enemies in a line.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals light damage to enemies in a line.'
                        }
                    ],
                    cost: '2558',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Virtuoso Anthem',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Increases the entire team's energy levels by one stage. When an adventurer's energy level reaches level five, they will become energized, and their next attack or recovery skill will be upgraded. Using any applicable skill resets that adventurer's energy level to zero."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Increases the entire team's energy levels by one stage. When an adventurer's energy level reaches level five, they will become energized, and their next attack or recovery skill will be upgraded. Using any applicable skill resets that adventurer's energy level to zero."
                        }
                    ],
                    cost: '\nLevel 1: 4000\nLevel 2: 3636\n',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Xiao Lei',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-01/Xiao%20Lei-3-star.png?itok=z54lG3VG',
            description: "A young arithmetician who loves mathematics. She uses a device called an abacus to make calculations on anything and everything—be it prices, surface areas, or what have you. She's also been known to predict the future.",
            cv: ['Becky Bright', 'Yu Serizawa'],
            title: 'Boundless Arithmetician',
            rarity: '3',
            element: 'Light',
            weapon: 'Wand',
            role: 'Support',
            atk: '461',
            hp: '751',
            coability: {
                name: 'Skill Damage +2%',
                baseEffect: 'Increases attack skill damage by 2%. Benefits your whole team.',
                upgrades: [
                    'Increases attack skill damage by 5%. Benefits your whole team.',
                    'Increases attack skill damage by 8%. Benefits your whole team.',
                    'Increases attack skill damage by 11%. Benefits your whole team.',
                    'Increases attack skill damage by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Skill Damage +15%',
                        effect: 'Increases attack skill damage by 15%.'
                    },
                    {
                        name: 'Skill Damage +20%',
                        effect: 'Increases attack skill damage by 20%.'
                    }
                ],
                [
                    {
                        name: 'Poison Res +25%',
                        effect: 'Reduces susceptibility to poison by 25%.'
                    },
                    {
                        name: 'Poison Res +50%',
                        effect: 'Reduces susceptibility to poison by 50%.'
                    }
                ],
                [
                    {
                        name: 'Poison Res +25%',
                        effect: 'Reduces susceptibility to poison by 25%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Flash Strike',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals light damage to the target and nearby enemies.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals light damage to the target and nearby enemies.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals light damage to the target and nearby enemies.'
                        }
                    ],
                    cost: '2785',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Tactical Analysis',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Increases the entire team's critical rate by 5% and adds 30% to the modifier applied to critical damage for 10 seconds."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Increases the entire team's critical rate by 8% and adds 40% to the modifier applied to critical damage for 10 seconds."
                        }
                    ],
                    cost: '3909',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Berserker',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Berserker-4-star.png?itok=Z_FP2Y5l',
            description: 'A veteran mercenary with numerous contacts who seems to constantly be pursuing one thing or another. Though a mellow fellow in normal life, he lives for combat and fights like a man possessed once he gets into battle.',
            cv: ['Justin Dominic', 'Hiroki Yasumoto'],
            title: 'Frenzied Warrior',
            rarity: '4',
            element: 'Shadow',
            weapon: 'Sword',
            role: 'Defense',
            atk: '444',
            hp: '806',
            coability: {
                name: 'Dragon Haste +5%',
                baseEffect: 'Increases dragon gauge fill rate by 5%. Benefits your whole team.',
                upgrades: [
                    'Increases dragon gauge fill rate by 6%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 8%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 11%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: "Striker's Skill +6%",
                        effect: 'Increases attack skill damage by 6% for every three enemies defeated with force strikes (up to five times per quest).'
                    },
                    {
                        name: "Striker's Skill +8%",
                        effect: 'Increases attack skill damage by 8% for every three enemies defeated with force strikes (up to five times per quest).'
                    }
                ],
                [
                    {
                        name: 'Blindness Res +50%',
                        effect: 'Reduces susceptibility to blindness by 50%.'
                    },
                    {
                        name: 'Blindness Res +100%',
                        effect: 'Reduces susceptibility to blindness by 100%.'
                    }
                ],
                [
                    {
                        name: 'Last Offense +30%',
                        effect: 'Buffs strength by 30% for 15 seconds when HP drops to 30% (once per quest).'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Calamity Wheel',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals shadow damage to surrounding enemies.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals shadow damage to surrounding enemies, and reduces their strength by 5%.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals shadow damage to surrounding enemies, and reduces their strength by 5%.'
                        }
                    ],
                    cost: '2376',
                    regen: 'None',
                    iframe: 'Short'
                },
                {
                    name: 'Living Fortress',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Increases max HP by 5% for the remainder of the quest. Once HP buffs reach the limit, an HP recovery effect is granted instead.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Increases max HP by 10% for the remainder of the quest. Once HP buffs reach the limit, an HP recovery effect is granted instead.'
                        }
                    ],
                    cost: '5750',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Melsa',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Melsa-4-star_0.png?itok=q8V0_UPV',
            description: 'A kind-hearted sylvan girl. While usually something of an aloof loner, her passion flames whenever something important comes up. Anything relating to love, however, tends to send her spiraling into confusion.',
            cv: ['Anne Solange', 'Aya Uchida'],
            title: 'Resolute Friend',
            rarity: '4',
            element: 'Flame',
            weapon: 'Dagger',
            role: 'Support',
            atk: '452',
            hp: '758',
            coability: {
                name: 'Critical Rate +3%',
                baseEffect: 'Increases critical rate by 3%. Benefits your whole team.',
                upgrades: [
                    'Increases critical rate by 4%. Benefits your whole team.',
                    'Increases critical rate by 5%. Benefits your whole team.',
                    'Increases critical rate by 7%. Benefits your whole team.',
                    'Increases critical rate by 10%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: "Physian's Bane +20%",
                        effect: 'Increases damage to physians by 20%.'
                    },
                    {
                        name: "Physian's Bane +25%",
                        effect: 'Increases damage to physians by 25%.'
                    }
                ],
                [
                    {
                        name: 'Sleep Res +25%',
                        effect: 'Reduces susceptibility to sleep by 25%.'
                    },
                    {
                        name: 'Sleep Res +50%',
                        effect: 'Reduces susceptibility to sleep by 50%.'
                    }
                ],
                [
                    {
                        name: 'Flurry Devastation +8%',
                        effect: 'Increases critical rate by 8% when the combo count is 15 or higher.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Heat Impulse',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals flame damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals flame damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals flame damage to enemies directly ahead.'
                        }
                    ],
                    cost: '2311',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Molten Flare',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals flame damage to surrounding enemies.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals flame damage to surrounding enemies.'
                        }
                    ],
                    cost: '4685',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Zace',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Zace-3-star_0.png?itok=EkZk_Ip1',
            description: "A youth from the Azm tribe, a society of hunters. Many of the Azm's customs center around the use of bone, but even among them he's known as a bone fanatic. Though usually reserved, once he starts talking about bones, he never shuts up.",
            cv: ['Hampton Green', 'Yuki Ono'],
            title: 'Bone Collector',
            rarity: '3',
            element: 'Shadow',
            weapon: 'Lance',
            role: 'Attack',
            atk: '486',
            hp: '710',
            coability: {
                name: 'HP +5%',
                baseEffect: 'Increases HP by 5%. Benefits your whole team.',
                upgrades: [
                    'Increases HP by 7%. Benefits your whole team.',
                    'Increases HP by 9%. Benefits your whole team.',
                    'Increases HP by 12%. Benefits your whole team.',
                    'Increases HP by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Skill Damage +15%',
                        effect: 'Increases attack skill damage by 15%.'
                    },
                    {
                        name: 'Skill Damage +20%',
                        effect: 'Increases attack skill damage by 20%.'
                    }
                ],
                [
                    {
                        name: 'Paralysis Res +25%',
                        effect: 'Reduces susceptibility to paralysis by 25%.'
                    },
                    {
                        name: 'Paralysis Res +50%',
                        effect: 'Reduces susceptibility to paralysis by 50%.'
                    }
                ],
                [
                    {
                        name: 'Paralysis Res +25%',
                        effect: 'Reduces susceptibility to paralysis by 25%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Skull Hunter',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals shadow damage to the target and nearby enemies.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals shadow damage to the target and nearby enemies, and inflicts blindness.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals shadow damage to the target and nearby enemies, and inflicts blindness.'
                        }
                    ],
                    cost: '2352',
                    regen: 'None',
                    iframe: 'Long'
                },
                {
                    name: 'Bone Stinger',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals shadow damage to enemies directly ahead.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals shadow damage to enemies directly ahead.'
                        }
                    ],
                    cost: '5161',
                    regen: 'None',
                    iframe: 'Long'
                }
            ]
        }
        ,
        {
            name: 'Annelie',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-01/Annelie-5-star.png?itok=1oItxPK1',
            description: 'The leader of a circus troupe that travels the continent. A tamer of dragons, she enthralls audiences by making even the fiercest of them obey her. She has a quirk of kissing people on the cheek when showing appreciation.',
            cv: ['Danielle Ashton', 'Maaya Uchida'],
            title: 'The Sugary Star',
            rarity: '5',
            element: 'Light',
            weapon: 'Lance',
            role: 'Support',
            atk: '483',
            hp: '793',
            coability: {
                name: 'HP +9%',
                baseEffect: 'Increases HP by 9%. Benefits your whole team.',
                upgrades: [
                    'Increases HP by 10%. Benefits your whole team.',
                    'Increases HP by 12%. Benefits your whole team.',
                    'Increases HP by 13%. Benefits your whole team.',
                    'Increases HP by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'HP 70% = Skill Damage +30%',
                        effect: 'Increases attack skill damage by 30% when HP is 70% or above.'
                    },
                    {
                        name: 'HP 70% = Skill Damage +35%',
                        effect: 'Increases attack skill damage by 35% when HP is 70% or above.'
                    }
                ],
                [
                    {
                        name: 'Poison Res +50%',
                        effect: 'Reduces susceptibility to poison by 50%.'
                    },
                    {
                        name: 'Poison Res +100%',
                        effect: 'Reduces susceptibility to poison by 100%.'
                    }
                ],
                [
                    {
                        name: 'Energized: Strength +15%',
                        effect: 'Increases strength by 15% for 15 seconds each time the user is energized.'
                    },
                    {
                        name: 'Energized: Strength +20%',
                        effect: 'Increases strength by 20% for 15 seconds each time the user is energized.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Stunning Display',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: `Deals light damage to enemies directly ahead, draws them toward the user, and activates "Skill Shift" if the attack connects. Phase I increases the user's energy level by one stage, while Phase II increases it by two stages. Phase III adds additional damage to the skill.`
                        },
                        {
                            level: 'Lvl 2',
                            description: `Deals light damage to enemies directly ahead, draws them toward the user, inflicts stun, and activates "Skill Shift" if the attack connects. Phase I increases the user's energy level by one stage, while Phase II increases it by two stages. Phase III adds additional damage to the skill.`
                        },
                        {
                            level: 'Lvl 3',
                            description: `Deals light damage to enemies directly ahead, draws them toward the user, inflicts stun, and activates "Skill Shift" if the attack connects. Phase I increases the user's energy level by one stage, while Phase II increases it by two stages. Phase III adds additional damage to the skill.`
                        }
                    ],
                    cost: '3051',
                    regen: 'None',
                    iframe: 'Long'
                },
                {
                    name: 'Smiles on Parade',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Deals light damage to enemies directly ahead, and increases the entire team's energy levels by two stages. When an adventurer's energy level reaches level five, they will become energized, and their next attack or recovery skill will be upgraded. At this point, using any applicable skill will reset that adventurer’s energy level to zero."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Deals light damage to enemies directly ahead, and increases the entire team's energy levels by two stages. When an adventurer's energy level reaches level five, they will become energized, and their next attack or recovery skill will be upgraded. At this point, using any applicable skill will reset that adventurer’s energy level to zero."
                        }
                    ],
                    cost: '10206',
                    regen: 'None',
                    iframe: 'Long'
                }
            ]
        }
        ,
        {
            name: 'Lucretia',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-11/Lucretia-5-star.png?itok=iRLNCkP4',
            description: 'Called the songstress of the century, her ethereal voice captures the hearts of all who hear it. Her voice has earned her renown across the continent, but rumors whisper that she has an equal talent for the slaying of fiends.',
            cv: ['Megan Blythe Stewart', 'Ai Kakuma'],
            title: 'Songstress of the Century',
            rarity: '5',
            element: 'Light',
            weapon: 'Wand',
            role: 'Attack',
            atk: '510',
            hp: '751',
            coability: {
                name: 'Skill Damage +8%',
                baseEffect: 'Increases attack skill damage by 8%. Benefits your whole team.',
                upgrades: [
                    'Increases attack skill damage by 9%. Benefits your whole team.',
                    'Increases attack skill damage by 11%. Benefits your whole team.',
                    'Increases attack skill damage by 12%. Benefits your whole team.',
                    'Increases attack skill damage by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Energized: Strength +15%',
                        effect: 'Increases strength by 15% for 15 seconds each time the user is energized.'
                    },
                    {
                        name: 'Energized: Strength +20%',
                        effect: 'Increases strength by 20% for 15 seconds each time the user is energized.'
                    }
                ],
                [
                    {
                        name: 'Curse Res +50%',
                        effect: 'Reduces susceptibility to curses by 50%.'
                    },
                    {
                        name: 'Curse Res +100%',
                        effect: 'Reduces susceptibility to curses by 100%.'
                    }
                ],
                [
                    {
                        name: 'Broken Punisher +25%',
                        effect: 'Increases damage to enemies in break state by 25%.'
                    },
                    {
                        name: 'Broken Punisher +30%',
                        effect: 'Increases damage to enemies in break state by 30%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Empowering Triplet',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Deals light damage to enemies directly ahead, and increases the entire team's energy levels by one stage. When an adventurer's energy level reaches level five, they will become energized, and their next attack or recovery skill will be upgraded. Using any applicable skill resets that adventurer's energy level to zero."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Deals light damage to enemies directly ahead, and increases the entire team's energy levels by one stage. When an adventurer's energy level reaches level five, they will become energized, and their next attack or recovery skill will be upgraded. Using any applicable skill resets that adventurer's energy level to zero."
                        },
                        {
                            level: 'Lvl 3',
                            description: "Deals light damage to enemies directly ahead, and increases the entire team's energy levels by one stage. When an adventurer's energy level reaches level five, they will become energized, and their next attack or recovery skill will be upgraded. Using any applicable skill resets that adventurer's energy level to zero."
                        }
                    ],
                    cost: '3530',
                    regen: 'None',
                    iframe: 'Long'
                },
                {
                    name: 'Crescendo Chorus',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Increases the user's strength by 10% for 10 seconds, and increases their energy level by one stage. When an adventurer's energy level reaches level five, they will become energized, and their next attack or recovery skill will be upgraded. Using any applicable skill resets that adventurer's energy level to zero."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Increases the user's strength by 10% for 10 seconds, and increases their energy level by two stages. When an adventurer's energy level reaches level five, they will become energized, and their next attack or recovery skill will be upgraded. Using any applicable skill resets that adventurer's energy level to zero."
                        }
                    ],
                    cost: '4553',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Felicia',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-02/Felicia-4-star.png?itok=vpOfBD90',
            description: 'A kind and beautiful dancer whose movements captivate all manner of beings. This talent led the king of death to fall in love and kidnap her, only to see her later rescued by a dragon who had taken pity upon her.',
            cv: ['Kayley Wallas-Moyer', 'Sayaka Sembongi'],
            title: 'Captivating Dancer',
            rarity: '4',
            element: 'Light',
            weapon: 'Staff',
            role: 'Healing',
            atk: '443',
            hp: '769',
            coability: {
                name: 'Recovery Potency +6%',
                baseEffect: 'Increases the potency of recovery skills by 6%. Benefits your whole team.',
                upgrades: [
                    'Increases the potency of recovery skills by 8%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 10%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 14%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 20%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Undead Res +15%',
                        effect: 'Decreases damage from undead by 15%.'
                    },
                    {
                        name: 'Undead Res +20%',
                        effect: 'Decreases damage from undead by 20%.'
                    }
                ],
                [
                    {
                        name: 'Poison Res +25%',
                        effect: 'Reduces susceptibility to poison by 25%.'
                    },
                    {
                        name: 'Poison Res +50%',
                        effect: 'Reduces susceptibility to poison by 50%.'
                    }
                ],
                [
                    {
                        name: 'Skill Prep +50%',
                        effect: 'Fills 50% of skill gauges at the start of quests.'
                    }
                ]
            ],
            skills: [
                {
                    name: "Heaven's Blessing",
                    levels: [
                        {level: 'Lvl 1', description: 'Restores HP to all allies.'},
                        {level: 'Lvl 2', description: 'Restores HP to all allies.'},
                        {level: 'Lvl 3', description: 'Restores HP to all allies.'}
                    ],
                    cost: '5916',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Cleansing Dance',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Grants all teammates a one-use shield that nullifies damage less than 20% of the user's maximum HP and removes poison. This does not stack with any other shields."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Grants all teammates a one-use shield that nullifies damage less than 30% of the user's maximum HP and removes poison. This does not stack with any other shields."
                        }
                    ],
                    cost: '7288',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Addis',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-12/Addis-4-star.png?itok=Tj3jgHAY',
            description: 'A samurai from the distant land of Hinomoto whose sword moves like the wind itself. Though coarse in terms of speech, he is polite and deeply honorable. Ever since Ieyasu saved his life, he has served him loyally.',
            cv: ['John Arthur', 'Susumu Chiba'],
            title: 'Noble Warrior',
            rarity: '4',
            element: 'Wind',
            weapon: 'Blade',
            role: 'Attack',
            atk: '509',
            hp: '727',
            coability: {
                name: 'Strength +3%',
                baseEffect: 'Increases strength by 3%. Benefits your whole team.',
                upgrades: [
                    'Increases strength by 4%. Benefits your whole team.',
                    'Increases strength by 5%. Benefits your whole team.',
                    'Increases strength by 7%. Benefits your whole team.',
                    'Increases strength by 10%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Bleeding Punisher +5%',
                        effect: 'Increases damage to bleeding enemies by 5%.'
                    },
                    {
                        name: 'Bleeding Punisher +8%',
                        effect: 'Increases damage to bleeding enemies by 8%.'
                    }
                ],
                [
                    {
                        name: 'Freeze Res +50%',
                        effect: 'Reduces susceptibility to freezing by 50%.'
                    },
                    {
                        name: 'Freeze Res +100%',
                        effect: 'Reduces susceptibility to freezing by 100%.'
                    }
                ],
                [
                    {
                        name: 'Broken Punisher +20%',
                        effect: 'Increases damage to enemies in break state by 20%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Bamboo Cutter',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals wind damage to enemies directly ahead, and inflicts poison.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals wind damage to enemies directly ahead, and inflicts poison.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals wind damage to enemies directly ahead, and inflicts poison.'
                        }
                    ],
                    cost: '2537',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Dignified Soul',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Increases the user's strength by 20% for 10 seconds. While this skill is active, Bamboo Cutter will inflict bleeding instead of poison."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Increases the user's strength by 25% for 10 seconds. While this skill is active, Bamboo Cutter will inflict bleeding instead of poison."
                        }
                    ],
                    cost: '4877',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Estelle',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Estelle-3-star.png?itok=tCHgtCDV',
            description: `A preacher spreading the word of the Church. She's austere and orthodox, yet she has an emotional side that often gets the better of her. She likes to deliver her kindness in the form of a slap she calls "the Loving Hand.`,
            cv: ['Tabitha St. Germain', 'Minami Tanaka'],
            title: 'Loving Preacher',
            rarity: '3',
            element: 'Light',
            weapon: 'Staff',
            role: 'Healing',
            atk: '443',
            hp: '769',
            coability: {
                name: 'Recovery Potency +2%',
                baseEffect: 'Increases the potency of recovery skills by 2%. Benefits your whole team.',
                upgrades: [
                    'Increases the potency of recovery skills by 6%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 10%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 14%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 20%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Force Strike +20%',
                        effect: 'Increases force strike damage by 20%.'
                    },
                    {
                        name: 'Force Strike +30%',
                        effect: 'Increases force strike damage by 30%.'
                    }
                ],
                [
                    {
                        name: 'Curse Res +25%',
                        effect: 'Reduces susceptibility to curses by 25%.'
                    },
                    {
                        name: 'Curse Res +50%',
                        effect: 'Reduces susceptibility to curses by 50%.'
                    }
                ],
                [
                    {
                        name: 'Sleep Res +25%',
                        effect: 'Reduces susceptibility to sleep by 25%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Healing Faith',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Restores HP to the team member most in need.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Restores HP to the team member most in need.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Restores HP to the team member most in need.'
                        }
                    ],
                    cost: '4930',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: "Guardian's Grace",
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Restores HP to all allies and continues healing over the next 15 seconds.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Restores HP to all allies and continues healing over the next 15 seconds.'
                        }
                    ],
                    cost: '11832',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: "Valentine's Hildegarde",
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-02/Valentine%26%23039%3Bs%20Hildegarde-5-star.png?itok=ZlicituD',
            description: "Hildegarde has donned an elegant gown for Valentine's, which gives her a mature allure. Supposedly it's the first time she has ever worn one, and more than one person has caught her wistfully staring at herself in a mirror...",
            cv: ['Mavis Ada', 'Maaya Sakamoto'],
            title: 'Rosy Saint',
            rarity: '5',
            element: 'Flame',
            weapon: 'Staff',
            role: 'Healing',
            atk: '469',
            hp: '805',
            coability: {
                name: 'Recovery Potency +10%',
                baseEffect: 'Increases the potency of recovery skills by 10%. Benefits your whole team.',
                upgrades: [
                    'Increases the potency of recovery skills by 12%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 14%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 16%. Benefits your whole team.',
                    'Increases the potency of recovery skills by 20%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Striking Strength Debilitator I',
                        effect: "Grants the user's force strikes a 50% chance to reduce enemy strength by 3% for 10 seconds."
                    },
                    {
                        name: 'Striking Strength Debilitator II',
                        effect: "Grants the user's force strikes a 70% chance to reduce enemy strength by 3% for 10 seconds."
                    }
                ],
                [
                    {
                        name: 'Stun Res +50%',
                        effect: 'Reduces susceptibility to stun by 50%.'
                    },
                    {
                        name: 'Stun Res +100%',
                        effect: 'Reduces susceptibility to stun by 100%.'
                    }
                ],
                [
                    {
                        name: 'Skill Prep +75%',
                        effect: 'Fills 75% of skill gauges at the start of quests.'
                    },
                    {
                        name: 'Skill Prep +100%',
                        effect: 'Fills 100% of skill gauges at the start of quests.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Blooming Love',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Restores HP to all allies, increases the entire team's energy levels by one stage, and continues healing over the next 15 seconds. When an adventurer's energy level reaches level five, they will become energized, and their next attack or recovery skill will be upgraded. At this point, using any applicable skill will reset that adventurer's energy level to zero."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Restores HP to all allies, increases the entire team's energy levels by one stage, and continues healing over the next 15 seconds. When an adventurer's energy level reaches level five, they will become energized, and their next attack or recovery skill will be upgraded. At this point, using any applicable skill will reset that adventurer's energy level to zero."
                        },
                        {
                            level: 'Lvl 3',
                            description: "Restores HP to all allies, increases the entire team's energy levels by one stage, and continues healing over the next 15 seconds. When an adventurer's energy level reaches level five, they will become energized, and their next attack or recovery skill will be upgraded. At this point, using any applicable skill will reset that adventurer's energy level to zero."
                        }
                    ],
                    cost: '7734',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Holy Protection',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Grants all teammates a one-use shield that nullifies damage less than 20% of the user's maximum HP, and increases their energy levels by one stage. This does not stack with any other shields. When an adventurer's energy level reaches level five, they will become energized, and their next attack or recovery skill will be upgraded. Using any applicable skill resets that adventurer's energy level to zero."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Grants all teammates a one-use shield that nullifies damage less than 30% of the user's maximum HP, and increases their energy levels by two stages. This does not stack with any other shields. When an adventurer's energy level reaches level five, they will become energized, and their next attack or recovery skill will be upgraded. Using any applicable skill resets that adventurer's energy level to zero."
                        }
                    ],
                    cost: '13188',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Rawn',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Rawn-4-star.png?itok=fEIPQ-T5',
            description: 'A child of nature who grew up in the forest. He makes his living hunting fiends using the knowledge and skills of his father—and while he comprehends the feelings of all manner of beasts, he struggles with human language.',
            cv: ['Jeremy George', 'Yuki Kaji'],
            title: 'Wild Hunter',
            rarity: '4',
            element: 'Light',
            weapon: 'Bow',
            role: 'Support',
            atk: '454',
            hp: '783',
            coability: {
                name: 'Skill Haste +5%',
                baseEffect: 'Increases skill gauge fill rate by 5%. Benefits your whole team.',
                upgrades: [
                    'Increases skill gauge fill rate by 6%. Benefits your whole team.',
                    'Increases skill gauge fill rate by 8%. Benefits your whole team.',
                    'Increases skill gauge fill rate by 11%. Benefits your whole team.',
                    'Increases skill gauge fill rate by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: "Striker's Strength +4%",
                        effect: 'Increases strength by 4% for every three enemies defeated with force strikes (up to five times per quest).'
                    },
                    {
                        name: "Striker's Strength +5%",
                        effect: 'Increases strength by 5% for every three enemies defeated with force strikes (up to five times per quest).'
                    }
                ],
                [
                    {
                        name: 'Poison Res +50%',
                        effect: 'Reduces susceptibility to poison by 50%.'
                    },
                    {
                        name: 'Poison Res +100%',
                        effect: 'Reduces susceptibility to poison by 100%.'
                    }
                ],
                [
                    {
                        name: 'Stunned Punisher +20%',
                        effect: 'Increases damage to stunned enemies by 20%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Fiend Crush',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals light damage to enemies in a line.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals light damage to enemies in a line, and reduces their strength by 5%.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals light damage to enemies in a line, and reduces their strength by 5%.'
                        }
                    ],
                    cost: '2558',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Critter Slayer',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals light damage to the target.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals light damage to the target, and inflicts stun.'
                        }
                    ],
                    cost: '5008',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Joe',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Joe-3-star.png?itok=i4URxq2d',
            description: 'A mercenary who has survived fights in all corners of the world. His unrivaled skill and experience earned him fame but also caused him to lose sight of his purpose. Life is nothing but a chip to bet with for this solitary bowman.',
            cv: ['Eddie Dean', 'Yuichi Nakamura'],
            title: "Fire's Fletcher",
            rarity: '3',
            element: 'Flame',
            weapon: 'Bow',
            role: 'Attack',
            atk: '470',
            hp: '724',
            coability: {
                name: 'Skill Haste +2%',
                baseEffect: 'Increases skill gauge fill rate by 2%. Benefits your whole team.',
                upgrades: [
                    'Increases skill gauge fill rate by 5%. Benefits your whole team.',
                    'Increases skill gauge fill rate by 8%. Benefits your whole team.',
                    'Increases skill gauge fill rate by 11%. Benefits your whole team.',
                    'Increases skill gauge fill rate by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Full HP = Burn +30%',
                        effect: 'Increases the chances of inflicting burn by 30% when HP is full.'
                    },
                    {
                        name: 'Full HP = Burn +40%',
                        effect: 'Increases the chances of inflicting burn by 40% when HP is full.'
                    }
                ],
                [
                    {
                        name: 'Stun Res +25%',
                        effect: 'Reduces susceptibility to stun by 25%.'
                    },
                    {
                        name: 'Stun Res +50%',
                        effect: 'Reduces susceptibility to stun by 50%.'
                    }
                ],
                [
                    {
                        name: 'Stun Res +25%',
                        effect: 'Reduces susceptibility to stun by 25%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Quillstorm',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals flame damage to enemies in a line.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals flame damage to enemies in a line.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals flame damage to enemies in a line.'
                        }
                    ],
                    cost: '2395',
                    regen: 'None',
                    iframe: 'Medium'
                },
                {
                    name: 'Burning Arrow',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals flame damage to enemies in a line.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals flame damage to enemies in a line, and inflicts burn.'
                        }
                    ],
                    cost: '5051',
                    regen: 'None',
                    iframe: 'Short'
                }
            ]
        }
        ,
        {
            name: 'Nefaria',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Nefaria-5-star.png?itok=o23i4eZu',
            description: "A beautiful woman clad in foreign garb. Though young, her speech and manners take one back to the days of old. Little is known about her background, but her vast knowledge of mana helped her recognize the prince's dragonpact.",
            cv: ['Julie Muise', 'Yukana'],
            title: 'Queen of the Sands',
            rarity: '5',
            element: 'Shadow',
            weapon: 'Bow',
            role: 'Support',
            atk: '472',
            hp: '801',
            coability: {
                name: 'Skill Haste +8%',
                baseEffect: 'Increases skill gauge fill rate by 8%. Benefits your whole team.',
                upgrades: [
                    'Increases skill gauge fill rate by 9%. Benefits your whole team.',
                    'Increases skill gauge fill rate by 11%. Benefits your whole team.',
                    'Increases skill gauge fill rate by 12%. Benefits your whole team.',
                    'Increases skill gauge fill rate by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Full HP = Blindness +50%',
                        effect: 'Increases the chances of inflicting blindness by 50% when HP is full.'
                    },
                    {
                        name: 'Full HP = Blindness +60%',
                        effect: 'Increases the chances of inflicting blindness by 60% when HP is full.'
                    }
                ],
                [
                    {
                        name: 'Paralysis Res +50%',
                        effect: 'Reduces susceptibility to paralysis by 50%.'
                    },
                    {
                        name: 'Paralysis Res +100%',
                        effect: 'Reduces susceptibility to paralysis by 100%.'
                    }
                ],
                [
                    {
                        name: 'Blinded Punisher +25%',
                        effect: 'Increases damage to blinded enemies by 25%.'
                    },
                    {
                        name: 'Blinded Punisher +30%',
                        effect: 'Increases damage to blinded enemies by 30%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Night of Antiquity',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals shadow damage to the target and nearby enemies.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals shadow damage to the target and nearby enemies. Blinded foes take extra damage.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals shadow damage to the target and nearby enemies. Blinded foes take extra damage.'
                        }
                    ],
                    cost: '2713',
                    regen: 'None',
                    iframe: 'Long'
                },
                {
                    name: 'Twilight Oblivion',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Activates "Twilight Arrows." For the next three force strikes, the user will shoot special arrows that deal extra damage and inflict blindness.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Activates "Twilight Arrows." For the next three force strikes, the user will shoot special arrows that deal extra damage and inflict blindness.'
                        }
                    ],
                    cost: '5599',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Marty',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2019-01/Marty-3-star.png?itok=ZvsZnNYa',
            description: `The self-proclaimed "ultimate treasure hunter." His exploration skills are unmatched, and he's never been duped by a trap. His dream is to open a museum with the numerous treasures he's found and bring happiness to everyone.`,
            cv: ['Daniel Doheny', 'Makoto Furukawa'],
            title: 'Top Ruin Explorer',
            rarity: '3',
            element: 'Flame',
            weapon: 'Sword',
            role: 'Defense',
            atk: '434',
            hp: '791',
            coability: {
                name: 'Dragon Haste +2%',
                baseEffect: 'Increases dragon gauge fill rate by 2%. Benefits your whole team.',
                upgrades: [
                    'Increases dragon gauge fill rate by 5%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 8%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 11%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: 'Skill Haste +4%',
                        effect: 'Increases skill gauge fill rate by 4%.'
                    },
                    {
                        name: 'Skill Haste +5%',
                        effect: 'Increases skill gauge fill rate by 5%.'
                    }
                ],
                [
                    {
                        name: 'Stun Res +25%',
                        effect: 'Reduces susceptibility to stun by 25%.'
                    },
                    {
                        name: 'Stun Res +50%',
                        effect: 'Reduces susceptibility to stun by 50%.'
                    }
                ],
                [
                    {
                        name: 'Stun Res +25%',
                        effect: 'Reduces susceptibility to stun by 25%.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Spiral Hunter',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals flame damage to surrounding enemies.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals flame damage to surrounding enemies.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals flame damage to surrounding enemies.'
                        }
                    ],
                    cost: '2409',
                    regen: 'None',
                    iframe: 'Long'
                },
                {
                    name: 'Safeguard Surge',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: "Grants all teammates a one-use shield that nullifies damage less than 15% of the user's maximum HP. This does not stack with any other shields."
                        },
                        {
                            level: 'Lvl 2',
                            description: "Grants all teammates a one-use shield that nullifies damage less than 20% of the user's maximum HP. This does not stack with any other shields."
                        }
                    ],
                    cost: '5840',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
        ,
        {
            name: 'Euden',
            image: 'https://gamepress.gg/dragalialost/sites/dragalialost/files/styles/300h/public/2018-10/Euden-4-star_0.png?itok=E4pFJoNy',
            description: 'The seventh heir of the Alberian royal family, he lives with the mutual support of his twin sister, Zethia, and the faerie Notte. Always smiling, he carries a unique blend of unwavering courage and intense consideration for others.',
            cv: ['Vincent Tong', 'Koki Uchiyama'],
            title: ' - ',
            rarity: '4',
            element: 'Flame',
            weapon: 'Sword',
            role: 'Attack',
            atk: '480',
            hp: '716',
            coability: {
                name: 'Dragon Haste +5%',
                baseEffect: 'Increases dragon gauge fill rate by 5%. Benefits your whole team.',
                upgrades: [
                    'Increases dragon gauge fill rate by 6%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 8%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 11%. Benefits your whole team.',
                    'Increases dragon gauge fill rate by 15%. Benefits your whole team.'
                ]
            },
            abilities: [
                [
                    {
                        name: "Dragon's Claws I",
                        effect: 'Each shapeshift increases strength (up to three times per quest).'
                    },
                    {
                        name: "Dragon's Claws II",
                        effect: 'Each shapeshift increases strength (up to three times per quest).'
                    }
                ],
                [
                    {
                        name: 'Stun Res +50%',
                        effect: 'Reduces susceptibility to stun by 50%.'
                    },
                    {
                        name: 'Stun Res +100%',
                        effect: 'Reduces susceptibility to stun by 100%.'
                    }
                ],
                [
                    {
                        name: 'Player EXP +10%',
                        effect: 'Increases player EXP intake for clearing quests by 10%. This ability does not stack with other similar abilities; the highest value will be applied.'
                    },
                    {
                        name: 'Player EXP +15%',
                        effect: 'Increases player EXP intake for clearing quests by 15%. This ability does not stack with other similar abilities; the highest value will be applied.'
                    }
                ]
            ],
            skills: [
                {
                    name: 'Blazing Circlet',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals flame damage to surrounding enemies.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals flame damage to surrounding enemies.'
                        },
                        {
                            level: 'Lvl 3',
                            description: 'Deals flame damage to surrounding enemies.'
                        }
                    ],
                    cost: '2376',
                    regen: 'None',
                    iframe: 'Short'
                },
                {
                    name: 'Exalted Fire',
                    levels: [
                        {
                            level: 'Lvl 1',
                            description: 'Deals flame damage to enemies in a line.'
                        },
                        {
                            level: 'Lvl 2',
                            description: 'Deals flame damage to enemies in a line, and reduces their defense by 5%.'
                        }
                    ],
                    cost: '4880',
                    regen: 'None',
                    iframe: 'Medium'
                }
            ]
        }
    ]
}
