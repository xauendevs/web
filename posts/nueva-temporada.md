---
title: 'Nueva imagen y nueva temporada'
metaTitle: 'Nueva imagen y nueva temporada'
author: 'Alberto Tejero'
metaDesc: 'Después de tanto tiempo de inactividad por el COVID-19, queremos volver y lo queremos hacer renovando la imagen de JaénDevelopers que a partir de ahora se denominará XauenDevs.'
image: header.png
date: '2022-06-06'
tags:
  - xauendevs
  - general
---

## Probando pintar codigo en los posts

### Javascript

```javascript
import marked from 'marked'

marked.setOptions({
  langPrefix: 'hljs language-',
  highlight: function (code) {
    return require('highlight.js').highlightAuto(code, ['html', 'javascript'])
      .value
  }
})
```

### Kotlin

```kotlin
import kotlinx.serialization.Serializable
import kotlin.random.Random

interface Building

@Serializable
class House(
    private val rooms: Int? = 3,
    val name: String = "Palace"
) : Building {
    var residents: Int = 4
        get() {
            println("Current residents: $field")
            return field
        }

    fun burn(evacuation: (people: Int) -> Boolean) {
        rooms ?: return
        if (evacuation((0..residents).random()))
            residents = 0
    }
}

fun main() {
    val house = House(name = "Skyscraper 1")
    house.burn {
        Random.nextBoolean()
    }
}
```

### Swift

```swift
import Foundation

@objc class Person: Entity {
  var name: String!
  var age:  Int!

  init(name: String, age: Int) {
    /* /* ... */ */
  }

  // Return a descriptive string for this person
  func description(offset: Int = 0) -> String {
    return "\(name) is \(age + offset) years old"
  }
}
```
