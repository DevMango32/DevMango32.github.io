---
layout: post
title: "[GIT] Git의 기본 용어"
date: 2023-02-23 11:35:18 +0900
categories: git
image: /assets/img/git-basic-terms-1.png
---

* 목차
{:toc}

![](/assets/img/git-basic-terms-1.png)
*▲ GIT Logo*

#### Git의 기본 용어

- **저장소(Reposity)**   
  - 저장소(Git repository)란 말그대로 파일이나 폴더를 저장해 두는 곳입니다.   
  - GIT에서는 원격 저장소와 로컬 저장소로 나뉩니다.  
    원격 저장소(Remote Repository): 파일이 전용서버에서 관리되며 여러 사람이 함께 공유하기 위한 저장소입니다.   
    로컬 저장소(Local Repository): 내 PC에 파일이 저장되는 개인 전용 저장소입니다.
- **Branch**  
  - 분기점을 의미한다.  
  - 여러 명이 하나의 프로젝트에서 작업할때, 일반적으로 작업자들은 메인 프로젝트의 branch를 통해 자신만의 버전을 만든다. 작업을 끝낸 후, 프로젝트의 메인 디렉토리인 “master”에 브랜치를 다시 “Merge”한다.  
    
  -Branch 명령어

```bash
## Local에서 Branch 생성
	git branch [branch이름]
    
## Local Branch 변경
	git switch [branch이름]
    	git checkout [branch이름]

## 현재 Branch에서 Remote Branch로 push
	git push origin [remote에서branch이름]
  
## Remote Branch 목록 최신상태로 업데이트
	git fetch --all --prune
    	git remote prune origin

## Remote Branch 목록
	git branch -r
    
## Local Branch 목록
	git branch
    
## Local Branch 삭제
	git branch -d [로컬branch_name]
    
## Remote Branch 삭제
	git push origin --delete [리모트branch_name]
```

- **Merge**  
  -' HEAD'가 가리키고 있는  Branch에 병합하는 작업을 의미한다. 'HEAD'란 현재 작업중인 Branch를 가리킨다.

```bash
git merge [branch]
```

- **Clone**  
  원격 저장소를 복제하여 로컬 저장소에 저장한다.

```bash
git clone [레파지토리 주소]
```

- **checkout**Branch를 이동한다.

```bash
git checkout [branch]
```

- **fetch**  
  원격 저장소에서 코드를 수동으로 내려받는 작업이다.  
  원격 저장소에서 커밋된 코드를 임시 브랜치로 내려받는다. 내려 받은 후 현재 브랜치와 자동 병합하지 않는다.

```bash
## issue 주소의 branch를 모두 가져온다.
git fetch issue
```

- **pull**  
   원격 저장소의 변경된 데이터를 가져와 로컬 저장소와 병합합니다.

```bash
git pull [원격 저장소 이름] [브랜치 이름]
```

- **add**스테이지 영역에 등록하고 tracked(추적) 상태로 변경한다.

```bash
## 현재 디렉토리의 모든 변경 내용을 스테이징 영역으로 넘긴다.
git add .

## 작업 디렉토리의 변경 내용의 일부만 스테이징 영역으로 넘긴다.
git add [파일명/디렉토리경로]
```

- **push**  
  로컬 저장소에서 원격 저장소로 파일을 업로드하는 과정이다.  push 하지 않는 한 원격 저장소에 영향을 주지 않고 자신만의 브랜치에서 자유롭게 작업 할 수 있습니다. 그러나 로컬 저장소에서 작성한 브랜치를 공유하려면 명시적으로 원격 저장소로 push 해야 합니다.

```bash
git push [원격 저장소 이름] [브랜치 이름]
```

- **Commit**  
  현재 변경된 작업 상태를 점검을 마치면 확정하고 저장소에 저장하는 작업입니다.

```bash
## m: 변경 내용
git commit -m "변경내용"

## Commit 전체취소
git reset HEAD

## Commit 부분취소
git reset HEAD [파일명]

## Commit 단계별 취소
## 예) git reset Head~3 -> 마지막 3개의 Commit을 취소
git reset HEAD~[숫자]
```

- **Fork**  
  남이 만든 오픈소스 등을 직접 변경하기위해  복사본을 만드는 과정입니다.

- **Tag**  
  커밋을 참조하기 쉽도록 알기 쉬운 이름을 붙이는 것을 말합니다. 한 번 붙인 태그는 브랜치처럼 위치가 이동하지 않고 고정됩니다. Git 에서는 일반적으로 이름 정보만을 갖는 '태그(Lightweight tag)'와 보다 상세한 정보를 포함하는 '주석 태그(Annotated tag)', 이 두 가지 태그를 사용할 수 있습니다.
