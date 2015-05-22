CKEDITOR.dialog.add( 'imageuploadDialog', function ( editor ) {
	
	
	
	
	return {
        title: 'Загрузка изображений',
        minWidth: 500,
        minHeight: 250,
		onLoad: function() {
			var csrfName = yii.getCsrfParam();
			var csrf = yii.getCsrfToken();
			var csrfToken = $('meta[name="csrf-token"]').attr("content");
			//plupload
			$("#dialog_upload_container").plupload({
				// General settings
				runtimes : 'html5,flash,silverlight,html4',
				url : editor.config.filebrowserUploadUrl,				 
				// Maximum file size
				max_file_size : '2mb',
		 
				chunk_size: '1mb',
				rename : true,
				dragdrop: true,			 
				filters : {
					// Maximum file size
					max_file_size : '10mb',
					// Specify what files to browse for
					mime_types: [
						{title : "Изображения", extensions : "jpg,gif,png"},						
					]
				},
				
				init: {
					UploadComplete: function(up, files) {
						alert("Загружено");
					}
				},
				// Sort files
				sortable: true,
		 
			
				multipart_params : {
					'_csrf': csrfToken
				},
				
				// Flash settings
				flash_swf_url : '/plupload/js/Moxie.swf',
			 
				// Silverlight settings
				silverlight_xap_url : '/plupload/js/Moxie.xap'
				
			});
			
					
			
		},
		onOk: function() {
			var up = $("#dialog_upload_container").plupload('getUploader');
			up.settings.multipart_params["maxWidth"] = $('maxWidth').val();
			up.settings.multipart_params["maxheight"] = $('maxheight').val();
			$("#dialog_upload_container").plupload('start');
			
			return false;
		},
        contents: [
            {
                id: 'tab-basic',
                label: 'Загрузка изображений',
				filebrowser: 'uploadButton',
                elements: [
					{
						type: 'vbox',
						width: '500px',
						height: '150px',
						style: 'float:left;',
						children: [ 							
							{
								type: 'html',
								id: 'htmlPreview',
								style: 'width:100%;',
								html: '<div id="dialog_upload_container">' +
										'<a id="pickfiles" href="javascript:;">[Select files]</a>' +
										'<a id="uploadfiles" href="javascript:;">[Upload files]</a>' +
										'</div>',
							},							
							{
								type: 'hbox',
								widths: [ '20%', '39%', '2%', '39%'],								
								children: [								
									{
										type: 'html',
										id: 'htmlPreview',										
										html: '<span>Размер:</span>'
									},									
									{
										type: 'html',
										html: '<input class="cke_dialog_ui_input_text" id="maxWidth" value="800" type="text">'										
										
										
									},
									{
										type: 'html',
										id: 'htmlPreview',										
										html: '<span style="width:100%; display:block; text-align:center;">*</span>'
									},
									{
										type: 'html',
										html: '<input class="cke_dialog_ui_input_text" id="maxHeight" value="600" type="text">'			
									},

								],
							},
						]
					},                  
                ]
            }
        ]
    };
	
});

