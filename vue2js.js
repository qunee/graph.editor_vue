import * as compiler from 'vue-template-compiler';
import fs from 'fs';

let file = './src/common/vue/GraphEditor.vue';
const content = fs.readFileSync(file, 'utf-8');

let parsed = compiler.parseComponent(content);//'./src/common/vue/GraphEditor.vue');
const template = parsed.template ? parsed.template.content : '';
const script = parsed.script ? parsed.script.content : '';

const templateEscaped = template.trim().replace(/`/g, '\\`');
const scriptWithTemplate = script.match(/export default ?\{/)
    ? script.replace(/export default ?\{/, `$&\n\ttemplate: \`\n${templateEscaped}\`,`)
    : `${script}\n export default {\n\ttemplate: \`\n${templateEscaped}\`};`;

fs.writeFileSync(file + '.js', scriptWithTemplate)