function convertTimeToEnglish(time) {
  const [hours, minutes] = time.split(':').map(Number);
  const hourWords = [
      'midnight', 'one', 'two', 'three', 'four', 'five', 
      'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'midday'
  ];
  const minuteWords = [
      'o\'clock', 'one', 'two', 'three', 'four', 'five', 'six', 
      'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 
      'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 
      'eighteen', 'nineteen', 'twenty', 'twenty one', 'twenty two', 
      'twenty three', 'twenty four', 'twenty five', 'twenty six', 
      'twenty seven', 'twenty eight', 'twenty nine'
  ];

  let hourWord, minuteWord;

  if (hours === 0) {
      hourWord = hourWords[0];
  } else if (hours === 12) {
      hourWord = hourWords[12];
  } else {
      hourWord = hourWords[hours % 12];
  }

  if (minutes === 0) {
      minuteWord = minuteWords[0];
  } else if (minutes === 15) {
      minuteWord = 'quarter';
  } else if (minutes === 30) {
      minuteWord = 'half';
  } else if (minutes === 45) {
      minuteWord = 'quarter';
  } else if (minutes < 30) {
      minuteWord = `${minuteWords[minutes]} past`;
  } else {
      minuteWord = `${minuteWords[60 - minutes]} to`;
  }


  return `${minuteWord} ${hourWord}`;
}