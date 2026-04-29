const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else if (file.endsWith('.tsx')) {
            results.push(file);
        }
    });
    return results;
}

const dirPath = 'c:\\Users\\karth\\Downloads\\dem\\demo1\\src\\app';
const files = walk(dirPath);
let modifiedCount = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let hasChanged = false;
    
    const regex = /<Input\s+required\s+placeholder="Company \/ Brand name"/g;
    
    if (regex.test(content)) {
        content = content.replace(regex, '<Input placeholder="Company / Brand name"');
        hasChanged = true;
    }
    
    if (hasChanged) {
        fs.writeFileSync(file, content, 'utf8');
        modifiedCount++;
        console.log(`Modified: ${file}`);
    }
});

console.log(`Finished modifying ${modifiedCount} files.`);
