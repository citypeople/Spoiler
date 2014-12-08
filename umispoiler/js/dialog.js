tinyMCEPopup.requireLangPack();

var UmiSpoilerDialog = {
	init : function() {
    var f = document.forms[0];
    
    f.caption.value = '[ Показать / Скрыть ]';
    f.text.value = '...Содержание спойлера...';
	},

	insert : function() {
    var f = document.forms[0];
    
    var caption = f.caption.value;
    var text = f.text.value;
    
    var script = "jQuery(this).parent().children('div.spoiler-body')"
      + ".stop(true, true).slideToggle(); void(0);";
    var html = '<div class="spoiler-wrapper">'
      + '<a style="text-decoration: none; font-weight: bold;" '
      + 'href="javascript://" onclick="' + script + '">' + caption + '</a>'
      + '<div class="spoiler-body" style="display: none;">'
      + text + '</div></div>';
      
		tinyMCEPopup.editor.execCommand('mceInsertContent', false, html);
		tinyMCEPopup.close();
	}
};

tinyMCEPopup.onInit.add(UmiSpoilerDialog.init, UmiSpoilerDialog);
