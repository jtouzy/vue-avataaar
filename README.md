<h1 align="center">vue-avataaar</h1>

## Introduction

This project is a Vue.js component wrapper for the library [avataaars](https://avataaars.com/) designed by [Pablo Stanley](https://twitter.com/pablostanley).

<p align="center">
<img src="https://avataaars.io/?avatarStyle=Circle&accessoriesType=Prescription02&clotheColor=Red&clotheType=Hoodie&eyeType=Wink&facialHairType=Blank&hairColor=Black&skinColor=Light&topType=ShortHairShortFlat">
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

You can find all the available properties with the [avataaars-generator](https://getavataaars.com/) provided by [Fang-Pen Lin](https://twitter.com/fangpenlin).
