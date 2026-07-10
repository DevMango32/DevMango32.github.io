---
layout: post
title: "[Unity] 유니티 물리엔진(Physics) - Rigidbody 속성"
date: 2023-12-21 15:52:25 +0900
categories: unity
image: /assets/img/unity-rigidbody-properties-1.png
---

* 목차
{:toc}

## Physics (물리 엔진)

Physics는 유니티에 내장된 물리 엔진으로, 오브젝트를 물리 법칙에 맞춰 간단하게 움직일 수 있게 해준다. 핵심 구성은 두 가지다.

- **Rigidbody 컴포넌트** — 물체에 작용하는 중력, 마찰 등의 힘을 계산
- **Collider 컴포넌트** — 물체의 충돌 판정

이번 글에서는 Rigidbody 컴포넌트의 속성값을 알아보자.

## Rigidbody 컴포넌트 속성

![](/assets/img/unity-rigidbody-properties-1.png)
*▲ Rigidbody 속성창*

| 속성 | 설명 |
|---|---|
| Mass | 오브젝트의 질량(kg). 기본값 1. 질량은 중력에 영향을 주지 않으며, 움직임을 느리게 하는 저항력으로 쓰인다 |
| Drag | 이동 시 공기저항. 0이면 저항 없음, 무한대면 즉시 정지. 값이 낮을수록 감쇠가 느려 오래 빠르게 움직인다 |
| Angular Drag | 토크로 회전할 때의 공기저항. 0이면 저항 없음 |
| Automatic Center Of Mass | 모양·스케일 기반으로 물리 시스템이 예측한 질량 중심을 사용 |
| Automatic Tensor | 연결된 콜라이더 기반으로 예측 텐서·텐서 회전을 사용 |
| Use Gravity | 중력 적용 여부 (기본 방향은 -Y축). 끄면 중력 없이 힘의 방향으로 계속 이동 |
| Is Kinematic | 켜면 중력·관성·가속도 등 물리효과가 적용되지 않는다. 스크립트로 커스텀 물리를 구현할 때 사용 |
| Interpolate | 물리 움직임이 부자연스러울 때 보정 |
| Collision Detection | 충돌 탐지 방식 |
| Constraints | 이동(Freeze Position)·회전(Freeze Rotation)을 축별로 제한 |
| Layer Overrides | 특정 레이어와의 충돌만 감지(Include)하거나 무시(Exclude) |

> **토크(Torque)란?** 힘이 물체의 회전을 일으키는 경향의 정도. 물체에 힘이 작용하면 가속도가 발생하고, 이 가속도는 작용한 힘의 크기에 비례한다는 뉴턴의 법칙에 기반한다.
{: .tip}

### Interpolate 옵션

| 옵션 | 설명 |
|---|---|
| None | 보정하지 않음 |
| Interpolate | 이전 프레임의 움직임을 기반으로 부드럽게 보정 |
| Extrapolate | 다음 프레임의 움직임을 추정하여 보정 |

### Collision Detection 옵션

| 옵션 | 설명 |
|---|---|
| Discrete | 불연속 충돌 검사. 모든 콜라이더의 충돌을 계산하며 리소스를 적게 쓴다 |
| Continuous | 연속 충돌 검사. 배경 같은 정적 충돌 인식에 사용. Discrete보다 리소스를 많이 쓴다 |
| Continuous Dynamic | 위 두 방식을 번갈아 사용. 빠른 물체에 적용하면 더 정밀하게 계산한다 |
| Continuous Speculative | 추측성 연속 충돌 검사. Continuous Dynamic보다 가볍지만 정확도가 떨어진다 |

---

Rigidbody 컴포넌트의 속성을 간단히 알아보았다. 더 자세한 내용은 [Unity 공식 매뉴얼 - Rigidbody 컴포넌트 레퍼런스](https://docs.unity3d.com/kr/2022.3/Manual/class-Rigidbody.html)를 참고하자. 다음 글에서는 Rigidbody를 스크립트로 다루는 예제를 구현한다.
