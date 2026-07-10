---
layout: post
title: "[Unreal Engine] 화면 구성 — 메뉴 바, 툴바, Place Actors"
date: 2024-01-25 20:35:28 +0900
categories: unreal
image: /assets/img/unreal-2-editor-layout-1.png
---

* 목차
{:toc}

![](/assets/img/unreal-2-editor-layout-1.png)
*▲ Unreal Engine 화면 구성*

## 메뉴 바 (Menu Bar)

에디터별 명령과 기능에 접근하는 메뉴다. 알아두면 유용한 설정들:

| 설정 | 경로 |
|---|---|
| 언어 변경 | Edit → Editor Preferences → General → Region & Language → Editor Language |
| UE4 레이아웃으로 변경 | Window → Load Layout → UE4 Classic Layout |
| 기본 레이아웃으로 복원 | Window → Load Layout → Default Editor Layout |

## 메인 툴바 (Main Toolbar)

![](/assets/img/unreal-2-editor-layout-2.png)
*▲ Main Toolbar*

### 모드 선택

| 모드 | 기능 |
|---|---|
| 선택 (Select) | 씬의 액터를 선택·조작한다. 클릭·드래그로 위치, 크기, 방향을 변경 |
| 랜드스케이프 (Landscape) | 산, 언덕, 계곡 등 야외 지형을 생성·편집 |
| 폴리지 (Foliage) | 식물·나무 같은 자연 요소를 씬에 페인트하듯 추가 |
| 메시 페인트 (Mesh Paint) | 실제 물체에 물감을 칠하듯, 스태틱 메시에 버텍스 컬러·텍스처를 직접 적용 |
| 프랙처 (Fracture) | 충돌 등으로 부서지는 파괴 가능한 오브젝트 제작 |
| 브러시 (Brush) | 지오메트리 브러시로 씬에 새 형태를 추가하거나 기존 형태를 수정 (조각과 비슷) |

### 콘텐츠

| 버튼 | 기능 |
|---|---|
| 생성 (Create) | 액터 배치(Place Actors) 생성 |
| 블루프린트 (Blueprints) | 블루프린트 생성 |
| 시네마틱 | 레벨 시퀀스(장면을 하나씩 추가하며 제작) 또는 마스터 시퀀스(모든 장면을 만든 뒤 제작) 생성 |

### 플레이 모드 컨트롤

에디터에서 게임을 실행하는 버튼들 — 플레이(Play), 스킵(Skip), 정지(Stop), 탈출(Eject).

### 플랫폼 (Platforms)

데스크탑, 모바일, 콘솔 등 다양한 플랫폼용 프로젝트를 구성·준비·배포하는 옵션이다.

## Place Actors

![](/assets/img/unreal-2-editor-layout-3.png)
*▲ Place Actors*

**액터(Actor)**는 레벨에 배치할 수 있는 모든 개체를 뜻한다. 정적 메시, 사운드, 카메라, 플레이어 캐릭터 등 게임 환경을 구성하는 필수 요소들이다.

| 카테고리 | 내용 |
|---|---|
| Recently Placed | 최근에 배치한 액터 |
| Basic | 기본 3D 객체와 구성 요소 |
| Lights | 주 조명, 스포트라이트 등 다양한 조명 |
| Shapes | 구, 사각형, 원통 등 기본 도형 |
| Cinematic | 카메라 움직임 등 영화적 효과 요소 |
| Visual Effects | 연기, 불꽃, 발광 등 시각 효과 |
| Geometry | 복잡한 기하학적 형태를 만들고 수정하는 도구 |
| Volumes | 안개, 물리 공간 정의 등 특정 영역에 효과 적용 |
| All Classes | 사용 가능한 모든 액터 |

---

지금까지 메뉴 바, 메인 툴바, Place Actors를 알아보았다. 더 자세한 내용은 [공식 문서 - Unreal Editor Interface](https://docs.unrealengine.com/5.3/en-US/unreal-editor-interface/)를 참고하자.
