<?php
namespace esoftkz\ckeditor;

use yii\web\AssetBundle;

/**
 * CKEditorWidgetAsset
 *
 */
class CKEditorWidgetAsset extends AssetBundle
{
    public $depends = [
        'esoftkz\ckeditor\CKEditorAsset'
    ];
    public $js = [        
		'plupload.full.min.js',
		'jquery.ui.plupload.min.js',
		'ru.js',	
    ];
	 public $css = [
       'plupload.css',
    ];


    public function init()
    {
        $this->sourcePath = __DIR__ . '/assets';
        parent::init();
    }
}
