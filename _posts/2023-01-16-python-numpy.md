---
layout: post
title: "[Python] NumPy란?"
date: 2023-01-16 17:02:01 +0900
categories: python
image: /assets/img/python-numpy-1.png
---

* 목차
{:toc}

![](/assets/img/python-numpy-1.png)
*▲ NumPy 로고*

## NumPy란?

**NumPy(넘파이)**는 C언어로 구현된 수치해석용 파이썬 라이브러리다. 다차원 배열 자료구조인 `ndarray` 클래스를 지원하며, 벡터와 행렬을 다루는 선형대수 계산에 주로 사용된다.

## 왜 NumPy를 쓰는가

파이썬의 리스트는 여러 값을 담을 수 있어 활용도가 높지만, 데이터 처리에 필요한 리스트 간 연산 기능이 부족하고 속도도 느리다.

넘파이는 C언어 기반 배열 구조라 메모리를 적게 차지하고, 대용량 배열·행렬 연산을 빠르게 수행한다. 여기에 고차원 수학 연산자와 풍부한 내장 함수까지 갖추고 있다.

## 사용 방법

넘파이는 다음과 같이 불러온다. `as` 뒤의 이름은 라이브러리를 대신 부를 별칭이다.

```python
import numpy as np
```

## 참고

공식 문서: [NumPy Reference](https://numpy.org/doc/stable/reference/index.html)
