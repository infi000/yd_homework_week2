<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "{{%t_book}}".
 *
 * @property int $id
 * @property string $name
 * @property string $desc
 * @property double $price
 * @property string $author
 * @property string $date
 * @property string $from
 */
class Book extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return '{{%t_book}}';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['name', 'price'], 'required'],
            [['price'], 'number'],
            [['date'], 'safe'],
            [['name', 'author', 'from'], 'string', 'max' => 40],
            [['desc'], 'string', 'max' => 500],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => '编号',
            'name' => '书名',
            'desc' => '简介',
            'price' => '价格',
            'author' => '作者',
            'date' => '日期',
            'from' => '出版社',
            'sort' => '分类',
        ];
    }
}
