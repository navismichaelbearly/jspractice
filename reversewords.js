function reverseWords (str) {
    return str
      .trim()
      .split(/\s+/)
      .reverse()
      .join(' ')
  }
  
  console.log(reverseWords('  This is   a   test string '))