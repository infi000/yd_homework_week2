/*
Navicat MySQL Data Transfer

Source Server         : 127.0.0.1
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : db_ydbook

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2019-01-14 18:30:47
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `t_book`
-- ----------------------------
DROP TABLE IF EXISTS `t_book`;
CREATE TABLE `t_book` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(40) NOT NULL,
  `desc` varchar(500) DEFAULT NULL,
  `price` float NOT NULL,
  `author` varchar(40) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `from` varchar(40) DEFAULT NULL,
  `sort` char(255) DEFAULT '小说',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_book
-- ----------------------------
INSERT INTO `t_book` VALUES ('1', '文物中国史（精装版）（全八册）', '《文物中国史》是中国国家博物馆组织编撰的一套通史类历史读物，曾获首届中国政府出版奖提名奖，共计八卷，以文物为线索讲述了从史前到清朝覆亡的历史。 这套书精选2000余幅精美历史文物图片，以...', '581.7', '中国国家博物馆编 ', '2019-01-01', '世界图书出版公司', '传记');
INSERT INTO `t_book` VALUES ('2', '钱锺书（钱锺书传记）', '19世纪以来，新兴的中国知识阶层出了几位学贯中西的巨人，如严复、胡适，而钱锺书可能是这一脉在20世纪*后一位代表人物。钱锺书家学渊源，不但古文根柢深厚，不到20岁就替父亲捉刀...', '37.7', '汤晏', '2019-01-01', '文化发展出版社', '传记');
INSERT INTO `t_book` VALUES ('3', '他影响了中国：陈云', '本书是陈云的个人传记。 陈云是中国社会主义经济建设的开创者和奠基者之一，他的经济思想深度影响了中国经济体制和时代进程，对现在的经济体制改革有重要的借鉴意义，邓小平称赞他是;改革...', '34.5', '叶永烈 ', '2019-01-01', '天地出版社', '传记');
INSERT INTO `t_book` VALUES ('4', '李商隐传：我是一只人间的蝴蝶', '唐代诗人，晚唐乃至整个唐代，李商隐是为数不多的刻意追求诗美的作者。李商隐擅长诗歌写作，骈文文学价值也很高，和杜牧合称\"小李杜\"，与温庭筠合称为\"温李\"。其诗构思新奇，风格秾丽，尤其是一...', '28.9', '子佩著交通社出品有容书邦发行', '2019-01-01', '人民交通出版社', '传记');
INSERT INTO `t_book` VALUES ('5', '毛泽东自传：中英文插图影印典藏版', '《*自传》是*口述并审定的生平事迹的忠实记录，是中国革命史极其珍贵的重要文献，也是仅有的以自传形式出版的中共领袖传记。《*自传》是一部充满传奇的红色畅销书，由*口述自己的童年、少年和青...', '581.7', '毛泽东口述，埃德加?斯诺【美】笔录 ', '2019-01-01', '中国青年出版社', '传记');
INSERT INTO `t_book` VALUES ('6', '你是锦瑟，我为流年：三毛的万水千山（2019全新升级版白落梅亲笔签名本）', '她是撒哈拉沙漠里的一粒尘沙，把千篇一律的日子，过成诗意的苍凉。她去的时候，只为简单的存在，她离开之时，竟是另一种地老天荒。 曾经，时间做了刀客，宰割她的爱情。如今，时光又做了良药，...', '27.4', '白落梅著,博集天卷出品', '2019-01-01', '湖南文艺出版社', '传记');
INSERT INTO `t_book` VALUES ('7', '索恩丛书·苏珊·桑塔格：精神与魅力', '苏珊&middot;桑塔格(1933~2004)，美国*代公知，与汉娜&middot;阿伦特并称为美国20世纪知识界的两位女神。作为文化评论家、小说家、电影制片人、导演和剧作家，她是不平凡的知识分子，也是引领时...', '46.5', '丹尼尔·施赖伯（DanielSchreiber）著，郭逸豪译 ', '2018-12-01', '社会科学文献出版社', '传记');
INSERT INTO `t_book` VALUES ('8', '曾国藩传（全4册）', '《曾国藩传》全书四部。*部写曾国藩接受父令，光宗耀祖，贵人相助，进入翰林。第二部写曾国藩接受君令，书生带兵，屡败屡战。第三部写曾国藩总揽全局，围攻金陵，成就功勋。第四部写曾国藩整顿吏...', '581.7', '张军 ', '2019-01-01', '湖南文艺出版社', '传记');
INSERT INTO `t_book` VALUES ('16', '曾国藩传（张宏杰新作）', '; 曾国藩，没有显赫的家世，天赋堪称晚清同时代大人物当中*差，却官至两江总督、直隶总督、武英殿大学士，在复杂的时代变局中超越众人，成就*，被誉为大清...', '43', '张宏杰 ', '2019-01-01', '民主与建设出版社', '传记');