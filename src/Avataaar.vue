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
    clotheColor: String,
    eyebrowType: String,
    eyeType: String,
    facialHairColor: String,
    facialHairType: String,
    graphicType: String,
    hairColor: String,
    mouthType: String,
    skinColor: String,
    topType: String,
    random: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    queryString() {
      let queryString =
        Object.keys(AvataaarMetadata)
          .filter(prop => this[prop])
          .map(prop => {
            if(this.random) {
              let rand = Math.floor(Math.random() * AvataaarMetadata[prop].properties.length)
              return `${prop}=${AvataaarMetadata[prop].properties[rand]}`
            } else {
              return `${prop}=${this[prop]}`
            }
          })
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
