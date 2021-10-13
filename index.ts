// Read file
const decoder = new TextDecoder('utf-8');

const data = await Deno.readFile('readme.txt');
console.log(decoder.decode(data));

// Write file
const encoder = new TextEncoder();
const text = encoder.encode('write file');

await Deno.writeFile('readme.txt', text);

// renaming and removing files
await Deno.rename('readme.txt', 'deleteme.txt');
await Deno.remove('deleteme.txt');
