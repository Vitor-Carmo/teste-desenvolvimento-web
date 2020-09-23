
 const FirstLetterUppercase = letter => {return (letter.charAt(0).toUpperCase() +  letter.slice(1))}

 const FormatedNumber =  number => {
    let s = String(number);
    while (s.length < (3)) {s = "0" + s;}
    
    return s;

    //ex: 001, 002, 003 ... 010, 011 ...
}

module.exports =  {FirstLetterUppercase, FormatedNumber }