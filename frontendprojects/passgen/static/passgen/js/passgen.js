const resultSpan = document.getElementById('results')
const generateBtn = document.getElementById('generate')
const clipboardBtn = document.getElementById('clipboard')
const lengthInput = document.getElementById('length')
const uppercaseInput = document.getElementById('uppercase')
const lowercaseInput = document.getElementById('lowercase')
const numberInput = document.getElementById('numbers')
const symbolsInput = document.getElementById('symbols')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbols, 
}

clipboardBtn.addEventListener('click', async () => {
    const password = resultSpan.innerText;
    
    if (!password) {
        return;
    }
    
    try {
        await navigator.clipboard.writeText(password);
        console.log('copied')
        alert('Password Copied')
        // Optional: Add success feedback here
    } catch (err) {
        console.error('Failed to copy password:', err);
    }
});


generateBtn.addEventListener('click', () => {
    const length = +lengthInput.value
    const hasLower = lowercaseInput.checked
    const hasUpper = uppercaseInput.checked
    const hasNumber = numberInput.checked
    const hasSymbol = symbolsInput.checked

    resultSpan.innerText = generatePassword(
        length, hasLower, 
        hasUpper, hasNumber, 
        hasSymbol
    )

}) 

function generatePassword(length, lower, upper, number, symbol) {
    let generatedPasswordStr = ''

    const typesCount = lower + upper + number + symbol
    const typesArr =[{lower}, {upper}, {number}, {symbol}].filter(
        item => Object.values(item)[0]
    )
    console.log(typesArr)


    if (typesCount === 0) {
        return ''
    }

    for (let i = 0; i < length; i+= typesCount) {
        typesArr.forEach(type =>  {
            const funcName = Object.keys(type)[0]
            console.log(funcName)
            generatedPasswordStr += randomFunc[funcName]()
        })
    }

    const finalPassword = generatedPasswordStr.slice(0, length)
    console.log(finalPassword)
    return finalPassword
}

function getRandomLower() {
    base = Math.floor(Math.random() * 26) + 97
    return String.fromCharCode(base)
}

function getRandomUpper() {
    base = Math.floor(Math.random() * 26) + 65
    return String.fromCharCode(base)
}

function getRandomNumber() {
    base = Math.floor(Math.random() * 10) + 48
    return String.fromCharCode(base)
}

function getRandomSymbols() {
    const symbols = '!@#$%*(){}[]=<>/,.'
    console.log(symbols.length)
    idx = Math.floor(Math.random() * symbols.length)
    return symbols[idx]
}

