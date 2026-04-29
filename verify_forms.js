const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.tsx') || file.endsWith('.jsx') || file.endsWith('.js')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk(path.join(__dirname, 'src'));

let missingPhone = [];
let missingResend = [];

files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    
    // Any file with an HTML form tag
    if (content.includes('<form') || content.includes('<motion.form')) {
        let hasError = false;
        
        const hasPhone = /name=["']phone["']/.test(content);
        
        const hasResend = content.includes('fetch("/api/contact"') || 
                          content.includes("fetch('/api/contact'") || 
                          content.includes("fetch(`/api/contact`") ||
                          content.includes('fetch("/api/') && content.includes('contact"');
                          
        const usesContactDialog = content.includes('useContactDialog') || content.includes('openContactDialog');
        const isLayout = file.includes('layout.tsx');
        
        if (!hasPhone && !usesContactDialog && !isLayout) {
            missingPhone.push(file);
        }
        
        if (!hasResend && !usesContactDialog && !isLayout) {
            missingResend.push(file);
        }
    }
});

console.log("Files with forms but missing phone field:");
missingPhone.forEach(f => console.log(path.basename(f)));

console.log("\nFiles with forms but missing Resend connection (/api/contact):");
missingResend.forEach(f => console.log(path.basename(f)));
