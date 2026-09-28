---
id: brake-controller
title: 机械抱闸 Brake 控制板 V2.00
sidebar_label: 机械抱闸 Brake 控制板 V2.00
---

# **机械抱闸Brake控制板使用说明_V2.00b1**

## 文档版本
- Rev.2.00b0 – 01.09.2025：初始版本；
- Rev.2.00b1 – 04.21.2026：完善连接描述；

<p>&nbsp;</p>

## 工作原理
机械抱闸在启动时需要较高电压来提供足够的动力，而在维持吸合状态时，使用低电压即可。若在维持阶段仍持续施加较大的启动电压，会导致机械抱闸严重发热，进而降低整个系统的性能。为解决这一问题，当前控制板采用如下策略：输入电压范围设定在 21V 至 60V 之间，触发使能信号后，控制板先输出约 20V 的电压来启动机械抱闸；待 2 秒后，再将输出电压调整为 7.5V，以维持抱闸的吸合状态。

<p>&nbsp;</p>

## 机械尺寸及引脚
<table className="hex-style-009">
    <tbody>
    <tr className="hex-style-010">
    <th className="hex-style-011"><img src="Picture/尺寸图片.png" width="80%" /> <br />
                外形尺寸：28*17*3.9mm<br />
                M2定位孔间距：24*13mm
    </th>
    <th className="hex-style-012">
            <table className="hex-style-009">
            <thead>
            <tr className="hex-style-013">
                <th className="hex-style-014">焊盘</th>
                <th className="hex-style-015">说明</th>
            </tr>
            </thead>
            <tbody>
            <tr className="hex-style-016">
                <td className="hex-style-007">VCC</td>
                <td className="hex-style-017" rowspan="2">供电电压范围 : 21V ~ 60V；<br />连接时注意正负极；</td>
            </tr>
            <tr className="hex-style-016">
                <td className="hex-style-007">GND</td>
            </tr>
            <tr className="hex-style-016">
                <td className="hex-style-017" colspan="2"></td>
            </tr>
            <tr className="hex-style-016">
                <td className="hex-style-018">GND</td>
                <td className="hex-style-018" rowspan="2">KEY和GND短接，使能抱闸控制器，<br />KEY和GND断开，使能抱闸控制器；</td>
            </tr>
            <tr className="hex-style-016">
                <td className="hex-style-019">KEY</td>
            </tr>
            <tr className="hex-style-016">
                <td className="hex-style-017" colspan="2"></td>
            </tr>
            <tr className="hex-style-016">
                <td className="hex-style-018">Vout</td>
                <td className="hex-style-018" rowspan="2">连接机械抱闸，线序不分正负；<br />最大输出电流约为2A；</td>
            </tr>
            <tr className="hex-style-016">
                <td className="hex-style-019">GND</td>
            </tr>
            </tbody>
        </table></th>
    </tr>
    </tbody>
</table>

<div className="hex-style-001"></div>

## **使用方式**
### **一、通过按键、继电器、固态继电器触发使能**
<div align="center"><img src="Picture/按键连接.png" width="35%" /></div><br />
<b>使能方法：</b>按键、继电器或固态继电器两个引脚连接抱闸控制板的<b>KEY</b>和<b>GND</b>(不分正负极)；<br />
短接<b>KEY</b>和<b>GND</b>，使能抱闸控制器；<br />
断开<b>KEY</b>和<b>GND</b>，失能抱闸控制器；

### **二、通过NPN光耦触发使能**
<div align="center"><img src="Picture/NPN光耦连接.png" width="50%" /></div><br />
<b>使能方法：<br />
</b>NPN光耦输出端连接抱闸控制板的<b>KEY</b>和<b>GND</b>：<b>集电极</b>连接<b>KEY</b>，<b>发射极</b>连接<b>GND</b>；<br />
当NPN光耦导通时，<b>KEY</b>和<b>GND</b>短接，使能抱闸控制器；<br />
当NPN光耦截止时，<b>KEY</b>和<b>GND</b>断开，失能抱闸控制器；

### **三、通过电机驱动板触发使能**
        驱动板连接抱闸控制板分两种类型： 
        (1)Brake没有NPN标识丝印；Brake接口为固态继电器，不需要区分使能信号线序；                            
        (2)Brake带有NPN标识丝印；Brake接口为NPN光耦电路，需要区分使能信号线序；
<div align="center"><img src="Picture/光耦标识.png" width="30%" /><br /><b>NPN标识丝印</b></div><br />

#### **(1)驱动板的Brake不带NPN标识，不需要区分使能信号线序**
<div align="center"><img src="Picture/驱动板连接_固态继电器.png" width="50%" /></div><br />
<b>使能方法：<br />
</b>电机驱动板<b>Brake接口</b>两个引脚连接抱闸控制板的的<b>KEY</b>和<b>GND</b>(不分正负极)；<br />
当电机驱动板接收到"开关闭合"指令时，<b>Brake接口</b>的固态继电器闭合，<b>KEY</b>和<b>GND</b>短接，使能抱闸控制器；<br />
当电机驱动板接收到"开关断开"指令时，<b>Brake接口</b>的固态继电器断开，<b>KEY</b>和<b>GND</b>断开，失能抱闸控制器；

#### **(2)驱动板的Brake带有NPN标识，需要区分使能信号线序**
<div align="center"><img src="Picture/驱动板连接_光耦.png" width="50%" /></div><br />
<b>使能方法：<br />
</b>电机驱动板<b>Brake接口</b>的<b>集电极</b>连接<b>KEY</b>，<b>发射极</b>连接<b>GND</b>；<br />
当电机驱动板接收到"开关闭合"指令时，<b>Brake接口</b>的NPN光耦导通，<b>KEY</b>和<b>GND</b>短接，使能抱闸控制器；<br />
当电机驱动板接收到"开关断开"指令时，<b>Brake接口</b>的NPN光耦截止，<b>KEY</b>和<b>GND</b>断开，失能抱闸控制器。