import {readFile} from 'fs/promises'


console.log(import.meta.url);

const filePath = new URL('./index.html',import.meta.url);

const data = await readFile(filePath,'utf-8');

console.log(data);

const obj = {
    title: 'my custom title',
    body: 'custom body'
}

for(const [key,value] of )

