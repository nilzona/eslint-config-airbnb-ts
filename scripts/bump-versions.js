const { readFile, writeFile } = require('fs/promises'); // eslint-disable-line
const path = require('path'); // eslint-disable-line

const packagesPath = path.resolve(__dirname, '../packages');

async function bumpVersions(version) {
  try {
    [
      path.join(packagesPath, 'airbnb-base-ts/package.json'),
      path.join(packagesPath, 'airbnb-ts/package.json'),
    ].forEach(async (p) => {
      const data = await readFile(p);
      const packageJson = JSON.parse(data);
      packageJson.version = version;

      const writeData = JSON.stringify(packageJson, null, 2);
      await writeFile(p, writeData);
    });
  } catch (err) {
    console.log(err); // eslint-disable-line
  }
}

const version = process.argv[3];

bumpVersions(version);
