
(function() {	
	

	var pluginName = 'imageupload';
	
	CKEDITOR.plugins.add('imageupload', {
		
		
		
		"init": function (editor) {
						
			editor.addCommand( pluginName, new CKEDITOR.dialogCommand( 'imageuploadDialog' ) );
			
			
			
			
			CKEDITOR.dialog.add( 'imageuploadDialog', this.path + 'dialogs/imageupload.js' );
			
			
			
			editor.ui.addButton( 'imageupload', {
				label: 'Загрузка изображения',
				command: pluginName,
				toolbar: 'insert',
				icon: this.path + 'icons/abbr.png',
			});
		}
	});

})();


