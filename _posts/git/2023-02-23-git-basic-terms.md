---
layout: post
title: "[Git] Git의 기본 용어 정리"
date: 2023-02-23 11:35:18 +0900
categories: git
image: /assets/img/git-basic-terms-1.png
---

* 목차
{:toc}

![](/assets/img/git-basic-terms-1.png)
*▲ Git 로고*

## 저장소 (Repository)

말 그대로 파일이나 폴더를 저장해 두는 곳이다. Git에서는 두 가지로 나뉜다.

| 종류 | 설명 |
|---|---|
| 원격 저장소 (Remote Repository) | 파일이 전용 서버에서 관리되며 여러 사람이 함께 공유하는 저장소 |
| 로컬 저장소 (Local Repository) | 내 PC에 파일이 저장되는 개인 전용 저장소 |

## Branch

분기점을 뜻한다. 여러 명이 하나의 프로젝트에서 작업할 때, 작업자들은 메인 프로젝트에서 브랜치를 만들어 자신만의 버전으로 작업하고, 끝나면 메인 브랜치("master")에 다시 병합(Merge)한다.

```bash
# Local에서 Branch 생성
git branch [branch이름]

# Local Branch 변경
git switch [branch이름]
git checkout [branch이름]

# 현재 Branch에서 Remote Branch로 push
git push origin [remote에서의 branch이름]

# Remote Branch 목록 최신 상태로 업데이트
git fetch --all --prune
git remote prune origin

# Remote Branch 목록 / Local Branch 목록
git branch -r
git branch

# Local Branch 삭제 / Remote Branch 삭제
git branch -d [로컬branch]
git push origin --delete [리모트branch]
```

## Merge

`HEAD`가 가리키는 브랜치에 다른 브랜치를 병합하는 작업이다. `HEAD`란 현재 작업 중인 브랜치를 가리킨다.

```bash
git merge [branch]
```

## Clone

원격 저장소를 복제하여 로컬 저장소에 저장한다.

```bash
git clone [저장소 주소]
```

## Checkout

브랜치를 이동한다.

```bash
git checkout [branch]
```

## Fetch

원격 저장소에서 코드를 수동으로 내려받는 작업이다. 커밋된 코드를 임시 브랜치로 내려받으며, **현재 브랜치와 자동으로 병합하지 않는다.**

```bash
# issue 주소의 branch를 모두 가져온다
git fetch issue
```

## Pull

원격 저장소의 변경된 데이터를 가져와 **로컬 저장소와 병합까지** 한다.

```bash
git pull [원격 저장소 이름] [브랜치 이름]
```

## Add

변경 내용을 스테이지 영역에 등록하고 tracked(추적) 상태로 변경한다.

```bash
# 현재 디렉토리의 모든 변경 내용을 스테이징
git add .

# 일부 파일만 스테이징
git add [파일명/디렉토리경로]
```

## Commit

변경된 작업 상태를 확정하고 저장소에 저장하는 작업이다.

```bash
# m: 변경 내용
git commit -m "변경내용"

# Commit 전체 취소
git reset HEAD

# Commit 부분 취소
git reset HEAD [파일명]

# Commit 단계별 취소 (예: HEAD~3 → 마지막 3개 취소)
git reset HEAD~[숫자]
```

## Push

로컬 저장소의 내용을 원격 저장소로 업로드하는 과정이다. push하지 않는 한 원격 저장소에 영향을 주지 않으므로 자신의 브랜치에서 자유롭게 작업할 수 있다. 브랜치를 공유하려면 명시적으로 push해야 한다.

```bash
git push [원격 저장소 이름] [브랜치 이름]
```

## Fork

남이 만든 오픈소스 등을 직접 변경하기 위해 복사본을 만드는 과정이다.

## Tag

커밋을 참조하기 쉽도록 알기 쉬운 이름을 붙이는 것이다. 한 번 붙인 태그는 브랜치와 달리 위치가 이동하지 않고 고정된다.

| 종류 | 설명 |
|---|---|
| Lightweight tag | 이름 정보만 갖는 태그 |
| Annotated tag | 상세한 정보를 포함하는 주석 태그 |
