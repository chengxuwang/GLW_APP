/**
 *
 属性说明
 *
 @property {属性类型} 属性名

 @property {object} EquipmentID 线下设备状态
 @property {String} Status 设备状态
 @property {num} cost 费用
 @property {String} BootTime 开机时间
 @property {String} ImagePath 图片路径
 output 产出
 fault 故障数
 PowerConsumption 耗电量
 yield 良品率
 performancePeriod 运行时间
 downTime 停机时间
 faultTime 故障时间
 principal 负责人
 TheRecentFailure 最近故障
 ProcessingSpeedReality 加工速度实际值
 ProcessingSpeedSetValue 加工速度设定值
 OpeningAndClosingSpeedSetValue 开合速度设定值
 Supplier 厂家名称
 Support 技术支持联系人
 Market 销售
 FactoryAddress 厂家地址
 FactoryURL 厂家官网网址

 */
export const itemInfos = [
    {
        EquipmentID:'1-1',
        Equipment:'检测台',
        name:"检测台状态",
        Status:"故障",
        cost:1654,
        BootTime:'1小时20分',
        ImagePath:require('../../../res/images/jct.png'),
        output:'1235 ',
        fault:'0',
        PowerConsumption:'1126',
        yield:'98',
        performancePeriod:'',
        downTime:'2小时20分钟',
        faultTime:'0',
        principal:'刘义',
        TheRecentFailure:'无',
        ProcessingSpeedReality:'12',
        ProcessingSpeedSetValue:'12',
        OpeningAndClosingSpeedSetValue:'12',
        Supplier:'佛山市顺德区高力威机械有限公司',
        Support:'17701929125',
        Market:'177019291257',
        FactoryAddress:'大良凤翔工业区成业路11号',
        FactoryURL:'http://www.golive.cn/'
    }, {
        EquipmentID:'1-2',
        name:"磨边机1状态",
        Equipment:'磨边机1',
        Status:"停机",
        cost:1666,
        BootTime:'1小时20分',
        ImagePath:require('../../../res/images/mbj.png'),
        output:'1235 ',
        fault:'0',
        PowerConsumption:'1126',
        yield:'98',
        performancePeriod:'',
        downTime:'2小时20分钟',
        faultTime:'0',
        principal:'刘义',
        TheRecentFailure:'无',
        ProcessingSpeedReality:'12',
        ProcessingSpeedSetValue:'12',
        OpeningAndClosingSpeedSetValue:'12',
        Supplier:'佛山市顺德区高力威机械有限公司',
        Support:'17701929125',
        Market:'177019291257',
        FactoryAddress:'大良凤翔工业区成业路11号',
        FactoryURL:'http://www.golive.cn/'
    },{
        EquipmentID:'1-3',
        Equipment:'磨边机2',
        name:"磨边机2状态",
        Status:"停机",
        cost:1254,
        BootTime:'1小时20分',
        ImagePath:require('../../../res/images/mbj.png'),
        output:'1235 ',
        fault:'0',
        PowerConsumption:'1126',
        yield:'98',
        performancePeriod:'',
        downTime:'2小时20分钟',
        faultTime:'0',
        principal:'刘义',
        TheRecentFailure:'无',
        ProcessingSpeedReality:'12',
        ProcessingSpeedSetValue:'12',
        OpeningAndClosingSpeedSetValue:'12',
        Supplier:'佛山市顺德区高力威机械有限公司',
        Support:'17701929125',
        Market:'177019291257',
        FactoryAddress:'大良凤翔工业区成业路11号',
        FactoryURL:'http://www.golive.cn/'
    },{
        EquipmentID:'1-4',
        Equipment:'清洗机',
        name:"清洗机状态",
        Status:"停机",
        cost:1554,
        BootTime:'1小时20分',
        ImagePath:require('../../../res/images/qxj.png'),
        output:'1235 ',
        fault:'0',
        PowerConsumption:'1126',
        yield:'98',
        performancePeriod:'',
        downTime:'2小时20分钟',
        faultTime:'0',
        principal:'刘义',
        TheRecentFailure:'无',
        ProcessingSpeedReality:'12',
        ProcessingSpeedSetValue:'12',
        OpeningAndClosingSpeedSetValue:'12',
        Supplier:'佛山市顺德区高力威机械有限公司',
        Support:'17701929125',
        Market:'177019291257',
        FactoryAddress:'大良凤翔工业区成业路11号',
        FactoryURL:'http://www.golive.cn/'
    }, {
        EquipmentID:'2-1',
        name:"检测台状态",
        Equipment:'检测台',
        Status:"正在加工",
        cost:1644,
        BootTime:'1小时20分',
        ImagePath:require('../../../res/images/jct.png'),
        output:'1235 ',
        fault:'0',
        PowerConsumption:'1126',
        yield:'98',
        performancePeriod:'',
        downTime:'2小时20分钟',
        faultTime:'0',
        principal:'刘义',
        TheRecentFailure:'无',
        ProcessingSpeedReality:'12',
        ProcessingSpeedSetValue:'12',
        OpeningAndClosingSpeedSetValue:'12',
        Supplier:'佛山市顺德区高力威机械有限公司',
        Support:'17701929125',
        Market:'177019291257',
        FactoryAddress:'大良凤翔工业区成业路11号',
        FactoryURL:'http://www.golive.cn/'
    }, {
        EquipmentID:'2-2',
        name:"磨边机1状态",
        Equipment:'磨边机1',
        Status:"正在加工",
        cost:1754,
        BootTime:'1小时20分',
        ImagePath:require('../../../res/images/mbj.png'),
        output:'1235 ',
        fault:'0',
        PowerConsumption:'1126',
        yield:'98',
        performancePeriod:'',
        downTime:'2小时20分钟',
        faultTime:'0',
        principal:'刘义',
        TheRecentFailure:'无',
        ProcessingSpeedReality:'12',
        ProcessingSpeedSetValue:'12',
        OpeningAndClosingSpeedSetValue:'12',
        Supplier:'佛山市顺德区高力威机械有限公司',
        Support:'17701929125',
        Market:'177019291257',
        FactoryAddress:'大良凤翔工业区成业路11号',
        FactoryURL:'http://www.golive.cn/'
    },{
        EquipmentID:'2-3',
        name:"磨边机2状态",
        Equipment:'磨边机2',
        Status:"正在加工",
        cost:1454,
        BootTime:'1小时20分',
        ImagePath:require('../../../res/images/mbj.png'),
        output:'1235 ',
        fault:'0',
        PowerConsumption:'1126',
        yield:'98',
        performancePeriod:'',
        downTime:'2小时20分钟',
        faultTime:'0',
        principal:'刘义',
        TheRecentFailure:'无',
        ProcessingSpeedReality:'12',
        ProcessingSpeedSetValue:'12',
        OpeningAndClosingSpeedSetValue:'12',
        Supplier:'佛山市顺德区高力威机械有限公司',
        Support:'17701929125',
        Market:'177019291257',
        FactoryAddress:'大良凤翔工业区成业路11号',
        FactoryURL:'http://www.golive.cn/'
    },{
        EquipmentID:'2-4',
        name:"清洗机状态",
        Equipment:'清洗机',
        Status:"正在加工",
        cost:1555,
        BootTime:'1小时20分',
        ImagePath:require('../../../res/images/qxj.png'),
        output:'1235 ',
        fault:'0',
        PowerConsumption:'1126',
        yield:'98',
        performancePeriod:'',
        downTime:'2小时20分钟',
        faultTime:'0',
        principal:'刘义',
        TheRecentFailure:'无',
        ProcessingSpeedReality:'12',
        ProcessingSpeedSetValue:'12',
        OpeningAndClosingSpeedSetValue:'12',
        Supplier:'佛山市顺德区高力威机械有限公司',
        Support:'17701929125',
        Market:'177019291257',
        FactoryAddress:'大良凤翔工业区成业路11号',
        FactoryURL:'http://www.golive.cn/'
    },  {
        EquipmentID:'3-1',
        name:"检测台状态",
        Status:"正在加工",
        Equipment:'检测台',
        cost:1423,
        BootTime:'1小时20分',
        ImagePath:require('../../../res/images/jct.png'),
        output:'1235 ',
        fault:'0',
        PowerConsumption:'1126',
        yield:'98',
        performancePeriod:'',
        downTime:'2小时20分钟',
        faultTime:'0',
        principal:'刘义',
        TheRecentFailure:'无',
        ProcessingSpeedReality:'12',
        ProcessingSpeedSetValue:'12',
        OpeningAndClosingSpeedSetValue:'12',
        Supplier:'佛山市顺德区高力威机械有限公司',
        Support:'17701929125',
        Market:'177019291257',
        FactoryAddress:'大良凤翔工业区成业路11号',
        FactoryURL:'http://www.golive.cn/'
    }, {
        EquipmentID:'3-2',
        name:"磨边机1状态",
        Equipment:'磨边机1',
        Status:"正在加工",
        cost:1666,
        BootTime:'1小时20分',
        ImagePath:require('../../../res/images/mbj.png'),
        output:'1235 ',
        fault:'0',
        PowerConsumption:'1126',
        yield:'98',
        performancePeriod:'',
        downTime:'2小时20分钟',
        faultTime:'0',
        principal:'刘义',
        TheRecentFailure:'无',
        ProcessingSpeedReality:'12',
        ProcessingSpeedSetValue:'12',
        OpeningAndClosingSpeedSetValue:'12',
        Supplier:'佛山市顺德区高力威机械有限公司',
        Support:'17701929125',
        Market:'177019291257',
        FactoryAddress:'大良凤翔工业区成业路11号',
        FactoryURL:'http://www.golive.cn/'
    },{
        EquipmentID:'3-3',
        name:"磨边机2状态",
        Equipment:'磨边机2',
        Status:"正在加工",
        cost:1632,
        BootTime:'1小时20分',
        ImagePath:require('../../../res/images/mbj.png'),
        output:'1235 ',
        fault:'0',
        PowerConsumption:'1126',
        yield:'98',
        performancePeriod:'',
        downTime:'2小时20分钟',
        faultTime:'0',
        principal:'刘义',
        TheRecentFailure:'无',
        ProcessingSpeedReality:'12',
        ProcessingSpeedSetValue:'12',
        OpeningAndClosingSpeedSetValue:'12',
        Supplier:'佛山市顺德区高力威机械有限公司',
        Support:'17701929125',
        Market:'177019291257',
        FactoryAddress:'大良凤翔工业区成业路11号',
        FactoryURL:'http://www.golive.cn/'
    },{
        EquipmentID:'3-4',
        name:"清洗机状态",
        Equipment:'清洗机',
        Status:"正在加工",
        cost:1754,
        BootTime:'1小时20分',
        ImagePath:require('../../../res/images/qxj.png'),
        output:'1235 ',
        fault:'0',
        PowerConsumption:'1126',
        yield:'98',
        performancePeriod:'',
        downTime:'2小时20分钟',
        faultTime:'0',
        principal:'刘义',
        TheRecentFailure:'无',
        ProcessingSpeedReality:'12',
        ProcessingSpeedSetValue:'12',
        OpeningAndClosingSpeedSetValue:'12',
        Supplier:'佛山市顺德区高力威机械有限公司',
        Support:'17701929125',
        Market:'177019291257',
        FactoryAddress:'大良凤翔工业区成业路11号',
        FactoryURL:'http://www.golive.cn/'
    }
];