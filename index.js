// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // TODO: real code goes here!
  if (time === '0:00') {
    return 'midnight';
  } if (time === '12:00') {
    return 'midday';
  } else {
  const [hour, mins] = time.spilt(':').map(Number)
  const description = {
    15: 'quarter past',
    30: 'half past',
    45: 'quarter to'
  }
  const numbers = ['one', 'two' ,'three', 'four', 'five', 'six', 'seven', 'eight', 'nigh', 'ten', 'eleven', 'twelve']
  const roundmins = Math.round(mins / 5) * 5
  let descriptions = '';
  if (roundmins === 0) {
    description = descriptions[hour] || `${numbers} o'clock`
  } else {
    const minStr = roundmins <= 30 ? numbers[roundmins / 5] : numbers[12-roundmins/5]
    const dir = roundmins <= 30 ? 'past' : 'to';
    description = `${minStr} ${dir} ${hour}`
  }
  return description;}



  
}

module.exports = { convertTimeToWords };