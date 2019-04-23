<h1 align="center">vue-avataaar</h1>

## Introduction

This project is a Vue.js component wrapper for the library [avataaars](https://avataaars.com/) designed by [Pablo Stanley](https://twitter.com/pablostanley).

<p align="center">
<img src="https://user-images.githubusercontent.com/5709133/50445980-88299a80-0912-11e9-962a-6fd92fd18027.png">
</p>

## Installation
Quick install with NPM:

```
npm install vue-avataaar --save
```

## Usage
Simply import and use the avataaar component in your vue template:

```vue
<template>
  <div>
    <avataaar avatar-style="Circle"></avataaar>
  </div>
</template>

<script>
import Avataaar from 'vue-avataaar'

export default {
  components: {
    Avataaar
  }
}
</script>
```
You can provide all the available avataaars-options as component properties to customize your avatar (like avatar-style in the example below).

## Properties
#### avatarStyle
- Circle
- Transparent
#### accessoriesType
- Blank
- Kurt
- Prescription01
- Prescription02
- Round
- Sunglasses
- Wayfarers
#### clotheType
- BlazerShirt
- BlazerSweater
- CollarSweater
- GraphicShirt
- Hoodie
- Overall
- ShirtCrewNeck
- ShirtScoopNeck
- ShirtVNeck
#### colorFabric
- Black
- Blue01
- Blue02
- Blue03
- Gray01
- Gray02
- Heather
- PastelBlue
- PastelGreen
- PastelOrange
- PastelRed
- PastelYellow
- Pink
- Red 
- White
#### eyebrowType
- Angry
- AngryNatural
- Default
- DefaultNatural
- FlatNatural
- RaisedExcited
- RaisedExcitedNatural
- SadConcerned
- SadConcernedNatural
- UnibrowNatural
- UpDown
- UpDownNatural
#### eyeType
- Close
- Cry
- Default
- Dizzy
- EyeRoll
- Happy
- Hearts
- Side
- Squint
- Surprised
- Wink
- WinkWacky
#### facialHairColor
- Auburn
- Black
- Blonde
- BlondeGolden
- Brown
- BrownDark
- PastelPink
- Platinum
- Red
- SilverGray
#### facialHairType
- Blank
- BeardMedium
- BeardLight
- BeardMagestic
- MoustacheFancy
- MoustacheMagnum
#### graphic
- Bat
- Cumbia
- Deer
- Diamond
- Hola
- Pizza
- Resist
- Selena
- Bear
- SkullOutline
- Skull
#### hairColor
- Auburn
- Black
- Blonde
- BlondeGolden
- Brown
- BrownDark
- PastelPink
- Platinum
- Red
- SilverGray
#### mouthType
- Concerned
- Default
- Disbelief
- Eating
- Grimace
- Sad
- ScreamOpen
- Serious
- Smile
- Tongue
- Twinkle
- Vomit
#### skinColor
- Tanned
- Yellow
- Pale
- Light
- Brown
- DarkBrown
- Black
#### topType
 - NoHair
- Eyepatch
- Hat
- Hijab
- Turban
- WinterHat1
- WinterHat2
- WinterHat3
- WinterHat4
- LongHairBigHair
- LongHairBob
- LongHairBun
- LongHairCurly
- LongHairCurvy
- LongHairDreads
- LongHairFrida
- LongHairFro
- LongHairFroBand
- LongHairNotTooLong
- LongHairShavedSides
- LongHairMiaWallace
- LongHairStraight
- LongHairStraight2
- LongHairStraightStrand
- ShortHairDreads01
- ShortHairDreads02
- ShortHairFrizzle
- ShortHairShaggyMullet
- ShortHairShortCurly
- ShortHairShortFlat
- ShortHairShortRound
- ShortHairShortWaved
- ShortHairSides
- ShortHairTheCaesar
- ShortHairTheCaesarSidePart

You can find all the available properties with the [avataaars-generator](https://getavataaars.com/) provided by [Fang-Pen Lin](https://twitter.com/fangpenlin).
