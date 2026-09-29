const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const ts = require('typescript');
require.extensions['.ts'] = (module, file) => module._compile(ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,esModuleInterop:true}}).outputText,file);
const {parseChecklist,serializeChecklist}=require('../lib/checklist.ts');
const {stages}=require('../lib/data.ts');
const {parseLocalDate,computeAge}=require('../lib/age.ts');
const legacy=require('../lib/legacy-milestone-ids.json');
test('invalid or future-version stored checklists cannot crash the page',()=>{
  for(const raw of ['null','[]','1','"string"','{broken','{"version":9,"entries":{}}']) assert.deepEqual(parseChecklist(raw),{});
  assert.deepEqual(parseChecklist('{"0-1:g:0":{},"0-1:f:0":"2026-02-31"}'),{});
});
test('legacy dates and boolean records migrate to permanent IDs and round trip',()=>{
  const migrated=parseChecklist(JSON.stringify({'0-1:g:0':'2026-09-29','0-1:f:0':true,'unknown':true}));
  assert.deepEqual(migrated,{[legacy['0-1:g:0']]:'2026-09-29',[legacy['0-1:f:0']]:true});
  assert.deepEqual(parseChecklist(serializeChecklist(migrated)),migrated);
});
test('every milestone has unique IDs and complete translations; migration covers existing items',()=>{
  const items=stages.flatMap(s=>[...s.grossMotor,...s.fineMotor]);
  assert.equal(new Set(items.map(i=>i.id)).size,items.length);
  for(const item of items){for(const lang of ['ko','en','vi'])assert.ok(item.text[lang]);assert.ok(Object.values(legacy).includes(item.id));}
});
test('reordering content cannot remap existing records',()=>{
  const list=stages[0].grossMotor;
  const saved=serializeChecklist({[list[0].id]:'2026-09-29'});
  list.reverse();
  try {assert.equal(parseChecklist(saved)[list.at(-1).id],'2026-09-29');assert.equal(parseChecklist(saved)[list[0].id],undefined);}
  finally {list.reverse();}
});
test('dates reject rollover and preserve valid leap days',()=>{
  for(const value of ['2026-02-31','2026-13-01','2026-1-1','2026-09-29-extra'])assert.equal(parseLocalDate(value),null);
  assert.ok(parseLocalDate('2024-02-29'));
  assert.equal(computeAge('2999-01-01',false,'' ).status,'future');
});
test('the offline fallback is explicitly precached',()=>{
  const worker=fs.readFileSync('app/sw.ts','utf8');
  const config=fs.readFileSync('app/serwist/[path]/route.ts','utf8');
  const fallback=worker.match(/url: "([^"]+)"/)[1];
  const urls=JSON.parse(config.match(/additionalPrecacheEntries: (\[[^\]]+\])/)[1]);
  assert.ok(urls.includes(fallback));assert.deepEqual(urls,['/ko','/en','/vi']);
});
