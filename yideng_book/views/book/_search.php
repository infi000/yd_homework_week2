<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\BookSearch */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="book-search">

    <?php $form = ActiveForm::begin([
        'action' => ['index'],
        'method' => 'get',
    ]); ?>

    <?= $form->field($model, 'id') ?>

    <?= $form->field($model, 'sort') ?>
    <?= $form->field($model, 'name') ?>

    <?= $form->field($model, 'desc') ?>

    <?= $form->field($model, 'price') ?>

    <?= $form->field($model, 'author') ?>

    <?php // echo $form->field($model, 'date') ?>

    <?php // echo $form->field($model, 'from') ?>

    <div class="form-group">
        <?= Html::submitButton('Search', ['class' => 'btn btn-primary']) ?>
        <?= Html::resetButton('Reset', ['class' => 'btn btn-default']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
