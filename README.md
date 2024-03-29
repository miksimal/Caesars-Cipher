# Caesars-Cipher

## Context
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

In the ROT13 cipher, the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O', etc.

## Challenge
Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

## Tests
```
rot13("SERR PBQR PNZC") should decode to FREE CODE CAMP
```
```
rot13("SERR CVMMN!") should decode to FREE PIZZA!
```
```
rot13("SERR YBIR?") should decode to FREE LOVE?
```
```
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
```
