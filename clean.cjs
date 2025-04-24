const fs = require('fs');

const filePath = './docs.json';
const outputPath = './docs.json';

const file = fs.readFileSync(filePath, 'utf-8');
const json = JSON.parse(file);

if (Array.isArray(json.resources)) {
  json.resources = json.resources.map(resource => {
    if (resource._type === 'environment' && resource.data?.GLOBAL_HEADERS) {
      return { ...resource, data: {} };
    }
    return resource;
  });
}

fs.writeFileSync(outputPath, JSON.stringify(json));

console.log('File saved', outputPath);
