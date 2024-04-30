# emoji-rain

<!-- Auto Generated Below -->

## Description

Renders an emoji rain animation using HTML canvas

## Properties

| Attribute              | Description                                       | Type                |
| ---------------------- | ------------------------------------------------- | ------------------- |
| `drops`                | Stores the number of emoji drops                  | `number`            |
| `active`               | If true, the rain animation renders               | `boolean`           |
| `canvas`               | Stores a canvas html element                      | `interface`         |
| `context`              | Stores a canvas's 2d context                      | `object`            |
| `dropsForDrawing`      | Stores an array of emoji objects                  | `array`             |
| `timeout`              | Stores emoji animations with a timeout            | `setTimeout`        |
| `animationFrame`       | Stores an animation frame                         | `number`            |
| `emojiUnicode`         | Stores an array of unicode                        | `array`             |
| `totalEmoji`           | Stores the length of emojiUnicode                 | `number`            |
| `runAnimation`         | If true, the emoji rain animation should rerender | `number`            |

## Methods

### `makeItRain() => Promise<void>`

Starts the emoji rain animation.

#### Returns

Type: `Promise<void>`

### `stopTheRain() => Promise<void>`

Stops the emoji rain animation.

#### Returns

Type: `Promise<void>`

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*