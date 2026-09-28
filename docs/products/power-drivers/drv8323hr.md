---
id: drv8323hr
title: POWER_DRV8323HR V1.01
sidebar_label: POWER_DRV8323HR V1.01
---

﻿# **POWER_DRV8323HR_V1 三相无刷电机功率驱动板产品说明书**


## 文档版本

- Rev.1.00b0 - 2026.06.30：初始版本；
- Rev.1.00b1 - 2026.07.02：完善产品说明、接口描述、采样说明和使用注意事项；
- Rev.1.00b2 - 2026.07.13：增加快速使用说明，整合硬件组成、电气参数与出厂配置，完善保护功能和产品使用说明；
- Rev.1.00b3 - 2026.09.22：修正原理图标注、效果图丝印；

<p align="center" className="hex-style-020">
  <img src="Picture/原理图.png" alt="POWER_DRV8323HR_V1.01 原理图" width="83%" />
</p>

<div className="hex-style-021">
  <div className="hex-style-022">
    <img src="Picture/正面效果图.png" alt="POWER_DRV8323HR_V1.01 正面效果图" className="hex-style-023" />
  </div>
  <div className="hex-style-022">
    <img src="Picture/背面效果图.png" alt="POWER_DRV8323HR_V1.01 背面效果图" className="hex-style-023" />
  </div>
</div>

<div className="hex-style-001"></div>

## **免责声明**

<p className="hex-style-024">感谢您选用 POWER_DRV8323HR_V1.01 三相无刷电机功率驱动板（以下简称“驱动板”）；在使用本产品前，请务必仔细阅读本文档，并严格遵循本文档以及配套资料中的安全规范和操作说明；若因接线错误、电源超范围、控制逻辑错误或其他不当使用造成设备损坏、人身伤害或其他损失，用户需自行承担相应风险；</p>

<p className="hex-style-024">本产品定位为研发、教学、测试和系统集成用途的功率级模块，不包含完整电机控制算法、整机保护策略和最终应用认证；用户应结合实际电机、电源、负载、控制器和使用环境进行充分验证后再投入系统使用；</p>

<p>&nbsp;</p>

## **注意事项**

- 使用前请确认主电源电压、极性、接线顺序和端子连接可靠；
- 首次调试建议使用限流电源或串联保护措施，并从低电压、低电流限幅和低占空比开始；
- 请勿在带电状态下插拔电机相线、主电源线或控制排线；
- FAULT 信号触发后应停止使用，并排查电源、电机接线、负载和过温状态；
- 连续电流、峰值电流和效率等指标应以实际 BOM 和测试结果为准；

<p>&nbsp;</p>

## **保修说明**

- 请按照本文档说明进行安装、接线、调试和使用；
- 因产品自身质量问题造成的故障，可按销售条款或售后政策处理；
- 提出保修或售后支持时，请提供购买记录、产品版本、故障现象、接线方式、供电电压、负载电机和测试条件；
- 因接线错误、电源反接、电压超范围、短路、带电插拔、私自改装或恶劣使用环境造成的损坏，不属于常规保修范围；
- 因跌落、碰撞、挤压、进水、腐蚀、静电损伤或其他外力造成的损坏，不属于常规保修范围；

<p>&nbsp;</p>

## **装箱清单**

<div className="hex-style-025">
<table className="hex-style-026">
  <thead>
    <tr className="hex-style-013">
      <th className="hex-style-027">物品名称</th>
      <th className="hex-style-027">数量</th>
      <th className="hex-style-028">说明</th>
    </tr>
  </thead>
  <tbody>
    <tr className="hex-style-016">
      <td className="hex-style-029">POWER_DRV8323HR_V1.01 三相无刷电机功率驱动板</td>
      <td className="hex-style-029">1pcs</td>
      <td className="hex-style-030">实际出货版本以产品丝印和订单信息为准；</td>
    </tr>
<!--    <tr className="hex-style-016">
      <td className="hex-style-029">配套排针</td>
      <td className="hex-style-029">以订单配置为准</td>
      <td className="hex-style-030">不同批次或套装配置可能不同；</td>
    </tr> 
-->
    <tr className="hex-style-016">
      <td className="hex-style-029">产品说明书&nbsp;/&nbsp;相关资料</td>
      <td className="hex-style-029">电子档</td>
      <td className="hex-style-030">以发布版本为准；</td>
    </tr>
  </tbody>
</table>
</div>

<div className="hex-style-001"></div>

## **快速使用**

<p className="hex-style-024">本产品为外部 MCU 控制的三相电机功率模块；外部 MCU 需要提供六路 PWM、DRV_EN 及相关控制信号；使用前请确认接口电平、信号方向和接线方式正确；</p>

### **使用前确认**

<div className="hex-style-025">
<table className="hex-style-026">
  <thead>
    <tr className="hex-style-013">
      <th className="hex-style-027">确认项目</th>
      <th className="hex-style-027">要求</th>
      <th className="hex-style-028">说明</th>
    </tr>
  </thead>
  <tbody>
    <tr className="hex-style-016">
      <td className="hex-style-029">直流母线输入</td>
      <td className="hex-style-029">12 - 40V</td>
      <td className="hex-style-030">根据所连接电机和实际应用选择母线电压，不得超出规定范围；</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">控制接口</td>
      <td className="hex-style-029">3.3V</td>
      <td className="hex-style-030">P2 控制接口；外部 MCU 与本产品应可靠共地；</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">PWM 控制</td>
      <td className="hex-style-029">6×PWM</td>
      <td className="hex-style-030">INHA&nbsp;/&nbsp;INLA&nbsp;/&nbsp;INHB&nbsp;/&nbsp;INLB&nbsp;/&nbsp;INHC&nbsp;/&nbsp;INLC；</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">初始控制状态</td>
      <td className="hex-style-029">低电平</td>
      <td className="hex-style-030">接通直流母线电源前，六路 PWM、DRV_EN 和 CAL 均应保持低电平；</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">故障信号</td>
      <td className="hex-style-029">FAULT 低电平有效</td>
      <td className="hex-style-030">DRV_EN 切换期间可能短暂变为低电平，应在驱动芯片完成唤醒后判断故障状态；</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">电机三相输出</td>
      <td className="hex-style-029">SHA(A)&nbsp;/&nbsp;SHB(B)&nbsp;/&nbsp;SHC(C)</td>
      <td className="hex-style-030">分别连接电机 U&nbsp;/&nbsp;V&nbsp;/&nbsp;W 三相线；</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">P2 电源信号</td>
      <td className="hex-style-029">+5.0V&nbsp;/&nbsp;VREF_3.3V</td>
      <td className="hex-style-030">均为板载输出信号，不应向对应引脚输入外部电压；</td>
    </tr>
  </tbody>
</table>
</div>

### **接线与启动**

1. 确认直流母线电源已经断开；
2. 将外部 MCU 控制板连接至 P2，确认排线方向正确，并保证外部 MCU 与本产品可靠共地；
3. 将电机三相线连接至 SHA(A)、SHB(B)、SHC(C)，确认端子连接牢固；
4. 将直流母线电源正极连接至 VCC，负极连接至 GND，并确认输入电压位于 12 - 40V 范围内；
5. 确认六路 PWM、DRV_EN 和 CAL 均处于低电平后，接通直流母线电源；
6. 将 DRV_EN 置为高电平，并等待至少 1ms，使 DRV8323H 完成唤醒；
7. 唤醒完成后确认 FAULT 为高电平；如果 FAULT 持续为低电平，不应输出 PWM；
8. 确认无故障后，再由外部 MCU 开始输出六路 PWM；首次调试建议使用限流电源，并从受限输出状态开始；

### **正常停机**

1. 停止 PWM 输出，并将六路 PWM 全部置为低电平；
2. 将 DRV_EN 置为低电平；
3. 确认电源已经断开后，才可以拆卸电机三相线、主电源线或 P2 控制排线；

### **故障处理**

<p className="hex-style-024">正常运行过程中，如果 FAULT 持续为低电平，应立即停止 PWM 输出，将 DRV_EN 置为低电平并断开直流母线电源；检查供电电压、电源极性、电机接线、相线短路、负载状态及过温状态，排除故障后方可重新上电；</p>

<p className="hex-style-031">禁止在带电状态下插拔直流母线电源线、电机三相线及 P2 控制排线；</p>

<p>&nbsp;</p>

<div className="hex-style-001"></div>

<p>&nbsp;</p>

## **1. 产品概述**

<p className="hex-style-024">POWER_DRV8323HR_V1.01 是一款基于 DRV8323HR 三相栅极驱动芯片设计的三相无刷电机功率驱动板，可用于 BLDC、PMSM、FOC 伺服电机控制开发与功率级验证；</p>

<p className="hex-style-024">本产品定位为外部 MCU 控制板的功率级扩展板；外部 MCU 需要提供 PWM 波形、电机控制算法和采样处理；该驱动板负责三相功率输出、电流采样、电压采样、温度采样和故障反馈；</p>

<p className="hex-style-024">外部 MCU 可配合该驱动板实现六步换相、正弦控制、FOC 控制等三相电机控制方式；实际电机控制性能取决于外部 MCU、控制算法、功率器件和系统调试结果；</p>

<p>&nbsp;</p>

## **2. 产品特点**

- 基于 DRV8323HR 三相栅极驱动芯片；
- 板载 6 个 MOSFET 组成三相全桥；
- 支持外部 MCU 六路 PWM 控制、三路 PWM 控制；
- 支持 DRV_EN 驱动使能；
- 支持 FAULT 故障反馈；
- 支持 CAL 电流采样校准；
- 提供三相电流采样 IOUTA&nbsp;/&nbsp;IOUTB&nbsp;/&nbsp;IOUTC；
- 提供母线电压采样 ADC_VBUS；
- 提供母线电流采样 ADC_CBUS；
- 提供温度采样 ADC_NTC；
- 板载 +5.0V、+3.3V、VREF_3.3V 电源&nbsp;/&nbsp;参考电压相关电路；
- 适合 FOC、六步换相、正弦控制等电机控制开发；


<p>&nbsp;</p>

## **3. 典型应用**

- 三相无刷电机驱动；
- PMSM 电机驱动；
- FOC 控制器开发；
- 伺服电机功率级验证；
- 电机测功机平台；
- 机器人关节电机；
- 轮毂电机、云台电机、减速电机测试；
- 教学和研发测试平台；

<p>&nbsp;</p>

## **4. 硬件组成**

<p className="hex-style-024">本产品主要由栅极驱动与三相 MOSFET 功率桥、电流采样、电压采样、温度采样、板载电源与参考电压以及保护电路组成；外部接口统一见第 5 章；</p>

### **4.1 栅极驱动与三相 MOSFET 功率桥**

<p className="hex-style-024">U2 采用 DRV8323HR，接收外部 MCU 的六路 PWM、DRV_EN 和 CAL 信号，输出六路栅极驱动信号控制 Q1～Q6 组成的三相全桥；三相桥臂中点分别输出 SHA(A)、SHB(B)、SHC(C)；</p>

<div className="hex-style-025">
<table className="hex-style-026">
  <thead>
    <tr className="hex-style-013">
      <th className="hex-style-027">功率器件</th>
      <th className="hex-style-027">输出</th>
      <th className="hex-style-028">电机相线</th>
    </tr>
  </thead>
  <tbody>
    <tr className="hex-style-016">
      <td className="hex-style-029">Q1&nbsp;/&nbsp;Q4</td>
      <td className="hex-style-029">SHA(A)</td>
      <td className="hex-style-030">U 相</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">Q2&nbsp;/&nbsp;Q5</td>
      <td className="hex-style-029">SHB(B)</td>
      <td className="hex-style-030">V 相</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">Q3&nbsp;/&nbsp;Q6</td>
      <td className="hex-style-029">SHC(C)</td>
      <td className="hex-style-030">W 相</td>
    </tr>
  </tbody>
</table>
</div>

<p className="hex-style-024">实际 U&nbsp;/&nbsp;V&nbsp;/&nbsp;W 顺序可根据电机转向、相序和电角度方向在硬件或软件中调整；</p>

### **4.2 相电流采样**

<p className="hex-style-024">R36、R37、R38 分别用于 A、B、C 三相电流采样，采样信号经 DRV8323H 内部电流采样放大器输出为 IOUTA、IOUTB、IOUTC；</p>

<div className="hex-style-025">
<table className="hex-style-026">
  <thead>
    <tr className="hex-style-013">
      <th className="hex-style-027">相位</th>
      <th className="hex-style-027">采样电阻</th>
      <th className="hex-style-027">阻值</th>
      <th className="hex-style-028">输出信号</th>
    </tr>
  </thead>
  <tbody>
    <tr className="hex-style-016">
      <td className="hex-style-029">A 相</td>
      <td className="hex-style-029">R36</td>
      <td className="hex-style-029">0.004Ω</td>
      <td className="hex-style-030">IOUTA</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">B 相</td>
      <td className="hex-style-029">R37</td>
      <td className="hex-style-029">0.004Ω</td>
      <td className="hex-style-030">IOUTB</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">C 相</td>
      <td className="hex-style-029">R38</td>
      <td className="hex-style-029">0.004Ω</td>
      <td className="hex-style-030">IOUTC</td>
    </tr>
  </tbody>
</table>
</div>

<p className="hex-style-024">三路相电流采样放大器的出厂增益均为 5V/V，参考电压为 VREF_3.3V；实际采样精度受采样电阻精度、放大器误差、PCB 走线压降和外部采样电路影响；</p>

### **4.3 母线电流采样**

<p className="hex-style-024">R26 用于母线电流采样，采样信号经 U11 放大并输出为 ADC_CBUS；</p>

<div className="hex-style-025">
<table className="hex-style-026">
  <thead>
    <tr className="hex-style-013">
      <th className="hex-style-027">参数项</th>
      <th className="hex-style-027">原理图标识</th>
      <th className="hex-style-028">参数&nbsp;/&nbsp;说明</th>
    </tr>
  </thead>
  <tbody>
    <tr className="hex-style-016">
      <td className="hex-style-029">母线电流采样电阻</td>
      <td className="hex-style-029">R26</td>
      <td className="hex-style-030">0.004Ω</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">电流检测放大器</td>
      <td className="hex-style-029">U11</td>
      <td className="hex-style-030">INA180A1IDBVR</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">放大器增益</td>
      <td className="hex-style-029">U11</td>
      <td className="hex-style-030">20V/V</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">输出信号</td>
      <td className="hex-style-029">ADC_CBUS</td>
      <td className="hex-style-030">连接外部 MCU ADC</td>
    </tr>
  </tbody>
</table>
</div>

```text
    ADC_CBUS ≈ Ibus × 0.004Ω × 20
    ADC_CBUS ≈ Ibus × 0.08 V/A
```

<p className="hex-style-024">上述关系为理论值，实际换算应结合放大器误差、采样电阻精度、PCB 走线压降、ADC 参考电压和软件校准结果确定；</p>

### **4.4 母线电压采样**

<p className="hex-style-024">直流母线电压经分压和滤波后输出为 ADC_VBUS；</p>

<div className="hex-style-025">
<table className="hex-style-026">
  <thead>
    <tr className="hex-style-013">
      <th className="hex-style-027">参数项</th>
      <th className="hex-style-027">原理图标识</th>
      <th className="hex-style-028">参数&nbsp;/&nbsp;说明</th>
    </tr>
  </thead>
  <tbody>
    <tr className="hex-style-016">
      <td className="hex-style-029">上拉分压电阻</td>
      <td className="hex-style-029">R4</td>
      <td className="hex-style-030">124KΩ</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">下拉分压电阻</td>
      <td className="hex-style-029">R6</td>
      <td className="hex-style-030">4.7KΩ</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">串联输出电阻</td>
      <td className="hex-style-029">R5</td>
      <td className="hex-style-030">1KΩ</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">滤波电容</td>
      <td className="hex-style-029">C2</td>
      <td className="hex-style-030">100nF</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">输出信号</td>
      <td className="hex-style-029">ADC_VBUS</td>
      <td className="hex-style-030">连接外部 MCU ADC</td>
    </tr>
  </tbody>
</table>
</div>

```text
    ADC_VBUS ≈ VCC × 4.7KΩ / (124KΩ + 4.7KΩ)
    ADC_VBUS ≈ VCC × 0.0365
```

<p className="hex-style-024">实际母线电压换算应结合电阻精度、ADC 参考电压、ADC 输入阻抗、滤波参数和软件校准结果确定；</p>

### **4.5 温度采样**

<p className="hex-style-024">NTC1 与 R18 组成温度采样网络，采样信号经 R22 输出为 ADC_NTC；</p>

<div className="hex-style-025">
<table className="hex-style-026">
  <thead>
    <tr className="hex-style-013">
      <th className="hex-style-027">参数项</th>
      <th className="hex-style-027">原理图标识</th>
      <th className="hex-style-028">参数&nbsp;/&nbsp;说明</th>
    </tr>
  </thead>
  <tbody>
    <tr className="hex-style-016">
      <td className="hex-style-029">NTC 热敏电阻</td>
      <td className="hex-style-029">NTC1</td>
      <td className="hex-style-030">SDNT1005X103F3950FTF</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">上拉电阻</td>
      <td className="hex-style-029">R18</td>
      <td className="hex-style-030">10KΩ</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">串联输出电阻</td>
      <td className="hex-style-029">R22</td>
      <td className="hex-style-030">1KΩ</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">输出信号</td>
      <td className="hex-style-029">ADC_NTC</td>
      <td className="hex-style-030">连接外部 MCU ADC</td>
    </tr>
  </tbody>
</table>
</div>

<p className="hex-style-024">温度换算应结合 NTC 标称阻值、B 值、实际贴装位置、ADC 参考电压和软件温度表确定；过温报警阈值和降额策略以整机热测试结果为准；</p>

### **4.6 板载电源与参考电压**

<div className="hex-style-025">
<table className="hex-style-026">
  <thead>
    <tr className="hex-style-013">
      <th className="hex-style-027">功能</th>
      <th className="hex-style-027">主要器件</th>
      <th className="hex-style-027">输出</th>
      <th className="hex-style-028">说明</th>
    </tr>
  </thead>
  <tbody>
    <tr className="hex-style-016">
      <td className="hex-style-029">5V 电源</td>
      <td className="hex-style-029">U3：TD1466</td>
      <td className="hex-style-029">+5.0V</td>
      <td className="hex-style-030">由直流母线电源降压产生；</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">3.3V 电源</td>
      <td className="hex-style-029">U6：ME6212C33MG</td>
      <td className="hex-style-029">+3.3V</td>
      <td className="hex-style-030">由 +5.0V 稳压产生；</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">参考电压</td>
      <td className="hex-style-029">U4：REF3033AIDBZR</td>
      <td className="hex-style-029">VREF_3.3V</td>
      <td className="hex-style-030">提供 3.3V 参考电压相关信号；</td>
    </tr>
  </tbody>
</table>
</div>

### **4.7 板载保护与故障信号**

<div className="hex-style-025">
<table className="hex-style-026">
  <thead>
    <tr className="hex-style-013">
      <th className="hex-style-027">功能</th>
      <th className="hex-style-027">相关器件&nbsp;/&nbsp;信号</th>
      <th className="hex-style-028">说明</th>
    </tr>
  </thead>
  <tbody>
    <tr className="hex-style-016">
      <td className="hex-style-029">输入瞬态抑制</td>
      <td className="hex-style-029">D6：SM6T40A</td>
      <td className="hex-style-030">用于抑制直流母线输入端的瞬态电压；</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">驱动芯片保护与故障反馈</td>
      <td className="hex-style-029">U2：DRV8323H&nbsp;/&nbsp;FAULT</td>
      <td className="hex-style-030">DRV8323H 可检测主电源欠压、电荷泵欠压、MOSFET VDS 异常、栅极驱动异常及芯片内部过温；相应故障触发时 FAULT 输出低电平；FAULT 由 R12 = 4.7KΩ 上拉至 +3.3V，为汇总故障信号，无法根据其电平区分具体故障类型；对应保护动作及恢复方式取决于故障类型；</td>
    </tr>
  </tbody>
</table>
</div>


<p>&nbsp;</p>

## **5. 接口说明**
### **5.1 外观与接口位置**

<p className="hex-style-024">接口位置可参考产品概述中的正反面效果图；装配、排线制作和接线检查时，以效果图 / 实物丝印方向为准；原理图用于确认网络名称和电气功能；</p>


### **5.2 接口总览**

<div className="hex-style-025">
<table className="hex-style-026">
  <thead>
    <tr className="hex-style-013">
      <th className="hex-style-027">接口对象</th>
      <th className="hex-style-027">接口&nbsp;/&nbsp;信号</th>
      <th className="hex-style-028">说明</th>
    </tr>
  </thead>
  <tbody>
    <tr className="hex-style-016">
      <td className="hex-style-029">外部 MCU 控制板</td>
      <td className="hex-style-029">P2：Header 16X2</td>
      <td className="hex-style-030">输入六路 PWM、DRV_EN、CAL；输出 FAULT、三相电流、母线电流、母线电压和温度采样信号；</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">三相电机</td>
      <td className="hex-style-029">SHA(A)&nbsp;/&nbsp;SHB(B)&nbsp;/&nbsp;SHC(C)</td>
      <td className="hex-style-030">连接 BLDC&nbsp;/&nbsp;PMSM 的 U&nbsp;/&nbsp;V&nbsp;/&nbsp;W 三相线；</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">直流母线电源</td>
      <td className="hex-style-029">VCC&nbsp;/&nbsp;GND</td>
      <td className="hex-style-030">板面标注输入范围为 12 - 40V；</td>
    </tr>
  </tbody>
</table>
</div>

### **5.3 P2 控制接口**

<p className="hex-style-024">P2 为 Header 16X2 控制接口，包含电源、地、三相电流采样、母线采样、温度采样、PWM、使能、校准和故障反馈信号；</p>

<div className="hex-style-025">
<table className="hex-style-026">
  <thead>
    <tr className="hex-style-013">
      <th className="hex-style-027">引脚</th>
      <th className="hex-style-027">信号</th>
      <th className="hex-style-027">方向</th>
      <th className="hex-style-028">说明</th>
    </tr>
  </thead>
  <tbody>
    <tr className="hex-style-016">
      <td className="hex-style-029">1</td>
      <td className="hex-style-029">+5.0V</td>
      <td className="hex-style-029">该驱动板至外部</td>
      <td className="hex-style-030">板载 +5.0V 电源引出</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">2</td>
      <td className="hex-style-029">GND</td>
      <td className="hex-style-029"></td>
      <td className="hex-style-030"></td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">3</td>
      <td className="hex-style-029">GND</td>
      <td className="hex-style-029"></td>
      <td className="hex-style-030"></td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">4</td>
      <td className="hex-style-029">IOUTC</td>
      <td className="hex-style-029">该驱动板至 MCU</td>
      <td className="hex-style-030">C 相电流采样输出</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">5</td>
      <td className="hex-style-029">GND</td>
      <td className="hex-style-029"></td>
      <td className="hex-style-030"></td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">6</td>
      <td className="hex-style-029">IOUTB</td>
      <td className="hex-style-029">该驱动板至 MCU</td>
      <td className="hex-style-030">B 相电流采样输出</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">7</td>
      <td className="hex-style-029">GND</td>
      <td className="hex-style-029"></td>
      <td className="hex-style-030"></td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">8</td>
      <td className="hex-style-029">IOUTA</td>
      <td className="hex-style-029">该驱动板至 MCU</td>
      <td className="hex-style-030">A 相电流采样输出</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">9</td>
      <td className="hex-style-029">GND</td>
      <td className="hex-style-029"></td>
      <td className="hex-style-030"></td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">10</td>
      <td className="hex-style-029">VREF_3.3V</td>
      <td className="hex-style-029">该驱动板至外部&nbsp;/&nbsp;参考</td>
      <td className="hex-style-030">3.3V 参考电压相关信号；</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">11</td>
      <td className="hex-style-029">VBUS</td>
      <td className="hex-style-029">该驱动板至 MCU</td>
      <td className="hex-style-030">母线电压采样输出，对应 ADC_VBUS；</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">12</td>
      <td className="hex-style-029">CBUS</td>
      <td className="hex-style-029">该驱动板至 MCU</td>
      <td className="hex-style-030">母线电流采样输出，对应 ADC_CBUS；</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">13</td>
      <td className="hex-style-029">NTC</td>
      <td className="hex-style-029">该驱动板至 MCU</td>
      <td className="hex-style-030">温度采样输出，对应 ADC_NTC；</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">14</td>
      <td className="hex-style-029">FAULT</td>
      <td className="hex-style-029">该驱动板至 MCU</td>
      <td className="hex-style-030">DRV8323H 故障反馈，低电平有效；</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">15</td>
      <td className="hex-style-029">GND</td>
      <td className="hex-style-029"></td>
      <td className="hex-style-030"></td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">16</td>
      <td className="hex-style-029">GND</td>
      <td className="hex-style-029"></td>
      <td className="hex-style-030"></td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">17&nbsp;/&nbsp;18&nbsp;/&nbsp;19&nbsp;/&nbsp;20</td>
      <td className="hex-style-029">NC</td>
      <td className="hex-style-029"></td>
      <td className="hex-style-030"></td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">21&nbsp;/&nbsp;22</td>
      <td className="hex-style-029">GND</td>
      <td className="hex-style-029"></td>
      <td className="hex-style-030"></td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">23</td>
      <td className="hex-style-029">DRV_EN</td>
      <td className="hex-style-029">MCU 至该驱动板</td>
      <td className="hex-style-030">驱动使能，板载下拉，默认为低电平；</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">24</td>
      <td className="hex-style-029">CAL</td>
      <td className="hex-style-029">MCU 至该驱动板</td>
      <td className="hex-style-030">电流采样放大器校准控制输入；</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">25</td>
      <td className="hex-style-029">INHA</td>
      <td className="hex-style-029">MCU 至该驱动板</td>
      <td className="hex-style-030">A 相上桥 PWM；3×PWM模式下，对应PWM信号只需连接INHx</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">26</td>
      <td className="hex-style-029">INLA</td>
      <td className="hex-style-029">MCU 至该驱动板</td>
      <td className="hex-style-030">A 相下桥 PWM</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">27</td>
      <td className="hex-style-029">INHB</td>
      <td className="hex-style-029">MCU 至该驱动板</td>
      <td className="hex-style-030">B 相上桥 PWM；3×PWM模式下，对应PWM信号只需连接INHx</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">28</td>
      <td className="hex-style-029">INLB</td>
      <td className="hex-style-029">MCU 至该驱动板</td>
      <td className="hex-style-030">B 相下桥 PWM</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">29</td>
      <td className="hex-style-029">INHC</td>
      <td className="hex-style-029">MCU 至该驱动板</td>
      <td className="hex-style-030">C 相上桥 PWM；3×PWM模式下，对应PWM信号只需连接INHx</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">30</td>
      <td className="hex-style-029">INLC</td>
      <td className="hex-style-029">MCU 至该驱动板</td>
      <td className="hex-style-030">C 相下桥 PWM</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">31&nbsp;/&nbsp;32</td>
      <td className="hex-style-029">GND</td>
      <td className="hex-style-029"></td>
      <td className="hex-style-030"></td>
    </tr>
  </tbody>
</table>
</div>


### **5.4 电机与电源接口**

<div className="hex-style-025">
<table className="hex-style-026">
  <thead>
    <tr className="hex-style-013">
      <th className="hex-style-027">接口&nbsp;/&nbsp;信号</th>
      <th className="hex-style-027">连接对象</th>
      <th className="hex-style-028">说明</th>
    </tr>
  </thead>
  <tbody>
    <tr className="hex-style-016">
      <td className="hex-style-029">VCC</td>
      <td className="hex-style-029">直流母线正极</td>
      <td className="hex-style-030">板面标注 12 - 40V；接入前需确认电源极性和电流能力；</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">GND&nbsp;/&nbsp;PGND</td>
      <td className="hex-style-029">直流母线负极&nbsp;/&nbsp;系统地</td>
      <td className="hex-style-030">外部 MCU、母线电源和该驱动板之间应保证地线连接可靠；</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">SHA(A)</td>
      <td className="hex-style-029">电机 U 相</td>
      <td className="hex-style-030">A 相桥臂输出</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">SHB(B)</td>
      <td className="hex-style-029">电机 V 相</td>
      <td className="hex-style-030">B 相桥臂输出</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">SHC(C)</td>
      <td className="hex-style-029">电机 W 相</td>
      <td className="hex-style-030">C 相桥臂输出</td>
    </tr>
  </tbody>
</table>
</div>


<p>&nbsp;</p>

## **6. 电气参数与出厂配置**

<p className="hex-style-024">本节汇总本产品的主要电气参数及板载出厂配置；涉及板载配置电阻的项目以当前硬件版本原理图为准；</p>

<div className="hex-style-025">
<table className="hex-style-026">
  <thead>
    <tr className="hex-style-013">
      <th className="hex-style-027">类别</th>
      <th className="hex-style-027">规格项</th>
      <th className="hex-style-027">参数</th>
      <th className="hex-style-028">备注&nbsp;/&nbsp;板载配置</th>
    </tr>
  </thead>
  <tbody>
    <tr className="hex-style-016">
      <td className="hex-style-029">电源与接口</td>
      <td className="hex-style-029">主电源输入</td>
      <td className="hex-style-029">12 - 40V</td>
      <td className="hex-style-030">用户应根据所连接电机及实际应用选择母线电压，输入电压不得超出规定范围；</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">电源与接口</td>
      <td className="hex-style-029">逻辑接口电平</td>
      <td className="hex-style-029">3.3V</td>
      <td className="hex-style-030">P2 控制与采样接口；</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">电源与接口</td>
      <td className="hex-style-029">参考电压</td>
      <td className="hex-style-029">3.3V</td>
      <td className="hex-style-030">U4：REF3033AIDBZR，VREF_3.3V；</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">功率输出</td>
      <td className="hex-style-029">功率输出形式</td>
      <td className="hex-style-029">三相全桥</td>
      <td className="hex-style-030">SHA(A)&nbsp;/&nbsp;SHB(B)&nbsp;/&nbsp;SHC(C) 输出；</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">功率输出</td>
      <td className="hex-style-029">峰值输出电流</td>
      <td className="hex-style-029"><span className="hex-style-032">25A</span></td>
      <td className="hex-style-030"></td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">PWM 控制</td>
      <td className="hex-style-029">PWM 控制模式</td>
      <td className="hex-style-029">6×PWM</td>
      <td className="hex-style-030">R49 = 0Ω，R45 不装；INHA&nbsp;/&nbsp;INLA&nbsp;/&nbsp;INHB&nbsp;/&nbsp;INLB&nbsp;/&nbsp;INHC&nbsp;/&nbsp;INLC；</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">PWM 控制</td>
      <td className="hex-style-029">PWM 频率范围</td>
      <td className="hex-style-029"><span className="hex-style-032">10KHz~40KHz</span></td>
      <td className="hex-style-030"></td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">相电流采样</td>
      <td className="hex-style-029">相电流采样电阻</td>
      <td className="hex-style-029">0.004Ω</td>
      <td className="hex-style-030">R36&nbsp;/&nbsp;R37&nbsp;/&nbsp;R38；</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">相电流采样</td>
      <td className="hex-style-029">相电流采样增益</td>
      <td className="hex-style-029">5V/V</td>
      <td className="hex-style-030">R47 = 0Ω，R43 不装；</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">母线电流采样</td>
      <td className="hex-style-029">母线电流采样电阻</td>
      <td className="hex-style-029">0.004Ω</td>
      <td className="hex-style-030">R26；</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">母线电流采样</td>
      <td className="hex-style-029">母线电流放大器增益</td>
      <td className="hex-style-029">20V/V</td>
      <td className="hex-style-030">U11：INA180A1；</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">DRV8323H 配置</td>
      <td className="hex-style-029">VDS 保护阈值</td>
      <td className="hex-style-029">1.88V</td>
      <td className="hex-style-030">R44 = 18KΩ，R48 不装；</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">DRV8323H 配置</td>
      <td className="hex-style-029">栅极驱动电流</td>
      <td className="hex-style-029"><span className="hex-style-032">120mA&nbsp;/&nbsp;240mA（源出&nbsp;/&nbsp;灌入）</span></td>
      <td className="hex-style-030">IDRIVE 为 Hi-Z 配置；R50 = 1MΩ，R46 不装；</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">控制与状态信号</td>
      <td className="hex-style-029">DRV_EN 默认状态</td>
      <td className="hex-style-029">低电平</td>
      <td className="hex-style-030">R29 = 10KΩ 下拉，R15 = 56Ω 串联；</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">控制与状态信号</td>
      <td className="hex-style-029">FAULT 故障输出</td>
      <td className="hex-style-029">低电平有效</td>
      <td className="hex-style-030">R12 = 4.7KΩ 上拉至 +3.3V；</td>
    </tr>
    <tr className="hex-style-016">
      <td className="hex-style-029">控制与状态信号</td>
      <td className="hex-style-029">CAL 电流校准</td>
      <td className="hex-style-029">外部控制输入</td>
      <td className="hex-style-030">CAL 经 R27 = 56Ω 串联后引出至 P2；</td>
    </tr>
  </tbody>
</table>
</div>


<p>&nbsp;</p>

## **7. 使用要求与注意事项**

- 该驱动板为功率驱动板，不包含完整伺服控制算法；
- 不应在未确认电源极性和电压范围的情况下接入主电源；
- 不应将电机相线短接；
- 禁止带电插拔主电源线、电机三相线和 P2 控制排线；
- 调试初期应使用限流电源或串联保护措施，并从受限输出状态开始；
- DRV8323H 完成唤醒后，如果 FAULT 持续为低电平，应停止使用并排查电源、电机接线、负载和过温状态；
- 连续电流和峰值电流等性能指标应以实际 BOM 和测试结果为准；效率应配合外部主控、实际电机及负载进行测试；

<p>&nbsp;</p>

<div className="hex-style-001"></div>

## **机械尺寸**
<img src="Picture/尺寸图.png" alt="尺寸图" className="hex-style-023" />
