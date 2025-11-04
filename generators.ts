Blockly.Python['import_cracoucaaaaass'] = function(block) {
    var code = 'from cracoucaaaaass import Cracoucaaaaass\n';
    return code;
};

Blockly.Python['cracoucaaaaass_init'] = function(block) {
    var bird = Blockly.Python.nameDB_.getName(block.getFieldValue('cracoucaaaaass'), Blockly.VARIABLE_CATEGORY_NAME);
    var code = `${bird} = Cracoucaaaaass()\n`;
    return code;
};

Blockly.Python['cracoucaaaaass_speak'] = function(block) {
    var bird = Blockly.Python.nameDB_.getName(block.getFieldValue('cracoucaaaaass'), Blockly.VARIABLE_CATEGORY_NAME);
    var code = `${bird}.speak()\n`;
    return code;
};  