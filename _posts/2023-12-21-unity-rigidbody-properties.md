---
layout: post
title: "유니티 물리엔진(Unity Physics) - Rigidbody 속성"
date: 2023-12-21 15:52:25 +0900
categories: unity
image: /assets/img/unity-rigidbody-properties-1.png
---

### **- Physics (물리)**

Physics는 유니티에 속해 있는 물리엔진으로 오브젝트를 간단하게 물리 동작에 맞춰 움직일 수 있다.

Physics 중요 구성은 **Rigidbody 컴포넌트와 Collider 컴포넌트 등** 으로 구성된다.   
Rigidbody 컴포넌트는 물체에 작용하는 중력이나 마찰 등의 힘 계산을 한다. Collider 컴포넌트 물체의 충돌 판정을 한다. 먼저 Rigidbody 컴포넌트 속성값에 대해 알아보자.

### **- Rigidbody 컴포넌트**

![](/assets/img/unity-rigidbody-properties-1.png)

Rigidbody 속성창

- **Mass**게임 오브젝트의 질량(kg)이다. 기본적으로 1로 설정되어 있다.  
  질량은 중력에 영향을 끼치지않으며, 움직임을 느리게하는 저항력에 사용할 수 있다.
- **Drag**  
  오브젝트가 움직일때 공기저항이 미치는 영향을 나타낸다.   
  0이면 공기저항이 없으면 무한대면 오브젝트가 즉시정지한다.  
  값이 낮을수록 감쇠 속도가 느려져 오브젝트가 더 오래 빠르게 움직인다.
- **Angular Drag**  
  오브젝트가 토크로 회전할때 공기 저항이 영향을 미치는 정도를 나타낸다.   
  0이면 공기저항이 없으며 무한대면 오브젝트는 회전을 멈추지 않는다.   
  토크란? 뉴턴의 법칙에 의해 물체가 힘이 작용하면 가속도를 발생하고, 이 가속도는 물체에 작용한 힘의 크기에 비례한다. 토크는 힘이 물체의 회전을 야기하는 경향의 정도를 말한다.
- **Automatic Center Of Mass**리지드바디의 모양과 스케일을 기반으로 물리 시스템의 예측 질량 중심을 사용한다.
- **Automatic Tensor** 연결된 모든 콜라이더를 기반으로 리지드바디에 물리 시스템의 예측 텐서 및 텐서 회전을 사용한다.
- **Use Gravity**게임 오브젝트에 중력을 설정한다.(기본값은 아래 Y 축)  
  비활성화 경우 오브젝트는 중력의 영향을 받지 않아 힘의 방향으로 계속 이동한다.
- **is Kinemeatic**물리효과를 사용하지 않는 기능을 가지고 있다. 활성화하는 경우  중력, 관성, 가속도 등 물리효과들이 적용되지 않는다. 로직구현을 통해 커스텀 물리효과를 줄 수 있다.
- **Interpolate**물리엔진의 움직임이 부자연스러울때 자연스럽게 보정하는 기능이다.  
  **- None:** 현재 기능을 사용하지 않는다.  
  **-** **Interpolate:** 이전 프레임의 움직임을 기반으로 다음 프레임의 움직을 부드럽게 보정한다.  
  **- Extrapolate:** 다음 프레임의 움직임을 추정하여 현재 움직임을 부드럽게 보정한다.
- **Collision Detection**  
  충돌을 탐지하는 기능이다.  
  **- Discrete:** 불연속 충돌 검사를 하고, 모든 콜라이더에 대한 충돌을 계산한다. 즉, 빠르게 움직이고 있는 충돌에 대해 계산한다. Discrete 충돌 검사는 컴퓨터 리소스를 많이 사용하지 않는다.  
  **- Continuous:** 연속적으로 충돌을 체크하는 기능을 가지고 있다. 즉, 배경과 같은 정적인 충돌을 인식할때 사용한다. Discrete 또는 Continuous Speculative보다 컴퓨터 리소스를 많이 사용한다.  
  **- Continous****Dynamic:** 위 두가지 방식을 번갈아 사용하며 속도가 빠른 물체에게 적용시키면 물리효과를 더욱 정밀한 계산한다.  
  **- Continuous Speculative:** 추측성 연속 충돌 검사를 사용하며 Continuous Dynamic 보다 성능적으로 가볍다. 허나, 충돌의 정확도가 떨어진다. 추측성 충돌 검사는 **Discrete**보다 리소스를 많이 사용하지만 **Continuous** 또는 **Continuous Dynamic**보다는 리소스를 덜 사용한다.
- **Constraints**   
  리지드바디의 움직임에 제한을 설정한다.  
  **- Freeze Position:**  X, Y, Z 축에서 이동하는 리지드바디를 선택적으로 중지한다.  
  **- Freeze Rotation:**  X, Y, Z 축에서 회전하는 리지드바디를 선택적으로 중지한다.
- **Layer Overrides**  
  오브젝트가 특정 레이어의 충돌을 무시하거나 특정레이어와만 충돌하도록 할 수 있다.  
  **- Include Layer:** 해당 레이어와의 충돌을 감지한다.  
  **- Exclude Layer:** 해당 레이어와의 충돌을 무시한다.

---

Rigidbody 컴포넌트의 속성을 알아보았다. 속성에 대해 간단하게 설명하고 있으므로 더 자세히 알고싶다면 하기의 사이트를 참고하여 더욱 자세히 알 수 있다. 다음 게시물은 Rigidbody에 대해 간단한 예제를 구현할것이다.

<https://docs.unity3d.com/kr/2022.3/Manual/class-Rigidbody.html>

[Rigidbody 컴포넌트 레퍼런스 - Unity 매뉴얼

Rigidbody 컴포넌트를 사용하여 게임 오브젝트에 리지드바디를 적용합니다.리지드바디는 게임 오브젝트의 움직임과 포지션을 제어하는 물리 기반 방법을 제공합니다.Transform 프로퍼티 대신 시뮬

docs.unity3d.com](https://docs.unity3d.com/kr/2022.3/Manual/class-Rigidbody.html)
