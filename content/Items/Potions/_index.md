---
share: true
title: Potions
---
Potion crafting is another branch of alchemy that utilizes tangible physical resources to create effects that mimic that of spells, as well as some wholly unique effects. The primary downside of potions over having the magic cast normally is that a creature can only imbibe so many potions in a single day before succumbing to what is known as potion sickness.

# Drinking Potions

A creature may drink a potion as a 2 AP action. Usually the process may require 3 AP to accomplish as the creature needs to first draw a potion from a stowed position for 1 AP, then drink for 2 AP. When a potion is ingested the potion drinker is treated as the target of the spell emulated by the potion.

Some potions may be applied to objects rather than ingested if the spell they emulate would enhance or modify an object in some way. In these cases the object is treated as the target of the potion.

Unless otherwise specified, drawing and drinking a potion provokes attacks of opportunity.

## Applying Potions

Potions may be applied to other creatures or objects, but doing so requires a 3 AP action rather than the usual 2 AP action to drink. When applying a potion to another creature the other creature must be willing or helpless.

## Potion Sickness

A creature can only imbibe a number of potions in a single day equal to their Constitution modifier (minimum 2), as such a creature with a 16 constitution (+3 modifier) would be able to drink 3 potions per day before succumbing to potion sickness. This makes potions a resource which is more important to utilize quality over quantity.

A creature suffering from potion sickness gains the sickened condition for the remainder of the day. If a creature drinks another potion while already sickened due to potion sickness, it instead becomes nauseated for the remainder of the day (or until it completes a long rest). If a creature drinks yet another potion while nauseated due to potion sickness, it takes 1d4 constitution damage per additional potion consumed. These sickened and nauseated conditions cannot be removed other than by completing a long rest or after 24 hours.

# Crafting Potions

Crafting potions is similar to crafting regular alchemical items, having a rarity and a rank to determine their overall power. As potions emulate spells, much of what determines this are the talents that are going into it. Think of crafting a potions as similar to preparing a spell charge for a prepared caster, selecting all of the talents that go into a single casting of the spell.

- **Rarity**: Rarity primarily determines the minimum level required to emulate the talents utilized in the potion.
- **Rank**: Rank determines additional BCB (beyond the minimum BCB of the rarity) gained by the potion for each rank beyond first.
- **Complexity**: Complexity is primarily a sum of spell points that would have been required to cast the spell normally; this is usually the way to track complexity, as some spells may have the option to spend a varying number of spell points

Crafting potions requires a Profession(Potioner) skill check rather than Profession(Alchemist), as potion making is a specialized craft. Potion crafting does not require the crafter to be a spellcaster to craft a potion and instead their ranks in Profession(Potioner) determine the limits of what they are capable of crafting. When crafting a potion, the following steps should be followed:

1. Choose the base spell of the potion.
    1. Only a single spell may be utilized in a potion.
    2. The drinker of the potion is always considered the target, even if the spell would normally target multiple creatures or an area, all effects are instead applied to the drinker of the potion only.
        1. This applies to potions applied to objects as well, instead treating the targeted object as the target.
        2. This does not overwrite valid targets for a spell; if a spell cannot target a specific type of creature or object, the potion will have no effect.
2. Determine the talents the spell would utilize.
    1. The talents must be valid to be applied to the spell, and must make a valid spell to be cast.
        1. Spells like transformation require a form talent to function, and as such cannot have a potion made without an accompanying form talent.
    2. You do not need to possess the spells or talents to craft the potion, but lacking these increases the DC by 1 for each spell or talent you lack.
        1. Class specific magic talents cannot be emulated unless you possess them.
3. Determine the Desired BCB of the spell.
    1. The potion must be of the minimum BCB required to cast the spell.
        1. A spell or talent with a BCB requirement of 13 would require a potion of sufficient rank and rarity.
    2. A spell with no BCB requirement may be made at any BCB desired, as long as you are capable of meeting the BCB or rank requirements to craft it.
    3. You cannot personally craft a potion which requires a BCB higher than your ranks in the higher of your Profession(Potioner) or your own BCB.
4. Determine Rarity
    1. The rarity of the potion determines the range of BCB to be cast.
    2. **Example**: A 13th BCB potion would require a rarity of rare.
5. Determine Rank
    1. A rank 1 potion is made at the minimum BCB for its rarity. For each rank above 1 the BCB increases by an additional 1 until the maximum BCB allowed for the rarity, then requiring the potion to be made at a higher rarity to use the higher BCB.
6. Determine Complexity
    1. Complexity is the higher of either number of talents or number of spell points spent on the spell.
        1. Affinity talents and the spell itself are not counted.
        2. Spells that require a talent to cast, and otherwise do not function without such talents, do not count the required talents to cast, but any optional talents beyond this are counted as normal.
        3. **Example**: When casting the transformation spell, a form talent must be applied for the spell to otherwise function. As such a creature making a potion of transformation with the elemental form talent would not count the elemental form talent towards the complexity. Talent-wise the spell would have a complexity of 0 due to the affinity and form talent not counting, and the base spell not counting towards the complexity. If choosing to make it a spell that costs a spell point rather than concentration it would then become a complexity 1 spell.
7. Determine Cost
    1. The cost to craft a potion is Base Cost + Rank Cost adjusted by Complexity
    2. Base cost is listed for the rarity.
        1. **Example**: Base cost of a rare potion is 180gp
    3. Rank cost is listed in the “cost increase per rank” column. This value is the cost increase for every rank above 1.
        1. **Example**: A rank 1 rare potion would retain its 180gp base cost.
        2. **Example**: A potion of BCB 13 would be a rank 4 rare potion requiring 315gp to craft.
    4. Complexity Cost modifies the final value of the potion.
        1. For every potion of complexity above 1 increase the crafting price of the potion by 50%
            1. **Example**: A potion with complexity of 3 would raise the price by 100%
        2. A complexity value of 0 instead reduces the cost by 50%.
            1. **Example**: A potion with only the base spell plus the affinity talent and no spell point cost would have a complexity of 0, as the affinity talent does not count.
8. Determine Crafting DC
    1. Base DC is determined by the rarity of the item.
    2. For each rank above 1 the craft DC increases by 5.
    3. Similar to rank, for each level of complexity above 1 raises the crafting DC by 5.
        1. Complexity 0 potions reduce the DC by 5 instead.
    4. For each spell and talent you are attempting to include in the potion that you do not possess the crafting DC of the potion increases by 1; unlike with complexity this does include affinity talents.
9. Determine the Finalized Potion’s Effects
    1. Calculate the spell's effects using the crafted BCB of the potion.
    2. Unless otherwise specified it is assumed a potion has a SPB value equal to the BCB value of the potion.
    3. As these spells have no caster the rarity determines the CAM value that will be utilized in the spell, as noted on the rarity chart. This value is only used in spells with variable effects dependent on a CAM value.
    4. Save DCs for a spell are calculated at 10+ ½ BCB + CAM value + Save DC Bonus (all determined by rarity and rank of the potion). Most potions are beneficial, but some may have ill effects for the drinker, or grant the drinker a spell that passively forces save attack rolls.
        1. Save DC is used in place of save attack rolls, as the effects are dependent upon the potion rather than the user.
    5. Spells that would normally last for a concentration duration instead automatically end after 1 round.
        1. If a spell would normally allow for greater duration with a spell point it is generally recommended to make a version with the spell point rather than concentration.
    6. Class features that modify cast spells do not modify the effects of the potion.

#### Rarity Chart:

|   |   |   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|---|---|
|**Rarity**|**Min BCB**|**Max BCB**|**Base Cost**|**Cost Increase per rank**|**Base Craft DC**|**Base Progress per Day**|**Save DC Bonus**|**CAM Value**|
|Common|-|4th|20 gp|5 gp|10|20 gp|+1|2|
|Uncommon|5th|9th|60 gp|15 gp|20|30 gp|+2|4|
|Rare|10th|14th|180gp|45 gp|30|50 gp|+3|6|
|Exceptional|15th|19th|540 gp|135 gp|40|80 gp|+4|8|
|Legendary|20th|-|1,620 gp|405 gp|50|140 gp|+5|10|

# List of Potions

Some potions in this list are unique and do not emulate spells, such as the mana potion; other potions such as the healing potion listed as simply examples that players may commonly purchase, but may always find other variants with higher ranks or different talents.

[List of Unique Potions](./List%20of%20Unique%20Potions/_index.md)