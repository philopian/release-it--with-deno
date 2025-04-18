// Read version from deno.json
const text = await Deno.readTextFile("deno.json");
const { version } = JSON.parse(text);
console.log(version);
