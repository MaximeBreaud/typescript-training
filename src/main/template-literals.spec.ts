describe('Template literals', () => {

  it('should support string interpolation', () => {
    const personPL = {
      name: 'Jarosław',
      friends: ['Antoni', 'Andrzej', 'Krystyna', 'Wiktor']
    }
    const personEN = {
      name: 'Darren',
      friends: ['Greg', 'Sebastian', 'Chloe']
    }
    // construct an arrow function using template literal string interpolation
    const friendsStr = person => `${person.name} has ${person.friends.length} friends: ${person.friends.join(', ')}`

    expect(friendsStr(personPL)).toBe(
      'Jarosław has 4 friends: Antoni, Andrzej, Krystyna, Wiktor'
    )
    expect(friendsStr(personEN)).toBe(
      'Darren has 3 friends: Greg, Sebastian, Chloe'
    )
  })

  it('should support multi-line strings', () => {
    // construct a string with multiple lines without needing escaped newline characters
    const multiLine = `\n    Oh\n    my\n    dear\n    so much fun!`

    expect(multiLine).toBe('\n    Oh\n    my\n    dear\n    so much fun!')
  })

  fit('should support string escaping', () => {
    // escape a string in a template literal for each of these
    let toto1 = `Hi
there!`
    let toto2 = `This is \`escaped\` backtics`
    expect(toto1).toBe('Hi\nthere!')
    expect(toto2).toBe('This is `escaped` backtics')
  })

  // you likely wont often use tagging, but it can be handy!
  it('should call the tagging function', () => {
    function tagIt(literalString, ...interpolatedParts) {
      const noun = 'World'
      const emotion = 'happy'
      const hello = tagIt`Hello dear${noun}! Are you feeling really ${emotion} today?`
      expect(hello).toBe('Hello dear World! Are you feeling really happy today?')

      const name = 'John'
      const action = 'take a seat'
      const result = tagIt`Welcome dear ${name}, feel comfortable and really ${action}!`
      expect(result).toBe('Welcome dear John, feel comfortable and really take a seat!')
      // implement this function to make the test pass
      return `${hello}\n${result}`
    }
  })

  it('can be curried', () => {
    // Using tagged template strings, write journey function
    // that will accept following 3 template strings
    // and return a string describing the journey
    let journey = (...arr1) => (...arr2) => (...arr3) => {
      return `${arr1}, then ${arr2} and finally ${arr3}!`
    }

    expect(journey`Warsaw` `Poznan` `Berlin`).toBe('Warsaw, then Poznan and finally Berlin!')
    expect(journey`Poland` `Czech` `Austria`).toBe('Poland, then Czech and finally Austria!')
    expect(journey`Europe` `Asia` `Australia`).toBe('Europe, then Asia and finally Australia!')
  })

})
