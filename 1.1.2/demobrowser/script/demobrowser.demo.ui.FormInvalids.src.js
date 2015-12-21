/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2008 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Martin Wittemann (martinwittemann)

************************************************************************ */

qx.Class.define("demobrowser.demo.ui.FormInvalids",
{
  extend : qx.application.Standalone,

  members :
  {
    main: function()
    {
      this.base(arguments);


      var widgets = [];

      // spinner
      widgets.push(new qx.ui.form.Spinner());
      this.getRoot().add(widgets[0], {left: 20, top: 70});

      // slider
      widgets.push(new qx.ui.form.Slider());
      widgets[1].setWidth(200);
      this.getRoot().add(widgets[1], {left: 20, top: 100});

      // textfield
      widgets.push(new qx.ui.form.TextField());
      this.getRoot().add(widgets[2], {left: 20, top: 130});

      // textarea
      widgets.push(new qx.ui.form.TextArea());
      this.getRoot().add(widgets[3], {left: 20, top: 160});

      // passwordfield
      widgets.push(new qx.ui.form.PasswordField());
      this.getRoot().add(widgets[4], {left: 20, top: 240});

      // combobox
      widgets.push(new qx.ui.form.ComboBox());
      this.getRoot().add(widgets[5], {left: 20, top: 270});

      // selectbox
      widgets.push(new qx.ui.form.SelectBox());
      this.getRoot().add(widgets[6], {left: 20, top: 300});

      // checkbox
      widgets.push(new qx.ui.form.CheckBox());
      this.getRoot().add(widgets[7], {left: 20, top: 330});

      // radiobutton
      widgets.push(new qx.ui.form.RadioButton());
      this.getRoot().add(widgets[8], {left: 20, top: 350});

      // group box
      widgets.push(new qx.ui.groupbox.GroupBox("I am a box"));
      this.getRoot().add(widgets[9], {left: 240, top: 70});

      // radio group box
      widgets.push(new qx.ui.groupbox.RadioGroupBox("I am a box"));
      this.getRoot().add(widgets[10], {left: 240, top: 170});

      // check group box
      widgets.push(new qx.ui.groupbox.CheckGroupBox("I am a box"));
      this.getRoot().add(widgets[11], {left: 240, top: 270});

      // list
      widgets.push(new qx.ui.form.List());
      this.getRoot().add(widgets[12], {left: 390, top: 70});
      for (var i = 0; i < 10; i++) {
        widgets[12].add(new qx.ui.form.ListItem("Item " + (i + 1)));
      }

      // date field
      widgets.push(new qx.ui.form.DateField());
      this.getRoot().add(widgets[13], {left: 390, top: 280});

      // date chooser
      widgets.push(new qx.ui.control.DateChooser());
      this.getRoot().add(widgets[14], {left: 520, top: 70});

      // radioGroup
      var radioGroup = new qx.ui.form.RadioGroup();
      var r1 = new qx.ui.form.RadioButton("RadioGroup 1");
      radioGroup.add(r1);
      this.getRoot().add(r1, {left: 530, top: 250});
      var r2 = new qx.ui.form.RadioButton("RadioGroup 2");
      radioGroup.add(r2);
      this.getRoot().add(r2, {left: 530, top: 270});


      widgets.push(radioGroup);


      /* ***********************************************
       * CONTROLLS
       * ********************************************* */
      var toggleValidButton = new qx.ui.form.ToggleButton("invalid");
      this.getRoot().add(toggleValidButton, {left: 260, top: 20});

      toggleValidButton.addListener("changeValue", function(e) {
        for (var i = 0; i < widgets.length; i++) {
          widgets[i].setInvalidMessage("Invalid (" + i + ")");
          widgets[i].setValid(!e.getData());
        }
      }, this);

      var disableButton = new qx.ui.form.ToggleButton("disabled");
      this.getRoot().add(disableButton, {left: 330, top: 20});

      disableButton.addListener("changeValue", function(e) {
        for (var i = 0; i < widgets.length; i++) {
          widgets[i].setEnabled(!e.getData());
        }
      }, this);

      var disableTooltipButton = new qx.ui.form.ToggleButton("disable tooltips");
      this.getRoot().add(disableTooltipButton, {left: 410, top: 20});

      disableTooltipButton.addListener("changeValue", function(e) {
        qx.ui.tooltip.Manager.getInstance().setShowInvalidTooltips(!e.getData());
      }, this);





      /* ***********************************************
       * DESCRIPTIONS
       * ********************************************* */
      // List Description
      var listDescription = new qx.ui.basic.Label();
      listDescription.setRich(true);
      listDescription.setWidth(250);
      listDescription.setValue("<b>Validation</b><br/>Press the button to"
        + " invalidate all shown widgets. Try the invalid focus and tooltip.");
      this.getRoot().add(listDescription, {left: 20, top: 10});
    }
  }
});
