function decompress(inputVal) {
  let value = '';
  if (inputVal) {
    const bytes = atob(inputVal.trim());
    const buffer = pako.inflate(bytes);
    value = buffer.toString('ucs2');
  }
  return value;
}
