const fs = require('fs');
const path = require('path');
const elasticlunr = require('elasticlunr');

function walk(dir){
  let results = [];
  fs.readdirSync(dir).forEach(file => {
    const fp = path.join(dir, file);
    const stat = fs.statSync(fp);
    if(stat && stat.isDirectory()) results = results.concat(walk(fp));
    else if(/\.svx?$/.test(file)) results.push(fp);
  });
  return results;
}

function extractFrontmatter(content){
  const m = content.match(/^---([\s\S]*?)---/);
  if(!m) return {};
  const lines = m[1].split(/\r?\n/).map(l=>l.trim()).filter(Boolean);
  const out = {};
  lines.forEach(l=>{
    const idx = l.indexOf(':');
    if(idx>0){
      const k = l.slice(0,idx).trim();
      let v = l.slice(idx+1).trim();
      v = v.replace(/^"|"$/g,'');
      out[k]=v;
    }
  });
  return out;
}

function build(){
  const files = walk(path.join(__dirname,'..','src','routes'));
  const idx = elasticlunr(function(){
    this.addField('title');
    this.addField('body');
    this.setRef('id');
  });
  files.forEach((f,i)=>{
    const raw = fs.readFileSync(f,'utf8');
    const fm = extractFrontmatter(raw);
    const body = raw.replace(/^---[\s\S]*?---/,'').replace(/<[^>]+>/g,' ');
    idx.addDoc({id:i,title:fm.title||path.basename(f),body, path: path.relative(path.join(__dirname,'..','src','routes'), f).replace(/\\/g,'/')});
  });
  fs.writeFileSync(path.join(__dirname,'..','static','search-index.json'), JSON.stringify(idx));
  console.log('built search index to static/search-index.json');
}

build();
