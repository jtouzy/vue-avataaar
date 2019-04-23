<template>
  <img :src="avatarURL">
</template>

<script>
import AvataaarMetadata from './AvataaarMetadata'

export default {
  props: {
    avatarStyle: String,
    accessoriesType: String,
    clotheType: String,
    colorFabric: String,
    eyebrowType: String,
    eyeType: String,
    facialHairColor: String,
    facialHairType: String,
    graphic: String,
    hairColor: String,
    mouthType: String,
    skinColor: String,
    topType: String
  },
  computed: {
    queryString() {
      let queryString =
        Object.keys(AvataaarMetadata)
          .filter(prop => this[prop])
          .map(prop => `${prop}=${this[prop]}`)
          .join('&')
      if (queryString.length) {
        queryString = `?${queryString}`
      }
      return queryString
    },
    avatarURL() {
      return `https://avataaars.io${this.queryString}`
    }
  }
}
</script>
