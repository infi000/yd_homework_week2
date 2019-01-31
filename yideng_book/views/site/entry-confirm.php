<?php 

use yii\helpers\Html;
 ?>

 <p> you have entered thie flollowing information:</p>

<ul>
    <li>
        <label for="">Name</label>:
        <?=Html::encode($model->name)  ?>
    </li>
    <li>
        <label for="">Email</label>:
        <?=Html::encode($model->email)  ?>
    </li>
</ul>
