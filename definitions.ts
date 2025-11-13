const cracoucaaaaassColor = "#058b58";

Blockly.Blocks['import_cracoucaaaaass'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("from cracoucaaaaass import Cracoucaaaaass");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(cracoucaaaaassColor);
    }
};

Blockly.Blocks['cracoucaaaaass_init'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("cracoucaaaaass"), "cracoucaaaaass")
          .appendField(" = Cracoucaaaaass()");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(cracoucaaaaassColor);
    }
};

Blockly.Blocks['cracoucaaaaass_speak'] = {
    init: function() {
        this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("cracoucaaaaass"), "cracoucaaaaass")
          .appendField(".speak()");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(cracoucaaaaassColor);
    }
}; 