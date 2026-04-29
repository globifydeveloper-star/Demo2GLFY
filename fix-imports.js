const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  list.forEach(item => {
    const p = path.join(dir, item.name);
    if (item.isDirectory()) {
      results.push(...walk(p));
    } else if (item.isFile() && (p.endsWith('.ts') || p.endsWith('.tsx'))) {
      results.push(p);
    }
  });
  return results;
}

const files = walk('./src');
let fixedCount = 0;
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('@/lib/mailer/utils')) {
    const newContent = content.replace(/@\/lib\/mailer\/utils/g, '@/lib/utils');
    fs.writeFileSync(f, newContent);
    console.log('Fixed:', f);
    fixedCount++;
  }
});
console.log('Total fixed:', fixedCount);
