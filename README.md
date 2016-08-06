# canvas-console
Lightweight console with 24-bit colors using font based on Windows 7 x 12 bitmap font

## Installation
Simply download the `CanvasConsole.js` and `ascii.png` and reference both in your html with appropriate tags
```html
<script type="text/javascript" src="path/to/CanvasConsole.js"></script>
<img src="path/to/ascii.png" style="display: none;" />
```

## Usage

**1. Create new instance of** `CanvasConsole`

The constructor accepts following arguments
```javascript
var myConsole = new CanvasConsole();
// equivalent to new CanvasConsole(80, 25);

var myConsole = new CanvasConsole(width, height);
// width/height - number of characters horizontally/vercitically

var myConsole = new CanvasConsole(width, height, img_charset);
// img_charset must be an img DOM element referencing the ascii.png file
```

**2. Load a font spritesheet**

(*If you created the object using the constructor with the* `img_charset` *argument, you can skip this step*)

If you didn't supply the font spritesheet in the constructor, you have to call the following function
```javascript
myConsole.LoadFont('path/to/ascii.png', callback);
```
Since the image is loaded asynchronously, the callback is called after the loading is done.
If you don't want to waste time waiting for this to finish with every new `CanvasConsole`, I
recommend referencing the image directly from your html and passing it to the constructor.

**3. Create a canvas**

To create the canvas element, you have to call the `CreateCanvas` function and optionally
provide the parent element in which the canvas will be created
```javascript
myConsole.CreateCanvas(parent_element);

myConsole.CreateCanvas();
// is equivalent to 
myConsole.CreateCanvas(document.body);
```

**4. Use the console**

Print out text:
```javascript
myConsole.WriteLine('Hello, world!');
// is equivalent to
myConsole.Write('Hello, world!\n');
```

Move cursor around:
```javascript
myConsole.SetCursor(x, y);
// or like this
myConsole.SetCursor([x, y]);
// or even like this
myConsole.CursorX = x;
myConsole.CursorY = y;

var cpos = myConsole.GetCursor();
// returns array [x, y]
// [0, 0] is the top left corner
```

Change colors:
```javascript
myConsole.Foreground = [r, g, b];
myConsole.Background = [r, g, b];
```

Clear the console and move to [0, 0]:
```javascript
myConsole.Clear();
```
