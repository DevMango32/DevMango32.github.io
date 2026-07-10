---
layout: post
title: "Python - Numpy의 내장 객체, 배열 생성 하기"
date: 2023-12-29 12:51:58 +0900
categories: python
---

* 목차
{:toc}

넘파이에서 주로 사용되는 함수를 알아보도록하자

백문이 불여일견

---

#### Numpy의 내장 객체들

```python
import numpy as np

a = np.array([1, 2, 3, 4, 5], dtype=float)

print("shape: ", a.shape)  # 배열의 형태/크기
print("ndim: ", a.ndim)    # 배열의 차원 수
print("dtype: ", a.dtype)  # 배열 내 원소의 데이터 타입
print("itemsize: ", a.itemsize)  # 배열 내 각 원소가 차지하는 메모리 크기
print("size: ", a.size)    # 배열 내 원소의 총 개수
print("strides: ", a.strides)  # 배열 각 차원별로 다음 원소로 점프하는데 필요한 바이트 단위의 거리
print("data: ", a.data)    # 배열의 실제 원소를 포함하는 버퍼의 메모리 주소

'''
출력 결과:
shape: (5,)
ndim: 1
dtype: float64
itemsize: 8
size: 5
strides: (8,)
data: <memory at 0x7e19167bc1c0>
'''
```

#### Numpy 배열 생성

```python
import numpy as np

## 1차원 배열 생성
my1DArray = np.array([1, 2, 3, 4])

## 2차원 배열 생성
my2DArray = np.array([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])

## 3차원 배열 생성
my3Darray = np.array([[[1, 2, 3, 4], [5, 6, 7, 8]], [[ 9, 10, 11, 12], [13, 14, 15, 16]]])
```

#### 특정 값으로 배열 생성

```python
## 1로 채워진 배열 생성
ones = np.ones((3,4))

## 0으로 채워진 배열 생성
zeros = np.zeros((2,3,4),dtype=np.int16)

## 초기화 되지 않는 값으로 채워진 배열 생성(쓰레기값)
emptyArray = np.empty((3,2))

## 지정한 값으로 채워진 배열 생성
fullArray = np.full((2,2),7)
```
