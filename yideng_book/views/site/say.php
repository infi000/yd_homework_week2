<?php

use yii\helpers\Html;
use yii\base\Widget;
// use yii\jui\DatePicker;
//$this->title = $name;
?>
<?=Html::encode($message) ?>

<?= Html::beginForm(['order/update'], 'post', ['enctype' => 'multipart/form-data']) ?>


<?= Html::button('Press me!', ['class' => 'teaser']) ?>
<?= Html::submitButton('Submit', ['class' => 'submit']) ?>
<?= Html::resetButton('Reset', ['class' => 'reset']) ?>

<?= Html::endForm() ?>

<?= DatePicker::widget(['name' => 'date']) ?>