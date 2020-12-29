# Cal


## What does Cal do?

Cal provides easy to use services for subtracting, multipliying, adding, and much more to use in your code.

## Why should I use Cal?

To be honest, I don't know, but you can if you want to :)

## Is Cal useful?

Kinda

## Examples

>_Returns Non-Promise_
>```
>const Cal = require('@aahruto/node-js-calc');
>
>
>Cal.add(34.5, 34.5).then(res => console.log(res)); || Cal.add(34.5, 34.5).then(console.log);
>
>Cal.multiply(34.5, 2).then(res => console.log(res)); || Cal.multiply(34.5, 2).then(console.log);
>```

>_Returns Promise_
>```
>const Cal = require('@aahruto/node-js-calc');
>
>console.log(Cal.add(34.5, 34.5));
>
>console.log(Cal.multiply(34.5, 2));
>```