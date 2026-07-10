---
layout: post
title: "2. Unreal - 화면 구성(메뉴바, 툴바, Place Actor)"
date: 2024-01-25 20:35:28 +0900
categories: unreal
image: /assets/img/unreal-2-editor-layout-1.png
---

![](/assets/img/unreal-2-editor-layout-1.png)

Unreal Engine 화면 구성

## **1. Menu Bar(메뉴 바)**

이 메뉴를 사용하여 에디터별 명령과 기능에 접근한다.

- 알아두면 유용한 설정들

- **언어변경:** Edit -> Editor Preferences-> General -> Region & lanuage -> Editor Language
- **언리얼엔진4 레이아웃 설정:** Window -> Load Layout -> UE4 Classic Layout
- **디폴트 레이아웃 설정:** Window -> Load Layout -> Default Classic Layout

## **2. Main Toolbar(메인 툴바)**

![](/assets/img/unreal-2-editor-layout-2.png)

Main Toolbar

**1. 모드 선택**

- **선택(Select Editing):** 씬(scene) 내의 액터(actor)들을 선택하고 조작하는 기능을 제공한다. 액터들을 클릭하고 드래그하여 위치를 조정하거나, 크기와 방향을 변경하는 등의 작업을 할 수 있다.
- **랜드스케이프(Landscape Editing):** 광활한 야외 환경을 만들기 위한 특화된 도구 모음이다. 랜드스케이프 터레인을 편집하여 산, 언덕, 계곡 등 다양한 지형을 생성하고 조정한다.
- **폴리지(Foliage Editing):**식물이나 나무 같은 자연 요소를 씬에 추가하고 페인트하는 데 사용된다. 자연스러운 환경을 만드는 데 필수적인 모드이다.
- **메시 페인트(Mesh Painting):** 뷰포트에서 직접 스태틱 메시 액터들에게 버텍스 컬러와 텍스처를 적용하는 모드이다. 조금 더 단순하게 설명하자면, 메시 페인트는 마치 실제 물체에 물감을 칠하는 것처럼, 3D 모델에 직접 색상과 질감을 입히는 과정이다.
- **프랙처(Fracture Editing):**파괴 가능한 오브젝트와 환경을 만드는 데 사용되는 모드이다. 이 모드를 통해 오브젝트가 충돌이나 다른 상호작용에 의해 부서지는 효과를 만들 수 있다.
- **브러시(Brush Editing):**지오메트리 브러시를 사용하여 씬 내의 기하학적 형태를 수정하거나 추가하는 모드이다. 더 쉽게 설명하자면 브러시 편집은 마치 그림을 그리거나 조각하는 것과 비슷하다. 3D 환경에서 사용자는 지오메트리 브러시를 이용해 장면에 새로운 모양을 추가하거나 기존의 모양을 변경할 수 있다.

**2. 콘텐츠**

- **생성(Create):** Place Actors (액터 배치)를 생성한다.
- **블루프린트(Blueprints):** 블루프린트를 생성한다.
- **시네마틱:** 레벨 시퀀스 또는 마스터 시퀀스 시네마틱을 생성한다. **레벨 시퀀스는** 장면을 하나하나 추가하면서 제작하는 방식이다. **마스터 시퀀스는** 모든 장면을 만들어 놓은 다음에 제작하는 방식이다.

**3. 플레이 모드 컨트롤**

에디터에서 게임을 실행하는 데 필요한 바로가기 버튼(플레이(Play), 스킵(Skip), 정지(Stop), 탈출(Eject))이 있다.

**4.  플랫폼(Platforms) 메뉴**

데스크탑, 모바일, 콘솔 등 다양한 플랫폼을 위한 프로젝트를 구성, 준비, 배포하는 데 사용할 수 있는 옵션이다.

## **3. Place Actors**

![](/assets/img/unreal-2-editor-layout-3.png)

Place Actors

**"액터(Actors)"**는 게임 개발이나 3D 시뮬레이션에서 사용되는 용어로, 레벨에 배치할 수 있는 모든 개체를 의미한다. 액터는 게임 환경을 만드는 데 필수적인 요소들로, 정적 메시(고정된 3D 모델), 사운드(소리 효과), 카메라, 플레이어 캐릭터(게임에서 사용자가 조종하는 캐릭터) 등을 포함한다.

- **Recently Placed:** 최근에 장면에 추가된 액터들을 보여준다.
- **Basic:** 기본적인 3D 객체와 구성 요소들을 포함한다.
- **Lights:** 다양한 유형의 조명을 포함한다. 예를 들어, 전반적인 분위기를 조성하는 주 조명이나 특정 부분을 강조하는 스포트라이트 등이 있다.
- **Shapes:** 기본적인 모형, 예를들어 구, 사각형, 원통 등을 포함한다.
- **Cinematic:** 영화 같은 효과를 만들기 위한 요소들이 포함되어 있으며, 카메라 움직임이나 특정 시네마틱 효과를 포함한다.
- **Visual Effects:** 시각적으로 인상적인 효과들, 예를 들어 연기, 불꽃, 빛나는 효과 등을 포함한다.
- **Geometry:** 복잡한 기하학적 형태를 생성하고 수정하는데 사용되는 도구와 요소들을 포함한다.
- **Volumes:** 장면 내에서 특정한 물리적, 시각적 효과를 적용하는 데 사용된다. 예를 들어, 안개 효과나 물리적 공간을 정의하는데 사용된다.
- **All Classes:** 사용 가능한 모든 액터 카테고리를 포괄한다.

---

지금까지 메뉴바, 메뉴 툴바, Place Actor에 대해 알아보았다.

더 자세한 내용을 확인하고 싶다면 하단의 링크를 확인하시기 바랍니다.

<https://docs.unrealengine.com/5.3/en-US/unreal-editor-interface/>

[Unreal Editor Interface

Overview of the key elements of the Unreal Editor interface

docs.unrealengine.com](https://docs.unrealengine.com/5.3/en-US/unreal-editor-interface/)
